# CompileAndExecuteRequest (jbasejdbc   API)

**Created At:** 9/25/2017 11:01:43 AM  
**Updated At:** 2/15/2018 8:02:52 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="CompileAndExecuteRequest (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_compileandexecuterequest)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_CallSubroutineRequest "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_CompileRequest "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_CompileAndExecuteRequest)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_CompileAndExecuteRequest)


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
com.jbase.jdbc.protocol

## Class CompileAndExecuteRequest

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jdbc.protocol.SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")
    - - [com.jbase.jdbc.protocol.CompileRequest](/39240-protocol/com_jbase_jdbc_protocol_CompileRequest "class in com.jbase.jdbc.protocol")
        - - com.jbase.jdbc.protocol.CompileAndExecuteRequest


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></dd></dl>
* * *


```
public class CompileAndExecuteRequest
extends CompileRequest
```

Request to compile and execute a SQL statement.
<dl><dt><span class="simpleTagLabel">Author:</span></dt>
<dd>Peter Kuchta</dd></dl>

- <!-- ======== NESTED CLASS SUMMARY ======== -->
    - <!--   -->
### Nested Class Summary

        - <!--   -->
### Nested classes/interfaces inherited from interface com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
`JBaseSerializable.TYPE`

<!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary

        - <!--   -->
### Fields inherited from class com.jbase.jdbc.protocol.[CompileRequest](/39240-protocol/com_jbase_jdbc_protocol_CompileRequest "class in com.jbase.jdbc.protocol")
`CN, sql`


        - <!--   -->
### Fields inherited from class com.jbase.jdbc.protocol.[SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")
`log`

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `CompileAndExecuteRequest()`  |
| `CompileAndExecuteRequest(String sql)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getType()`<br>This method must be overridden by classes inheriting from SQLStartRequest.<br> |


        - <!--   -->
### Methods inherited from class com.jbase.jdbc.protocol.[CompileRequest](/39240-protocol/com_jbase_jdbc_protocol_CompileRequest "class in com.jbase.jdbc.protocol")
`getStatement, readObject, writeObject`


        - <!--   -->
### Methods inherited from class com.jbase.jdbc.protocol.[SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")
`getVersion`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### CompileAndExecuteRequest

```
public CompileAndExecuteRequest()
```

<!--   -->
        - #### CompileAndExecuteRequest

```
public CompileAndExecuteRequest(String sql)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getType

```
public int getType()
```

Description copied from class: `SQLStartRequest`

This method must be overridden by classes inheriting from SQLStartRequest.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable#getType--">getType</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
<dd>
<code><a href="/39240-protocol/com_jbase_jdbc_protocol_CompileRequest#getType--">getType</a></code> in class <code><a href="/39240-protocol/com_jbase_jdbc_protocol_CompileRequest" title="class in com.jbase.jdbc.protocol">CompileRequest</a></code>
</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>type id of the objects, used during the serialization</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_compileandexecuterequest)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_CallSubroutineRequest "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_CompileRequest "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_CompileAndExecuteRequest)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_CompileAndExecuteRequest)


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
