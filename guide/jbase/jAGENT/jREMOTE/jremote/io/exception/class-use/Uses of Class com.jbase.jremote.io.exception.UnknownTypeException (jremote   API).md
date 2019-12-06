# Uses of Class com.jbase.jremote.io.exception.UnknownTypeException (jremote   API)

**Created At:** 9/25/2017 11:47:26 AM  
**Updated At:** 2/15/2018 8:02:46 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Class com.jbase.jremote.io.exception.UnknownTypeException (jremote   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../../overview-summary.html)
- [Package](/39254-exception/com_jbase_jremote_io_exception_package-summary)
- [Class](/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException "class in com.jbase.jremote.io.exception")
- Use
- [Tree](/39254-exception/com_jbase_jremote_io_exception_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jremote/io/exception/class-use//39255-class-use/com_jbase_jremote_io_exception_class-use_UnknownTypeException)
- [No Frames](/39255-class-use/com_jbase_jremote_io_exception_class-use_UnknownTypeException)


- [All Classes](../../../../../../allclasses-noframe.html)


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
com.jbase.jremote.io.exception.UnknownTypeException

- <caption><span>Packages that use <a href="/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException" title="class in com.jbase.jremote.io.exception">UnknownTypeException</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jremote.io |   |
| com.jbase.jremote.jca.inflow |   |
- - <!--   -->
### Uses of [UnknownTypeException](/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException "class in com.jbase.jremote.io.exception") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


<caption><span>Methods in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> that throw <a href="/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException" title="class in com.jbase.jremote.io.exception">UnknownTypeException</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected JBaseSerializable` | ObjectFactory.`createGenericObjects(int objectType)`<br>Creates any generic (i.e common to all framework clients) objects.<br> |
| `protected abstract JBaseSerializable` | ObjectFactory.`createObject(int objectType)`<br>Create JBaseSerializable object from the supplied object type.<br> |
| `protected JBaseSerializable` | JRemoteObjectFactory.`createObject(int objectType)`  |
| `protected abstract ObjectFactory` | AbstractJBaseObjectReader.`getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders.<br> |
    - <!--   -->
### Uses of [UnknownTypeException](/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException "class in com.jbase.jremote.io.exception") in [com.jbase.jremote.jca.inflow](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)


<caption><span>Methods in <a href="/39262-inflow/com_jbase_jremote_jca_inflow_package-summary">com.jbase.jremote.jca.inflow</a> that throw <a href="/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException" title="class in com.jbase.jremote.io.exception">UnknownTypeException</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JBaseSerializable` | InboundObjectFactory.`createObject(int type)`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../../overview-summary.html)
- [Package](/39254-exception/com_jbase_jremote_io_exception_package-summary)
- [Class](/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException "class in com.jbase.jremote.io.exception")
- Use
- [Tree](/39254-exception/com_jbase_jremote_io_exception_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jremote/io/exception/class-use//39255-class-use/com_jbase_jremote_io_exception_class-use_UnknownTypeException)
- [No Frames](/39255-class-use/com_jbase_jremote_io_exception_class-use_UnknownTypeException)


- [All Classes](../../../../../../allclasses-noframe.html)


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
