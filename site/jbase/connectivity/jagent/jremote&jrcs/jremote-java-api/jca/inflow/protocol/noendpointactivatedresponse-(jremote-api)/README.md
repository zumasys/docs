# NoEndpointActivatedResponse (jremote API)

<PageHeader />

## Class NoEndpointActivatedResponse

All Implemented Interfaces:[JBaseSerializable](./../../../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")
* * *

```java
public class NoEndpointActivatedResponse
extends Object
implements JBaseSerializable
```

The reply from JRemote when no endpoint could be found for activation.

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `NoEndpointActivatedResponse()`  |
| `NoEndpointActivatedResponse(String info)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getInformation()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### NoEndpointActivatedResponse

```java
public NoEndpointActivatedResponse()
```

#### NoEndpointActivatedResponse

```java
public NoEndpointActivatedResponse(String info)
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

#### getInformation

```java
public String getInformation()
```

#### getVersion

```java
public int getVersion()
```

Specified by:`getVersion` in interface `JBaseSerializable`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
