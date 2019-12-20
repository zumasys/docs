# Uses of Interface com.jbase.jremote.io.inflow.RequestHandler (jremote   API)

**Created At:** 9/25/2017 11:48:43 AM  
**Updated At:** 2/15/2018 8:02:53 AM  
**Original Doc:** [com_jbase_jremote_io_inflow_class-use_RequestHandler](https://docs.jbase.com/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestHandler)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jremote.io.inflow.RequestHandler (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

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


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.jremote.io.inflow.RequestHandler

- Packages that use [RequestHandler](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow") | Package | Description |
| --- | --- |
| com.jbase.jremote.io.inflow |   |
| com.jbase.jremote.jca |   |
| com.jbase.jremote.jca.inflow |   |
| com.jbase.jremote.jca.inflow.protocol |   |
- - ### Uses of [RequestHandler](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.io.inflow](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)


Methods in [com.jbase.jremote.io.inflow](/39256-inflow/com_jbase_jremote_io_inflow_package-summary) that return [RequestHandler](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | RequestProcessingAbstractFactory.`createRequestHandler(RequestListenerService rls)`<br>In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.<br> |
| `protected RequestHandler` | RequestListenerService.`getRequestHandler()`  |



Constructors in [com.jbase.jremote.io.inflow](/39256-inflow/com_jbase_jremote_io_inflow_package-summary) with parameters of type [RequestHandler](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow") | Constructor and Description |
| --- |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s)`  |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s,<br>                     int socketTimeout)`<br>Construct a request listener that will block for the supplied<br> number of milliseconds.<br> |
    - ### Uses of [RequestHandler](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary)


Methods in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary) that return [RequestHandler](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | JRemoteRequestProcessingFactory.`createRequestHandler(RequestListenerService rls)`  |
    - ### Uses of [RequestHandler](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca.inflow](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)


Classes in [com.jbase.jremote.jca.inflow](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary) that implement [RequestHandler](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `InboundRequestHandler`  |
    - ### Uses of [RequestHandler](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca.inflow.protocol](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary)


Methods in [com.jbase.jremote.jca.inflow.protocol](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary) with parameters of type [RequestHandler](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `JBaseSerializable` | StartTransactionRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | RollbackTransactionRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | InboundRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | CommitTransactionRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | ActivationRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |

Skip navigation links

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


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
