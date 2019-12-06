# com.jbase.jremote.io Class Hierarchy (jremote   API)

**Created At:** 9/25/2017 11:53:50 AM  
**Updated At:** 2/15/2018 8:02:16 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="com.jbase.jremote.io Class Hierarchy (jremote   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39250-io/com_jbase_jremote_io_package-summary)
- Class
- Use
- Tree
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev](/39248-jremote/com_jbase_jremote_package-tree)
- [Next](/39251-charset/com_jbase_jremote_io_charset_package-tree)


- [Frames](../../../../index.html?com/jbase/jremote/io//39250-io/com_jbase_jremote_io_package-tree)
- [No Frames](/39250-io/com_jbase_jremote_io_package-tree)


- [All Classes](../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_top");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>
<!--   -->
<!-- ========= END OF TOP NAVBAR ========= -->
# Hierarchy For Package com.jbase.jremote.io
Package Hierarchies:
- [All Packages](../../../../overview-tree.html)

## Class Hierarchy

- java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
    - com.jbase.jremote.io.[AbstractJBaseObjectReader](/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader "class in com.jbase.jremote.io") (implements com.jbase.jremote.io.[JBaseObjectReader](/39250-io/com_jbase_jremote_io_jbaseobjectreader "interface in com.jbase.jremote.io"))
        - com.jbase.jremote.io.[IOJBaseObjectReader](/39250-io/com_jbase_jremote_io_iojbaseobjectreader "class in com.jbase.jremote.io")
        - com.jbase.jremote.io.[NIOJBaseObjectReader](/39250-io/com_jbase_jremote_io_niojbaseobjectreader "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[AbstractJBaseObjectWriter](/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter "class in com.jbase.jremote.io") (implements com.jbase.jremote.io.[JBaseObjectWriter](/39250-io/com_jbase_jremote_io_jbaseobjectwriter "interface in com.jbase.jremote.io"))
        - com.jbase.jremote.io.[IOJBaseObjectWriter](/39250-io/com_jbase_jremote_io_iojbaseobjectwriter "class in com.jbase.jremote.io")
        - com.jbase.jremote.io.[NIOJBaseObjectWriter](/39250-io/com_jbase_jremote_io_niojbaseobjectwriter "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[AbstractJRemoteConnection](/39250-io/com_jbase_jremote_io_abstractjremoteconnection "class in com.jbase.jremote.io")
        - com.jbase.jremote.io.[InterceptorConnection](/39250-io/com_jbase_jremote_io_interceptorconnection "class in com.jbase.jremote.io")
        - com.jbase.jremote.io.[JRemoteSocketConnection](/39250-io/com_jbase_jremote_io_jremotesocketconnection "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[ByteObject](/39250-io/com_jbase_jremote_io_byteobject "class in com.jbase.jremote.io") (implements com.jbase.jremote.io.[IByteObject](/39250-io/com_jbase_jremote_io_ibyteobject "interface in com.jbase.jremote.io"))
    - com.jbase.jremote.io.[ByteTools](/39250-io/com_jbase_jremote_io_ByteTools "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[GZipCompressor](/39250-io/com_jbase_jremote_io_GZipCompressor "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[JbaseMsg](/39250-io/com_jbase_jremote_io_JbaseMsg "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[JbaseSocketConnection](/39250-io/com_jbase_jremote_io_JbaseSocketConnection "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[JConnectionImpl](/39250-io/com_jbase_jremote_io_jconnectionimpl "class in com.jbase.jremote.io") (implements com.jbase.jremote.[JXAConnection](/39248-jremote/com_jbase_jremote_jxaconnection "interface in com.jbase.jremote"))
    - com.jbase.jremote.io.[JFileImpl](/39250-io/com_jbase_jremote_io_jfileimpl "class in com.jbase.jremote.io") (implements com.jbase.jremote.[JFile](/39248-jremote/com_jbase_jremote_jfile "interface in com.jbase.jremote"))
    - com.jbase.jremote.io.[JResultSetImpl](/39250-io/com_jbase_jremote_io_jresultsetimpl "class in com.jbase.jremote.io") (implements com.jbase.jremote.[JResultSet](/39248-jremote/com_jbase_jremote_jresultset "interface in com.jbase.jremote"))
    - com.jbase.jremote.io.[JSelectListImpl](/39250-io/com_jbase_jremote_io_jselectlistimpl "class in com.jbase.jremote.io") (implements com.jbase.jremote.[JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote"))
        - com.jbase.jremote.io.[JCursorImpl](/39250-io/com_jbase_jremote_io_jcursorimpl "class in com.jbase.jremote.io") (implements com.jbase.jremote.[JCursor](/39248-jremote/com_jbase_jremote_jcursor "interface in com.jbase.jremote"))
    - com.jbase.jremote.io.[JStatementImpl](/39250-io/com_jbase_jremote_io_jstatementimpl "class in com.jbase.jremote.io") (implements com.jbase.jremote.[JStatement](/39248-jremote/com_jbase_jremote_jstatement "interface in com.jbase.jremote"))
    - com.jbase.jremote.io.[NaiveTrustManager](/39250-io/com_jbase_jremote_io_NaiveTrustManager "class in com.jbase.jremote.io") (implements javax.net.ssl.[X509TrustManager](http://java.sun.com/j2se/1.5.0/docs/api/javax/net/ssl/X509TrustManager.html?is-external=true "class or interface in javax.net.ssl"))
    - com.jbase.jremote.io.[ObjectFactory](/39250-io/com_jbase_jremote_io_objectfactory "class in com.jbase.jremote.io")
        - com.jbase.jremote.io.[JRemoteObjectFactory](/39250-io/com_jbase_jremote_io_JRemoteObjectFactory "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[PrefixByteBuffer](/39250-io/com_jbase_jremote_io_PrefixByteBuffer "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[Response](/39250-io/com_jbase_jremote_io_response "class in com.jbase.jremote.io") (implements com.jbase.jremote.io.[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io"))
        - com.jbase.jremote.io.[ErrorResponse](/39250-io/com_jbase_jremote_io_errorresponse "class in com.jbase.jremote.io")
        - com.jbase.jremote.io.[OKResponse](/39250-io/com_jbase_jremote_io_okresponse "class in com.jbase.jremote.io")
    - com.jbase.jremote.io.[SQLError](/39250-io/com_jbase_jremote_io_sqlerror "class in com.jbase.jremote.io") (implements com.jbase.jremote.io.[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io"))


## Interface Hierarchy

- com.jbase.jremote.io.[IByteObject](/39250-io/com_jbase_jremote_io_ibyteobject "interface in com.jbase.jremote.io")
- com.jbase.jremote.io.[JBaseObjectReader](/39250-io/com_jbase_jremote_io_jbaseobjectreader "interface in com.jbase.jremote.io")
- com.jbase.jremote.io.[JBaseObjectWriter](/39250-io/com_jbase_jremote_io_jbaseobjectwriter "interface in com.jbase.jremote.io")
- com.jbase.jremote.io.[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io")
- com.jbase.jremote.io.[JBaseSerializable.TYPE](/39226-inflow/com_jbase_jremote_io_JBaseSerializable.TYPE "interface in com.jbase.jremote.io")
- com.jbase.jremote.io.[JRemoteObjectFactory.TYPE](/39250-io/com_jbase_jremote_io_JRemoteObjectFactory.TYPE "interface in com.jbase.jremote.io")
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39250-io/com_jbase_jremote_io_package-summary)
- Class
- Use
- Tree
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev](/39248-jremote/com_jbase_jremote_package-tree)
- [Next](/39251-charset/com_jbase_jremote_io_charset_package-tree)


- [Frames](../../../../index.html?com/jbase/jremote/io//39250-io/com_jbase_jremote_io_package-tree)
- [No Frames](/39250-io/com_jbase_jremote_io_package-tree)


- [All Classes](../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_bottom");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>
<!--   -->
<!-- ======== END OF BOTTOM NAVBAR ======= -->
<small>			<center>			<i>Copyright © 2017 jBASE, Inc.. All Rights Reserved.</i>		</center></small>
