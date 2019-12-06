# Uses of Interface com.jbase.jremote.io.inflow.RequestHandler (jremote   API)

**Created At:** 9/25/2017 11:48:43 AM  
**Updated At:** 2/15/2018 8:02:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jremote.io.inflow.RequestHandler (jremote   API)";
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
- [Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow")
- Use
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jremote/io/inflow/class-use//39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestHandler)
- [No Frames](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestHandler)


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
com.jbase.jremote.io.inflow.RequestHandler

- <caption><span>Packages that use <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler" title="interface in com.jbase.jremote.io.inflow">RequestHandler</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jremote.io.inflow |   |
| com.jbase.jremote.jca |   |
| com.jbase.jremote.jca.inflow |   |
| com.jbase.jremote.jca.inflow.protocol |   |
- - <!--   -->
### Uses of [RequestHandler](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.io.inflow](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)


<caption><span>Methods in <a href="/39256-inflow/com_jbase_jremote_io_inflow_package-summary">com.jbase.jremote.io.inflow</a> that return <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler" title="interface in com.jbase.jremote.io.inflow">RequestHandler</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | RequestProcessingAbstractFactory.`createRequestHandler(RequestListenerService rls)`<br>In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.<br> |
| `protected RequestHandler` | RequestListenerService.`getRequestHandler()`  |



<caption><span>Constructors in <a href="/39256-inflow/com_jbase_jremote_io_inflow_package-summary">com.jbase.jremote.io.inflow</a> with parameters of type <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler" title="interface in com.jbase.jremote.io.inflow">RequestHandler</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s)`  |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s,<br>                     int socketTimeout)`<br>Construct a request listener that will block for the supplied<br> number of milliseconds.<br> |
    - <!--   -->
### Uses of [RequestHandler](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary)


<caption><span>Methods in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> that return <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler" title="interface in com.jbase.jremote.io.inflow">RequestHandler</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | JRemoteRequestProcessingFactory.`createRequestHandler(RequestListenerService rls)`  |
    - <!--   -->
### Uses of [RequestHandler](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca.inflow](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)


<caption><span>Classes in <a href="/39262-inflow/com_jbase_jremote_jca_inflow_package-summary">com.jbase.jremote.jca.inflow</a> that implement <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler" title="interface in com.jbase.jremote.io.inflow">RequestHandler</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `InboundRequestHandler`  |
    - <!--   -->
### Uses of [RequestHandler](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca.inflow.protocol](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary)


<caption><span>Methods in <a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary">com.jbase.jremote.jca.inflow.protocol</a> with parameters of type <a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler" title="interface in com.jbase.jremote.io.inflow">RequestHandler</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JBaseSerializable` | StartTransactionRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | RollbackTransactionRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | InboundRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | CommitTransactionRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | ActivationRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../../overview-summary.html)
- [Package](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)
- [Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow")
- Use
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jremote/io/inflow/class-use//39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestHandler)
- [No Frames](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestHandler)


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
