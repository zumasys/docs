# Uses of Interface com.jbase.jremote.io.IByteObject (jremote API)

**Created At:** 9/25/2017 11:44:03 AM  
**Updated At:** 4/5/2018 8:47:53 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jremote.io.IByteObject (jremote   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

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
com.jbase.jremote.io.IByteObject

| Package<br> | Description<br> |
| --- | --- |
<caption>&nbsp;<span>Packages that use <a href="/39250-io/com_jbase_jremote_io_ibyteobject" title="interface in com.jbase.jremote.io">IByteObject</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |



<!--   -->

### Uses of [IByteObject](/39250-io/com_jbase_jremote_io_ibyteobject "interface in com.jbase.jremote.io") in [com.jbase.jremote](/30312-jagent/jremote-api)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Classes in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a> that implement <a href="/39250-io/com_jbase_jremote_io_ibyteobject" title="interface in com.jbase.jremote.io">IByteObject</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `class `<br> | `JDynArray`<br>The JDynArray is a jBASE type that implements a dynamic string array where attribute, value, and subvalue delimiters mark the array indices.<br> |




<!--   -->

### Uses of [IByteObject](/39250-io/com_jbase_jremote_io_ibyteobject "interface in com.jbase.jremote.io") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Classes in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> that implement <a href="/39250-io/com_jbase_jremote_io_ibyteobject" title="interface in com.jbase.jremote.io">IByteObject</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `class `<br> | `ByteObject` <br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> that return <a href="/39250-io/com_jbase_jremote_io_ibyteobject" title="interface in com.jbase.jremote.io">IByteObject</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `protected IByteObject`<br> | AbstractJBaseObjectReader.`readByteObject(char code, IByteObject o)` <br> |
| `IByteObject`<br> | JBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned if a null argument is passed in.<br> |
| `IByteObject`<br> | AbstractJBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned if a null argument is passed in.<br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> with parameters of type <a href="/39250-io/com_jbase_jremote_io_ibyteobject" title="interface in com.jbase.jremote.io">IByteObject</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `protected IByteObject`<br> | AbstractJBaseObjectReader.`readByteObject(char code, IByteObject o)` <br> |
| `IByteObject`<br> | JBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned if a null argument is passed in.<br> |
| `IByteObject`<br> | AbstractJBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned if a null argument is passed in.<br> |
| `void`<br> | JBaseObjectWriter.`writeObject(IByteObject o)` <br> |
| `void`<br> | AbstractJBaseObjectWriter.`writeObject(IByteObject o)` <br> |
<!-- ======= START OF BOTTOM NAVBAR ====== -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)

<!--   -->
