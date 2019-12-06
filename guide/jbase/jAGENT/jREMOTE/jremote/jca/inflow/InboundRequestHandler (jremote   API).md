# InboundRequestHandler (jremote   API)

**Created At:** 9/25/2017 12:01:05 PM  
**Updated At:** 2/15/2018 8:02:27 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="InboundRequestHandler (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_InboundRequestHandler)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39262-inflow/com_jbase_jremote_jca_inflow_InboundObjectFactory "class in com.jbase.jremote.jca.inflow")
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_JRemoteActivationSpec "class in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_InboundRequestHandler)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_InboundRequestHandler)


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
com.jbase.jremote.jca.inflow

## Class InboundRequestHandler

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.inflow.InboundRequestHandler


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler" title="interface in com.jbase.jremote.io.inflow">RequestHandler</a></dd></dl>
* * *


```
public class InboundRequestHandler
extends Object
implements RequestHandler
```

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `InboundRequestHandler(List<EndpointAdapter> endpoints,<br>                     RequestListenerService service)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
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


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### InboundRequestHandler

```
public InboundRequestHandler(List<EndpointAdapter> endpoints,
                             RequestListenerService service)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getEndpoints

```
public List<EndpointAdapter> getEndpoints()
```

<!--   -->
        - #### getListenerService

```
public RequestListenerService getListenerService()
```

Description copied from interface: `RequestHandler`

Return the listener service.  The listener service is effectively<br> a root context.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler#getListenerService--">getListenerService</a></code> in interface <code><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler" title="interface in com.jbase.jremote.io.inflow">RequestHandler</a></code>
</dd></dl>

<!--   -->
        - #### handleClose

```
public void handleClose(ClientHandle handle)
```

Description copied from interface: `RequestHandler`

Called when a client close event occurs.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler#handleClose-com.jbase.jremote.io.inflow.ClientHandle-">handleClose</a></code> in interface <code><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler" title="interface in com.jbase.jremote.io.inflow">RequestHandler</a></code>
</dd></dl>

<!--   -->
        - #### handleTimeout

```
public void handleTimeout(ClientHandle handle)
```

Description copied from interface: `RequestHandler`

Called when a select times out waiting for client keys.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler#handleTimeout-com.jbase.jremote.io.inflow.ClientHandle-">handleTimeout</a></code> in interface <code><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler" title="interface in com.jbase.jremote.io.inflow">RequestHandler</a></code>
</dd></dl>

<!--   -->
        - #### handleRequest

```
public byte[] handleRequest(ClientHandle handle,
                            byte[] requestBytes)
```

Description copied from interface: `RequestHandler`

Called when a client has sent a request.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler#handleRequest-com.jbase.jremote.io.inflow.ClientHandle-byte:A-">handleRequest</a></code> in interface <code><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler" title="interface in com.jbase.jremote.io.inflow">RequestHandler</a></code>
</dd></dl>

<!--   -->
        - #### handleResponse

```
public void handleResponse(ClientHandle handle,
                           byte[] responseBytes)
                    throws RequestHandlerException
```

Description copied from interface: `RequestHandler`

Send a response to the supplied client (sessionId).
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler#handleResponse-com.jbase.jremote.io.inflow.ClientHandle-byte:A-">handleResponse</a></code> in interface <code><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler" title="interface in com.jbase.jremote.io.inflow">RequestHandler</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestHandlerException" title="class in com.jbase.jremote.io.inflow">RequestHandlerException</a></code></dd></dl>

<!--   -->
        - #### readRequest

```
protected InboundRequest readRequest(JBaseObjectReader reader)
                              throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### writeResponse

```
protected void writeResponse(JBaseObjectWriter writer,
                             JBaseSerializable response)
                      throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### getExecutionContext

```
public javax.resource.spi.work.ExecutionContext getExecutionContext(String sessionId)
```

<!--   -->
        - #### removeExecutionContext

```
public javax.resource.spi.work.ExecutionContext removeExecutionContext(String sessionId)
```

<!--   -->
        - #### setExecutionContext

```
public void setExecutionContext(String sessionId,
                                javax.resource.spi.work.ExecutionContext ec)
```

<!--   -->
        - #### getActiveTransactions

```
public int getActiveTransactions()
```

Get the active transactions for this request handler.
<dl><dt><span class="returnLabel">Returns:</span></dt></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_InboundRequestHandler)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39262-inflow/com_jbase_jremote_jca_inflow_InboundObjectFactory "class in com.jbase.jremote.jca.inflow")
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_JRemoteActivationSpec "class in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_InboundRequestHandler)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_InboundRequestHandler)


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
