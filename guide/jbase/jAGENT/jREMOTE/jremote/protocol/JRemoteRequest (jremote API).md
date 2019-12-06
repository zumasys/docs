# JRemoteRequest (jremote API)

**Created At:** 9/25/2017 12:19:37 PM  
**Updated At:** 4/4/2018 8:39:01 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JRemoteRequest (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JRemoteRequest

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></dd></dl><dl><dt>Direct Known Subclasses:</dt><dd><a href="/39270-protocol/com_jbase_jremote_protocol_accountauthenticationrequest" title="class in com.jbase.jremote.protocol">AccountAuthenticationRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_authenticationrequest" title="class in com.jbase.jremote.protocol">AuthenticationRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_begintransactionrequest" title="class in com.jbase.jremote.protocol">BeginTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_callsubroutinerequest" title="class in com.jbase.jremote.protocol">CallSubroutineRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_clearfilerequest" title="class in com.jbase.jremote.protocol">ClearFileRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_closefilerequest" title="class in com.jbase.jremote.protocol">CloseFileRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_committransactionrequest" title="class in com.jbase.jremote.protocol">CommitTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_convrequest" title="class in com.jbase.jremote.protocol">ConvRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_datetimerequest" title="class in com.jbase.jremote.protocol">DateTimeRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_deleterecordrequest" title="class in com.jbase.jremote.protocol">DeleteRecordRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_echorequest" title="class in com.jbase.jremote.protocol">EchoRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_eismetadatarequest" title="class in com.jbase.jremote.protocol">EISMetaDataRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_existsrecordrequest" title="class in com.jbase.jremote.protocol">ExistsRecordRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_jexecuterequest" title="class in com.jbase.jremote.protocol">JExecuteRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_monitoringrequest" title="class in com.jbase.jremote.protocol">MonitoringRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_openfilerequest" title="class in com.jbase.jremote.protocol">OpenFileRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_readcommonrequest" title="class in com.jbase.jremote.protocol">ReadCommonRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_readrecordrequest" title="class in com.jbase.jremote.protocol">ReadRecordRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_releaserecordlockrequest" title="class in com.jbase.jremote.protocol">ReleaseRecordLockRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_remoteinputrequest" title="class in com.jbase.jremote.protocol">RemoteInputRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_rollbacktransactionrequest" title="class in com.jbase.jremote.protocol">RollbackTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_selectfilerequest" title="class in com.jbase.jremote.protocol">SelectFileRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_selectlistcloserequest" title="class in com.jbase.jremote.protocol">SelectListCloseRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_selectlistcommitrequest" title="class in com.jbase.jremote.protocol">SelectListCommitRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_selectlistfetchrequest" title="class in com.jbase.jremote.protocol">SelectListFetchRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_setpropertiesrequest" title="class in com.jbase.jremote.protocol">SetPropertiesRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_statementexecutequeryrequest" title="class in com.jbase.jremote.protocol">StatementExecuteQueryRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_statementfetchrequest" title="class in com.jbase.jremote.protocol">StatementFetchRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_switchaccountrequest" title="class in com.jbase.jremote.protocol">SwitchAccountRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_writerecordrequest" title="class in com.jbase.jremote.protocol">WriteRecordRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_xacommittransactionrequest" title="class in com.jbase.jremote.protocol">XACommitTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_xaendtransactionrequest" title="class in com.jbase.jremote.protocol">XAEndTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_xapreparetransactionrequest" title="class in com.jbase.jremote.protocol">XAPrepareTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_xarollbacktransactionrequest" title="class in com.jbase.jremote.protocol">XARollbackTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_xastarttransactionrequest" title="class in com.jbase.jremote.protocol">XAStartTransactionRequest</a></dd></dl>
* * *


```
public abstract class JRemoteRequest
extends Object
implements JBaseSerializable
```
<dl><dt><br></dt></dl>

<!--   -->

### Nested Class Summary

- <!--   -->Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`




<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JRemoteRequest()` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- <!--   -->Methods inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `getType`

<!--   -->

### Constructor Detail
<!--   -->
#### JRemoteRequest

```
public JRemoteRequest()
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#writeObject-com.jbase.jremote.io.JBaseObjectWriter-int-">writeObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#readObject-com.jbase.jremote.io.JBaseObjectReader-int-">readObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl><!--   -->
#### getVersion

```
public int getVersion()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#getVersion--">getVersion</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)


