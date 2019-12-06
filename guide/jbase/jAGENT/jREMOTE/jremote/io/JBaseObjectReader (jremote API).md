# JBaseObjectReader (jremote API)

**Created At:** 9/25/2017 11:51:32 AM  
**Updated At:** 12/24/2018 8:37:10 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JBaseObjectReader (jremote   API)";
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
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Interface JBaseObjectReader

<dl><dt>All Known Implementing Classes:</dt><dd><a href="com_jbase_jremote_io_abstractjbaseobjectwriter" title="class in com.jbase.jremote.io">AbstractJBaseObjectReader</a>, <a href="com_jbase_jremote_io_iojbaseobjectreader" title="class in com.jbase.jremote.io">IOJBaseObjectReader</a>, <a href="com_jbase_jremote_io_niojbaseobjectreader" title="class in com.jbase.jremote.io">NIOJBaseObjectReader</a></dd></dl>
* * *


```
public interface JBaseObjectReader
```

Deserializes objects sent from the jsqld server. Clients of classes implementing this interface use readObject method to read deserialized objects. This interface is simillar to java.io.ObjectInputStream. It does not extend java.io.ObjectInputStream because that would require handling of the original Java'a serialization protocol on the jsqld server.
<dl><dt><br></dt></dl>

<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `close()` <br> |
| `byte[]`<br> | `readBytes()` <br> |
| `int`<br> | `readInt()`<br>Reads a 32 bits integer from the underlying InputStream.<br> |
| `Object`<br> | `readObject()`<br>Reads/deserializes next object.<br> |
| `IByteObject`<br> | `readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned if a null argument is passed in.<br> |
| `JBaseSerializable`<br> | `readObject(JBaseSerializable o)`<br>Reads/deserializes next object, a JBaseSerializable object should be created and returned if a null argument is passed in.<br> |
| `JBaseSerializable`<br> | `readRootObject()`<br>Deserializes a root object.<br> |
| `String`<br> | `readString()`<br>Reads a java.lang.String.<br> |

<!--   -->

### Method Detail
<!--   -->
#### readObject

```
Object readObject()
           throws IOException,
                  ClassNotFoundException
```

Reads/deserializes next object. Client should use Java safe cast to cast the object to an expected type.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl><!--   -->
#### 


#### readObject

```
JBaseSerializable readObject(JBaseSerializable o)
                      throws IOException,
                             ClassNotFoundException
```

Reads/deserializes next object, a JBaseSerializable object should be created and returned if a null argument is passed in.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl><!--   -->
#### 


#### readObject

```
IByteObject readObject(IByteObject o)
                throws IOException
```

Reads/deserializes next byte object, a new IByteObject should be created and returned if a null argument is passed in.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### readInt

```
int readInt()
     throws IOException
```

Reads a 32 bits integer from the underlying InputStream.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### readString

```
String readString()
           throws IOException
```

Reads a java.lang.String. This method will deserialize and convert to String a JDynArray (a variable of type CVar serialized on the server). It will throw an exception if the object coming from the server is of any other type.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### readBytes

```
byte[] readBytes()
          throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### readRootObject

```
JBaseSerializable readRootObject()
                          throws IOException,
                                 ClassNotFoundException
```

Deserializes a root object. This method must not be used by implementors of JBaseSerializable (in readObject).
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">an instance of JBaseSerializable</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl><!--   -->
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
