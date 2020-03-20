# InboundRequest (jremote API)

**Created At:** 9/25/2017 12:03:46 PM  
**Updated At:** 4/4/2018 6:35:33 PM  
**Original Doc:** [com_jbase_jremote_jca_inflow_protocol_inboundrequest](https://docs.jbase.com/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest)  
**Original ID:** 278255  
**Internal:** No  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="InboundRequest (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



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


