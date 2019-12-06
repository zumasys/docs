# Uses of Interface com.jbase.jremote.io.JBaseObjectWriter (jremote API)

**Created At:** 9/25/2017 11:44:45 AM  
**Updated At:** 4/5/2018 10:54:13 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jremote.io.JBaseObjectWriter (jremote   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript>&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_top");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>
<!--   -->
<!-- ========= END OF TOP NAVBAR ========= -->
## Uses of Interface
com.jbase.jremote.io.JBaseObjectWriter

| Package<br> | Description<br> |
| --- | --- |
<caption>&nbsp;<span>Packages that use <a href="/39250-io/com_jbase_jremote_io_JBaseObjectWriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.jca.inflow<br> |  <br> |
| com.jbase.jremote.jca.inflow.protocol<br> |  <br> |
| com.jbase.jremote.protocol<br> |  <br> |



<!--   -->

### Uses of [JBaseObjectWriter](/39250-io/com_jbase_jremote_io_JBaseObjectWriter "interface in com.jbase.jremote.io") in [com.jbase.jremote](/30312-jagent/jremote-api)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a> with parameters of type <a href="/39250-io/com_jbase_jremote_io_JBaseObjectWriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `void`<br> | JSubroutineParameters.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | JExecuteResults.`writeObject(JBaseObjectWriter writer, int version)` <br> |




<!--   -->

### Uses of [JBaseObjectWriter](/39250-io/com_jbase_jremote_io_JBaseObjectWriter "interface in com.jbase.jremote.io") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Classes in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> that implement <a href="/39250-io/com_jbase_jremote_io_JBaseObjectWriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `class `<br> | `AbstractJBaseObjectWriter` <br> |
| `class `<br> | `IOJBaseObjectWriter`<br>jBase object writer based on the DataOutputStream.<br> |
| `class `<br> | `NIOJBaseObjectWriter`<br>jBase object writer using the new Java IO.<br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> with parameters of type <a href="/39250-io/com_jbase_jremote_io_JBaseObjectWriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `void`<br> | SQLError.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | OKResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | JBaseSerializable.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | ErrorResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |




<!--   -->

### Uses of [JBaseObjectWriter](/39250-io/com_jbase_jremote_io_JBaseObjectWriter "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39262-inflow/com_jbase_jremote_jca_inflow_package-summary">com.jbase.jremote.jca.inflow</a> with parameters of type <a href="/39250-io/com_jbase_jremote_io_JBaseObjectWriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `protected void`<br> | InboundRequestHandler.`writeResponse(JBaseObjectWriter writer, JBaseSerializable response)` <br> |




<!--   -->

### Uses of [JBaseObjectWriter](/39250-io/com_jbase_jremote_io_JBaseObjectWriter "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow.protocol](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary">com.jbase.jremote.jca.inflow.protocol</a> with parameters of type <a href="/39250-io/com_jbase_jremote_io_JBaseObjectWriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `void`<br> | WorkScheduledResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | TransactionOperation.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | StartTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | RollbackTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | NoEndpointActivatedResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | CommitTransactionRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | ActivationResponse.`writeObject(JBaseObjectWriter writer, int version)` <br> |
| `void`<br> | ActivationRequest.`writeObject(JBaseObjectWriter writer, int version)` <br> |




<!--   -->

### Uses of [JBaseObjectWriter](/39250-io/com_jbase_jremote_io_JBaseObjectWriter "interface in com.jbase.jremote.io") in [com.jbase.jremote.protocol](/39270-protocol/com_jbase_jremote_protocol_package-summary)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39270-protocol/com_jbase_jremote_protocol_package-summary">com.jbase.jremote.protocol</a> with parameters of type <a href="/39250-io/com_jbase_jremote_io_JBaseObjectWriter" title="interface in com.jbase.jremote.io">JBaseObjectWriter</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `void`<br> | XAXid.`writeObject(JBaseObjectWriter writer, int version)` <br> |
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
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)


