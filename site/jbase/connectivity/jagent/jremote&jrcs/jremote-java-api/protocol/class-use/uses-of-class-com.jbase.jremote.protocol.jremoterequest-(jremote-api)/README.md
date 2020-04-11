# Uses of Class com.jbase.jremote.protocol.JRemoteRequest (jremote API)

<PageHeader />

## Uses of Class
com.jbase.jremote.protocol.JRemoteRequest

| Package<br> | Description<br> |
| --- | --- |
 Packages that use [JRemoteRequest](./../../jremoterequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")  | com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.protocol<br> |  <br> |





### Uses of [JRemoteRequest](./../../jremoterequest-%28jremote-api%29 "class in com.jbase.jremote.protocol") in [com.jbase.jremote.io](./../../../io/com.jbase.jremote.io-%28jremote---api%29)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../../io/com.jbase.jremote.io-%28jremote---api%29) with parameters of type [JRemoteRequest](./../../jremoterequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")  | `void`<br> | JRemoteSocketConnection.`send(JRemoteRequest request)` <br> |
| `void`<br> | InterceptorConnection.`send(JRemoteRequest request)` <br> |
| `abstract void`<br> | AbstractJRemoteConnection.`send(JRemoteRequest request)` <br> |
| `Response`<br> | JConnectionImpl.`sendWaitForResponse(JRemoteRequest req)`<br>Uses underlying connection to send a request and wait for the response.<br> |
| `Response`<br> | AbstractJRemoteConnection.`sendWaitForResponse(JRemoteRequest request)`<br>Convenient method which simply calls #send followed by #receive.<br> |






### Uses of [JRemoteRequest](./../../jremoterequest-%28jremote-api%29 "class in com.jbase.jremote.protocol") in [com.jbase.jremote.protocol](./../../com.jbase.jremote.protocol-%28jremote-api%29)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Subclasses of [JRemoteRequest](./../../jremoterequest-%28jremote-api%29 "class in com.jbase.jremote.protocol") in [com.jbase.jremote.protocol](./../../com.jbase.jremote.protocol-%28jremote-api%29)  | `class `<br> | `AccountAuthenticationRequest`<br>Request for authentication.<br> |
| `class `<br> | `AuthenticationRequest`<br>Request for authentication.<br> |
| `class `<br> | `BeginTransactionRequest`<br>Request to start transaction.<br> |
| `class `<br> | `CallSubroutineRequest` <br> |
| `class `<br> | `ClearFileRequest` <br> |
| `class `<br> | `CloseFileRequest`<br>Request jBASE to close a file.<br> |
| `class `<br> | `CommitTransactionRequest`<br>Request to commit transaction.<br> |
| `class `<br> | `ConvRequest` <br> |
| `class `<br> | `DateTimeRequest` <br> |
| `class `<br> | `DeleteRecordRequest` <br> |
| `class `<br> | `EchoRequest` <br> |
| `class `<br> | `EISMetaDataRequest`<br>Request jBASE to retrieve general meta data.<br> |
| `class `<br> | `ExistsRecordRequest`<br>Request jBASE to check whether a file record exists.<br> |
| `class `<br> | `JExecuteRequest` <br> |
| `class `<br> | `MonitoringRequest` <br> |
| `class `<br> | `OpenFileRequest` <br> |
| `class `<br> | `ReadCommonRequest`<br>Request to read common value.<br> |
| `class `<br> | `ReadRecordRequest` <br> |
| `class `<br> | `ReleaseRecordLockRequest`<br>Request jBASE to release a record lock.<br> |
| `class `<br> | `RemoteInputRequest` <br> |
| `class `<br> | `RollbackTransactionRequest`<br>Request to commit transaction.<br> |
| `class `<br> | `SelectFileRequest` <br> |
| `class `<br> | `SelectListCloseRequest` <br> |
| `class `<br> | `SelectListCommitRequest` <br> |
| `class `<br> | `SelectListFetchRequest` <br> |
| `class `<br> | `SetPropertiesRequest` <br> |
| `class `<br> | `StatementExecuteQueryRequest` <br> |
| `class `<br> | `StatementFetchRequest` <br> |
| `class `<br> | `SwitchAccountRequest` <br> |
| `class `<br> | `WriteRecordRequest` <br> |
| `class `<br> | `XACommitTransactionRequest`<br>Request jBASE commit an XA transaction.<br> |
| `class `<br> | `XAEndTransactionRequest`<br>Request jBASE end an XA transaction.<br> |
| `class `<br> | `XAPrepareTransactionRequest`<br>Request jBASE prepare an XA transaction.<br> |
| `class `<br> | `XARollbackTransactionRequest`<br>Request jBASE rollback an XA transaction.<br> |
| `class `<br> | `XAStartTransactionRequest`<br>Request jBASE start an XA transaction.<br> |

Back to [jREMOTE API](com_jbase_jremote_package-summary)

  
<PageFooter />
