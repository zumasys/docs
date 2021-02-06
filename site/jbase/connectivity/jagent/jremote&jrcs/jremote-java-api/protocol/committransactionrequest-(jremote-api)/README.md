# CommitTransactionRequest (jremote API)

<PageHeader />

## Class CommitTransactionRequest
All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io"), [InboundRequest](./../../jca/inflow/protocol/inboundrequest-(jremote-api) "interface in com.jbase.jremote.jca.inflow.protocol")
* * *

```
public class CommitTransactionRequest
extends Object
implements InboundRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`



### Constructor Summary


| Constructor and Description<br> |
| --- |
| `CommitTransactionRequest()` <br> |


### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JBaseSerializable`<br> | `execute(ClientHandle handle,        RequestHandler handler)` <br> |
| `String`<br> | `getTransactionId()` <br> |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader,          int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer,           int version)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


### Constructor Detail

#### COMMITTRANSACTIONREQUEST

```
public CommitTransactionRequest()
```

### 


### Method Detail

#### EXECUTE

```
public JBaseSerializable execute(ClientHandle handle,                                 RequestHandler handler)
```
Specified by:`execute` in interface `InboundRequest`
#### 


#### GETTYPE

```
public int getType()
```
Specified by:`getType` in interface `JBaseSerializable`Returns:type id of the objects, used during the serialization
#### 


#### GETVERSION

```
public int getVersion()
```
Specified by:`getVersion` in interface `JBaseSerializable`
#### 


#### READOBJECT

```
public void readObject(JBaseObjectReader reader,                       int version)                throws IOException,                       ClassNotFoundException
```
Specified by:`readObject` in interface `JBaseSerializable`Throws:`IOException``ClassNotFoundException`
#### 


#### WRITEOBJECT

```
public void writeObject(JBaseObjectWriter writer,                        int version)                 throws IOException
```
Specified by:`writeObject` in interface `JBaseSerializable`Throws:`IOException`
#### 


#### GETTRANSACTIONID

```
public String getTransactionId()
```
Specified by:`getTransactionId` in interface `InboundRequest`




Back to [jRemote API](../../../../jremote-api/README.md)

  
<PageFooter />
