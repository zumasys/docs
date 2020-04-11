# StartTransactionRequest (jremote API)

<PageHeader />

## Class StartTransactionRequest

All Implemented Interfaces:[JBaseSerializable](./../../../../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io"), [InboundRequest](./../inboundrequest-%28jremote-api%29 "interface in com.jbase.jremote.jca.inflow.protocol")
* * *


```
public class StartTransactionRequest
extends Object
implements InboundRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| ` `<br> | `StartTransactionRequest()` <br> |
| `protected `<br> | `StartTransactionRequest(String transId)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JBaseSerializable`<br> | `execute(ClientHandle handle, RequestHandler handler)` <br> |
| `String`<br> | `getTransactionId()` <br> |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### StartTransactionRequest

```
public StartTransactionRequest()
```

#### StartTransactionRequest

```
protected StartTransactionRequest(String transId)
```





### Method Detail

#### execute

```
public JBaseSerializable execute(ClientHandle handle,
                                 RequestHandler handler)
```
Specified by:`execute` in interface `InboundRequest`
#### getType

```
public int getType()
```
Specified by:`getType` in interface `JBaseSerializable`Returns:type id of the objects, used during the serialization
#### getVersion

```
public int getVersion()
```
Specified by:`getVersion` in interface `JBaseSerializable`
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Specified by:`readObject` in interface `JBaseSerializable`Throws:`IOException``ClassNotFoundException`
#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseSerializable`Throws:`IOException`
#### getTransactionId

```
public String getTransactionId()
```
Specified by:`getTransactionId` in interface `InboundRequest`

Back to [jREMOTE API](com_jbase_jremote_package-summary)

  
<PageFooter />
