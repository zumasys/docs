# RollbackTransactionRequest (jremote API)

<PageHeader />

## Class RollbackTransactionRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class RollbackTransactionRequest
extends JRemoteRequest
```

Request to commit transaction.

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `RollbackTransactionRequest()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getType()`  |

- Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
  - `getVersion, readObject, writeObject`

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### RollbackTransactionRequest

```java
public RollbackTransactionRequest()
```

### Method Detail

#### getType

```java
public int getType()
```

Returns:type id of the objects, used during the serialization  
See Also:[`JBaseSerializable.getType()`](./../../io/jbaseserializable-(jremote-api)#getType--)

Back to [jRemote API](./../../README.md)
  
<PageFooter />
