# RequestListenerServiceMBean (framework   API)

**Created At:** 9/25/2017 10:30:19 AM  
**Updated At:** 2/15/2018 8:02:41 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="RequestListenerServiceMBean (framework   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":6,"i1":6,"i2":6,"i3":6,"i4":6,"i5":6,"i6":6,"i7":6,"i8":6,"i9":6};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};
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
- [Use](/39227-class-use/com_jbase_framework_io_inflow_class-use_RequestListenerServiceMBean)
- [Tree](/39226-inflow/com_jbase_framework_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- [Prev Class](/39226-inflow/com_jbase_framework_io_inflow_RequestListenerService "class in com.jbase.framework.io.inflow")
- [Next Class](/39226-inflow/com_jbase_framework_io_inflow_RequestListenerThread "class in com.jbase.framework.io.inflow")


- [Frames](../../../../../index.html?com/jbase/framework/io/inflow//39226-inflow/com_jbase_framework_io_inflow_RequestListenerServiceMBean)
- [No Frames](/39226-inflow/com_jbase_framework_io_inflow_RequestListenerServiceMBean)


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

## Interface RequestListenerServiceMBean

- <dl><dt>All Known Implementing Classes:</dt>
<dd><a href="/39226-inflow/com_jbase_framework_io_inflow_RequestListenerService" title="class in com.jbase.framework.io.inflow">RequestListenerService</a></dd></dl>
* * *


```
public interface RequestListenerServiceMBean
```

Expose information about the current state of the<br> inbound request processor.
<dl><dt><span class="simpleTagLabel">Author:</span></dt>
<dd>aphethean</dd></dl>

- <!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getActivationsPerMinute()`<br>Returns the number of activation processed per<br> minute from the time statistics were activated.<br> |
| `int` | `getActiveConnections()`<br>Return the number clients that are currently connected.<br> |
| `int` | `getActiveTransactions()`<br>Return the number of transactions that are currently being processed.<br> |
| `int` | `getDefaultReceiveBufferSize()`  |
| `int` | `getDefaultSendBufferSize()`  |
| `long` | `getTotalActivations()`<br>Return the total number of activation requests processed.<br> |
| `void` | `setDefaultReceiveBufferSize(int bytes)`<br>Modify the TCP buffer settings to maximize the performance<br> for the client network.<br> |
| `void` | `setDefaultSendBufferSize(int bytes)`  |
| `void` | `startStatistics()`<br>Start recording statistics and reset any existing statistical data.<br> |
| `void` | `stopStatistics()`<br>Stop recording statistics and reset any existing statistical data.<br> |

- <!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getActiveConnections

```
int getActiveConnections()
```

Return the number clients that are currently connected.
<dl><dt><span class="returnLabel">Returns:</span></dt>
<dd>int</dd></dl>

<!--   -->
        - #### getActiveTransactions

```
int getActiveTransactions()
```

Return the number of transactions that are currently being processed.
<dl><dt><span class="returnLabel">Returns:</span></dt>
<dd>int</dd></dl>

<!--   -->
        - #### getTotalActivations

```
long getTotalActivations()
```

Return the total number of activation requests processed.
<dl><dt><span class="returnLabel">Returns:</span></dt>
<dd>long</dd></dl>

<!--   -->
        - #### getActivationsPerMinute

```
int getActivationsPerMinute()
```

Returns the number of activation processed per<br> minute from the time statistics were activated.
<dl><dt><span class="returnLabel">Returns:</span></dt>
<dd>int</dd></dl>

<!--   -->
        - #### startStatistics

```
void startStatistics()
```

Start recording statistics and reset any existing statistical data.

<!--   -->
        - #### stopStatistics

```
void stopStatistics()
```

Stop recording statistics and reset any existing statistical data.

<!--   -->
        - #### setDefaultReceiveBufferSize

```
void setDefaultReceiveBufferSize(int bytes)
```

Modify the TCP buffer settings to maximize the performance<br> for the client network.
<dl><dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>bytes</code> - </dd></dl>

<!--   -->
        - #### getDefaultReceiveBufferSize

```
int getDefaultReceiveBufferSize()
```

<!--   -->
        - #### setDefaultSendBufferSize

```
void setDefaultSendBufferSize(int bytes)
```

<!--   -->
        - #### getDefaultSendBufferSize

```
int getDefaultSendBufferSize()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39226-inflow/com_jbase_framework_io_inflow_package-summary)
- Class
- [Use](/39227-class-use/com_jbase_framework_io_inflow_class-use_RequestListenerServiceMBean)
- [Tree](/39226-inflow/com_jbase_framework_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- [Prev Class](/39226-inflow/com_jbase_framework_io_inflow_RequestListenerService "class in com.jbase.framework.io.inflow")
- [Next Class](/39226-inflow/com_jbase_framework_io_inflow_RequestListenerThread "class in com.jbase.framework.io.inflow")


- [Frames](../../../../../index.html?com/jbase/framework/io/inflow//39226-inflow/com_jbase_framework_io_inflow_RequestListenerServiceMBean)
- [No Frames](/39226-inflow/com_jbase_framework_io_inflow_RequestListenerServiceMBean)


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
