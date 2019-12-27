# Uses of Class com.jbase.jremote.io.inflow.RequestHandlerException (jremote   API)

**Created At:** 9/25/2017 11:48:51 AM  
**Updated At:** 2/15/2018 8:02:55 AM  
**Original Doc:** [com_jbase_jremote_io_inflow_class-use_RequestHandlerException](https://docs.jbase.com/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestHandlerException)  
**Original ID:** 278133  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jremote.io.inflow.RequestHandlerException (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](./../../com.jbase.jremote.io.inflow-%28jremote---api%29)
- [Class](./../../requesthandlerexception-%28jremote---api%29 "class in com.jbase.jremote.io.inflow")
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
com.jbase.jremote.io.inflow.RequestHandlerException

- Packages that use [RequestHandlerException](./../../requesthandlerexception-%28jremote---api%29 "class in com.jbase.jremote.io.inflow") | Package | Description |
| --- | --- |
| com.jbase.jremote.io.inflow |   |
| com.jbase.jremote.jca.inflow |   |
- - ### Uses of [RequestHandlerException](./../../requesthandlerexception-%28jremote---api%29 "class in com.jbase.jremote.io.inflow") in [com.jbase.jremote.io.inflow](./../../com.jbase.jremote.io.inflow-%28jremote---api%29)


Methods in [com.jbase.jremote.io.inflow](./../../com.jbase.jremote.io.inflow-%28jremote---api%29) that throw [RequestHandlerException](./../../requesthandlerexception-%28jremote---api%29 "class in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `byte[]` | RequestHandler.`handleRequest(ClientHandle handle,<br>             byte[] request)`<br>Called when a client has sent a request.<br> |
| `void` | RequestHandler.`handleResponse(ClientHandle handle,<br>              byte[] response)`<br>Send a response to the supplied client (sessionId).<br> |
    - ### Uses of [RequestHandlerException](./../../requesthandlerexception-%28jremote---api%29 "class in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca.inflow](./../../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29)


Methods in [com.jbase.jremote.jca.inflow](./../../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29) that throw [RequestHandlerException](./../../requesthandlerexception-%28jremote---api%29 "class in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `void` | InboundRequestHandler.`handleResponse(ClientHandle handle,<br>              byte[] responseBytes)`  |

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](./../../com.jbase.jremote.io.inflow-%28jremote---api%29)
- [Class](./../../requesthandlerexception-%28jremote---api%29 "class in com.jbase.jremote.io.inflow")
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
