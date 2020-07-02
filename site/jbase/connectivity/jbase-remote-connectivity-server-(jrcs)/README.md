# jBASE Remote Connectivity Server (jRCS)

<PageHeader />

## Introduction

jRCS is a jBASE remote connectivity server and a multi-layered client library, accessible from various languages/platforms. The design is built around a concurrent server, backed by jBASE 3.4/4.1/5.x services. The server listens on a known network port and spawns jBASE proxy processes (one process per port) in response to every client connection.

The client consists of a low-level communication library, coupled with a string/dynamic array processing library, and ActiveX, java and .NET portability layers. The jBASE remote server, the low-level client libraries, and the ActiveX portability library are written in C++.

The architecture has a set of advantages, namely the portability of the server and low-level client libraries across platforms (i.e. Windows, UNIXes, etc.), and native support for ActiveX interface. The architecture therefore enables several client types to remotely connect to jBASE. These include C++ programs (low-level library), ActiveX containers (ActiveX portability layer), and additional java and .NET clients. Due to the low overhead involved in calling pure C++/ActiveX functions on client systems and the absence of parameter marshaling, even with three potential layers of calls, the library outperforms existing jBASE connectivity solutions.

![jbase-remote-connectivity-server: jrcs](./jrcs.png)

## Network Architecture

The jRCS design builds on top of TCP/IP and XML standards for low-level communications, thus enabling multi-platform portability of the communication layer itself. XML is a technology enabling interoperability between multiple platforms and languages and is the basic communication language of web-enabled self-describing databases. Furthermore, XML standard supports Unicode character sets, which, coupled with multi-locale support in jBASE 4.1 and 5.0 enable NLS in the remote server architecture.

This allows the possibility of a communication protocol based on XML, which will be available for use in many languages, such as Perl, without the need to provide client libraries. Client libraries will still be provided for C++ and ActiveX clients, but other languages and environments can implement client communication layers utilizing their native or add-on XML support.

## Structure of jBASE Remote Server

jBASE Remote Server is the central component of the remote connectivity architecture. It is a program executing as a UNIX daemon, or as a service on Windows-based hosts. The server interfaces with jBASE via the jBC library, the component used by native jBASE executables to run jBC programs. Due to the fact that jBC code is pre-compiled into C/C++ by the jBC compiler, the jBC library is a C-based interface and results in very low overhead.

jBASE Remote Server consists of a listener process (reactor), which listens for new client connections, and server proxy processes responsible for servicing client requests. The listener process is also responsible for clean-up of dead connections and client sessions which have timed out. All communication is handled via a TCP/IP and XML layer, and proxy processes are spawned dynamically upon client connection.

The use of public key encryption enables a shared key to be established between the client and the server. All subsequent data can then be communicated in encrypted format for secure connections, except for the actual jCML mark-up.

## Structure of jBASE Client

jBASE Client is a TCP/IP client capable of connecting to jBASE Remote Server and delegating client application's calls to the server. The client is designed as several libraries including the C++ layer, the ActiveX portability layer as well as java and .NET implementations. All TCP/XML calling specifics are fully wrapped by the C++ layer and are not exposed to the client application.

The jBASE C++ Client Library is responsible for connecting to the host computer (jBASE Remote Server) using TCP/IP. Once a connection is obtained, the client allocates C++ proxies for objects on the server to simplify calling remote jBASE services from C++. This layer of jBASE Client is made portable on all supported platforms, so C++ programs can uniformly log on and manipulate data on the remote jBASE server. The client will always locate the Remote Server by using the TCP/IP address and port of the target system supplied by the caller of the library.

In addition to providing connectivity services, jBASE C++ Client Library exposes a dynamic array object, suitable for the manipulation of multi-valued data on the client. The dynamic array object is optimized for speed and is also made portable across platforms.

The ActiveX portability library exposes a set of ActiveX objects on Windows-based systems. The objects constitute proxies for classes exposed by the C++ Client Library, making them accessible from ActiveX containers, such as Visual Basic.

## Concurrency and Multiprocessing

As already mentioned, jBASE Remote Server is built as a concurrent server and spawns proxy processes to perform tasks on clients' behalf. One process is spawned per connection in a fashion similar to telnetd and sshd servers.

The client libraries are built at different levels of concurrency. However, the C++ layer is internally thread-safe and can be used in multi-threaded client applications. Requests for service from client threads are internally serialized by the C++ library on a first-come, first-served basis. This approach ensures that a single connection can be used by multiple client threads maintaining mutual exclusion. ActiveX layers on top of C++ library support apartment threading, which is the only multi-threading model realistically defined for COM/ActiveX.

## Platform Independence

Due to the fact that jBASE runs on a variety of platforms, the server is also portable to various operating systems and compilers. In its choice of supporting technologies the customer will ensure that libraries used by the server are available on all supported platforms.

On the client the only layer which can reliably be made portable is the C++ layer. It uses standard socket library calls together with a multi-platform XML library.

## Internationalization and Unicode Support

