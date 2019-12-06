# BindRequest (jbasejdbc   API)

**Created At:** 9/25/2017 10:57:01 AM  
**Updated At:** 2/15/2018 8:02:45 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="BindRequest (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10};
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
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_BindRequest)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_AuthenticationRequest.UserCredentials "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_CallSubroutineRequest "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_BindRequest)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_BindRequest)


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

## Class BindRequest

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jdbc.protocol.SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")
    - - [com.jbase.jdbc.protocol.SQLRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLRequest "class in com.jbase.jdbc.protocol")
        - - com.jbase.jdbc.protocol.BindRequest


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></dd></dl><dl><dt>Direct Known Subclasses:</dt>
<dd><a href="/39240-protocol/com_jbase_jdbc_protocol_CallSubroutineRequest" title="class in com.jbase.jdbc.protocol">CallSubroutineRequest</a></dd></dl>
* * *


```
public class BindRequest
extends SQLRequest
```

Request to bind parameters to previously precompiled<br> (or prepared) SQL statement.
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


<caption><span>Fields</span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `protected ParameterList` | `parameterList`  |


        - <!--   -->
### Fields inherited from class com.jbase.jdbc.protocol.[SQLRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLRequest "class in com.jbase.jdbc.protocol")
`log, statementId`

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `BindRequest()`  |
| `BindRequest(StatementID statementId,<br>           ParameterList parameterList)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `ParameterList` | `getParameterList()`  |
| `int` | `getType()`<br>This method must be overridden by classes inheriting from SQLStartRequest.<br> |
| `void` | `readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | `setParameterList(ParameterList ps)`  |
| `void` | `writeObject(JBaseObjectWriter writer,<br>           int version)`<br>As a bare minimum each JDBC request contains statement ID.<br> |


        - <!--   -->
### Methods inherited from class com.jbase.jdbc.protocol.[SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")
`getVersion`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ============ FIELD DETAIL =========== -->
    - <!--   -->
### Field Detail
<!--   -->
        - #### parameterList

```
protected ParameterList parameterList
```

<!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### BindRequest

```
public BindRequest()
```

<!--   -->
        - #### BindRequest

```
public BindRequest(StatementID statementId,
                   ParameterList parameterList)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getParameterList

```
public ParameterList getParameterList()
```

<!--   -->
        - #### setParameterList

```
public void setParameterList(ParameterList ps)
```

<!--   -->
        - #### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```

Description copied from class: `SQLRequest`

As a bare minimum each JDBC request contains statement ID.<br> Derived classes which override this method should take care of serializing / deserializing<br> of the statement ID on their own.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable#writeObject-com.jbase.jdbc.io.JBaseObjectWriter-int-">writeObject</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
<dd>
<code><a href="/39240-protocol/com_jbase_jdbc_protocol_SQLRequest#writeObject-com.jbase.jdbc.io.JBaseObjectWriter-int-">writeObject</a></code> in class <code><a href="/39240-protocol/com_jbase_jdbc_protocol_SQLRequest" title="class in com.jbase.jdbc.protocol">SQLRequest</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable#readObject-com.jbase.jdbc.io.JBaseObjectReader-int-">readObject</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
<dd>
<code><a href="/39240-protocol/com_jbase_jdbc_protocol_SQLRequest#readObject-com.jbase.jdbc.io.JBaseObjectReader-int-">readObject</a></code> in class <code><a href="/39240-protocol/com_jbase_jdbc_protocol_SQLRequest" title="class in com.jbase.jdbc.protocol">SQLRequest</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

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
<code><a href="/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest#getType--">getType</a></code> in class <code><a href="/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest" title="class in com.jbase.jdbc.protocol">SQLStartRequest</a></code>
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
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_BindRequest)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_AuthenticationRequest.UserCredentials "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_CallSubroutineRequest "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_BindRequest)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_BindRequest)


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
