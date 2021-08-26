# ReadRecordRequest (jremote API)

<PageHeader />

## Class ReadRecordRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class ReadRecordRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| `static int` | `MODE_READ`  |
| `static int` | `MODE_READU`  |
| `static int` | `MODE_READU_NONBLOCK`  |

### Constructor Summary

| Constructor and Description |
| --- |
| `ReadRecordRequest(int readMode, String fileName, String recordKey)`  |

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

#### MODE\_READ

```java
public static final int MODE_READ
```

See Also:[Constant Field Values](./../../constant-field-values)

#### MODE\_READU

```java
public static final int MODE_READU
```

See Also:[Constant Field Values](./../../constant-field-values)

#### MODE\_READU\_NONBLOCK

```java
public static final int MODE_READU_NONBLOCK
```

See Also:[Constant Field Values](./../../constant-field-values)

### Constructor Detail

#### ReadRecordRequest

```java
public ReadRecordRequest(int readMode,
                         String fileName,
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
