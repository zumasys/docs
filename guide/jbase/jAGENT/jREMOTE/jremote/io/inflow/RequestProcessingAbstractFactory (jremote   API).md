# RequestProcessingAbstractFactory (jremote   API)

**Created At:** 9/25/2017 11:50:53 AM  
**Updated At:** 2/15/2018 8:02:52 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="RequestProcessingAbstractFactory (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":6};
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
- [Use](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestProcessingAbstractFactory)
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerThread "class in com.jbase.jremote.io.inflow")
- [Next Class](/39256-inflow/com_jbase_jremote_io_inflow_StatisticsCounter "interface in com.jbase.jremote.io.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/io/inflow//39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory)
- [No Frames](/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory)


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

## Interface RequestProcessingAbstractFactory

- <dl><dt>All Known Implementing Classes:</dt>
<dd><a href="/39258-jca/com_jbase_jremote_jca_JRemoteRequestProcessingFactory" title="class in com.jbase.jremote.jca">JRemoteRequestProcessingFactory</a></dd></dl>
* * *


```
public interface RequestProcessingAbstractFactory
```

- <!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | `createRequestHandler(RequestListenerService rls)`<br>In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.<br> |

- <!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### createRequestHandler

```
RequestHandler createRequestHandler(RequestListenerService rls)
```

In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.  This creates<br> one RequestHandler for each connection.
<dl><dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>rls</code> - </dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>RequestHandler instance</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)
- Class
- [Use](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestProcessingAbstractFactory)
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerThread "class in com.jbase.jremote.io.inflow")
- [Next Class](/39256-inflow/com_jbase_jremote_io_inflow_StatisticsCounter "interface in com.jbase.jremote.io.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/io/inflow//39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory)
- [No Frames](/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory)


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