As of release 4, jBASE introduces full universal character set support. The remote connectivity library specified in this document therefore uses Unicode for all strings passed between the server and the client and encodes dynamic arrays as Unicode-format UTF16-encoded strings. Information about client's locale will be provided to the server at logon time. As was already mentioned earlier in this document, XML fully supports Unicode, so no additional character set support is required by the communication layer.

## Packaging

The following table lists the deliverables for the jBASE Remote Connectivity Library on UNIX and Windows platforms. Please note that some files, such as the ActiveX wrappers and .NET clients, are only available on Windows platforms. Additional libraries may be required as product dependencies, and will be included in the target distributions.

## jBASE Remote Connectivity Library Components

| <!----> | <!----> | <!----> |
| --- | --- | --- |
| **Windows File Name** | **UNIX File Name** | **Purpose** |
| jrcs.exe \/ jrcsserver.exe | jrcsd | jBASE Remote Connectivity Server executables. |
| jrcs.dll | libjrcs.so | jBASE C++ Client Library. |
| jrcs.lib | libjrcs.a | Export library for C++ Client layer. |
| jrcax.dll |  | ActiveX wrapper for the C++ Client (Windows only). |

## Encryption

jRCS now includes two settings, one for password encryption and one for data encryption.

There are three levels for each setting, 0 = required, 1 = supported, 2 = off. The latter is self-explanatory. If encryption is required, the server will not accept a connection that requests encryption to be turned off for password or data, respectively. If encryption is set to "supported", encrypted connections are negotiated when possible, but unencrypted connections are acceptable as a fall back. Each setting can be varied by adjusting registry settings for the Windows version of jRCS or via command-line parameters to UNIX jRCS server. Both settings default to "supported", so technically nothing needs to be done to enable encryption - it will be negotiated automatically if both client and server sides are encryption-enabled. If data encryption is set to "required" or "supported", the server will always require password encryption if the client supports it.

The encryption works by exchanging keys using the Diffie-Hellman (DH) algorithm and then generating a secret AES-128 (Rijndael) encryption key from the shared secret. All parameter payloads are subsequently encrypted using AES-128 in CBC mode with random initialization vectors.

Password encryption level controls encryption used for the "open" request.

Data encryption level defines encryption for the remainder of the session.

## Interfaces and Protocols

This section defines the set of interfaces (C++ classes) exposed by the jBASE Remote Connectivity Client.

## C++ Client Layer

The C++ client layer defines a set of classes, closely following the structure of the objects on remote server. The C++ library uses the built-in exception handling features of C++ to report errors to the application program using the library. It also hides the specifics of how I/O requests or replies are handled, so the only function that the user may need to supply is the optional terminal I/O handler.

## Classes

The classes, defined in the client layer are listed below. As it is more common to use VB.NET or C# rather than C++, the .NET properties and methods are presented (Type P = Property, M = Method).

### Class JException

This class is the most basic class of the client library. Its intended use is for error reporting as an argument to try-catch-throw constructs in C++. This class can be thrown by methods of various classes in the client library. The methods of class JException follow.

| Name | Type | Description |
| --- | --- | --- |
| Code | M | Retrieves the error code which caused this exception to be thrown |

### Class JIOHandler

Class JIOHandler is a callback interface used by the jBASE session object to handle terminal I/O, generated by the remote jBASE session. As opposed to other environments, terminal I/O for the session will be delivered directly to the client computer. The session object will then call accessor methods in JIOHandler to handle terminal input or output. The default implementation of this interface will simply print the generated output to the standard output, or wait for input on the standard input. The call-backs are invoked on the thread currently requesting service from the jBASE session. The methods and properties of the class are listed below:

| Name | Type | Description |
| --- | --- | --- |
| Input | M | Called by the session object whenever it detects that terminal input is requested by the remote server. The method should return a line of input, which will be provided to the jBASE session. |
| Output | M | Called by the session object whenever it detects that terminal output is pending. Returns a String parameter representing the characters being output. |
| TermType | P | Returns a curses-compatible terminal type string with the value of the TERM environment variable in jBASE. |

### Class JConnection

Class JConnection represents the connection or session object and is the fundamental object of the entire client library. Most functionality in the library builds around the JConnection object, and all other client-side objects are created by the connection class. JConnection methods and properties are listed below:

