# JRemoteResponse (jremote API)

**Created At:** 9/25/2017 12:19:44 PM  
**Updated At:** 4/5/2018 10:49:09 PM  
**Original Doc:** [com_jbase_jremote_protocol_jremoteresponse](https://docs.jbase.com/39270-protocol/com_jbase_jremote_protocol_jremoteresponse)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JRemoteResponse (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



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


