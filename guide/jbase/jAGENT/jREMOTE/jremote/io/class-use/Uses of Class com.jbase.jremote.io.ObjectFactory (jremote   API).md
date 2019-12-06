# Uses of Class com.jbase.jremote.io.ObjectFactory (jremote   API)

**Created At:** 9/25/2017 11:46:37 AM  
**Updated At:** 2/15/2018 8:02:41 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Class com.jbase.jremote.io.ObjectFactory (jremote   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39250-io/com_jbase_jremote_io_package-summary)
- [Class](/39250-io/com_jbase_jremote_io_objectfactory "class in com.jbase.jremote.io")
- Use
- [Tree](/39250-io/com_jbase_jremote_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jremote/io/class-use//39253-class-use/com_jbase_jremote_io_class-use_ObjectFactory)
- [No Frames](/39253-class-use/com_jbase_jremote_io_class-use_ObjectFactory)


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
## Uses of Class
com.jbase.jremote.io.ObjectFactory

- <caption><span>Packages that use <a href="/39250-io/com_jbase_jremote_io_objectfactory" title="class in com.jbase.jremote.io">ObjectFactory</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jremote.io |   |
| com.jbase.jremote.jca.inflow |   |
- - <!--   -->
### Uses of [ObjectFactory](/39250-io/com_jbase_jremote_io_objectfactory "class in com.jbase.jremote.io") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


<caption><span>Subclasses of <a href="/39250-io/com_jbase_jremote_io_objectfactory" title="class in com.jbase.jremote.io">ObjectFactory</a> in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `JRemoteObjectFactory`<br>Creates objects received from the jbase\_agent server.<br> |



<caption><span>Methods in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> that return <a href="/39250-io/com_jbase_jremote_io_objectfactory" title="class in com.jbase.jremote.io">ObjectFactory</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `ObjectFactory` | NIOJBaseObjectReader.`getObjectFactory()`  |
| `ObjectFactory` | IOJBaseObjectReader.`getObjectFactory()`  |
| `protected abstract ObjectFactory` | AbstractJBaseObjectReader.`getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders.<br> |



<caption><span>Constructors in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> with parameters of type <a href="/39250-io/com_jbase_jremote_io_objectfactory" title="class in com.jbase.jremote.io">ObjectFactory</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `IOJBaseObjectReader(ObjectFactory factory,<br>                   byte[] b)`<br>Constructor FOR TESTING ONLY.<br> |
| `IOJBaseObjectReader(ObjectFactory factory,<br>                   InputStream is)`  |
| `NIOJBaseObjectReader(ObjectFactory factory,<br>                    SocketChannel channel)`  |
    - <!--   -->
### Uses of [ObjectFactory](/39250-io/com_jbase_jremote_io_objectfactory "class in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)


<caption><span>Subclasses of <a href="/39250-io/com_jbase_jremote_io_objectfactory" title="class in com.jbase.jremote.io">ObjectFactory</a> in <a href="/39262-inflow/com_jbase_jremote_jca_inflow_package-summary">com.jbase.jremote.jca.inflow</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `InboundObjectFactory`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39250-io/com_jbase_jremote_io_package-summary)
- [Class](/39250-io/com_jbase_jremote_io_objectfactory "class in com.jbase.jremote.io")
- Use
- [Tree](/39250-io/com_jbase_jremote_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jremote/io/class-use//39253-class-use/com_jbase_jremote_io_class-use_ObjectFactory)
- [No Frames](/39253-class-use/com_jbase_jremote_io_class-use_ObjectFactory)


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
