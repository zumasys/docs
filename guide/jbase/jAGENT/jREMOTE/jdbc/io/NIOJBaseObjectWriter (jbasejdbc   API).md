# NIOJBaseObjectWriter (jbasejdbc   API)

**Created At:** 9/25/2017 10:53:32 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="NIOJBaseObjectWriter (jbasejdbc   API)";
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
var activeTableTab = "activeTableTab";</script><noscript>&amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;gt;</noscript>


# Class NIOJBaseObjectWriter

All Implemented Interfaces:
<dd><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter" title="interface in com.jbase.jdbc.io">JBaseObjectWriter</a></dd>


```
public class NIOJBaseObjectWriter
extends AbstractJBaseObjectWriter
```

jBase object writer using the new Java IO.

<!--   -->

# Field Summary


| <br>Modifier and Type<br> | <br>Field<br> | Description<br> |
| --- | --- | --- |
| <br>`static long`<br> | <br>WRITE\_TIMEOUT<br> | <br>The temporary selectors write timeout.<br> |





<!-- ======== CONSTRUCTOR SUMMARY ======== -->
<!--   -->

# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>NIOJBaseObjectWriter([SocketChannel](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/channels/SocketChannel.html?is-external=true "class or interface in java.nio.channels") socketChannel)<br> |



<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>protected void<br> | <br>checkBuffer(int newDataLength)<br> |
| <br>void<br> | <br>close()<br> |
| <br>protected void<br> | <br>flush()<br> |
| <br>protected void<br> | <br>outByte(byte[] b)<br> |
| <br>protected void<br> | <br>outByte(int b)<br> |
| <br>protected void<br> | <br>outInt(int i)<br> |
| <br>protected void<br> | <br>outUTF([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") s)<br> |
| <br>void<br> | <br>setSocketChannel([SocketChannel](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/channels/SocketChannel.html?is-external=true "class or interface in java.nio.channels") socketChannel)<br> |


<!--   -->

## 


## Methods inherited from class com.jbase.jdbc.io.AbstractJBaseObjectWriter
`writeInt, writeJBaseSerializableObject, writeObject, writeObject, writeObject, writeObject, writeRootObject`

<!--   -->

## 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!-- ============ FIELD DETAIL =========== -->

<!--   -->

# Field Detail
<!--   -->
#### **WRITE\_TIMEOUT**

```
public static final long WRITE_TIMEOUT
```



The temporary selectors write timeout. 30 seconds.




<!-- ========= CONSTRUCTOR DETAIL ======== -->
<!--   -->

# Constructor Detail
<!--   -->
#### **NIOJBaseObjectWriter**

```
public NIOJBaseObjectWriter(SocketChannel socketChannel)
```




<!-- ============ METHOD DETAIL ========== -->
<!--   -->

# Method Detail
<!--   -->
#### **close**

```
public void close()
           throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>



<!--   -->
#### **flush**

```
protected void flush()
              throws IOException
```
<dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter#flush--">flush</a></code> in class <code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter" title="class in com.jbase.jdbc.io">AbstractJBaseObjectWriter</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><!--   -->




#### **outByte**

```
protected void outByte(byte[] b)
```


<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter#outByte-byte%3AA-">outByte</a></code> in class <code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter" title="class in com.jbase.jdbc.io">AbstractJBaseObjectWriter</a></code></dd></dl><!--   -->


#### 


#### **outByte**

```
protected void outByte(int b)
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter#outByte-int-">outByte</a></code> in class <code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter" title="class in com.jbase.jdbc.io">AbstractJBaseObjectWriter</a></code></dd></dl>

<!--   -->


#### **outInt**

```
protected void outInt(int i)
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter#outInt-int-">outInt</a></code> in class <code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter" title="class in com.jbase.jdbc.io">AbstractJBaseObjectWriter</a></code></dd></dl>

<!--   -->


#### **outUTF**

```
protected void outUTF(String s)
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter#outUTF-java.lang.String-">outUTF</a></code> in class <code><a href="/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter" title="class in com.jbase.jdbc.io">AbstractJBaseObjectWriter</a></code></dd></dl>

<!--   -->


#### **checkBuffer**

```
protected void checkBuffer(int newDataLength)
```


<!--   -->


#### **setSocketChannel**

```
public void setSocketChannel(SocketChannel socketChannel)
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
