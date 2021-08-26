# Uses of Interface com.jbase.jremote.io.JBaseObjectWriter (jremote API)

<PageHeader />

## Uses of Interface

com.jbase.jremote.io.JBaseObjectWriter

| Package | Description |
| --- | --- |
 Packages that use [JBaseObjectWriter](./../../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io")  | com.jbase.jremote |   |
| com.jbase.jremote.io |   |
| com.jbase.jremote.jca.inflow |   |
| com.jbase.jremote.jca.inflow.protocol |   |
| com.jbase.jremote.protocol |   |

### Uses of [JBaseObjectWriter](./../../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote](./../../../../../jremote-api)

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote](./../../../../../jremote-api) with parameters of type [JBaseObjectWriter](./../../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io")  |
| `void`| JSubroutineParameters.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | JExecuteResults.`writeObject(JBaseObjectWriter writer, int version)`  |

### Uses of [JBaseObjectWriter](./../../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api))

| Modifier and Type | Class and Description |
| --- | --- |
 Classes in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api)) that implement [JBaseObjectWriter](./../../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io")  |
| `class` | `AbstractJBaseObjectWriter`  |
| `class` | `IOJBaseObjectWriter`<br>jBase object writer based on the DataOutputStream. |
| `class` | `NIOJBaseObjectWriter`<br>jBase object writer using the new Java IO. |

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api)) with parameters of type [JBaseObjectWriter](./../../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io")  |
| `void` | SQLError.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | OKResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | JBaseSerializable.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | ErrorResponse.`writeObject(JBaseObjectWriter writer, int version)`  |

### Uses of [JBaseObjectWriter](./../../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-(jremote---api))

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-(jremote---api)) with parameters of type [JBaseObjectWriter](./../../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io")  | `protected void` | InboundRequestHandler.`writeResponse(JBaseObjectWriter writer, JBaseSerializable response)` <br> |

### Uses of [JBaseObjectWriter](./../../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-(jremote---api))

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-(jremote---api)) with parameters of type [JBaseObjectWriter](./../../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io")  |
| `void` | WorkScheduledResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | TransactionOperation.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | StartTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | RollbackTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | NoEndpointActivatedResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | CommitTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | ActivationResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | ActivationRequest.`writeObject(JBaseObjectWriter writer, int version)`  |

### Uses of [JBaseObjectWriter](./../../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-(jremote-api))

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-(jremote-api)) with parameters of type [JBaseObjectWriter](./../../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io")  | 
| `void` | XAXid.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | XAStartTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | XARollbackTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | XAPrepareTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | XAEndTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | XACommitTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | WriteRecordRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | TransactionResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | SwitchAccountResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | SwitchAccountRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | SubroutineResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | StatementFetchResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | StatementFetchRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | StatementExecuteQueryRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | SetPropertiesResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | SetPropertiesRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | SelectListFetchResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | SelectListFetchRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | SelectListCommitRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | SelectListCloseRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | SelectFileRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | RemoteInputRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | ReleaseRecordLockRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | ReadRecordRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | ReadCommonResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | ReadCommonRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | OpenFileRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | MonitoringResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | MonitoringRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | JSelectListProt.`writeObject(JBaseObjectWriter writer, int version)`<br>Serialize object |
| `void` | JRemoteRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | JExecuteRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | JediResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | InputOutputResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | ExistsRecordRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | EISMetaDataResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | EISMetaDataRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | EchoResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | EchoRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | DeleteRecordRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | DateTimeResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | ConvResponse.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | ConvRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | CloseFileRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | ClearFileRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | CallSubroutineRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | AuthenticationRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | AuthenticationRequest.UserCredentials.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | AccountAuthenticationRequest.`writeObject(JBaseObjectWriter writer, int version)`  |
| `void` | AccountAuthenticationRequest.AccountUserCredentials.`writeObject(JBaseObjectWriter writer, int version)`  |

Back to [jRemote API](./../../README.md)

<PageFooter />
