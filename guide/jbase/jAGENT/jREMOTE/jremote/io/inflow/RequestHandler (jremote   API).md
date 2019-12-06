# RequestHandler (jremote   API)

**Created At:** 9/25/2017 11:50:18 AM  
**Updated At:** 2/15/2018 8:02:47 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="RequestHandler (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":6,"i1":6,"i2":6,"i3":6,"i4":6};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
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


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_top");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ========= END OF TOP NAVBAR ========= --><!-- ======== START OF CLASS DATA ======== -->
com.jbase.jremote.io.inflow

## Interface RequestHandler

- <dl><dt>All Known Implementing Classes:</dt>
<dd><a href="../../../../../com/jbase/jremote/jca/inflow/Inbound/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler" title="class in com.jbase.jremote.jca.inflow">InboundRequestHandler</a></dd></dl>
* * *


```
public interface RequestHandler
```

Handle incoming requests received by the RequestServiceListener.
<dl><dt><span class="simpleTagLabel">Author:</span></dt>
<dd>aphethean</dd></dl>

- <!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `RequestListenerService` | `getListenerService()`<br>Return the listener service.<br> |
| `void` | `handleClose(ClientHandle handle)`<br>Called when a client close event occurs.<br> |
| `byte[]` | `handleRequest(ClientHandle handle,<br>             byte[] request)`<br>Called when a client has sent a request.<br> |
| `void` | `handleResponse(ClientHandle handle,<br>              byte[] response)`<br>Send a response to the supplied client (sessionId).<br> |
| `void` | `handleTimeout(ClientHandle handle)`<br>Called when a select times out waiting for client keys.<br> |

- <!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### handleClose

```
void handleClose(ClientHandle handle)
```

Called when a client close event occurs.

<!--   -->
        - #### handleTimeout

```
void handleTimeout(ClientHandle handle)
```

Called when a select times out waiting for client keys.

<!--   -->
        - #### handleRequest

```
byte[] handleRequest(ClientHandle handle,
                     byte[] request)
              throws RequestHandlerException
```

Called when a client has sent a request.
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandlerException" title="class in com.jbase.jremote.io.inflow">RequestHandlerException</a></code></dd></dl>

<!--   -->
        - #### handleResponse

```
void handleResponse(ClientHandle handle,
                    byte[] response)
             throws RequestHandlerException
```

Send a response to the supplied client (sessionId).
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandlerException" title="class in com.jbase.jremote.io.inflow">RequestHandlerException</a></code></dd></dl>

<!--   -->
        - #### getListenerService

```
RequestListenerService getListenerService()
```

Return the listener service.  The listener service is effectively<br> a root context.
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
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


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_bottom");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ======== END OF BOTTOM NAVBAR ======= -->
<small>			<center>			<i>Copyright © 2017 jBASE, Inc.. All Rights Reserved.</i>		</center></small>
