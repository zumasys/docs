# ActivationResponse (jremote API)

<PageHeader />

## Class ActivationResponse

All Implemented Interfaces:[JBaseSerializable](./../../../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")
* * *

```java
public class ActivationResponse
extends Object
implements JBaseSerializable
```

The reply from JRemote when an activation is requested.

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `ActivationResponse()`  |
| `ActivationResponse(byte[] message)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `byte[]` | `getMessage()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### ActivationResponse

```java
public ActivationResponse()
```

#### ActivationResponse

```java
public ActivationResponse(byte[] message)
```

### Method Detail

#### getType

```java
public int getType()
```

Specified by:`getType` in interface `JBaseSerializable`  
Returns:type id of the objects, used during the serialization

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

#### getMessage

```java
public byte[] getMessage()
```

#### getVersion

```java
public int getVersion()
```

Specified by:`getVersion` in interface `JBaseSerializable`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
