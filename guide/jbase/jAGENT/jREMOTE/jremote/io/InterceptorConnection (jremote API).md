# InterceptorConnection (jremote API)

**Created At:** 9/25/2017 11:51:06 AM  
**Updated At:** 12/24/2018 8:22:34 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="InterceptorConnection (jremote   API)";
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

## Class InterceptorConnection

```
public class InterceptorConnection
extends AbstractJRemoteConnection
```

This class is responsible for handling the message sending to and from an underlying JConnection. It is designed to intercept and handle returned messages that are not of the desired type. e.g. A subroutine call may have IO communication before the return parameters are received.
<dl><dt><br></dt></dl>

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `InterceptorConnection(AbstractJRemoteConnection c, InputStream is, OutputStream os)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `close()`<br>Close underlying connection.<br> |
| `Response`<br> | `receive()`<br>Intercept any IO messages and handle required input or output on in / out streams.<br> |
| `void`<br> | `send(JRemoteRequest request)` <br> |
| `void`<br> | `setInputStream(InputStream in)`<br>Set the InputStream.<br> |
| `void`<br> | `setOutputStream(OutputStream out)`<br>Set the OutputStream.<br> |
| `void`<br> | `setTerminalOutputWriter(Writer writer)`<br>Set the OutputStream.<br> |


- <!--   -->Methods inherited from class com.jbase.jremote.io.AbstractJRemoteConnection
    - `authenticate, authenticate, getCharset, getCharsetDecoder, getCharsetEncoder, sendWaitForResponse, setCharset, setProperties`
- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### InterceptorConnection

```
public InterceptorConnection(AbstractJRemoteConnection c,
                             InputStream is,
                             OutputStream os)
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### setOutputStream

```
public void setOutputStream(OutputStream out)
```

Set the OutputStream.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>out</code> - Write output received from the connection to this OutputStream</dd></dl><!--   -->
#### 


#### setTerminalOutputWriter

```
public void setTerminalOutputWriter(Writer writer)
```

Set the OutputStream.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>writer</code> - Write output received from the connection to this Writer</dd></dl><!--   -->
#### 


#### setInputStream

```
public void setInputStream(InputStream in)
```

Set the InputStream.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>in</code> - Receive input from the supplied InputStream</dd></dl><!--   -->
#### 


#### close

```
public void close()
           throws JRemoteException
```

Close underlying connection.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjremoteconnection#close--">close</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjremoteconnection" title="class in com.jbase.jremote.io">AbstractJRemoteConnection</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### send

```
public void send(JRemoteRequest request)
          throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjremoteconnection#send-com.jbase.jremote.protocol.JRemoteRequest-">send</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjremoteconnection" title="class in com.jbase.jremote.io">AbstractJRemoteConnection</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### receive

```
public Response receive()
                 throws JRemoteException
```

Intercept any IO messages and handle required input or output on in / out streams.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjremoteconnection#receive--">receive</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjremoteconnection" title="class in com.jbase.jremote.io">AbstractJRemoteConnection</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)
