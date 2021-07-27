# InboundRequest (jremote API)

<PageHeader />

## Interface InboundRequest

All Superinterfaces:[JBaseSerializable](./../../../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")  
All Known Implementing Classes:[ActivationRequest](./../activationrequest-(jremote-api) "class in com.jbase.jremote.jca.inflow.protocol"), [CommitTransactionRequest](./../../../../protocol/committransactionrequest-(jremote-api) "class in com.jbase.jremote.jca.inflow.protocol"), [RollbackTransactionRequest](./../../../../protocol/rollbacktransactionrequest-(jremote-api) "class in com.jbase.jremote.jca.inflow.protocol"), [StartTransactionRequest](./../starttransactionrequest-(jremote-api) "class in com.jbase.jremote.jca.inflow.protocol")
* * *

```java
public interface InboundRequest
extends JBaseSerializable
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `JBaseSerializable` | `execute(ClientHandle handle, RequestHandler handler)`  |
| `String` | `getTransactionId()`  |

- Methods inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `getType, getVersion, readObject, writeObject`

### Method Detail

#### getTransactionId

```java
String getTransactionId()
```

#### execute

```java
JBaseSerializable execute(ClientHandle handle,
                          RequestHandler handler)
```

Back to [jRemote API](./../../README.md)

<PageFooter />
