# IByteObject (jremote API)

<PageHeader />

## Interface IByteObject

All Known Implementing Classes:[ByteObject](./../byteobject-%28jremote-api%29 "class in com.jbase.jremote.io"), [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote")
* * *


```
public interface IByteObject
```

This interface allows a client to optimise the serialization of byte buffers. This may be neccessary to avoid unneccessary copying or creation of byte arrays.

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `ByteBuffer`<br> | `getByteBuffer()`<br>This method should return a ByteBuffer set to the position to start writing into it.<br> |
| `byte[]`<br> | `getBytes()`<br>Return the bytes backing this IByteObject.<br> |
| `void`<br> | `setByteBuffer(ByteBuffer byteBuffer)`<br>Allow the internal storage to be replaced, as it may be reallocated externally.<br> |

### Method Detail

#### getByteBuffer

```
ByteBuffer getByteBuffer()
                  throws IOException
```

This method should return a ByteBuffer set to the position to start writing into it. NOTE - if reading data the ByteBuffer will be expanded to fit the amount of data being read.
Throws:`IOException`
#### setByteBuffer

```
void setByteBuffer(ByteBuffer byteBuffer)
            throws IOException
```

Allow the internal storage to be replaced, as it may be reallocated externally.
Throws:`IOException`


#### getBytes

```
byte[] getBytes()
```

Return the bytes backing this IByteObject.

Back to [jREMOTE API](com_jbase_jremote_package-summary)
