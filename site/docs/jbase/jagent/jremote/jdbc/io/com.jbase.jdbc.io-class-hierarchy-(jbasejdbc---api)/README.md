# com.jbase.jdbc.io Class Hierarchy (jbasejdbc   API)

**Created At:** 9/25/2017 10:54:04 AM  
**Updated At:** 2/15/2018 8:02:47 AM  
**Original Doc:** [com_jbase_jdbc_io_package-tree](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_package-tree)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="com.jbase.jdbc.io Class Hierarchy (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.io-%28jbasejdbc---api%29)
- Class
- Use
- Tree
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev](./../../driver/com.jbase.jdbc.driver-class-hierarchy-%28jbasejdbc---api%29)
- [Next](./../charset/com.jbase.jdbc.io.charset-class-hierarchy-%28jbasejdbc---api%29)


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

# Hierarchy For Package com.jbase.jdbc.io
Package Hierarchies:
- [All Packages](../../../../overview-tree.html)

## Class Hierarchy

- java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
    - com.jbase.jdbc.io.[AbstractJBaseObjectReader](./../abstractjbaseobjectreader-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io") (implements com.jbase.jdbc.io.[JBaseObjectReader](./../jbaseobjectreader-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
        - com.jbase.jdbc.io.[IOJBaseObjectReader](./../iojbaseobjectreader-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io")
        - com.jbase.jdbc.io.[NIOJBaseObjectReader](./../niojbaseobjectreader-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[AbstractJBaseObjectWriter](./../abstractjbaseobjectwriter-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io") (implements com.jbase.jdbc.io.[JBaseObjectWriter](./../jbaseobjectwriter-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
        - com.jbase.jdbc.io.[IOJBaseObjectWriter](./../iojbaseobjectwriter-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io")
        - com.jbase.jdbc.io.[NIOJBaseObjectWriter](./../niojbaseobjectwriter-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[ByteObject](./../byteobject-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io") (implements com.jbase.jdbc.io.[IByteObject](./../ibyteobject-%28jbasejdbc---api%29 "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.io.[ByteTools](./../bytetools-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[GZipCompressor](./../gzipcompressor-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[JbaseMsg](./../jbasemsg-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[JbaseSocketConnection](./../jbasesocketconnection-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[NaiveTrustManager](./../naivetrustmanager-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") (implements javax.net.ssl.[X509TrustManager](http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true "class or interface in javax.net.ssl"))
    - com.jbase.jdbc.io.[ObjectFactory](./../objectfactory-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io")
        - com.jbase.jdbc.io.[JBaseJDBCObjectFactory](./../jbasejdbcobjectfactory-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[PrefixByteBuffer](./../prefixbytebuffer-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[Response](./../response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") (implements com.jbase.jdbc.io.[JBaseSerializable](./../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
        - com.jbase.jdbc.io.[ErrorResponse](./../errorresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io")
        - com.jbase.jdbc.io.[OKResponse](./../okresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[SQLError](./../sqlerror-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") (implements com.jbase.jdbc.io.[JBaseSerializable](./../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))


## Interface Hierarchy

- com.jbase.jdbc.io.[IByteObject](./../ibyteobject-%28jbasejdbc---api%29 "interface in com.jbase.jdbc.io")
- com.jbase.jdbc.io.[JBaseJDBCObjectFactory.TYPE](/39232-io/com_jbase_jdbc_io_JBaseJDBCObjectFactory.TYPE "interface in com.jbase.jdbc.io")
- com.jbase.jdbc.io.[JBaseObjectReader](./../jbaseobjectreader-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
- com.jbase.jdbc.io.[JBaseObjectWriter](./../jbaseobjectwriter-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
- com.jbase.jdbc.io.[JBaseSerializable](./../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
- com.jbase.jdbc.io.[JBaseSerializable.TYPE](/39232-io/com_jbase_jdbc_io_JBaseSerializable.TYPE "interface in com.jbase.jdbc.io")

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.io-%28jbasejdbc---api%29)
- Class
- Use
- Tree
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev](./../../driver/com.jbase.jdbc.driver-class-hierarchy-%28jbasejdbc---api%29)
- [Next](./../charset/com.jbase.jdbc.io.charset-class-hierarchy-%28jbasejdbc---api%29)


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