| Name | Type | Description |
| --- | --- | --- |
| AbortTransaction | M | Aborts the transaction on the current connection. |
| AttachCommon | M |  |
| Call | M | Calls a catalogued subroutine specified by a supplied string on jBASE host, passing it a jDynArray. Upon successful call, the results are returned in the same jDynArray. The number of parameters is not changed by the method. |
| Close | M | Closes an already active connection. This method is implicitly called by the destructor. |
| CodePage | P | Returns a string indicating the CodePage for the current connection |
| Date | P | Returns the date currently set on the server, in standard Pick-compatible internal format. |
| DeleteList | M | Deletes a previously saved select list |
| Dispose | M | Release JConnection resources |
| EndTransaction | M | Ends the transaction on the current connection. |
| Execute | M | Executes a jShell command returning results. A PassList parameter will be a pointer to the select list passed to the command being executed. If a PassList parameter is omitted or specified as NULL, no pass list is assumed. See the JExecuteResults class for information on the properties which are available to determine the output of the Execute |
| ExecuteAndStore | M | Executes a jShell command and allows the capture string to be stored on the host and fetched incrementally in chunks (**see the 'Remote Execution with Incremental Fetch' section below**). |
| Finalize | M | Perform clean-up on the current JConnection object |
| GetList | M | Retrieves a previously stored select list |
| Iconv | M | Performs input conversion on specified source using conversion code supplied. |
| Oconv | M | Performs output conversion on specified source using conversion code supplied. |
| Open | M | Opens a new connection to the jBASE Remote Server. The parameter list is, for the most part, self-explanatory. A constant JRCS\_PORT is provided and can be substituted for the Port parameter if it is known that jBASE Remote Server is listening on the default port. |
| OpenFile | M | Opens a jBASE file (jEDI) and returns a pointer to the file object |
| StartTransaction | M | Starts a new transaction on the given connection. |
| HostCharacterEncoding | P | Returns the host character encoding for the current connection. |
| jBaseVersion | P | Returns the jBASE version currently running on the server |
| Locale | P | Returns the locale name for the current connection. |
| Port | P | Returns the jBASE port number on which the current connection is active. |
| TermIOHandler | P | Designates the handler for terminal I/O exceptions |
| Time | P | Returns the time currently set on the server, in standard Pick-compatible internal format. |
| TimeOut | P | The period of inactivity, in milliseconds, after which a connection will be closed. Timeout is only applicable when the jRCS client is waiting for a host call to complete. Default is -1<br> *Caveat: We don't recommend using the Timeout property as, even though the client process will return from a call with an exception on timeout, there can be hung processes left over on the server, which will eventually run the host system out of ports*. |
| PasswordEncryptionLevel | P | Sets the password encryption level as JEncryptionLevel |
| DataEncryptionLevel | P | Sets the data encryption level as JEncryptionLevel |

### Remote Execution with Incremental Fetch

The remote command execution under jRCS has been enhanced to allow the capture string to be stored on the host and fetched incrementally in chunks. To accommodate this requirement, a new method was added to the JConnection class, called ExecuteAndStore. The method takes the following parameters:

- A jSH statement to execute
- A list object to be passed to the execute
- An optional chunk size for data fetch (default is 2048 bytes or about a screen of text)
- An optional string for RETURNING clause
- An optional variable to accept the return list

### Enum JEncryptionLevel

Designates the level of password and data encryption between client and server:

| Name | Value |
| --- | --- |
| ENC\_OFF | 2 |
| ENC\_REQUIRED | 0 |
| ENC\_SUPPORTED | 1 |

### Class JCapture

The ExecuteAndStore method returns an object of class JCapture with the following properties and methods:

| Name | Type | Description |
| --- | --- | --- |
| AtEnd | P | This read-only property indicates whether the saved capture string has been exhausted. If this property returns True, a subsequent call to NextBlock() will return an empty string. |
| BlockSize | P | Gets/sets the current block size for subsequent calls to NextBlock(). This property is initialized to the block size specified in the call to ExecuteAndStore, or the default of 2048. This property must be greater than zero. |
| NextBlock | M | Fetches the next block of data and returns it as a string. The block is at least the size specified in ExecuteAndStore call or determined by the BlockSize property, up to the closest attribute mark. If the captured output is exhausted, the function returns an empty string. |
| Rewind | M | Rewinds the current position in the captured output to the beginning. |

It is understood that EXECUTE/PERFORM is an atomic operation under most multi-value databases and will have to run to completion before the JCapture object is made available.  
It is furthermore recognized that execution with capture can be a lengthy and memory-intensive process and no guarantees are made as to the speed of ExecuteAndStore().

### Class JExecuteResults

The Execute and ExecuteAndStore methods return an object of class JExecuteResults with the following properties:

| Name | Type | Description |
| --- | --- | --- |
| Capture | P | Returns a JCapture object |
| CaptureString | P | Returns the CAPTURING variable as a string |
| ReturnList | P | Returns the RTNLIST variable as a JSelectList. |
| ReturnString | P | Returns the RETURNING/SETTING variable as a string. |

### Class JFile

Class JFile encapsulates an open jBASE file object (jEDI). JFile provides access to common file operations, including reading and writing of records. JFile data access methods normally manipulate the objects of class JDynArray (dynamic arrays). Dynamic arrays are discussed in greater detail later in this document. The methods and properties of the JFile object are listed below:

