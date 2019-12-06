# AbstractJBaseObjectReader (jbasejdbc   API)

**Created At:** 9/25/2017 10:43:02 AM  
**Updated At:** 2/15/2018 8:02:40 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="AbstractJBaseObjectReader (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":6,"i3":6,"i4":6,"i5":6,"i6":6,"i7":6,"i8":6,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":6};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- Class
- [Use](/39235-class-use/com_jbase_jdbc_io_class-use_AbstractJBaseObjectReader)
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- Prev Class
- [Next Class](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter "class in com.jbase.jdbc.io")


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader)
- [No Frames](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader)


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
com.jbase.jdbc.io

## Class AbstractJBaseObjectReader

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.io.AbstractJBaseObjectReader


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader" title="interface in com.jbase.jdbc.io">JBaseObjectReader</a></dd></dl><dl><dt>Direct Known Subclasses:</dt>
<dd>
<a href="/39232-io/com_jbase_jdbc_io_IOJBaseObjectReader" title="class in com.jbase.jdbc.io">IOJBaseObjectReader</a>, <a href="/39232-io/com_jbase_jdbc_io_niojbaseobjectreader" title="class in com.jbase.jdbc.io">NIOJBaseObjectReader</a>
</dd></dl>
* * *


```
public abstract class AbstractJBaseObjectReader
extends Object
implements JBaseObjectReader
```

Deserializes JBaseSerializable objects sent from the jbase\_agent server,<br> or any other source of serialized JCF objects.<br><br> The clients of the class use readRootObject method to read deserialized<br> JBaseSerializable objects, @see JBaseSerializable.<br><br> Application classes implementing JBaseSerializable use JBaseObjectReader's methods<br> readObject, readInt, readString, readBytes, etc., in their readFrom method.<br> Application classes must not use readRootObject in readFrom method.<br><br> Interface of this class is simillar to the one of java.io.ObjectInputStream.<br> It does not extend java.io.ObjectInputStream because that would require<br> handling of the original Java'a serialization protocol on the jsqld server.<br><br> Concrete classes extending AbstractJBaseObjectReader should implement method createObject,
<dl><dt><span class="simpleTagLabel">Author:</span></dt>
<dd>Peter Kuchta</dd>
<dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="/39232-io/com_jbase_jdbc_io_IOJBaseObjectReader" title="class in com.jbase.jdbc.io"><code>and NIOJBaseObjectReader.</code></a></dd></dl>

- <!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary


<caption><span>Fields</span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `protected static Logger` | `log`  |

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `AbstractJBaseObjectReader()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected int` | `bufferedRead()`  |
| `protected ByteBuffer` | `checkBuffer(ByteBuffer bBuf,<br>           int newDataLength)`  |
| `abstract void` | `close()`  |
| `protected abstract byte` | `getByte()`  |
| `protected abstract int` | `getBytes(byte[] buf)`  |
| `protected abstract int` | `getBytes(ByteBuffer bBuf)`  |
| `protected abstract int` | `getInt()`  |
| `protected abstract ObjectFactory` | `getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders.<br> |
| `protected abstract int` | `inBytes(int numberOfBytesToRead)`  |
| `protected IByteObject` | `readByteObject(char code,<br>              IByteObject o)`  |
| `byte[]` | `readBytes()`  |
| `int` | `readInt()`<br>Reads a 32 bits integer from the underlying InputStream.<br> |
| `protected JBaseSerializable` | `readJBaseSerializableObject(char code,<br>                           JBaseSerializable o)`  |
| `Object` | `readObject()`<br>Deserializes next object from the underlying InputStream.<br> |
| `IByteObject` | `readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned<br> if a null argument is passed in.<br> |
| `JBaseSerializable` | `readObject(JBaseSerializable o)`<br>Reads/deserializes next object, the ObjectFactory will be used to create a<br> JBaseSerializable object if a null argument is passed in.<br> |
| `JBaseSerializable` | `readRootObject()`<br>Deserializes a root object.<br> |
| `String` | `readString()`<br>Reads a java.lang.String.<br> |
| `protected abstract String` | `readUTF()`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ============ FIELD DETAIL =========== -->
    - <!--   -->
### Field Detail
<!--   -->
        - #### log

```
protected static final Logger log
```

<!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### AbstractJBaseObjectReader

