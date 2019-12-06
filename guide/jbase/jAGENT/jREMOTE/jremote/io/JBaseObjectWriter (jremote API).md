# JBaseObjectWriter (jremote API)

**Created At:** 9/25/2017 11:51:39 AM  
**Updated At:** 12/24/2018 8:43:31 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JBaseObjectWriter (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":6,"i1":6,"i2":6,"i3":6,"i4":6,"i5":6,"i6":6};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Interface JBaseObjectWriter

<dl><dt>All Known Implementing Classes:</dt><dd><a href="com_jbase_jremote_io_abstractjbaseobjectwriter" title="class in com.jbase.jremote.io">AbstractJBaseObjectWriter</a>, <a href="com_jbase_jremote_io_iojbaseobjectwriter" title="class in com.jbase.jremote.io">IOJBaseObjectWriter</a>, <a href="com_jbase_jremote_io_niojbaseobjectwriter" title="class in com.jbase.jremote.io">NIOJBaseObjectWriter</a></dd></dl>
* * *


```
public interface JBaseObjectWriter
```

Serializes objects to jBASE JDBC format.
<dl><dt><br></dt></dl>

<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `close()` <br> |
| `void`<br> | `writeInt(int i)` <br> |
| `void`<br> | `writeObject(byte[] o)` <br> |
| `void`<br> | `writeObject(IByteObject o)` <br> |
| `void`<br> | `writeObject(JBaseSerializable o)` <br> |
| `void`<br> | `writeObject(String o)` <br> |
| `void`<br> | `writeRootObject(JBaseSerializable o)` <br> |

<!--   -->

### Method Detail
<!--   -->
#### writeInt

```
void writeInt(int i)
       throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### writeObject

```
void writeObject(JBaseSerializable o)
          throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### writeObject

```
void writeObject(String o)
          throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### writeObject

```
void writeObject(byte[] o)
          throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### writeObject

```
void writeObject(IByteObject o)
          throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### writeRootObject

```
void writeRootObject(JBaseSerializable o)
              throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### close

```
void close()
    throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)