| Name | Type | Description |
| --- | --- | --- |
| Close | M | Closes an open JFile object. This method is called implicitly by the destructor. |
| ClearFile | M | Deletes all records in the file. |
| Delete | M | Deletes a record with specified key. |
| Dispose | M | Calls the destructor for the current JFile object. |
| GetIndices | M | Retrieves a dynamic array of file indices. |
| GetIndex | M | Retrieves a dynamic array containing index information for a specified index name. |
| OpenIndex | M | Opens a specified index name and returns a JIndex item |
| Path | P | Gets a full path of the file represented by this object. |
| Read | M | Reads a record from the current file object via the provided key parameter and returns a JDynArray. If a "locked" parameter is passed as "true", the read also places a lock on the record (ReadU). If the read is locked and "wait" parameter is passed as "true", the connection waits for the record to be unlocked. Otherwise, an exception is thrown. |
| ReadNamedField | M | Reads a field from the current file object via the provided key parameter. The field name is specified by a string parameter. If a "locked" parameter is passed as "true", the read also places a lock on the record (ReadVU). If the read is locked and a "wait" parameter is passed as "true", the connection waits for the record to be unlocked. Otherwise, an exception is thrown. |
| ReadV | M | Reads a field from the current file object via the provided key parameter. The field number is specified by a numeric attribute parameter. If a "locked" parameter is passed as "true", the read also places a lock on the record (ReadVU). If the read is locked and a "wait" parameter is passed as "true", the connection waits for the record to be unlocked. Otherwise, an exception is thrown. |
| Release | M | Releases a lock on the record in the current file using the specified key parameter. |
| ReleaseAll | M | Releases all locks held by the current file object. |
| Select | M | Generates a JSelectList from the keys in the current file. The list is created in the same order as keys are ordered in the file. |
| SSelect | M | Generates a JSelectList from the keys in the current file. |
| Write | M | Writes a record to the current file object using the supplied key parameter. The record data is passed in a JDynArray. If "unlock" is passed as "true" (default), the record is unlocked after completion of the write operation. Otherwise, the lock is kept (WriteU). |
| WriteNamedField | M | Writes a field to the current file object using the supplied key parameter. The field name within the record is also passed as a parameter. If "unlock" is passed as "true" (default), the record is unlocked after write operation completes. Otherwise, the lock is kept (WriteVU). |
| WriteV | M | Writes a field to the current file object using the supplied key parameter. The field number within the record is also passed as a parameter. If "unlock" is passed as "true" (default), the record is unlocked after the write operation completes. Otherwise, the lock is kept (WriteVU). |

### Class JDynArray

Class JDynArray encapsulates the functionality of a jBASE dynamic array. This class is different from other classes in the hierarchy in the sense that the dynamic array is fully handled locally on the client system and generates no calls to the jBASE host. This considerably speeds up dynamic array operations and incurs no penalty of remote calls. The methods of JDynArray are shown below:

| Name | Type | Description |
| --- | --- | --- |
| Name | Type | Description |
| Count | M | Counts the number of times a specific character occurs within a dynamic array. |
| DCount | M | Counts the number of fields separated by the specified delimiter. |
| Delete | M | Deletes the attribute, value, or sub-value specified. If the value-mark count is 0, the whole attribute is deleted. If value mark count is not 0, but the sub-value mark count is 0, the value specified by attribute mark count and value-mark count is deleted. Otherwise, a sub-value defined by attribute-mark count, value-mark count and sub-value mark count is deleted. |
| Extract | M | Extracts a string from an attribute, value, or sub-value of the dynamic array. The same rules apply as shown in the description of Delete method. |
| ExtractDA | M | Same as Extract, but stores results in a dynamic array. |
| Field | M | Returns nth field separated by specified delimiter. |
| Insert | M | Inserts string into position designated by attribute value and sub-value mark count specified. The same rules apply as for Delete and Extract functions, with one exception. A value of -1 is permitted for attribute value or sub-value mark count. If this negative value is detected, then data is inserted at the end of the selected list of attributes, values or sub-values. |
| InsertDA | M | Same as Insert, but inserts a jDynArray |
| Length | P | Returns length, in characters, of a dynamic array. |
| Locate | M | Finds the position of a string within specified locations of a dynamic array. |
| LocateIgnoreCase | M | Finds the position of a string within specified locations of a dynamic array ignoring case when matching strings. |
| Replace | M | Replaces the data addressed by the attribute, value and sub-value mark count specified with string or jDynArray. The same rules apply as for Delete and Extract. |

### Class JSelectList

Class JSelectList wraps around a jBASE select list. It can be created either by the connection or the file object, and supports all the basic select list functions. The methods of class JSelectList are listed below:

| Name | Type | Description |
| --- | --- | --- |
| IndexKey | P | Retrieves the index key for the current record. |
| IsIndex | P | Indicates whether the select key was generated from the index or via a Select operation. |
| ReadNext | M | Reads the next key (index or record key) from the select list. |
| RecordKey | P | Retrieves a record key corresponding to the current index key. |
| SaveList | M | Saves the select list under the specified list name. |

### Class JIndex

Class JIndex enables the functionality of jBASE indexes. This class allows generation of select lists from jBASE indexes. Methods of class JIndex are shown below:

| Name | Type | Description |
| --- | --- | --- |
| Select | M | Generates a select list from the index and positions, and optionally, the list pointer at the specified index key. |

### Class JCommon

Class JCommon encapsulates the functionality of jBASE common block (both named and unnamed). It provides basic operations to get data from and put it into the common block. The methods of class JCommon are listed below:

