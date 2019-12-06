# NIOJBaseObjectReader (framework   API)

**Created At:** 9/25/2017 10:31:44 AM  
**Updated At:** 2/15/2018 8:02:36 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="NIOJBaseObjectReader (framework   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10};
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
- [Use](/39223-class-use/com_jbase_framework_io_class-use_NIOJBaseObjectReader)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_NaiveTrustManager "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_NIOJBaseObjectWriter "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_NIOJBaseObjectReader)
- [No Frames](/39220-io/com_jbase_framework_io_NIOJBaseObjectReader)


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

## Class NIOJBaseObjectReader

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.framework.io.AbstractJBaseObjectReader](/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader "class in com.jbase.framework.io")
    - - com.jbase.framework.io.NIOJBaseObjectReader


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="/39220-io/com_jbase_framework_io_JBaseObjectReader" title="interface in com.jbase.framework.io">JBaseObjectReader</a></dd></dl>
* * *


```
public class NIOJBaseObjectReader
extends AbstractJBaseObjectReader
```

jBase object reader based on the new Java IO.
<dl><dt><span class="simpleTagLabel">Author:</span></dt>
<dd>aphethean</dd></dl>

- <!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary


<caption><span>Fields</span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `static long` | `READ_TIMEOUT`<br>The temporary selectors read timeout.<br> |


        - <!--   -->
### Fields inherited from class com.jbase.framework.io.[AbstractJBaseObjectReader](/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader "class in com.jbase.framework.io")
`log`

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `NIOJBaseObjectReader(ObjectFactory factory,<br>                    SocketChannel channel)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | `checkBuffer(int newDataLength)`  |
| `void` | `close()`  |
| `protected int` | `doRead(int numberOfBytes)`<br>Read bytes using the read a temporary Selector<br> |
| `protected byte` | `getByte()`  |
| `protected int` | `getBytes(byte[] buf)`  |
| `protected int` | `getBytes(ByteBuffer bBuf)`  |
| `protected int` | `getInt()`  |
| `ObjectFactory` | `getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders.<br> |
| `protected int` | `inBytes(int numberOfBytesToRead)`  |
| `boolean` | `isClosed()`  |
| `protected String` | `readUTF()`  |
| `void` | `setSocketChannel(SocketChannel socketChannel)`  |


        - <!--   -->
### Methods inherited from class com.jbase.framework.io.[AbstractJBaseObjectReader](/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader "class in com.jbase.framework.io")
`bufferedRead, checkBuffer, readByteObject, readBytes, readInt, readJBaseSerializableObject, readObject, readObject, readObject, readRootObject, readString`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ============ FIELD DETAIL =========== -->
    - <!--   -->
### Field Detail
<!--   -->
        - #### READ\_TIMEOUT

```
public static final long READ_TIMEOUT
```

The temporary selectors read timeout.  30 seconds.
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../constant-values.html#com.jbase.framework.io.NIOJBaseObjectReader.READ_TIMEOUT">Constant Field Values</a></dd></dl>

<!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### NIOJBaseObjectReader

```
public NIOJBaseObjectReader(ObjectFactory factory,
                            SocketChannel channel)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getObjectFactory

```
public ObjectFactory getObjectFactory()
```

Description copied from class: `AbstractJBaseObjectReader`

This method must be implemented by concrete ObjectReaders.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader#getObjectFactory--">getObjectFactory</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader" title="class in com.jbase.framework.io">AbstractJBaseObjectReader</a></code>
</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>an instance of a class implementing JBaseSerializable</dd></dl>

<!--   -->
        - #### close

```
public void close()
           throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_JBaseObjectReader#close--">close</a></code> in interface <code><a href="/39220-io/com_jbase_framework_io_JBaseObjectReader" title="interface in com.jbase.framework.io">JBaseObjectReader</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader#close--">close</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader" title="class in com.jbase.framework.io">AbstractJBaseObjectReader</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### getByte

```
protected byte getByte()
                throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader#getByte--">getByte</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader" title="class in com.jbase.framework.io">AbstractJBaseObjectReader</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### getInt

```
protected int getInt()
              throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader#getInt--">getInt</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader" title="class in com.jbase.framework.io">AbstractJBaseObjectReader</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### getBytes

```
protected int getBytes(byte[] buf)
                throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader#getBytes-byte:A-">getBytes</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader" title="class in com.jbase.framework.io">AbstractJBaseObjectReader</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### getBytes

```
protected int getBytes(ByteBuffer bBuf)
                throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader#getBytes-java.nio.ByteBuffer-">getBytes</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader" title="class in com.jbase.framework.io">AbstractJBaseObjectReader</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### inBytes

```
protected int inBytes(int numberOfBytesToRead)
               throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader#inBytes-int-">inBytes</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader" title="class in com.jbase.framework.io">AbstractJBaseObjectReader</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### readUTF

```
protected String readUTF()
                  throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader#readUTF--">readUTF</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader" title="class in com.jbase.framework.io">AbstractJBaseObjectReader</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### doRead

```
protected int doRead(int numberOfBytes)
              throws IOException
```

Read bytes using the read a temporary Selector
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### checkBuffer

```
protected void checkBuffer(int newDataLength)
```

<!--   -->
        - #### isClosed

```
public boolean isClosed()
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
- [Use](/39223-class-use/com_jbase_framework_io_class-use_NIOJBaseObjectReader)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_NaiveTrustManager "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_NIOJBaseObjectWriter "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_NIOJBaseObjectReader)
- [No Frames](/39220-io/com_jbase_framework_io_NIOJBaseObjectReader)


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
