# JBaseDBError (jbasejdbc   API)

**Created At:** 9/25/2017 10:42:17 AM  
**Updated At:** 2/15/2018 8:02:39 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JBaseDBError (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":9,"i1":9,"i2":9};
var tabs = {65535:["t0","All Methods"],1:["t1","Static Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39230-driver/com_jbase_jdbc_driver_package-summary)
- Class
- [Use](/39231-class-use/com_jbase_jdbc_driver_class-use_JBaseDBError)
- [Tree](/39230-driver/com_jbase_jdbc_driver_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- Prev Class
- [Next Class](/39230-driver/com_jbase_jdbc_driver_JBaseJDBCDriver "class in com.jbase.jdbc.driver")


- [Frames](../../../../index.html?com/jbase/jdbc/driver//39230-driver/com_jbase_jdbc_driver_JBaseDBError)
- [No Frames](/39230-driver/com_jbase_jdbc_driver_JBaseDBError)


- [All Classes](../../../../allclasses-noframe.html)


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
com.jbase.jdbc.driver

## Class JBaseDBError

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.driver.JBaseDBError


- * * *


```
public class JBaseDBError
extends Object
```

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `JBaseDBError()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t1" class="tableTab"><span><a href="javascript:show(1);">Static Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `static void` | `throwInvalidColumnIndex(int index)`  |
| `static void` | `throwSQLException(Exception e,<br>                 String msg)`  |
| `static void` | `throwSQLException(String errcode)`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### JBaseDBError

```
public JBaseDBError()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### throwSQLException

```
public static void throwSQLException(String errcode)
                              throws SQLException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### throwSQLException

```
public static void throwSQLException(Exception e,
                                     String msg)
                              throws SQLException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->
        - #### throwInvalidColumnIndex

```
public static void throwInvalidColumnIndex(int index)
                                    throws SQLException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39230-driver/com_jbase_jdbc_driver_package-summary)
- Class
- [Use](/39231-class-use/com_jbase_jdbc_driver_class-use_JBaseDBError)
- [Tree](/39230-driver/com_jbase_jdbc_driver_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- Prev Class
- [Next Class](/39230-driver/com_jbase_jdbc_driver_JBaseJDBCDriver "class in com.jbase.jdbc.driver")


- [Frames](../../../../index.html?com/jbase/jdbc/driver//39230-driver/com_jbase_jdbc_driver_JBaseDBError)
- [No Frames](/39230-driver/com_jbase_jdbc_driver_JBaseDBError)


- [All Classes](../../../../allclasses-noframe.html)


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
