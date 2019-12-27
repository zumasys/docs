# Uses of Interface com.jbase.jremote.io.inflow.RequestHandler (jremote   API)

**Created At:** 9/25/2017 11:48:43 AM  
**Updated At:** 2/15/2018 8:02:53 AM  
**Original Doc:** [com_jbase_jremote_io_inflow_class-use_RequestHandler](https://docs.jbase.com/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestHandler)  
**Original ID:** 278132  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jremote.io.inflow.RequestHandler (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](./../../com.jbase.jremote.io.inflow-%28jremote---api%29)
- [Class](./../../requesthandler-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow")
- Use
- [Tree](./../../com.jbase.jremote.io.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.jremote.io.inflow.RequestHandler

- Packages that use [RequestHandler](./../../requesthandler-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") | Package | Description |
| --- | --- |
| com.jbase.jremote.io.inflow |   |
| com.jbase.jremote.jca |   |
| com.jbase.jremote.jca.inflow |   |
| com.jbase.jremote.jca.inflow.protocol |   |
- - ### Uses of [RequestHandler](./../../requesthandler-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.io.inflow](./../../com.jbase.jremote.io.inflow-%28jremote---api%29)


Methods in [com.jbase.jremote.io.inflow](./../../com.jbase.jremote.io.inflow-%28jremote---api%29) that return [RequestHandler](./../../requesthandler-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | RequestProcessingAbstractFactory.`createRequestHandler(RequestListenerService rls)`<br>In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.<br> |
| `protected RequestHandler` | RequestListenerService.`getRequestHandler()`  |



Constructors in [com.jbase.jremote.io.inflow](./../../com.jbase.jremote.io.inflow-%28jremote---api%29) with parameters of type [RequestHandler](./../../requesthandler-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") | Constructor and Description |
| --- |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s)`  |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s,<br>                     int socketTimeout)`<br>Construct a request listener that will block for the supplied<br> number of milliseconds.<br> |
    - ### Uses of [RequestHandler](./../../requesthandler-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca](./../../../../jca/com.jbase.jremote.jca-%28jremote---api%29)


Methods in [com.jbase.jremote.jca](./../../../../jca/com.jbase.jremote.jca-%28jremote---api%29) that return [RequestHandler](./../../requesthandler-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | JRemoteRequestProcessingFactory.`createRequestHandler(RequestListenerService rls)`  |
    - ### Uses of [RequestHandler](./../../requesthandler-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca.inflow](./../../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29)


Classes in [com.jbase.jremote.jca.inflow](./../../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29) that implement [RequestHandler](./../../requesthandler-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `InboundRequestHandler`  |
    - ### Uses of [RequestHandler](./../../requesthandler-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca.inflow.protocol](./../../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-%28jremote---api%29)


Methods in [com.jbase.jremote.jca.inflow.protocol](./../../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-%28jremote---api%29) with parameters of type [RequestHandler](./../../requesthandler-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `JBaseSerializable` | StartTransactionRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | RollbackTransactionRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | InboundRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | CommitTransactionRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |
| `JBaseSerializable` | ActivationRequest.`execute(ClientHandle handle,<br>       RequestHandler handler)`  |

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](./../../com.jbase.jremote.io.inflow-%28jremote---api%29)
- [Class](./../../requesthandler-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow")
- Use
- [Tree](./../../com.jbase.jremote.io.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
