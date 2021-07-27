# MonitoringResponse (jremote API)

<PageHeader />

## Class MonitoringResponse

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class MonitoringResponse
extends JRemoteResponse
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `MonitoringResponse()`  |
| `MonitoringResponse(String response)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getResponse()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### MonitoringResponse

```java
public MonitoringResponse()
```

#### MonitoringResponse

```java
public MonitoringResponse(String response)
```

### Method Detail

#### getResponse

```java
public String getResponse()
```

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

```java
public int getType()
```

Returns:type id of the objects, used during the serialization

#### getVersion

```java
public int getVersion()
```

Specified by:`getVersion` in interface `JBaseSerializable`  
Overrides:`getVersion` in class `JRemoteResponse`

Back to [jRemote API](./../../README.md)

<PageFooter />
