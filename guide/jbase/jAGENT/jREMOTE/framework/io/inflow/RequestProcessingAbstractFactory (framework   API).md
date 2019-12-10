# RequestProcessingAbstractFactory (framework   API)

**Created At:** 9/25/2017 10:30:33 AM  
**Updated At:** 2/15/2018 8:02:35 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="RequestProcessingAbstractFactory (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39226-inflow/com_jbase_framework_io_inflow_package-summary)
- Class
- [Use](/39227-class-use/com_jbase_framework_io_inflow_class-use_RequestProcessingAbstractFactory)
- [Tree](/39226-inflow/com_jbase_framework_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- [Prev Class](/39226-inflow/com_jbase_framework_io_inflow_RequestListenerThread "class in com.jbase.framework.io.inflow")
- [Next Class](/39226-inflow/com_jbase_framework_io_inflow_StatisticsCounter "interface in com.jbase.framework.io.inflow")


- [Frames](../../../../../index.html?com/jbase/framework/io/inflow//39226-inflow/com_jbase_framework_io_inflow_RequestProcessingAbstractFactory)
- [No Frames](/39226-inflow/com_jbase_framework_io_inflow_RequestProcessingAbstractFactory)


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

## Interface RequestProcessingAbstractFactory

- * * *


```
public interface RequestProcessingAbstractFactory
```

- - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Abstract Methods](javascript:show%284%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | `createRequestHandler(RequestListenerService rls)`<br>In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.<br> |

- - ### Method Detail

        - #### createRequestHandler

```
RequestHandler createRequestHandler(RequestListenerService rls)
```

In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.  This creates<br> one RequestHandler for each connection.
Parameters:`rls` - Returns:RequestHandler instance

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39226-inflow/com_jbase_framework_io_inflow_package-summary)
- Class
- [Use](/39227-class-use/com_jbase_framework_io_inflow_class-use_RequestProcessingAbstractFactory)
- [Tree](/39226-inflow/com_jbase_framework_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- [Prev Class](/39226-inflow/com_jbase_framework_io_inflow_RequestListenerThread "class in com.jbase.framework.io.inflow")
- [Next Class](/39226-inflow/com_jbase_framework_io_inflow_StatisticsCounter "interface in com.jbase.framework.io.inflow")


- [Frames](../../../../../index.html?com/jbase/framework/io/inflow//39226-inflow/com_jbase_framework_io_inflow_RequestProcessingAbstractFactory)
- [No Frames](/39226-inflow/com_jbase_framework_io_inflow_RequestProcessingAbstractFactory)


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
