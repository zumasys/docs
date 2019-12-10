# com.jbase.jremote.io (jremote   API)

**Created At:** 9/25/2017 11:53:38 AM  
**Updated At:** 2/15/2018 8:02:56 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="com.jbase.jremote.io (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- Package
- Class
- [Use](/39250-io/com_jbase_jremote_io_package-use)
- [Tree](/39250-io/com_jbase_jremote_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Package](/30312-jagent/jremote-api)
- [Next Package](/39251-charset/com_jbase_jremote_io_charset_package-summary)


- [Frames](../../../../index.html?com/jbase/jremote/io//39250-io/com_jbase_jremote_io_package-summary)
- [No Frames](/39250-io/com_jbase_jremote_io_package-summary)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

# Package com.jbase.jremote.io

- Interface Summary | Interface | Description |
| --- | --- |
| [IByteObject](/39250-io/com_jbase_jremote_io_ibyteobject "interface in com.jbase.jremote.io") | <br>This interface allows a client to optimise the serialization of byte buffers.<br> |
| [JBaseObjectReader](/39250-io/com_jbase_jremote_io_jbaseobjectreader "interface in com.jbase.jremote.io") | <br>Deserializes objects sent from the jsqld server.<br> |
| [JBaseObjectWriter](/39250-io/com_jbase_jremote_io_jbaseobjectwriter "interface in com.jbase.jremote.io") | <br>Serializes objects to jBASE JDBC format.<br> |
| [JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io") | <br>Interface which must be implemented by objects which take part in the<br> JDBC driver  jbase\_agent communication.<br> |
| [JBaseSerializable.TYPE](/39226-inflow/com_jbase_jremote_io_JBaseSerializable.TYPE "interface in com.jbase.jremote.io") |   |
| [JRemoteObjectFactory.TYPE](/39250-io/com_jbase_jremote_io_JRemoteObjectFactory.TYPE "interface in com.jbase.jremote.io") |   |
- Class Summary | Class | Description |
| --- | --- |
| [AbstractJBaseObjectReader](/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader "class in com.jbase.jremote.io") | <br>Deserializes JBaseSerializable objects sent from the jbase\_agent server,<br> or any other source of serialized JCF objects.<br> |
| [AbstractJBaseObjectWriter](/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter "class in com.jbase.jremote.io") |   |
| [AbstractJRemoteConnection](/39250-io/com_jbase_jremote_io_abstractjremoteconnection "class in com.jbase.jremote.io") | <br>Abstract interface to a remote jBASE instance.<br> |
| [ByteObject](/39250-io/com_jbase_jremote_io_byteobject "class in com.jbase.jremote.io") |   |
| [ByteTools](/39250-io/com_jbase_jremote_io_ByteTools "class in com.jbase.jremote.io") |   |
| [ErrorResponse](/39250-io/com_jbase_jremote_io_errorresponse "class in com.jbase.jremote.io") |   |
| [GZipCompressor](/39250-io/com_jbase_jremote_io_GZipCompressor "class in com.jbase.jremote.io") |   |
| [InterceptorConnection](/39250-io/com_jbase_jremote_io_interceptorconnection "class in com.jbase.jremote.io") | <br>This class is responsible for handling the message sending to and from<br> an underlying JConnection.<br> |
| [IOJBaseObjectReader](/39250-io/com_jbase_jremote_io_iojbaseobjectreader "class in com.jbase.jremote.io") | <br>jBase object reader based on the DataInputStream.<br> |
| [IOJBaseObjectWriter](/39250-io/com_jbase_jremote_io_iojbaseobjectwriter "class in com.jbase.jremote.io") | <br>jBase object writer based on the DataOutputStream.<br> |
| [JbaseMsg](/39250-io/com_jbase_jremote_io_JbaseMsg "class in com.jbase.jremote.io") | <br>jBASE Socket message<br> |
| [JbaseSocketConnection](/39250-io/com_jbase_jremote_io_JbaseSocketConnection "class in com.jbase.jremote.io") | <br>This class handles the connection and communication to<br> a jBASE server over a socket interface using the JbaseMsg<br> protocol.<br> |
| [JConnectionImpl](/39250-io/com_jbase_jremote_io_jconnectionimpl "class in com.jbase.jremote.io") | <br>The connection to a remote jBASE instance implemented<br> using a IO messages over an abstract connection.<br> |
| [JCursorImpl](/39250-io/com_jbase_jremote_io_jcursorimpl "class in com.jbase.jremote.io") | <br>A cursor to a jBASE file.<br> |
| [JFileImpl](/39250-io/com_jbase_jremote_io_jfileimpl "class in com.jbase.jremote.io") | <br>The JFile object is used to query, read, and write to jBASE files.<br> |
| [JRemoteObjectFactory](/39250-io/com_jbase_jremote_io_JRemoteObjectFactory "class in com.jbase.jremote.io") | <br>Creates objects received from the jbase\_agent server.<br> |
| [JRemoteSocketConnection](/39250-io/com_jbase_jremote_io_jremotesocketconnection "class in com.jbase.jremote.io") | <br>This class handles the connection and communication to<br> the jListener server over a socket interface.<br> |
| [JResultSetImpl](/39250-io/com_jbase_jremote_io_jresultsetimpl "class in com.jbase.jremote.io") |   |
| [JSelectListImpl](/39250-io/com_jbase_jremote_io_jselectlistimpl "class in com.jbase.jremote.io") | <br>A select list to a jBASE file.<br> |
| [JStatementImpl](/39250-io/com_jbase_jremote_io_jstatementimpl "class in com.jbase.jremote.io") |   |
| [NaiveTrustManager](/39250-io/com_jbase_jremote_io_NaiveTrustManager "class in com.jbase.jremote.io") | <br>This Trust Manager is "naive" because it trusts everyone.<br> |
| [NIOJBaseObjectReader](/39250-io/com_jbase_jremote_io_niojbaseobjectreader "class in com.jbase.jremote.io") | <br>jBase object reader based on the new Java IO.<br> |
| [NIOJBaseObjectWriter](/39250-io/com_jbase_jremote_io_niojbaseobjectwriter "class in com.jbase.jremote.io") | <br>jBase object writer using the new Java IO.<br> |
| [ObjectFactory](/39250-io/com_jbase_jremote_io_objectfactory "class in com.jbase.jremote.io") |   |
| [OKResponse](/39250-io/com_jbase_jremote_io_okresponse "class in com.jbase.jremote.io") |   |
| [PrefixByteBuffer](/39250-io/com_jbase_jremote_io_PrefixByteBuffer "class in com.jbase.jremote.io") |   |
| [Response](/39250-io/com_jbase_jremote_io_response "class in com.jbase.jremote.io") | <br>Represents a response from jsqld.<br> |
| [SQLError](/39250-io/com_jbase_jremote_io_sqlerror "class in com.jbase.jremote.io") |   |

Skip navigation links

- [Overview](../../../../overview-summary.html)
- Package
- Class
- [Use](/39250-io/com_jbase_jremote_io_package-use)
- [Tree](/39250-io/com_jbase_jremote_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Package](/30312-jagent/jremote-api)
- [Next Package](/39251-charset/com_jbase_jremote_io_charset_package-summary)


- [Frames](../../../../index.html?com/jbase/jremote/io//39250-io/com_jbase_jremote_io_package-summary)
- [No Frames](/39250-io/com_jbase_jremote_io_package-summary)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
