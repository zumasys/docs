# JBaseObjectWriter (jremote API)

<PageHeader />

## Interface JBaseObjectWriter

All Known Implementing Classes:[AbstractJBaseObjectWriter](./../abstractjbaseobjectwriter-(jremote-api) "class in com.jbase.jremote.io"), [IOJBaseObjectWriter](./../iojbaseobjectwriter-(jremote-api) "class in com.jbase.jremote.io"), [NIOJBaseObjectWriter](./../niojbaseobjectwriter-(jremote-api) "class in com.jbase.jremote.io")
* * *


```
public interface JBaseObjectWriter
```

Serializes objects to jBASE JDBC format.

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `close()` <br> |
| `void`<br> | `writeInt(int i)` <br> |
| `void`<br> | `writeObject(byte[] o)` <br> |
| `void`<br> | `writeObject(IByteObject o)` <br> |
| `void`<br> | `writeObject(JBaseSerializable o)` <br> |
| `void`<br> | `writeObject(String o)` <br> |
| `void`<br> | `writeRootObject(JBaseSerializable o)` <br> |

### Method Detail

#### writeInt

```
void writeInt(int i)
       throws IOException
```
Throws:`IOException`
#### 


#### writeObject

```
void writeObject(JBaseSerializable o)
          throws IOException
```
Throws:`IOException`
#### 


#### writeObject

```
void writeObject(String o)
          throws IOException
```
Throws:`IOException`
#### 


#### writeObject

```
void writeObject(byte[] o)
          throws IOException
```
Throws:`IOException`
#### 


#### writeObject

```
void writeObject(IByteObject o)
          throws IOException
```
Throws:`IOException`
#### 


#### writeRootObject

```
void writeRootObject(JBaseSerializable o)
              throws IOException
```
Throws:`IOException`
#### 


#### close

```
void close()
    throws IOException
```
Throws:`IOException`

Back to [jRemote API](../../../../jremote-api/README.md)

  
<PageFooter />
