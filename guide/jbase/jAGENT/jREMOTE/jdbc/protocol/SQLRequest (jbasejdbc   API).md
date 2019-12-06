# SQLRequest (jbasejdbc   API)

**Created At:** 9/25/2017 11:04:30 AM  
**Updated At:** 2/15/2018 8:02:54 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="SQLRequest (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10};
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
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_SQLRequest)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_SQLParamsResponse "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_SQLResponse "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_SQLRequest)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_SQLRequest)


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

## Class SQLRequest

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jdbc.protocol.SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")
    - - com.jbase.jdbc.protocol.SQLRequest


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></dd></dl><dl><dt>Direct Known Subclasses:</dt>
<dd>
<a href="/39240-protocol/com_jbase_jdbc_protocol_BindRequest" title="class in com.jbase.jdbc.protocol">BindRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_ExecuteRequest" title="class in com.jbase.jdbc.protocol">ExecuteRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_FetchRequest" title="class in com.jbase.jdbc.protocol">FetchRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_metadatarequest" title="class in com.jbase.jdbc.protocol">MetaDataRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_ReleaseRequest" title="class in com.jbase.jdbc.protocol">ReleaseRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_SetPropertiesRequest" title="class in com.jbase.jdbc.protocol">SetPropertiesRequest</a>
</dd></dl>
* * *


```
public abstract class SQLRequest
extends SQLStartRequest
```

Base class of all SQL driver's requests.<br><br> Derived classes should override method getType, and both methods {write|read}Object<br> if they want to serialize / deserialize attributes other then statementId.
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
| `protected static Logger` | `log`  |
| `protected StatementID` | `statementId`  |

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `SQLRequest()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer,<br>           int version)`<br>As a bare minimum each JDBC request contains statement ID.<br> |


        - <!--   -->
### Methods inherited from class com.jbase.jdbc.protocol.[SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")
`getType, getVersion`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ============ FIELD DETAIL =========== -->
    - <!--   -->
### Field Detail
<!--   -->
        - #### log

```
protected static final Logger log
```

<!--   -->
        - #### statementId

```
protected StatementID statementId
```

<!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### SQLRequest

```
public SQLRequest()
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

As a bare minimum each JDBC request contains statement ID.<br> Derived classes which override this method should take care of serializing / deserializing<br> of the statement ID on their own.
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
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_SQLRequest)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_SQLParamsResponse "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_SQLResponse "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_SQLRequest)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_SQLRequest)


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