| Name | Type | Description |
| --- | --- | --- |
| GetDA | M | Retrieves a dynamic array from the designated position in the common block. |
| GetFile | M | Retrieves a file variable from the designated position. |
| SetDA | M | Stores a dynamic array at the designated position in the common block. |
| SetFile | M | Stores a file variablew at the designated position in the common block. |

## JCML Communication Protocol

The jBASE Remote Connectivity Layer defines a communication protocol, which the client library uses to send requests to and receive replies from the remote server process. The protocol is based on Extensible Mark-up Language (XML) and will be named JCML (jBASE Communication Mark-up Language). The structure of JCML is discussed further in this section and is based on the following assumptions:

1. The underlying networking protocol used for transmission of JCML is connection-oriented, reliable, error-correcting and stream-capable. Protocols falling into this category are TCP, SPX, UNIX domain sockets, stream pipes, and FIFOs. The implementation of JCML will be discussed in the context of TCP/IP, but this specification does not preclude implementation of JCML on other fundamental network protocols.
2. All data link security is handled in the underlying network protocol. The security strategy may include access restriction techniques, such as firewall, or transparent data encryption (PPTP, IPSec, SSL, or SSH tunneling). JCML does not incorporate any security features and in its unmodified form is suitable for LANs and VPNs.
3. JCML messages are synchronous and atomic and assume that requests are paired with replies from the server and that not more than one outstanding request is pending for the server at any given instant. This implicitly assumes that requests from multiple client threads are serialized prior to being communicated to the server.

## Overall Structure of JCML

JCML mark-up incorporates several tags, defining the structure of the message. The tags are listed in the following table:

| Tag | Optional Attributes | Description |
| --- | --- | --- | --- |
| Tag | Optional Attributes | Description |
| &lt;jcml&gt; | src="client!server"type="req!reply!termout! prompt!termin" | Root tag of JCML markup. The "src" attribute defines the origination point (client or server). The type attribute specifies the message type:req - client requestreply - server replytermout - server terminal output messageprompt - server request for terminal inputtermin - client reply with terminal input |
| &lt;obj&gt; |  | Proxy object handle. This is the handle referencing the target object on the server. The connection object always has handle 0. Other object handles (such as file objects) created by the server are communicated back to the client. |
| &lt;cmd&gt; |  | Function to be executed by the target object. |
| &lt;data&gt; | enc="esc!base64" | Function parameters or return values. The "enc" attribute defines how parameter data is encoded, either by escaping XML non-printables (esc), or by base64-encoding the data (base64). |
| &lt;stat&gt; | id=&lt;numeric value&gt; | Function return status. The "id" attribute determines the return code. The content of the tag is the error message. If this tag indicates failure upon return from the host, an exception is thrown by the C++ library. |

The valid message formats in JCML are defined below.

***The Request for Service Message***

Request for service is the message sent by the client library to the remote server to initiate a service request (remote function call). The format of the message is as follows:

1. A &lt;jcml&gt; tag with src="client" and type="req".
2. A &lt;obj&gt; tag with handle of the target object.
3. A &lt;cmd&gt; tag with name of the function to be invoked on the object.
4. Zero or more optional &lt;data&gt; tags with encoded function parameters.

Example:

``` xml
<?xml version="1.0" encoding="UTF-16"?>
<jcml src="client" type="req">
 . <obj>0</obj> <cmd>oconv</cmd> <data enc="esc">Test</data> <data enc="esc">MCU</data>
</jcml>
```

The XML fragment above calls the function oconv in object 0 (connection object) and passing it string "Test" as the first parameter and string "MCU" as the second parameter.

***Service Reply***

The service reply message is sent by the remote server after the processing of the client's request is completed. The message is formatted as follows:

1. A &lt;jcml&gt; tag with src="server" and type="reply".
2. A &lt;stat&gt; tag with id set to the return code and containing the error message.
3. Zero or more &lt;data&gt; tags containing return values.

Example:

``` xml
<?xml version="1.0" encoding="UTF-16"?>
<jcml src="server" type="reply">
 . <stat id="0"></stat> <data enc="esc">TEST</data>
</jcml>
```

This example illustrates a possible server reply to the sample request constructed in previous section. It instructs the client that the server function has completed with status code of 0, no error messages, and the return value is "TEST".

***Terminal Output***

This message may be sent by the server to the client while the request for service is being executed. It indicates that the server has generated terminal output during the course of its processing and is supplying the output to the client. This message requires neither acknowledgement nor a reply. The structure of the message is as follows:

1. A &lt;jcml&gt; tag with src="server" and type="termout".
2. A &lt;data&gt; tag supplying the terminal output. Due to the fact that terminal output may contain non-printable characters and escape codes, this parameter is typically base64-encoded.

Example:

``` xml
<?xml version="1.0" encoding="UTF-16"?>
<jcml src="server" type="termout">
 . <data enc="base64">VGVzdCBvdXRwdXQK</data>
</jcml>
```

This example illustrates a terminal output message from the remote server supplying a base64-encoded string "Test output" to the client.

***Request for Input***

