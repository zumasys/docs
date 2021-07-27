# NIOJBaseObjectWriter (jremote API)

<PageHeader />

## Class NIOJBaseObjectWriter

All Implemented Interfaces:[JBaseObjectWriter](./../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io")
* * *

```java
public class NIOJBaseObjectWriter
extends AbstractJBaseObjectWriter
```

jBase object writer using the new Java IO.

### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| `static long` | `WRITE_TIMEOUT`<br>The temporary selectors write timeout. |

### Constructor Summary

| Constructor and Description |
| --- |
| `NIOJBaseObjectWriter(SocketChannel socketChannel)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | `checkBuffer(int newDataLength)`  |
| `void` | `close()`  |
| `protected void` | `flush()`  |
| `protected void` | `outByte(byte[] b)`  |
| `protected void` | `outByte(int b)`  |
| `protected void` | `outInt(int i)`  |
| `protected void` | `outUTF(String s)`  |
| `void` | `setSocketChannel(SocketChannel socketChannel)`  |

- Methods inherited from class com.jbase.jremote.io.AbstractJBaseObjectWriter
  - `writeInt, writeJBaseSerializableObject, writeObject, writeObject, writeObject, writeObject, writeRootObject`
- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### WRITE\_TIMEOUT

```java
public static final long WRITE_TIMEOUT
```

The temporary selectors write timeout. 30 seconds.  
See Also:[Constant Field Values](./../../constant-field-values)

### Constructor Detail

#### NIOJBaseObjectWriter

```java
public NIOJBaseObjectWriter(SocketChannel socketChannel)
```

### Method Detail

#### close

```java
public void close()
           throws IOException
```

Throws:`IOException`

#### flush

```java
protected void flush()
              throws IOException
```

Specified by:`flush` in class `AbstractJBaseObjectWriter`  
Throws:`IOException`

#### outByte

```java
protected void outByte(byte[] b)
```

Specified by:`outByte` in class `AbstractJBaseObjectWriter`

#### outByte

```java
protected void outByte(int b)
```

Specified by:`outByte` in class `AbstractJBaseObjectWriter`

#### outInt

```java
protected void outInt(int i)
```

Specified by:`outInt` in class `AbstractJBaseObjectWriter`

#### outUTF

```java
protected void outUTF(String s)
```

Specified by:`outUTF` in class `AbstractJBaseObjectWriter`

#### checkBuffer

```java
protected void checkBuffer(int newDataLength)
```

#### setSocketChannel

```java
public void setSocketChannel(SocketChannel socketChannel)
```

Back to [jRemote API](./../../README.md)
  
<PageFooter />
