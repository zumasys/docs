# PendingChange (jbasejdbc   API)

**Created At:** 9/25/2017 10:51:18 AM  
**Updated At:** 2/15/2018 8:02:51 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="PendingChange (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39238-inflow/com_jbase_jdbc_io_inflow_package-summary)
- Class
- [Use](/39239-class-use/com_jbase_jdbc_io_inflow_class-use_PendingChange)
- [Tree](/39238-inflow/com_jbase_jdbc_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39238-inflow/com_jbase_jdbc_io_inflow_ClientHandle "class in com.jbase.jdbc.io.inflow")
- [Next Class](/39238-inflow/com_jbase_jdbc_io_inflow_RequestHandler "interface in com.jbase.jdbc.io.inflow")


- [Frames](../../../../../index.html?com/jbase/jdbc/io/inflow//39238-inflow/com_jbase_jdbc_io_inflow_PendingChange)
- [No Frames](/39238-inflow/com_jbase_jdbc_io_inflow_PendingChange)


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
com.jbase.jdbc.io.inflow

## Class PendingChange

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.io.inflow.PendingChange


- * * *


```
public class PendingChange
extends Object
```

- <!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary


<caption><span>Fields</span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `static int` | `CHANGEOPS`  |
| `static int` | `REGISTER`  |

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `PendingChange(SocketChannel channel,<br>             int type,<br>             int ops)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `SocketChannel` | `getChannel()`  |
| `int` | `getOps()`  |
| `int` | `getType()`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ============ FIELD DETAIL =========== -->
    - <!--   -->
### Field Detail
<!--   -->
        - #### REGISTER

```
public static final int REGISTER
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../constant-values.html#com.jbase.jdbc.io.inflow.PendingChange.REGISTER">Constant Field Values</a></dd></dl>

<!--   -->
        - #### CHANGEOPS

```
public static final int CHANGEOPS
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../constant-values.html#com.jbase.jdbc.io.inflow.PendingChange.CHANGEOPS">Constant Field Values</a></dd></dl>

<!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### PendingChange

```
public PendingChange(SocketChannel channel,
                     int type,
                     int ops)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getType

```
public int getType()
```

<!--   -->
        - #### getOps

```
public int getOps()
```

<!--   -->
        - #### getChannel

```
public SocketChannel getChannel()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39238-inflow/com_jbase_jdbc_io_inflow_package-summary)
- Class
- [Use](/39239-class-use/com_jbase_jdbc_io_inflow_class-use_PendingChange)
- [Tree](/39238-inflow/com_jbase_jdbc_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39238-inflow/com_jbase_jdbc_io_inflow_ClientHandle "class in com.jbase.jdbc.io.inflow")
- [Next Class](/39238-inflow/com_jbase_jdbc_io_inflow_RequestHandler "interface in com.jbase.jdbc.io.inflow")


- [Frames](../../../../../index.html?com/jbase/jdbc/io/inflow//39238-inflow/com_jbase_jdbc_io_inflow_PendingChange)
- [No Frames](/39238-inflow/com_jbase_jdbc_io_inflow_PendingChange)


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
