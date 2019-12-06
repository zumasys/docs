# JBaseObjectReader (framework   API)

**Created At:** 9/25/2017 10:31:06 AM  
**Updated At:** 2/15/2018 8:02:36 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JBaseObjectReader (framework   API)";
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
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_JBaseObjectReader)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_JbaseMsg "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_JBaseObjectWriter "interface in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_JBaseObjectReader)
- [No Frames](/39220-io/com_jbase_framework_io_JBaseObjectReader)


- [All Classes](../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_top");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ========= END OF TOP NAVBAR ========= --><!-- ======== START OF CLASS DATA ======== -->
com.jbase.framework.io

## Interface JBaseObjectReader

- <dl><dt>All Known Implementing Classes:</dt>
<dd>
<a href="../../../../com/jbase/framework/io/Abstract/39220-io/com_jbase_framework_io_JBaseObjectReader" title="class in com.jbase.framework.io">AbstractJBaseObjectReader</a>, <a href="../../../../com/jbase/framework/io/IO/39220-io/com_jbase_framework_io_JBaseObjectReader" title="class in com.jbase.framework.io">IOJBaseObjectReader</a>, <a href="../../../../com/jbase/framework/io/NIO/39220-io/com_jbase_framework_io_JBaseObjectReader" title="class in com.jbase.framework.io">NIOJBaseObjectReader</a>
</dd></dl>
* * *


```
public interface JBaseObjectReader
```

Deserializes objects sent from the jsqld server.<br><br> Clients of classes implementing this interface use readObject method<br> to read deserialized objects.<br><br> This interface is simillar to java.io.ObjectInputStream.<br> It does not extend java.io.ObjectInputStream because that would require<br> handling of the original Java'a serialization protocol on the jsqld server.
<dl><dt><span class="simpleTagLabel">Author:</span></dt>
<dd>Peter Kuchta</dd></dl>

- <!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()`  |
| `byte[]` | `readBytes()`  |
| `int` | `readInt()`<br>Reads a 32 bits integer from the underlying InputStream.<br> |
| `Object` | `readObject()`<br>Reads/deserializes next object.<br> |
| `IByteObject` | `readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned<br> if a null argument is passed in.<br> |
| `JBaseSerializable` | `readObject(JBaseSerializable o)`<br>Reads/deserializes next object, a JBaseSerializable object should be created and returned<br> if a null argument is passed in.<br> |
| `JBaseSerializable` | `readRootObject()`<br>Deserializes a root object.<br> |
| `String` | `readString()`<br>Reads a java.lang.String.<br> |

- <!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### readObject

```
Object readObject()
           throws IOException,
                  ClassNotFoundException
```

Reads/deserializes next object.<br> Client should use Java safe cast to cast the object to an expected type.
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

<!--   -->
        - #### readObject

```
JBaseSerializable readObject(JBaseSerializable o)
                      throws IOException,
                             ClassNotFoundException
```

Reads/deserializes next object, a JBaseSerializable object should be created and returned<br> if a null argument is passed in.
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

<!--   -->
        - #### readObject

```
IByteObject readObject(IByteObject o)
                throws IOException
```

Reads/deserializes next byte object, a new IByteObject should be created and returned<br> if a null argument is passed in.
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### readInt

```
int readInt()
     throws IOException
```

Reads a 32 bits integer from the underlying InputStream.
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### readString

```
String readString()
           throws IOException
```

Reads a java.lang.String. This method will deserialize and convert to String a JDynArray<br> (a variable of type CVar serialized on the server).<br> It will throw an exception if the object coming from the server is of any other type.
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### readBytes

```
byte[] readBytes()
          throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### readRootObject

```
JBaseSerializable readRootObject()
                          throws IOException,
                                 ClassNotFoundException
```

Deserializes a root object. This method must not be used by implementors of JBaseSerializable<br> (in readObject).
<dl><dt><span class="returnLabel">Returns:</span></dt>
<dd>an instance of JBaseSerializable</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

<!--   -->
        - #### close

```
void close()
    throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_JBaseObjectReader)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_JbaseMsg "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_JBaseObjectWriter "interface in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_JBaseObjectReader)
- [No Frames](/39220-io/com_jbase_framework_io_JBaseObjectReader)


- [All Classes](../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_bottom");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ======== END OF BOTTOM NAVBAR ======= -->
<small>			<center>			<i>Copyright © 2017 jBASE, Inc.. All Rights Reserved.</i>		</center></small>
