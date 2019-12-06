# IOJBaseObjectReader (framework   API)

**Created At:** 9/25/2017 10:30:46 AM  
**Updated At:** 2/15/2018 8:02:33 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="IOJBaseObjectReader (framework   API)";
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
- [Use](/39223-class-use/com_jbase_framework_io_class-use_IOJBaseObjectReader)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_IByteObject "interface in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_IOJBaseObjectWriter "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_IOJBaseObjectReader)
- [No Frames](/39220-io/com_jbase_framework_io_IOJBaseObjectReader)


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

## Class IOJBaseObjectReader

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.framework.io.AbstractJBaseObjectReader](/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader "class in com.jbase.framework.io")
    - - com.jbase.framework.io.IOJBaseObjectReader


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="/39220-io/com_jbase_framework_io_JBaseObjectReader" title="interface in com.jbase.framework.io">JBaseObjectReader</a></dd></dl>
* * *


```
public class IOJBaseObjectReader
extends AbstractJBaseObjectReader
```

jBase object reader based on the DataInputStream.
<dl><dt><span class="simpleTagLabel">Author:</span></dt>
<dd>aphethean</dd></dl>

- <!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary

        - <!--   -->
### Fields inherited from class com.jbase.framework.io.[AbstractJBaseObjectReader](/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader "class in com.jbase.framework.io")
`log`

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Modifier | Constructor and Description |
| --- | --- |
| `protected` | `IOJBaseObjectReader()`  |
| `` | `IOJBaseObjectReader(ObjectFactory factory,<br>                   byte[] b)`<br>Constructor FOR TESTING ONLY.<br> |
| `` | `IOJBaseObjectReader(ObjectFactory factory,<br>                   InputStream is)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected int` | `bufferedRead()`  |
| `void` | `close()`  |
| `protected byte` | `getByte()`  |
| `protected int` | `getBytes(byte[] buf)`  |
| `protected int` | `getBytes(ByteBuffer bBuf)`  |
| `protected int` | `getInt()`  |
| `ObjectFactory` | `getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders.<br> |
| `protected int` | `inBytes(int numberOfBytesToRead)`  |
| `protected boolean` | `isClosed()`  |
| `boolean` | `isUnpackRequired()`  |
| `protected String` | `readUTF()`  |
| `void` | `unpack()`  |


        - <!--   -->
### Methods inherited from class com.jbase.framework.io.[AbstractJBaseObjectReader](/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader "class in com.jbase.framework.io")
`checkBuffer, readByteObject, readBytes, readInt, readJBaseSerializableObject, readObject, readObject, readObject, readRootObject, readString`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### IOJBaseObjectReader

```
protected IOJBaseObjectReader()
```

<!--   -->
        - #### IOJBaseObjectReader

```
public IOJBaseObjectReader(ObjectFactory factory,
                           InputStream is)
```

<!--   -->
        - #### IOJBaseObjectReader

```
public IOJBaseObjectReader(ObjectFactory factory,
                           byte[] b)
```

Constructor FOR TESTING ONLY. Constructe the buffer and writes the info<br> passed into it. i.e. simulates this data arriving over the wire.

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
        - #### isClosed

```
protected boolean isClosed()
```

<!--   -->
        - #### bufferedRead

```
protected int bufferedRead()
                    throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader#bufferedRead--">bufferedRead</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectReader" title="class in com.jbase.framework.io">AbstractJBaseObjectReader</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### unpack

```
public void unpack()
            throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### isUnpackRequired

```
public boolean isUnpackRequired()
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
- [Use](/39223-class-use/com_jbase_framework_io_class-use_IOJBaseObjectReader)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_IByteObject "interface in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_IOJBaseObjectWriter "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_IOJBaseObjectReader)
- [No Frames](/39220-io/com_jbase_framework_io_IOJBaseObjectReader)


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
