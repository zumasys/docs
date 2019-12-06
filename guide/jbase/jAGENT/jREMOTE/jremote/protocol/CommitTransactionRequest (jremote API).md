# CommitTransactionRequest (jremote API)

**Created At:** 9/25/2017 12:03:38 PM  
**Updated At:** 4/5/2018 9:53:58 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="CommitTransactionRequest (jremote   API)";
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
## Class CommitTransactionRequest
<dl><dt>All Implemented Interfaces:</dt><dd><a href="com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a>, <a href="com_jbase_jremote_jca_inflow_protocol_inboundrequest" title="interface in com.jbase.jremote.jca.inflow.protocol">InboundRequest</a></dd></dl>
* * *

```
public class CommitTransactionRequest
extends Object
implements InboundRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`



### Constructor Summary


| Constructor and Description<br> |
| --- |
| `CommitTransactionRequest()` <br> |


### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JBaseSerializable`<br> | `execute(ClientHandle handle,        RequestHandler handler)` <br> |
| `String`<br> | `getTransactionId()` <br> |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader,          int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer,           int version)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


### Constructor Detail

#### COMMITTRANSACTIONREQUEST

```
public CommitTransactionRequest()
```

### 


### Method Detail

#### EXECUTE

```
public JBaseSerializable execute(ClientHandle handle,                                 RequestHandler handler)
```
<dl><dt style="margin-left: 20px;">Specified by:</dt><dd style="margin-left: 20px;"><code><a href="file:///V%3A/jremote/jremote/jremote-docs/javadocs/com/jbase/jremote/jca/inflow/protocol/InboundRequest.html#execute-com.jbase.jremote.io.inflow.ClientHandle-com.jbase.jremote.io.inflow.RequestHandler-">execute</a></code> in interface <code><a href="file:///V%3A/jremote/jremote/jremote-docs/javadocs/com/jbase/jremote/jca/inflow/protocol/InboundRequest.html" title="interface in com.jbase.jremote.jca.inflow.protocol">InboundRequest</a></code></dd></dl>
#### 


#### GETTYPE

```
public int getType()
```
<dl><dt style="margin-left: 20px;">Specified by:</dt><dd style="margin-left: 20px;"><code><a href="file:///V%3A/jremote/jremote/jremote-docs/javadocs/com/jbase/jremote/io/JBaseSerializable.html#getType--">getType</a></code> in interface <code><a href="file:///V%3A/jremote/jremote/jremote-docs/javadocs/com/jbase/jremote/io/JBaseSerializable.html" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;">Returns:</dt><dd style="margin-left: 20px;">type id of the objects, used during the serialization</dd></dl>
#### 


#### GETVERSION

```
public int getVersion()
```
<dl><dt style="margin-left: 20px;">Specified by:</dt><dd style="margin-left: 20px;"><code><a href="file:///V%3A/jremote/jremote/jremote-docs/javadocs/com/jbase/jremote/io/JBaseSerializable.html#getVersion--">getVersion</a></code> in interface <code><a href="file:///V%3A/jremote/jremote/jremote-docs/javadocs/com/jbase/jremote/io/JBaseSerializable.html" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd></dl>
#### 


#### READOBJECT

```
public void readObject(JBaseObjectReader reader,                       int version)                throws IOException,                       ClassNotFoundException
```
<dl><dt style="margin-left: 20px;">Specified by:</dt><dd style="margin-left: 20px;"><code><a href="file:///V%3A/jremote/jremote/jremote-docs/javadocs/com/jbase/jremote/io/JBaseSerializable.html#readObject-com.jbase.jremote.io.JBaseObjectReader-int-">readObject</a></code> in interface <code><a href="file:///V%3A/jremote/jremote/jremote-docs/javadocs/com/jbase/jremote/io/JBaseSerializable.html" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;">Throws:</dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>
#### 


#### WRITEOBJECT

```
public void writeObject(JBaseObjectWriter writer,                        int version)                 throws IOException
```
<dl><dt style="margin-left: 20px;">Specified by:</dt><dd style="margin-left: 20px;"><code><a href="file:///V%3A/jremote/jremote/jremote-docs/javadocs/com/jbase/jremote/io/JBaseSerializable.html#writeObject-com.jbase.jremote.io.JBaseObjectWriter-int-">writeObject</a></code> in interface <code><a href="file:///V%3A/jremote/jremote/jremote-docs/javadocs/com/jbase/jremote/io/JBaseSerializable.html" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;">Throws:</dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
#### 


#### GETTRANSACTIONID

```
public String getTransactionId()
```
<dl><dt style="margin-left: 20px;">Specified by:</dt><dd style="margin-left: 20px;"><code><a href="file:///V%3A/jremote/jremote/jremote-docs/javadocs/com/jbase/jremote/jca/inflow/protocol/InboundRequest.html#getTransactionId--">getTransactionId</a></code> in interface <code><a href="file:///V%3A/jremote/jremote/jremote-docs/javadocs/com/jbase/jremote/jca/inflow/protocol/InboundRequest.html" title="interface in com.jbase.jremote.jca.inflow.protocol">InboundRequest</a></code></dd><p style="margin-left: 20px;"><br></p><p style="margin-left: 20px;"><br></p><p>Back to <a href="com_jbase_jremote_package-summary" title="">jREMOTE API</a></p></dl>
