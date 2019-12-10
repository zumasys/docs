# Uses of Class com.jbase.jremote.io.Response (jremote API)

**Created At:** 9/25/2017 11:46:57 AM  
**Updated At:** 4/4/2018 11:26:07 PM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jremote.io.Response (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Uses of Class
com.jbase.jremote.io.Response



| Package<br> | Description<br> |
| --- | --- |
 Packages that use [Response](/39250-io/com_jbase_jremote_io_response "class in com.jbase.jremote.io")  | com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.protocol<br> |  <br> |








### Uses of [Response](/39250-io/com_jbase_jremote_io_response "class in com.jbase.jremote.io") in [com.jbase.jremote](/30312-jagent/jremote-api)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Subclasses of [Response](/39250-io/com_jbase_jremote_io_response "class in com.jbase.jremote.io") in [com.jbase.jremote](/30312-jagent/jremote-api)  | `class `<br> | `JExecuteResults`<br>The results from an executed command.<br> |






### Uses of [Response](/39250-io/com_jbase_jremote_io_response "class in com.jbase.jremote.io") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Subclasses of [Response](/39250-io/com_jbase_jremote_io_response "class in com.jbase.jremote.io") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)  | `class `<br> | `ErrorResponse` <br> |
| `class `<br> | `OKResponse` <br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary) that return [Response](/39250-io/com_jbase_jremote_io_response "class in com.jbase.jremote.io")  | `Response`<br> | JRemoteSocketConnection.`receive()` <br> |
| `Response`<br> | InterceptorConnection.`receive()`<br>Intercept any IO messages and handle required input or output on in / out streams.<br> |
| `abstract Response`<br> | AbstractJRemoteConnection.`receive()` <br> |
| `Response`<br> | JConnectionImpl.`sendWaitForResponse(JRemoteRequest req)`<br>Uses underlying connection to send a request and wait for the response.<br> |
| `Response`<br> | AbstractJRemoteConnection.`sendWaitForResponse(JRemoteRequest request)`<br>Convenient method which simply calls #send followed by #receive.<br> |






### Uses of [Response](/39250-io/com_jbase_jremote_io_response "class in com.jbase.jremote.io") in [com.jbase.jremote.protocol](/39270-protocol/com_jbase_jremote_protocol_package-summary)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Subclasses of [Response](/39250-io/com_jbase_jremote_io_response "class in com.jbase.jremote.io") in [com.jbase.jremote.protocol](/39270-protocol/com_jbase_jremote_protocol_package-summary)  | `class `<br> | `ConvResponse` <br> |
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


