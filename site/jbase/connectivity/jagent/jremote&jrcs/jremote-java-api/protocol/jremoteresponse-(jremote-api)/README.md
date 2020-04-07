# JRemoteResponse (jremote API)

<PageHeader />

## Class JRemoteResponse

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")Direct Known Subclasses:[ConvResponse](./../convresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [DateTimeResponse](./../datetimeresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [EISMetaDataResponse](./../eismetadataresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [InputOutputResponse](./../inputoutputresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [JediResponse](./../jediresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [JExecuteResults](./../../jexecuteresults-%28jremote-api%29 "class in com.jbase.jremote"), [MonitoringResponse](./../monitoringresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [ReadCommonResponse](./../readcommonresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [SelectListFetchResponse](./../selectlistfetchresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [SetPropertiesResponse](./../setpropertiesresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [StatementFetchResponse](./../statementfetchresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [SubroutineResponse](./../subroutineresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [SwitchAccountResponse](./../switchaccountresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [TransactionResponse](./../transactionresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")
* * *


```
public abstract class JRemoteResponse
extends Response
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JRemoteResponse()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getVersion()` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- Methods inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `getType, readObject, writeObject`

### Constructor Detail

#### JRemoteResponse

```
public JRemoteResponse()
```





### Method Detail

#### getVersion

```
public int getVersion()
```

Back to [jREMOTE API](com_jbase_jremote_package-summary)


