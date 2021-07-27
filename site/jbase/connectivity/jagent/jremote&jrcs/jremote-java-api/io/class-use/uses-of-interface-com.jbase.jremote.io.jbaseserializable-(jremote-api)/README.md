# Uses of Interface com.jbase.jremote.io.JBaseSerializable (jremote API)

<PageHeader />

## Uses of Interface

com.jbase.jremote.io.JBaseSerializable

| Package | Description |
| --- | --- |
 Packages that use [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")  | com.jbase.jremote |   |
| com.jbase.jremote.io |   |
| com.jbase.jremote.jca.inflow |   |
| com.jbase.jremote.jca.inflow.protocol |   |
| com.jbase.jremote.protocol |   |

### Uses of [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote](./../../../../../jremote-api)

| Modifier and Type | Class and Description |
| --- | --- |
 Classes in [com.jbase.jremote](./../../../../../jremote-api) that implement [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")  |
| `class` | `JExecuteResults`<br>The results from an executed command. |
| `class` | `JSubroutineParameters`<br>A list of parameters to pass to a jBASE subroutine. |

### Uses of [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api))

| Modifier and Type | Class and Description |
| --- | --- |
 Classes in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api)) that implement [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")  |
| `class` | `ErrorResponse`  |
| `class` | `OKResponse`  |
| `class` | `Response`<br>Represents a response from jsqld. |
| `class` | `SQLError`  |

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api)) that return [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")  |
| `protected JBaseSerializable` | ObjectFactory.`createGenericObjects(int objectType)`<br>Creates any generic (i.e common to all framework clients) objects. |
| `protected abstract JBaseSerializable` | ObjectFactory.`createObject(int objectType)`<br>Create JBaseSerializable object from the supplied object type. |
| `protected JBaseSerializable` | JRemoteObjectFactory.`createObject(int objectType)`  |
| `protected JBaseSerializable` | AbstractJBaseObjectReader.`readJBaseSerializableObject(char code, JBaseSerializable o)`  |
| `JBaseSerializable` | JBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, a JBaseSerializable object should be created and returned if a null argument is passed in. |
| `JBaseSerializable` | AbstractJBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, the ObjectFactory will be used to create a JBaseSerializable object if a null argument is passed in. |
| `JBaseSerializable` | JBaseObjectReader.`readRootObject()`<br>Deserializes a root object. |
| `JBaseSerializable` | AbstractJBaseObjectReader.`readRootObject()`  |

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api)) with parameters of type [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")  |
| `protected JBaseSerializable` | AbstractJBaseObjectReader.`readJBaseSerializableObject(char code, JBaseSerializable o)`  |
| `JBaseSerializable` | JBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, a JBaseSerializable object should be created and returned if a null argument is passed in. |
| `JBaseSerializable` | AbstractJBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, the ObjectFactory will be used to create a JBaseSerializable object if a null argument is passed in. |
| `protected void` | AbstractJBaseObjectWriter.`writeJBaseSerializableObject(JBaseSerializable o)`  |
| `void` | JBaseObjectWriter.`writeObject(JBaseSerializable o)`  |
| `void` | AbstractJBaseObjectWriter.`writeObject(JBaseSerializable o)`  |
| `void` | JBaseObjectWriter.`writeRootObject(JBaseSerializable o)`  |
| `void` | AbstractJBaseObjectWriter.`writeRootObject(JBaseSerializable o)`  |

### Uses of [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-(jremote---api))

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-(jremote---api)) that return [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")  |
| `JBaseSerializable` | InboundObjectFactory.`createObject(int type)`  |

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-(jremote---api)) with parameters of type [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")  |
| `protected void` | InboundRequestHandler.`writeResponse(JBaseObjectWriter writer, JBaseSerializable response)`  |

### Uses of [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-(jremote---api))

| Modifier and Type | Interface and Description |
| --- | --- |
 Subinterfaces of [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-(jremote---api))  |
| `interface` | `InboundRequest`  |

| Modifier and Type | Class and Description |
| --- | --- |
 Classes in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-(jremote---api)) that implement [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")  | 
| `class` | `ActivationRequest`  |
| `class` | `ActivationResponse`<br>The reply from JRemote when an activation is requested. |
| `class` | `CommitTransactionRequest`  |
| `class` | `NoEndpointActivatedResponse`<br>The reply from JRemote when no endpoint could be found for activation. |
| `class` | `RollbackTransactionRequest`  |
| `class` | `StartTransactionRequest`  |
| `class` | `TransactionOperation`  |
| `class` | `WorkScheduledResponse`<br>The reply from JRemote when an activation request (Work instance) has been passed to the work manager. |

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.jca.inflow.protocol](./../../../jca/inflow/protocol/com.jbase.jremote.jca.inflow.protocol-(jremote---api)) that return [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")  | `JBaseSerializable`<br> | StartTransactionRequest.`execute(ClientHandle handle, RequestHandler handler)`  |
| `JBaseSerializable` | RollbackTransactionRequest.`execute(ClientHandle handle, RequestHandler handler)`  |
| `JBaseSerializable` | InboundRequest.`execute(ClientHandle handle, RequestHandler handler)`  |
| `JBaseSerializable` | CommitTransactionRequest.`execute(ClientHandle handle, RequestHandler handler)`  |
| `JBaseSerializable` | ActivationRequest.`execute(ClientHandle handle, RequestHandler handler)`  |

### Uses of [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-(jremote-api))

| Modifier and Type | Class and Description |
| --- | --- |
 Classes in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-(jremote-api)) that implement [JBaseSerializable](./../../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")  | 
| `class` | `AccountAuthenticationRequest`<br>Request for authentication. |
| `static class` | `AccountAuthenticationRequest.AccountUserCredentials`  |
| `class` | `AuthenticationRequest`<br>Request for authentication. |
| `static class` | `AuthenticationRequest.UserCredentials`  |
| `class` | `BeginTransactionRequest`<br>Request to start transaction. |
| `class` | `CallSubroutineRequest`  |
| `class` | `ClearFileRequest`  |
| `class` | `CloseFileRequest`<br>Request jBASE to close a file. |
| `class` | `ConvRequest`  |
| `class` | `ConvResponse`  |
| `class` | `DateTimeRequest`  |
| `class` | `DateTimeResponse`  |
| `class` | `DeleteRecordRequest`  |
| `class` | `EchoRequest`  |
| `class` | `EchoResponse`  |
| `class` | `EISMetaDataRequest`<br>Request jBASE to retrieve general meta data. |
| `class` | `EISMetaDataResponse`<br>Response object which reads general meta data of the underlying EIS instance. |
| `class` | `ExistsRecordRequest`<br>Request jBASE to check whether a file record exists. |
| `class` | `InputOutputResponse`  |
| `class` | `JediResponse`  |
| `class` | `JExecuteRequest`  |
| `class` | `JRemoteRequest`  |
| `class` | `JRemoteResponse`  |
| `class` | `JSelectListProt`<br>A serializable list of jBASE file records. |
| `class` | `MonitoringRequest`  |
| `class` | `MonitoringResponse`  |
| `class` | `OpenFileRequest`  |
| `class` | `ReadCommonRequest`<br>Request to read common value. |
| `class` | `ReadCommonResponse`  |
| `class` | `ReadRecordRequest`  |
| `class` | `ReleaseRecordLockRequest`<br>Request jBASE to release a record lock. |
| `class` | `RemoteInputRequest`  |
| `class` | `SelectFileRequest`  |
| `class` | `SelectListCloseRequest`  |
| `class` | `SelectListCommitRequest`  |
| `class` | `SelectListFetchRequest`  |
| `class` | `SelectListFetchResponse`  |
| `class` | `SetPropertiesRequest`  |
| `class` | `SetPropertiesResponse`  |
| `class` | `StatementExecuteQueryRequest`  |
| `class` | `StatementFetchRequest`  |
| `class` | `StatementFetchResponse`  |
| `class` | `SubroutineResponse`  |
| `class` | `SwitchAccountRequest`  |
| `class` | `SwitchAccountResponse`  |
| `class` | `TransactionResponse`<br>Response to transactions related requests. |
| `class` | `WriteRecordRequest`  |
| `class` | `XACommitTransactionRequest`<br>Request jBASE commit an XA transaction. |
| `class` | `XAEndTransactionRequest`<br>Request jBASE end an XA transaction. |
| `class` | `XAPrepareTransactionRequest`<br>Request jBASE prepare an XA transaction. |
| `class` | `XARollbackTransactionRequest`<br>Request jBASE rollback an XA transaction. |
| `class` | `XAStartTransactionRequest`<br>Request jBASE start an XA transaction. |
| `class` | `XAXid`  |

Back to [jRemote API](./../../README.md)

<PageFooter />
