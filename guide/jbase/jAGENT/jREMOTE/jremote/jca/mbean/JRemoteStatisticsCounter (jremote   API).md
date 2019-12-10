# JRemoteStatisticsCounter (jremote   API)

**Created At:** 9/25/2017 12:06:19 PM  
**Updated At:** 2/15/2018 8:02:31 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JRemoteStatisticsCounter (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39266-mbean/com_jbase_jremote_jca_mbean_package-summary)
- Class
- [Use](/39267-class-use/com_jbase_jremote_jca_mbean_class-use_JRemoteStatisticsCounter)
- [Tree](/39266-mbean/com_jbase_jremote_jca_mbean_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev Class
- [Next Class](/39266-mbean/com_jbase_jremote_jca_mbean_JRemoteStatisticsCounter.Types "enum in com.jbase.jremote.jca.mbean")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/mbean//39266-mbean/com_jbase_jremote_jca_mbean_JRemoteStatisticsCounter)
- [No Frames](/39266-mbean/com_jbase_jremote_jca_mbean_JRemoteStatisticsCounter)


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

com.jbase.jremote.jca.mbean

## Class JRemoteStatisticsCounter

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.mbean.JRemoteStatisticsCounter


- All Implemented Interfaces:[StatisticsCounter](/39256-inflow/com_jbase_jremote_io_inflow_StatisticsCounter "interface in com.jbase.jremote.io.inflow")
* * *


```
public class JRemoteStatisticsCounter
extends Object
implements StatisticsCounter
```

- - ### Nested Class Summary


Nested Classes | Modifier and Type | Class and Description |
| --- | --- |
| `static class` | `JRemoteStatisticsCounter.Types`  |


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `JRemoteStatisticsCounter(JRemoteStatisticsCounter.Types id)`  |
| `JRemoteStatisticsCounter(JRemoteStatisticsCounter.Types id,<br>                        int initialCount)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | `equals(Object obj)`  |
| `Date` | `getDate()`  |
| `int` | `getId()`  |
| `void` | `incrementCount()`  |
| `void` | `setDate(Date d)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### JRemoteStatisticsCounter

```
public JRemoteStatisticsCounter(JRemoteStatisticsCounter.Types id)
```


        - #### JRemoteStatisticsCounter

```
public JRemoteStatisticsCounter(JRemoteStatisticsCounter.Types id,
                                int initialCount)
```


    - ### Method Detail

        - #### incrementCount

```
public void incrementCount()
```


        - #### getId

```
public int getId()
```
Specified by:`getId` in interface `StatisticsCounter`


        - #### getDate

```
public Date getDate()
```
Specified by:`getDate` in interface `StatisticsCounter`


        - #### setDate

```
public void setDate(Date d)
```


        - #### equals

```
public boolean equals(Object obj)
```
Overrides:`equals` in class `Object`

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39266-mbean/com_jbase_jremote_jca_mbean_package-summary)
- Class
- [Use](/39267-class-use/com_jbase_jremote_jca_mbean_class-use_JRemoteStatisticsCounter)
- [Tree](/39266-mbean/com_jbase_jremote_jca_mbean_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev Class
- [Next Class](/39266-mbean/com_jbase_jremote_jca_mbean_JRemoteStatisticsCounter.Types "enum in com.jbase.jremote.jca.mbean")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/mbean//39266-mbean/com_jbase_jremote_jca_mbean_JRemoteStatisticsCounter)
- [No Frames](/39266-mbean/com_jbase_jremote_jca_mbean_JRemoteStatisticsCounter)


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