```
public AbstractJBaseObjectReader()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### inBytes

```
protected abstract int inBytes(int numberOfBytesToRead)
                        throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### getByte

```
protected abstract byte getByte()
                         throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### getInt

```
protected abstract int getInt()
                       throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### getBytes

```
protected abstract int getBytes(byte[] buf)
                         throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### getBytes

```
protected abstract int getBytes(ByteBuffer bBuf)
                         throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### readUTF

```
protected abstract String readUTF()
                           throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### close

```
public abstract void close()
                    throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader#close--">close</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader" title="interface in com.jbase.jdbc.io">JBaseObjectReader</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### readObject

```
public Object readObject()
                  throws IOException,
                         ClassNotFoundException
```

Deserializes next object from the underlying InputStream.<br> Client should use Java safe cast to cast the object to an expected type.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader#readObject--">readObject</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader" title="interface in com.jbase.jdbc.io">JBaseObjectReader</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

<!--   -->
        - #### readObject

```
public JBaseSerializable readObject(JBaseSerializable o)
                             throws IOException,
                                    ClassNotFoundException
```

Reads/deserializes next object, the ObjectFactory will be used to create a<br> JBaseSerializable object if a null argument is passed in.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader#readObject-com.jbase.jdbc.io.JBaseSerializable-">readObject</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader" title="interface in com.jbase.jdbc.io">JBaseObjectReader</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

<!--   -->
        - #### readObject

```
public IByteObject readObject(IByteObject o)
                       throws IOException
```

Reads/deserializes next byte object, a new ByteObject will be created and returned<br> if a null argument is passed in.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader#readObject-com.jbase.jdbc.io.IByteObject-">readObject</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader" title="interface in com.jbase.jdbc.io">JBaseObjectReader</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### readByteObject

```
protected IByteObject readByteObject(char code,
                                     IByteObject o)
                              throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### checkBuffer

```
protected ByteBuffer checkBuffer(ByteBuffer bBuf,
                                 int newDataLength)
```

<!--   -->
        - #### readJBaseSerializableObject

```
protected JBaseSerializable readJBaseSerializableObject(char code,
                                                        JBaseSerializable o)
                                                 throws IOException,
                                                        ClassNotFoundException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

<!--   -->
        - #### getObjectFactory

```
protected abstract ObjectFactory getObjectFactory()
                                           throws UnknownTypeException
```

This method must be implemented by concrete ObjectReaders.
<dl><dt><span class="returnLabel">Returns:</span></dt>
<dd>an instance of a class implementing JBaseSerializable</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="/39236-exception/com_jbase_jdbc_io_exception_UnknownTypeException" title="class in com.jbase.jdbc.io.exception">UnknownTypeException</a></code></dd></dl>

<!--   -->
        - #### readInt

```
public int readInt()
            throws IOException
```

Reads a 32 bits integer from the underlying InputStream.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader#readInt--">readInt</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader" title="interface in com.jbase.jdbc.io">JBaseObjectReader</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### readBytes

```
public byte[] readBytes()
                 throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader#readBytes--">readBytes</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader" title="interface in com.jbase.jdbc.io">JBaseObjectReader</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### readString

```
public String readString()
                  throws IOException
```

Reads a java.lang.String. This method will deserialize and convert to String a JDynArray<br> (a variable of type CVar serialized on the server).<br> It will throw an exception if the object coming from the server is of any other type.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader#readString--">readString</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader" title="interface in com.jbase.jdbc.io">JBaseObjectReader</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### readRootObject

```
public JBaseSerializable readRootObject()
                                 throws IOException,
                                        ClassNotFoundException
```

Description copied from interface: `JBaseObjectReader`

Deserializes a root object. This method must not be used by implementors of JBaseSerializable<br> (in readObject).
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader#readRootObject--">readRootObject</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader" title="interface in com.jbase.jdbc.io">JBaseObjectReader</a></code>
</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>an instance of JBaseSerializable</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

<!--   -->
        - #### bufferedRead

```
protected int bufferedRead()
                    throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- Class
- [Use](/39235-class-use/com_jbase_jdbc_io_class-use_AbstractJBaseObjectReader)
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- Prev Class
- [Next Class](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter "class in com.jbase.jdbc.io")


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader)
- [No Frames](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader)


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
