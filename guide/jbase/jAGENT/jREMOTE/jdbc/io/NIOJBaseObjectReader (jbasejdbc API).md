# NIOJBaseObjectReader (jbasejdbc API)

**Created At:** 9/25/2017 10:53:26 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="NIOJBaseObjectReader (jbasejdbc   API)";
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
var activeTableTab = "activeTableTab";</script><noscript style=""><div>JavaScript is disabled on your browser.</div></noscript>


# Class NIOJBaseObjectReader

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader" title="interface in com.jbase.jdbc.io">JBaseObjectReader</a></dd></dl>
```
public class NIOJBaseObjectReader
extends AbstractJBaseObjectReader
```

jBase object reader based on the new Java IO.

<!--   -->

# Field Summary


| <br>Modifier and Type<br> | <br>Field<br> | Description<br> |
| --- | --- | --- |
| <br>`static long`<br> | <br>`READ_TIMEOUT`<br> | <br>``The temporary selectors read timeout.<br> |


<!--   -->

### 


## Fields inherited from class com.jbase.jdbc.io.AbstractJBaseObjectReader
`log`





<!-- ======== CONSTRUCTOR SUMMARY ======== -->
<!--   -->

# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>NIOJBaseObjectReader([ObjectFactory](/39232-io/com_jbase_jdbc_io_objectfactory "class in com.jbase.jdbc.io") factory, [SocketChannel](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/channels/SocketChannel.html?is-external=true "class or interface in java.nio.channels") channel)<br> |



<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> |  Description<br> |
| --- | --- | --- |
| <br>protected void<br> | <br>checkBuffer(int newDataLength)<br> | <br> |
| <br>void<br> | <br>close()<br> | <br> |
| <br>protected int<br> | <br>doRead(int numberOfBytes)<br> | <br>Read bytes using the read a temporary Selector<br> |
| <br>protected byte<br> | <br>getByte()<br> | <br> |
| <br>protected int<br> | <br>getBytes(byte[] buf)<br> | <br> |
| <br>protected int<br> | <br>getBytes([ByteBuffer](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/ByteBuffer.html?is-external=true "class or interface in java.nio") bBuf)<br> | <br> |
| <br>protected int<br> | <br>getInt()<br> | <br> |
| <br>[ObjectFactory](/39232-io/com_jbase_jdbc_io_objectfactory "class in com.jbase.jdbc.io")<br> | <br>getObjectFactory()<br> | <br>This method must be implemented by concrete ObjectReaders.<br> |
| <br>protected int<br> | <br>inBytes(int numberOfBytesToRead)<br> | <br> |
| <br>boolean<br> | <br>isClosed()<br> | <br> |
| <br>protected [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>readUTF()<br> | <br> |
| <br>void<br> | <br>setSocketChannel([SocketChannel](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/channels/SocketChannel.html?is-external=true "class or interface in java.nio.channels") socketChannel)<br> | <br> |


<!--   -->

### 


## Methods inherited from class com.jbase.jdbc.io.AbstractJBaseObjectReader
`bufferedRead, checkBuffer, readByteObject, readBytes, readInt, readJBaseSerializableObject, readObject, readObject, readObject, readRootObject, readString`





<!--   -->

## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!-- ============ FIELD DETAIL =========== -->

<!--   -->

# Field Detail
<!--   -->
#### **READ\_TIMEOUT**

```
public static final long READ_TIMEOUT
```



The temporary selectors read timeout. 30 seconds.
<dl><dt style="margin-left: 40px;"><br></dt></dl>

<!-- ========= CONSTRUCTOR DETAIL ======== -->
<!--   -->

# Constructor Detail
<!--   -->
#### **NIOJBaseObjectReader**

```
public NIOJBaseObjectReader(ObjectFactory factory, SocketChannel channel)
```




<!-- ============ METHOD DETAIL ========== -->
<!--   -->

# Method Detail
<!--   -->
#### **getObjectFactory**

```
public ObjectFactory getObjectFactory()
```



Description copied from class: `AbstractJBaseObjectReader`

This method must be implemented by concrete ObjectReaders.
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader#getObjectFactory--">getObjectFactory</a></code> in class <code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader" title="class in com.jbase.jdbc.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">an instance of a class implementing JBaseSerializable</dd></dl>



<!--   -->
#### **close**

```
public void close()
           throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39232-io/com_jbase_jdbc_io_JBaseObjectReader#close--">close</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader" title="interface in com.jbase.jdbc.io">JBaseObjectReader</a></code></dd><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader#close--">close</a></code> in class <code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader" title="class in com.jbase.jdbc.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **getByte**

```
protected byte getByte()
                throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader#getByte--">getByte</a></code> in class <code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader" title="class in com.jbase.jdbc.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **getInt**

```
protected int getInt()
              throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader#getInt--">getInt</a></code> in class <code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader" title="class in com.jbase.jdbc.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **getBytes**

```
protected int getBytes(byte[] buf)
                throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader#getBytes-byte%3AA-">getBytes</a></code> in class <code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader" title="class in com.jbase.jdbc.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **getBytes**

```
protected int getBytes(ByteBuffer bBuf)
                throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader#getBytes-java.nio.ByteBuffer-">getBytes</a></code> in class <code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader" title="class in com.jbase.jdbc.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **inBytes**

```
protected int inBytes(int numberOfBytesToRead)
               throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader#inBytes-int-">inBytes</a></code> in class <code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader" title="class in com.jbase.jdbc.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **readUTF**

```
protected String readUTF()
                  throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader#readUTF--">readUTF</a></code> in class <code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader" title="class in com.jbase.jdbc.io">AbstractJBaseObjectReader</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **doRead**

```
protected int doRead(int numberOfBytes)
              throws IOException
```



Read bytes using the read a temporary Selector
<dl><dt style="margin-left: 40px;"><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **checkBuffer**

```
protected void checkBuffer(int newDataLength)
```


<!--   -->


#### **isClosed**

```
public boolean isClosed()
```


<!--   -->


#### **setSocketChannel**

```
public void setSocketChannel(SocketChannel socketChannel)
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
