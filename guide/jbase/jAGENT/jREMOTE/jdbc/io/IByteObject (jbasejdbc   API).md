# IByteObject (jbasejdbc   API)

**Created At:** 9/25/2017 10:49:29 AM  
**Updated At:** 2/15/2018 8:02:45 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="IByteObject (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":6,"i1":6,"i2":6};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};
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
- [Use](/39235-class-use/com_jbase_jdbc_io_class-use_IByteObject)
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39232-io/com_jbase_jdbc_io_GZipCompressor "class in com.jbase.jdbc.io")
- [Next Class](/39232-io/com_jbase_jdbc_io_IOJBaseObjectReader "class in com.jbase.jdbc.io")


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_IByteObject)
- [No Frames](/39232-io/com_jbase_jdbc_io_IByteObject)


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

## Interface IByteObject

- <dl><dt>All Known Implementing Classes:</dt>
<dd><a href="/39232-io/com_jbase_jdbc_io_ByteObject" title="class in com.jbase.jdbc.io">ByteObject</a></dd></dl>
* * *


```
public interface IByteObject
```

This interface allows a client to optimise the serialization of byte buffers.  This<br> may be neccessary to avoid unneccessary copying or creation of byte arrays.

- <!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `ByteBuffer` | `getByteBuffer()`<br>This method should return a ByteBuffer set to the position to<br> start writing into it.<br> |
| `byte[]` | `getBytes()`<br>Return the bytes backing this IByteObject.<br> |
| `void` | `setByteBuffer(ByteBuffer byteBuffer)`<br>Allow the internal storage to be replaced, as it may be reallocated<br> externally.<br> |

- <!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getByteBuffer

```
ByteBuffer getByteBuffer()
                  throws IOException
```

This method should return a ByteBuffer set to the position to<br> start writing into it.  NOTE - if reading data the ByteBuffer<br> will be expanded to fit the amount of data being read.
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### setByteBuffer

```
void setByteBuffer(ByteBuffer byteBuffer)
            throws IOException
```

Allow the internal storage to be replaced, as it may be reallocated<br> externally.
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### getBytes

```
byte[] getBytes()
```

Return the bytes backing this IByteObject.
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- Class
- [Use](/39235-class-use/com_jbase_jdbc_io_class-use_IByteObject)
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39232-io/com_jbase_jdbc_io_GZipCompressor "class in com.jbase.jdbc.io")
- [Next Class](/39232-io/com_jbase_jdbc_io_IOJBaseObjectReader "class in com.jbase.jdbc.io")


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_IByteObject)
- [No Frames](/39232-io/com_jbase_jdbc_io_IByteObject)


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
