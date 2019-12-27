# PendingChange (framework   API)

**Created At:** 9/25/2017 10:29:50 AM  
**Updated At:** 2/15/2018 8:02:41 AM  
**Original Doc:** [com_jbase_framework_io_inflow_PendingChange](https://docs.jbase.com/39226-inflow/com_jbase_framework_io_inflow_PendingChange)  
**Original ID:** 277766  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="PendingChange (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.framework.io.inflow-%28framework---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.framework.io.inflow.pendingchange-%28framework---api%29)
- [Tree](./../com.jbase.framework.io.inflow-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- [Prev Class](./../clienthandle-%28framework---api%29 "class in com.jbase.framework.io.inflow")
- [Next Class](./../requesthandler-%28framework---api%29 "interface in com.jbase.framework.io.inflow")


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

com.jbase.framework.io.inflow

## Class PendingChange

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.framework.io.inflow.PendingChange


- * * *


```
public class PendingChange
extends Object
```

- - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `static int` | `CHANGEOPS`  |
| `static int` | `REGISTER`  |


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `PendingChange(SocketChannel channel,<br>             int type,<br>             int ops)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `SocketChannel` | `getChannel()`  |
| `int` | `getOps()`  |
| `int` | `getType()`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Field Detail

        - #### REGISTER

```
public static final int REGISTER
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.framework.io.inflow.PendingChange.REGISTER)


        - #### CHANGEOPS

```
public static final int CHANGEOPS
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.framework.io.inflow.PendingChange.CHANGEOPS)


    - ### Constructor Detail

        - #### PendingChange

```
public PendingChange(SocketChannel channel,
                     int type,
                     int ops)
```


    - ### Method Detail

        - #### getType

```
public int getType()
```


        - #### getOps

```
public int getOps()
```


        - #### getChannel

```
public SocketChannel getChannel()
```

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.framework.io.inflow-%28framework---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.framework.io.inflow.pendingchange-%28framework---api%29)
- [Tree](./../com.jbase.framework.io.inflow-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- [Prev Class](./../clienthandle-%28framework---api%29 "class in com.jbase.framework.io.inflow")
- [Next Class](./../requesthandler-%28framework---api%29 "interface in com.jbase.framework.io.inflow")


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
