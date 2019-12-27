# StatisticsCounter (jremote   API)

**Created At:** 9/25/2017 11:51:00 AM  
**Updated At:** 2/15/2018 8:02:52 AM  
**Original Doc:** [com_jbase_jremote_io_inflow_StatisticsCounter](https://docs.jbase.com/39256-inflow/com_jbase_jremote_io_inflow_StatisticsCounter)  
**Original ID:** 278150  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="StatisticsCounter (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io.inflow-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-interface-com.jbase.jremote.io.inflow.statisticscounter-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../requestprocessingabstractfactory-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow")
- Next Class


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

com.jbase.jremote.io.inflow

## Interface StatisticsCounter

- All Known Implementing Classes:[JRemoteStatisticsCounter](./. "class in com.jbase.jremote.jca.mbean")
* * *


```
public interface StatisticsCounter
```

A StatisticsCounter provides the ability to get statistics for a custom type.<br> see RequestListenerService#getActivationsProcessedInLastMinute and<br> RequestListenerService#incrementActivationCount

- - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Abstract Methods](javascript:show%284%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `Date` | `getDate()`  |
| `int` | `getId()`  |

- - ### Method Detail

        - #### getDate

```
Date getDate()
```


        - #### getId

```
int getId()
```

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io.inflow-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-interface-com.jbase.jremote.io.inflow.statisticscounter-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../requestprocessingabstractfactory-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow")
- Next Class


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
