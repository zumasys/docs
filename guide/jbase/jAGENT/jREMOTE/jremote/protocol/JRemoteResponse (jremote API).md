# JRemoteResponse (jremote API)

**Created At:** 9/25/2017 12:19:44 PM  
**Updated At:** 4/5/2018 10:49:09 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JRemoteResponse (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JRemoteResponse

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></dd></dl><dl><dt>Direct Known Subclasses:</dt><dd><a href="/39270-protocol/com_jbase_jremote_protocol_convresponse" title="class in com.jbase.jremote.protocol">ConvResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_datetimeresponse" title="class in com.jbase.jremote.protocol">DateTimeResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_eismetadataresponse" title="class in com.jbase.jremote.protocol">EISMetaDataResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_inputoutputresponse" title="class in com.jbase.jremote.protocol">InputOutputResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_jediresponse" title="class in com.jbase.jremote.protocol">JediResponse</a>, <a href="/39248-jremote/com_jbase_jremote_jexecuteresults" title="class in com.jbase.jremote">JExecuteResults</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_monitoringresponse" title="class in com.jbase.jremote.protocol">MonitoringResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_readcommonresponse" title="class in com.jbase.jremote.protocol">ReadCommonResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_selectlistfetchresponse" title="class in com.jbase.jremote.protocol">SelectListFetchResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_setpropertiesresponse" title="class in com.jbase.jremote.protocol">SetPropertiesResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_statementfetchresponse" title="class in com.jbase.jremote.protocol">StatementFetchResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_subroutineresponse" title="class in com.jbase.jremote.protocol">SubroutineResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_switchaccountresponse" title="class in com.jbase.jremote.protocol">SwitchAccountResponse</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_transactionresponse" title="class in com.jbase.jremote.protocol">TransactionResponse</a></dd></dl>
* * *


```
public abstract class JRemoteResponse
extends Response
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
| `JRemoteResponse()` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getVersion()` <br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- <!--   -->Methods inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `getType, readObject, writeObject`

<!--   -->

### Constructor Detail
<!--   -->
#### JRemoteResponse

```
public JRemoteResponse()
```


<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### Method Detail
<!--   -->
#### getVersion

```
public int getVersion()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)


