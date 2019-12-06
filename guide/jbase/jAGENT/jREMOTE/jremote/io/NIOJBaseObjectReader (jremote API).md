# NIOJBaseObjectReader (jremote API)

**Created At:** 9/25/2017 11:53:12 AM  
**Updated At:** 12/24/2018 9:03:37 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="NIOJBaseObjectReader (jremote   API)";
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
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class NIOJBaseObjectReader

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></dd></dl>
* * *


```
public class NIOJBaseObjectReader
extends AbstractJBaseObjectReader
```

jBASE object reader based on the new Java IO.
<dl><dt><br></dt></dl>

<!--   -->

### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static long`<br> | `READ_TIMEOUT`<br>The temporary selectors read timeout.<br> |


- <!--   -->Fields inherited from class com.jbase.jremote.io.AbstractJBaseObjectReader
    - `log`




<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `NIOJBaseObjectReader(ObjectFactory factory, SocketChannel channel)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `protected void`<br> | `checkBuffer(int newDataLength)` <br> |
| `void`<br> | `close()` <br> |
| `protected int`<br> | `doRead(int numberOfBytes)`<br>Read bytes using the read a temporary Selector<br> |
| `protected byte`<br> | `getByte()` <br> |
| `protected int`<br> | `getBytes(byte[] buf)` <br> |
| `protected int`<br> | `getBytes(ByteBuffer bBuf)` <br> |
| `protected int`<br> | `getInt()` <br> |
| `ObjectFactory`<br> | `getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders.<br> |
| `protected int`<br> | `inBytes(int numberOfBytesToRead)` <br> |
| `boolean`<br> | `isClosed()` <br> |
| `protected String`<br> | `readUTF()` <br> |
| `void`<br> | `setSocketChannel(SocketChannel socketChannel)` <br> |


- <!--   -->Methods inherited from class com.jbase.jremote.io.AbstractJBaseObjectReader
    - `bufferedRead, checkBuffer, readByteObject, readBytes, readInt, readJBaseSerializableObject, readObject, readObject, readObject, readRootObject, readString`
- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Field Detail
<!--   -->
#### READ\_TIMEOUT

```
public static final long READ_TIMEOUT
```

The temporary selectors read timeout. 30 seconds.
<dl><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="299736-constant-values" title="">Constant Field Values</a></dd></dl><!-- ========= CONSTRUCTOR DETAIL ======== -->
<!--   -->

### 


### Constructor Detail
<!--   -->
#### NIOJBaseObjectReader

```
public NIOJBaseObjectReader(ObjectFactory factory,
                            SocketChannel channel)
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### getObjectFactory

```
public ObjectFactory getObjectFactory()
```

Description copied from class: `AbstractJBaseObjectReader`

This method must be implemented by concrete ObjectReaders.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader#getObjectFactory--">getObjectFactory</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader" title="class in com.jbase.jremote.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">an instance of a class implementing JBaseSerializable</dd></dl><!--   -->
#### 


#### close

```
public void close()
           throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader#close--">close</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader#close--">close</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader" title="class in com.jbase.jremote.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### getByte

```
protected byte getByte()
                throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader#getByte--">getByte</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader" title="class in com.jbase.jremote.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### getInt

```
protected int getInt()
              throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader#getInt--">getInt</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader" title="class in com.jbase.jremote.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### getBytes

```
protected int getBytes(byte[] buf)
                throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader#getBytes-byte%3AA-">getBytes</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader" title="class in com.jbase.jremote.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### getBytes

```
protected int getBytes(ByteBuffer bBuf)
                throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader#getBytes-java.nio.ByteBuffer-">getBytes</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader" title="class in com.jbase.jremote.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### inBytes

```
protected int inBytes(int numberOfBytesToRead)
               throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader#inBytes-int-">inBytes</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader" title="class in com.jbase.jremote.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### readUTF

```
protected String readUTF()
                  throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader#readUTF--">readUTF</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader" title="class in com.jbase.jremote.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### doRead

```
protected int doRead(int numberOfBytes)
              throws IOException
```

Read bytes using the read a temporary Selector
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### checkBuffer

```
protected void checkBuffer(int newDataLength)
```
<!--   -->
#### 


#### isClosed

```
public boolean isClosed()
```
<!--   -->
#### 


#### setSocketChannel

```
public void setSocketChannel(SocketChannel socketChannel)
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)
