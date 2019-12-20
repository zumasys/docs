# ActivationWork (jremote   API)

**Created At:** 9/25/2017 11:59:15 AM  
**Updated At:** 2/15/2018 8:02:26 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ActivationWork (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_ActivationWork)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev Class
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWorkListener "class in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_ActivationWork)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWork)


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

com.jbase.jremote.jca.inflow

## Class ActivationWork

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.inflow.ActivationWork


- All Implemented Interfaces:[Runnable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Runnable.html?is-external=true "class or interface in java.lang"), javax.resource.spi.work.Work
* * *


```
public class ActivationWork
extends Object
implements javax.resource.spi.work.Work
```

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `ActivationWork(List<EndpointAdapter> endpoints,<br>              String activation,<br>              byte[] message)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `void` | `release()`  |
| `void` | `run()`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### ActivationWork

```
public ActivationWork(List<EndpointAdapter> endpoints,
                      String activation,
                      byte[] message)
```


    - ### Method Detail

        - #### release

```
public void release()
```
Specified by:`release` in interface `javax.resource.spi.work.Work`


        - #### run

```
public void run()
```
Specified by:`run` in interface `Runnable`

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_ActivationWork)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev Class
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWorkListener "class in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_ActivationWork)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWork)


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
