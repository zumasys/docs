# EISMetaDataResponse (jremote API)

<PageHeader />

## Class EISMetaDataResponse

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class EISMetaDataResponse
extends JRemoteResponse
```

Response object which reads general meta data of the underlying EIS instance.

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `EISMetaDataResponse()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | `getRepositoryEntry(String key)`Obtain the value of a repository entry |
| `int` | `getType()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class com.jbase.jremote.protocol.JRemoteResponse
  - `getVersion`
- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### EISMetaDataResponse

```java
public EISMetaDataResponse()
```

### Method Detail

#### getRepositoryEntry

```java
public JDynArray getRepositoryEntry(String key)
```

Obtain the value of a repository entry
Parameters:`key` - key of the repository entryReturns:value of the repository entry

#### writeObject

```java
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```

Throws:`IOException`

#### readObject

```java
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```

Throws:`IOException``ClassNotFoundException`

#### getType

```
public int getType()
```

Returns:type id of the objects, used during the serialization  
See Also:[`JBaseSerializable.getType()`](./../../io/jbaseserializable-(jremote-api)#getType--)

Back to [jRemote API](./../../README.md)
  
<PageFooter />
