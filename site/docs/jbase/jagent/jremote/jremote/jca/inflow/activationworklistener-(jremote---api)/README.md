# ActivationWorkListener (jremote   API)

**Created At:** 9/25/2017 11:59:22 AM  
**Updated At:** 2/15/2018 8:02:26 AM  
**Original Doc:** [com_jbase_jremote_jca_inflow_ActivationWorkListener](https://docs.jbase.com/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWorkListener)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ActivationWorkListener (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca.inflow-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.jca.inflow.activationworklistener-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.jca.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../activationwork-%28jremote---api%29 "class in com.jbase.jremote.jca.inflow")
- [Next Class](./../endpointadapter-%28jremote---api%29 "class in com.jbase.jremote.jca.inflow")


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

com.jbase.jremote.jca.inflow

## Class ActivationWorkListener

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.inflow.ActivationWorkListener


- All Implemented Interfaces:[EventListener](http://java.sun.com/j2se/1.5.0/docs/api/java/util/EventListener.html?is-external=true "class or interface in java.util"), javax.resource.spi.work.WorkListener
* * *


```
public class ActivationWorkListener
extends Object
implements javax.resource.spi.work.WorkListener
```

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `ActivationWorkListener()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `void` | `workAccepted(javax.resource.spi.work.WorkEvent we)`  |
| `void` | `workCompleted(javax.resource.spi.work.WorkEvent we)`  |
| `void` | `workRejected(javax.resource.spi.work.WorkEvent we)`  |
| `void` | `workStarted(javax.resource.spi.work.WorkEvent we)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### ActivationWorkListener

```
public ActivationWorkListener()
```


    - ### Method Detail

        - #### workAccepted

```
public void workAccepted(javax.resource.spi.work.WorkEvent we)
```
Specified by:`workAccepted` in interface `javax.resource.spi.work.WorkListener`


        - #### workCompleted

```
public void workCompleted(javax.resource.spi.work.WorkEvent we)
```
Specified by:`workCompleted` in interface `javax.resource.spi.work.WorkListener`


        - #### workRejected

```
public void workRejected(javax.resource.spi.work.WorkEvent we)
```
Specified by:`workRejected` in interface `javax.resource.spi.work.WorkListener`


        - #### workStarted

```
public void workStarted(javax.resource.spi.work.WorkEvent we)
```
Specified by:`workStarted` in interface `javax.resource.spi.work.WorkListener`

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca.inflow-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.jca.inflow.activationworklistener-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.jca.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../activationwork-%28jremote---api%29 "class in com.jbase.jremote.jca.inflow")
- [Next Class](./../endpointadapter-%28jremote---api%29 "class in com.jbase.jremote.jca.inflow")


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
