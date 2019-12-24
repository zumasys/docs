# com.jbase.jremote.protocol (jremote API)

**Created At:** 9/25/2017 12:20:16 PM  
**Updated At:** 4/5/2018 11:08:43 PM  
**Original Doc:** [com_jbase_jremote_protocol_package-summary](https://docs.jbase.com/39270-protocol/com_jbase_jremote_protocol_package-summary)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="com.jbase.jremote.protocol (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.



<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

# Package com.jbase.jremote.protocol

| Class<br> | Description<br> |
| --- | --- |
 Class Summary  | [AccountAuthenticationRequest](./../accountauthenticationrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Request for authentication.<br> |
| [AccountAuthenticationRequest.AccountUserCredentials](./../accountauthenticationrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [AuthenticationRequest](./../authenticationrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Request for authentication.<br> |
| [AuthenticationRequest.UserCredentials](./../authenticationrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [BeginTransactionRequest](./../begintransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Request to start transaction.<br> |
| [CallSubroutineRequest](./../callsubroutinerequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [ClearFileRequest](./../clearfilerequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [CloseFileRequest](./../closefilerequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Request jBASE to close a file.<br> |
| [CommitTransactionRequest](./../committransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Request to commit transaction.<br> |
| [ConvRequest](./../convrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [ConvResponse](./../convresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [DateTimeRequest](./../datetimerequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [DateTimeResponse](./../datetimeresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [DeleteRecordRequest](./../deleterecordrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [EchoRequest](./../echorequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [EchoResponse](./../echoresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [EISMetaDataRequest](./../eismetadatarequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Request jBASE to retrieve general meta data.<br> |
| [EISMetaDataResponse](./../eismetadataresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Response object which reads general meta data of the underlying EIS instance.<br> |
| [ExistsRecordRequest](./../existsrecordrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Request jBASE to check whether a file record exists.<br> |
| [InputOutputResponse](./../inputoutputresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [JediResponse](./../jediresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [JExecuteRequest](./../jexecuterequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [JRemoteRequest](./../jremoterequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [JRemoteResponse](./../jremoteresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [JSelectListProt](./../jselectlistprot-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>A serializable list of jBASE file records.<br> |
| [MonitoringRequest](./../monitoringrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [MonitoringResponse](./../monitoringresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [OpenFileRequest](./../openfilerequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [ReadCommonRequest](./../readcommonrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Request to read common value.<br> |
| [ReadCommonResponse](./../readcommonresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [ReadRecordRequest](./../readrecordrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [ReleaseRecordLockRequest](./../releaserecordlockrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Request jBASE to release a record lock.<br> |
| [RemoteInputRequest](./../remoteinputrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [RollbackTransactionRequest](./../rollbacktransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Request to commit transaction.<br> |
| [SelectFileRequest](./../selectfilerequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [SelectListCloseRequest](./../selectlistcloserequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [SelectListCommitRequest](./../selectlistcommitrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [SelectListFetchRequest](./../selectlistfetchrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [SelectListFetchResponse](./../selectlistfetchresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [SetPropertiesRequest](./../setpropertiesrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [SetPropertiesResponse](./../setpropertiesresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [StatementExecuteQueryRequest](./../statementexecutequeryrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [StatementFetchRequest](./../statementfetchrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [StatementFetchResponse](./../statementfetchresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [SubroutineResponse](./../subroutineresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [SwitchAccountRequest](./../switchaccountrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [SwitchAccountResponse](./../switchaccountresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [TransactionResponse](./../transactionresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Response to transactions related requests.<br> |
| [WriteRecordRequest](./../writerecordrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |
| [XACommitTransactionRequest](./../xacommittransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Request jBASE commit an XA transaction.<br> |
| [XAEndTransactionRequest](./../xaendtransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Request jBASE end an XA transaction.<br> |
| [XAPrepareTransactionRequest](./../xapreparetransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Request jBASE prepare an XA transaction.<br> |
| [XARollbackTransactionRequest](./../xarollbacktransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Request jBASE rollback an XA transaction.<br> |
| [XAStartTransactionRequest](./../xastarttransactionrequest-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> | <br>Request jBASE start an XA transaction.<br> |
| [XAXid](./../xaxid-%28jremote-api%29 "class in com.jbase.jremote.protocol")<br> |  <br> |



Back to [jREMOTE API](com_jbase_jremote_package-summary)
