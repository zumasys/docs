# RequestListenerServiceMBean (framework   API)

**Created At:** 9/25/2017 10:30:19 AM  
**Updated At:** 2/15/2018 8:02:41 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="RequestListenerServiceMBean (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6,"i3":6,"i4":6,"i5":6,"i6":6,"i7":6,"i8":6,"i9":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

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

com.jbase.framework.io.inflow

## Interface RequestListenerServiceMBean

- All Known Implementing Classes:[RequestListenerService](/39226-inflow/com_jbase_framework_io_inflow_RequestListenerService "class in com.jbase.framework.io.inflow")
* * *


```
public interface RequestListenerServiceMBean
```

Expose information about the current state of the<br> inbound request processor.
Author:aphethean

- - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Abstract Methods](javascript:show%284%29;) | Modifier and Type | Method and Description |
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

- - ### Method Detail

        - #### getActiveConnections

```
int getActiveConnections()
```

Return the number clients that are currently connected.
Returns:int


        - #### getActiveTransactions

```
int getActiveTransactions()
```

Return the number of transactions that are currently being processed.
Returns:int


        - #### getTotalActivations

```
long getTotalActivations()
```

Return the total number of activation requests processed.
Returns:long


        - #### getActivationsPerMinute

```
int getActivationsPerMinute()
```

Returns the number of activation processed per<br> minute from the time statistics were activated.
Returns:int


        - #### startStatistics

```
void startStatistics()
```

Start recording statistics and reset any existing statistical data.


        - #### stopStatistics

```
void stopStatistics()
```

Stop recording statistics and reset any existing statistical data.


        - #### setDefaultReceiveBufferSize

```
void setDefaultReceiveBufferSize(int bytes)
```

Modify the TCP buffer settings to maximize the performance<br> for the client network.
Parameters:`bytes` -


        - #### getDefaultReceiveBufferSize

```
int getDefaultReceiveBufferSize()
```


        - #### setDefaultSendBufferSize

```
void setDefaultSendBufferSize(int bytes)
```


        - #### getDefaultSendBufferSize

```
int getDefaultSendBufferSize()
```

Skip navigation links

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
