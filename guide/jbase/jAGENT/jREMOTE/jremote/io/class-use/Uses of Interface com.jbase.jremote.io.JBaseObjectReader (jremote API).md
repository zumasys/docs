# Uses of Interface com.jbase.jremote.io.JBaseObjectReader (jremote API)

**Created At:** 9/25/2017 11:44:38 AM  
**Updated At:** 4/5/2018 10:46:55 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jremote.io.JBaseObjectReader (jremote   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
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
com.jbase.jremote.io.JBaseObjectReader

| Package<br> | Description<br> |
| --- | --- |
<caption>&nbsp;<span>Packages that use <a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.jca.inflow<br> |  <br> |
| com.jbase.jremote.jca.inflow.protocol<br> |  <br> |
| com.jbase.jremote.protocol<br> |  <br> |




<!--   -->

### Uses of [JBaseObjectReader](/39250-io/com_jbase_jremote_io_jbaseobjectreader "interface in com.jbase.jremote.io") in [com.jbase.jremote](/30312-jagent/jremote-api)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a> with parameters of type <a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `void`<br> | JSubroutineParameters.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | JExecuteResults.`readObject(JBaseObjectReader reader, int version)` <br> |




<!--   -->

### Uses of [JBaseObjectReader](/39250-io/com_jbase_jremote_io_jbaseobjectreader "interface in com.jbase.jremote.io") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Classes in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> that implement <a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `class `<br> | `AbstractJBaseObjectReader`<br>Deserializes JBaseSerializable objects sent from the jbase\_agent server, or any other source of serialized JCF objects.<br> |
| `class `<br> | `IOJBaseObjectReader`<br>jBase object reader based on the DataInputStream.<br> |
| `class `<br> | `NIOJBaseObjectReader`<br>jBase object reader based on the new Java IO.<br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> with parameters of type <a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `void`<br> | SQLError.`readObject(JBaseObjectReader reader, int version)`<br>Method : readObject() Description: Read object off the wire.<br> |
| `void`<br> | OKResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | JBaseSerializable.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | ErrorResponse.`readObject(JBaseObjectReader reader, int version)` <br> |




<!--   -->

### Uses of [JBaseObjectReader](/39250-io/com_jbase_jremote_io_jbaseobjectreader "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39262-inflow/com_jbase_jremote_jca_inflow_package-summary">com.jbase.jremote.jca.inflow</a> with parameters of type <a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `protected InboundRequest`<br> | InboundRequestHandler.`readRequest(JBaseObjectReader reader)` <br> |



<!--   -->

### Uses of [JBaseObjectReader](/39250-io/com_jbase_jremote_io_jbaseobjectreader "interface in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow.protocol](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary">com.jbase.jremote.jca.inflow.protocol</a> with parameters of type <a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `void`<br> | WorkScheduledResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | TransactionOperation.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | StartTransactionRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | RollbackTransactionRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | NoEndpointActivatedResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | CommitTransactionRequest.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | ActivationResponse.`readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | ActivationRequest.`readObject(JBaseObjectReader reader, int version)` <br> |




<!--   -->

### Uses of [JBaseObjectReader](/39250-io/com_jbase_jremote_io_jbaseobjectreader "interface in com.jbase.jremote.io") in [com.jbase.jremote.protocol](/39270-protocol/com_jbase_jremote_protocol_package-summary)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39270-protocol/com_jbase_jremote_protocol_package-summary">com.jbase.jremote.protocol</a> with parameters of type <a href="/39250-io/com_jbase_jremote_io_jbaseobjectreader" title="interface in com.jbase.jremote.io">JBaseObjectReader</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `void`<br> | XAXid.`readObject(JBaseObjectReader reader, int version)` <br> |
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
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)


