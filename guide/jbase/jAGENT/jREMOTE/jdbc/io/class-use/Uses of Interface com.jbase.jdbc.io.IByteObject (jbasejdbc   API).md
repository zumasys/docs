# Uses of Interface com.jbase.jdbc.io.IByteObject (jbasejdbc   API)

**Created At:** 9/25/2017 10:46:06 AM  
**Updated At:** 2/15/2018 8:02:48 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jdbc.io.IByteObject (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- [Class](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io")
- Use
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/io/class-use//39235-class-use/com_jbase_jdbc_io_class-use_IByteObject)
- [No Frames](/39235-class-use/com_jbase_jdbc_io_class-use_IByteObject)


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
com.jbase.jdbc.io.IByteObject

- <caption><span>Packages that use <a href="/39232-io/com_jbase_jdbc_io_IByteObject" title="interface in com.jbase.jdbc.io">IByteObject</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jdbc.io |   |
| com.jbase.jdbc.protocol |   |
- - <!--   -->
### Uses of [IByteObject](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io") in [com.jbase.jdbc.io](/39232-io/com_jbase_jdbc_io_package-summary)


<caption><span>Classes in <a href="/39232-io/com_jbase_jdbc_io_package-summary">com.jbase.jdbc.io</a> that implement <a href="/39232-io/com_jbase_jdbc_io_IByteObject" title="interface in com.jbase.jdbc.io">IByteObject</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `ByteObject`  |



<caption><span>Methods in <a href="/39232-io/com_jbase_jdbc_io_package-summary">com.jbase.jdbc.io</a> that return <a href="/39232-io/com_jbase_jdbc_io_IByteObject" title="interface in com.jbase.jdbc.io">IByteObject</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected IByteObject` | AbstractJBaseObjectReader.`readByteObject(char code,<br>              IByteObject o)`  |
| `IByteObject` | JBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned<br> if a null argument is passed in.<br> |
| `IByteObject` | AbstractJBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned<br> if a null argument is passed in.<br> |



<caption><span>Methods in <a href="/39232-io/com_jbase_jdbc_io_package-summary">com.jbase.jdbc.io</a> with parameters of type <a href="/39232-io/com_jbase_jdbc_io_IByteObject" title="interface in com.jbase.jdbc.io">IByteObject</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected IByteObject` | AbstractJBaseObjectReader.`readByteObject(char code,<br>              IByteObject o)`  |
| `IByteObject` | JBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned<br> if a null argument is passed in.<br> |
| `IByteObject` | AbstractJBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned<br> if a null argument is passed in.<br> |
| `void` | JBaseObjectWriter.`writeObject(IByteObject o)`  |
| `void` | AbstractJBaseObjectWriter.`writeObject(IByteObject o)`  |
    - <!--   -->
### Uses of [IByteObject](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io") in [com.jbase.jdbc.protocol](/39240-protocol/com_jbase_jdbc_protocol_package-summary)


<caption><span>Methods in <a href="/39240-protocol/com_jbase_jdbc_protocol_package-summary">com.jbase.jdbc.protocol</a> that return <a href="/39232-io/com_jbase_jdbc_io_IByteObject" title="interface in com.jbase.jdbc.io">IByteObject</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `IByteObject[]` | Row.`getData()`  |
| `IByteObject` | InputOutputResponse.`getOutput()`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- [Class](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io")
- Use
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/io/class-use//39235-class-use/com_jbase_jdbc_io_class-use_IByteObject)
- [No Frames](/39235-class-use/com_jbase_jdbc_io_class-use_IByteObject)


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
