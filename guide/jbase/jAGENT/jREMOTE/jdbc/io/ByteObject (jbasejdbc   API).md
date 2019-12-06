# ByteObject (jbasejdbc   API)

**Created At:** 9/25/2017 10:43:15 AM  
**Updated At:** 2/15/2018 8:02:40 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="ByteObject (jbasejdbc   API)";
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
- [Overview](../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- Class
- [Use](/39235-class-use/com_jbase_jdbc_io_class-use_ByteObject)
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter "class in com.jbase.jdbc.io")
- [Next Class](/39232-io/com_jbase_jdbc_io_bytetools "class in com.jbase.jdbc.io")


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_ByteObject)
- [No Frames](/39232-io/com_jbase_jdbc_io_ByteObject)


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
com.jbase.jdbc.io

## Class ByteObject

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.io.ByteObject


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="../../../../com/jbase/jdbc/io/I/39232-io/com_jbase_jdbc_io_ByteObject" title="interface in com.jbase.jdbc.io">IByteObject</a></dd></dl>
* * *


```
public class ByteObject
extends Object
implements IByteObject
```

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `ByteObject()`  |
| `ByteObject(byte[] buf)`  |
| `ByteObject(int length)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `ByteBuffer` | `getByteBuffer()`<br>This method should return a ByteBuffer set to the position to<br> start writing into it.<br> |
| `byte[]` | `getBytes()`<br>Return the bytes backing this IByteObject.<br> |
| `void` | `setByteBuffer(ByteBuffer byteBuffer)`<br>Allow the internal storage to be replaced, as it may be reallocated<br> externally.<br> |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### ByteObject

```
public ByteObject()
```

<!--   -->
        - #### ByteObject

```
public ByteObject(byte[] buf)
```

<!--   -->
        - #### ByteObject

```
public ByteObject(int length)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getBytes

```
public byte[] getBytes()
```

Description copied from interface: `IByteObject`

Return the bytes backing this IByteObject.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="../../../../com/jbase/jdbc/io/I/39232-io/com_jbase_jdbc_io_ByteObject#getBytes--">getBytes</a></code> in interface <code><a href="../../../../com/jbase/jdbc/io/I/39232-io/com_jbase_jdbc_io_ByteObject" title="interface in com.jbase.jdbc.io">IByteObject</a></code>
</dd></dl>

<!--   -->
        - #### getByteBuffer

```
public ByteBuffer getByteBuffer()
                         throws IOException
```

Description copied from interface: `IByteObject`

This method should return a ByteBuffer set to the position to<br> start writing into it.  NOTE - if reading data the ByteBuffer<br> will be expanded to fit the amount of data being read.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="../../../../com/jbase/jdbc/io/I/39232-io/com_jbase_jdbc_io_ByteObject#getByteBuffer--">getByteBuffer</a></code> in interface <code><a href="../../../../com/jbase/jdbc/io/I/39232-io/com_jbase_jdbc_io_ByteObject" title="interface in com.jbase.jdbc.io">IByteObject</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### setByteBuffer

```
public void setByteBuffer(ByteBuffer byteBuffer)
                   throws IOException
```

Description copied from interface: `IByteObject`

Allow the internal storage to be replaced, as it may be reallocated<br> externally.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="../../../../com/jbase/jdbc/io/I/39232-io/com_jbase_jdbc_io_ByteObject#setByteBuffer-java.nio.ByteBuffer-">setByteBuffer</a></code> in interface <code><a href="../../../../com/jbase/jdbc/io/I/39232-io/com_jbase_jdbc_io_ByteObject" title="interface in com.jbase.jdbc.io">IByteObject</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- Class
- [Use](/39235-class-use/com_jbase_jdbc_io_class-use_ByteObject)
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter "class in com.jbase.jdbc.io")
- [Next Class](/39232-io/com_jbase_jdbc_io_bytetools "class in com.jbase.jdbc.io")


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_ByteObject)
- [No Frames](/39232-io/com_jbase_jdbc_io_ByteObject)


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
