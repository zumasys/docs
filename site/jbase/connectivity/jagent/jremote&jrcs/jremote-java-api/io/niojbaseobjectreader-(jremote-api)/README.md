# NIOJBaseObjectReader (jremote API)

<PageHeader />

## Class NIOJBaseObjectReader

All Implemented Interfaces:[JBaseObjectReader](./../jbaseobjectreader-(jremote-api) "interface in com.jbase.jremote.io")
* * *

```java
public class NIOJBaseObjectReader
extends AbstractJBaseObjectReader
```

jBASE object reader based on the new Java IO.

### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| `static long` | `READ_TIMEOUT`<br>The temporary selectors read timeout. |

- Fields inherited from class com.jbase.jremote.io.AbstractJBaseObjectReader
  - `log`

### Constructor Summary

| Constructor and Description |
| --- |
| `NIOJBaseObjectReader(ObjectFactory factory, SocketChannel channel)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | `checkBuffer(int newDataLength)`  |
| `void` | `close()`  |
| `protected int` | `doRead(int numberOfBytes)`<br>Read bytes using the read a temporary Selector |
| `protected byte` | `getByte()`  |
| `protected int` | `getBytes(byte[] buf)`  |
| `protected int` | `getBytes(ByteBuffer bBuf)`  |
| `protected int` | `getInt()`  |
| `ObjectFactory` | `getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders. |
| `protected int` | `inBytes(int numberOfBytesToRead)`  |
| `boolean` | `isClosed()`  |
| `protected String` | `readUTF()`  |
| `void` | `setSocketChannel(SocketChannel socketChannel)`  |

- Methods inherited from class com.jbase.jremote.io.AbstractJBaseObjectReader
  - `bufferedRead, checkBuffer, readByteObject, readBytes, readInt, readJBaseSerializableObject, readObject, readObject, readObject, readRootObject, readString`
- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### READ\_TIMEOUT

```java
public static final long READ_TIMEOUT
```

The temporary selectors read timeout. 30 seconds.  
See Also:[Constant Field Values](./../../constant-field-values)

### Constructor Detail

#### NIOJBaseObjectReader

```java
public NIOJBaseObjectReader(ObjectFactory factory,
                            SocketChannel channel)
```

### Method Detail

#### getObjectFactory

```java
public ObjectFactory getObjectFactory()
```

Description copied from class: `AbstractJBaseObjectReader`

This method must be implemented by concrete ObjectReaders.  
Specified by:`getObjectFactory` in class `AbstractJBaseObjectReader`  
Returns:an instance of a class implementing JBaseSerializable

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

#### inBytes

```java
protected int inBytes(int numberOfBytesToRead)
               throws IOException
```
Specified by:`inBytes` in class `AbstractJBaseObjectReader`  
Throws:`IOException`

#### readUTF

```java
protected String readUTF()
                  throws IOException
```

Specified by:`readUTF` in class `AbstractJBaseObjectReader`  
Throws:`IOException`

#### doRead

```java
protected int doRead(int numberOfBytes)
              throws IOException
```

Read bytes using the read a temporary Selector  
Throws:`IOException`

#### checkBuffer

```java

protected void checkBuffer(int newDataLength)
```

#### isClosed

```
public boolean isClosed()
```

#### setSocketChannel

```java
public void setSocketChannel(SocketChannel socketChannel)
```

Back to [jRemote API](./../../README.md)
  
<PageFooter />
