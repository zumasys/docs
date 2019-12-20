# com.jbase.jdbc.io Class Hierarchy (jbasejdbc   API)

**Created At:** 9/25/2017 10:54:04 AM  
**Updated At:** 2/15/2018 8:02:47 AM  
**Original Doc:** [com_jbase_jdbc_io_package-tree](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_package-tree)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="com.jbase.jdbc.io Class Hierarchy (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- Class
- Use
- Tree
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev](/39230-driver/com_jbase_jdbc_driver_package-tree)
- [Next](/39233-charset/com_jbase_jdbc_io_charset_package-tree)


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_package-tree)
- [No Frames](/39232-io/com_jbase_jdbc_io_package-tree)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

# Hierarchy For Package com.jbase.jdbc.io
Package Hierarchies:
- [All Packages](../../../../overview-tree.html)

## Class Hierarchy

- java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
    - com.jbase.jdbc.io.[AbstractJBaseObjectReader](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader "class in com.jbase.jdbc.io") (implements com.jbase.jdbc.io.[JBaseObjectReader](/39232-io/com_jbase_jdbc_io_jbaseobjectreader "interface in com.jbase.jdbc.io"))
        - com.jbase.jdbc.io.[IOJBaseObjectReader](/39232-io/com_jbase_jdbc_io_IOJBaseObjectReader "class in com.jbase.jdbc.io")
        - com.jbase.jdbc.io.[NIOJBaseObjectReader](/39232-io/com_jbase_jdbc_io_niojbaseobjectreader "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[AbstractJBaseObjectWriter](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter "class in com.jbase.jdbc.io") (implements com.jbase.jdbc.io.[JBaseObjectWriter](/39232-io/com_jbase_jdbc_io_jbaseobjectwriter "interface in com.jbase.jdbc.io"))
        - com.jbase.jdbc.io.[IOJBaseObjectWriter](/39232-io/com_jbase_jdbc_io_IOJBaseObjectWriter "class in com.jbase.jdbc.io")
        - com.jbase.jdbc.io.[NIOJBaseObjectWriter](/39232-io/com_jbase_jdbc_io_niojbaseobjectwriter "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[ByteObject](/39232-io/com_jbase_jdbc_io_ByteObject "class in com.jbase.jdbc.io") (implements com.jbase.jdbc.io.[IByteObject](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.io.[ByteTools](/39232-io/com_jbase_jdbc_io_bytetools "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[GZipCompressor](/39232-io/com_jbase_jdbc_io_GZipCompressor "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[JbaseMsg](/39232-io/com_jbase_jdbc_io_JbaseMsg "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[JbaseSocketConnection](/39232-io/com_jbase_jdbc_io_jbasesocketconnection "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[NaiveTrustManager](/39232-io/com_jbase_jdbc_io_naivetrustmanager "class in com.jbase.jdbc.io") (implements javax.net.ssl.[X509TrustManager](http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true "class or interface in javax.net.ssl"))
    - com.jbase.jdbc.io.[ObjectFactory](/39232-io/com_jbase_jdbc_io_objectfactory "class in com.jbase.jdbc.io")
        - com.jbase.jdbc.io.[JBaseJDBCObjectFactory](/39232-io/com_jbase_jdbc_io_jbasejdbcobjectfactory "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[PrefixByteBuffer](/39232-io/com_jbase_jdbc_io_prefixbytebuffer "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[Response](/39232-io/com_jbase_jdbc_io_response "class in com.jbase.jdbc.io") (implements com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))
        - com.jbase.jdbc.io.[ErrorResponse](/39232-io/com_jbase_jdbc_io_ErrorResponse "class in com.jbase.jdbc.io")
        - com.jbase.jdbc.io.[OKResponse](/39232-io/com_jbase_jdbc_io_OKResponse "class in com.jbase.jdbc.io")
    - com.jbase.jdbc.io.[SQLError](/39232-io/com_jbase_jdbc_io_sqlerror "class in com.jbase.jdbc.io") (implements com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))


## Interface Hierarchy

- com.jbase.jdbc.io.[IByteObject](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io")
- com.jbase.jdbc.io.[JBaseJDBCObjectFactory.TYPE](/39232-io/com_jbase_jdbc_io_JBaseJDBCObjectFactory.TYPE "interface in com.jbase.jdbc.io")
- com.jbase.jdbc.io.[JBaseObjectReader](/39232-io/com_jbase_jdbc_io_jbaseobjectreader "interface in com.jbase.jdbc.io")
- com.jbase.jdbc.io.[JBaseObjectWriter](/39232-io/com_jbase_jdbc_io_jbaseobjectwriter "interface in com.jbase.jdbc.io")
- com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
- com.jbase.jdbc.io.[JBaseSerializable.TYPE](/39232-io/com_jbase_jdbc_io_JBaseSerializable.TYPE "interface in com.jbase.jdbc.io")

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- Class
- Use
- Tree
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev](/39230-driver/com_jbase_jdbc_driver_package-tree)
- [Next](/39233-charset/com_jbase_jdbc_io_charset_package-tree)


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_package-tree)
- [No Frames](/39232-io/com_jbase_jdbc_io_package-tree)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
