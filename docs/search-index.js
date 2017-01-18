var searchIndex = {};
searchIndex["tokio_http2"] = {"doc":"HTTP/1.1:\nThis library provides an HTTP library built on Futures and the Tokio Project for Async I/O.\nThis version supports Pipelining for HTTP/1.1.","items":[[3,"Url","tokio_http2","A parsed URL record.",null,null],[3,"Request","","",null,null],[12,"logger","","Optional Logger associated with a given request",0,null],[3,"Response","","",null,null],[12,"headers","","",1,null],[12,"body","","",1,null],[12,"status_message","","",1,null],[12,"code","","",1,null],[12,"message","","",1,null],[0,"http","","",null,null],[3,"Request","tokio_http2::http","",null,null],[12,"logger","","Optional Logger associated with a given request",0,null],[3,"Response","","",null,null],[12,"headers","","",1,null],[12,"body","","",1,null],[12,"status_message","","",1,null],[12,"code","","",1,null],[12,"message","","",1,null],[3,"HttpProto","","Proto and Codec can have STATE so you can add features to these two and then pass them to\nTcpServer.",null,null],[12,"logger","","",2,null],[12,"router","","",2,null],[3,"HttpCodec","","",null,null],[11,"clone","tokio_http2","",0,null],[11,"read","","",0,null],[11,"content_length","","",0,null],[11,"content_type","","",0,null],[11,"content_type_metadata","","",0,null],[11,"content_type_all","","",0,null],[11,"host","","",0,null],[11,"handler","","",0,null],[11,"method","","",0,null],[11,"password","","",0,null],[11,"path","","",0,null],[11,"payload","","",0,null],[11,"query","","",0,null],[11,"urldecode","","",0,null],[11,"scheme","","",0,null],[11,"set_scheme","","",0,null],[11,"set_remote_addr","","",0,null],[11,"remote_addr","","",0,null],[11,"request_line","","",0,null],[11,"uri","","",0,null],[11,"user_agent","","",0,null],[11,"user_name","","",0,null],[11,"version","","",0,null],[11,"header","","",0,null],[11,"headers","","",0,null],[11,"fmt","","",0,null],[11,"multipart_boundary","","",0,null],[11,"body","","",0,null],[11,"clone","","",1,null],[11,"fmt","","",1,null],[11,"new","","",1,{"inputs":[],"output":{"name":"response"}}],[11,"with_body","","",1,null],[11,"with_header","","",1,null],[11,"with_status","","",1,null],[11,"status_code","","",1,null],[11,"content_length","","",1,null],[11,"header","","",1,null],[0,"buffer","tokio_http2::http","",null,null],[3,"Buffer","tokio_http2::http::buffer","",null,null],[17,"MAX_BUFFER_SIZE","","",null,null],[11,"fmt","","",3,null],[11,"default","","",3,{"inputs":[],"output":{"name":"buffer"}}],[11,"clone","","",3,null],[11,"new","","",3,{"inputs":[],"output":{"name":"buffer"}}],[11,"reset","","",3,null],[11,"len","","",3,null],[11,"is_max_size","","",3,null],[11,"is_empty","","",3,null],[11,"bytes","","",3,null],[11,"consume","","",3,null],[11,"consume_leading_lines","","",3,null],[11,"read_from","","",3,null],[11,"write_into","","",3,null],[11,"write","","",3,null],[11,"default","tokio_http2::http","",2,{"inputs":[],"output":{"name":"httpproto"}}],[11,"bind_transport","","",2,null],[11,"decode","","HttpCodec::decode can be modified to fit whatever is needed.",4,null],[11,"encode","","",4,null],[0,"version","tokio_http2","HTTP Versions enum",null,null],[4,"HttpVersion","tokio_http2::version","Represents a version of the HTTP spec.",null,null],[13,"Http09","","`HTTP/0.9`",5,null],[13,"Http10","","`HTTP/1.0`",5,null],[13,"Http11","","`HTTP/1.1`",5,null],[13,"H2","","`HTTP/2.0` over TLS",5,null],[13,"H2c","","`HTTP/2.0` over cleartext",5,null],[11,"eq","","",5,null],[11,"partial_cmp","","",5,null],[11,"clone","","",5,null],[11,"cmp","","",5,null],[11,"hash","","",5,null],[11,"fmt","","",5,null],[11,"fmt","","",5,null],[11,"default","","",5,{"inputs":[],"output":{"name":"httpversion"}}],[0,"error","tokio_http2","Error and Result module.",null,null],[4,"ParseError","tokio_http2::error","Errors that can occur during parsing.",null,null],[13,"EmptyHost","","",6,null],[13,"IdnaError","","",6,null],[13,"InvalidPort","","",6,null],[13,"InvalidIpv4Address","","",6,null],[13,"InvalidIpv6Address","","",6,null],[13,"InvalidDomainCharacter","","",6,null],[13,"RelativeUrlWithoutBase","","",6,null],[13,"RelativeUrlWithCannotBeABaseBase","","",6,null],[13,"SetHostOnCannotBeABaseUrl","","",6,null],[13,"Overflow","","",6,null],[4,"Error","","A set of errors that can occur parsing HTTP streams.",null,null],[13,"Method","","An invalid `Method`, such as `GE,T`.",7,null],[13,"Uri","","An invalid `RequestUri`, such as `exam ple.domain`.",7,null],[13,"Version","","An invalid `HttpVersion`, such as `HTP/1.1`",7,null],[13,"Header","","An invalid `Header`.",7,null],[13,"TooLarge","","A message head is too large to be reasonable.",7,null],[13,"Incomplete","","A message reached EOF, but is not complete.",7,null],[13,"Status","","An invalid `Status`, such as `1337 ELITE`.",7,null],[13,"Timeout","","A timeout occurred waiting for an IO event.",7,null],[13,"Io","","An `io::Error` that occurred while trying to read or write to a network stream.",7,null],[13,"Utf8","","An error from a SSL library.\nParsing a field as string failed",7,null],[6,"Result","","Result type often returned from methods that can have hyper `Error`s.",null,null],[11,"fmt","","",7,null],[11,"fmt","","",7,null],[11,"description","","",7,null],[11,"cause","","",7,null],[11,"from","","",7,{"inputs":[{"name":"ioerror"}],"output":{"name":"error"}}],[11,"from","","",7,{"inputs":[{"name":"parseerror"}],"output":{"name":"error"}}],[11,"from","","",7,{"inputs":[{"name":"utf8error"}],"output":{"name":"error"}}],[11,"from","","",7,{"inputs":[{"name":"fromutf8error"}],"output":{"name":"error"}}],[11,"from","","",7,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[0,"status","tokio_http2","HTTP status codes",null,null],[4,"StatusCode","tokio_http2::status","An HTTP status code (`status-code` in RFC 7230 et al.).",null,null],[13,"Continue","","100 Continue\n[[RFC7231, Section 6.2.1](https://tools.ietf.org/html/rfc7231#section-6.2.1)]",8,null],[13,"SwitchingProtocols","","101 Switching Protocols\n[[RFC7231, Section 6.2.2](https://tools.ietf.org/html/rfc7231#section-6.2.2)]",8,null],[13,"Processing","","102 Processing\n[[RFC2518](https://tools.ietf.org/html/rfc2518)]",8,null],[13,"Ok","","200 OK\n[[RFC7231, Section 6.3.1](https://tools.ietf.org/html/rfc7231#section-6.3.1)]",8,null],[13,"Created","","201 Created\n[[RFC7231, Section 6.3.2](https://tools.ietf.org/html/rfc7231#section-6.3.2)]",8,null],[13,"Accepted","","202 Accepted\n[[RFC7231, Section 6.3.3](https://tools.ietf.org/html/rfc7231#section-6.3.3)]",8,null],[13,"NonAuthoritativeInformation","","203 Non-Authoritative Information\n[[RFC7231, Section 6.3.4](https://tools.ietf.org/html/rfc7231#section-6.3.4)]",8,null],[13,"NoContent","","204 No Content\n[[RFC7231, Section 6.3.5](https://tools.ietf.org/html/rfc7231#section-6.3.5)]",8,null],[13,"ResetContent","","205 Reset Content\n[[RFC7231, Section 6.3.6](https://tools.ietf.org/html/rfc7231#section-6.3.6)]",8,null],[13,"PartialContent","","206 Partial Content\n[[RFC7233, Section 4.1](https://tools.ietf.org/html/rfc7233#section-4.1)]",8,null],[13,"MultiStatus","","207 Multi-Status\n[[RFC4918](https://tools.ietf.org/html/rfc4918)]",8,null],[13,"AlreadyReported","","208 Already Reported\n[[RFC5842](https://tools.ietf.org/html/rfc5842)]",8,null],[13,"ImUsed","","226 IM Used\n[[RFC3229](https://tools.ietf.org/html/rfc3229)]",8,null],[13,"MultipleChoices","","300 Multiple Choices\n[[RFC7231, Section 6.4.1](https://tools.ietf.org/html/rfc7231#section-6.4.1)]",8,null],[13,"MovedPermanently","","301 Moved Permanently\n[[RFC7231, Section 6.4.2](https://tools.ietf.org/html/rfc7231#section-6.4.2)]",8,null],[13,"Found","","302 Found\n[[RFC7231, Section 6.4.3](https://tools.ietf.org/html/rfc7231#section-6.4.3)]",8,null],[13,"SeeOther","","303 See Other\n[[RFC7231, Section 6.4.4](https://tools.ietf.org/html/rfc7231#section-6.4.4)]",8,null],[13,"NotModified","","304 Not Modified\n[[RFC7232, Section 4.1](https://tools.ietf.org/html/rfc7232#section-4.1)]",8,null],[13,"UseProxy","","305 Use Proxy\n[[RFC7231, Section 6.4.5](https://tools.ietf.org/html/rfc7231#section-6.4.5)]",8,null],[13,"TemporaryRedirect","","307 Temporary Redirect\n[[RFC7231, Section 6.4.7](https://tools.ietf.org/html/rfc7231#section-6.4.7)]",8,null],[13,"PermanentRedirect","","308 Permanent Redirect\n[[RFC7238](https://tools.ietf.org/html/rfc7238)]",8,null],[13,"BadRequest","","400 Bad Request\n[[RFC7231, Section 6.5.1](https://tools.ietf.org/html/rfc7231#section-6.5.1)]",8,null],[13,"Unauthorized","","401 Unauthorized\n[[RFC7235, Section 3.1](https://tools.ietf.org/html/rfc7235#section-3.1)]",8,null],[13,"PaymentRequired","","402 Payment Required\n[[RFC7231, Section 6.5.2](https://tools.ietf.org/html/rfc7231#section-6.5.2)]",8,null],[13,"Forbidden","","403 Forbidden\n[[RFC7231, Section 6.5.3](https://tools.ietf.org/html/rfc7231#section-6.5.3)]",8,null],[13,"NotFound","","404 Not Found\n[[RFC7231, Section 6.5.4](https://tools.ietf.org/html/rfc7231#section-6.5.4)]",8,null],[13,"MethodNotAllowed","","405 Method Not Allowed\n[[RFC7231, Section 6.5.5](https://tools.ietf.org/html/rfc7231#section-6.5.5)]",8,null],[13,"NotAcceptable","","406 Not Acceptable\n[[RFC7231, Section 6.5.6](https://tools.ietf.org/html/rfc7231#section-6.5.6)]",8,null],[13,"ProxyAuthenticationRequired","","407 Proxy Authentication Required\n[[RFC7235, Section 3.2](https://tools.ietf.org/html/rfc7235#section-3.2)]",8,null],[13,"RequestTimeout","","408 Request Timeout\n[[RFC7231, Section 6.5.7](https://tools.ietf.org/html/rfc7231#section-6.5.7)]",8,null],[13,"Conflict","","409 Conflict\n[[RFC7231, Section 6.5.8](https://tools.ietf.org/html/rfc7231#section-6.5.8)]",8,null],[13,"Gone","","410 Gone\n[[RFC7231, Section 6.5.9](https://tools.ietf.org/html/rfc7231#section-6.5.9)]",8,null],[13,"LengthRequired","","411 Length Required\n[[RFC7231, Section 6.5.10](https://tools.ietf.org/html/rfc7231#section-6.5.10)]",8,null],[13,"PreconditionFailed","","412 Precondition Failed\n[[RFC7232, Section 4.2](https://tools.ietf.org/html/rfc7232#section-4.2)]",8,null],[13,"PayloadTooLarge","","413 Payload Too Large\n[[RFC7231, Section 6.5.11](https://tools.ietf.org/html/rfc7231#section-6.5.11)]",8,null],[13,"UriTooLong","","414 URI Too Long\n[[RFC7231, Section 6.5.12](https://tools.ietf.org/html/rfc7231#section-6.5.12)]",8,null],[13,"UnsupportedMediaType","","415 Unsupported Media Type\n[[RFC7231, Section 6.5.13](https://tools.ietf.org/html/rfc7231#section-6.5.13)]",8,null],[13,"RangeNotSatisfiable","","416 Range Not Satisfiable\n[[RFC7233, Section 4.4](https://tools.ietf.org/html/rfc7233#section-4.4)]",8,null],[13,"ExpectationFailed","","417 Expectation Failed\n[[RFC7231, Section 6.5.14](https://tools.ietf.org/html/rfc7231#section-6.5.14)]",8,null],[13,"ImATeapot","","418 I&#39;m a teapot\n[curiously, not registered by IANA, but [RFC2324](https://tools.ietf.org/html/rfc2324)]",8,null],[13,"MisdirectedRequest","","421 Misdirected Request\n[RFC7540, Section 9.1.2](http://tools.ietf.org/html/rfc7540#section-9.1.2)",8,null],[13,"UnprocessableEntity","","422 Unprocessable Entity\n[[RFC4918](https://tools.ietf.org/html/rfc4918)]",8,null],[13,"Locked","","423 Locked\n[[RFC4918](https://tools.ietf.org/html/rfc4918)]",8,null],[13,"FailedDependency","","424 Failed Dependency\n[[RFC4918](https://tools.ietf.org/html/rfc4918)]",8,null],[13,"UpgradeRequired","","426 Upgrade Required\n[[RFC7231, Section 6.5.15](https://tools.ietf.org/html/rfc7231#section-6.5.15)]",8,null],[13,"PreconditionRequired","","428 Precondition Required\n[[RFC6585](https://tools.ietf.org/html/rfc6585)]",8,null],[13,"TooManyRequests","","429 Too Many Requests\n[[RFC6585](https://tools.ietf.org/html/rfc6585)]",8,null],[13,"RequestHeaderFieldsTooLarge","","431 Request Header Fields Too Large\n[[RFC6585](https://tools.ietf.org/html/rfc6585)]",8,null],[13,"UnavailableForLegalReasons","","451 Unavailable For Legal Reasons\n[[RFC7725](http://tools.ietf.org/html/rfc7725)]",8,null],[13,"InternalServerError","","500 Internal Server Error\n[[RFC7231, Section 6.6.1](https://tools.ietf.org/html/rfc7231#section-6.6.1)]",8,null],[13,"NotImplemented","","501 Not Implemented\n[[RFC7231, Section 6.6.2](https://tools.ietf.org/html/rfc7231#section-6.6.2)]",8,null],[13,"BadGateway","","502 Bad Gateway\n[[RFC7231, Section 6.6.3](https://tools.ietf.org/html/rfc7231#section-6.6.3)]",8,null],[13,"ServiceUnavailable","","503 Service Unavailable\n[[RFC7231, Section 6.6.4](https://tools.ietf.org/html/rfc7231#section-6.6.4)]",8,null],[13,"GatewayTimeout","","504 Gateway Timeout\n[[RFC7231, Section 6.6.5](https://tools.ietf.org/html/rfc7231#section-6.6.5)]",8,null],[13,"HttpVersionNotSupported","","505 HTTP Version Not Supported\n[[RFC7231, Section 6.6.6](https://tools.ietf.org/html/rfc7231#section-6.6.6)]",8,null],[13,"VariantAlsoNegotiates","","506 Variant Also Negotiates\n[[RFC2295](https://tools.ietf.org/html/rfc2295)]",8,null],[13,"InsufficientStorage","","507 Insufficient Storage\n[[RFC4918](https://tools.ietf.org/html/rfc4918)]",8,null],[13,"LoopDetected","","508 Loop Detected\n[[RFC5842](https://tools.ietf.org/html/rfc5842)]",8,null],[13,"NotExtended","","510 Not Extended\n[[RFC2774](https://tools.ietf.org/html/rfc2774)]",8,null],[13,"NetworkAuthenticationRequired","","511 Network Authentication Required\n[[RFC6585](https://tools.ietf.org/html/rfc6585)]",8,null],[13,"Unregistered","","A status code not in the IANA HTTP status code registry or very well known",8,null],[4,"StatusClass","","The class of an HTTP `status-code`.",null,null],[13,"Informational","","1xx (Informational): The request was received, continuing process",9,null],[13,"Success","","2xx (Success): The request was successfully received, understood, and accepted",9,null],[13,"Redirection","","3xx (Redirection): Further action needs to be taken in order to complete the request",9,null],[13,"ClientError","","4xx (Client Error): The request contains bad syntax or cannot be fulfilled",9,null],[13,"ServerError","","5xx (Server Error): The server failed to fulfill an apparently valid request",9,null],[13,"NoClass","","A status code lower than 100 or higher than 599. These codes do no belong to any class.",9,null],[11,"fmt","","",8,null],[11,"hash","","",8,null],[11,"canonical_reason","","Get the standardised `reason-phrase` for this status code.",8,null],[11,"class","","Determine the class of a status code, based on its first digit.",8,null],[11,"is_informational","","Check if class is Informational.",8,null],[11,"is_success","","Check if class is Success.",8,null],[11,"is_redirection","","Check if class is Redirection.",8,null],[11,"is_client_error","","Check if class is ClientError.",8,null],[11,"is_server_error","","Check if class is ServerError.",8,null],[11,"is_strange_status","","Check if class is NoClass",8,null],[11,"fmt","","",8,null],[11,"eq","","",8,null],[11,"clone","","",8,null],[11,"partial_cmp","","",8,null],[11,"cmp","","",8,null],[11,"default","","",8,{"inputs":[],"output":{"name":"statuscode"}}],[11,"fmt","","",9,null],[11,"clone","","",9,null],[11,"eq","","",9,null],[11,"partial_cmp","","",9,null],[11,"cmp","","",9,null],[11,"default_code","","Get the default status code for the class.",9,null],[0,"method","tokio_http2","",null,null],[4,"Method","tokio_http2::method","The Request Method (VERB)",null,null],[13,"Options","","OPTIONS",10,null],[13,"Get","","GET",10,null],[13,"Post","","POST",10,null],[13,"Put","","PUT",10,null],[13,"Delete","","DELETE",10,null],[13,"Head","","HEAD",10,null],[13,"Trace","","TRACE",10,null],[13,"Connect","","CONNECT",10,null],[13,"Patch","","PATCH",10,null],[13,"Extension","","Method extensions. An example would be `let m = Extension(&quot;FOO&quot;.to_string())`.",10,null],[11,"clone","","",10,null],[11,"eq","","",10,null],[11,"ne","","",10,null],[11,"hash","","",10,null],[11,"fmt","","",10,null],[11,"as_ref","","",10,null],[11,"safe","","Whether a method is considered &quot;safe&quot;, meaning the request is\nessentially read-only.",10,null],[11,"idempotent","","Whether a method is considered &quot;idempotent&quot;, meaning the request has\nthe same result if executed multiple times.",10,null],[11,"from_str","","",10,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",10,null],[11,"default","","",10,{"inputs":[],"output":{"name":"method"}}],[0,"router","tokio_http2","",null,null],[3,"Router","tokio_http2::router","This is the one. The router.",null,null],[12,"routes","","",11,null],[0,"path","","",null,null],[3,"RequestPath","tokio_http2::router::path","Represents a path in HTTP sense (starting from `/`)",null,null],[12,"matcher","","",12,null],[11,"fmt","","",12,null],[11,"clone","","",12,null],[11,"new","","Creates a new path.",12,{"inputs":[{"name":"str"}],"output":{"name":"requestpath"}}],[0,"route","tokio_http2::router","",null,null],[0,"route","tokio_http2::router::route","",null,null],[3,"Route","tokio_http2::router::route::route","Holds route information",null,null],[12,"method","","HTTP method to match",13,null],[12,"path","","RequestPath to match",13,null],[12,"handler","","Request handler",13,null],[11,"clone","","",13,null],[11,"options","","",13,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"get","","",13,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"post","","",13,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"put","","",13,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"delete","","",13,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"head","","",13,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"trace","","",13,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"connect","","",13,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"patch","","",13,{"inputs":[{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"from","","",13,{"inputs":[{"name":"method"},{"name":"str"}],"output":{"name":"routebuilder"}}],[11,"default","","",13,{"inputs":[],"output":{"name":"route"}}],[11,"fmt","","",13,null],[0,"builder","tokio_http2::router::route","",null,null],[3,"RouteBuilder","tokio_http2::router::route::builder","",null,null],[11,"new","","",14,{"inputs":[{"name":"route"}],"output":{"name":"routebuilder"}}],[11,"using","","Completes the building process by taking the handler to process the request.",14,null],[0,"builder","tokio_http2::router","",null,null],[3,"RouterBuilder","tokio_http2::router::builder","Builder for a router",null,null],[11,"fmt","","",15,null],[11,"new","","",15,{"inputs":[],"output":{"name":"routerbuilder"}}],[11,"add","","Adds new `Route` for `Router` that is being built.",15,null],[11,"build","","",15,null],[0,"handlers","tokio_http2::router","",null,null],[5,"default_404_handler","tokio_http2::router::handlers","Default handlers",null,{"inputs":[{"name":"request"},{"name":"string"}],"output":{"name":"response"}}],[5,"method_not_supported_handler","","",null,{"inputs":[{"name":"request"},{"name":"string"}],"output":{"name":"response"}}],[5,"internal_server_error_handler","","",null,{"inputs":[{"name":"request"},{"name":"string"}],"output":{"name":"response"}}],[5,"not_implemented_handler","","",null,{"inputs":[{"name":"request"},{"name":"string"}],"output":{"name":"response"}}],[6,"HttpResult","tokio_http2::router","",null,null],[11,"fmt","","",11,null],[11,"clone","","",11,null],[11,"new","","Create a default Router.",11,{"inputs":[],"output":{"name":"router"}}],[11,"find_handler_with_defaults","","Finds handler for given Request.",11,null],[11,"find_handler","","Finds handler for given Request.",11,null],[11,"find_handler_with_method_and_path","","Finds handler for given &amp;str path.",11,null],[11,"find_for_method","","",11,null],[0,"logger","tokio_http2","Logger",null,null],[3,"Logger","tokio_http2::logger","",null,null],[12,"logger","","",16,null],[4,"LoggerLevel","","",null,null],[13,"Debug","","",17,null],[13,"Error","","",17,null],[13,"Info","","",17,null],[13,"Warn","","",17,null],[11,"fmt","","",16,null],[11,"clone","","",16,null],[11,"new","","",16,{"inputs":[{"name":"option"}],"output":{"name":"logger"}}],[11,"write","","",16,null],[0,"server","tokio_http2","The server-side abstraction for multipart requests. Enabled with the `server` feature (on by\ndefault).",null,null],[3,"Multipart","tokio_http2::server","The server-side implementation of `multipart/form-data` requests.",null,null],[3,"MultipartField","","A field in a multipart request. May be either text or a binary stream (file).",null,null],[12,"name","","The field&#39;s name from the form",18,null],[12,"data","","The data of the field. Can be text or binary.",18,null],[3,"MultipartFile","","A representation of a file in HTTP `multipart/form-data`.",null,null],[3,"Entries","","A result of `Multipart::save_all()`.",null,null],[12,"fields","","The text fields of the multipart request, mapped by field name -&gt; value.",19,null],[12,"files","","A map of file field names to their contents saved on the filesystem.",19,null],[12,"dir","","The directory the files in this request were saved under; may be temporary or permanent.",19,null],[3,"SavedFile","","A file saved to the local filesystem from a multipart request.",null,null],[12,"path","","The complete path this file was saved at.",20,null],[12,"filename","","The original filename of this file, if one was provided in the request.",20,null],[12,"size","","The number of bytes written to the disk; may be truncated.",20,null],[4,"SaveResult","","The result of [`Multipart::save_all()`](struct.multipart.html#method.save_all).",null,null],[13,"Full","","The operation was a total success. Contained are all entries of the request.",21,null],[13,"Partial","","The operation errored partway through. Contained are the entries gathered thus far,\nas well as the error that ended the process.",21,null],[13,"Error","","The `TempDir` for `Entries` could not be constructed. Contained is the error detailing the\nproblem.",21,null],[4,"MultipartData","","The data of a field in a `multipart/form-data` request.",null,null],[13,"Text","","The field&#39;s payload is a text string.",22,null],[13,"File","","The field&#39;s payload is a binary stream (file).",22,null],[4,"SaveDir","","The save directory for `Entries`. May be temporary (delete-on-drop) or permanent.",null,null],[13,"Temp","","This directory is temporary and will be deleted, along with its contents, when this wrapper\nis dropped.",23,null],[13,"Perm","","This directory is permanent and will be left on the filesystem when this wrapper is dropped.",23,null],[8,"HttpRequest","","A server-side HTTP request that may or may not be multipart.",null,null],[16,"Body","","The body of this request.",24,null],[10,"multipart_boundary","","Get the boundary string of this request if it is a POST request\nwith the `Content-Type` header set to `multipart/form-data`.",24,null],[10,"body","","Return the request body for reading.",24,null],[11,"from_request","","If the given `HttpRequest` is a multipart/form-data POST request,\nreturn the request body wrapped in the multipart reader. Otherwise,\nreturns the original request.",25,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"with_body","","Construct a new `Multipart` with the given body reader and boundary.\nThis will prepend the requisite `&quot;--&quot;` to the boundary.",25,{"inputs":[{"name":"b"},{"name":"bnd"}],"output":{"name":"self"}}],[11,"read_entry","","Read the next entry from this multipart request, returning a struct with the field&#39;s name and\ndata. See `MultipartField` for more info.",25,null],[11,"foreach_entry","","Call `f` for each entry in the multipart request.",25,null],[11,"save_all","","Read the request fully, parsing all fields and saving all files in a new temporary\ndirectory under the OS temporary directory.",25,null],[11,"save_all_under","","Read the request fully, parsing all fields and saving all files in a new temporary\ndirectory under `dir`.",25,null],[11,"save_all_limited","","Read the request fully, parsing all fields and saving all fields in a new temporary\ndirectory under the OS temporary directory.",25,null],[11,"save_all_under_limited","","Read the request fully, parsing all fields and saving all files in a new temporary\ndirectory under `dir`.",25,null],[11,"borrow","","",25,null],[11,"fmt","","",21,null],[11,"to_entries","","Take the `Entries` from `self`, if applicable, and discarding\nthe error, if any.",21,null],[11,"to_opt","","Decompose `self` to `(Option&lt;Entries&gt;, Option&lt;io::Error&gt;)`",21,null],[11,"to_result","","Map `self` to an `io::Result`, discarding the error in the `Partial` case.",21,null],[11,"fmt","","",18,null],[11,"fmt","","",22,null],[11,"as_text","","Borrow this payload as a text field, if possible.",22,null],[11,"as_file","","Borrow this payload as a file field, if possible.\nMutably borrows so the contents can be read.",22,null],[11,"fmt","","",26,null],[11,"save_to","","Save this file to the given output stream.",26,null],[11,"save_to_limited","","Save this file to the given output stream, **truncated** to `limit`\n(no more than `limit` bytes will be written out).",26,null],[11,"save_as","","Save this file to `path`.",26,null],[11,"save_in","","Save this file in the directory pointed at by `dir`,\nusing a random alphanumeric string as the filename.",26,null],[11,"save_as_limited","","Save this file to `path`, **truncated** to `limit` (no more than `limit` bytes will be written out).",26,null],[11,"save_in_limited","","Save this file in the directory pointed at by `dir`,\nusing a random alphanumeric string as the filename.",26,null],[11,"filename","","Get the filename of this entry, if supplied.",26,null],[11,"content_type","","Get the MIME type (`Content-Type` value) of this file, if supplied by the client,\nor `&quot;applicaton/octet-stream&quot;` otherwise.",26,null],[11,"read","","",26,null],[11,"fill_buf","","",26,null],[11,"consume","","",26,null],[11,"fmt","","",19,null],[11,"fmt","","",23,null],[11,"as_path","","Get the path of this directory, either temporary or permanent.",23,null],[11,"is_temporary","","Returns `true` if this is a temporary directory which will be deleted on-drop.",23,null],[11,"into_path","","Unwrap the `PathBuf` from `self`; if this is a temporary directory,\nit will be converted to a permanent one.",23,null],[11,"keep","","If this `SaveDir` is temporary, convert it to permanent.\nThis is a no-op if it already is permanent.",23,null],[11,"delete","","Delete this directory and its contents, regardless of its permanence.",23,null],[11,"as_ref","","",23,null],[11,"fmt","","",20,null],[6,"Body","tokio_http2","",null,null],[6,"ContentType","","",null,null],[6,"ContentLength","","",null,null],[6,"Headers","","",null,null],[6,"Handler","","",null,null],[14,"chain_result","","",null,null],[11,"parse","","Parse an absolute URL from a string.",27,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"parse_with_params","","Parse an absolute URL from a string and add params to its query string.",27,{"inputs":[{"name":"str"},{"name":"i"}],"output":{"name":"result"}}],[11,"join","","Parse a string as an URL, with this URL as the base URL.",27,null],[11,"options","","Return a default `ParseOptions` that can fully configure the URL parser.",27,{"inputs":[],"output":{"name":"parseoptions"}}],[11,"as_str","","Return the serialization of this URL.",27,null],[11,"into_string","","Return the serialization of this URL.",27,null],[11,"origin","","Return the origin of this URL (https://url.spec.whatwg.org/#origin)",27,null],[11,"scheme","","Return the scheme of this URL, lower-cased, as an ASCII string without the &#39;:&#39; delimiter.",27,null],[11,"has_authority","","Return whether the URL has an &#39;authority&#39;,\nwhich can contain a username, password, host, and port number.",27,null],[11,"cannot_be_a_base","","Return whether this URL is a cannot-be-a-base URL,\nmeaning that parsing a relative URL string with this URL as the base will return an error.",27,null],[11,"username","","Return the username for this URL (typically the empty string)\nas a percent-encoded ASCII string.",27,null],[11,"password","","Return the password for this URL, if any, as a percent-encoded ASCII string.",27,null],[11,"has_host","","Equivalent to `url.host().is_some()`.",27,null],[11,"host_str","","Return the string representation of the host (domain or IP address) for this URL, if any.",27,null],[11,"host","","Return the parsed representation of the host for this URL.\nNon-ASCII domain labels are punycode-encoded per IDNA.",27,null],[11,"domain","","If this URL has a host and it is a domain name (not an IP address), return it.",27,null],[11,"port","","Return the port number for this URL, if any.",27,null],[11,"port_or_known_default","","Return the port number for this URL, or the default port number if it is known.",27,null],[11,"with_default_port","","If the URL has a host, return something that implements `ToSocketAddrs`.",27,null],[11,"path","","Return the path for this URL, as a percent-encoded ASCII string.\nFor cannot-be-a-base URLs, this is an arbitrary string that doesn’t start with &#39;/&#39;.\nFor other URLs, this starts with a &#39;/&#39; slash\nand continues with slash-separated path segments.",27,null],[11,"path_segments","","Unless this URL is cannot-be-a-base,\nreturn an iterator of &#39;/&#39; slash-separated path segments,\neach as a percent-encoded ASCII string.",27,null],[11,"query","","Return this URL’s query string, if any, as a percent-encoded ASCII string.",27,null],[11,"query_pairs","","Parse the URL’s query string, if any, as `application/x-www-form-urlencoded`\nand return an iterator of (key, value) pairs.",27,null],[11,"fragment","","Return this URL’s fragment identifier, if any.",27,null],[11,"set_fragment","","Change this URL’s fragment identifier.",27,null],[11,"set_query","","Change this URL’s query string.",27,null],[11,"query_pairs_mut","","Manipulate this URL’s query string, viewed as a sequence of name/value pairs\nin `application/x-www-form-urlencoded` syntax.",27,null],[11,"set_path","","Change this URL’s path.",27,null],[11,"path_segments_mut","","Return an object with methods to manipulate this URL’s path segments.",27,null],[11,"set_port","","Change this URL’s port number.",27,null],[11,"set_host","","Change this URL’s host.",27,null],[11,"set_ip_host","","Change this URL’s host to the given IP address.",27,null],[11,"set_password","","Change this URL’s password.",27,null],[11,"set_username","","Change this URL’s username.",27,null],[11,"set_scheme","","Change this URL’s scheme.",27,null],[11,"from_file_path","","Convert a file name as `std::path::Path` into an URL in the `file` scheme.",27,{"inputs":[{"name":"p"}],"output":{"name":"result"}}],[11,"from_directory_path","","Convert a directory name as `std::path::Path` into an URL in the `file` scheme.",27,{"inputs":[{"name":"p"}],"output":{"name":"result"}}],[11,"to_file_path","","Assuming the URL is in the `file` scheme or similar,\nconvert its path to an absolute `std::path::Path`.",27,null],[11,"description","tokio_http2::error","",6,null],[11,"as_ref","tokio_http2","",27,null],[11,"eq","","",27,null],[11,"eq","tokio_http2::error","",6,null],[11,"hash","tokio_http2","",27,null],[11,"to_socket_addrs","","",27,null],[11,"fmt","","",27,null],[11,"fmt","tokio_http2::error","",6,null],[11,"index","tokio_http2","",27,null],[11,"index","","",27,null],[11,"index","","",27,null],[11,"index","","",27,null],[11,"clone","tokio_http2::error","",6,null],[11,"clone","tokio_http2","",27,null],[11,"fmt","tokio_http2::error","",6,null],[11,"fmt","tokio_http2","",27,null],[11,"from","tokio_http2::error","",6,{"inputs":[{"name":"errors"}],"output":{"name":"parseerror"}}],[11,"from_str","tokio_http2","",27,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"partial_cmp","","",27,null],[11,"cmp","","",27,null]],"paths":[[3,"Request"],[3,"Response"],[3,"HttpProto"],[3,"Buffer"],[3,"HttpCodec"],[4,"HttpVersion"],[4,"ParseError"],[4,"Error"],[4,"StatusCode"],[4,"StatusClass"],[4,"Method"],[3,"Router"],[3,"RequestPath"],[3,"Route"],[3,"RouteBuilder"],[3,"RouterBuilder"],[3,"Logger"],[4,"LoggerLevel"],[3,"MultipartField"],[3,"Entries"],[3,"SavedFile"],[4,"SaveResult"],[4,"MultipartData"],[4,"SaveDir"],[8,"HttpRequest"],[3,"Multipart"],[3,"MultipartFile"],[3,"Url"]]};
initSearch(searchIndex);
