# ReleaseRecordLockRequest (jremote API)

<PageHeader />

## Class ReleaseRecordLockRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class ReleaseRecordLockRequest
extends JRemoteRequest
```

Request jBASE to release a record lock. If the record key is an empty string, then all record locks will be released.

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| `static int` | `CHECK_LOCK`  |
| `static int` | `RELEASE_LOCK`  |

### Constructor Summary

| Constructor and Description |
| --- |
| `ReleaseRecordLockRequest(String fileName, String recordKey, int lockRequest)`  |

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

### Field Detail

#### CHECK\_LOCK

```java
public static final int CHECK_LOCK
```

See Also:[Constant Field Values](./../../constant-field-values)

#### RELEASE\_LOCK

```java
public static final int RELEASE_LOCK
```

See Also:[Constant Field Values](./../../constant-field-values)

### Constructor Detail

#### ReleaseRecordLockRequest

```java
public ReleaseRecordLockRequest(String fileName,
                                String recordKey,
                                int lockRequest)
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
