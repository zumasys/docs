# JediResponse (jremote API)

<PageHeader />

## Class JediResponse

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")
* * *

```java
public class JediResponse
extends JRemoteResponse
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `JediResponse()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | `getData(CharsetEncoder encoder, CharsetDecoder decoder)`  |
| `JSelectListProt` | `getSelectList(CharsetEncoder encoder, CharsetDecoder decoder)`  |
| `int` | `getStatus()`  |
| `int` | `getType()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class com.jbase.jremote.protocol.JRemoteResponse
  - `getVersion`
- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JediResponse

```java
public JediResponse()
```

### Method Detail

#### getStatus

```java
public int getStatus()
```

#### getData

```java
public JDynArray getData(CharsetEncoder encoder,
                         CharsetDecoder decoder)
```

#### getSelectList

```java
public JSelectListProt getSelectList(CharsetEncoder encoder,
                                     CharsetDecoder decoder)
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
See Also:[`JBaseSerializable.getType()`](./../../io/jbaseserializable-(jremote-api)#getType--)

Back to [jRemote API](./../../README.md)
  
<PageFooter />
