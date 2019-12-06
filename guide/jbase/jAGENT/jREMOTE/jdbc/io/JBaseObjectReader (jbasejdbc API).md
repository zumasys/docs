# JBaseObjectReader (jbasejdbc API)

**Created At:** 9/25/2017 10:52:47 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JBaseObjectReader (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":6,"i1":6,"i2":6,"i3":6,"i4":6,"i5":6,"i6":6,"i7":6};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript style=""><div>JavaScript is disabled on your browser</div></noscript>


# Interface JBaseObjectReader

<dl><dt>All Known Implementing Classes:</dt><dd><a href="../../../../com/jbase/jdbc/io/Abstract/39232-io/com_jbase_jdbc_io_JBaseObjectReader" title="class in com.jbase.jdbc.io">AbstractJBaseObjectReader</a>, <a href="../../../../com/jbase/jdbc/io/IO/39232-io/com_jbase_jdbc_io_JBaseObjectReader" title="class in com.jbase.jdbc.io">IOJBaseObjectReader</a>, <a href="../../../../com/jbase/jdbc/io/NIO/39232-io/com_jbase_jdbc_io_JBaseObjectReader" title="class in com.jbase.jdbc.io">NIOJBaseObjectReader</a></dd></dl>
```
public interface JBaseObjectReader
```

Deserializes objects sent from the jsqld server. Clients of classes implementing this interface use readObject method to read deserialized objects. This interface is simillar to java.io.ObjectInputStream. It does not extend java.io.ObjectInputStream because that would require handling of the original Java'a serialization protocol on the jsqld server.

<!-- ========== METHOD SUMMARY =========== -->

<!--   -->

# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> |  Description<br> |
| --- | --- | --- |
| <br>void<br> | <br>close()<br> | <br> |
| <br>byte[]<br> | <br>readBytes()<br> | <br> |
| <br>int<br> | <br>readInt()<br> | <br>Reads a 32 bits integer from the underlying InputStream.<br> |
| <br>[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")<br> | <br>readObject()<br> | <br>Reads/deserializes next object.<br> |
| <br>[IByteObject](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io")<br> | <br>readObject([IByteObject](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io") o)<br> | <br>Reads/deserializes next byte object, a new IByteObject should be created and returned if a null argument is passed in.<br><br> |
| <br>[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")<br> | <br>readObject([JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io") o)<br> | Reads/deserializes next object, a JBaseSerializable object should be created and returned if a null argument is passed in.<br> |
| <br>[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")<br> | <br>readRootObject()<br> | <br>Deserializes a root object.<br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>readString()<br> | <br>Reads a java.lang.String.<br> |

<!-- ============ METHOD DETAIL ========== -->

<!--   -->

# Method Detail
<!--   -->
#### **readObject**

```
Object readObject()
           throws IOException, ClassNotFoundException
```



Reads/deserializes next object. Client should use Java safe cast to cast the object to an expected type.
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>



<!--   -->


#### **readObject**

```
JBaseSerializable readObject(JBaseSerializable o)
                      throws IOException, ClassNotFoundException
```



Reads/deserializes next object, a JBaseSerializable object should be created and returned if a null argument is passed in.
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

<!--   -->


#### **readObject**

```
IByteObject readObject(IByteObject o)
                throws IOException
```



Reads/deserializes next byte object, a new IByteObject should be created and returned if a null argument is passed in.
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **readInt**

```
int readInt()
     throws IOException
```



Reads a 32 bits integer from the underlying InputStream.
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **readString**

```
String readString()
           throws IOException
```



Reads a java.lang.String. This method will deserialize and convert to String a JDynArray (a variable of type CVar serialized on the server). It will throw an exception if the object coming from the server is of any other type.
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **readBytes**

```
byte[] readBytes()
          throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **readRootObject**

```
JBaseSerializable readRootObject()
                          throws IOException, ClassNotFoundException
```



Deserializes a root object. This method must not be used by implementors of JBaseSerializable (in readObject).
<dl><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">an instance of JBaseSerializable</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

<!--   -->


#### **close**

```
void close()
    throws IOException
```
<dl><dt style="margin-left: 40px;"><br><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
