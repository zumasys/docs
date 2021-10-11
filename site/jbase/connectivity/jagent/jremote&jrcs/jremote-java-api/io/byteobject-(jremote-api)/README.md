# ByteObject (jremote API)

<PageHeader />

## Class ByteObject

All Implemented Interfaces:IByteObject
* * *

```java
public class ByteObject
extends Object
implements IByteObject
```

### Constructor Summary

| Constructor and Description |
| --- |
| `ByteObject()`  |
| `ByteObject(byte[] buf)`  |
| `ByteObject(int length)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `ByteBuffer` | `getByteBuffer()`<br>This method should return a ByteBuffer set to the position to start writing into it. |
| `byte[]` | `getBytes()`<br>Return the bytes backing this IByteObject. |
| `void` | `setByteBuffer(ByteBuffer byteBuffer)`<br>Allow the internal storage to be replaced, as it may be reallocated externally. |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### ByteObject

```java
public ByteObject()
```

#### ByteObject

```java
public ByteObject(byte[] buf)
```

#### ByteObject

```java
public ByteObject(int length)
```

### Method Detail

#### getBytes

```java
public byte[] getBytes()
```

Description copied from interface: `IByteObject`

Return the bytes backing this IByteObject.
Specified by:`getBytes` in interface `IByteObject`

#### getByteBuffer

```java
public ByteBuffer getByteBuffer()
                         throws IOException
```

Description copied from interface: `IByteObject`

This method should return a ByteBuffer set to the position to start writing into it. NOTE - if reading data the ByteBuffer will be expanded to fit the amount of data being read.
Specified by:`getByteBuffer` in interface `IByteObject`Throws:`IOException`

#### setByteBuffer

```java
public void setByteBuffer(ByteBuffer byteBuffer)
                   throws IOException
```

Description copied from interface: `IByteObject`

Allow the internal storage to be replaced, as it may be reallocated externally.
Specified by:`setByteBuffer` in interface `IByteObject`Throws:`IOException`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
