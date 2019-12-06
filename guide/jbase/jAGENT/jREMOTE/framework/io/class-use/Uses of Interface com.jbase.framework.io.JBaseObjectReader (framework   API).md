# Uses of Interface com.jbase.framework.io.JBaseObjectReader (framework   API)

**Created At:** 9/25/2017 10:25:21 AM  
**Updated At:** 2/15/2018 8:02:31 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.framework.io.JBaseObjectReader (framework   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- [Class](/39220-io/com_jbase_framework_io_JBaseObjectReader "interface in com.jbase.framework.io")
- Use
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/framework/io/class-use//39223-class-use/com_jbase_framework_io_class-use_JBaseObjectReader)
- [No Frames](/39223-class-use/com_jbase_framework_io_class-use_JBaseObjectReader)


- [All Classes](../../../../../allclasses-noframe.html)


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
## Uses of Interface
com.jbase.framework.io.JBaseObjectReader

- <caption><span>Packages that use <a href="/39220-io/com_jbase_framework_io_JBaseObjectReader" title="interface in com.jbase.framework.io">JBaseObjectReader</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.framework.io |   |
- - <!--   -->
### Uses of [JBaseObjectReader](/39220-io/com_jbase_framework_io_JBaseObjectReader "interface in com.jbase.framework.io") in [com.jbase.framework.io](/39220-io/com_jbase_framework_io_package-summary)


<caption><span>Classes in <a href="/39220-io/com_jbase_framework_io_package-summary">com.jbase.framework.io</a> that implement <a href="/39220-io/com_jbase_framework_io_JBaseObjectReader" title="interface in com.jbase.framework.io">JBaseObjectReader</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `AbstractJBaseObjectReader`<br>Deserializes JBaseSerializable objects sent from the jbase\_agent server,<br> or any other source of serialized JCF objects.<br> |
| `class` | `IOJBaseObjectReader`<br>jBase object reader based on the DataInputStream.<br> |
| `class` | `NIOJBaseObjectReader`<br>jBase object reader based on the new Java IO.<br> |



<caption><span>Methods in <a href="/39220-io/com_jbase_framework_io_package-summary">com.jbase.framework.io</a> with parameters of type <a href="/39220-io/com_jbase_framework_io_JBaseObjectReader" title="interface in com.jbase.framework.io">JBaseObjectReader</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | SQLError.`readObject(JBaseObjectReader reader,<br>          int version)`<br>Method :                readObject()<br><br> Description:   Read object off the wire.<br> |
| `void` | OKResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | JBaseSerializable.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | ErrorResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- [Class](/39220-io/com_jbase_framework_io_JBaseObjectReader "interface in com.jbase.framework.io")
- Use
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/framework/io/class-use//39223-class-use/com_jbase_framework_io_class-use_JBaseObjectReader)
- [No Frames](/39223-class-use/com_jbase_framework_io_class-use_JBaseObjectReader)


- [All Classes](../../../../../allclasses-noframe.html)


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
