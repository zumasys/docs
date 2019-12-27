# RequestHandler (jbasejdbc   API)

**Created At:** 9/25/2017 10:51:25 AM  
**Updated At:** 2/15/2018 8:02:50 AM  
**Original Doc:** [com_jbase_jdbc_io_inflow_RequestHandler](https://docs.jbase.com/39238-inflow/com_jbase_jdbc_io_inflow_RequestHandler)  
**Original ID:** 277887  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="RequestHandler (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6,"i3":6,"i4":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.io.inflow-%28jbasejdbc---api%29)
- Class
- [Use](./../class-use/uses-of-interface-com.jbase.jdbc.io.inflow.requesthandler-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.io.inflow-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](./../pendingchange-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io.inflow")
- [Next Class](./../requesthandlerexception-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io.inflow")


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

com.jbase.jdbc.io.inflow

## Interface RequestHandler

- * * *


```
public interface RequestHandler
```

Handle incoming requests received by the RequestServiceListener.
Author:aphethean

- - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Abstract Methods](javascript:show%284%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `RequestListenerService` | `getListenerService()`<br>Return the listener service.<br> |
| `void` | `handleClose(ClientHandle handle)`<br>Called when a client close event occurs.<br> |
| `byte[]` | `handleRequest(ClientHandle handle,<br>             byte[] request)`<br>Called when a client has sent a request.<br> |
| `void` | `handleResponse(ClientHandle handle,<br>              byte[] response)`<br>Send a response to the supplied client (sessionId).<br> |
| `void` | `handleTimeout(ClientHandle handle)`<br>Called when a select times out waiting for client keys.<br> |

- - ### Method Detail

        - #### handleClose

```
void handleClose(ClientHandle handle)
```

Called when a client close event occurs.


        - #### handleTimeout

```
void handleTimeout(ClientHandle handle)
```

Called when a select times out waiting for client keys.


        - #### handleRequest

```
byte[] handleRequest(ClientHandle handle,
                     byte[] request)
              throws RequestHandlerException
```

Called when a client has sent a request.
Throws:`RequestHandlerException`


        - #### handleResponse

```
void handleResponse(ClientHandle handle,
                    byte[] response)
             throws RequestHandlerException
```

Send a response to the supplied client (sessionId).
Throws:`RequestHandlerException`


        - #### getListenerService

```
RequestListenerService getListenerService()
```

Return the listener service.  The listener service is effectively<br> a root context.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.io.inflow-%28jbasejdbc---api%29)
- Class
- [Use](./../class-use/uses-of-interface-com.jbase.jdbc.io.inflow.requesthandler-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.io.inflow-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](./../pendingchange-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io.inflow")
- [Next Class](./../requesthandlerexception-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io.inflow")


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
