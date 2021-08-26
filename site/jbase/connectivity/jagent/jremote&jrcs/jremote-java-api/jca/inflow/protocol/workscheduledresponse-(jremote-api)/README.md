# WorkScheduledResponse (jremote API)

<PageHeader />

## Class WorkScheduledResponse

All Implemented Interfaces:[JBaseSerializable](./../../../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")
* * *

```java
public class WorkScheduledResponse
extends Object
implements JBaseSerializable
```

The reply from JRemote when an activation request (Work instance) has been passed to the work manager.

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `WorkScheduledResponse()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### WorkScheduledResponse

```java
public WorkScheduledResponse()
```

### Method Detail

#### getType

```java
public int getType()
```

Specified by:`getType` in interface `JBaseSerializable`  
Returns:type id of the objects, used during the serialization

#### getVersion

```java
public int getVersion()
```

Specified by:`getVersion` in interface `JBaseSerializable`

#### readObject

```java
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```

Specified by:`readObject` in interface `JBaseSerializable`  
Throws:`IOException``ClassNotFoundException`

#### writeObject

```java
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```

Specified by:`writeObject` in interface `JBaseSerializable`  
Throws:`IOException`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