A request for input is sent to the client when the server encounters a command requiring terminal input while processing the client request. This message requires the client to send back a terminal input message with input characters for the server process. The request for input is typically formatted as follows:

1. A &lt;jcml&gt; tag with src="server" and type="prompt".
2. An optional &lt;data&gt; tag with a parameter defining the maximum length of input requested. If this parameter is omitted, the amount of input the client can supply is unlimited.

Example:

``` xml
<?xml version="1.0" encoding="UTF-16"?>
<jcml src="server" type="prompt">
 . <data enc="esc">100</data>
</jcml>
```

This example illustrates the server request for at most 100 characters to be returned from the client.

***Terminal Input***

The terminal input message is sent by the client in response to the server's request for input. This message has the following format:

1. A &lt;jcml&gt; tag with src="client" and type="termin".
2. A &lt;data&gt; tag with terminal input characters supplied to the server. The input is typically base64-encoded because it may include binary data. The data itself is not converted to UTF-16, but is base64-encoded and passed verbatim to the server.

Example:

``` xml
<?xml version="1.0" encoding="UTF-16"?>
<jcml src="client" type="termin">
 . <data enc="base64">VGVzdCBpbnB1dAo=</data>
</jcml>
```

This example illustrates a terminal input message sent to the server with base64-encoded string "Test input" as input.

## Account Logins

jRCS originally allowed users to only log into the home directories of their respective accounts. An optional parameter is now provided to the Open function of the JConnection object to enable logins into alternate accounts. If the account parameter is specified, after jRCS completes its user authentication step, it will perform the lookup of the alternate user account's home directory and change its current directory to that directory. The .jrcsrc or jrcsrc.cmd scripts will then be executed from this alternate account's home directory, and not from the user's directory.

It is recognized that the alternate account login may entail additional user lookups on UNIX and Windows. It is further recognized that the account password feature will not be utilized, i.e. the user will only be authenticated once.

Please note that jRCS does not authenticate user accounts via the jBASE SYSTEM file. It always uses real OS user names for both authentication and for accessing a specific account name. So, if you log in as user MYUSER and into account MYACCOUNT, both MYUSER and MYACCOUNT must be valid user names defined in the parent OS. This is done by jRCS to determine access privileges, permissions, home directories and to stay consistent with OS authentication strategies.

## Installation

### Server Installation - Windows

The current version of jRCS for Windows is now supplied with the jBASE release and is located in %JBCRELEASEDIR%\bin for jBASE 5.x installations.

A command window can then opened at that location, so that jRCS can be installed and started

``` console
 C:\jBASE5\jRCS\bin>jrcs -help
 Usage: jrcs [-install | -uninstall | -start | -stop]
 -install        installs the service
 -uninstall      uninstalls the service
 -start          starts the service
 -stop           stops the service
```

### Server Installation - UNIX

A "jrcsd" binary is supplied for UNIX installations. It should be installed in an appropriate location, such as /usr/jbc/jrcs/bin for jBASE 3.x installations, /opt/jbase4/jrcs/bin for jBASE 4.x and /opt/jbase/CurrentVersion/bin for jBASE 5.x installations.

For Linux installations, a "jrcsd" script is also provided which should be placed in the /etc/pam.d folder.

The "jrcsd" daemon can then be started as root, with or without command line switches.

## jRCS Server Command-Line Switches

(UNIX Systems Only)

The following lists the switches which can be given to jRCS server on the command line:

| <!----> | <!----> | <!----> |
| --- | --- | --- |
| Switch | Description |
| -d &lt;level&gt; | Specifies the debug level for log messages. Debug level 0 (default) causes only critical errors to be logged. Debug level 9 (highest) directs jRCS to log every JCML request and reply, along with parameters. The length of individual parameters written to the log is limited to a maximum of 1024 bytes. |
| -p &lt;number&gt; | Sets the initial TCP port number to &lt;number&gt; instead of the default of 8236. |
| -b &lt;number&gt; | Sets the initial jBASE port number to &lt;number&gt; instead of the default of 15000. If this switch is not supplied, jRCS will use port range 15000-32767 for creating jRCS sessions. |
| -f &lt;path&gt; | Directs jRCS to log its debug messages to a file specified by &lt;path&gt; instead of system log. If this switch is not set, jRCS logs to the application log via the system logger. |
| -q | Quiet. Disables I/O redirection from server to the client. If this flag is set, jRCS will never relay output and debugging requests from the host to the client. If a host process encounters an output statement or hits a debug condition, the process will abort. |
| -pe (required, supported or off) | Password encryption level (default: supported) |
| -de (required, supported or off) | Data encryption level (default: supported) |
| -ot (positive long integer or 0) | Maximum number of seconds between encryption negotiation and open request (default: 0) |

## jRCS Server Registry Settings

(Windows Systems Only)

Due to the fact that it is virtually impossible to pass command-line parameters to a Windows service, the Windows version of jRCS reads the registry key located under HKEY\_LOCAL\_MACHINE\Software\jRCS to obtain the equivalent of settings listed in Table 1-1. The registry settings are detailed in Table 1-2.

