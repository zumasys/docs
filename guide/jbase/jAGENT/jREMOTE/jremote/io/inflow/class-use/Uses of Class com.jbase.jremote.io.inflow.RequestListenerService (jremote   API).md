# Uses of Class com.jbase.jremote.io.inflow.RequestListenerService (jremote   API)

**Created At:** 9/25/2017 11:48:59 AM  
**Updated At:** 2/15/2018 8:02:55 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Class com.jbase.jremote.io.inflow.RequestListenerService (jremote   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../../overview-summary.html)
- [Package](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)
- [Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService "class in com.jbase.jremote.io.inflow")
- Use
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jremote/io/inflow/class-use//39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestListenerService)
- [No Frames](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestListenerService)


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
com.jbase.jremote.io.inflow.RequestListenerService

- <caption><span>Packages that use <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService" title="class in com.jbase.jremote.io.inflow">RequestListenerService</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jremote.io.inflow |   |
| com.jbase.jremote.jca |   |
| com.jbase.jremote.jca.inflow |   |
- - <!--   -->
### Uses of [RequestListenerService](/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService "class in com.jbase.jremote.io.inflow") in [com.jbase.jremote.io.inflow](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)


<caption><span>Methods in <a href="/39256-inflow/com_jbase_jremote_io_inflow_package-summary">com.jbase.jremote.io.inflow</a> that return <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService" title="class in com.jbase.jremote.io.inflow">RequestListenerService</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `RequestListenerService` | RequestHandler.`getListenerService()`<br>Return the listener service.<br> |



<caption><span>Methods in <a href="/39256-inflow/com_jbase_jremote_io_inflow_package-summary">com.jbase.jremote.io.inflow</a> with parameters of type <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService" title="class in com.jbase.jremote.io.inflow">RequestListenerService</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | RequestProcessingAbstractFactory.`createRequestHandler(RequestListenerService rls)`<br>In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.<br> |



<caption><span>Constructors in <a href="/39256-inflow/com_jbase_jremote_io_inflow_package-summary">com.jbase.jremote.io.inflow</a> with parameters of type <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService" title="class in com.jbase.jremote.io.inflow">RequestListenerService</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s)`  |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s,<br>                     int socketTimeout)`<br>Construct a request listener that will block for the supplied<br> number of milliseconds.<br> |
    - <!--   -->
### Uses of [RequestListenerService](/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService "class in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary)


<caption><span>Methods in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> with parameters of type <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService" title="class in com.jbase.jremote.io.inflow">RequestListenerService</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | JRemoteRequestProcessingFactory.`createRequestHandler(RequestListenerService rls)`  |
    - <!--   -->
### Uses of [RequestListenerService](/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService "class in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca.inflow](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)


<caption><span>Methods in <a href="/39262-inflow/com_jbase_jremote_jca_inflow_package-summary">com.jbase.jremote.jca.inflow</a> that return <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService" title="class in com.jbase.jremote.io.inflow">RequestListenerService</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `RequestListenerService` | InboundRequestHandler.`getListenerService()`  |



<caption><span>Constructors in <a href="/39262-inflow/com_jbase_jremote_jca_inflow_package-summary">com.jbase.jremote.jca.inflow</a> with parameters of type <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService" title="class in com.jbase.jremote.io.inflow">RequestListenerService</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `InboundRequestHandler(List<EndpointAdapter> endpoints,<br>                     RequestListenerService service)`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../../overview-summary.html)
- [Package](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)
- [Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService "class in com.jbase.jremote.io.inflow")
- Use
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jremote/io/inflow/class-use//39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestListenerService)
- [No Frames](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestListenerService)


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
