# ByteObject (jremote API)

<PageHeader />

## Class ByteObject

All Implemented Interfaces:IByteObject
* * *


```
public class ByteObject
extends Object
implements IByteObject
```

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `ByteObject()` <br> |
| `ByteObject(byte[] buf)` <br> |
| `ByteObject(int length)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `ByteBuffer`<br> | `getByteBuffer()`<br>This method should return a ByteBuffer set to the position to start writing into it.<br> |
| `byte[]`<br> | `getBytes()`<br>Return the bytes backing this IByteObject.<br> |
| `void`<br> | `setByteBuffer(ByteBuffer byteBuffer)`<br>Allow the internal storage to be replaced, as it may be reallocated externally.<br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail



#### ByteObject

```
public ByteObject()
```





#### ByteObject

```
public ByteObject(byte[] buf)
```





#### ByteObject

```
public ByteObject(int length)
```





### 


### Method Detail



#### getBytes

```
public byte[] getBytes()
```

Description copied from interface: `IByteObject`

Return the bytes backing this IByteObject.
Specified by:`getBytes` in interface `IByteObject`
#### getByteBuffer

```
public ByteBuffer getByteBuffer()
                         throws IOException
```

Description copied from interface: `IByteObject`

This method should return a ByteBuffer set to the position to start writing into it. NOTE - if reading data the ByteBuffer will be expanded to fit the amount of data being read.
Specified by:`getByteBuffer` in interface `IByteObject`Throws:`IOException`


#### setByteBuffer

```
public void setByteBuffer(ByteBuffer byteBuffer)
                   throws IOException
```

Description copied from interface: `IByteObject`

Allow the internal storage to be replaced, as it may be reallocated externally.
Specified by:`setByteBuffer` in interface `IByteObject`Throws:`IOException`



Back to [jREMOTE API](com_jbase_jremote_package-summary)
