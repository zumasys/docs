# ActivationRequest (jremote API)

**Created At:** 9/25/2017 12:01:54 PM  
**Updated At:** 4/5/2018 9:48:28 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="ActivationRequest (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript>&amp;amp;amp;lt;div&amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;lt;/div&amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class ActivationRequest

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a>, <a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest" title="interface in com.jbase.jremote.jca.inflow.protocol">InboundRequest</a>, Runnable, javax.resource.spi.work.Work</dd></dl>
* * *


```
public class ActivationRequest
extends Object
implements InboundRequest, javax.resource.spi.work.Work
```

<!--   -->

### Nested Class Summary

- <!--   -->Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`




<!--   -->

### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| ` `<br> | `ActivationRequest()`<br>constructor required for object creation<br> |
| `protected `<br> | `ActivationRequest(String activation, byte[] message, String transactionId)`<br>constructor required for tests<br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JBaseSerializable`<br> | `execute(ClientHandle handle, RequestHandler handler)` <br> |
| `String`<br> | `getActivation()` <br> |
| `byte[]`<br> | `getMessage()` <br> |
| `String`<br> | `getTransactionId()` <br> |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `protected javax.resource.spi.work.WorkListener`<br> | `getWorkListener()` <br> |
| `void`<br> | `notifyWorkScheduled()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `release()` <br> |
| `void`<br> | `run()` <br> |
| `void`<br> | `sendReply()` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### ActivationRequest

```
public ActivationRequest()
```

constructor required for object creation

#### 

#### 


#### ActivationRequest

```
protected ActivationRequest(String activation,
                            byte[] message,
                            String transactionId)
```

constructor required for tests



<!--   -->

### Method Detail
<!--   -->
#### getType

```
public int getType()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#getType--">getType</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">type id of the objects, used during the serialization</dd></dl>
#### 

#### 


#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#readObject-com.jbase.jremote.io.JBaseObjectReader-int-">readObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>
#### 

#### 


#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#writeObject-com.jbase.jremote.io.JBaseObjectWriter-int-">writeObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
#### 

#### 


#### getActivation

```
public String getActivation()
```

#### 

#### 


#### getMessage

```
public byte[] getMessage()
```

#### 

#### 


#### getTransactionId

```
public String getTransactionId()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest#getTransactionId--">getTransactionId</a></code> in interface <code><a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest" title="interface in com.jbase.jremote.jca.inflow.protocol">InboundRequest</a></code></dd></dl>
#### 

#### 


#### execute

```
public JBaseSerializable execute(ClientHandle handle,
                                 RequestHandler handler)
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest#execute-com.jbase.jremote.io.inflow.ClientHandle-com.jbase.jremote.io.inflow.RequestHandler-">execute</a></code> in interface <code><a href="/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest" title="interface in com.jbase.jremote.jca.inflow.protocol">InboundRequest</a></code></dd></dl>
#### 

#### 


#### getWorkListener

```
protected javax.resource.spi.work.WorkListener getWorkListener()
```

#### 

#### 


#### release

```
public void release()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>release</code> in interface <code>javax.resource.spi.work.Work</code></dd></dl>
#### 

#### 


#### run

```
public void run()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Runnable.html?is-external=true#run--" title="class or interface in java.lang">run</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Runnable.html?is-external=true" title="class or interface in java.lang">Runnable</a></code></dd></dl>
#### 

#### 


#### notifyWorkScheduled

```
public void notifyWorkScheduled()
```

#### 

#### 


#### sendReply

```
public void sendReply()
```

#### 

#### 


#### getVersion

```
public int getVersion()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#getVersion--">getVersion</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)
