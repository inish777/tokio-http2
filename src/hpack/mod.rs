// Copyright 2016 LambdaStack All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#![allow(unused_imports)]
#![allow(unused_mut)]
#![allow(unused_variables)]
#![allow(dead_code)]

//! This library module provides the required HPACK compression used for HTTP/2 headers.

//! A module implementing HPACK functionality. Exposes a simple API for
//! performing the encoding and decoding of header sets, according to the
//! HPACK spec.

use std::fmt;
use std::iter;
use std::slice;
use std::collections::VecDeque;
use std::collections::vec_deque;

// Re-export the main HPACK API entry points.
pub use self::decoder::Decoder;
pub use self::encoder::Encoder;

pub mod encoder;
pub mod decoder;
pub mod huffman;

/// An `Iterator` through elements of the `DynamicTable`.
///
/// The implementation of the iterator itself is very tightly coupled
/// to the implementation of the `DynamicTable`.
///
/// This iterator returns tuples of slices. The tuples themselves are
/// constructed as new instances, containing a borrow from the `Vec`s
/// representing the underlying Headers.
struct DynamicTableIter<'a> {
    /// Stores an iterator through the underlying structure that the
    /// `DynamicTable` uses
    inner: vec_deque::Iter<'a, (Vec<u8>, Vec<u8>)>,
}

impl<'a> Iterator for DynamicTableIter<'a> {
    type Item = (&'a [u8], &'a [u8]);

    fn next(&mut self) -> Option<(&'a [u8], &'a [u8])> {
        match self.inner.next() {
            Some(ref header) => Some((&header.0, &header.1)),
            None => None,
        }
    }
}

/// A struct representing the dynamic table that needs to be maintained by the
/// coder.
///
/// The dynamic table contains a number of recently used headers. The size of
/// the table is constrained to a certain number of octets. If on insertion of
/// a new header into the table, the table would exceed the maximum size,
/// headers are evicted in a FIFO fashion until there is enough room for the
/// new header to be inserted. (Therefore, it is possible that though all
/// elements end up being evicted, there is still not enough space for the new
/// header: when the size of this individual header exceeds the maximum size of
/// the table.)
///
/// The current size of the table is calculated, based on the IETF definition,
/// as the sum of sizes of each header stored within the table, where the size
/// of an individual header is
/// `len_in_octets(header_name) + len_in_octets(header_value) + 32`.
///
/// Note: the maximum size of the dynamic table does not have to be equal to
/// the maximum header table size as defined by a "higher level" protocol
/// (such as the `SETTINGS_HEADER_TABLE_SIZE` setting in HTTP/2), since HPACK
/// can choose to modify the dynamic table size on the fly (as long as it keeps
/// it below the maximum value set by the protocol). So, the `DynamicTable`
/// only cares about the maximum size as set by the HPACK {en,de}coder and lets
/// *it* worry about making certain that the changes are valid according to
/// the (current) constraints of the protocol.
struct DynamicTable {
    table: VecDeque<(Vec<u8>, Vec<u8>)>,
    size: usize,
    max_size: usize,
}

impl DynamicTable {
    /// Creates a new empty dynamic table with a default size.
    fn new() -> DynamicTable {
        // The default maximum size corresponds to the default HTTP/2
        // setting
        DynamicTable::with_size(4096)
    }

    /// Creates a new empty dynamic table with the given maximum size.
    fn with_size(max_size: usize) -> DynamicTable {
        DynamicTable {
            table: VecDeque::new(),
            size: 0,
            max_size: max_size,
        }
    }

    /// Returns the current size of the table in octets, as defined by the IETF
    /// HPACK spec.
    fn get_size(&self) -> usize {
        self.size
    }

    /// Returns an `Iterator` through the headers stored in the `DynamicTable`.
    ///
    /// The iterator will yield elements of type `(&[u8], &[u8])`,
    /// corresponding to a single header name and value. The name and value
    /// slices are borrowed from their representations in the `DynamicTable`
    /// internal implementation, which means that it is possible only to
    /// iterate through the headers, not mutate them.
    fn iter(&self) -> DynamicTableIter {
        DynamicTableIter {
            inner: self.table.iter(),
        }
    }

