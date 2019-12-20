# JBaseSerializable (jremote API)

**Created At:** 9/25/2017 11:51:45 AM  
**Updated At:** 12/24/2018 4:27:51 PM  
**Original Doc:** [com_jbase_jremote_io_jbaseserializable](https://docs.jbase.com/39250-io/com_jbase_jremote_io_jbaseserializable)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JBaseSerializable (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6,"i3":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Interface JBaseSerializable

All Known Subinterfaces:[InboundRequest](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest "interface in com.jbase.jremote.jca.inflow.protocol")All Known Implementing Classes:[AccountAuthenticationRequest](/39270-protocol/com_jbase_jremote_protocol_AccountAuthenticationRequest "class in com.jbase.jremote.protocol"), [AccountAuthenticationRequest.AccountUserCredentials](com_jbase_jremote_protocol_accountauthenticationrequest "class in com.jbase.jremote.protocol"), [ActivationRequest](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_ActivationRequest "class in com.jbase.jremote.jca.inflow.protocol"), [ActivationResponse](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_ActivationResponse "class in com.jbase.jremote.jca.inflow.protocol"), [AuthenticationRequest](/39270-protocol/com_jbase_jremote_protocol_AuthenticationRequest "class in com.jbase.jremote.protocol"), [BeginTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_BeginTransactionRequest "class in com.jbase.jremote.protocol"), [CallSubroutineRequest](/39270-protocol/com_jbase_jremote_protocol_CallSubroutineRequest "class in com.jbase.jremote.protocol"), [ClearFileRequest](/39270-protocol/com_jbase_jremote_protocol_ClearFileRequest "class in com.jbase.jremote.protocol"), [CloseFileRequest](/39270-protocol/com_jbase_jremote_protocol_CloseFileRequest "class in com.jbase.jremote.protocol"), [CommitTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_CommitTransactionRequest "class in com.jbase.jremote.jca.inflow.protocol"), [CommitTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_CommitTransactionRequest "class in com.jbase.jremote.protocol"), [ConvRequest](/39270-protocol/com_jbase_jremote_protocol_ConvRequest "class in com.jbase.jremote.protocol"), [ConvResponse](/39270-protocol/com_jbase_jremote_protocol_ConvResponse "class in com.jbase.jremote.protocol"), [DateTimeRequest](/39270-protocol/com_jbase_jremote_protocol_DateTimeRequest "class in com.jbase.jremote.protocol"), [DateTimeResponse](/39270-protocol/com_jbase_jremote_protocol_DateTimeResponse "class in com.jbase.jremote.protocol"), [DeleteRecordRequest](/39270-protocol/com_jbase_jremote_protocol_DeleteRecordRequest "class in com.jbase.jremote.protocol"), [EchoRequest](/39270-protocol/com_jbase_jremote_protocol_EchoRequest "class in com.jbase.jremote.protocol"), [EchoResponse](/39270-protocol/com_jbase_jremote_protocol_echoresponse "class in com.jbase.jremote.protocol"), [EISMetaDataRequest](/39270-protocol/com_jbase_jremote_protocol_eismetadatarequest "class in com.jbase.jremote.protocol"), [EISMetaDataResponse](/39270-protocol/com_jbase_jremote_protocol_eismetadataresponse "class in com.jbase.jremote.protocol"), [ErrorResponse](/39250-io/com_jbase_jremote_io_errorresponse "class in com.jbase.jremote.io"), [ExistsRecordRequest](/39270-protocol/com_jbase_jremote_protocol_existsrecordrequest "class in com.jbase.jremote.protocol"), [InputOutputResponse](/39270-protocol/com_jbase_jremote_protocol_inputoutputresponse "class in com.jbase.jremote.protocol"), [JediResponse](/39270-protocol/com_jbase_jremote_protocol_jediresponse "class in com.jbase.jremote.protocol"), [JExecuteRequest](/39270-protocol/com_jbase_jremote_protocol_jexecuterequest "class in com.jbase.jremote.protocol"), [JExecuteResults](/39248-jremote/com_jbase_jremote_jexecuteresults "class in com.jbase.jremote"), [JRemoteRequest](/39270-protocol/com_jbase_jremote_protocol_jremoterequest "class in com.jbase.jremote.protocol"), [JRemoteResponse](/39270-protocol/com_jbase_jremote_protocol_jremoteresponse "class in com.jbase.jremote.protocol"), [JSelectListProt](/39270-protocol/com_jbase_jremote_protocol_jselectlistprot "class in com.jbase.jremote.protocol"), [JSubroutineParameters](/39248-jremote/com_jbase_jremote_jsubroutineparameters "class in com.jbase.jremote"), [MonitoringRequest](/39270-protocol/com_jbase_jremote_protocol_monitoringrequest "class in com.jbase.jremote.protocol"), [MonitoringResponse](/39270-protocol/com_jbase_jremote_protocol_monitoringresponse "class in com.jbase.jremote.protocol"), [NoEndpointActivatedResponse](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_noendpointactivatedresponse "class in com.jbase.jremote.jca.inflow.protocol"), [OKResponse](/39250-io/com_jbase_jremote_io_okresponse "class in com.jbase.jremote.io"), [OpenFileRequest](/39270-protocol/com_jbase_jremote_protocol_openfilerequest "class in com.jbase.jremote.protocol"), [ReadCommonRequest](/39270-protocol/com_jbase_jremote_protocol_readcommonrequest "class in com.jbase.jremote.protocol"), [ReadCommonResponse](/39270-protocol/com_jbase_jremote_protocol_readcommonresponse "class in com.jbase.jremote.protocol"), [ReadRecordRequest](/39270-protocol/com_jbase_jremote_protocol_readrecordrequest "class in com.jbase.jremote.protocol"), [ReleaseRecordLockRequest](/39270-protocol/com_jbase_jremote_protocol_releaserecordlockrequest "class in com.jbase.jremote.protocol"), [RemoteInputRequest](/39270-protocol/com_jbase_jremote_protocol_remoteinputrequest "class in com.jbase.jremote.protocol"), [Response](/39250-io/com_jbase_jremote_io_response "class in com.jbase.jremote.io"), [RollbackTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_RollbackTransactionRequest "class in com.jbase.jremote.jca.inflow.protocol"), [RollbackTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_RollbackTransactionRequest "class in com.jbase.jremote.protocol"), [SelectFileRequest](/39270-protocol/com_jbase_jremote_protocol_selectfilerequest "class in com.jbase.jremote.protocol"), [SelectListCloseRequest](/39270-protocol/com_jbase_jremote_protocol_selectlistcloserequest "class in com.jbase.jremote.protocol"), [SelectListCommitRequest](/39270-protocol/com_jbase_jremote_protocol_selectlistcommitrequest "class in com.jbase.jremote.protocol"), [SelectListFetchRequest](/39270-protocol/com_jbase_jremote_protocol_selectlistfetchrequest "class in com.jbase.jremote.protocol"), [SelectListFetchResponse](/39270-protocol/com_jbase_jremote_protocol_selectlistfetchresponse "class in com.jbase.jremote.protocol"), [SetPropertiesRequest](/39270-protocol/com_jbase_jremote_protocol_setpropertiesrequest "class in com.jbase.jremote.protocol"), [SetPropertiesResponse](/39270-protocol/com_jbase_jremote_protocol_setpropertiesresponse "class in com.jbase.jremote.protocol"), [SQLError](/39250-io/com_jbase_jremote_io_sqlerror "class in com.jbase.jremote.io"), [StartTransactionRequest](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_StartTransactionRequest "class in com.jbase.jremote.jca.inflow.protocol"), [StatementExecuteQueryRequest](/39270-protocol/com_jbase_jremote_protocol_statementexecutequeryrequest "class in com.jbase.jremote.protocol"), [StatementFetchRequest](/39270-protocol/com_jbase_jremote_protocol_statementfetchrequest "class in com.jbase.jremote.protocol"), [StatementFetchResponse](/39270-protocol/com_jbase_jremote_protocol_statementfetchresponse "class in com.jbase.jremote.protocol"), [SubroutineResponse](/39270-protocol/com_jbase_jremote_protocol_subroutineresponse "class in com.jbase.jremote.protocol"), [SwitchAccountRequest](/39270-protocol/com_jbase_jremote_protocol_switchaccountrequest "class in com.jbase.jremote.protocol"), [SwitchAccountResponse](/39270-protocol/com_jbase_jremote_protocol_switchaccountresponse "class in com.jbase.jremote.protocol"), [TransactionOperation](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_transactionoperation "class in com.jbase.jremote.jca.inflow.protocol"), [TransactionResponse](/39270-protocol/com_jbase_jremote_protocol_transactionresponse "class in com.jbase.jremote.protocol"), [WorkScheduledResponse](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_workscheduledresponse "class in com.jbase.jremote.jca.inflow.protocol"), [WriteRecordRequest](/39270-protocol/com_jbase_jremote_protocol_writerecordrequest "class in com.jbase.jremote.protocol"), [XACommitTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_xacommittransactionrequest "class in com.jbase.jremote.protocol"), [XAEndTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_xaendtransactionrequest "class in com.jbase.jremote.protocol"), [XAPrepareTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_xapreparetransactionrequest "class in com.jbase.jremote.protocol"), [XARollbackTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_xarollbacktransactionrequest "class in com.jbase.jremote.protocol"), [XAStartTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_xastarttransactionrequest "class in com.jbase.jremote.protocol"), [XAXid](/39270-protocol/com_jbase_jremote_protocol_xaxid "class in com.jbase.jremote.protocol")
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
