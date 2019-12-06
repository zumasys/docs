# Uses of Class com.jbase.jremote.io.Response (jremote API)

**Created At:** 9/25/2017 11:46:57 AM  
**Updated At:** 4/4/2018 11:26:07 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Class com.jbase.jremote.io.Response (jremote   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Uses of Class
com.jbase.jremote.io.Response



| Package<br> | Description<br> |
| --- | --- |
<caption>&nbsp;<span>Packages that use <a href="/39250-io/com_jbase_jremote_io_response" title="class in com.jbase.jremote.io">Response</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.protocol<br> |  <br> |






<!--   -->

### Uses of [Response](/39250-io/com_jbase_jremote_io_response "class in com.jbase.jremote.io") in [com.jbase.jremote](/30312-jagent/jremote-api)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Subclasses of <a href="/39250-io/com_jbase_jremote_io_response" title="class in com.jbase.jremote.io">Response</a> in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `class `<br> | `JExecuteResults`<br>The results from an executed command.<br> |




<!--   -->

### Uses of [Response](/39250-io/com_jbase_jremote_io_response "class in com.jbase.jremote.io") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Subclasses of <a href="/39250-io/com_jbase_jremote_io_response" title="class in com.jbase.jremote.io">Response</a> in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `class `<br> | `ErrorResponse` <br> |
| `class `<br> | `OKResponse` <br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> that return <a href="/39250-io/com_jbase_jremote_io_response" title="class in com.jbase.jremote.io">Response</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `Response`<br> | JRemoteSocketConnection.`receive()` <br> |
| `Response`<br> | InterceptorConnection.`receive()`<br>Intercept any IO messages and handle required input or output on in / out streams.<br> |
| `abstract Response`<br> | AbstractJRemoteConnection.`receive()` <br> |
| `Response`<br> | JConnectionImpl.`sendWaitForResponse(JRemoteRequest req)`<br>Uses underlying connection to send a request and wait for the response.<br> |
| `Response`<br> | AbstractJRemoteConnection.`sendWaitForResponse(JRemoteRequest request)`<br>Convenient method which simply calls #send followed by #receive.<br> |




<!--   -->

### Uses of [Response](/39250-io/com_jbase_jremote_io_response "class in com.jbase.jremote.io") in [com.jbase.jremote.protocol](/39270-protocol/com_jbase_jremote_protocol_package-summary)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Subclasses of <a href="/39250-io/com_jbase_jremote_io_response" title="class in com.jbase.jremote.io">Response</a> in <a href="/39270-protocol/com_jbase_jremote_protocol_package-summary">com.jbase.jremote.protocol</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `class `<br> | `ConvResponse` <br> |
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
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->Back to [jREMOTE API](com_jbase_jremote_package-summary)


