# Uses of Class com.jbase.jremote.io.inflow.ClientHandle (jremote   API)

**Created At:** 9/25/2017 11:48:28 AM  
**Updated At:** 2/15/2018 8:02:52 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Class com.jbase.jremote.io.inflow.ClientHandle (jremote   API)";
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
- [Class](/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle "class in com.jbase.jremote.io.inflow")
- Use
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jremote/io/inflow/class-use//39257-class-use/com_jbase_jremote_io_inflow_class-use_ClientHandle)
- [No Frames](/39257-class-use/com_jbase_jremote_io_inflow_class-use_ClientHandle)


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
com.jbase.jremote.io.inflow.ClientHandle

- <caption><span>Packages that use <a href="/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle" title="class in com.jbase.jremote.io.inflow">ClientHandle</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jremote.io.inflow |   |
| com.jbase.jremote.jca.inflow |   |
| com.jbase.jremote.jca.inflow.protocol |   |
- - <!--   -->
### Uses of [ClientHandle](/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle "class in com.jbase.jremote.io.inflow") in [com.jbase.jremote.io.inflow](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)


<caption><span>Methods in <a href="/39256-inflow/com_jbase_jremote_io_inflow_package-summary">com.jbase.jremote.io.inflow</a> with parameters of type <a href="/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle" title="class in com.jbase.jremote.io.inflow">ClientHandle</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | RequestHandler.`handleClose(ClientHandle handle)`<br>Called when a client close event occurs.<br> |
| `byte[]` | RequestHandler.`handleRequest(ClientHandle handle,<br>             byte[] request)`<br>Called when a client has sent a request.<br> |
| `void` | RequestHandler.`handleResponse(ClientHandle handle,<br>              byte[] response)`<br>Send a response to the supplied client (sessionId).<br> |
| `void` | RequestHandler.`handleTimeout(ClientHandle handle)`<br>Called when a select times out waiting for client keys.<br> |
    - <!--   -->
### Uses of [ClientHandle](/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle "class in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca.inflow](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)


<caption><span>Methods in <a href="/39262-inflow/com_jbase_jremote_jca_inflow_package-summary">com.jbase.jremote.jca.inflow</a> with parameters of type <a href="/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle" title="class in com.jbase.jremote.io.inflow">ClientHandle</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | InboundRequestHandler.`handleClose(ClientHandle handle)`  |
| `byte[]` | InboundRequestHandler.`handleRequest(ClientHandle handle,<br>             byte[] requestBytes)`  |
| `void` | InboundRequestHandler.`handleResponse(ClientHandle handle,<br>              byte[] responseBytes)`  |
| `void` | InboundRequestHandler.`handleTimeout(ClientHandle handle)`  |
    - <!--   -->
### Uses of [ClientHandle](/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle "class in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca.inflow.protocol](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary)


<caption><span>Methods in <a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary">com.jbase.jremote.jca.inflow.protocol</a> with parameters of type <a href="/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle" title="class in com.jbase.jremote.io.inflow">ClientHandle</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
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
- [Class](/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle "class in com.jbase.jremote.io.inflow")
- Use
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jremote/io/inflow/class-use//39257-class-use/com_jbase_jremote_io_inflow_class-use_ClientHandle)
- [No Frames](/39257-class-use/com_jbase_jremote_io_inflow_class-use_ClientHandle)


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
