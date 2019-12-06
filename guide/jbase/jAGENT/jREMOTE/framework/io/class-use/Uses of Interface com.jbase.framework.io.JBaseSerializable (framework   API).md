# Uses of Interface com.jbase.framework.io.JBaseSerializable (framework   API)

**Created At:** 9/25/2017 10:25:35 AM  
**Updated At:** 2/15/2018 8:02:37 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.framework.io.JBaseSerializable (framework   API)";
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
- [Class](/39220-io/com_jbase_framework_io_JBaseSerializable "interface in com.jbase.framework.io")
- Use
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/framework/io/class-use//39223-class-use/com_jbase_framework_io_class-use_JBaseSerializable)
- [No Frames](/39223-class-use/com_jbase_framework_io_class-use_JBaseSerializable)


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
com.jbase.framework.io.JBaseSerializable

- <caption><span>Packages that use <a href="/39220-io/com_jbase_framework_io_JBaseSerializable" title="interface in com.jbase.framework.io">JBaseSerializable</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.framework.io |   |
- - <!--   -->
### Uses of [JBaseSerializable](/39220-io/com_jbase_framework_io_JBaseSerializable "interface in com.jbase.framework.io") in [com.jbase.framework.io](/39220-io/com_jbase_framework_io_package-summary)


<caption><span>Classes in <a href="/39220-io/com_jbase_framework_io_package-summary">com.jbase.framework.io</a> that implement <a href="/39220-io/com_jbase_framework_io_JBaseSerializable" title="interface in com.jbase.framework.io">JBaseSerializable</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `ErrorResponse`  |
| `class` | `OKResponse`  |
| `class` | `Response`<br>Represents a response from jsqld.<br> |
| `class` | `SQLError`  |



<caption><span>Methods in <a href="/39220-io/com_jbase_framework_io_package-summary">com.jbase.framework.io</a> that return <a href="/39220-io/com_jbase_framework_io_JBaseSerializable" title="interface in com.jbase.framework.io">JBaseSerializable</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected JBaseSerializable` | ObjectFactory.`createGenericObjects(int objectType)`<br>Creates any generic (i.e common to all framework clients) objects.<br> |
| `protected abstract JBaseSerializable` | ObjectFactory.`createObject(int objectType)`<br>Create JBaseSerializable object from the supplied object type.<br> |
| `protected JBaseSerializable` | AbstractJBaseObjectReader.`readJBaseSerializableObject(char code,<br>                           JBaseSerializable o)`  |
| `JBaseSerializable` | JBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, a JBaseSerializable object should be created and returned<br> if a null argument is passed in.<br> |
| `JBaseSerializable` | AbstractJBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, the ObjectFactory will be used to create a<br> JBaseSerializable object if a null argument is passed in.<br> |
| `JBaseSerializable` | JBaseObjectReader.`readRootObject()`<br>Deserializes a root object.<br> |
| `JBaseSerializable` | AbstractJBaseObjectReader.`readRootObject()`  |



<caption><span>Methods in <a href="/39220-io/com_jbase_framework_io_package-summary">com.jbase.framework.io</a> with parameters of type <a href="/39220-io/com_jbase_framework_io_JBaseSerializable" title="interface in com.jbase.framework.io">JBaseSerializable</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected JBaseSerializable` | AbstractJBaseObjectReader.`readJBaseSerializableObject(char code,<br>                           JBaseSerializable o)`  |
| `JBaseSerializable` | JBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, a JBaseSerializable object should be created and returned<br> if a null argument is passed in.<br> |
| `JBaseSerializable` | AbstractJBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, the ObjectFactory will be used to create a<br> JBaseSerializable object if a null argument is passed in.<br> |
| `protected void` | AbstractJBaseObjectWriter.`writeJBaseSerializableObject(JBaseSerializable o)`  |
| `void` | JBaseObjectWriter.`writeObject(JBaseSerializable o)`  |
| `void` | AbstractJBaseObjectWriter.`writeObject(JBaseSerializable o)`  |
| `void` | JBaseObjectWriter.`writeRootObject(JBaseSerializable o)`  |
| `void` | AbstractJBaseObjectWriter.`writeRootObject(JBaseSerializable o)`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- [Class](/39220-io/com_jbase_framework_io_JBaseSerializable "interface in com.jbase.framework.io")
- Use
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/framework/io/class-use//39223-class-use/com_jbase_framework_io_class-use_JBaseSerializable)
- [No Frames](/39223-class-use/com_jbase_framework_io_class-use_JBaseSerializable)


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
