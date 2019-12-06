# com.jbase.framework.io (framework   API)

**Created At:** 9/25/2017 10:32:11 AM  
**Updated At:** 2/15/2018 8:02:36 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="com.jbase.framework.io (framework   API)";
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
- [Use](/39220-io/com_jbase_framework_io_package-use)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- Prev Package
- [Next Package](/39221-charset/com_jbase_framework_io_charset_package-summary)


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_package-summary)
- [No Frames](/39220-io/com_jbase_framework_io_package-summary)


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
# Package com.jbase.framework.io

- <caption><span>Interface Summary</span><span class="tabEnd"> </span></caption>| Interface | Description |
| --- | --- |
| [IByteObject](/39220-io/com_jbase_framework_io_IByteObject "interface in com.jbase.framework.io") | <br>This interface allows a client to optimise the serialization of byte buffers.<br> |
| [JBaseObjectReader](/39220-io/com_jbase_framework_io_JBaseObjectReader "interface in com.jbase.framework.io") | <br>Deserializes objects sent from the jsqld server.<br> |
| [JBaseObjectWriter](/39220-io/com_jbase_framework_io_JBaseObjectWriter "interface in com.jbase.framework.io") | <br>Serializes objects to jBASE JDBC format.<br> |
| [JBaseSerializable](/39220-io/com_jbase_framework_io_JBaseSerializable "interface in com.jbase.framework.io") | <br>Interface which must be implemented by objects which take part in the<br> JDBC driver  jbase\_agent communication.<br> |
| [JBaseSerializable.TYPE](/39220-io/com_jbase_framework_io_JBaseSerializable.TYPE "interface in com.jbase.framework.io") |   |
- <caption><span>Class Summary</span><span class="tabEnd"> </span></caption>| Class | Description |
| --- | --- |
| [AbstractJBaseObjectReader](/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader "class in com.jbase.framework.io") | <br>Deserializes JBaseSerializable objects sent from the jbase\_agent server,<br> or any other source of serialized JCF objects.<br> |
| [AbstractJBaseObjectWriter](/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter "class in com.jbase.framework.io") |   |
| [ByteObject](/39220-io/com_jbase_framework_io_ByteObject "class in com.jbase.framework.io") |   |
| [ByteTools](/39220-io/com_jbase_framework_io_ByteTools "class in com.jbase.framework.io") |   |
| [ErrorResponse](/39220-io/com_jbase_framework_io_ErrorResponse "class in com.jbase.framework.io") |   |
| [GZipCompressor](/39220-io/com_jbase_framework_io_GZipCompressor "class in com.jbase.framework.io") |   |
| [IOJBaseObjectReader](/39220-io/com_jbase_framework_io_IOJBaseObjectReader "class in com.jbase.framework.io") | <br>jBase object reader based on the DataInputStream.<br> |
| [IOJBaseObjectWriter](/39220-io/com_jbase_framework_io_IOJBaseObjectWriter "class in com.jbase.framework.io") | <br>jBase object writer based on the DataOutputStream.<br> |
| [JbaseMsg](/39220-io/com_jbase_framework_io_JbaseMsg "class in com.jbase.framework.io") | <br>jBASE Socket message<br> |
| [JbaseSocketConnection](/39220-io/com_jbase_framework_io_JbaseSocketConnection "class in com.jbase.framework.io") | <br>This class handles the connection and communication to<br> a jBASE server over a socket interface using the JbaseMsg<br> protocol.<br> |
| [NaiveTrustManager](/39220-io/com_jbase_framework_io_NaiveTrustManager "class in com.jbase.framework.io") | <br>This Trust Manager is "naive" because it trusts everyone.<br> |
| [NIOJBaseObjectReader](/39220-io/com_jbase_framework_io_NIOJBaseObjectReader "class in com.jbase.framework.io") | <br>jBase object reader based on the new Java IO.<br> |
| [NIOJBaseObjectWriter](/39220-io/com_jbase_framework_io_NIOJBaseObjectWriter "class in com.jbase.framework.io") | <br>jBase object writer using the new Java IO.<br> |
| [ObjectFactory](/39220-io/com_jbase_framework_io_ObjectFactory "class in com.jbase.framework.io") |   |
| [OKResponse](/39220-io/com_jbase_framework_io_OKResponse "class in com.jbase.framework.io") |   |
| [PrefixByteBuffer](/39220-io/com_jbase_framework_io_PrefixByteBuffer "class in com.jbase.framework.io") |   |
| [Response](/39220-io/com_jbase_framework_io_Response "class in com.jbase.framework.io") | <br>Represents a response from jsqld.<br> |
| [SQLError](/39220-io/com_jbase_framework_io_SQLError "class in com.jbase.framework.io") |   |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- Package
- Class
- [Use](/39220-io/com_jbase_framework_io_package-use)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- Prev Package
- [Next Package](/39221-charset/com_jbase_framework_io_charset_package-summary)


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_package-summary)
- [No Frames](/39220-io/com_jbase_framework_io_package-summary)


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
