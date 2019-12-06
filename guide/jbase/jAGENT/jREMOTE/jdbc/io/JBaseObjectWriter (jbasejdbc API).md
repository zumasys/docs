# JBaseObjectWriter (jbasejdbc API)

**Created At:** 9/25/2017 10:52:54 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JBaseObjectWriter (jbasejdbc   API)";
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
var activeTableTab = "activeTableTab";</script><noscript style=""><div>JavaScript is disabled on your browse</div></noscript>


# Interface JBaseObjectWriter

<dt>All Known Implementing Classes:</dt><dd><a href="com_jbase_jdbc_io_AbstractJBaseObjectWriter" title="class in com.jbase.jdbc.io">AbstractJBaseObjectWriter</a>, <a href="com_jbase_jdbc_io_IOJBaseObjectWriter" title="class in com.jbase.jdbc.io">IOJBaseObjectWriter</a>, <a href="com_jbase_jdbc_io_niojbaseobjectwriter" title="class in com.jbase.jdbc.io">NIOJBaseObjectWriter</a></dd>


```
public interface JBaseObjectWriter
```

Serializes objects to jBASE JDBC format.

<!-- ========== METHOD SUMMARY =========== -->

<!--   -->

# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>void<br> | <br>close()<br> |
| <br>void<br> | <br>writeInt(int i)<br> |
| <br>void<br> | <br>writeObject(byte[] o)<br> |
| <br>void<br> | <br>writeObject([IByteObject](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io") o)<br> |
| <br>void<br> | <br>writeObject([JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io") o)<br> |
| <br>void<br> | <br>writeObject([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") o)<br> |
| <br>void<br> | <br>writeRootObject([JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io") o)<br> |

<!-- ============ METHOD DETAIL ========== -->

<!--   -->

# Method Detail
<!--   -->
#### **writeInt**

```
void writeInt(int i)
       throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **writeObject**

```
void writeObject(JBaseSerializable o)
          throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **writeObject**

```
void writeObject(String o)
          throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **writeObject**

```
void writeObject(byte[] o)
          throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **writeObject**

```
void writeObject(IByteObject o)
          throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **writeRootObject**

```
void writeRootObject(JBaseSerializable o)
              throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **close**

```
void close()
    throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
