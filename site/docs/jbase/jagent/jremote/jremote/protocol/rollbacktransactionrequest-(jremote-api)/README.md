# RollbackTransactionRequest (jremote API)

**Created At:** 9/25/2017 12:04:46 PM  
**Updated At:** 4/4/2018 6:31:29 PM  
**Original Doc:** [com_jbase_jremote_protocol_rollbacktransactionrequest](https://docs.jbase.com/39270-protocol/com_jbase_jremote_protocol_rollbacktransactionrequest)  
**Original ID:** 278262  
**Internal:** No  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="RollbackTransactionRequest (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class RollbackTransactionRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")
* * *


```
public class RollbackTransactionRequest
extends JRemoteRequest
```

Request to commit transaction.

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `RollbackTransactionRequest()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getType()` <br> |


- Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
    - `getVersion, readObject, writeObject`


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### 


### Constructor Detail

#### RollbackTransactionRequest

```
public RollbackTransactionRequest()
```





### Method Detail

#### getType

```
public int getType()
```
Returns:type id of the objects, used during the serializationSee Also:[`JBaseSerializable.getType()`](/39250-io/com_jbase_jremote_io_jbaseserializable#getType--)

Back to [jREMOTE API](com_jbase_jremote_package-summary)
