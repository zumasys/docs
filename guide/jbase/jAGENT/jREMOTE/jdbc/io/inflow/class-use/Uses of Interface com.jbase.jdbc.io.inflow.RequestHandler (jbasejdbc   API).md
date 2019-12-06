# Uses of Interface com.jbase.jdbc.io.inflow.RequestHandler (jbasejdbc   API)

**Created At:** 9/25/2017 10:49:52 AM  
**Updated At:** 2/15/2018 8:02:51 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jdbc.io.inflow.RequestHandler (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../../overview-summary.html)
- [Package](/39238-inflow/com_jbase_jdbc_io_inflow_package-summary)
- [Class](/39238-inflow/com_jbase_jdbc_io_inflow_RequestHandler "interface in com.jbase.jdbc.io.inflow")
- Use
- [Tree](/39238-inflow/com_jbase_jdbc_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jdbc/io/inflow/class-use//39239-class-use/com_jbase_jdbc_io_inflow_class-use_RequestHandler)
- [No Frames](/39239-class-use/com_jbase_jdbc_io_inflow_class-use_RequestHandler)


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
com.jbase.jdbc.io.inflow.RequestHandler

- <caption><span>Packages that use <a href="/39238-inflow/com_jbase_jdbc_io_inflow_RequestHandler" title="interface in com.jbase.jdbc.io.inflow">RequestHandler</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jdbc.io.inflow |   |
- - <!--   -->
### Uses of [RequestHandler](/39238-inflow/com_jbase_jdbc_io_inflow_RequestHandler "interface in com.jbase.jdbc.io.inflow") in [com.jbase.jdbc.io.inflow](/39238-inflow/com_jbase_jdbc_io_inflow_package-summary)


<caption><span>Methods in <a href="/39238-inflow/com_jbase_jdbc_io_inflow_package-summary">com.jbase.jdbc.io.inflow</a> that return <a href="/39238-inflow/com_jbase_jdbc_io_inflow_RequestHandler" title="interface in com.jbase.jdbc.io.inflow">RequestHandler</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | RequestProcessingAbstractFactory.`createRequestHandler(RequestListenerService rls)`<br>In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.<br> |
| `protected RequestHandler` | RequestListenerService.`getRequestHandler()`  |



<caption><span>Constructors in <a href="/39238-inflow/com_jbase_jdbc_io_inflow_package-summary">com.jbase.jdbc.io.inflow</a> with parameters of type <a href="/39238-inflow/com_jbase_jdbc_io_inflow_RequestHandler" title="interface in com.jbase.jdbc.io.inflow">RequestHandler</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s)`  |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s,<br>                     int socketTimeout)`<br>Construct a request listener that will block for the supplied<br> number of milliseconds.<br> |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../../overview-summary.html)
- [Package](/39238-inflow/com_jbase_jdbc_io_inflow_package-summary)
- [Class](/39238-inflow/com_jbase_jdbc_io_inflow_RequestHandler "interface in com.jbase.jdbc.io.inflow")
- Use
- [Tree](/39238-inflow/com_jbase_jdbc_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jdbc/io/inflow/class-use//39239-class-use/com_jbase_jdbc_io_inflow_class-use_RequestHandler)
- [No Frames](/39239-class-use/com_jbase_jdbc_io_inflow_class-use_RequestHandler)


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
