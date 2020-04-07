# BeginTransactionRequest (jremote API)

<PageHeader />

## Class BeginTransactionRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")
* * *


```
public class BeginTransactionRequest
extends JRemoteRequest
```

Request to start transaction.

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `BeginTransactionRequest()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getType()` <br> |


- Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
    - `getVersion, readObject, writeObject`


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### BeginTransactionRequest

```
public BeginTransactionRequest()
```







### Method Detail

#### getType

```
public int getType()
```
Returns:type id of the objects, used during the serializationSee Also:[`JBaseSerializable.getType()`](./../../io/jbaseserializable-%28jremote-api%29#getType--)


Back to [jREMOTE API](com_jbase_jremote_package-summary)


