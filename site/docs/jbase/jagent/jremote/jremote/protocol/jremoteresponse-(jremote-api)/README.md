# JRemoteResponse (jremote API)

**Created At:** 9/25/2017 12:19:44 PM  
**Updated At:** 4/5/2018 10:49:09 PM  
**Original Doc:** [com_jbase_jremote_protocol_jremoteresponse](https://docs.jbase.com/39270-protocol/com_jbase_jremote_protocol_jremoteresponse)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JRemoteResponse (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class JRemoteResponse

All Implemented Interfaces:[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io")Direct Known Subclasses:[ConvResponse](/39270-protocol/com_jbase_jremote_protocol_convresponse "class in com.jbase.jremote.protocol"), [DateTimeResponse](/39270-protocol/com_jbase_jremote_protocol_datetimeresponse "class in com.jbase.jremote.protocol"), [EISMetaDataResponse](/39270-protocol/com_jbase_jremote_protocol_eismetadataresponse "class in com.jbase.jremote.protocol"), [InputOutputResponse](/39270-protocol/com_jbase_jremote_protocol_inputoutputresponse "class in com.jbase.jremote.protocol"), [JediResponse](/39270-protocol/com_jbase_jremote_protocol_jediresponse "class in com.jbase.jremote.protocol"), [JExecuteResults](/39248-jremote/com_jbase_jremote_jexecuteresults "class in com.jbase.jremote"), [MonitoringResponse](/39270-protocol/com_jbase_jremote_protocol_monitoringresponse "class in com.jbase.jremote.protocol"), [ReadCommonResponse](/39270-protocol/com_jbase_jremote_protocol_readcommonresponse "class in com.jbase.jremote.protocol"), [SelectListFetchResponse](/39270-protocol/com_jbase_jremote_protocol_selectlistfetchresponse "class in com.jbase.jremote.protocol"), [SetPropertiesResponse](/39270-protocol/com_jbase_jremote_protocol_setpropertiesresponse "class in com.jbase.jremote.protocol"), [StatementFetchResponse](/39270-protocol/com_jbase_jremote_protocol_statementfetchresponse "class in com.jbase.jremote.protocol"), [SubroutineResponse](/39270-protocol/com_jbase_jremote_protocol_subroutineresponse "class in com.jbase.jremote.protocol"), [SwitchAccountResponse](/39270-protocol/com_jbase_jremote_protocol_switchaccountresponse "class in com.jbase.jremote.protocol"), [TransactionResponse](/39270-protocol/com_jbase_jremote_protocol_transactionresponse "class in com.jbase.jremote.protocol")
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


