# IOJBaseObjectReader (jremote API)

<PageHeader />

## Class IOJBaseObjectReader

All Implemented Interfaces:[JBaseObjectReader](./../jbaseobjectreader-(jremote-api) "interface in com.jbase.jremote.io")
* * *

```java
public class IOJBaseObjectReader
extends AbstractJBaseObjectReader
```

jBase object reader based on the DataInputStream.

### Field Summary

- Fields inherited from class com.jbase.jremote.io.AbstractJBaseObjectReader
  - `log`

### Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| `protected` | `IOJBaseObjectReader()`  |
| ` ` | `IOJBaseObjectReader(ObjectFactory factory, byte[] b)`<br>Constructor FOR TESTING ONLY. |
| ` ` | `IOJBaseObjectReader(ObjectFactory factory, InputStream is)` |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `protected int` | `bufferedRead()`  |
| `void` | `close()`  |
| `protected byte` | `getByte()`  |
| `protected int` | `getBytes(byte[] buf)`  |
| `protected int` | `getBytes(ByteBuffer bBuf)`  |
| `protected int` | `getInt()`  |
| `ObjectFactory` | `getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders. |
| `protected int` | `inBytes(int numberOfBytesToRead)`  |
| `protected boolean` | `isClosed()`  |
| `boolean` | `isUnpackRequired()`  |
| `protected String` | `readUTF()`  |
| `void` | `unpack()`  |

- Methods inherited from class com.jbase.jremote.io.AbstractJBaseObjectReader
  - `checkBuffer, readByteObject, readBytes, readInt, readJBaseSerializableObject, readObject, readObject, readObject, readRootObject, readString`
- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### IOJBaseObjectReader

```java
protected IOJBaseObjectReader()
```

#### IOJBaseObjectReader

```java
public IOJBaseObjectReader(ObjectFactory factory,
                           InputStream is)
```

#### IOJBaseObjectReader

```java
public IOJBaseObjectReader(ObjectFactory factory,
                           byte[] b)
```

Constructor FOR TESTING ONLY. Constructe the buffer and writes the info passed into it. i.e. simulates this data arriving over the wire.

### Method Detail

#### getObjectFactory

```java
public ObjectFactory getObjectFactory()
```

Description copied from class: `AbstractJBaseObjectReader`

This method must be implemented by concrete ObjectReaders.  
Specified by:`getObjectFactory` in class `AbstractJBaseObjectReader`  
Returns:an instance of a class implementing JBaseSerializable
java
#### close

```java
public void close()
           throws IOException
```

Specified by:`close` in interface `JBaseObjectReader`  
Specified by:`close` in class `AbstractJBaseObjectReader`  
Throws:`IOException`

#### getByte

```java
protected byte getByte()
                throws IOException
```

Specified by:`getByte` in class `AbstractJBaseObjectReader`  
Throws:`IOException`

#### getInt

```java
protected int getInt()
              throws IOException
```

Specified by:`getInt` in class `AbstractJBaseObjectReader`  
Throws:`IOException`

#### getBytes

```java
protected int getBytes(byte[] buf)
                throws IOException
```

Specified by:`getBytes` in class `AbstractJBaseObjectReader`  
Throws:`IOException`

#### getBytes

```java
protected int getBytes(ByteBuffer bBuf)
                throws IOException
```

Specified by:`getBytes` in class `AbstractJBaseObjectReader`  
Throws:`IOException`

#### readUTF

```java
protected String readUTF()
                  throws IOException
```

Specified by:`readUTF` in class `AbstractJBaseObjectReader`  
Throws:`IOException`

#### inBytes

```java
protected int inBytes(int numberOfBytesToRead)
               throws IOException
```

Specified by:`inBytes` in class `AbstractJBaseObjectReader`  
Throws:`IOException`

#### isClosed

```java
protected boolean isClosed()
```

#### bufferedRead

```java
protected int bufferedRead()
                    throws IOException
```

Overrides:`bufferedRead` in class `AbstractJBaseObjectReader`  
Throws:`IOException`

#### unpack

```java
public void unpack()
            throws IOException
```

Throws:`IOException`

#### isUnpackRequired

```java
public boolean isUnpackRequired()
                         throws IOException
```

Throws:`IOException`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