    /// Sets the new maximum table size.
    ///
    /// If the current size of the table is larger than the new maximum size,
    /// existing headers are evicted in a FIFO fashion until the size drops
    /// below the new maximum.
    fn set_max_table_size(&mut self, new_max_size: usize) {
        self.max_size = new_max_size;
        // Make the table size fit within the new constraints.
        self.consolidate_table();
    }

    /// Returns the maximum size of the table in octets.
    fn get_max_table_size(&self) -> usize {
        self.max_size
    }

    /// Add a new header to the dynamic table.
    ///
    /// The table automatically gets resized, if necessary.
    ///
    /// Do note that, under the HPACK rules, it is possible the given header
    /// is not found in the dynamic table after this operation finishes, in
    /// case the total size of the given header exceeds the maximum size of the
    /// dynamic table.
    fn add_header(&mut self, name: Vec<u8>, value: Vec<u8>) {
        // This is how the HPACK spec makes us calculate the size.  The 32 is
        // a magic number determined by them (under reasonable assumptions of
        // how the table is stored).
        self.size += name.len() + value.len() + 32;
        // debug!("New dynamic table size {}", self.size);
        // Now add it to the internal buffer
        self.table.push_front((name, value));
        // ...and make sure we're not over the maximum size.
        self.consolidate_table();
        // debug!("After consolidation dynamic table size {}", self.size);
    }

    /// Consolidates the table entries so that the table size is below the
    /// maximum allowed size, by evicting headers from the table in a FIFO
    /// fashion.
    fn consolidate_table(&mut self) {
        while self.size > self.max_size {
            {
                let last_header = match self.table.back() {
                    Some(x) => x,
                    None => {
                        // Can never happen as the size of the table must reach
                        // 0 by the time we've exhausted all elements.
                        panic!("Size of table != 0, but no headers left!");
                    }
                };
                self.size -= last_header.0.len() + last_header.1.len() + 32;
            }
            self.table.pop_back();
        }
    }

    /// Returns the number of headers in the dynamic table.
    ///
    /// This is different than the size of the dynamic table.
    fn len(&self) -> usize {
        self.table.len()
    }

    /// Converts the current state of the table to a `Vec`
    fn to_vec(&self) -> Vec<(Vec<u8>, Vec<u8>)> {
        let mut ret: Vec<(Vec<u8>, Vec<u8>)> = Vec::new();
        for elem in self.table.iter() {
            ret.push(elem.clone());
        }

        ret
    }

    /// Returns a reference to the header at the given index, if found in the
    /// dynamic table.
    fn get(&self, index: usize) -> Option<&(Vec<u8>, Vec<u8>)> {
        self.table.get(index)
    }
}

impl fmt::Debug for DynamicTable {
    fn fmt(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
        write!(formatter, "{:?}", self.table)
    }
}

/// Represents the type of the static table, as defined by the HPACK spec.
type StaticTable<'a> = &'a [(&'a [u8], &'a [u8])];

