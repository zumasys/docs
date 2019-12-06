# NIOJBaseObjectWriter (framework   API)

**Created At:** 9/25/2017 10:31:52 AM  
**Updated At:** 2/15/2018 8:02:34 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="NIOJBaseObjectWriter (framework   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_NIOJBaseObjectWriter)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_NIOJBaseObjectReader "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_ObjectFactory "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_NIOJBaseObjectWriter)
- [No Frames](/39220-io/com_jbase_framework_io_NIOJBaseObjectWriter)


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
com.jbase.framework.io

## Class NIOJBaseObjectWriter

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.framework.io.AbstractJBaseObjectWriter](/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter "class in com.jbase.framework.io")
    - - com.jbase.framework.io.NIOJBaseObjectWriter


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="/39220-io/com_jbase_framework_io_JBaseObjectWriter" title="interface in com.jbase.framework.io">JBaseObjectWriter</a></dd></dl>
* * *


```
public class NIOJBaseObjectWriter
extends AbstractJBaseObjectWriter
```

jBase object writer using the new Java IO.
<dl><dt><span class="simpleTagLabel">Author:</span></dt>
<dd>aphethean</dd></dl>

- <!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary


<caption><span>Fields</span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `static long` | `WRITE_TIMEOUT`<br>The temporary selectors write timeout.<br> |

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `NIOJBaseObjectWriter(SocketChannel socketChannel)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | `checkBuffer(int newDataLength)`  |
| `void` | `close()`  |
| `protected void` | `flush()`  |
| `protected void` | `outByte(byte[] b)`  |
| `protected void` | `outByte(int b)`  |
| `protected void` | `outInt(int i)`  |
| `protected void` | `outUTF(String s)`  |
| `void` | `setSocketChannel(SocketChannel socketChannel)`  |


        - <!--   -->
### Methods inherited from class com.jbase.framework.io.[AbstractJBaseObjectWriter](/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter "class in com.jbase.framework.io")
`writeInt, writeJBaseSerializableObject, writeObject, writeObject, writeObject, writeObject, writeRootObject`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ============ FIELD DETAIL =========== -->
    - <!--   -->
### Field Detail
<!--   -->
        - #### WRITE\_TIMEOUT

```
public static final long WRITE_TIMEOUT
```

The temporary selectors write timeout.  30 seconds.
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../constant-values.html#com.jbase.framework.io.NIOJBaseObjectWriter.WRITE_TIMEOUT">Constant Field Values</a></dd></dl>

<!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### NIOJBaseObjectWriter

```
public NIOJBaseObjectWriter(SocketChannel socketChannel)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### close

```
public void close()
           throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### flush

```
protected void flush()
              throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter#flush--">flush</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter" title="class in com.jbase.framework.io">AbstractJBaseObjectWriter</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### outByte

```
protected void outByte(byte[] b)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter#outByte-byte:A-">outByte</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter" title="class in com.jbase.framework.io">AbstractJBaseObjectWriter</a></code>
</dd></dl>

<!--   -->
        - #### outByte

```
protected void outByte(int b)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter#outByte-int-">outByte</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter" title="class in com.jbase.framework.io">AbstractJBaseObjectWriter</a></code>
</dd></dl>

<!--   -->
        - #### outInt

```
protected void outInt(int i)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter#outInt-int-">outInt</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter" title="class in com.jbase.framework.io">AbstractJBaseObjectWriter</a></code>
</dd></dl>

<!--   -->
        - #### outUTF

```
protected void outUTF(String s)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter#outUTF-java.lang.String-">outUTF</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter" title="class in com.jbase.framework.io">AbstractJBaseObjectWriter</a></code>
</dd></dl>

<!--   -->
        - #### checkBuffer

```
protected void checkBuffer(int newDataLength)
```

<!--   -->
        - #### setSocketChannel

```
public void setSocketChannel(SocketChannel socketChannel)
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_NIOJBaseObjectWriter)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_NIOJBaseObjectReader "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_ObjectFactory "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_NIOJBaseObjectWriter)
- [No Frames](/39220-io/com_jbase_framework_io_NIOJBaseObjectWriter)


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
