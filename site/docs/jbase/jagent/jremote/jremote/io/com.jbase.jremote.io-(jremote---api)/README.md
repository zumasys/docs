# com.jbase.jremote.io (jremote   API)

**Created At:** 9/25/2017 11:53:38 AM  
**Updated At:** 2/15/2018 8:02:56 AM  
**Original Doc:** [com_jbase_jremote_io_package-summary](https://docs.jbase.com/39250-io/com_jbase_jremote_io_package-summary)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="com.jbase.jremote.io (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- Package
- Class
- [Use](./../uses-of-package-com.jbase.jremote.io-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Package](./../../../../jremote-api)
- [Next Package](./../charset/com.jbase.jremote.io.charset-%28jremote---api%29)


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

# Package com.jbase.jremote.io

- Interface Summary | Interface | Description |
| --- | --- |
| [IByteObject](./../ibyteobject-%28jremote-api%29 "interface in com.jbase.jremote.io") | <br>This interface allows a client to optimise the serialization of byte buffers.<br> |
| [JBaseObjectReader](./../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io") | <br>Deserializes objects sent from the jsqld server.<br> |
| [JBaseObjectWriter](./../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io") | <br>Serializes objects to jBASE JDBC format.<br> |
| [JBaseSerializable](./../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io") | <br>Interface which must be implemented by objects which take part in the<br> JDBC driver  jbase\_agent communication.<br> |
| [JBaseSerializable.TYPE](/39226-inflow/com_jbase_jremote_io_JBaseSerializable.TYPE "interface in com.jbase.jremote.io") |   |
| [JRemoteObjectFactory.TYPE](./../jremoteobjectfactory-%28jremote---api%29 "interface in com.jbase.jremote.io") |   |
- Class Summary | Class | Description |
| --- | --- |
| [AbstractJBaseObjectReader](./../abstractjbaseobjectreader-%28jremote-api%29 "class in com.jbase.jremote.io") | <br>Deserializes JBaseSerializable objects sent from the jbase\_agent server,<br> or any other source of serialized JCF objects.<br> |
| [AbstractJBaseObjectWriter](./../abstractjbaseobjectwriter-%28jremote-api%29 "class in com.jbase.jremote.io") |   |
| [AbstractJRemoteConnection](./../abstractjremoteconnection-%28jremote-api%29 "class in com.jbase.jremote.io") | <br>Abstract interface to a remote jBASE instance.<br> |
| [ByteObject](./../byteobject-%28jremote-api%29 "class in com.jbase.jremote.io") |   |
| [ByteTools](./../bytetools-%28jremote---api%29 "class in com.jbase.jremote.io") |   |
| [ErrorResponse](./../errorresponse-%28jremote-api%29 "class in com.jbase.jremote.io") |   |
| [GZipCompressor](./../gzipcompressor-%28jremote---api%29 "class in com.jbase.jremote.io") |   |
| [InterceptorConnection](./../interceptorconnection-%28jremote-api%29 "class in com.jbase.jremote.io") | <br>This class is responsible for handling the message sending to and from<br> an underlying JConnection.<br> |
| [IOJBaseObjectReader](./../iojbaseobjectreader-%28jremote-api%29 "class in com.jbase.jremote.io") | <br>jBase object reader based on the DataInputStream.<br> |
| [IOJBaseObjectWriter](./../iojbaseobjectwriter-%28jremote-api%29 "class in com.jbase.jremote.io") | <br>jBase object writer based on the DataOutputStream.<br> |
| [JbaseMsg](./../jbasemsg-%28jremote---api%29 "class in com.jbase.jremote.io") | <br>jBASE Socket message<br> |
| [JbaseSocketConnection](./../jbasesocketconnection-%28jremote---api%29 "class in com.jbase.jremote.io") | <br>This class handles the connection and communication to<br> a jBASE server over a socket interface using the JbaseMsg<br> protocol.<br> |
| [JConnectionImpl](./../jconnectionimpl-%28jremote-api%29 "class in com.jbase.jremote.io") | <br>The connection to a remote jBASE instance implemented<br> using a IO messages over an abstract connection.<br> |
| [JCursorImpl](./../jcursorimpl-%28jremote-api%29 "class in com.jbase.jremote.io") | <br>A cursor to a jBASE file.<br> |
| [JFileImpl](./../jfileimpl-%28jremote-api%29 "class in com.jbase.jremote.io") | <br>The JFile object is used to query, read, and write to jBASE files.<br> |
| [JRemoteObjectFactory](./../jremoteobjectfactory-%28jremote---api%29 "class in com.jbase.jremote.io") | <br>Creates objects received from the jbase\_agent server.<br> |
| [JRemoteSocketConnection](./../jremotesocketconnection-%28jremote-api%29 "class in com.jbase.jremote.io") | <br>This class handles the connection and communication to<br> the jListener server over a socket interface.<br> |
| [JResultSetImpl](./../jresultsetimpl-%28jremote-api%29 "class in com.jbase.jremote.io") |   |
| [JSelectListImpl](./../jselectlistimpl-%28jremote---api%29 "class in com.jbase.jremote.io") | <br>A select list to a jBASE file.<br> |
| [JStatementImpl](./../jstatementimpl-%28jremote-api%29 "class in com.jbase.jremote.io") |   |
| [NaiveTrustManager](./../naivetrustmanager-%28jremote---api%29 "class in com.jbase.jremote.io") | <br>This Trust Manager is "naive" because it trusts everyone.<br> |
| [NIOJBaseObjectReader](./../niojbaseobjectreader-%28jremote-api%29 "class in com.jbase.jremote.io") | <br>jBase object reader based on the new Java IO.<br> |
| [NIOJBaseObjectWriter](./../niojbaseobjectwriter-%28jremote-api%29 "class in com.jbase.jremote.io") | <br>jBase object writer using the new Java IO.<br> |
| [ObjectFactory](./../objectfactory-%28jremote---api%29 "class in com.jbase.jremote.io") |   |
| [OKResponse](./../okresponse-%28jremote-api%29 "class in com.jbase.jremote.io") |   |
| [PrefixByteBuffer](./../prefixbytebuffer-%28jremote---api%29 "class in com.jbase.jremote.io") |   |
| [Response](./../response-%28jremote-api%29 "class in com.jbase.jremote.io") | <br>Represents a response from jsqld.<br> |
| [SQLError](./../sqlerror-%28jremote-api%29 "class in com.jbase.jremote.io") |   |

Skip navigation links

- [Overview](../../../../overview-summary.html)
- Package
- Class
- [Use](./../uses-of-package-com.jbase.jremote.io-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Package](./../../../../jremote-api)
- [Next Package](./../charset/com.jbase.jremote.io.charset-%28jremote---api%29)


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
