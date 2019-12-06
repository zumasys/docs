# com.jbase.jdbc.io (jbasejdbc   API)

**Created At:** 9/25/2017 10:53:52 AM  
**Updated At:** 2/15/2018 8:02:43 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="com.jbase.jdbc.io (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- Package
- Class
- [Use](/39232-io/com_jbase_jdbc_io_package-use)
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Package](/39230-driver/com_jbase_jdbc_driver_package-summary)
- [Next Package](/39233-charset/com_jbase_jdbc_io_charset_package-summary)


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_package-summary)
- [No Frames](/39232-io/com_jbase_jdbc_io_package-summary)


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
# Package com.jbase.jdbc.io

- <caption><span>Interface Summary</span><span class="tabEnd"> </span></caption>| Interface | Description |
| --- | --- |
| [IByteObject](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io") | <br>This interface allows a client to optimise the serialization of byte buffers.<br> |
| [JBaseJDBCObjectFactory.TYPE](/39232-io/com_jbase_jdbc_io_JBaseJDBCObjectFactory.TYPE "interface in com.jbase.jdbc.io") |   |
| [JBaseObjectReader](/39232-io/com_jbase_jdbc_io_jbaseobjectreader "interface in com.jbase.jdbc.io") | <br>Deserializes objects sent from the jsqld server.<br> |
| [JBaseObjectWriter](/39232-io/com_jbase_jdbc_io_jbaseobjectwriter "interface in com.jbase.jdbc.io") | <br>Serializes objects to jBASE JDBC format.<br> |
| [JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io") | <br>Interface which must be implemented by objects which take part in the<br> JDBC driver  jbase\_agent communication.<br> |
| [JBaseSerializable.TYPE](/39232-io/com_jbase_jdbc_io_JBaseSerializable.TYPE "interface in com.jbase.jdbc.io") |   |
- <caption><span>Class Summary</span><span class="tabEnd"> </span></caption>| Class | Description |
| --- | --- |
| [AbstractJBaseObjectReader](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader "class in com.jbase.jdbc.io") | <br>Deserializes JBaseSerializable objects sent from the jbase\_agent server,<br> or any other source of serialized JCF objects.<br> |
| [AbstractJBaseObjectWriter](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter "class in com.jbase.jdbc.io") |   |
| [ByteObject](/39232-io/com_jbase_jdbc_io_ByteObject "class in com.jbase.jdbc.io") |   |
| [ByteTools](/39232-io/com_jbase_jdbc_io_bytetools "class in com.jbase.jdbc.io") |   |
| [ErrorResponse](/39232-io/com_jbase_jdbc_io_ErrorResponse "class in com.jbase.jdbc.io") |   |
| [GZipCompressor](/39232-io/com_jbase_jdbc_io_GZipCompressor "class in com.jbase.jdbc.io") |   |
| [IOJBaseObjectReader](/39232-io/com_jbase_jdbc_io_IOJBaseObjectReader "class in com.jbase.jdbc.io") | <br>jBase object reader based on the DataInputStream.<br> |
| [IOJBaseObjectWriter](/39232-io/com_jbase_jdbc_io_IOJBaseObjectWriter "class in com.jbase.jdbc.io") | <br>jBase object writer based on the DataOutputStream.<br> |
| [JBaseJDBCObjectFactory](/39232-io/com_jbase_jdbc_io_jbasejdbcobjectfactory "class in com.jbase.jdbc.io") | <br>Creates objects received from the jbase\_agent server.<br> |
| [JbaseMsg](/39232-io/com_jbase_jdbc_io_JbaseMsg "class in com.jbase.jdbc.io") | <br>jBASE Socket message<br> |
| [JbaseSocketConnection](/39232-io/com_jbase_jdbc_io_jbasesocketconnection "class in com.jbase.jdbc.io") | <br>This class handles the connection and communication to<br> a jBASE server over a socket interface using the JbaseMsg<br> protocol.<br> |
| [NaiveTrustManager](/39232-io/com_jbase_jdbc_io_naivetrustmanager "class in com.jbase.jdbc.io") | <br>This Trust Manager is "naive" because it trusts everyone.<br> |
| [NIOJBaseObjectReader](/39232-io/com_jbase_jdbc_io_niojbaseobjectreader "class in com.jbase.jdbc.io") | <br>jBase object reader based on the new Java IO.<br> |
| [NIOJBaseObjectWriter](/39232-io/com_jbase_jdbc_io_niojbaseobjectwriter "class in com.jbase.jdbc.io") | <br>jBase object writer using the new Java IO.<br> |
| [ObjectFactory](/39232-io/com_jbase_jdbc_io_objectfactory "class in com.jbase.jdbc.io") |   |
| [OKResponse](/39232-io/com_jbase_jdbc_io_OKResponse "class in com.jbase.jdbc.io") |   |
| [PrefixByteBuffer](/39232-io/com_jbase_jdbc_io_prefixbytebuffer "class in com.jbase.jdbc.io") |   |
| [Response](/39232-io/com_jbase_jdbc_io_response "class in com.jbase.jdbc.io") | <br>Represents a response from jsqld.<br> |
| [SQLError](/39232-io/com_jbase_jdbc_io_sqlerror "class in com.jbase.jdbc.io") |   |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- Package
- Class
- [Use](/39232-io/com_jbase_jdbc_io_package-use)
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Package](/39230-driver/com_jbase_jdbc_driver_package-summary)
- [Next Package](/39233-charset/com_jbase_jdbc_io_charset_package-summary)


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_package-summary)
- [No Frames](/39232-io/com_jbase_jdbc_io_package-summary)


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
