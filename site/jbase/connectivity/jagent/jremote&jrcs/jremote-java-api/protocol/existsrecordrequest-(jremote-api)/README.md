# ExistsRecordRequest (jremote API)

<PageHeader />

## Class ExistsRecordRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class ExistsRecordRequest
extends JRemoteRequest
```

Request jBASE to check whether a file record exists.

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `ExistsRecordRequest(String fileName, String recordKey)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getType()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
  - `getVersion`
- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### ExistsRecordRequest

```java
public ExistsRecordRequest(String fileName,
                           String recordKey)
```

### Method Detail

#### writeObject

```java
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```

Specified by:`writeObject` in interface `JBaseSerializable`  
Overrides:`writeObject` in class `JRemoteRequest`  
Throws:`IOException`

#### readObject

```java
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```

Specified by:`readObject` in interface `JBaseSerializable`  
Overrides:`readObject` in class `JRemoteRequest`  
Throws:`IOException``ClassNotFoundException`

#### getType

```java
public int getType()
```

Returns:type id of the objects, used during the serialization  
See Also:[`JBaseSerializable.getType()`](./../../io/jbaseserializable-(jremote-api)#getType--)

Back to [jRemote API](./../../README.md)
  
<PageFooter />
