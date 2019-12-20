# Uses of Class com.jbase.jremote.io.inflow.ClientHandle (jremote   API)

**Created At:** 9/25/2017 11:48:28 AM  
**Updated At:** 2/15/2018 8:02:52 AM  
**Original Doc:** [com_jbase_jremote_io_inflow_class-use_ClientHandle](https://docs.jbase.com/39257-class-use/com_jbase_jremote_io_inflow_class-use_ClientHandle)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jremote.io.inflow.ClientHandle (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

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


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Class
com.jbase.jremote.io.inflow.ClientHandle

- Packages that use [ClientHandle](/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle "class in com.jbase.jremote.io.inflow") | Package | Description |
| --- | --- |
| com.jbase.jremote.io.inflow |   |
| com.jbase.jremote.jca.inflow |   |
| com.jbase.jremote.jca.inflow.protocol |   |
- - ### Uses of [ClientHandle](/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle "class in com.jbase.jremote.io.inflow") in [com.jbase.jremote.io.inflow](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)


Methods in [com.jbase.jremote.io.inflow](/39256-inflow/com_jbase_jremote_io_inflow_package-summary) with parameters of type [ClientHandle](/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle "class in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `void` | RequestHandler.`handleClose(ClientHandle handle)`<br>Called when a client close event occurs.<br> |
| `byte[]` | RequestHandler.`handleRequest(ClientHandle handle,<br>             byte[] request)`<br>Called when a client has sent a request.<br> |
| `void` | RequestHandler.`handleResponse(ClientHandle handle,<br>              byte[] response)`<br>Send a response to the supplied client (sessionId).<br> |
| `void` | RequestHandler.`handleTimeout(ClientHandle handle)`<br>Called when a select times out waiting for client keys.<br> |
    - ### Uses of [ClientHandle](/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle "class in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca.inflow](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)


Methods in [com.jbase.jremote.jca.inflow](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary) with parameters of type [ClientHandle](/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle "class in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `void` | InboundRequestHandler.`handleClose(ClientHandle handle)`  |
| `byte[]` | InboundRequestHandler.`handleRequest(ClientHandle handle,<br>             byte[] requestBytes)`  |
| `void` | InboundRequestHandler.`handleResponse(ClientHandle handle,<br>              byte[] responseBytes)`  |
| `void` | InboundRequestHandler.`handleTimeout(ClientHandle handle)`  |
    - ### Uses of [ClientHandle](/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle "class in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca.inflow.protocol](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary)


Methods in [com.jbase.jremote.jca.inflow.protocol](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary) with parameters of type [ClientHandle](/39256-inflow/com_jbase_jremote_io_inflow_ClientHandle "class in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `JBaseSerializable` | StartTransactionRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | RollbackTransactionRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | InboundRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | CommitTransactionRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | ActivationRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |

Skip navigation links

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


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
