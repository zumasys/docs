# JRemoteRequestProcessingFactory (jremote   API)

**Created At:** 9/25/2017 12:05:48 PM  
**Updated At:** 2/15/2018 8:02:55 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JRemoteRequestProcessingFactory (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39258-jca/com_jbase_jremote_jca_package-summary)
- Class
- [Use](/39261-class-use/com_jbase_jremote_jca_class-use_JRemoteRequestProcessingFactory)
- [Tree](/39258-jca/com_jbase_jremote_jca_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionMetaData "class in com.jbase.jremote.jca")
- [Next Class](/39258-jca/com_jbase_jremote_jca_jremoteresourceadapter "class in com.jbase.jremote.jca")


- [Frames](../../../../index.html?com/jbase/jremote/jca//39258-jca/com_jbase_jremote_jca_JRemoteRequestProcessingFactory)
- [No Frames](/39258-jca/com_jbase_jremote_jca_JRemoteRequestProcessingFactory)


- [All Classes](../../../../allclasses-noframe.html)


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
com.jbase.jremote.jca

## Class JRemoteRequestProcessingFactory

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.JRemoteRequestProcessingFactory


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory" title="interface in com.jbase.jremote.io.inflow">RequestProcessingAbstractFactory</a></dd></dl>
* * *


```
public class JRemoteRequestProcessingFactory
extends Object
implements RequestProcessingAbstractFactory
```

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `JRemoteRequestProcessingFactory(List<EndpointAdapter> eps)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | `createRequestHandler(RequestListenerService rls)`<br>In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.<br> |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### JRemoteRequestProcessingFactory

```
public JRemoteRequestProcessingFactory(List<EndpointAdapter> eps)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### createRequestHandler

```
public RequestHandler createRequestHandler(RequestListenerService rls)
```

Description copied from interface: `RequestProcessingAbstractFactory`

In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.  This creates<br> one RequestHandler for each connection.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory#createRequestHandler-com.jbase.jremote.io.inflow.RequestListenerService-">createRequestHandler</a></code> in interface <code><a href="/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory" title="interface in com.jbase.jremote.io.inflow">RequestProcessingAbstractFactory</a></code>
</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>RequestHandler instance</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39258-jca/com_jbase_jremote_jca_package-summary)
- Class
- [Use](/39261-class-use/com_jbase_jremote_jca_class-use_JRemoteRequestProcessingFactory)
- [Tree](/39258-jca/com_jbase_jremote_jca_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionMetaData "class in com.jbase.jremote.jca")
- [Next Class](/39258-jca/com_jbase_jremote_jca_jremoteresourceadapter "class in com.jbase.jremote.jca")


- [Frames](../../../../index.html?com/jbase/jremote/jca//39258-jca/com_jbase_jremote_jca_JRemoteRequestProcessingFactory)
- [No Frames](/39258-jca/com_jbase_jremote_jca_JRemoteRequestProcessingFactory)


- [All Classes](../../../../allclasses-noframe.html)


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
