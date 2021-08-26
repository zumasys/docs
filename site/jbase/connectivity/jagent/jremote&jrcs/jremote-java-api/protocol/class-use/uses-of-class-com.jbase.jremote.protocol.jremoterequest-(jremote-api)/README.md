# Uses of Class com.jbase.jremote.protocol.JRemoteRequest (jremote API)

<PageHeader />

## Uses of Class

com.jbase.jremote.protocol.JRemoteRequest

| Package |
| --- |
| Packages that use [JRemoteRequest](./../../jremoterequest-(jremote-api) "class in com.jbase.jremote.protocol")  |
| com.jbase.jremote.io |
| com.jbase.jremote.protocol |

### Uses of [JRemoteRequest](./../../jremoterequest-(jremote-api) "class in com.jbase.jremote.protocol") in [com.jbase.jremote.io](./../../../io/com.jbase.jremote.io-(jremote---api))

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../../io/com.jbase.jremote.io-(jremote---api)) with parameters of type [JRemoteRequest](./../../jremoterequest-(jremote-api) "class in com.jbase.jremote.protocol")  | 
| `void` | JRemoteSocketConnection.`send(JRemoteRequest request)`  |
| `void` | InterceptorConnection.`send(JRemoteRequest request)`  |
| `abstract void` | AbstractJRemoteConnection.`send(JRemoteRequest request)`  |
| `Response` | JConnectionImpl.`sendWaitForResponse(JRemoteRequest req)`<br>Uses underlying connection to send a request and wait for the response. |
| `Response` | AbstractJRemoteConnection.`sendWaitForResponse(JRemoteRequest request)`<br>Convenient method which simply calls #send followed by #receive. |

### Uses of [JRemoteRequest](./../../jremoterequest-(jremote-api) "class in com.jbase.jremote.protocol") in [com.jbase.jremote.protocol](./../../com.jbase.jremote.protocol-(jremote-api))

| Modifier and Type | Class and Description |
| --- | --- |
 Subclasses of [JRemoteRequest](./../../jremoterequest-(jremote-api) "class in com.jbase.jremote.protocol") in [com.jbase.jremote.protocol](./../../com.jbase.jremote.protocol-(jremote-api))  |
| `class` | `AccountAuthenticationRequest`<br>Request for authentication. |
| `class` | `AuthenticationRequest`<br>Request for authentication. |
| `class` | `BeginTransactionRequest`<br>Request to start transaction. |
| `class` | `CallSubroutineRequest`  |
| `class` | `ClearFileRequest`  |
| `class` | `CloseFileRequest`<br>Request jBASE to close a file. |
| `class` | `CommitTransactionRequest`<br>Request to commit transaction. |
| `class` | `ConvRequest`  |
| `class` | `DateTimeRequest`  |
| `class` | `DeleteRecordRequest`  |
| `class` | `EchoRequest`  |
| `class` | `EISMetaDataRequest`<br>Request jBASE to retrieve general meta data. |
| `class` | `ExistsRecordRequest`<br>Request jBASE to check whether a file record exists. |
| `class` | `JExecuteRequest`  |
| `class` | `MonitoringRequest`  |
| `class` | `OpenFileRequest`  |
| `class` | `ReadCommonRequest`<br>Request to read common value. |
| `class` | `ReadRecordRequest`  |
| `class` | `ReleaseRecordLockRequest`<br>Request jBASE to release a record lock. |
| `class` | `RemoteInputRequest`  |
| `class` | `RollbackTransactionRequest`<br>Request to commit transaction. |
| `class` | `SelectFileRequest`  |
| `class` | `SelectListCloseRequest`  |
| `class` | `SelectListCommitRequest`  |
| `class` | `SelectListFetchRequest`  |
| `class` | `SetPropertiesRequest`  |
| `class` | `StatementExecuteQueryRequest`  |
| `class` | `StatementFetchRequest`  |
| `class` | `SwitchAccountRequest`  |
| `class` | `WriteRecordRequest`  |
| `class` | `XACommitTransactionRequest`<br>Request jBASE commit an XA transaction. |
| `class` | `XAEndTransactionRequest`<br>Request jBASE end an XA transaction. |
| `class` | `XAPrepareTransactionRequest`<br>Request jBASE prepare an XA transaction. |
| `class` | `XARollbackTransactionRequest`<br>Request jBASE rollback an XA transaction. |
| `class` | `XAStartTransactionRequest`<br>Request jBASE start an XA transaction. |

Back to [jRemote API](./../../README.md)
  
<PageFooter />
