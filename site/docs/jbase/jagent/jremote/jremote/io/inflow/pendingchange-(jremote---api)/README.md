# PendingChange (jremote   API)

**Created At:** 9/25/2017 11:50:11 AM  
**Updated At:** 2/15/2018 8:02:46 AM  
**Original Doc:** [com_jbase_jremote_io_inflow_PendingChange](https://docs.jbase.com/39256-inflow/com_jbase_jremote_io_inflow_PendingChange)  
**Original ID:** 278143  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="PendingChange (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io.inflow-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.io.inflow.pendingchange-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../clienthandle-%28jremote---api%29 "class in com.jbase.jremote.io.inflow")
- [Next Class](./../requesthandler-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow")


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

## Class PendingChange

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.io.inflow.PendingChange


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
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.io.inflow.PendingChange.REGISTER)


        - #### CHANGEOPS

```
public static final int CHANGEOPS
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.io.inflow.PendingChange.CHANGEOPS)


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
- [Package](./../com.jbase.jremote.io.inflow-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.io.inflow.pendingchange-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../clienthandle-%28jremote---api%29 "class in com.jbase.jremote.io.inflow")
- [Next Class](./../requesthandler-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow")


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