| <!----> | <!----> | <!----> |
| --- | --- | --- |
| Value | Type | Purpose |
| DebugLevel | DWORD | Equivalent of the -d command-line switch in UNIX |
| BasePIB | DWORD | Equivalent of the -b command-line switch in UNIX |
| ListenPort | DWORD | Equivalent of the -p command-line switch in UNIX |
| Quiet | DWORD | Equivalent of the -q command-line switch in UNIX (1 - enable quiet mode, 0 or missing - disable quiet mode) |
| LogFile | String | Equivalent of the -f command-line switch in UNIX |
| RequiredGroup | String | This value must be set to the name of a local security group. When a user logs on and "RequiredGroup" is set, the jRCS server runs a security check to determine if the user is a member of the local user group (not a domain user group) whose name is defined by the registry value. If the user is a member, the logon proceeds as usual. If the user is not a member, the server stops the logon process and throws an authentication failure. If the "RequiredGroup" value is not present or is blank, then logons are granted to all users with a valid password |
| PasswordEncryption | DWORD | Password encryption level (default: 1) |
| DataEncryption | DWORD | Data encryption level (default: 1) |
| OpenTimeoutAfterAuthInit | DWORD | Maximum number of seconds between encryption negotiation and open request (default: 0) |

In addition to the command-line and registry switches, jRCS also depends on the setting of several environment variables.

## jRCS Environment Variables

Table 1-3 shows how jRCS interprets environment variables.

| <!----> | <!----> | <!----> |
| --- | --- | --- |
| Variable | Purpose |
| PATH | The system path. Under Windows this variable must include the name of the jBASE bin directory for jRCS to function properly. If this is not done, jRCS will not be able to load jBASE libraries and will not start. (Windows only) |
| LD\_LIBRARY\_PATH | On Linux, the system library path is extended by this variable. The path must include the name of jBASE lib directory. (Linux only) |
| LIBPATH | This variable is used by AIX in much the same way as Linux uses LD\_LIBRARY\_PATH. (AIX only) |
| JBCBACKGROUND | If this variable is set to anything but 0, it forces jRCS into the quiet mode regardless of whether the -q flag was specified on the command line. |

Needless to say, other jBASE variables can be set in the global system profile if a system-wide setting is desired. These variables will not be modified by jRCS, with exception of JBCPORTNO. On logon, jRCS sets the variable TERM to the term type of the user logging on, and REMOTEHOST to the IP address of the incoming connection.

Additional variables can be configured via the jRCS profile.

## jRCS Profile

Although jRCS retains most environment variables it obtains from the system profile and loads the user's profile under Windows during authentication, it may be desirable for some users to execute a batch file setting additional environment variables on a per-user basis.

jRCS provides this functionality through the use of jRCS profiles. The profiles are stored in file jrcsrc.cmd under Windows and .jrcsrc under Unix. The profiles must be located in the user's home directory to be loaded on start-up.

The profiles follow the format of standard batch files under Windows or shell scripts under UNIX, with the following exceptions:

- Executable programs are not executed and are ignored
- The CALL command under Windows connects the source from another file if found in the profile
- The . or source command under Unix connects the source from another file if found in the Unix profile
- Limited expansion is performed on variables being set, although the full set of expansion capabilities is not provided under UNIX

In essence, jRCS profiles are similar to REMOTE.CMD file used by jBASE Telnetd under Windows. For example, if the system administrator wants to set the user's JEDI\_FILEPATH variable during logon, he or she would create a JRCSRC.CMD file under Windows and place it in the user's home directory. The file would have the following content:

``` sh
rem This is a sample jrcsrc.cmd demonstrating the
rem setting of JEDI_FILEPATH

set JEDI_FILEPATH=%HOME%\FILES

The example above sets JEDI_FILEPATH to subdirectory FILES of the user's home directory.

To achieve the same result under UNIX, the administrator would create the file .jrcsrc in the user's home directory, with the following content:

# This is a sample .jrcsrc demonstrating the
# setting of JEDI_FILEPATH
export JEDI_FILEPATH=$HOME/files

```

## jRCS Authentication Process

As mentioned above, jRCS authenticates its logons via the system facilities, in much the same way as UNIX login or Windows WINLOGON processes do. The typical authentication sequence proceeds as follows:

1. The client computer makes a connection to TCP port 8236 on the host
2. The host jRCS process accepts the incoming connection and immediately creates a session request handler either by performing a fork() under UNIX or spawning a copy of itself on Windows. This step ensures that all communications are handled by a child process and provides isolation across sessions
3. The request handler waits for the client to send an open request with username, password, and terminal settings
4. When the open request arrives, the request handler creates a logon session either via NTLM under Windows, or PAM under Linux, or by reading the password file under AIX. If authentication fails, a failure reply is sent to the client and connection is terminated
5. On Windows the request handler loads the user's profile, along with global and local environment settings and applies those settings to the profile of the current session. jRCS only keeps the profile loaded for the duration of the authentication process. Once the user is authenticated and proper settings are established, the user's profile is unloaded. On UNIX the request handler reads the password file and extracts the user's home directory. At the end of this process the handler changes its current directory to the home directory from the user's profile or to the home directory of user account specified by the optional Account parameter to the Open function
6. The handler sets JBCPORTNO, TERM, HOME, and REMOTEHOST environment variables
7. The request handler attempts to open jrcsrc.cmd under Windows or .jrcsrc under UNIX in the user's home directory. If the open succeeds, the files are processed with any syntax errors logged to the jRCS log. The environment is modified with any settings read from jRCS profile
8. The handler modifies its privileges either by impersonating the authenticated user under Windows, or by setting its user ID, group ID, and supplemental group IDs to the IDs for the logged on user under Unix
9. The handler sends a successful reply to the client indicating that the session is opened and is ready to accept client requests