/// Implements an iterator through the entire `HeaderTable`.
///
/// Yields first the elements from the static table, followed by elements from
/// the dynamic table, with each element being of type `(&[u8], &[u8])`.
///
/// This struct is tightly coupled to the implementation of the `HeaderTable`,
/// but its clients are shielded from all that and have a convenient (and
/// standardized) interface to iterate through all headers of the table.
///
/// The declaration of the inner iterator that is wrapped by this struct is a
/// monstrosity, that is required because "abstract return types" don't exist
/// yet ([https://github.com/rust-lang/rfcs/pull/105]).
struct HeaderTableIter<'a> {
    // Represents a chain of static-table -> dynamic-table elements.
    // The mapper is required to transform the elements yielded from the static
    // table to a type that matches the elements yielded from the dynamic table.
    inner: iter::Chain<
            iter::Map<
                slice::Iter<'a, (&'a [u8], &'a [u8])>,
                fn((&'a (&'a [u8], &'a [u8]))) -> (&'a [u8], &'a [u8])>,
            DynamicTableIter<'a>>,
}

impl<'a> Iterator for HeaderTableIter<'a> {
    type Item = (&'a [u8], &'a [u8]);

    fn next(&mut self) -> Option<(&'a [u8], &'a [u8])> {
        // Simply delegates to the wrapped iterator that is constructed by the
        // `HeaderTable` and passed into the `HeaderTableIter`.
        self.inner.next()
    }
}

/// A helper function that maps a borrowed tuple containing two borrowed slices
/// to just a tuple of two borrowed slices.
///
/// This helper function is needed because in order to define the type
/// `HeaderTableIter` we need to be able to refer to a real type for the Fn
/// template parameter, which means that when instantiating an instance, a
/// closure cannot be passed, since it cannot be named.
fn static_table_mapper<'a>(h: &'a (&'a [u8], &'a [u8]))
        -> (&'a [u8], &'a [u8]) {
    *h
}

/// The struct represents the header table obtained by merging the static and
/// dynamic tables into a single index address space, as described in section
/// `2.3.3.` of the HPACK spec.
struct HeaderTable<'a> {
    static_table: StaticTable<'a>,
    dynamic_table: DynamicTable,
}

