# OKResponse (jremote API)

<PageHeader />

## Class OKResponse

All Implemented Interfaces:[JBaseSerializable](./../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")
* * *

```java
public class OKResponse
extends Response
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `OKResponse()`  |

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

#### OKResponse

```java
public OKResponse()
```

### Method Detail

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

Throws:`IOException`, `ClassNotFoundException`

#### getType

```java
public int getType()
```

Returns:type id of the objects, used during the serialization

#### getVersion

```java
public int getVersion()
```

Back to [jRemote API](./../../README.md)
  
<PageFooter />
