# AbstractJRemoteConnection (jremote API)

**Created At:** 9/25/2017 11:40:56 AM  
**Updated At:** 4/5/2018 11:27:17 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="AbstractJRemoteConnection (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":6,"i3":10,"i4":10,"i5":10,"i6":6,"i7":6,"i8":10,"i9":10,"i10":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript>&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class AbstractJRemoteConnection

<dl><dt>Direct Known Subclasses:</dt><dd><a href="/39250-io/com_jbase_jremote_io_interceptorconnection" title="class in com.jbase.jremote.io">InterceptorConnection</a>, <a href="/39250-io/com_jbase_jremote_io_jremotesocketconnection" title="class in com.jbase.jremote.io">JRemoteSocketConnection</a></dd></dl>
* * *


```
public abstract class AbstractJRemoteConnection
extends Object
```

Abstract interface to a remote jBASE instance.

This abstract connection decouples the JRemoteConnection from the underlying physical connection. It performs services such as authentication in a connection independant way.
<dl><dt><br></dt></dl>

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `AbstractJRemoteConnection()` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `authenticate(String user, String password)`<br>Send data for authentication to the server.<br> |
| `void`<br> | `authenticate(String user, String account, String password)`<br>Send data for authentication to the server, the server must be configured to authenticate jBASE account connections.<br> |
| `abstract void`<br> | `close()` <br> |
| `Charset`<br> | `getCharset()` <br> |
| `CharsetDecoder`<br> | `getCharsetDecoder()` <br> |
| `CharsetEncoder`<br> | `getCharsetEncoder()` <br> |
| `abstract Response`<br> | `receive()` <br> |
| `abstract void`<br> | `send(JRemoteRequest request)` <br> |
| `Response`<br> | `sendWaitForResponse(JRemoteRequest request)`<br>Convenient method which simply calls #send followed by #receive.<br> |
| `void`<br> | `setCharset(Charset charset)` <br> |
| `void`<br> | `setProperties(Properties props)` <br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### AbstractJRemoteConnection

```
public AbstractJRemoteConnection()
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### send

```
public abstract void send(JRemoteRequest request)
                   throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### receive

```
public abstract Response receive()
                          throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### close

```
public abstract void close()
                    throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### sendWaitForResponse

```
public Response sendWaitForResponse(JRemoteRequest request)
                             throws JRemoteException
```

Convenient method which simply calls #send followed by #receive.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>request</code> - a request to the server</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">response from the server</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### authenticate

```
public void authenticate(String user,
                         String password)
                  throws JRemoteException
```

Send data for authentication to the server. If the authentication fails the server will close the connection.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### authenticate

```
public void authenticate(String user,
                         String account,
                         String password)
                  throws JRemoteException
```

Send data for authentication to the server, the server must be configured to authenticate jBASE account connections. If the authentication fails the server will close the connection.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### setProperties

```
public void setProperties(Properties props)
                   throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### getCharset

```
public Charset getCharset()
```
<!--   -->
#### 


#### getCharsetEncoder

```
public CharsetEncoder getCharsetEncoder()
```
<!--   -->
#### 


#### getCharsetDecoder

```
public CharsetDecoder getCharsetDecoder()
```
<!--   -->
#### 


#### setCharset

```
public void setCharset(Charset charset)
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)
