# Uses of Interface com.jbase.jremote.io.JBaseSerializable (jremote API)

<PageHeader />

## Uses of Interface
com.jbase.jremote.io.JBaseSerializable

| Package<br> | Description<br> |
| --- | --- |
 Packages that use [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")  | com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.jca.inflow<br> |  <br> |
| com.jbase.jremote.jca.inflow.protocol<br> |  <br> |
| com.jbase.jremote.protocol<br> |  <br> |







### Uses of [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote](./../../../../../jremote-api)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Classes in [com.jbase.jremote](./../../../../../jremote-api) that implement [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `class `<br> | `JExecuteResults`<br>The results from an executed command.<br> |
| `class `<br> | `JSubroutineParameters`<br>A list of parameters to pass to a jBASE subroutine.<br> |






### Uses of [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Classes in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29) that implement [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `class `<br> | `ErrorResponse` <br> |
| `class `<br> | `OKResponse` <br> |
| `class `<br> | `Response`<br>Represents a response from jsqld.<br> |
| `class `<br> | `SQLError` <br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29) that return [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `protected JBaseSerializable`<br> | ObjectFactory.`createGenericObjects(int objectType)`<br>Creates any generic (i.e common to all framework clients) objects.<br> |
| `protected abstract JBaseSerializable`<br> | ObjectFactory.`createObject(int objectType)`<br>Create JBaseSerializable object from the supplied object type.<br> |
| `protected JBaseSerializable`<br> | JRemoteObjectFactory.`createObject(int objectType)` <br> |
| `protected JBaseSerializable`<br> | AbstractJBaseObjectReader.`readJBaseSerializableObject(char code, JBaseSerializable o)` <br> |
| `JBaseSerializable`<br> | JBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, a JBaseSerializable object should be created and returned if a null argument is passed in.<br> |
| `JBaseSerializable`<br> | AbstractJBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, the ObjectFactory will be used to create a JBaseSerializable object if a null argument is passed in.<br> |
| `JBaseSerializable`<br> | JBaseObjectReader.`readRootObject()`<br>Deserializes a root object.<br> |
| `JBaseSerializable`<br> | AbstractJBaseObjectReader.`readRootObject()` <br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29) with parameters of type [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `protected JBaseSerializable`<br> | AbstractJBaseObjectReader.`readJBaseSerializableObject(char code, JBaseSerializable o)` <br> |
| `JBaseSerializable`<br> | JBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, a JBaseSerializable object should be created and returned if a null argument is passed in.<br> |
| `JBaseSerializable`<br> | AbstractJBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, the ObjectFactory will be used to create a JBaseSerializable object if a null argument is passed in.<br> |
| `protected void`<br> | AbstractJBaseObjectWriter.`writeJBaseSerializableObject(JBaseSerializable o)` <br> |
| `void`<br> | JBaseObjectWriter.`writeObject(JBaseSerializable o)` <br> |
| `void`<br> | AbstractJBaseObjectWriter.`writeObject(JBaseSerializable o)` <br> |
| `void`<br> | JBaseObjectWriter.`writeRootObject(JBaseSerializable o)` <br> |
| `void`<br> | AbstractJBaseObjectWriter.`writeRootObject(JBaseSerializable o)` <br> |






### Uses of [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29) that return [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `JBaseSerializable`<br> | InboundObjectFactory.`createObject(int type)` <br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29) with parameters of type [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `protected void`<br> | InboundRequestHandler.`writeResponse(JBaseObjectWriter writer, JBaseSerializable response)` <br> |






### Uses of [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-%28jremote---api%29)


| Modifier and Type<br> | Interface and Description<br> |
| --- | --- |
 Subinterfaces of [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-%28jremote---api%29)  | `interface `<br> | `InboundRequest` <br> |



| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Classes in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-%28jremote---api%29) that implement [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `class `<br> | `ActivationRequest` <br> |
| `class `<br> | `ActivationResponse`<br>The reply from JRemote when an activation is requested.<br> |
| `class `<br> | `CommitTransactionRequest` <br> |
| `class `<br> | `NoEndpointActivatedResponse`<br>The reply from JRemote when no endpoint could be found for activation.<br> |
| `class `<br> | `RollbackTransactionRequest` <br> |
| `class `<br> | `StartTransactionRequest` <br> |
| `class `<br> | `TransactionOperation` <br> |
| `class `<br> | `WorkScheduledResponse`<br>The reply from JRemote when an activation request (Work instance) has been passed to the work manager.<br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-%28jremote---api%29) that return [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `JBaseSerializable`<br> | StartTransactionRequest.`execute(ClientHandle handle, RequestHandler handler)` <br> |
| `JBaseSerializable`<br> | RollbackTransactionRequest.`execute(ClientHandle handle, RequestHandler handler)` <br> |
| `JBaseSerializable`<br> | InboundRequest.`execute(ClientHandle handle, RequestHandler handler)` <br> |
| `JBaseSerializable`<br> | CommitTransactionRequest.`execute(ClientHandle handle, RequestHandler handler)` <br> |
| `JBaseSerializable`<br> | ActivationRequest.`execute(ClientHandle handle, RequestHandler handler)` <br> |






### Uses of [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-%28jremote-api%29)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Classes in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-%28jremote-api%29) that implement [JBaseSerializable](./../../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `class `<br> | `AccountAuthenticationRequest`<br>Request for authentication.<br> |
| `static class `<br> | `AccountAuthenticationRequest.AccountUserCredentials` <br> |
| `class `<br> | `AuthenticationRequest`<br>Request for authentication.<br> |
| `static class `<br> | `AuthenticationRequest.UserCredentials` <br> |
| `class `<br> | `BeginTransactionRequest`<br>Request to start transaction.<br> |
| `class `<br> | `CallSubroutineRequest` <br> |
| `class `<br> | `ClearFileRequest` <br> |
| `class `<br> | `CloseFileRequest`<br>Request jBASE to close a file.<br> |
| `class `<br> | `ConvRequest` <br> |
| `class `<br> | `ConvResponse` <br> |
| `class `<br> | `DateTimeRequest` <br> |
| `class `<br> | `DateTimeResponse` <br> |
| `class `<br> | `DeleteRecordRequest` <br> |
| `class `<br> | `EchoRequest` <br> |
| `class `<br> | `EchoResponse` <br> |
| `class `<br> | `EISMetaDataRequest`<br>Request jBASE to retrieve general meta data.<br> |
| `class `<br> | `EISMetaDataResponse`<br>Response object which reads general meta data of the underlying EIS instance.<br> |
| `class `<br> | `ExistsRecordRequest`<br>Request jBASE to check whether a file record exists.<br> |
| `class `<br> | `InputOutputResponse` <br> |
| `class `<br> | `JediResponse` <br> |
| `class `<br> | `JExecuteRequest` <br> |
| `class `<br> | `JRemoteRequest` <br> |
| `class `<br> | `JRemoteResponse` <br> |
| `class `<br> | `JSelectListProt`<br>A serializable list of jBASE file records.<br> |
| `class `<br> | `MonitoringRequest` <br> |
| `class `<br> | `MonitoringResponse` <br> |
| `class `<br> | `OpenFileRequest` <br> |
| `class `<br> | `ReadCommonRequest`<br>Request to read common value.<br> |
| `class `<br> | `ReadCommonResponse` <br> |
| `class `<br> | `ReadRecordRequest` <br> |
| `class `<br> | `ReleaseRecordLockRequest`<br>Request jBASE to release a record lock.<br> |
| `class `<br> | `RemoteInputRequest` <br> |
| `class `<br> | `SelectFileRequest` <br> |
| `class `<br> | `SelectListCloseRequest` <br> |
| `class `<br> | `SelectListCommitRequest` <br> |
| `class `<br> | `SelectListFetchRequest` <br> |
| `class `<br> | `SelectListFetchResponse` <br> |
| `class `<br> | `SetPropertiesRequest` <br> |
| `class `<br> | `SetPropertiesResponse` <br> |
| `class `<br> | `StatementExecuteQueryRequest` <br> |
| `class `<br> | `StatementFetchRequest` <br> |
| `class `<br> | `StatementFetchResponse` <br> |
| `class `<br> | `SubroutineResponse` <br> |
| `class `<br> | `SwitchAccountRequest` <br> |
| `class `<br> | `SwitchAccountResponse` <br> |
| `class `<br> | `TransactionResponse`<br>Response to transactions related requests.<br> |
| `class `<br> | `WriteRecordRequest` <br> |
| `class `<br> | `XACommitTransactionRequest`<br>Request jBASE commit an XA transaction.<br> |
| `class `<br> | `XAEndTransactionRequest`<br>Request jBASE end an XA transaction.<br> |
| `class `<br> | `XAPrepareTransactionRequest`<br>Request jBASE prepare an XA transaction.<br> |
| `class `<br> | `XARollbackTransactionRequest`<br>Request jBASE rollback an XA transaction.<br> |
| `class `<br> | `XAStartTransactionRequest`<br>Request jBASE start an XA transaction.<br> |
| `class `<br> | `XAXid` <br> |

Back to [jREMOTE API](com_jbase_jremote_package-summary)

  
<PageFooter />
