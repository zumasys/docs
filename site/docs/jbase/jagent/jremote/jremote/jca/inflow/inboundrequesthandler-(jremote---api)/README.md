# InboundRequestHandler (jremote   API)

**Created At:** 9/25/2017 12:01:05 PM  
**Updated At:** 2/15/2018 8:02:27 AM  
**Original Doc:** [com_jbase_jremote_jca_inflow_InboundRequestHandler](https://docs.jbase.com/39262-inflow/com_jbase_jremote_jca_inflow_InboundRequestHandler)  
**Original ID:** 278235  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="InboundRequestHandler (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca.inflow-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.jca.inflow.inboundrequesthandler-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.jca.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../inboundobjectfactory-%28jremote---api%29 "class in com.jbase.jremote.jca.inflow")
- [Next Class](./../jremoteactivationspec-%28jremote---api%29 "class in com.jbase.jremote.jca.inflow")


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

com.jbase.jremote.jca.inflow

## Class InboundRequestHandler

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.inflow.InboundRequestHandler


- All Implemented Interfaces:[RequestHandler](./../../../io/inflow/requesthandler-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow")
* * *


```
public class InboundRequestHandler
extends Object
implements RequestHandler
```

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `InboundRequestHandler(List<EndpointAdapter> endpoints,<br>                     RequestListenerService service)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getActiveTransactions()`<br>Get the active transactions for this request handler.<br> |
| `List<EndpointAdapter>` | `getEndpoints()`  |
| `javax.resource.spi.work.ExecutionContext` | `getExecutionContext(String sessionId)`  |
| `RequestListenerService` | `getListenerService()`<br>Return the listener service.<br> |
| `void` | `handleClose(ClientHandle handle)`<br>Called when a client close event occurs.<br> |
| `byte[]` | `handleRequest(ClientHandle handle,<br>             byte[] requestBytes)`<br>Called when a client has sent a request.<br> |
| `void` | `handleResponse(ClientHandle handle,<br>              byte[] responseBytes)`<br>Send a response to the supplied client (sessionId).<br> |
| `void` | `handleTimeout(ClientHandle handle)`<br>Called when a select times out waiting for client keys.<br> |
| `protected InboundRequest` | `readRequest(JBaseObjectReader reader)`  |
| `javax.resource.spi.work.ExecutionContext` | `removeExecutionContext(String sessionId)`  |
| `void` | `setExecutionContext(String sessionId,<br>                   javax.resource.spi.work.ExecutionContext ec)`  |
| `protected void` | `writeResponse(JBaseObjectWriter writer,<br>             JBaseSerializable response)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### InboundRequestHandler

```
public InboundRequestHandler(List<EndpointAdapter> endpoints,
                             RequestListenerService service)
```


    - ### Method Detail

        - #### getEndpoints

```
public List<EndpointAdapter> getEndpoints()
```


        - #### getListenerService

```
public RequestListenerService getListenerService()
```

Description copied from interface: `RequestHandler`

Return the listener service.  The listener service is effectively<br> a root context.
Specified by:`getListenerService` in interface `RequestHandler`


        - #### handleClose

```
public void handleClose(ClientHandle handle)
```

Description copied from interface: `RequestHandler`

Called when a client close event occurs.
Specified by:`handleClose` in interface `RequestHandler`


        - #### handleTimeout

```
public void handleTimeout(ClientHandle handle)
```

Description copied from interface: `RequestHandler`

Called when a select times out waiting for client keys.
Specified by:`handleTimeout` in interface `RequestHandler`


        - #### handleRequest

```
public byte[] handleRequest(ClientHandle handle,
                            byte[] requestBytes)
```

Description copied from interface: `RequestHandler`

Called when a client has sent a request.
Specified by:`handleRequest` in interface `RequestHandler`


        - #### handleResponse

```
public void handleResponse(ClientHandle handle,
                           byte[] responseBytes)
                    throws RequestHandlerException
```

Description copied from interface: `RequestHandler`

Send a response to the supplied client (sessionId).
Specified by:`handleResponse` in interface `RequestHandler`Throws:`RequestHandlerException`


        - #### readRequest

```
protected InboundRequest readRequest(JBaseObjectReader reader)
                              throws IOException
```
Throws:`IOException`


        - #### writeResponse

```
protected void writeResponse(JBaseObjectWriter writer,
                             JBaseSerializable response)
                      throws IOException
```
Throws:`IOException`


        - #### getExecutionContext

```
public javax.resource.spi.work.ExecutionContext getExecutionContext(String sessionId)
```


        - #### removeExecutionContext

```
public javax.resource.spi.work.ExecutionContext removeExecutionContext(String sessionId)
```


        - #### setExecutionContext

```
public void setExecutionContext(String sessionId,
                                javax.resource.spi.work.ExecutionContext ec)
```


        - #### getActiveTransactions

```
public int getActiveTransactions()
```

Get the active transactions for this request handler.
Returns:

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca.inflow-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.jca.inflow.inboundrequesthandler-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.jca.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../inboundobjectfactory-%28jremote---api%29 "class in com.jbase.jremote.jca.inflow")
- [Next Class](./../jremoteactivationspec-%28jremote---api%29 "class in com.jbase.jremote.jca.inflow")


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
