# Uses of Interface com.jbase.framework.io.inflow.RequestHandler (framework   API)

**Created At:** 9/25/2017 10:28:23 AM  
**Updated At:** 2/15/2018 8:02:42 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.framework.io.inflow.RequestHandler (framework   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../../overview-summary.html)
- [Package](/39226-inflow/com_jbase_framework_io_inflow_package-summary)
- [Class](/39226-inflow/com_jbase_framework_io_inflow_RequestHandler "interface in com.jbase.framework.io.inflow")
- Use
- [Tree](/39226-inflow/com_jbase_framework_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/framework/io/inflow/class-use//39227-class-use/com_jbase_framework_io_inflow_class-use_RequestHandler)
- [No Frames](/39227-class-use/com_jbase_framework_io_inflow_class-use_RequestHandler)


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
## Uses of Interface
com.jbase.framework.io.inflow.RequestHandler

- <caption><span>Packages that use <a href="/39226-inflow/com_jbase_framework_io_inflow_RequestHandler" title="interface in com.jbase.framework.io.inflow">RequestHandler</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.framework.io.inflow |   |
- - <!--   -->
### Uses of [RequestHandler](/39226-inflow/com_jbase_framework_io_inflow_RequestHandler "interface in com.jbase.framework.io.inflow") in [com.jbase.framework.io.inflow](/39226-inflow/com_jbase_framework_io_inflow_package-summary)


<caption><span>Methods in <a href="/39226-inflow/com_jbase_framework_io_inflow_package-summary">com.jbase.framework.io.inflow</a> that return <a href="/39226-inflow/com_jbase_framework_io_inflow_RequestHandler" title="interface in com.jbase.framework.io.inflow">RequestHandler</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | RequestProcessingAbstractFactory.`createRequestHandler(RequestListenerService rls)`<br>In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.<br> |
| `protected RequestHandler` | RequestListenerService.`getRequestHandler()`  |



<caption><span>Constructors in <a href="/39226-inflow/com_jbase_framework_io_inflow_package-summary">com.jbase.framework.io.inflow</a> with parameters of type <a href="/39226-inflow/com_jbase_framework_io_inflow_RequestHandler" title="interface in com.jbase.framework.io.inflow">RequestHandler</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s)`  |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s,<br>                     int socketTimeout)`<br>Construct a request listener that will block for the supplied<br> number of milliseconds.<br> |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../../overview-summary.html)
- [Package](/39226-inflow/com_jbase_framework_io_inflow_package-summary)
- [Class](/39226-inflow/com_jbase_framework_io_inflow_RequestHandler "interface in com.jbase.framework.io.inflow")
- Use
- [Tree](/39226-inflow/com_jbase_framework_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/framework/io/inflow/class-use//39227-class-use/com_jbase_framework_io_inflow_class-use_RequestHandler)
- [No Frames](/39227-class-use/com_jbase_framework_io_inflow_class-use_RequestHandler)


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
