# IOJBaseObjectReader (jremote API)

**Created At:** 9/25/2017 11:51:13 AM  
**Updated At:** 12/24/2018 8:30:46 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="IOJBaseObjectReader (jremote   API)";
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

## Class IOJBaseObjectReader

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></dd></dl>
* * *


```
public class IOJBaseObjectReader
extends AbstractJBaseObjectReader
```

jBase object reader based on the DataInputStream.
<dl><dt><br></dt></dl>

<!--   -->

### Field Summary

- <!--   -->Fields inherited from class com.jbase.jremote.io.AbstractJBaseObjectReader
    - `log`




<!--   -->

### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| `protected `<br> | `IOJBaseObjectReader()` <br> |
| ` `<br> | `IOJBaseObjectReader(ObjectFactory factory, byte[] b)`<br>Constructor FOR TESTING ONLY.<br> |
| ` `<br> | `IOJBaseObjectReader(ObjectFactory factory, InputStream is)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `protected int`<br> | `bufferedRead()` <br> |
| `void`<br> | `close()` <br> |
| `protected byte`<br> | `getByte()` <br> |
| `protected int`<br> | `getBytes(byte[] buf)` <br> |
| `protected int`<br> | `getBytes(ByteBuffer bBuf)` <br> |
| `protected int`<br> | `getInt()` <br> |
| `ObjectFactory`<br> | `getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders.<br> |
| `protected int`<br> | `inBytes(int numberOfBytesToRead)` <br> |
| `protected boolean`<br> | `isClosed()` <br> |
| `boolean`<br> | `isUnpackRequired()` <br> |
| `protected String`<br> | `readUTF()` <br> |
| `void`<br> | `unpack()` <br> |


- <!--   -->Methods inherited from class com.jbase.jremote.io.AbstractJBaseObjectReader
    - `checkBuffer, readByteObject, readBytes, readInt, readJBaseSerializableObject, readObject, readObject, readObject, readRootObject, readString`
- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### IOJBaseObjectReader

```
protected IOJBaseObjectReader()
```
<!--   -->
#### 


#### IOJBaseObjectReader

```
public IOJBaseObjectReader(ObjectFactory factory,
                           InputStream is)
```
<!--   -->
#### 


#### IOJBaseObjectReader

```
public IOJBaseObjectReader(ObjectFactory factory,
                           byte[] b)
```

Constructor FOR TESTING ONLY. Constructe the buffer and writes the info passed into it. i.e. simulates this data arriving over the wire.
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
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>close</code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>close</code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader" title="class in com.jbase.jremote.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
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


#### readUTF

```
protected String readUTF()
                  throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader#readUTF--">readUTF</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader" title="class in com.jbase.jremote.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### inBytes

```
protected int inBytes(int numberOfBytesToRead)
               throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader#inBytes-int-">inBytes</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader" title="class in com.jbase.jremote.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### isClosed

```
protected boolean isClosed()
```
<!--   -->
#### 


#### bufferedRead

```
protected int bufferedRead()
                    throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Overrides:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader#bufferedRead--">bufferedRead</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectreader" title="class in com.jbase.jremote.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### unpack

```
public void unpack()
            throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### isUnpackRequired

```
public boolean isUnpackRequired()
                         throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)
