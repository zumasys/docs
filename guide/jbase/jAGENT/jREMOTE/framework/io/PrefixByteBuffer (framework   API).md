# PrefixByteBuffer (framework   API)

**Created At:** 9/25/2017 10:32:36 AM  
**Updated At:** 2/15/2018 8:02:28 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="PrefixByteBuffer (framework   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10};
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
- [Use](/39223-class-use/com_jbase_framework_io_class-use_PrefixByteBuffer)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_OKResponse "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_Response "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_PrefixByteBuffer)
- [No Frames](/39220-io/com_jbase_framework_io_PrefixByteBuffer)


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

## Class PrefixByteBuffer

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.framework.io.PrefixByteBuffer


- * * *


```
public class PrefixByteBuffer
extends Object
```

- <!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary


<caption><span>Fields</span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `static int` | `CHUNK_SIZE`  |

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `PrefixByteBuffer()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `clear()`<br>Method:         clear()<br><br> Description:   Reset buffer to its empty state.<br> |
| `void` | `flip()`<br>Method:         flip()<br><br> Description:   Similar the ByteBuffer.flip() but the position must be<br> set back to the start of the prefix.<br> |
| `byte[]` | `getBackingArray()`<br>Method:                 getBackingArray()<br><br> Description:   Returns a pointer to the backing array<br><br> Note:                  DANGEROUS.<br> |
| `byte` | `getByte()`  |
| `void` | `getBytes(byte[] buf)`  |
| `void` | `getBytes(ByteBuffer bBuf)`  |
| `int` | `getInt()`  |
| `int` | `getStartOffset()`  |
| `String` | `getUTF8()`  |
| `int` | `length()`  |
| `void` | `pushByte(int b)`<br>Write bytes to start methods<br> |
| `void` | `pushBytes(byte[] b)`  |
| `void` | `pushInt(int v)`  |
| `void` | `putByte(int b)`<br>Write bytes to end methods<br> |
| `void` | `putBytes(byte[] b)`  |
| `void` | `putInt(int v)`  |
| `void` | `putUTF8(String s)`  |
| `void` | `readFrom(ByteBuffer buf)`<br>Method:                 readFrom()<br><br> Description:           Read a BufferBuffer into self as if it had been received<br>                                        from an InputStream.<br> |
| `void` | `readFrom(InputStream is,<br>        int length)`<br>Method:                 readFrom()<br><br> Description:           Reads a given number of bytes from a given input stream.<br> |
| `void` | `writeTo(ByteBuffer buf)`  |
| `void` | `writeTo(OutputStream os)`<br>Method:                 writeTo()<br><br> Description:   Write data to a given OutputStream.<br> |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ============ FIELD DETAIL =========== -->
    - <!--   -->
### Field Detail
<!--   -->
        - #### CHUNK\_SIZE

```
public static final int CHUNK_SIZE
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../constant-values.html#com.jbase.framework.io.PrefixByteBuffer.CHUNK_SIZE">Constant Field Values</a></dd></dl>

<!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### PrefixByteBuffer

```
public PrefixByteBuffer()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### length

```
public int length()
```

<!--   -->
        - #### flip

```
public void flip()
```

Method:         flip()<br><br> Description:   Similar the ByteBuffer.flip() but the position must be<br> set back to the start of the prefix.

<!--   -->
        - #### clear

```
public void clear()
```

Method:         clear()<br><br> Description:   Reset buffer to its empty state. Since we will need it again do not loose<br> the backing array.

<!--   -->
        - #### writeTo

```
public void writeTo(OutputStream os)
             throws IOException
```

Method:                 writeTo()<br><br> Description:   Write data to a given OutputStream. Must be fast so don't<br>                                        use get().
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### writeTo

```
public void writeTo(ByteBuffer buf)
```

<!--   -->
        - #### readFrom

```
public void readFrom(InputStream is,
                     int length)
              throws IOException
```

Method:                 readFrom()<br><br> Description:           Reads a given number of bytes from a given input stream.
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### readFrom

```
public void readFrom(ByteBuffer buf)
```

Method:                 readFrom()<br><br> Description:           Read a BufferBuffer into self as if it had been received<br>                                        from an InputStream.<br><br> Note:                  USED ONLY FOR UNIT TESTING.

<!--   -->
        - #### getBackingArray

```
public byte[] getBackingArray()
```

Method:                 getBackingArray()<br><br> Description:   Returns a pointer to the backing array<br><br> Note:                  DANGEROUS. DO NOT MODIFY RETURNED ARRAY.

<!--   -->
        - #### getStartOffset

```
public int getStartOffset()
```

<!--   -->
        - #### putByte

```
public void putByte(int b)
```

Write bytes to end methods

<!--   -->
        - #### putBytes

```
public void putBytes(byte[] b)
```

<!--   -->
        - #### putUTF8

```
public void putUTF8(String s)
             throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### putInt

```
public void putInt(int v)
```

<!--   -->
        - #### pushByte

```
public void pushByte(int b)
              throws BufferOverflowException
```

Write bytes to start methods
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/BufferOverflowException.html?is-external=true" title="class or interface in java.nio">BufferOverflowException</a></code></dd></dl>

<!--   -->
        - #### pushBytes

```
public void pushBytes(byte[] b)
               throws BufferOverflowException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/BufferOverflowException.html?is-external=true" title="class or interface in java.nio">BufferOverflowException</a></code></dd></dl>

<!--   -->
        - #### pushInt

```
public void pushInt(int v)
```

<!--   -->
        - #### getByte

```
public byte getByte()
```

<!--   -->
        - #### getInt

```
public int getInt()
```

<!--   -->
        - #### getBytes

```
public void getBytes(byte[] buf)
```

<!--   -->
        - #### getBytes

```
public void getBytes(ByteBuffer bBuf)
```

<!--   -->
        - #### getUTF8

```
public String getUTF8()
               throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_PrefixByteBuffer)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_OKResponse "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_Response "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_PrefixByteBuffer)
- [No Frames](/39220-io/com_jbase_framework_io_PrefixByteBuffer)


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
