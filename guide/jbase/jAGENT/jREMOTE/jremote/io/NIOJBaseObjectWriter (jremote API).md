# NIOJBaseObjectWriter (jremote API)

**Created At:** 9/25/2017 11:53:18 AM  
**Updated At:** 12/24/2018 6:10:13 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="NIOJBaseObjectWriter (jremote   API)";
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
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class NIOJBaseObjectWriter

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseobjectwriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></dd></dl>
* * *


```
public class NIOJBaseObjectWriter
extends AbstractJBaseObjectWriter
```

jBase object writer using the new Java IO.
<dl><dt><br></dt></dl>

<!--   -->

### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static long`<br> | `WRITE_TIMEOUT`<br>The temporary selectors write timeout.<br> |




<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `NIOJBaseObjectWriter(SocketChannel socketChannel)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `protected void`<br> | `checkBuffer(int newDataLength)` <br> |
| `void`<br> | `close()` <br> |
| `protected void`<br> | `flush()` <br> |
| `protected void`<br> | `outByte(byte[] b)` <br> |
| `protected void`<br> | `outByte(int b)` <br> |
| `protected void`<br> | `outInt(int i)` <br> |
| `protected void`<br> | `outUTF(String s)` <br> |
| `void`<br> | `setSocketChannel(SocketChannel socketChannel)` <br> |


- <!--   -->Methods inherited from class com.jbase.jremote.io.AbstractJBaseObjectWriter
    - `writeInt, writeJBaseSerializableObject, writeObject, writeObject, writeObject, writeObject, writeRootObject`
- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Field Detail
<!--   -->
#### WRITE\_TIMEOUT

```
public static final long WRITE_TIMEOUT
```

The temporary selectors write timeout. 30 seconds.
<dl><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="299736-constant-values" title="">Constant Field Values</a></dd></dl><!-- ========= CONSTRUCTOR DETAIL ======== -->
<!--   -->

### 


### Constructor Detail
<!--   -->
#### NIOJBaseObjectWriter

```
public NIOJBaseObjectWriter(SocketChannel socketChannel)
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### close

```
public void close()
           throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### flush

```
protected void flush()
              throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter#flush--">flush</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter" title="class in com.jbase.jremote.io">AbstractJBaseObjectWriter</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### outByte

```
protected void outByte(byte[] b)
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter#outByte-byte%3AA-">outByte</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter" title="class in com.jbase.jremote.io">AbstractJBaseObjectWriter</a></code></dd></dl><!--   -->
#### 


#### outByte

```
protected void outByte(int b)
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter#outByte-int-">outByte</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter" title="class in com.jbase.jremote.io">AbstractJBaseObjectWriter</a></code></dd></dl><!--   -->
#### 


#### outInt

```
protected void outInt(int i)
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter#outInt-int-">outInt</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter" title="class in com.jbase.jremote.io">AbstractJBaseObjectWriter</a></code></dd></dl><!--   -->
#### 


#### outUTF

```
protected void outUTF(String s)
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter#outUTF-java.lang.String-">outUTF</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter" title="class in com.jbase.jremote.io">AbstractJBaseObjectWriter</a></code></dd></dl><!--   -->
#### 


#### checkBuffer

```
protected void checkBuffer(int newDataLength)
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


