# IByteObject (jremote API)

<PageHeader />

## Interface IByteObject

All Known Implementing Classes:[ByteObject](./../byteobject-(jremote-api) "class in com.jbase.jremote.io"), [JDynArray](./../../jdynarray-(jremote-api) "class in com.jbase.jremote")
* * *

```java
public interface IByteObject
```

This interface allows a client to optimise the serialization of byte buffers. This may be neccessary to avoid unneccessary copying or creation of byte arrays.

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `ByteBuffer` | `getByteBuffer()`<br>This method should return a ByteBuffer set to the position to start writing into it. |
| `byte[]` | `getBytes()`<br>Return the bytes backing this IByteObject. |
| `void` | `setByteBuffer(ByteBuffer byteBuffer)`<br>Allow the internal storage to be replaced, as it may be reallocated externally. |

### Method Detail

#### getByteBuffer

```java
ByteBuffer getByteBuffer()
                  throws IOException
```

This method should return a ByteBuffer set to the position to start writing into it. NOTE - if reading data the ByteBuffer will be expanded to fit the amount of data being read.  
Throws:`IOException`

#### setByteBuffer

```java
void setByteBuffer(ByteBuffer byteBuffer)
            throws IOException
```

Allow the internal storage to be replaced, as it may be reallocated externally.  
Throws:`IOException`

#### getBytes

```java
byte[] getBytes()
```

Return the bytes backing this IByteObject.

Back to [jRemote API](./../../README.md)
  
<PageFooter />
