# AbstractJBaseObjectWriter (jremote API)

**Created At:** 9/25/2017 11:40:49 AM  
**Updated At:** 4/5/2018 11:08:32 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="AbstractJBaseObjectWriter (jremote   API)";
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
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class AbstractJBaseObjectWriter

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseobjectwriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></dd></dl><dl><dt>Direct Known Subclasses:</dt><dd><a href="/39250-io/com_jbase_jremote_io_iojbaseobjectwriter" title="class in com.jbase.jremote.io">IOJBaseObjectWriter</a>, <a href="/39250-io/com_jbase_jremote_io_niojbaseobjectwriter" title="class in com.jbase.jremote.io">NIOJBaseObjectWriter</a></dd></dl>
* * *


```
public abstract class AbstractJBaseObjectWriter
extends Object
implements JBaseObjectWriter
```

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `AbstractJBaseObjectWriter()` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `protected abstract void`<br> | `flush()` <br> |
| `protected abstract void`<br> | `outByte(byte[] b)` <br> |
| `protected abstract void`<br> | `outByte(int b)` <br> |
| `protected abstract void`<br> | `outInt(int i)` <br> |
| `protected abstract void`<br> | `outUTF(String s)` <br> |
| `void`<br> | `writeInt(int i)` <br> |
| `protected void`<br> | `writeJBaseSerializableObject(JBaseSerializable o)` <br> |
| `void`<br> | `writeObject(byte[] data)` <br> |
| `void`<br> | `writeObject(IByteObject o)` <br> |
| `void`<br> | `writeObject(JBaseSerializable o)` <br> |
| `void`<br> | `writeObject(String o)` <br> |
| `void`<br> | `writeRootObject(JBaseSerializable o)` <br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- <!--   -->Methods inherited from interface com.jbase.jremote.io.JBaseObjectWriter
    - `close`

<!--   -->

### Constructor Detail
<!--   -->
#### AbstractJBaseObjectWriter

```
public AbstractJBaseObjectWriter()
```


<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### outByte

```
protected abstract void outByte(byte[] b)
                         throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### outByte

```
protected abstract void outByte(int b)
                         throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### outInt

```
protected abstract void outInt(int i)
                        throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### outUTF

```
protected abstract void outUTF(String s)
                        throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### flush

```
protected abstract void flush()
                       throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### writeInt

```
public void writeInt(int i)
              throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectwriter#writeInt-int-">writeInt</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectwriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### writeObject

```
public void writeObject(String o)
                 throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectwriter#writeObject-java.lang.String-">writeObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectwriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### writeObject

```
public void writeObject(byte[] data)
                 throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectwriter#writeObject-byte%3AA-">writeObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectwriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### writeObject

```
public void writeObject(IByteObject o)
                 throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectwriter#writeObject-com.jbase.jremote.io.IByteObject-">writeObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectwriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### writeObject

```
public void writeObject(JBaseSerializable o)
                 throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectwriter#writeObject-com.jbase.jremote.io.JBaseSerializable-">writeObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectwriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### writeJBaseSerializableObject

```
protected void writeJBaseSerializableObject(JBaseSerializable o)
                                     throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### writeRootObject

```
public void writeRootObject(JBaseSerializable o)
                     throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectwriter#writeRootObject-com.jbase.jremote.io.JBaseSerializable-">writeRootObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectwriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)


