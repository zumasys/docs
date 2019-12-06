# ClientHandle (framework   API)

**Created At:** 9/25/2017 10:29:16 AM  
**Updated At:** 2/15/2018 8:02:41 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="ClientHandle (framework   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39226-inflow/com_jbase_framework_io_inflow_package-summary)
- Class
- [Use](/39227-class-use/com_jbase_framework_io_inflow_class-use_ClientHandle)
- [Tree](/39226-inflow/com_jbase_framework_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- Prev Class
- [Next Class](/39226-inflow/com_jbase_framework_io_inflow_PendingChange "class in com.jbase.framework.io.inflow")


- [Frames](../../../../../index.html?com/jbase/framework/io/inflow//39226-inflow/com_jbase_framework_io_inflow_ClientHandle)
- [No Frames](/39226-inflow/com_jbase_framework_io_inflow_ClientHandle)


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
com.jbase.framework.io.inflow

## Class ClientHandle

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.framework.io.inflow.ClientHandle


- * * *


```
public class ClientHandle
extends Object
```

This class holds a reference to the object the RequestServiceListener<br> uses to send reponses to clients.  This object can be either a SocketChannel<br> or a Socket.
<dl><dt><span class="simpleTagLabel">Author:</span></dt>
<dd>aphethean</dd></dl>

- <!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary


<caption><span>Fields</span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `SocketChannel` | `_channel`  |
| `Socket` | `_socket`  |

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `ClientHandle(Socket s)`<br>Java 1.4 IO should create a response handler with the socket.<br> |
| `ClientHandle(SocketChannel c)`<br>Java NIO (5 and above) is capable of more advanced response handling<br> and should use this constructor.<br> |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `SocketChannel` | `getChannel()`  |
| `String` | `getSessionId()`  |
| `Socket` | `getSocket()`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ============ FIELD DETAIL =========== -->
    - <!--   -->
### Field Detail
<!--   -->
        - #### \_channel

```
public SocketChannel _channel
```

<!--   -->
        - #### \_socket

```
public Socket _socket
```

<!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### ClientHandle

```
public ClientHandle(SocketChannel c)
```

Java NIO (5 and above) is capable of more advanced response handling<br> and should use this constructor.
<dl><dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>c</code> - </dd></dl>

<!--   -->
        - #### ClientHandle

```
public ClientHandle(Socket s)
```

Java 1.4 IO should create a response handler with the socket.
<dl><dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>s</code> - </dd></dl>

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getSessionId

```
public String getSessionId()
```

<!--   -->
        - #### getChannel

```
public SocketChannel getChannel()
```

<!--   -->
        - #### getSocket

```
public Socket getSocket()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39226-inflow/com_jbase_framework_io_inflow_package-summary)
- Class
- [Use](/39227-class-use/com_jbase_framework_io_inflow_class-use_ClientHandle)
- [Tree](/39226-inflow/com_jbase_framework_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- Prev Class
- [Next Class](/39226-inflow/com_jbase_framework_io_inflow_PendingChange "class in com.jbase.framework.io.inflow")


- [Frames](../../../../../index.html?com/jbase/framework/io/inflow//39226-inflow/com_jbase_framework_io_inflow_ClientHandle)
- [No Frames](/39226-inflow/com_jbase_framework_io_inflow_ClientHandle)


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
