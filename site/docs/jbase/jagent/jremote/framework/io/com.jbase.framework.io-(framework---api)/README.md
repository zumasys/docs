# com.jbase.framework.io (framework   API)

**Created At:** 9/25/2017 10:32:11 AM  
**Updated At:** 2/15/2018 8:02:36 AM  
**Original Doc:** [com_jbase_framework_io_package-summary](https://docs.jbase.com/39220-io/com_jbase_framework_io_package-summary)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="com.jbase.framework.io (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- Package
- Class
- [Use](./../uses-of-package-com.jbase.framework.io-%28framework---api%29)
- [Tree](./../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- Prev Package
- [Next Package](./../charset/com.jbase.framework.io.charset-%28framework---api%29)


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

# Package com.jbase.framework.io

- Interface Summary | Interface | Description |
| --- | --- |
| [IByteObject](./../ibyteobject-%28framework---api%29 "interface in com.jbase.framework.io") | <br>This interface allows a client to optimise the serialization of byte buffers.<br> |
| [JBaseObjectReader](./../jbaseobjectreader-%28framework---api%29 "interface in com.jbase.framework.io") | <br>Deserializes objects sent from the jsqld server.<br> |
| [JBaseObjectWriter](./../jbaseobjectwriter-%28framework---api%29 "interface in com.jbase.framework.io") | <br>Serializes objects to jBASE JDBC format.<br> |
| [JBaseSerializable](./../jbaseserializable-%28framework---api%29 "interface in com.jbase.framework.io") | <br>Interface which must be implemented by objects which take part in the<br> JDBC driver  jbase\_agent communication.<br> |
| [JBaseSerializable.TYPE](./../jbaseserializable-%28framework---api%29 "interface in com.jbase.framework.io") |   |
- Class Summary | Class | Description |
| --- | --- |
| [AbstractJBaseObjectReader](./../abstractjbaseobjectreader-%28framework---api%29 "class in com.jbase.framework.io") | <br>Deserializes JBaseSerializable objects sent from the jbase\_agent server,<br> or any other source of serialized JCF objects.<br> |
| [AbstractJBaseObjectWriter](./../abstractjbaseobjectwriter-%28framework---api%29 "class in com.jbase.framework.io") |   |
| [ByteObject](./../byteobject-%28framework---api%29 "class in com.jbase.framework.io") |   |
| [ByteTools](./../bytetools-%28framework---api%29 "class in com.jbase.framework.io") |   |
| [ErrorResponse](./../errorresponse-%28framework---api%29 "class in com.jbase.framework.io") |   |
| [GZipCompressor](./../gzipcompressor-%28framework---api%29 "class in com.jbase.framework.io") |   |
| [IOJBaseObjectReader](./../iojbaseobjectreader-%28framework---api%29 "class in com.jbase.framework.io") | <br>jBase object reader based on the DataInputStream.<br> |
| [IOJBaseObjectWriter](./../iojbaseobjectwriter-%28framework---api%29 "class in com.jbase.framework.io") | <br>jBase object writer based on the DataOutputStream.<br> |
| [JbaseMsg](./../jbasemsg-%28framework---api%29 "class in com.jbase.framework.io") | <br>jBASE Socket message<br> |
| [JbaseSocketConnection](./../jbasesocketconnection-%28framework---api%29 "class in com.jbase.framework.io") | <br>This class handles the connection and communication to<br> a jBASE server over a socket interface using the JbaseMsg<br> protocol.<br> |
| [NaiveTrustManager](./../naivetrustmanager-%28framework---api%29 "class in com.jbase.framework.io") | <br>This Trust Manager is "naive" because it trusts everyone.<br> |
| [NIOJBaseObjectReader](./../niojbaseobjectreader-%28framework---api%29 "class in com.jbase.framework.io") | <br>jBase object reader based on the new Java IO.<br> |
| [NIOJBaseObjectWriter](./../niojbaseobjectwriter-%28framework---api%29 "class in com.jbase.framework.io") | <br>jBase object writer using the new Java IO.<br> |
| [ObjectFactory](./../objectfactory-%28framework---api%29 "class in com.jbase.framework.io") |   |
| [OKResponse](./../okresponse-%28framework---api%29 "class in com.jbase.framework.io") |   |
| [PrefixByteBuffer](./../prefixbytebuffer-%28framework---api%29 "class in com.jbase.framework.io") |   |
| [Response](./../response-%28framework---api%29 "class in com.jbase.framework.io") | <br>Represents a response from jsqld.<br> |
| [SQLError](./../sqlerror-%28framework---api%29 "class in com.jbase.framework.io") |   |

Skip navigation links

- [Overview](../../../../overview-summary.html)
- Package
- Class
- [Use](./../uses-of-package-com.jbase.framework.io-%28framework---api%29)
- [Tree](./../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- Prev Package
- [Next Package](./../charset/com.jbase.framework.io.charset-%28framework---api%29)


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
