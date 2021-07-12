# CommitTransactionRequest (jremote API)

<PageHeader />

## Class CommitTransactionRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io"), [InboundRequest](./../../jca/inflow/protocol/inboundrequest-(jremote-api) "interface in com.jbase.jremote.jca.inflow.protocol")

* * *

```java
public class CommitTransactionRequest
extends Object
implements InboundRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `CommitTransactionRequest()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `JBaseSerializable` | `execute(ClientHandle handle,        RequestHandler handler)`  |
| `String` | `getTransactionId()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader,          int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer,           int version)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### CommitTransactionRequest

```java
public CommitTransactionRequest()
```

### Method Detail

#### Execute

```java
public JBaseSerializable execute(ClientHandle handle, 
        RequestHandler handler)
```

Specified by:`execute` in interface `InboundRequest`

#### GetType

```java
public int getType()
```

Specified by:`getType` in interface `JBaseSerializable`  
Returns:type id of the objects, used during the serialization

#### GetVersion

```java
public int getVersion()
```

Specified by:`getVersion` in interface `JBaseSerializable`

#### ReadObject

```java
public void readObject(JBaseObjectReader reader, 
                        int version)  
                        throws IOException, ClassNotFoundException
```

Specified by:`readObject` in interface `JBaseSerializable`  
Throws:`IOException``ClassNotFoundException`

#### WrireObject

```java
public void writeObject(JBaseObjectWriter writer, 
        int version)                 
        throws IOException
```

Specified by:`writeObject` in interface `JBaseSerializable`Throws:`IOException`

#### GetTransactionId

```java
public String getTransactionId()
```

Specified by:`getTransactionId` in interface `InboundRequest`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
