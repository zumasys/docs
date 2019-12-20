# AbstractJBaseObjectReader (jbasejdbc   API)

**Created At:** 9/25/2017 10:43:02 AM  
**Updated At:** 2/15/2018 8:02:40 AM  
**Original Doc:** [com_jbase_jdbc_io_AbstractJBaseObjectReader](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="AbstractJBaseObjectReader (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":6,"i3":6,"i4":6,"i5":6,"i6":6,"i7":6,"i8":6,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

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


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

com.jbase.jdbc.io

## Class AbstractJBaseObjectReader

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.io.AbstractJBaseObjectReader


- All Implemented Interfaces:[JBaseObjectReader](/39232-io/com_jbase_jdbc_io_jbaseobjectreader "interface in com.jbase.jdbc.io")Direct Known Subclasses:[IOJBaseObjectReader](/39232-io/com_jbase_jdbc_io_IOJBaseObjectReader "class in com.jbase.jdbc.io"), [NIOJBaseObjectReader](/39232-io/com_jbase_jdbc_io_niojbaseobjectreader "class in com.jbase.jdbc.io")
* * *


```
public abstract class AbstractJBaseObjectReader
extends Object
implements JBaseObjectReader
```

Deserializes JBaseSerializable objects sent from the jbase\_agent server,<br> or any other source of serialized JCF objects.<br><br> The clients of the class use readRootObject method to read deserialized<br> JBaseSerializable objects, @see JBaseSerializable.<br><br> Application classes implementing JBaseSerializable use JBaseObjectReader's methods<br> readObject, readInt, readString, readBytes, etc., in their readFrom method.<br> Application classes must not use readRootObject in readFrom method.<br><br> Interface of this class is simillar to the one of java.io.ObjectInputStream.<br> It does not extend java.io.ObjectInputStream because that would require<br> handling of the original Java'a serialization protocol on the jsqld server.<br><br> Concrete classes extending AbstractJBaseObjectReader should implement method createObject,
Author:Peter KuchtaSee Also:[`and NIOJBaseObjectReader.`](/39232-io/com_jbase_jdbc_io_IOJBaseObjectReader "class in com.jbase.jdbc.io")

- - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `protected static Logger` | `log`  |


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `AbstractJBaseObjectReader()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Abstract Methods](javascript:show%284%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
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


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Field Detail

        - #### log

```
protected static final Logger log
```


    - ### Constructor Detail

        - #### AbstractJBaseObjectReader

```
public AbstractJBaseObjectReader()
```


    - ### Method Detail

        - #### inBytes

```
protected abstract int inBytes(int numberOfBytesToRead)
                        throws IOException
```
Throws:`IOException`


        - #### getByte

```
protected abstract byte getByte()
                         throws IOException
```
Throws:`IOException`


        - #### getInt

```
protected abstract int getInt()
                       throws IOException
```
Throws:`IOException`


        - #### getBytes

```
protected abstract int getBytes(byte[] buf)
                         throws IOException
```
Throws:`IOException`


        - #### getBytes

```
protected abstract int getBytes(ByteBuffer bBuf)
                         throws IOException
```
Throws:`IOException`


        - #### readUTF

```
protected abstract String readUTF()
                           throws IOException
```
Throws:`IOException`


        - #### close

```
public abstract void close()
                    throws IOException
```
Specified by:`close` in interface `JBaseObjectReader`Throws:`IOException`


        - #### readObject

```
public Object readObject()
                  throws IOException,
                         ClassNotFoundException
```

Deserializes next object from the underlying InputStream.<br> Client should use Java safe cast to cast the object to an expected type.
Specified by:`readObject` in interface `JBaseObjectReader`Throws:`IOException``ClassNotFoundException`


        - #### readObject

```
public JBaseSerializable readObject(JBaseSerializable o)
                             throws IOException,
                                    ClassNotFoundException
```

Reads/deserializes next object, the ObjectFactory will be used to create a<br> JBaseSerializable object if a null argument is passed in.
Specified by:`readObject` in interface `JBaseObjectReader`Throws:`IOException``ClassNotFoundException`


        - #### readObject

```
public IByteObject readObject(IByteObject o)
                       throws IOException
```

Reads/deserializes next byte object, a new ByteObject will be created and returned<br> if a null argument is passed in.
Specified by:`readObject` in interface `JBaseObjectReader`Throws:`IOException`


        - #### readByteObject

```
protected IByteObject readByteObject(char code,
                                     IByteObject o)
                              throws IOException
```
Throws:`IOException`


        - #### checkBuffer

```
protected ByteBuffer checkBuffer(ByteBuffer bBuf,
                                 int newDataLength)
```


        - #### readJBaseSerializableObject

```
protected JBaseSerializable readJBaseSerializableObject(char code,
                                                        JBaseSerializable o)
                                                 throws IOException,
                                                        ClassNotFoundException
```
Throws:`IOException``ClassNotFoundException`


        - #### getObjectFactory

```
protected abstract ObjectFactory getObjectFactory()
                                           throws UnknownTypeException
```

This method must be implemented by concrete ObjectReaders.
Returns:an instance of a class implementing JBaseSerializableThrows:`UnknownTypeException`


        - #### readInt

```
public int readInt()
            throws IOException
```

Reads a 32 bits integer from the underlying InputStream.
Specified by:`readInt` in interface `JBaseObjectReader`Throws:`IOException`


        - #### readBytes

```
public byte[] readBytes()
                 throws IOException
```
Specified by:`readBytes` in interface `JBaseObjectReader`Throws:`IOException`


        - #### readString

```
public String readString()
                  throws IOException
```

Reads a java.lang.String. This method will deserialize and convert to String a JDynArray<br> (a variable of type CVar serialized on the server).<br> It will throw an exception if the object coming from the server is of any other type.
Specified by:`readString` in interface `JBaseObjectReader`Throws:`IOException`


        - #### readRootObject

```
public JBaseSerializable readRootObject()
                                 throws IOException,
                                        ClassNotFoundException
```

Description copied from interface: `JBaseObjectReader`

Deserializes a root object. This method must not be used by implementors of JBaseSerializable<br> (in readObject).
Specified by:`readRootObject` in interface `JBaseObjectReader`Returns:an instance of JBaseSerializableThrows:`IOException``ClassNotFoundException`


        - #### bufferedRead

```
protected int bufferedRead()
                    throws IOException
```
Throws:`IOException`

Skip navigation links

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


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
