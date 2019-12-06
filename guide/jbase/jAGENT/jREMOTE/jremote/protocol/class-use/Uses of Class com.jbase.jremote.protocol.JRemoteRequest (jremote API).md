# Uses of Class com.jbase.jremote.protocol.JRemoteRequest (jremote API)

**Created At:** 9/25/2017 12:14:05 PM  
**Updated At:** 4/5/2018 11:17:39 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Class com.jbase.jremote.protocol.JRemoteRequest (jremote   API)";
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
## Uses of Class
com.jbase.jremote.protocol.JRemoteRequest

| Package<br> | Description<br> |
| --- | --- |
<caption>&nbsp;<span>Packages that use <a href="/39270-protocol/com_jbase_jremote_protocol_jremoterequest" title="class in com.jbase.jremote.protocol">JRemoteRequest</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.protocol<br> |  <br> |



<!--   -->

### Uses of [JRemoteRequest](/39270-protocol/com_jbase_jremote_protocol_jremoterequest "class in com.jbase.jremote.protocol") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> with parameters of type <a href="/39270-protocol/com_jbase_jremote_protocol_jremoterequest" title="class in com.jbase.jremote.protocol">JRemoteRequest</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `void`<br> | JRemoteSocketConnection.`send(JRemoteRequest request)` <br> |
| `void`<br> | InterceptorConnection.`send(JRemoteRequest request)` <br> |
| `abstract void`<br> | AbstractJRemoteConnection.`send(JRemoteRequest request)` <br> |
| `Response`<br> | JConnectionImpl.`sendWaitForResponse(JRemoteRequest req)`<br>Uses underlying connection to send a request and wait for the response.<br> |
| `Response`<br> | AbstractJRemoteConnection.`sendWaitForResponse(JRemoteRequest request)`<br>Convenient method which simply calls #send followed by #receive.<br> |




<!--   -->

### Uses of [JRemoteRequest](/39270-protocol/com_jbase_jremote_protocol_jremoterequest "class in com.jbase.jremote.protocol") in [com.jbase.jremote.protocol](/39270-protocol/com_jbase_jremote_protocol_package-summary)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Subclasses of <a href="/39270-protocol/com_jbase_jremote_protocol_jremoterequest" title="class in com.jbase.jremote.protocol">JRemoteRequest</a> in <a href="/39270-protocol/com_jbase_jremote_protocol_package-summary">com.jbase.jremote.protocol</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `class `<br> | `AccountAuthenticationRequest`<br>Request for authentication.<br> |
| `class `<br> | `AuthenticationRequest`<br>Request for authentication.<br> |
| `class `<br> | `BeginTransactionRequest`<br>Request to start transaction.<br> |
| `class `<br> | `CallSubroutineRequest` <br> |
| `class `<br> | `ClearFileRequest` <br> |
| `class `<br> | `CloseFileRequest`<br>Request jBASE to close a file.<br> |
| `class `<br> | `CommitTransactionRequest`<br>Request to commit transaction.<br> |
| `class `<br> | `ConvRequest` <br> |
| `class `<br> | `DateTimeRequest` <br> |
| `class `<br> | `DeleteRecordRequest` <br> |
| `class `<br> | `EchoRequest` <br> |
| `class `<br> | `EISMetaDataRequest`<br>Request jBASE to retrieve general meta data.<br> |
| `class `<br> | `ExistsRecordRequest`<br>Request jBASE to check whether a file record exists.<br> |
| `class `<br> | `JExecuteRequest` <br> |
| `class `<br> | `MonitoringRequest` <br> |
| `class `<br> | `OpenFileRequest` <br> |
| `class `<br> | `ReadCommonRequest`<br>Request to read common value.<br> |
| `class `<br> | `ReadRecordRequest` <br> |
| `class `<br> | `ReleaseRecordLockRequest`<br>Request jBASE to release a record lock.<br> |
| `class `<br> | `RemoteInputRequest` <br> |
| `class `<br> | `RollbackTransactionRequest`<br>Request to commit transaction.<br> |
| `class `<br> | `SelectFileRequest` <br> |
| `class `<br> | `SelectListCloseRequest` <br> |
| `class `<br> | `SelectListCommitRequest` <br> |
| `class `<br> | `SelectListFetchRequest` <br> |
| `class `<br> | `SetPropertiesRequest` <br> |
| `class `<br> | `StatementExecuteQueryRequest` <br> |
| `class `<br> | `StatementFetchRequest` <br> |
| `class `<br> | `SwitchAccountRequest` <br> |
| `class `<br> | `WriteRecordRequest` <br> |
| `class `<br> | `XACommitTransactionRequest`<br>Request jBASE commit an XA transaction.<br> |
| `class `<br> | `XAEndTransactionRequest`<br>Request jBASE end an XA transaction.<br> |
| `class `<br> | `XAPrepareTransactionRequest`<br>Request jBASE prepare an XA transaction.<br> |
| `class `<br> | `XARollbackTransactionRequest`<br>Request jBASE rollback an XA transaction.<br> |
| `class `<br> | `XAStartTransactionRequest`<br>Request jBASE start an XA transaction.<br> |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)
