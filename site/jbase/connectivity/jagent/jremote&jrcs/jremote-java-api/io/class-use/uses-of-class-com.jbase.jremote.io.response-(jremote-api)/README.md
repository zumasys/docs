# Uses of Class com.jbase.jremote.io.Response (jremote API)

<PageHeader />

## Uses of Class

com.jbase.jremote.io.Response

| Package | Description |
| --- | --- |
 Packages that use [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io")  | com.jbase.jremote |   |
| com.jbase.jremote.io |   |
| com.jbase.jremote.protocol |   |

### Uses of [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io") in [com.jbase.jremote](./../../../../../jremote-api)

| Modifier and Type | Class and Description |
| --- | --- |
 Subclasses of [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io") in [com.jbase.jremote](./../../../../../jremote-api)  |
|`class` | `JExecuteResults`<br>The results from an executed command. |

### Uses of [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api))

| Modifier and Type| Class and Description |
| --- | --- |
 Subclasses of [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api))  |
| `class`| `ErrorResponse` |
| `class`| `OKResponse`  |

| Modifier and Type | Method and Description|
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api)) that return [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io")  | `Response`<br> | JRemoteSocketConnection.`receive()` |
| `Response`| InterceptorConnection.`receive()`<br>Intercept any IO messages and handle required input or output on in / out streams. |
| `abstract Response`| AbstractJRemoteConnection.`receive()` |
| `Response` | JConnectionImpl.`sendWaitForResponse(JRemoteRequest req)`<br>Uses underlying connection to send a request and wait for the response.|
| `Response`| AbstractJRemoteConnection.`sendWaitForResponse(JRemoteRequest request)`<br>Convenient method which simply calls #send followed by #receive.|

### Uses of [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io") in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-(jremote-api))

| Modifier and Type| Class and Description |
| --- | --- |
 Subclasses of [Response](./../../response-(jremote-api) "class in com.jbase.jremote.io") in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-(jremote-api))  |
| `class` | `ConvResponse`  |
| `class` | `DateTimeResponse`  |
| `class` | `EchoResponse`  |
| `class` | `EISMetaDataResponse`<br> Response object which reads general meta data of the underlying EIS instance. |
| `class` | `InputOutputResponse`  |
| `class` | `JediResponse`  |
| `class` | `JRemoteResponse`  |
| `class` | `MonitoringResponse`  |
| `class` | `ReadCommonResponse`  |
| `class` | `SelectListFetchResponse`  |
| `class` | `SetPropertiesResponse`  |
| `class` | `StatementFetchResponse`  |
| `class` | `SubroutineResponse`  |
| `class` | `SwitchAccountResponse`  |
| `class` | `TransactionResponse`<br>Response to transactions related requests. |

Back to [jRemote API](./../../README.md)

<PageFooter />
