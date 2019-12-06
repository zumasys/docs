# JBaseSerializable (jremote API)

**Created At:** 9/25/2017 11:51:45 AM  
**Updated At:** 12/24/2018 4:27:51 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JBaseSerializable (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":6,"i1":6,"i2":6,"i3":6};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Interface JBaseSerializable

<dl><dt>All Known Subinterfaces:</dt><dd><a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest" title="interface in com.jbase.jremote.jca.inflow.protocol">InboundRequest</a></dd></dl><dl><dt>All Known Implementing Classes:</dt><dd><a href="/39270-protocol/com_jbase_jremote_protocol_AccountAuthenticationRequest" title="class in com.jbase.jremote.protocol">AccountAuthenticationRequest</a>, <a href="com_jbase_jremote_protocol_accountauthenticationrequest" title="class in com.jbase.jremote.protocol">AccountAuthenticationRequest.AccountUserCredentials</a>, <a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_ActivationRequest" title="class in com.jbase.jremote.jca.inflow.protocol">ActivationRequest</a>, <a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_ActivationResponse" title="class in com.jbase.jremote.jca.inflow.protocol">ActivationResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_AuthenticationRequest" title="class in com.jbase.jremote.protocol">AuthenticationRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_BeginTransactionRequest" title="class in com.jbase.jremote.protocol">BeginTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_CallSubroutineRequest" title="class in com.jbase.jremote.protocol">CallSubroutineRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_ClearFileRequest" title="class in com.jbase.jremote.protocol">ClearFileRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_CloseFileRequest" title="class in com.jbase.jremote.protocol">CloseFileRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_CommitTransactionRequest" title="class in com.jbase.jremote.jca.inflow.protocol">CommitTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_CommitTransactionRequest" title="class in com.jbase.jremote.protocol">CommitTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_ConvRequest" title="class in com.jbase.jremote.protocol">ConvRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_ConvResponse" title="class in com.jbase.jremote.protocol">ConvResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_DateTimeRequest" title="class in com.jbase.jremote.protocol">DateTimeRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_DateTimeResponse" title="class in com.jbase.jremote.protocol">DateTimeResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_DeleteRecordRequest" title="class in com.jbase.jremote.protocol">DeleteRecordRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_EchoRequest" title="class in com.jbase.jremote.protocol">EchoRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_echoresponse" title="class in com.jbase.jremote.protocol">EchoResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_eismetadatarequest" title="class in com.jbase.jremote.protocol">EISMetaDataRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_eismetadataresponse" title="class in com.jbase.jremote.protocol">EISMetaDataResponse</a>, <a href="/39250-io/com_jbase_jremote_io_errorresponse" title="class in com.jbase.jremote.io">ErrorResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_existsrecordrequest" title="class in com.jbase.jremote.protocol">ExistsRecordRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_inputoutputresponse" title="class in com.jbase.jremote.protocol">InputOutputResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_jediresponse" title="class in com.jbase.jremote.protocol">JediResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_jexecuterequest" title="class in com.jbase.jremote.protocol">JExecuteRequest</a>, <a href="/39248-jremote/com_jbase_jremote_jexecuteresults" title="class in com.jbase.jremote">JExecuteResults</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_jremoterequest" title="class in com.jbase.jremote.protocol">JRemoteRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_jremoteresponse" title="class in com.jbase.jremote.protocol">JRemoteResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_jselectlistprot" title="class in com.jbase.jremote.protocol">JSelectListProt</a>, <a href="/39248-jremote/com_jbase_jremote_jsubroutineparameters" title="class in com.jbase.jremote">JSubroutineParameters</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_monitoringrequest" title="class in com.jbase.jremote.protocol">MonitoringRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_monitoringresponse" title="class in com.jbase.jremote.protocol">MonitoringResponse</a>, <a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_noendpointactivatedresponse" title="class in com.jbase.jremote.jca.inflow.protocol">NoEndpointActivatedResponse</a>, <a href="/39250-io/com_jbase_jremote_io_okresponse" title="class in com.jbase.jremote.io">OKResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_openfilerequest" title="class in com.jbase.jremote.protocol">OpenFileRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_readcommonrequest" title="class in com.jbase.jremote.protocol">ReadCommonRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_readcommonresponse" title="class in com.jbase.jremote.protocol">ReadCommonResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_readrecordrequest" title="class in com.jbase.jremote.protocol">ReadRecordRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_releaserecordlockrequest" title="class in com.jbase.jremote.protocol">ReleaseRecordLockRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_remoteinputrequest" title="class in com.jbase.jremote.protocol">RemoteInputRequest</a>, <a href="/39250-io/com_jbase_jremote_io_response" title="class in com.jbase.jremote.io">Response</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_RollbackTransactionRequest" title="class in com.jbase.jremote.jca.inflow.protocol">RollbackTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_RollbackTransactionRequest" title="class in com.jbase.jremote.protocol">RollbackTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_selectfilerequest" title="class in com.jbase.jremote.protocol">SelectFileRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_selectlistcloserequest" title="class in com.jbase.jremote.protocol">SelectListCloseRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_selectlistcommitrequest" title="class in com.jbase.jremote.protocol">SelectListCommitRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_selectlistfetchrequest" title="class in com.jbase.jremote.protocol">SelectListFetchRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_selectlistfetchresponse" title="class in com.jbase.jremote.protocol">SelectListFetchResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_setpropertiesrequest" title="class in com.jbase.jremote.protocol">SetPropertiesRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_setpropertiesresponse" title="class in com.jbase.jremote.protocol">SetPropertiesResponse</a>, <a href="/39250-io/com_jbase_jremote_io_sqlerror" title="class in com.jbase.jremote.io">SQLError</a>, <a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_StartTransactionRequest" title="class in com.jbase.jremote.jca.inflow.protocol">StartTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_statementexecutequeryrequest" title="class in com.jbase.jremote.protocol">StatementExecuteQueryRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_statementfetchrequest" title="class in com.jbase.jremote.protocol">StatementFetchRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_statementfetchresponse" title="class in com.jbase.jremote.protocol">StatementFetchResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_subroutineresponse" title="class in com.jbase.jremote.protocol">SubroutineResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_switchaccountrequest" title="class in com.jbase.jremote.protocol">SwitchAccountRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_switchaccountresponse" title="class in com.jbase.jremote.protocol">SwitchAccountResponse</a>, <a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_transactionoperation" title="class in com.jbase.jremote.jca.inflow.protocol">TransactionOperation</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_transactionresponse" title="class in com.jbase.jremote.protocol">TransactionResponse</a>, <a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_workscheduledresponse" title="class in com.jbase.jremote.jca.inflow.protocol">WorkScheduledResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_writerecordrequest" title="class in com.jbase.jremote.protocol">WriteRecordRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_xacommittransactionrequest" title="class in com.jbase.jremote.protocol">XACommitTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_xaendtransactionrequest" title="class in com.jbase.jremote.protocol">XAEndTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_xapreparetransactionrequest" title="class in com.jbase.jremote.protocol">XAPrepareTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_xarollbacktransactionrequest" title="class in com.jbase.jremote.protocol">XARollbackTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_xastarttransactionrequest" title="class in com.jbase.jremote.protocol">XAStartTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_xaxid" title="class in com.jbase.jremote.protocol">XAXid</a></dd></dl>
* * *


```
public interface JBaseSerializable
```

Interface which must be implemented by objects which take part in the JDBC driver jbase\_agent communication. Note: the interface is not compatible with standard Java java.io.Serializable. This is because we do not intend to implement Java serialization protocol for our purposes (note: this is about Java C++ communication). Each class implementing this interface should have a counterpart on the server side with compatible serializing/deserializing protocol.
<dl><dt><br></dt></dl>

<!--   -->

### Nested Class Summary


| Modifier and Type<br> | Interface and Description<br> |
| --- | --- |
| `static interface `<br> | `JBaseSerializable.TYPE` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |

<!--   -->

### Method Detail
<!--   -->


#### writeObject

```
void writeObject(JBaseObjectWriter writer,
                 int version)
          throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>IOException</code></dd></dl>
#### readObject

```
void readObject(JBaseObjectReader reader,
                int version)
         throws IOException,
                ClassNotFoundException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>IOException</code></dd><dd style="margin-left: 20px;"><code>ClassNotFoundException</code></dd></dl>
#### getType

```
int getType()
```
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">type id of the objects, used during the serialization</dd></dl>
#### getVersion

```
int getVersion()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->





Back to [jREMOTE API](com_jbase_jremote_package-summary)
