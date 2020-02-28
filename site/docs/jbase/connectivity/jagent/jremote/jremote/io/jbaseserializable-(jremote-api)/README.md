# JBaseSerializable (jremote API)

**Created At:** 9/25/2017 11:51:45 AM  
**Updated At:** 12/24/2018 4:27:51 PM  
**Original Doc:** [com_jbase_jremote_io_jbaseserializable](https://docs.jbase.com/39250-io/com_jbase_jremote_io_jbaseserializable)  
**Original ID:** 278157  
**Internal:** No  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JBaseSerializable (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6,"i3":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Interface JBaseSerializable

All Known Subinterfaces:[InboundRequest](./../../jca/inflow/protocol/inboundrequest-%28jremote-api%29 "interface in com.jbase.jremote.jca.inflow.protocol")All Known Implementing Classes:[AccountAuthenticationRequest](./../../protocol/accountauthenticationrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [AccountAuthenticationRequest.AccountUserCredentials](./../../protocol/accountauthenticationrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [ActivationRequest](./../../jca/inflow/protocol/activationrequest-%28jremote-api%29 "class in com.jbase.jremote.jca.inflow.protocol"), [ActivationResponse](./../../jca/inflow/protocol/activationresponse-%28jremote-api%29 "class in com.jbase.jremote.jca.inflow.protocol"), [AuthenticationRequest](./../../protocol/authenticationrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [BeginTransactionRequest](./../../protocol/begintransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [CallSubroutineRequest](./../../protocol/callsubroutinerequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [ClearFileRequest](./../../protocol/clearfilerequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [CloseFileRequest](./../../protocol/closefilerequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [CommitTransactionRequest](./../../protocol/committransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.jca.inflow.protocol"), [CommitTransactionRequest](./../../protocol/committransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [ConvRequest](./../../protocol/convrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [ConvResponse](./../../protocol/convresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [DateTimeRequest](./../../protocol/datetimerequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [DateTimeResponse](./../../protocol/datetimeresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [DeleteRecordRequest](./../../protocol/deleterecordrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [EchoRequest](./../../protocol/echorequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [EchoResponse](./../../protocol/echoresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [EISMetaDataRequest](./../../protocol/eismetadatarequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [EISMetaDataResponse](./../../protocol/eismetadataresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [ErrorResponse](./../errorresponse-%28jremote-api%29 "class in com.jbase.jremote.io"), [ExistsRecordRequest](./../../protocol/existsrecordrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [InputOutputResponse](./../../protocol/inputoutputresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [JediResponse](./../../protocol/jediresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [JExecuteRequest](./../../protocol/jexecuterequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [JExecuteResults](./../../jexecuteresults-%28jremote-api%29 "class in com.jbase.jremote"), [JRemoteRequest](./../../protocol/jremoterequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [JRemoteResponse](./../../protocol/jremoteresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [JSelectListProt](./../../protocol/jselectlistprot-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [JSubroutineParameters](./../../jsubroutineparameters-%28jremote-api%29 "class in com.jbase.jremote"), [MonitoringRequest](./../../protocol/monitoringrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [MonitoringResponse](./../../protocol/monitoringresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [NoEndpointActivatedResponse](./../../jca/inflow/protocol/noendpointactivatedresponse-%28jremote-api%29 "class in com.jbase.jremote.jca.inflow.protocol"), [OKResponse](./../okresponse-%28jremote-api%29 "class in com.jbase.jremote.io"), [OpenFileRequest](./../../protocol/openfilerequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [ReadCommonRequest](./../../protocol/readcommonrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [ReadCommonResponse](./../../protocol/readcommonresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [ReadRecordRequest](./../../protocol/readrecordrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [ReleaseRecordLockRequest](./../../protocol/releaserecordlockrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [RemoteInputRequest](./../../protocol/remoteinputrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [Response](./../response-%28jremote-api%29 "class in com.jbase.jremote.io"), [RollbackTransactionRequest](./../../protocol/rollbacktransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.jca.inflow.protocol"), [RollbackTransactionRequest](./../../protocol/rollbacktransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [SelectFileRequest](./../../protocol/selectfilerequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [SelectListCloseRequest](./../../protocol/selectlistcloserequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [SelectListCommitRequest](./../../protocol/selectlistcommitrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [SelectListFetchRequest](./../../protocol/selectlistfetchrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [SelectListFetchResponse](./../../protocol/selectlistfetchresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [SetPropertiesRequest](./../../protocol/setpropertiesrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [SetPropertiesResponse](./../../protocol/setpropertiesresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [SQLError](./../sqlerror-%28jremote-api%29 "class in com.jbase.jremote.io"), [StartTransactionRequest](./../../jca/inflow/protocol/starttransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.jca.inflow.protocol"), [StatementExecuteQueryRequest](./../../protocol/statementexecutequeryrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [StatementFetchRequest](./../../protocol/statementfetchrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [StatementFetchResponse](./../../protocol/statementfetchresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [SubroutineResponse](./../../protocol/subroutineresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [SwitchAccountRequest](./../../protocol/switchaccountrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [SwitchAccountResponse](./../../protocol/switchaccountresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [TransactionOperation](./../../jca/inflow/protocol/transactionoperation-%28jremote-api%29 "class in com.jbase.jremote.jca.inflow.protocol"), [TransactionResponse](./../../protocol/transactionresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [WorkScheduledResponse](./../../jca/inflow/protocol/workscheduledresponse-%28jremote-api%29 "class in com.jbase.jremote.jca.inflow.protocol"), [WriteRecordRequest](./../../protocol/writerecordrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [XACommitTransactionRequest](./../../protocol/xacommittransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [XAEndTransactionRequest](./../../protocol/xaendtransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [XAPrepareTransactionRequest](./../../protocol/xapreparetransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [XARollbackTransactionRequest](./../../protocol/xarollbacktransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [XAStartTransactionRequest](./../../protocol/xastarttransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol"), [XAXid](./../../protocol/xaxid-%28jremote-api%29 "class in com.jbase.jremote.protocol")
* * *


```
public interface JBaseSerializable
```

Interface which must be implemented by objects which take part in the JDBC driver jbase\_agent communication. Note: the interface is not compatible with standard Java java.io.Serializable. This is because we do not intend to implement Java serialization protocol for our purposes (note: this is about Java C++ communication). Each class implementing this interface should have a counterpart on the server side with compatible serializing/deserializing protocol.

### Nested Class Summary


| Modifier and Type<br> | Interface and Description<br> |
| --- | --- |
| `static interface `<br> | `JBaseSerializable.TYPE` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |

### Method Detail



#### writeObject

```
void writeObject(JBaseObjectWriter writer,
                 int version)
          throws IOException
```
Throws:`IOException`
#### readObject

```
void readObject(JBaseObjectReader reader,
                int version)
         throws IOException,
                ClassNotFoundException
```
Throws:`IOException``ClassNotFoundException`
#### getType

```
int getType()
```
Returns:type id of the objects, used during the serialization
#### getVersion

```
int getVersion()
```







Back to [jREMOTE API](com_jbase_jremote_package-summary)
