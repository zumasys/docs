# Uses of Interface com.jbase.jremote.io.inflow.StatisticsCounter (jremote   API)

**Created At:** 9/25/2017 11:49:28 AM  
**Updated At:** 2/15/2018 8:02:21 AM  
**Original Doc:** [com_jbase_jremote_io_inflow_class-use_StatisticsCounter](https://docs.jbase.com/39257-class-use/com_jbase_jremote_io_inflow_class-use_StatisticsCounter)  
**Original ID:** 278138  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jremote.io.inflow.StatisticsCounter (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](./../../com.jbase.jremote.io.inflow-%28jremote---api%29)
- [Class](./../../statisticscounter-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow")
- Use
- [Tree](./../../com.jbase.jremote.io.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.jremote.io.inflow.StatisticsCounter

- Packages that use [StatisticsCounter](./../../statisticscounter-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") | Package | Description |
| --- | --- |
| com.jbase.jremote.io.inflow |   |
| com.jbase.jremote.jca.mbean |   |
- - ### Uses of [StatisticsCounter](./../../statisticscounter-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.io.inflow](./../../com.jbase.jremote.io.inflow-%28jremote---api%29)


Methods in [com.jbase.jremote.io.inflow](./../../com.jbase.jremote.io.inflow-%28jremote---api%29) with parameters of type [StatisticsCounter](./../../statisticscounter-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `int` | RequestListenerService.`getActivationsProcessedInLastMinute(StatisticsCounter statisticType)`  |
| `void` | RequestListenerService.`incrementActivationCount(StatisticsCounter statisticType)`<br>A RequestHandler is able to call back to this RequestListenerService to<br> track what it considers an activation.<br> |
    - ### Uses of [StatisticsCounter](./../../statisticscounter-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca.mbean](./../../../../jca/mbean/com.jbase.jremote.jca.mbean-%28jremote---api%29)


Classes in [com.jbase.jremote.jca.mbean](./../../../../jca/mbean/com.jbase.jremote.jca.mbean-%28jremote---api%29) that implement [StatisticsCounter](./../../statisticscounter-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `JRemoteStatisticsCounter`  |

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](./../../com.jbase.jremote.io.inflow-%28jremote---api%29)
- [Class](./../../statisticscounter-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow")
- Use
- [Tree](./../../com.jbase.jremote.io.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
