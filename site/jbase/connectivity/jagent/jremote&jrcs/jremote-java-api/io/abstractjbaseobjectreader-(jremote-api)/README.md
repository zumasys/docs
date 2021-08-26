# AbstractJBaseObjectReader (jremote API)

<PageHeader />

## Class AbstractJBaseObjectReader

All Implemented Interfaces:[JBaseObjectReader](./../jbaseobjectreader-(jremote-api) "interface in com.jbase.jremote.io")  
Direct Known Subclasses:[IOJBaseObjectReader](./../iojbaseobjectreader-(jremote-api) "class in com.jbase.jremote.io"), [NIOJBaseObjectReader](./../niojbaseobjectreader-(jremote-api) "class in com.jbase.jremote.io")
* * *

```java
public abstract class AbstractJBaseObjectReader
extends Object
implements JBaseObjectReader
```

Deserializes JBaseSerializable objects sent from the jbase\_agent server, or any other source of serialized JCF objects. The clients of the class use readRootObject method to read deserialized JBaseSerializable objects, @see JBaseSerializable. Application classes implementing JBaseSerializable use JBaseObjectReader's methods readObject, readInt, readString, readBytes, etc., in their readFrom method. Application classes must not use readRootObject in readFrom method. Interface of this class is simillar to the one of java.io.ObjectInputStream. It does not extend java.io.ObjectInputStream because that would require handling of the original Java'a serialization protocol on the jsqld server. Concrete classes extending AbstractJBaseObjectReader should implement method createObject,

### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| `protected static Logger` | `log`  |

### Constructor Summary

| Constructor and Description |
| --- |
| `AbstractJBaseObjectReader()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `protected int` | `bufferedRead()`  |
| `protected ByteBuffer` | `checkBuffer(ByteBuffer bBuf, int newDataLength)`  |
| `abstract void` | `close()`  |
| `protected abstract byte` | `getByte()`  |
| `protected abstract int` | `getBytes(byte[] buf)`  |
| `protected abstract int` | `getBytes(ByteBuffer bBuf)`  |
| `protected abstract int` | `getInt()`  |
| `protected abstract ObjectFactory` | `getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders. |
| `protected abstract int` | `inBytes(int numberOfBytesToRead)`  |
| `protected IByteObject` | `readByteObject(char code, IByteObject o)`  |
| `byte[]` | `readBytes()`  |
| `int` | `readInt()`<br>Reads a 32 bits integer from the underlying InputStream. |
| `protected JBaseSerializable` | `readJBaseSerializableObject(char code, JBaseSerializable o)`  |
| `Object` | `readObject()`<br>Deserializes next object from the underlying InputStream. |
| `IByteObject` | `readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned if a null argument is passed in. |
| `JBaseSerializable` | `readObject(JBaseSerializable o)`<br>Reads/deserializes next object, the ObjectFactory will be used to create a JBaseSerializable object if a null argument is passed in. |
| `JBaseSerializable` | `readRootObject()`<br>Deserializes a root object. |
| `String` | `readString()`<br>Reads a java.lang.String. |
| `protected abstract String` | `readUTF()`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### log

```
protected static final Logger log
```

### Constructor Detail

#### AbstractJBaseObjectReader

```
public AbstractJBaseObjectReader()
```

### Method Detail

#### inBytes

```
protected abstract int inBytes(int numberOfBytesToRead)
                        throws IOException
```

Throws:`IOException`

#### getByte

```
protected abstract byte getByte()
                         throws IOException
```

Throws:`IOException`

#### getInt

```
protected abstract int getInt()
                       throws IOException
```

Throws:`IOException`

#### getBytes

```
protected abstract int getBytes(byte[] buf)
                         throws IOException
```

Throws:`IOException`

#### getBytes

```
protected abstract int getBytes(ByteBuffer bBuf)
                         throws IOException
```

Throws:`IOException`

#### readUTF

```
protected abstract String readUTF()
                           throws IOException
```

Throws:`IOException`

#### close

```
public abstract void close()
                    throws IOException
```

Specified by:`close` in interface `JBaseObjectReader`Throws:`IOException`

#### readObject

```
public Object readObject()
                  throws IOException,
                         ClassNotFoundException
```

Deserializes next object from the underlying InputStream. Client should use Java safe cast to cast the object to an expected type.
Specified by:`readObject` in interface `JBaseObjectReader`Throws:`IOException``ClassNotFoundException`

#### readObject

```
public JBaseSerializable readObject(JBaseSerializable o)
                             throws IOException,
                                    ClassNotFoundException
```

Reads/deserializes next object, the ObjectFactory will be used to create a JBaseSerializable object if a null argument is passed in.
Specified by:`readObject` in interface `JBaseObjectReader`Throws:`IOException``ClassNotFoundException`

#### readObject

```
public IByteObject readObject(IByteObject o)
                       throws IOException
```

Reads/deserializes next byte object, a new ByteObject will be created and returned if a null argument is passed in.
Specified by:`readObject` in interface `JBaseObjectReader`Throws:`IOException`

#### readByteObject

```
protected IByteObject readByteObject(char code,
                                     IByteObject o)
                              throws IOException
```

Throws:`IOException`

#### checkBuffer

```
protected ByteBuffer checkBuffer(ByteBuffer bBuf,
                                 int newDataLength)
```

#### readJBaseSerializableObject

```
protected JBaseSerializable readJBaseSerializableObject(char code,
                                                        JBaseSerializable o)
                                                 throws IOException,
                                                        ClassNotFoundException
```

Throws:`IOException``ClassNotFoundException`

#### getObjectFactory

```
protected abstract ObjectFactory getObjectFactory()
                                           throws UnknownTypeException
```

This method must be implemented by concrete ObjectReaders.
Returns:an instance of a class implementing JBaseSerializableThrows:`UnknownTypeException`

#### readInt

```
public int readInt()
            throws IOException
```

Reads a 32 bits integer from the underlying InputStream.
Specified by:`readInt` in interface `JBaseObjectReader`Throws:`IOException`

#### readBytes

```
public byte[] readBytes()
                 throws IOException
```

Specified by:`readBytes` in interface `JBaseObjectReader`Throws:`IOException`

#### readString

```
public String readString()
                  throws IOException
```

Reads a java.lang.String. This method will deserialize and convert to String a JDynArray (a variable of type CVar serialized on the server). It will throw an exception if the object coming from the server is of any other type.
Specified by:`readString` in interface `JBaseObjectReader`Throws:`IOException`

#### readRootObject

```
public JBaseSerializable readRootObject()
                                 throws IOException,
                                        ClassNotFoundException
```

Description copied from interface: `JBaseObjectReader`

Deserializes a root object. This method must not be used by implementor of JBaseSerializable (in readObject).
Specified by:`readRootObject` in interface `JBaseObjectReader`Returns:an instance of JBaseSerializableThrows:`IOException``ClassNotFoundException`

#### bufferedRead

```
protected int bufferedRead()
                    throws IOException
```

Throws:`IOException`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
