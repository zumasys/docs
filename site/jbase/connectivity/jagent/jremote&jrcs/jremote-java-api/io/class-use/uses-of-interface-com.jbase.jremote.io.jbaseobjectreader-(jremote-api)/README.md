# Uses of Interface com.jbase.jremote.io.JBaseObjectReader (jremote API)

<PageHeader />

## Uses of Interface
com.jbase.jremote.io.JBaseObjectReader

| Package<br> | Description<br> |
| --- | --- |
 Packages that use [JBaseObjectReader](./../../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io")  | com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.jca.inflow<br> |  <br> |
| com.jbase.jremote.jca.inflow.protocol<br> |  <br> |
| com.jbase.jremote.protocol<br> |  <br> |






### Uses of [JBaseObjectReader](./../../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote](./../../../../../jremote-api)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote](./../../../../../jremote-api) with parameters of type [JBaseObjectReader](./../../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `void`<br> | JSubroutineParameters.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | JExecuteResults.`readObject(JBaseObjectReader reader, int version)` <br> |






### Uses of [JBaseObjectReader](./../../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Classes in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29) that implement [JBaseObjectReader](./../../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `class `<br> | `AbstractJBaseObjectReader`<br>Deserializes JBaseSerializable objects sent from the jbase\_agent server, or any other source of serialized JCF objects.<br> |
| `class `<br> | `IOJBaseObjectReader`<br>jBase object reader based on the DataInputStream.<br> |
| `class `<br> | `NIOJBaseObjectReader`<br>jBase object reader based on the new Java IO.<br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29) with parameters of type [JBaseObjectReader](./../../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `void`<br> | SQLError.`readObject(JBaseObjectReader reader, int version)`<br>Method : readObject() Description: Read object off the wire.<br> |
| `void`<br> | OKResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | JBaseSerializable.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | ErrorResponse.`readObject(JBaseObjectReader reader, int version)` <br> |






### Uses of [JBaseObjectReader](./../../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29) with parameters of type [JBaseObjectReader](./../../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `protected InboundRequest`<br> | InboundRequestHandler.`readRequest(JBaseObjectReader reader)` <br> |





### Uses of [JBaseObjectReader](./../../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-%28jremote---api%29)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-%28jremote---api%29) with parameters of type [JBaseObjectReader](./../../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `void`<br> | WorkScheduledResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | TransactionOperation.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | StartTransactionRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | RollbackTransactionRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | NoEndpointActivatedResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | CommitTransactionRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | ActivationResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | ActivationRequest.`readObject(JBaseObjectReader reader, int version)` <br> |






### Uses of [JBaseObjectReader](./../../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-%28jremote-api%29)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-%28jremote-api%29) with parameters of type [JBaseObjectReader](./../../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `void`<br> | XAXid.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | WriteRecordRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | TransactionResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | SwitchAccountResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | SwitchAccountRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | SubroutineResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | StatementFetchResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | StatementFetchRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | StatementExecuteQueryRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | SetPropertiesResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | SetPropertiesRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | SelectListFetchResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | SelectListFetchRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | SelectListCommitRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | SelectListCloseRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | SelectFileRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | RemoteInputRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | ReleaseRecordLockRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | ReadRecordRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | ReadCommonResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | ReadCommonRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | OpenFileRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | MonitoringResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | MonitoringRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | JSelectListProt.`readObject(JBaseObjectReader reader, int version)`<br>Serialize object<br> |
| `void`<br> | JRemoteRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | JExecuteRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | JediResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | InputOutputResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | ExistsRecordRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | EISMetaDataResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | EISMetaDataRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | EchoResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | EchoRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | DeleteRecordRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | DateTimeResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | ConvResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | ConvRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | CloseFileRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | ClearFileRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | CallSubroutineRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | AuthenticationRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | AuthenticationRequest.UserCredentials.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | AccountAuthenticationRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | AccountAuthenticationRequest.AccountUserCredentials.`readObject(JBaseObjectReader reader, int version)` <br> |

Back to [jREMOTE API](com_jbase_jremote_package-summary)


