# IOJBaseObjectReader (jremote API)

<PageHeader />

## Class IOJBaseObjectReader

All Implemented Interfaces:[JBaseObjectReader](./../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io")
* * *


```
public class IOJBaseObjectReader
extends AbstractJBaseObjectReader
```

jBase object reader based on the DataInputStream.

### Field Summary

- Fields inherited from class com.jbase.jremote.io.AbstractJBaseObjectReader
    - `log`






### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| `protected `<br> | `IOJBaseObjectReader()` <br> |
| ` `<br> | `IOJBaseObjectReader(ObjectFactory factory, byte[] b)`<br>Constructor FOR TESTING ONLY.<br> |
| ` `<br> | `IOJBaseObjectReader(ObjectFactory factory, InputStream is)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `protected int`<br> | `bufferedRead()` <br> |
| `void`<br> | `close()` <br> |
| `protected byte`<br> | `getByte()` <br> |
| `protected int`<br> | `getBytes(byte[] buf)` <br> |
| `protected int`<br> | `getBytes(ByteBuffer bBuf)` <br> |
| `protected int`<br> | `getInt()` <br> |
| `ObjectFactory`<br> | `getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders.<br> |
| `protected int`<br> | `inBytes(int numberOfBytesToRead)` <br> |
| `protected boolean`<br> | `isClosed()` <br> |
| `boolean`<br> | `isUnpackRequired()` <br> |
| `protected String`<br> | `readUTF()` <br> |
| `void`<br> | `unpack()` <br> |


- Methods inherited from class com.jbase.jremote.io.AbstractJBaseObjectReader
    - `checkBuffer, readByteObject, readBytes, readInt, readJBaseSerializableObject, readObject, readObject, readObject, readRootObject, readString`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### IOJBaseObjectReader

```
protected IOJBaseObjectReader()
```

#### 


#### IOJBaseObjectReader

```
public IOJBaseObjectReader(ObjectFactory factory,
                           InputStream is)
```

#### 


#### IOJBaseObjectReader

```
public IOJBaseObjectReader(ObjectFactory factory,
                           byte[] b)
```

Constructor FOR TESTING ONLY. Constructe the buffer and writes the info passed into it. i.e. simulates this data arriving over the wire.



### 


### Method Detail

#### getObjectFactory

```
public ObjectFactory getObjectFactory()
```

Description copied from class: `AbstractJBaseObjectReader`

This method must be implemented by concrete ObjectReaders.
Specified by:`getObjectFactory` in class `AbstractJBaseObjectReader`Returns:an instance of a class implementing JBaseSerializable
#### 


#### close

```
public void close()
           throws IOException
```
Specified by:`close` in interface `JBaseObjectReader`Specified by:`close` in class `AbstractJBaseObjectReader`Throws:`IOException`
#### 


#### getByte

```
protected byte getByte()
                throws IOException
```
Specified by:`getByte` in class `AbstractJBaseObjectReader`Throws:`IOException`
#### 


#### getInt

```
protected int getInt()
              throws IOException
```
Specified by:`getInt` in class `AbstractJBaseObjectReader`Throws:`IOException`
#### 


#### getBytes

```
protected int getBytes(byte[] buf)
                throws IOException
```
Specified by:`getBytes` in class `AbstractJBaseObjectReader`Throws:`IOException`
#### 


#### getBytes

```
protected int getBytes(ByteBuffer bBuf)
                throws IOException
```
Specified by:`getBytes` in class `AbstractJBaseObjectReader`Throws:`IOException`
#### 


#### readUTF

```
protected String readUTF()
                  throws IOException
```
Specified by:`readUTF` in class `AbstractJBaseObjectReader`Throws:`IOException`
#### 


#### inBytes

```
protected int inBytes(int numberOfBytesToRead)
               throws IOException
```
Specified by:`inBytes` in class `AbstractJBaseObjectReader`Throws:`IOException`
#### 


#### isClosed

```
protected boolean isClosed()
```

#### 


#### bufferedRead

```
protected int bufferedRead()
                    throws IOException
```
Overrides:`bufferedRead` in class `AbstractJBaseObjectReader`Throws:`IOException`
#### 


#### unpack

```
public void unpack()
            throws IOException
```
Throws:`IOException`
#### 


#### isUnpackRequired

```
public boolean isUnpackRequired()
                         throws IOException
```
Throws:`IOException`

Back to [jREMOTE API](com_jbase_jremote_package-summary)

  
<PageFooter />
