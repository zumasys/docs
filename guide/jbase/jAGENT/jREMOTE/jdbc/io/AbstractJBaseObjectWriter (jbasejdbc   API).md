# AbstractJBaseObjectWriter (jbasejdbc   API)

**Created At:** 9/25/2017 10:43:09 AM  
**Updated At:** 2/15/2018 8:02:40 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="AbstractJBaseObjectWriter (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":6,"i1":6,"i2":6,"i3":6,"i4":6,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"],8:["t4","Concrete Methods"]};
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
- [Use](/39235-class-use/com_jbase_jdbc_io_class-use_AbstractJBaseObjectWriter)
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader "class in com.jbase.jdbc.io")
- [Next Class](/39232-io/com_jbase_jdbc_io_ByteObject "class in com.jbase.jdbc.io")


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter)
- [No Frames](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter)


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

## Class AbstractJBaseObjectWriter

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.io.AbstractJBaseObjectWriter


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter" title="interface in com.jbase.jdbc.io">JBaseObjectWriter</a></dd></dl><dl><dt>Direct Known Subclasses:</dt>
<dd>
<a href="/39232-io/com_jbase_jdbc_io_IOJBaseObjectWriter" title="class in com.jbase.jdbc.io">IOJBaseObjectWriter</a>, <a href="/39232-io/com_jbase_jdbc_io_niojbaseobjectwriter" title="class in com.jbase.jdbc.io">NIOJBaseObjectWriter</a>
</dd></dl>
* * *


```
public abstract class AbstractJBaseObjectWriter
extends Object
implements JBaseObjectWriter
```

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `AbstractJBaseObjectWriter()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected abstract void` | `flush()`  |
| `protected abstract void` | `outByte(byte[] b)`  |
| `protected abstract void` | `outByte(int b)`  |
| `protected abstract void` | `outInt(int i)`  |
| `protected abstract void` | `outUTF(String s)`  |
| `void` | `writeInt(int i)`  |
| `protected void` | `writeJBaseSerializableObject(JBaseSerializable o)`  |
| `void` | `writeObject(byte[] data)`  |
| `void` | `writeObject(IByteObject o)`  |
| `void` | `writeObject(JBaseSerializable o)`  |
| `void` | `writeObject(String o)`  |
| `void` | `writeRootObject(JBaseSerializable o)`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


        - <!--   -->
### Methods inherited from interface com.jbase.jdbc.io.[JBaseObjectWriter](/39232-io/com_jbase_jdbc_io_jbaseobjectwriter "interface in com.jbase.jdbc.io")
`close`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### AbstractJBaseObjectWriter

```
public AbstractJBaseObjectWriter()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### outByte

```
protected abstract void outByte(byte[] b)
                         throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### outByte

```
protected abstract void outByte(int b)
                         throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### outInt

```
protected abstract void outInt(int i)
                        throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### outUTF

```
protected abstract void outUTF(String s)
                        throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### flush

```
protected abstract void flush()
                       throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### writeInt

```
public void writeInt(int i)
              throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter#writeInt-int-">writeInt</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter" title="interface in com.jbase.jdbc.io">JBaseObjectWriter</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### writeObject

```
public void writeObject(String o)
                 throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter#writeObject-java.lang.String-">writeObject</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter" title="interface in com.jbase.jdbc.io">JBaseObjectWriter</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### writeObject

```
public void writeObject(byte[] data)
                 throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter#writeObject-byte:A-">writeObject</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter" title="interface in com.jbase.jdbc.io">JBaseObjectWriter</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### writeObject

```
public void writeObject(IByteObject o)
                 throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter#writeObject-com.jbase.jdbc.io.IByteObject-">writeObject</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter" title="interface in com.jbase.jdbc.io">JBaseObjectWriter</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### writeObject

```
public void writeObject(JBaseSerializable o)
                 throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter#writeObject-com.jbase.jdbc.io.JBaseSerializable-">writeObject</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter" title="interface in com.jbase.jdbc.io">JBaseObjectWriter</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### writeJBaseSerializableObject

```
protected void writeJBaseSerializableObject(JBaseSerializable o)
                                     throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### writeRootObject

```
public void writeRootObject(JBaseSerializable o)
                     throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter#writeRootObject-com.jbase.jdbc.io.JBaseSerializable-">writeRootObject</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter" title="interface in com.jbase.jdbc.io">JBaseObjectWriter</a></code>
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
- [Use](/39235-class-use/com_jbase_jdbc_io_class-use_AbstractJBaseObjectWriter)
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader "class in com.jbase.jdbc.io")
- [Next Class](/39232-io/com_jbase_jdbc_io_ByteObject "class in com.jbase.jdbc.io")


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter)
- [No Frames](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter)


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
