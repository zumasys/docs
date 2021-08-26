# Uses of Interface com.jbase.jremote.io.JBaseObjectReader (jremote API)

<PageHeader />

## Uses of Interface

com.jbase.jremote.io.JBaseObjectReader

| Package | Description |
| --- | --- |
 Packages that use [JBaseObjectReader](./../../jbaseobjectreader-(jremote-api) "interface in com.jbase.jremote.io")  | com.jbase.jremote |   |
| com.jbase.jremote.io |   |
| com.jbase.jremote.jca.inflow |   |
| com.jbase.jremote.jca.inflow.protocol |   |
| com.jbase.jremote.protocol |   |

### Uses of [JBaseObjectReader](./../../jbaseobjectreader-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote](./../../../../../jremote-api)

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote](./../../../../../jremote-api) with parameters of type [JBaseObjectReader](./../../jbaseobjectreader-(jremote-api) "interface in com.jbase.jremote.io")  | `void`<br> | JSubroutineParameters.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | JExecuteResults.`readObject(JBaseObjectReader reader, int version)`  |

### Uses of [JBaseObjectReader](./../../jbaseobjectreader-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api))

| Modifier and Type | Class and Description |
| --- | --- |
 Classes in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api)) that implement [JBaseObjectReader](./../../jbaseobjectreader-(jremote-api) "interface in com.jbase.jremote.io")  |
| `class` | `AbstractJBaseObjectReader`<br>Deserializes JBaseSerializable objects sent from the jbase\_agent server, or any other source of serialized JCF objects. |
| `class` | `IOJBaseObjectReader`<br>jBase object reader based on the DataInputStream. |
| `class` | `NIOJBaseObjectReader`<br>jBase object reader based on the new Java IO. |

| Modifier and Type | Method and Description |
| --- | --- |
| Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api)) with parameters of type [JBaseObjectReader](./../../jbaseobjectreader-(jremote-api) "interface in com.jbase.jremote.io")  | `void`<br> | SQLError.`readObject(JBaseObjectReader reader, int version)`<br>Method : readObject() Description: Read object off the wire. |
| `void` | OKResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | JBaseSerializable.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | ErrorResponse.`readObject(JBaseObjectReader reader, int version)`  |

### Uses of [JBaseObjectReader](./../../jbaseobjectreader-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-(jremote---api))

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-(jremote---api)) with parameters of type [JBaseObjectReader](./../../jbaseobjectreader-(jremote-api) "interface in com.jbase.jremote.io")  | `protected InboundRequest`<br> | InboundRequestHandler.`readRequest(JBaseObjectReader reader)`  |

### Uses of [JBaseObjectReader](./../../jbaseobjectreader-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-(jremote---api))

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-(jremote---api)) with parameters of type [JBaseObjectReader](./../../jbaseobjectreader-(jremote-api) "interface in com.jbase.jremote.io")  |
| `void`| WorkScheduledResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | TransactionOperation.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | StartTransactionRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | RollbackTransactionRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | NoEndpointActivatedResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | CommitTransactionRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | ActivationResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | ActivationRequest.`readObject(JBaseObjectReader reader, int version)`  |

### Uses of [JBaseObjectReader](./../../jbaseobjectreader-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-(jremote-api))

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-(jremote-api)) with parameters of type [JBaseObjectReader](./../../jbaseobjectreader-(jremote-api) "interface in com.jbase.jremote.io")  | 
|`void`  | XAXid.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | WriteRecordRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | TransactionResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | SwitchAccountResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | SwitchAccountRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | SubroutineResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | StatementFetchResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | StatementFetchRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | StatementExecuteQueryRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | SetPropertiesResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | SetPropertiesRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | SelectListFetchResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | SelectListFetchRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | SelectListCommitRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | SelectListCloseRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | SelectFileRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | RemoteInputRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | ReleaseRecordLockRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | ReadRecordRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | ReadCommonResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | ReadCommonRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | OpenFileRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | MonitoringResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | MonitoringRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | JSelectListProt.`readObject(JBaseObjectReader reader, int version)`<br>Serialize object |
| `void` | JRemoteRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | JExecuteRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | JediResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | InputOutputResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | ExistsRecordRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | EISMetaDataResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | EISMetaDataRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | EchoResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | EchoRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | DeleteRecordRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | DateTimeResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | ConvResponse.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | ConvRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | CloseFileRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | ClearFileRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | CallSubroutineRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | AuthenticationRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | AuthenticationRequest.UserCredentials.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | AccountAuthenticationRequest.`readObject(JBaseObjectReader reader, int version)`  |
| `void` | AccountAuthenticationRequest.AccountUserCredentials.`readObject(JBaseObjectReader reader, int version)`  |

Back to [jRemote API](./../../README.md)

<PageFooter />
