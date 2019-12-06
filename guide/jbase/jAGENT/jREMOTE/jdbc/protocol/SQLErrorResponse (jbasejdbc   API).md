# SQLErrorResponse (jbasejdbc   API)

**Created At:** 9/25/2017 11:04:10 AM  
**Updated At:** 2/15/2018 8:02:54 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="SQLErrorResponse (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10};
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
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_sqlerrorresponse)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_SetPropertiesResponse "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_SQLOKResponse "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_SQLErrorResponse)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_SQLErrorResponse)


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

## Class SQLErrorResponse

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jdbc.io.Response](/39232-io/com_jbase_jdbc_io_response "class in com.jbase.jdbc.io")
    - - [com.jbase.jdbc.protocol.SQLResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLResponse "class in com.jbase.jdbc.protocol")
        - - com.jbase.jdbc.protocol.SQLErrorResponse


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></dd></dl>
* * *


```
public class SQLErrorResponse
extends SQLResponse
```

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
### Fields inherited from class com.jbase.jdbc.protocol.[SQLResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLResponse "class in com.jbase.jdbc.protocol")
`statementId`

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `SQLErrorResponse()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getMessage()`<br>Methods for non SQL code that expects a message and status.<br> |
| `SQLError` | `getSQLError()`  |
| `int` | `getStatus()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer,<br>           int version)`  |


        - <!--   -->
### Methods inherited from class com.jbase.jdbc.protocol.[SQLResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLResponse "class in com.jbase.jdbc.protocol")
`getStatementId`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### SQLErrorResponse

```
public SQLErrorResponse()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

<!--   -->
        - #### getSQLError

```
public SQLError getSQLError()
```

<!--   -->
        - #### getMessage

```
public String getMessage()
```

Methods for non SQL code that expects a message and status. New code<br> should get the SQLError and then extract field from it.

<!--   -->
        - #### getStatus

```
public int getStatus()
```

<!--   -->
        - #### getType

```
public int getType()
```
<dl><dt><span class="returnLabel">Returns:</span></dt>
<dd>type id of the objects, used during the serialization</dd></dl>

<!--   -->
        - #### getVersion

```
public int getVersion()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_sqlerrorresponse)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_SetPropertiesResponse "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_SQLOKResponse "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_SQLErrorResponse)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_SQLErrorResponse)


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