## Client Installation

jRCS uses XML over TCP/IP to communicate with the host, so the client library is not really necessary. However, recognizing the fact that XML is not straightforward and easy to interpret in all programming languages, it was decided to create a client library written in C++ to simplify this task. The Windows-based ActiveX client we supply is installed in the \$JBCRELEASEDIR\JRCSCLIENT folder or in C:\Program Files\JRCSCLIENT if \$JBCRELEASEDIR is unavailable on the client computer. Please note that the jRCS client does not require the installation of any jBASE libraries on the client computer.

The C++ dynamic-link library, along with the export library is installed in subfolder lib of the client installation folder. The include folder contains the header files required to compile the client programs, and the OS folder contains OS-specific dependencies of the include files. In order to compile a program using jRCS client, the environment in Microsoft Visual C++ must include the path to the client's include folder for pre-processor and lib folder for linker dependencies. The client must also specify jrcs.lib in the list of libraries the program links with. The installation automatically adds jrcs.dll to the system path, so the dynamic loader can find the library on program start-up.

## ActiveX Layer

On Windows systems, jRCS adds another layer enabling interoperability with ActiveX containers, such as Visual Basic. The installer writes the jrcax.dll library into the lib folder, along with jRCS.dll. The library is registered on the system as an ActiveX DLL and is accessible from Visual Basic via a list of references. The ActiveX library exposes a full set of jRCS functions to the client, along with error constants and I/O handler interface.

## Sample Program using jRCS for ActiveX /VB.NET

In order to test how jRCS can be called from Visual Basic, you need to perform the following steps:

1. Install jRCS server on the machine you designate as your host. Set up the client on your development machine (the host and development machines can be the same computer)
2. Ensure that jRCS service is started on the host
3. Create a user account called TEST on the host and note where you point the home directory of that user
4. Log on as user TEST on the host, set up jBASE environment and run jSH in the home directory
5. Create a blank J4 file called TEST. Pick the modulo at your discretion
6. Create a file called JRCSRC.CMD and set the jBASE environment variables in that file, including JBCRELEASEDIR, JBCGLOBALDIR, PATH, JEDI\_FILEPATH, etc. See section 4.1.3 for more information on how to work with jRCS profiles
7. Note the name or IP address of the host machine
8. Start Visual Basic on the development machine and create a blank EXE project. Open Form1 created by VB and add a button called Command1 to the form
9. From the Project menu select References and in the reference dialog check "jBASE Remote Connectivity Library". Close the reference dialog
10. Double-click the Command1 button and in Command1\_Click type (or paste) the following code:

``` vbnet
Private Sub Command1_Click()

 Dim Conn As New jConnection
 Dim TestFile As jFile
 Dim DA As New jDynArray
 Conn.Open "host", , "TEST", "Test035J"
 Set TestFile = Conn.OpenFile("TEST")
 DA.StringVal = "Attribute 1" & Conn.AM & "Attribute 2"
 TestFile.Write "TESTREC", DA

End Sub
```

Replace the name "host" on the open line with the name of your host machine and the blank quote with the password for user TEST.

1. Start the VB program and click the Command1 button. If your setup is correct, you should not encounter any errors while running the program
2. On the host, execute ED TEST TESTREC from the jSH prompt in the TEST account and page the record. You should see the following output:

```
TESTREC

TOP
.P
TOP
001 Attribute 1
002 Attribute 2
.
```

Your test is now complete. The jRCS ActiveX library is self-documenting, so looking at it in VB's Object Browser should give the developer a clear idea of what functions are exposed and how they work.

For a VB.NET project, a reference would need to be added for "JRClient.NET".

The equivalent VB.NET code for the above would be:

``` vbnet
Private Sub Command1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Command1.Click

 Dim Conn As New jConnection
 Dim TestFile As jFile
 Dim DA As New jDynArray
 Conn.Open("host", JConnection.JRCS_PORT, "TEST", "Test035J", "")
 TestFile = Conn.OpenFile("TEST")
 DA.StringVal = "Attribute 1" & JDynArray.AM & "Attribute 2"
 TestFile.Write("TESTREC", DA)

 End Sub
```

At the top of the form, the following line will also be required:

``` vbnet
Imports jBASE.jrcs
```

otherwise explicit references will need to be used within your code.

[Back to Connectivity](./../README.md)

<PageFooter />
