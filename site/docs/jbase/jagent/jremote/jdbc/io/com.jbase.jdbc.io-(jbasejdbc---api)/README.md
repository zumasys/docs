# com.jbase.jdbc.io (jbasejdbc   API)

**Created At:** 9/25/2017 10:53:52 AM  
**Updated At:** 2/15/2018 8:02:43 AM  
**Original Doc:** [com_jbase_jdbc_io_package-summary](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_package-summary)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="com.jbase.jdbc.io (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- Package
- Class
- [Use](./../uses-of-package-com.jbase.jdbc.io-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.io-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Package](./../../driver/com.jbase.jdbc.driver-%28jbasejdbc---api%29)
- [Next Package](./../charset/com.jbase.jdbc.io.charset-%28jbasejdbc---api%29)


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

# Package com.jbase.jdbc.io

- Interface Summary | Interface | Description |
| --- | --- |
| [IByteObject](./../ibyteobject-%28jbasejdbc---api%29 "interface in com.jbase.jdbc.io") | <br>This interface allows a client to optimise the serialization of byte buffers.<br> |
| [JBaseJDBCObjectFactory.TYPE](./../jbasejdbcobjectfactory-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") |   |
| [JBaseObjectReader](./../jbaseobjectreader-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") | <br>Deserializes objects sent from the jsqld server.<br> |
| [JBaseObjectWriter](./../jbaseobjectwriter-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") | <br>Serializes objects to jBASE JDBC format.<br> |
| [JBaseSerializable](./../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") | <br>Interface which must be implemented by objects which take part in the<br> JDBC driver  jbase\_agent communication.<br> |
| [JBaseSerializable.TYPE](./../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") |   |
- Class Summary | Class | Description |
| --- | --- |
| [AbstractJBaseObjectReader](./../abstractjbaseobjectreader-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io") | <br>Deserializes JBaseSerializable objects sent from the jbase\_agent server,<br> or any other source of serialized JCF objects.<br> |
| [AbstractJBaseObjectWriter](./../abstractjbaseobjectwriter-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io") |   |
| [ByteObject](./../byteobject-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io") |   |
| [ByteTools](./../bytetools-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") |   |
| [ErrorResponse](./../errorresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io") |   |
| [GZipCompressor](./../gzipcompressor-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io") |   |
| [IOJBaseObjectReader](./../iojbaseobjectreader-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io") | <br>jBase object reader based on the DataInputStream.<br> |
| [IOJBaseObjectWriter](./../iojbaseobjectwriter-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io") | <br>jBase object writer based on the DataOutputStream.<br> |
| [JBaseJDBCObjectFactory](./../jbasejdbcobjectfactory-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") | <br>Creates objects received from the jbase\_agent server.<br> |
| [JbaseMsg](./../jbasemsg-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io") | <br>jBASE Socket message<br> |
| [JbaseSocketConnection](./../jbasesocketconnection-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") | <br>This class handles the connection and communication to<br> a jBASE server over a socket interface using the JbaseMsg<br> protocol.<br> |
| [NaiveTrustManager](./../naivetrustmanager-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") | <br>This Trust Manager is "naive" because it trusts everyone.<br> |
| [NIOJBaseObjectReader](./../niojbaseobjectreader-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") | <br>jBase object reader based on the new Java IO.<br> |
| [NIOJBaseObjectWriter](./../niojbaseobjectwriter-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io") | <br>jBase object writer using the new Java IO.<br> |
| [ObjectFactory](./../objectfactory-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") |   |
| [OKResponse](./../okresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io") |   |
| [PrefixByteBuffer](./../prefixbytebuffer-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") |   |
| [Response](./../response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") | <br>Represents a response from jsqld.<br> |
| [SQLError](./../sqlerror-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") |   |

Skip navigation links

- [Overview](../../../../overview-summary.html)
- Package
- Class
- [Use](./../uses-of-package-com.jbase.jdbc.io-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.io-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Package](./../../driver/com.jbase.jdbc.driver-%28jbasejdbc---api%29)
- [Next Package](./../charset/com.jbase.jdbc.io.charset-%28jbasejdbc---api%29)


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
