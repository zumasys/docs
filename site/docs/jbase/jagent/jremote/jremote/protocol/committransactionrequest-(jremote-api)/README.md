# CommitTransactionRequest (jremote API)

**Created At:** 9/25/2017 12:03:38 PM  
**Updated At:** 4/5/2018 9:53:58 PM  
**Original Doc:** [com_jbase_jremote_protocol_committransactionrequest](https://docs.jbase.com/39270-protocol/com_jbase_jremote_protocol_committransactionrequest)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="CommitTransactionRequest (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

## Class CommitTransactionRequest
All Implemented Interfaces:[JBaseSerializable](com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io"), [InboundRequest](com_jbase_jremote_jca_inflow_protocol_inboundrequest "interface in com.jbase.jremote.jca.inflow.protocol")
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




Back to [jREMOTE API](com_jbase_jremote_package-summary)
