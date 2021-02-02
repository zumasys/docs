# AbstractJBaseObjectWriter (jremote API)

<PageHeader />

## Class AbstractJBaseObjectWriter

All Implemented Interfaces:[JBaseObjectWriter](./../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io")Direct Known Subclasses:[IOJBaseObjectWriter](./../iojbaseobjectwriter-(jremote-api) "class in com.jbase.jremote.io"), [NIOJBaseObjectWriter](./../niojbaseobjectwriter-(jremote-api) "class in com.jbase.jremote.io")
* * *


```
public abstract class AbstractJBaseObjectWriter
extends Object
implements JBaseObjectWriter
```

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `AbstractJBaseObjectWriter()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `protected abstract void`<br> | `flush()` <br> |
| `protected abstract void`<br> | `outByte(byte[] b)` <br> |
| `protected abstract void`<br> | `outByte(int b)` <br> |
| `protected abstract void`<br> | `outInt(int i)` <br> |
| `protected abstract void`<br> | `outUTF(String s)` <br> |
| `void`<br> | `writeInt(int i)` <br> |
| `protected void`<br> | `writeJBaseSerializableObject(JBaseSerializable o)` <br> |
| `void`<br> | `writeObject(byte[] data)` <br> |
| `void`<br> | `writeObject(IByteObject o)` <br> |
| `void`<br> | `writeObject(JBaseSerializable o)` <br> |
| `void`<br> | `writeObject(String o)` <br> |
| `void`<br> | `writeRootObject(JBaseSerializable o)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- Methods inherited from interface com.jbase.jremote.io.JBaseObjectWriter
    - `close`

### Constructor Detail

#### AbstractJBaseObjectWriter

```
public AbstractJBaseObjectWriter()
```





### 


### Method Detail

#### outByte

```
protected abstract void outByte(byte[] b)
                         throws IOException
```
Throws:`IOException`
#### 


#### outByte

```
protected abstract void outByte(int b)
                         throws IOException
```
Throws:`IOException`
#### 


#### outInt

```
protected abstract void outInt(int i)
                        throws IOException
```
Throws:`IOException`
#### 


#### outUTF

```
protected abstract void outUTF(String s)
                        throws IOException
```
Throws:`IOException`
#### 


#### flush

```
protected abstract void flush()
                       throws IOException
```
Throws:`IOException`
#### 


#### writeInt

```
public void writeInt(int i)
              throws IOException
```
Specified by:`writeInt` in interface `JBaseObjectWriter`Throws:`IOException`
#### 


#### writeObject

```
public void writeObject(String o)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`
#### 


#### writeObject

```
public void writeObject(byte[] data)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`
#### 


#### writeObject

```
public void writeObject(IByteObject o)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`
#### 


#### writeObject

```
public void writeObject(JBaseSerializable o)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`
#### 


#### writeJBaseSerializableObject

```
protected void writeJBaseSerializableObject(JBaseSerializable o)
                                     throws IOException
```
Throws:`IOException`
#### 


#### writeRootObject

```
public void writeRootObject(JBaseSerializable o)
                     throws IOException
```
Specified by:`writeRootObject` in interface `JBaseObjectWriter`Throws:`IOException`

Back to [jRemote API](../../../../jremote-api/README.md)



  
<PageFooter />
