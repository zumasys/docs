# EchoRequest (jremote API)

<PageHeader />

## Class EchoRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class EchoRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| `protected static Logger` | `log`  |

### Constructor Summary

| Constructor and Description |
| --- |
| `EchoRequest()`  |
| `EchoRequest(int len)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### log

```java
protected static final Logger log
```

### Constructor Detail

#### EchoRequest

```java
public EchoRequest()
```

#### EchoRequest

```java
public EchoRequest(int len)
            throws IOException
```

Throws:`IOException`

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

#### getVersion

```java
public int getVersion()
```

Specified by:`getVersion` in interface `JBaseSerializable`  
Overrides:`getVersion` in class `JRemoteRequest`

Back to [jRemote API](./../../README.md)

<PageFooter />
