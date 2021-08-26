# WriteRecordRequest (jremote API)

<PageHeader />

## Class WriteRecordRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class WriteRecordRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| `static int` | `MODE_WRITE`  |
| `static int` | `MODE_WRITEU`  |
| `static int` | `MODE_WRITEU_NONBLOCK`  |

### Constructor Summary

| Constructor and Description |
| --- |
| `WriteRecordRequest(int writeMode, String fileName, String recordKey, JDynArray data)`  |

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

#### MODE\_WRITE

```java
public static final int MODE_WRITE
```

See Also:[Constant Field Values](./../../constant-field-values)

#### MODE\_WRITEU

```java
public static final int MODE_WRITEU
```

See Also:[Constant Field Values](./../../constant-field-values)

#### MODE\_WRITEU\_NONBLOCK

```java
public static final int MODE_WRITEU_NONBLOCK
```

See Also:[Constant Field Values](./../../constant-field-values)

### Constructor Detail

#### WriteRecordRequest

```java
public WriteRecordRequest(int writeMode,
                          String fileName,
                          String recordKey,
                          JDynArray data)
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
