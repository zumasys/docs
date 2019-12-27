# Uses of Class com.jbase.jremote.io.inflow.RequestListenerService (jremote   API)

**Created At:** 9/25/2017 11:48:59 AM  
**Updated At:** 2/15/2018 8:02:55 AM  
**Original Doc:** [com_jbase_jremote_io_inflow_class-use_RequestListenerService](https://docs.jbase.com/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestListenerService)  
**Original ID:** 278134  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jremote.io.inflow.RequestListenerService (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](./../../com.jbase.jremote.io.inflow-%28jremote---api%29)
- [Class](./../../requestlistenerservice-%28jremote---api%29 "class in com.jbase.jremote.io.inflow")
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

## Uses of Class
com.jbase.jremote.io.inflow.RequestListenerService

- Packages that use [RequestListenerService](./../../requestlistenerservice-%28jremote---api%29 "class in com.jbase.jremote.io.inflow") | Package | Description |
| --- | --- |
| com.jbase.jremote.io.inflow |   |
| com.jbase.jremote.jca |   |
| com.jbase.jremote.jca.inflow |   |
- - ### Uses of [RequestListenerService](./../../requestlistenerservice-%28jremote---api%29 "class in com.jbase.jremote.io.inflow") in [com.jbase.jremote.io.inflow](./../../com.jbase.jremote.io.inflow-%28jremote---api%29)


Methods in [com.jbase.jremote.io.inflow](./../../com.jbase.jremote.io.inflow-%28jremote---api%29) that return [RequestListenerService](./../../requestlistenerservice-%28jremote---api%29 "class in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `RequestListenerService` | RequestHandler.`getListenerService()`<br>Return the listener service.<br> |



Methods in [com.jbase.jremote.io.inflow](./../../com.jbase.jremote.io.inflow-%28jremote---api%29) with parameters of type [RequestListenerService](./../../requestlistenerservice-%28jremote---api%29 "class in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | RequestProcessingAbstractFactory.`createRequestHandler(RequestListenerService rls)`<br>In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.<br> |



Constructors in [com.jbase.jremote.io.inflow](./../../com.jbase.jremote.io.inflow-%28jremote---api%29) with parameters of type [RequestListenerService](./../../requestlistenerservice-%28jremote---api%29 "class in com.jbase.jremote.io.inflow") | Constructor and Description |
| --- |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s)`  |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s,<br>                     int socketTimeout)`<br>Construct a request listener that will block for the supplied<br> number of milliseconds.<br> |
    - ### Uses of [RequestListenerService](./../../requestlistenerservice-%28jremote---api%29 "class in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca](./../../../../jca/com.jbase.jremote.jca-%28jremote---api%29)


Methods in [com.jbase.jremote.jca](./../../../../jca/com.jbase.jremote.jca-%28jremote---api%29) with parameters of type [RequestListenerService](./../../requestlistenerservice-%28jremote---api%29 "class in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | JRemoteRequestProcessingFactory.`createRequestHandler(RequestListenerService rls)`  |
    - ### Uses of [RequestListenerService](./../../requestlistenerservice-%28jremote---api%29 "class in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca.inflow](./../../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29)


Methods in [com.jbase.jremote.jca.inflow](./../../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29) that return [RequestListenerService](./../../requestlistenerservice-%28jremote---api%29 "class in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `RequestListenerService` | InboundRequestHandler.`getListenerService()`  |



Constructors in [com.jbase.jremote.jca.inflow](./../../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29) with parameters of type [RequestListenerService](./../../requestlistenerservice-%28jremote---api%29 "class in com.jbase.jremote.io.inflow") | Constructor and Description |
| --- |
| `InboundRequestHandler(List<EndpointAdapter> endpoints,<br>                     RequestListenerService service)`  |

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](./../../com.jbase.jremote.io.inflow-%28jremote---api%29)
- [Class](./../../requestlistenerservice-%28jremote---api%29 "class in com.jbase.jremote.io.inflow")
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
