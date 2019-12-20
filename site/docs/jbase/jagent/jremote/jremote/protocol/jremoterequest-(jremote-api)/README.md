# JRemoteRequest (jremote API)

**Created At:** 9/25/2017 12:19:37 PM  
**Updated At:** 4/4/2018 8:39:01 PM  
**Original Doc:** [com_jbase_jremote_protocol_jremoterequest](https://docs.jbase.com/39270-protocol/com_jbase_jremote_protocol_jremoterequest)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JRemoteRequest (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class JRemoteRequest

All Implemented Interfaces:[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io")Direct Known Subclasses:[AccountAuthenticationRequest](/39270-protocol/com_jbase_jremote_protocol_accountauthenticationrequest "class in com.jbase.jremote.protocol"), [AuthenticationRequest](/39270-protocol/com_jbase_jremote_protocol_authenticationrequest "class in com.jbase.jremote.protocol"), [BeginTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_begintransactionrequest "class in com.jbase.jremote.protocol"), [CallSubroutineRequest](/39270-protocol/com_jbase_jremote_protocol_callsubroutinerequest "class in com.jbase.jremote.protocol"), [ClearFileRequest](/39270-protocol/com_jbase_jremote_protocol_clearfilerequest "class in com.jbase.jremote.protocol"), [CloseFileRequest](/39270-protocol/com_jbase_jremote_protocol_closefilerequest "class in com.jbase.jremote.protocol"), [CommitTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_committransactionrequest "class in com.jbase.jremote.protocol"), [ConvRequest](/39270-protocol/com_jbase_jremote_protocol_convrequest "class in com.jbase.jremote.protocol"), [DateTimeRequest](/39270-protocol/com_jbase_jremote_protocol_datetimerequest "class in com.jbase.jremote.protocol"), [DeleteRecordRequest](/39270-protocol/com_jbase_jremote_protocol_deleterecordrequest "class in com.jbase.jremote.protocol"), [EchoRequest](/39270-protocol/com_jbase_jremote_protocol_echorequest "class in com.jbase.jremote.protocol"), [EISMetaDataRequest](/39270-protocol/com_jbase_jremote_protocol_eismetadatarequest "class in com.jbase.jremote.protocol"), [ExistsRecordRequest](/39270-protocol/com_jbase_jremote_protocol_existsrecordrequest "class in com.jbase.jremote.protocol"), [JExecuteRequest](/39270-protocol/com_jbase_jremote_protocol_jexecuterequest "class in com.jbase.jremote.protocol"), [MonitoringRequest](/39270-protocol/com_jbase_jremote_protocol_monitoringrequest "class in com.jbase.jremote.protocol"), [OpenFileRequest](/39270-protocol/com_jbase_jremote_protocol_openfilerequest "class in com.jbase.jremote.protocol"), [ReadCommonRequest](/39270-protocol/com_jbase_jremote_protocol_readcommonrequest "class in com.jbase.jremote.protocol"), [ReadRecordRequest](/39270-protocol/com_jbase_jremote_protocol_readrecordrequest "class in com.jbase.jremote.protocol"), [ReleaseRecordLockRequest](/39270-protocol/com_jbase_jremote_protocol_releaserecordlockrequest "class in com.jbase.jremote.protocol"), [RemoteInputRequest](/39270-protocol/com_jbase_jremote_protocol_remoteinputrequest "class in com.jbase.jremote.protocol"), [RollbackTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_rollbacktransactionrequest "class in com.jbase.jremote.protocol"), [SelectFileRequest](/39270-protocol/com_jbase_jremote_protocol_selectfilerequest "class in com.jbase.jremote.protocol"), [SelectListCloseRequest](/39270-protocol/com_jbase_jremote_protocol_selectlistcloserequest "class in com.jbase.jremote.protocol"), [SelectListCommitRequest](/39270-protocol/com_jbase_jremote_protocol_selectlistcommitrequest "class in com.jbase.jremote.protocol"), [SelectListFetchRequest](/39270-protocol/com_jbase_jremote_protocol_selectlistfetchrequest "class in com.jbase.jremote.protocol"), [SetPropertiesRequest](/39270-protocol/com_jbase_jremote_protocol_setpropertiesrequest "class in com.jbase.jremote.protocol"), [StatementExecuteQueryRequest](/39270-protocol/com_jbase_jremote_protocol_statementexecutequeryrequest "class in com.jbase.jremote.protocol"), [StatementFetchRequest](/39270-protocol/com_jbase_jremote_protocol_statementfetchrequest "class in com.jbase.jremote.protocol"), [SwitchAccountRequest](/39270-protocol/com_jbase_jremote_protocol_switchaccountrequest "class in com.jbase.jremote.protocol"), [WriteRecordRequest](/39270-protocol/com_jbase_jremote_protocol_writerecordrequest "class in com.jbase.jremote.protocol"), [XACommitTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_xacommittransactionrequest "class in com.jbase.jremote.protocol"), [XAEndTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_xaendtransactionrequest "class in com.jbase.jremote.protocol"), [XAPrepareTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_xapreparetransactionrequest "class in com.jbase.jremote.protocol"), [XARollbackTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_xarollbacktransactionrequest "class in com.jbase.jremote.protocol"), [XAStartTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_xastarttransactionrequest "class in com.jbase.jremote.protocol")
* * *


```
public abstract class JRemoteRequest
extends Object
implements JBaseSerializable
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JRemoteRequest()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- Methods inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `getType`

### Constructor Detail

#### JRemoteRequest

```
public JRemoteRequest()
```



### 


### Method Detail

#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseSerializable`Throws:`IOException`
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Specified by:`readObject` in interface `JBaseSerializable`Throws:`IOException``ClassNotFoundException`
#### getVersion

```
public int getVersion()
```
Specified by:`getVersion` in interface `JBaseSerializable`

Back to [jREMOTE API](com_jbase_jremote_package-summary)


