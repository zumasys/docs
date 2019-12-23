# com.jbase.jremote.io Class Hierarchy (jremote   API)

**Created At:** 9/25/2017 11:53:50 AM  
**Updated At:** 2/15/2018 8:02:16 AM  
**Original Doc:** [com_jbase_jremote_io_package-tree](https://docs.jbase.com/39250-io/com_jbase_jremote_io_package-tree)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="com.jbase.jremote.io Class Hierarchy (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io-%28jremote---api%29)
- Class
- Use
- Tree
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev](./../../com.jbase.jremote-class-hierarchy)
- [Next](./../charset/com.jbase.jremote.io.charset-class-hierarchy-%28jremote---api%29)


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

# Hierarchy For Package com.jbase.jremote.io
Package Hierarchies:
- [All Packages](../../../../overview-tree.html)

## Class Hierarchy

- java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
    - com.jbase.jremote.io.[AbstractJBaseObjectReader](./../abstractjbaseobjectreader-%28jremote-api%29 "class in com.jbase.jremote.io") (implements com.jbase.jremote.io.[JBaseObjectReader](./../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io"))
        - com.jbase.jremote.io.[IOJBaseObjectReader](./../iojbaseobjectreader-%28jremote-api%29 "class in com.jbase.jremote.io")
        - com.jbase.jremote.io.[NIOJBaseObjectReader](./../niojbaseobjectreader-%28jremote-api%29 "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[AbstractJBaseObjectWriter](./../abstractjbaseobjectwriter-%28jremote-api%29 "class in com.jbase.jremote.io") (implements com.jbase.jremote.io.[JBaseObjectWriter](./../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io"))
        - com.jbase.jremote.io.[IOJBaseObjectWriter](./../iojbaseobjectwriter-%28jremote-api%29 "class in com.jbase.jremote.io")
        - com.jbase.jremote.io.[NIOJBaseObjectWriter](./../niojbaseobjectwriter-%28jremote-api%29 "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[AbstractJRemoteConnection](./../abstractjremoteconnection-%28jremote-api%29 "class in com.jbase.jremote.io")
        - com.jbase.jremote.io.[InterceptorConnection](./../interceptorconnection-%28jremote-api%29 "class in com.jbase.jremote.io")
        - com.jbase.jremote.io.[JRemoteSocketConnection](./../jremotesocketconnection-%28jremote-api%29 "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[ByteObject](./../byteobject-%28jremote-api%29 "class in com.jbase.jremote.io") (implements com.jbase.jremote.io.[IByteObject](./../ibyteobject-%28jremote-api%29 "interface in com.jbase.jremote.io"))
    - com.jbase.jremote.io.[ByteTools](./../bytetools-%28jremote---api%29 "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[GZipCompressor](./../gzipcompressor-%28jremote---api%29 "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[JbaseMsg](./../jbasemsg-%28jremote---api%29 "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[JbaseSocketConnection](./../jbasesocketconnection-%28jremote---api%29 "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[JConnectionImpl](./../jconnectionimpl-%28jremote-api%29 "class in com.jbase.jremote.io") (implements com.jbase.jremote.[JXAConnection](./../../jxaconnection-%28jremote-api%29 "interface in com.jbase.jremote"))
    - com.jbase.jremote.io.[JFileImpl](./../jfileimpl-%28jremote-api%29 "class in com.jbase.jremote.io") (implements com.jbase.jremote.[JFile](./../../jfile-%28jremote-api%29 "interface in com.jbase.jremote"))
    - com.jbase.jremote.io.[JResultSetImpl](./../jresultsetimpl-%28jremote-api%29 "class in com.jbase.jremote.io") (implements com.jbase.jremote.[JResultSet](./../../jresultset-%28jremote-api%29 "interface in com.jbase.jremote"))
    - com.jbase.jremote.io.[JSelectListImpl](./../jselectlistimpl-%28jremote---api%29 "class in com.jbase.jremote.io") (implements com.jbase.jremote.[JSelectList](./../../jselectlist-%28jremote-api%29 "interface in com.jbase.jremote"))
        - com.jbase.jremote.io.[JCursorImpl](./../jcursorimpl-%28jremote-api%29 "class in com.jbase.jremote.io") (implements com.jbase.jremote.[JCursor](./../../jcursor-%28jremote-api%29 "interface in com.jbase.jremote"))
    - com.jbase.jremote.io.[JStatementImpl](./../jstatementimpl-%28jremote-api%29 "class in com.jbase.jremote.io") (implements com.jbase.jremote.[JStatement](./../../jstatement-%28jremote-api%29 "interface in com.jbase.jremote"))
    - com.jbase.jremote.io.[NaiveTrustManager](./../naivetrustmanager-%28jremote---api%29 "class in com.jbase.jremote.io") (implements javax.net.ssl.[X509TrustManager](http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true "class or interface in javax.net.ssl"))
    - com.jbase.jremote.io.[ObjectFactory](./../objectfactory-%28jremote---api%29 "class in com.jbase.jremote.io")
        - com.jbase.jremote.io.[JRemoteObjectFactory](./../jremoteobjectfactory-%28jremote---api%29 "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[PrefixByteBuffer](./../prefixbytebuffer-%28jremote---api%29 "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[Response](./../response-%28jremote-api%29 "class in com.jbase.jremote.io") (implements com.jbase.jremote.io.[JBaseSerializable](./../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io"))
        - com.jbase.jremote.io.[ErrorResponse](./../errorresponse-%28jremote-api%29 "class in com.jbase.jremote.io")
        - com.jbase.jremote.io.[OKResponse](./../okresponse-%28jremote-api%29 "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[SQLError](./../sqlerror-%28jremote-api%29 "class in com.jbase.jremote.io") (implements com.jbase.jremote.io.[JBaseSerializable](./../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io"))


## Interface Hierarchy

- com.jbase.jremote.io.[IByteObject](./../ibyteobject-%28jremote-api%29 "interface in com.jbase.jremote.io")
- com.jbase.jremote.io.[JBaseObjectReader](./../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io")
- com.jbase.jremote.io.[JBaseObjectWriter](./../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io")
- com.jbase.jremote.io.[JBaseSerializable](./../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")
- com.jbase.jremote.io.[JBaseSerializable.TYPE](/39226-inflow/com_jbase_jremote_io_JBaseSerializable.TYPE "interface in com.jbase.jremote.io")
- com.jbase.jremote.io.[JRemoteObjectFactory.TYPE](./../jremoteobjectfactory-%28jremote---api%29 "interface in com.jbase.jremote.io")

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io-%28jremote---api%29)
- Class
- Use
- Tree
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev](./../../com.jbase.jremote-class-hierarchy)
- [Next](./../charset/com.jbase.jremote.io.charset-class-hierarchy-%28jremote---api%29)


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
