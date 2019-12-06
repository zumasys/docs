# StartTransactionRequest (jremote API)

**Created At:** 9/25/2017 12:04:53 PM  
**Updated At:** 4/4/2018 6:35:10 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="StartTransactionRequest (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class StartTransactionRequest

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a>, <a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest" title="interface in com.jbase.jremote.jca.inflow.protocol">InboundRequest</a></dd></dl>
* * *


```
public class StartTransactionRequest
extends Object
implements InboundRequest
```

<!--   -->

### Nested Class Summary

- <!--   -->Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`




<!--   -->

### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| ` `<br> | `StartTransactionRequest()` <br> |
| `protected `<br> | `StartTransactionRequest(String transId)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JBaseSerializable`<br> | `execute(ClientHandle handle, RequestHandler handler)` <br> |
| `String`<br> | `getTransactionId()` <br> |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### StartTransactionRequest

```
public StartTransactionRequest()
```

#### StartTransactionRequest

```
protected StartTransactionRequest(String transId)
```



<!--   -->

### Method Detail
<!--   -->
#### execute

```
public JBaseSerializable execute(ClientHandle handle,
                                 RequestHandler handler)
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest#execute-com.jbase.jremote.io.inflow.ClientHandle-com.jbase.jremote.io.inflow.RequestHandler-">execute</a></code> in interface <code><a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest" title="interface in com.jbase.jremote.jca.inflow.protocol">InboundRequest</a></code></dd></dl>
#### getType

```
public int getType()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#getType--">getType</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">type id of the objects, used during the serialization</dd></dl>
#### getVersion

```
public int getVersion()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#getVersion--">getVersion</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd></dl>
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#readObject-com.jbase.jremote.io.JBaseObjectReader-int-">readObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>
#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#writeObject-com.jbase.jremote.io.JBaseObjectWriter-int-">writeObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
#### getTransactionId

```
public String getTransactionId()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest#getTransactionId--">getTransactionId</a></code> in interface <code><a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest" title="interface in com.jbase.jremote.jca.inflow.protocol">InboundRequest</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)
