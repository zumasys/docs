# Uses of Class com.jbase.jremote.io.Response (jremote API)

<PageHeader />

Uses of Class
com.jbase.jremote.io.Response



| Package<br> | Description<br> |
| --- | --- |
 Packages that use [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io")  | com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.protocol<br> |  <br> |








### Uses of [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io") in [com.jbase.jremote](./../../../../../jremote-api)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Subclasses of [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io") in [com.jbase.jremote](./../../../../../jremote-api)  | `class `<br> | `JExecuteResults`<br>The results from an executed command.<br> |






### Uses of [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api))


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Subclasses of [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api))  | `class `<br> | `ErrorResponse` <br> |
| `class `<br> | `OKResponse` <br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api)) that return [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io")  | `Response`<br> | JRemoteSocketConnection.`receive()` <br> |
| `Response`<br> | InterceptorConnection.`receive()`<br>Intercept any IO messages and handle required input or output on in / out streams.<br> |
| `abstract Response`<br> | AbstractJRemoteConnection.`receive()` <br> |
| `Response`<br> | JConnectionImpl.`sendWaitForResponse(JRemoteRequest req)`<br>Uses underlying connection to send a request and wait for the response.<br> |
| `Response`<br> | AbstractJRemoteConnection.`sendWaitForResponse(JRemoteRequest request)`<br>Convenient method which simply calls #send followed by #receive.<br> |






### Uses of [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io") in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-(jremote-api))


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Subclasses of [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io") in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-(jremote-api))  | `class `<br> | `ConvResponse` <br> |
| `class `<br> | `DateTimeResponse` <br> |
| `class `<br> | `EchoResponse` <br> |
| `class `<br> | `EISMetaDataResponse`<br>Response object which reads general meta data of the underlying EIS instance.<br> |
| `class `<br> | `InputOutputResponse` <br> |
| `class `<br> | `JediResponse` <br> |
| `class `<br> | `JRemoteResponse` <br> |
| `class `<br> | `MonitoringResponse` <br> |
| `class `<br> | `ReadCommonResponse` <br> |
| `class `<br> | `SelectListFetchResponse` <br> |
| `class `<br> | `SetPropertiesResponse` <br> |
| `class `<br> | `StatementFetchResponse` <br> |
| `class `<br> | `SubroutineResponse` <br> |
| `class `<br> | `SwitchAccountResponse` <br> |
| `class `<br> | `TransactionResponse`<br>Response to transactions related requests.<br> |

Back to [jRemote API](../../../../jremote-api/README.md)



  
<PageFooter />
