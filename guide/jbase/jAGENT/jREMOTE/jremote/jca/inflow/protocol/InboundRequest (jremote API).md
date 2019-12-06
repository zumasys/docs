# InboundRequest (jremote API)

**Created At:** 9/25/2017 12:03:46 PM  
**Updated At:** 4/4/2018 6:35:33 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="InboundRequest (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":6,"i1":6};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Interface InboundRequest

<dl><dt>All Superinterfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></dd></dl><dl><dt>All Known Implementing Classes:</dt><dd><a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_ActivationRequest" title="class in com.jbase.jremote.jca.inflow.protocol">ActivationRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_CommitTransactionRequest" title="class in com.jbase.jremote.jca.inflow.protocol">CommitTransactionRequest</a>, <a href="/39270-protocol/com_jbase_jremote_protocol_RollbackTransactionRequest" title="class in com.jbase.jremote.jca.inflow.protocol">RollbackTransactionRequest</a>, <a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_StartTransactionRequest" title="class in com.jbase.jremote.jca.inflow.protocol">StartTransactionRequest</a></dd></dl>
* * *


```
public interface InboundRequest
extends JBaseSerializable
```

<!--   -->

### Nested Class Summary

- <!--   -->Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JBaseSerializable`<br> | `execute(ClientHandle handle, RequestHandler handler)` <br> |
| `String`<br> | `getTransactionId()` <br> |


- <!--   -->Methods inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `getType, getVersion, readObject, writeObject`

<!--   -->

### Method Detail
<!--   -->


#### getTransactionId

```
String getTransactionId()
```



#### execute

```
JBaseSerializable execute(ClientHandle handle,
                          RequestHandler handler)
```



Back to [jREMOTE API](com_jbase_jremote_package-summary)
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
