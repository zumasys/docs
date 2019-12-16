# InboundRequest (jremote API)

**Created At:** 9/25/2017 12:03:46 PM  
**Updated At:** 4/4/2018 6:35:33 PM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="InboundRequest (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Interface InboundRequest

All Superinterfaces:[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io")All Known Implementing Classes:[ActivationRequest](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_ActivationRequest "class in com.jbase.jremote.jca.inflow.protocol"), [CommitTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_CommitTransactionRequest "class in com.jbase.jremote.jca.inflow.protocol"), [RollbackTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_RollbackTransactionRequest "class in com.jbase.jremote.jca.inflow.protocol"), [StartTransactionRequest](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_StartTransactionRequest "class in com.jbase.jremote.jca.inflow.protocol")
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