impl<'a> HeaderTable<'a> {
    /// Creates a new header table where the static part is initialized with
    /// the given static table.
    pub fn with_static_table(static_table: StaticTable<'a>) -> HeaderTable<'a> {
        HeaderTable {
            static_table: static_table,
            dynamic_table: DynamicTable::new(),
        }
    }

    /// Returns an iterator through *all* headers stored in the header table,
    /// i.e. it includes both the ones found in the static table and the
    /// dynamic table, in the order of their indices in the single address
    /// space (first the headers in the static table, followed by headers in
    /// the dynamic table).
    ///
    /// The type yielded by the iterator is `(&[u8], &[u8])`, where the tuple
    /// corresponds to the header name, value pairs in the described order.
    pub fn iter(&'a self) -> HeaderTableIter<'a> {
        HeaderTableIter {
            inner: self.static_table.iter()
                                    .map(static_table_mapper as
                                            fn((&'a (&'a [u8], &'a [u8]))) -> (&'a [u8], &'a [u8]))
                                    .chain(self.dynamic_table.iter()),
        }
    }

    /// Adds the given header to the table. Of course, this means that the new
    /// header is added to the dynamic part of the table.
    ///
    /// If the size of the new header is larger than the current maximum table
    /// size of the dynamic table, the effect will be that the dynamic table
    /// gets emptied and the new header does *not* get inserted into it.
    #[inline]
    pub fn add_header(&mut self, name: Vec<u8>, value: Vec<u8>) {
        self.dynamic_table.add_header(name, value);
    }

    /// Returns a reference to the header (a `(name, value)` pair) with the
    /// given index in the table.
    ///
    /// The table is 1-indexed and constructed in such a way that the first
    /// entries belong to the static table, followed by entries in the dynamic
    /// table. They are merged into a single index address space, though.
    ///
    /// This is according to the [HPACK spec, section 2.3.3.]
    /// (http://http2.github.io/http2-spec/compression.html#index.address.space)
    pub fn get_from_table(&self, index: usize)
            -> Option<(&[u8], &[u8])> {
        // The IETF defined table indexing as 1-based.
        // So, before starting, make sure the given index is within the proper
        // bounds.
        let real_index = if index > 0 {
            index - 1
        } else {
            return None
        };

        if real_index < self.static_table.len() {
            // It is in the static table so just return that...
            Some(self.static_table[real_index])
        } else {
            // Maybe it's in the dynamic table then?
            let dynamic_index = real_index - self.static_table.len();
            if dynamic_index < self.dynamic_table.len() {
                match self.dynamic_table.get(dynamic_index) {
                    Some(&(ref name, ref value)) => {
                        Some((name, value))
                    },
                    None => None
                }
            } else {
                // Index out of bounds!
                None
            }
        }
    }

    /// Finds the given header in the header table. Tries to match both the
    /// header name and value to one of the headers in the table. If no such
    /// header exists, then falls back to returning one that matched only the
    /// name.
    ///
    /// # Returns
    ///
    /// An `Option`, where `Some` corresponds to a tuple representing the index
    /// of the header in the header tables (the 1-based index that HPACK uses)
    /// and a `bool` indicating whether the value of the header also matched.
    pub fn find_header(&self, header: (&[u8], &[u8])) -> Option<(usize, bool)> {
        // Just does a simple scan of the entire table, searching for a header
        // that matches both the name and the value of the given header.
        // If no such header is found, then any one of the headers that had a
        // matching name is returned, with the appropriate return flag set.
        //
        // The tables are so small that it is unlikely that the linear scan
        // would be a major performance bottlneck. If it does prove to be,
        // though, a more efficient lookup/header representation method could
        // be devised.
        let mut matching_name: Option<usize> = None;
        for (i, h) in self.iter().enumerate() {
            if header.0 == h.0 {
                if header.1 == h.1 {
                    // Both name and value matched: returns it immediately
                    return Some((i + 1, true));
                }
                // If only the name was valid, we continue scanning, hoping to
                // find one where both the name and value match. We remember
                // this one, in case such a header isn't found after all.
                matching_name = Some(i + 1);
            }
        }

        // Finally, if there's no header with a matching name and value,
        // return one that matched only the name, if that *was* found.
        match matching_name {
            Some(i) => Some((i, false)),
            None => None,
        }
    }
}

/// The table represents the static header table defined by the HPACK spec.
/// (HPACK, Appendix A)
static STATIC_TABLE: &'static [(&'static [u8], &'static [u8])] = &[
  (b":authority", b""),
  (b":method", b"GET"),
  (b":method", b"POST"),
  (b":path", b"/"),
  (b":path", b"/index.html"),
  (b":scheme", b"http"),
  (b":scheme", b"https"),
  (b":status", b"200"),
  (b":status", b"204"),
  (b":status", b"206"),
  (b":status", b"304"),
  (b":status", b"400"),
  (b":status", b"404"),
  (b":status", b"500"),
  (b"accept-", b""),
  (b"accept-encoding", b"gzip, deflate"),
  (b"accept-language", b""),
  (b"accept-ranges", b""),
  (b"accept", b""),
  (b"access-control-allow-origin", b""),
  (b"age", b""),
  (b"allow", b""),
  (b"authorization", b""),
  (b"cache-control", b""),
  (b"content-disposition", b""),
  (b"content-encoding", b""),
  (b"content-language", b""),
  (b"content-length", b""),
  (b"content-location", b""),
  (b"content-range", b""),
  (b"content-type", b""),
  (b"cookie", b""),
  (b"date", b""),
  (b"etag", b""),
  (b"expect", b""),
  (b"expires", b""),
  (b"from", b""),
  (b"host", b""),
  (b"if-match", b""),
  (b"if-modified-since", b""),
  (b"if-none-match", b""),
  (b"if-range", b""),
  (b"if-unmodified-since", b""),
  (b"last-modified", b""),
  (b"link", b""),
  (b"location", b""),
  (b"max-forwards", b""),
  (b"proxy-authenticate", b""),
  (b"proxy-authorization", b""),
  (b"range", b""),
  (b"referer", b""),
  (b"refresh", b""),
  (b"retry-after", b""),
  (b"server", b""),
  (b"set-cookie", b""),
  (b"strict-transport-security", b""),
  (b"transfer-encoding", b""),
  (b"user-agent", b""),
  (b"vary", b""),
  (b"via", b""),
  (b"www-authenticate", b""),
];
