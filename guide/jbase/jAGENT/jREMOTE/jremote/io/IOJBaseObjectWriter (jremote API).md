# IOJBaseObjectWriter (jremote API)

**Created At:** 9/25/2017 11:51:19 AM  
**Updated At:** 12/24/2018 8:32:12 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="IOJBaseObjectWriter (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class IOJBaseObjectWriter

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseobjectwriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></dd></dl>
* * *


```
public class IOJBaseObjectWriter
extends AbstractJBaseObjectWriter
```

jBase object writer based on the DataOutputStream.

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `IOJBaseObjectWriter(OutputStream os)` <br> |
| `IOJBaseObjectWriter(OutputStream os, boolean compressed, int compressionThreshold)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `close()` <br> |
| `protected void`<br> | `flush()` <br> |
| `protected void`<br> | `outByte(byte[] b)` <br> |
| `protected void`<br> | `outByte(int b)` <br> |
| `protected void`<br> | `outInt(int i)` <br> |
| `protected void`<br> | `outUTF(String s)`<br>Write a UTF8 string.<br> |


- <!--   -->Methods inherited from class com.jbase.jremote.io.AbstractJBaseObjectWriter
    - `writeInt, writeJBaseSerializableObject, writeObject, writeObject, writeObject, writeObject, writeRootObject`
- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### IOJBaseObjectWriter

```
public IOJBaseObjectWriter(OutputStream os)
```
<!--   -->
#### 


#### IOJBaseObjectWriter

```
public IOJBaseObjectWriter(OutputStream os,
                           boolean compressed,
                           int compressionThreshold)
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
                throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter#outByte-byte%3AA-">outByte</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter" title="class in com.jbase.jremote.io">AbstractJBaseObjectWriter</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### outByte

```
protected void outByte(int b)
                throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter#outByte-int-">outByte</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter" title="class in com.jbase.jremote.io">AbstractJBaseObjectWriter</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### outInt

```
protected void outInt(int i)
               throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter#outInt-int-">outInt</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter" title="class in com.jbase.jremote.io">AbstractJBaseObjectWriter</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### outUTF

```
protected void outUTF(String s)
               throws IOException
```

Write a UTF8 string. This could be made more efficient by implementing our own UTF8 encoder (or using the DataOutputStream) instead of duplicating the string.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter#outUTF-java.lang.String-">outUTF</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjbaseobjectwriter" title="class in com.jbase.jremote.io">AbstractJBaseObjectWriter</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->




Back to [jREMOTE API](com_jbase_jremote_package-summary)


