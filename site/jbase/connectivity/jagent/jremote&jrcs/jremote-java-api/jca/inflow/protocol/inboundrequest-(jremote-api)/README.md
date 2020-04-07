# InboundRequest (jremote API)

<PageHeader />

## Interface InboundRequest

All Superinterfaces:[JBaseSerializable](./../../../../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")All Known Implementing Classes:[ActivationRequest](./../activationrequest-%28jremote-api%29 "class in com.jbase.jremote.jca.inflow.protocol"), [CommitTransactionRequest](./../../../../protocol/committransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.jca.inflow.protocol"), [RollbackTransactionRequest](./../../../../protocol/rollbacktransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.jca.inflow.protocol"), [StartTransactionRequest](./../starttransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.jca.inflow.protocol")
* * *


```
public interface InboundRequest
extends JBaseSerializable
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JBaseSerializable`<br> | `execute(ClientHandle handle, RequestHandler handler)` <br> |
| `String`<br> | `getTransactionId()` <br> |


- Methods inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `getType, getVersion, readObject, writeObject`

### Method Detail



#### getTransactionId

```
String getTransactionId()
```



#### execute

```
JBaseSerializable execute(ClientHandle handle,
                          RequestHandler handler)
```



Back to [jREMOTE API](com_jbase_jremote_package-summary)


