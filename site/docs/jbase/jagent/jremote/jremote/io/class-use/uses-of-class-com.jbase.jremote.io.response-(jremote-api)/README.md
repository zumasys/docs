# Uses of Class com.jbase.jremote.io.Response (jremote API)

**Created At:** 9/25/2017 11:46:57 AM  
**Updated At:** 4/4/2018 11:26:07 PM  
**Original Doc:** [com_jbase_jremote_io_class-use_response](https://docs.jbase.com/39253-class-use/com_jbase_jremote_io_class-use_response)  
**Original ID:** 278118  
**Internal:** No  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jremote.io.Response (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Uses of Class
com.jbase.jremote.io.Response



| Package<br> | Description<br> |
| --- | --- |
 Packages that use [Response](./../../response-%28jremote-api%29 "class in com.jbase.jremote.io")  | com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.protocol<br> |  <br> |








### Uses of [Response](./../../response-%28jremote-api%29 "class in com.jbase.jremote.io") in [com.jbase.jremote](./../../../../../jremote-api)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Subclasses of [Response](./../../response-%28jremote-api%29 "class in com.jbase.jremote.io") in [com.jbase.jremote](./../../../../../jremote-api)  | `class `<br> | `JExecuteResults`<br>The results from an executed command.<br> |






### Uses of [Response](./../../response-%28jremote-api%29 "class in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Subclasses of [Response](./../../response-%28jremote-api%29 "class in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29)  | `class `<br> | `ErrorResponse` <br> |
| `class `<br> | `OKResponse` <br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29) that return [Response](./../../response-%28jremote-api%29 "class in com.jbase.jremote.io")  | `Response`<br> | JRemoteSocketConnection.`receive()` <br> |
| `Response`<br> | InterceptorConnection.`receive()`<br>Intercept any IO messages and handle required input or output on in / out streams.<br> |
| `abstract Response`<br> | AbstractJRemoteConnection.`receive()` <br> |
| `Response`<br> | JConnectionImpl.`sendWaitForResponse(JRemoteRequest req)`<br>Uses underlying connection to send a request and wait for the response.<br> |
| `Response`<br> | AbstractJRemoteConnection.`sendWaitForResponse(JRemoteRequest request)`<br>Convenient method which simply calls #send followed by #receive.<br> |






### Uses of [Response](./../../response-%28jremote-api%29 "class in com.jbase.jremote.io") in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-%28jremote-api%29)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Subclasses of [Response](./../../response-%28jremote-api%29 "class in com.jbase.jremote.io") in [com.jbase.jremote.protocol](./../../../protocol/com.jbase.jremote.protocol-%28jremote-api%29)  | `class `<br> | `ConvResponse` <br> |
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

Back to [jREMOTE API](com_jbase_jremote_package-summary)


