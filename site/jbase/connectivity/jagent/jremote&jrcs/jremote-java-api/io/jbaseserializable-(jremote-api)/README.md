# JBaseSerializable (jremote API)

<PageHeader />

## Interface JBaseSerializable

All Known Subinterfaces:[InboundRequest](./../../jca/inflow/protocol/inboundrequest-(jremote-api) "interface in com.jbase.jremote.jca.inflow.protocol")  
All Known Implementing Classes:[AccountAuthenticationRequest](./../../protocol/accountauthenticationrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [AccountAuthenticationRequest.AccountUserCredentials](./../../protocol/accountauthenticationrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [ActivationRequest](./../../jca/inflow/protocol/activationrequest-(jremote-api) "class in com.jbase.jremote.jca.inflow.protocol"), [ActivationResponse](./../../jca/inflow/protocol/activationresponse-(jremote-api) "class in com.jbase.jremote.jca.inflow.protocol"), [AuthenticationRequest](./../../protocol/authenticationrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [BeginTransactionRequest](./../../protocol/begintransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [CallSubroutineRequest](./../../protocol/callsubroutinerequest-(jremote-api) "class in com.jbase.jremote.protocol"), [ClearFileRequest](./../../protocol/clearfilerequest-(jremote-api) "class in com.jbase.jremote.protocol"), [CloseFileRequest](./../../protocol/closefilerequest-(jremote-api) "class in com.jbase.jremote.protocol"), [CommitTransactionRequest](./../../protocol/committransactionrequest-(jremote-api) "class in com.jbase.jremote.jca.inflow.protocol"), [CommitTransactionRequest](./../../protocol/committransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [ConvRequest](./../../protocol/convrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [ConvResponse](./../../protocol/convresponse-(jremote-api) "class in com.jbase.jremote.protocol"), [DateTimeRequest](./../../protocol/datetimerequest-(jremote-api) "class in com.jbase.jremote.protocol"), [DateTimeResponse](./../../protocol/datetimeresponse-(jremote-api) "class in com.jbase.jremote.protocol"), [DeleteRecordRequest](./../../protocol/deleterecordrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [EchoRequest](./../../protocol/echorequest-(jremote-api) "class in com.jbase.jremote.protocol"), [EchoResponse](./../../protocol/echoresponse-(jremote-api) "class in com.jbase.jremote.protocol"), [EISMetaDataRequest](./../../protocol/eismetadatarequest-(jremote-api) "class in com.jbase.jremote.protocol"), [EISMetaDataResponse](./../../protocol/eismetadataresponse-(jremote-api) "class in com.jbase.jremote.protocol"), [ErrorResponse](./../errorresponse-(jremote-api) "class in com.jbase.jremote.io"), [ExistsRecordRequest](./../../protocol/existsrecordrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [InputOutputResponse](./../../protocol/inputoutputresponse-(jremote-api) "class in com.jbase.jremote.protocol"), [JediResponse](./../../protocol/jediresponse-(jremote-api) "class in com.jbase.jremote.protocol"), [JExecuteRequest](./../../protocol/jexecuterequest-(jremote-api) "class in com.jbase.jremote.protocol"), [JExecuteResults](./../../jexecuteresults-(jremote-api) "class in com.jbase.jremote"), [JRemoteRequest](./../../protocol/jremoterequest-(jremote-api) "class in com.jbase.jremote.protocol"), [JRemoteResponse](./../../protocol/jremoteresponse-(jremote-api) "class in com.jbase.jremote.protocol"), [JSelectListProt](./../../protocol/jselectlistprot-(jremote-api) "class in com.jbase.jremote.protocol"), [JSubroutineParameters](./../../jsubroutineparameters-(jremote-api) "class in com.jbase.jremote"), [MonitoringRequest](./../../protocol/monitoringrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [MonitoringResponse](./../../protocol/monitoringresponse-(jremote-api) "class in com.jbase.jremote.protocol"), [NoEndpointActivatedResponse](./../../jca/inflow/protocol/noendpointactivatedresponse-(jremote-api) "class in com.jbase.jremote.jca.inflow.protocol"), [OKResponse](./../okresponse-(jremote-api) "class in com.jbase.jremote.io"), [OpenFileRequest](./../../protocol/openfilerequest-(jremote-api) "class in com.jbase.jremote.protocol"), [ReadCommonRequest](./../../protocol/readcommonrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [ReadCommonResponse](./../../protocol/readcommonresponse-(jremote-api) "class in com.jbase.jremote.protocol"), [ReadRecordRequest](./../../protocol/readrecordrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [ReleaseRecordLockRequest](./../../protocol/releaserecordlockrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [RemoteInputRequest](./../../protocol/remoteinputrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [Response](./../response-(jremote-api) "class in com.jbase.jremote.io"), [RollbackTransactionRequest](./../../protocol/rollbacktransactionrequest-(jremote-api) "class in com.jbase.jremote.jca.inflow.protocol"), [RollbackTransactionRequest](./../../protocol/rollbacktransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [SelectFileRequest](./../../protocol/selectfilerequest-(jremote-api) "class in com.jbase.jremote.protocol"), [SelectListCloseRequest](./../../protocol/selectlistcloserequest-(jremote-api) "class in com.jbase.jremote.protocol"), [SelectListCommitRequest](./../../protocol/selectlistcommitrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [SelectListFetchRequest](./../../protocol/selectlistfetchrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [SelectListFetchResponse](./../../protocol/selectlistfetchresponse-(jremote-api) "class in com.jbase.jremote.protocol"), [SetPropertiesRequest](./../../protocol/setpropertiesrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [SetPropertiesResponse](./../../protocol/setpropertiesresponse-(jremote-api) "class in com.jbase.jremote.protocol"), [SQLError](./../sqlerror-(jremote-api) "class in com.jbase.jremote.io"), [StartTransactionRequest](./../../jca/inflow/protocol/starttransactionrequest-(jremote-api) "class in com.jbase.jremote.jca.inflow.protocol"), [StatementExecuteQueryRequest](./../../protocol/statementexecutequeryrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [StatementFetchRequest](./../../protocol/statementfetchrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [StatementFetchResponse](./../../protocol/statementfetchresponse-(jremote-api) "class in com.jbase.jremote.protocol"), [SubroutineResponse](./../../protocol/subroutineresponse-(jremote-api) "class in com.jbase.jremote.protocol"), [SwitchAccountRequest](./../../protocol/switchaccountrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [SwitchAccountResponse](./../../protocol/switchaccountresponse-(jremote-api) "class in com.jbase.jremote.protocol"), [TransactionOperation](./../../jca/inflow/protocol/transactionoperation-(jremote-api) "class in com.jbase.jremote.jca.inflow.protocol"), [TransactionResponse](./../../protocol/transactionresponse-(jremote-api) "class in com.jbase.jremote.protocol"), [WorkScheduledResponse](./../../jca/inflow/protocol/workscheduledresponse-(jremote-api) "class in com.jbase.jremote.jca.inflow.protocol"), [WriteRecordRequest](./../../protocol/writerecordrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [XACommitTransactionRequest](./../../protocol/xacommittransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [XAEndTransactionRequest](./../../protocol/xaendtransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [XAPrepareTransactionRequest](./../../protocol/xapreparetransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [XARollbackTransactionRequest](./../../protocol/xarollbacktransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [XAStartTransactionRequest](./../../protocol/xastarttransactionrequest-(jremote-api) "class in com.jbase.jremote.protocol"), [XAXid](./../../protocol/xaxid-(jremote-api) "class in com.jbase.jremote.protocol")
* * *

```java
public interface JBaseSerializable
```

Interface which must be implemented by objects which take part in the JDBC driver jbase\_agent communication.  

## Note

>The interface is not compatible with standard Java java.io.Serializable. This is because we do not intend to implement Java serialization protocol for our purposes (note: this is about Java C++ communication).  
>Each class implementing this interface should have a counterpart on the server side with compatible serializing/deserializing protocol.

### Nested Class Summary

| Modifier and Type | Interface and Description |
| --- | --- |
| `static interface ` | `JBaseSerializable.TYPE`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

### Method Detail

#### writeObject

```java
void writeObject(JBaseObjectWriter writer,
                 int version)
          throws IOException
```

Throws:`IOException`

#### readObject

```java
void readObject(JBaseObjectReader reader,
                int version)
         throws IOException,
                ClassNotFoundException
```

Throws:`IOException`,`ClassNotFoundException`

#### getType

```java
int getType()
```

Returns:type id of the objects, used during the serialization

#### getVersion

```java
int getVersion()
```

Back to [jRemote API](./../../README.md)

<PageFooter />
