# Uses of Interface com.jbase.jremote.io.JBaseObjectWriter (jremote API)

<PageHeader />

## Uses of Interface
com.jbase.jremote.io.JBaseObjectWriter

| Package<br> | Description<br> |
| --- | --- |
 Packages that use [JBaseObjectWriter](./../../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io")  | com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.jca.inflow<br> |  <br> |
| com.jbase.jremote.jca.inflow.protocol<br> |  <br> |
| com.jbase.jremote.protocol<br> |  <br> |



### Uses of [JBaseObjectWriter](./../../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote](./../../../../../jremote-api)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote](./../../../../../jremote-api) with parameters of type [JBaseObjectWriter](./../../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `void`<br> | JSubroutineParameters.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | JExecuteResults.`writeObject(JBaseObjectWriter writer, int version)` <br> |






### Uses of [JBaseObjectWriter](./../../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Classes in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29) that implement [JBaseObjectWriter](./../../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `class `<br> | `AbstractJBaseObjectWriter` <br> |
| `class `<br> | `IOJBaseObjectWriter`<br>jBase object writer based on the DataOutputStream.<br> |
| `class `<br> | `NIOJBaseObjectWriter`<br>jBase object writer using the new Java IO.<br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29) with parameters of type [JBaseObjectWriter](./../../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `void`<br> | SQLError.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | OKResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | JBaseSerializable.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | ErrorResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |






### Uses of [JBaseObjectWriter](./../../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29) with parameters of type [JBaseObjectWriter](./../../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `protected void`<br> | InboundRequestHandler.`writeResponse(JBaseObjectWriter writer, JBaseSerializable response)` <br> |






### Uses of [JBaseObjectWriter](./../../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-%28jremote---api%29)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-%28jremote---api%29) with parameters of type [JBaseObjectWriter](./../../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `void`<br> | WorkScheduledResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | TransactionOperation.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | StartTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | RollbackTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | NoEndpointActivatedResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | CommitTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | ActivationResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | ActivationRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |






### Uses of [JBaseObjectWriter](./../../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-%28jremote-api%29)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-%28jremote-api%29) with parameters of type [JBaseObjectWriter](./../../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `void`<br> | XAXid.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | XAStartTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | XARollbackTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | XAPrepareTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | XAEndTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | XACommitTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | WriteRecordRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | TransactionResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | SwitchAccountResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | SwitchAccountRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | SubroutineResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | StatementFetchResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | StatementFetchRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | StatementExecuteQueryRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | SetPropertiesResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | SetPropertiesRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | SelectListFetchResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | SelectListFetchRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | SelectListCommitRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | SelectListCloseRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | SelectFileRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | RemoteInputRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | ReleaseRecordLockRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | ReadRecordRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | ReadCommonResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | ReadCommonRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | OpenFileRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | MonitoringResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | MonitoringRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | JSelectListProt.`writeObject(JBaseObjectWriter writer, int version)`<br>Serialize object<br> |
| `void`<br> | JRemoteRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | JExecuteRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | JediResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | InputOutputResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | ExistsRecordRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | EISMetaDataResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | EISMetaDataRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | EchoResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | EchoRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | DeleteRecordRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | DateTimeResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | ConvResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | ConvRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | CloseFileRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | ClearFileRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | CallSubroutineRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | AuthenticationRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | AuthenticationRequest.UserCredentials.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | AccountAuthenticationRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | AccountAuthenticationRequest.AccountUserCredentials.`writeObject(JBaseObjectWriter writer, int version)` <br> |

Back to [jREMOTE API](com_jbase_jremote_package-summary)


