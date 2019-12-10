# RequestHandler (jremote   API)

**Created At:** 9/25/2017 11:50:18 AM  
**Updated At:** 2/15/2018 8:02:47 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="RequestHandler (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6,"i3":6,"i4":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)
- Class
- [Use](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestHandler)
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39256-inflow/com_jbase_jremote_io_inflow_PendingChange "class in com.jbase.jremote.io.inflow")
- [Next Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandlerException "class in com.jbase.jremote.io.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/io/inflow//39256-inflow/com_jbase_jremote_io_inflow_RequestHandler)
- [No Frames](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler)


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

com.jbase.jremote.io.inflow

## Interface RequestHandler

- All Known Implementing Classes:[InboundRequestHandler](../../../../../com/jbase/jremote/jca/inflow/Inbound/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "class in com.jbase.jremote.jca.inflow")
* * *


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
- [Package](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)
- Class
- [Use](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestHandler)
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39256-inflow/com_jbase_jremote_io_inflow_PendingChange "class in com.jbase.jremote.io.inflow")
- [Next Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandlerException "class in com.jbase.jremote.io.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/io/inflow//39256-inflow/com_jbase_jremote_io_inflow_RequestHandler)
- [No Frames](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler)


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
