# AbstractJBaseObjectReader (jremote API)

**Created At:** 9/25/2017 11:40:43 AM  
**Updated At:** 12/24/2018 8:13:59 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="AbstractJBaseObjectReader (jremote   API)";
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
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class AbstractJBaseObjectReader

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></dd></dl><dl><dt>Direct Known Subclasses:</dt><dd><a href="/39250-io/com_jbase_jremote_io_iojbaseobjectreader" title="class in com.jbase.jremote.io">IOJBaseObjectReader</a>, <a href="/39250-io/com_jbase_jremote_io_niojbaseobjectreader" title="class in com.jbase.jremote.io">NIOJBaseObjectReader</a></dd></dl>
* * *


```
public abstract class AbstractJBaseObjectReader
extends Object
implements JBaseObjectReader
```

Deserializes JBaseSerializable objects sent from the jbase\_agent server, or any other source of serialized JCF objects. The clients of the class use readRootObject method to read deserialized JBaseSerializable objects, @see JBaseSerializable. Application classes implementing JBaseSerializable use JBaseObjectReader's methods readObject, readInt, readString, readBytes, etc., in their readFrom method. Application classes must not use readRootObject in readFrom method. Interface of this class is simillar to the one of java.io.ObjectInputStream. It does not extend java.io.ObjectInputStream because that would require handling of the original Java'a serialization protocol on the jsqld server. Concrete classes extending AbstractJBaseObjectReader should implement method createObject,
<dl><dt><br></dt><dt><br></dt></dl>

<!--   -->

### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `protected static Logger`<br> | `log` <br> |




<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `AbstractJBaseObjectReader()` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `protected int`<br> | `bufferedRead()` <br> |
| `protected ByteBuffer`<br> | `checkBuffer(ByteBuffer bBuf, int newDataLength)` <br> |
| `abstract void`<br> | `close()` <br> |
| `protected abstract byte`<br> | `getByte()` <br> |
| `protected abstract int`<br> | `getBytes(byte[] buf)` <br> |
| `protected abstract int`<br> | `getBytes(ByteBuffer bBuf)` <br> |
| `protected abstract int`<br> | `getInt()` <br> |
| `protected abstract ObjectFactory`<br> | `getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders.<br> |
| `protected abstract int`<br> | `inBytes(int numberOfBytesToRead)` <br> |
| `protected IByteObject`<br> | `readByteObject(char code, IByteObject o)` <br> |
| `byte[]`<br> | `readBytes()` <br> |
| `int`<br> | `readInt()`<br>Reads a 32 bits integer from the underlying InputStream.<br> |
| `protected JBaseSerializable`<br> | `readJBaseSerializableObject(char code, JBaseSerializable o)` <br> |
| `Object`<br> | `readObject()`<br>Deserializes next object from the underlying InputStream.<br> |
| `IByteObject`<br> | `readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned if a null argument is passed in.<br> |
| `JBaseSerializable`<br> | `readObject(JBaseSerializable o)`<br>Reads/deserializes next object, the ObjectFactory will be used to create a JBaseSerializable object if a null argument is passed in.<br> |
| `JBaseSerializable`<br> | `readRootObject()`<br>Deserializes a root object.<br> |
| `String`<br> | `readString()`<br>Reads a java.lang.String.<br> |
| `protected abstract String`<br> | `readUTF()` <br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Field Detail
<!--   -->
#### log

```
protected static final Logger log
```
<!-- ========= CONSTRUCTOR DETAIL ======== -->
<!--   -->

### 


### Constructor Detail
<!--   -->
#### AbstractJBaseObjectReader

```
public AbstractJBaseObjectReader()
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### inBytes

```
protected abstract int inBytes(int numberOfBytesToRead)
                        throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### getByte

```
protected abstract byte getByte()
                         throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### getInt

```
protected abstract int getInt()
                       throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### getBytes

```
protected abstract int getBytes(byte[] buf)
                         throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### getBytes

```
protected abstract int getBytes(ByteBuffer bBuf)
                         throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### readUTF

```
protected abstract String readUTF()
                           throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### close

```
public abstract void close()
                    throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader#close--">close</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### readObject

```
public Object readObject()
                  throws IOException,
                         ClassNotFoundException
```

Deserializes next object from the underlying InputStream. Client should use Java safe cast to cast the object to an expected type.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>readObject</code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>IOException</code></dd><dd style="margin-left: 20px;"><code>ClassNotFoundException</code></dd></dl><!--   -->
#### 


#### readObject

```
public JBaseSerializable readObject(JBaseSerializable o)
                             throws IOException,
                                    ClassNotFoundException
```

Reads/deserializes next object, the ObjectFactory will be used to create a JBaseSerializable object if a null argument is passed in.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>readObject</code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>IOException</code></dd><dd style="margin-left: 20px;"><code>ClassNotFoundException</code></dd></dl><!--   -->
#### 


#### readObject

```
public IByteObject readObject(IByteObject o)
                       throws IOException
```

Reads/deserializes next byte object, a new ByteObject will be created and returned if a null argument is passed in.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>readObject</code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>IOException</code></dd></dl><!--   -->
#### 


#### readByteObject

```
protected IByteObject readByteObject(char code,
                                     IByteObject o)
                              throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>IOException</code></dd></dl><!--   -->
#### 


#### checkBuffer

```
protected ByteBuffer checkBuffer(ByteBuffer bBuf,
                                 int newDataLength)
```
<!--   -->
#### 


#### readJBaseSerializableObject

```
protected JBaseSerializable readJBaseSerializableObject(char code,
                                                        JBaseSerializable o)
                                                 throws IOException,
                                                        ClassNotFoundException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>IOException</code></dd><dd style="margin-left: 20px;"><code>ClassNotFoundException</code></dd></dl><!--   -->
#### 


#### getObjectFactory

```
protected abstract ObjectFactory getObjectFactory()
                                           throws UnknownTypeException
```

This method must be implemented by concrete ObjectReaders.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">an instance of a class implementing JBaseSerializable</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>UnknownTypeException</code></dd></dl><!--   -->
#### 


#### readInt

```
public int readInt()
            throws IOException
```

Reads a 32 bits integer from the underlying InputStream.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader#readInt--">readInt</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### readBytes

```
public byte[] readBytes()
                 throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader#readBytes--">readBytes</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### readString

```
public String readString()
                  throws IOException
```

Reads a java.lang.String. This method will deserialize and convert to String a JDynArray (a variable of type CVar serialized on the server). It will throw an exception if the object coming from the server is of any other type.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader#readString--">readString</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### 


#### readRootObject

```
public JBaseSerializable readRootObject()
                                 throws IOException,
                                        ClassNotFoundException
```

Description copied from interface: `JBaseObjectReader`

Deserializes a root object. This method must not be used by implementor of JBaseSerializable (in readObject).
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader#readRootObject--">readRootObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">an instance of JBaseSerializable</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl><!--   -->
#### 


#### bufferedRead

```
protected int bufferedRead()
                    throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)
