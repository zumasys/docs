# JRemoteSocketConnection (jremote API)

**Created At:** 9/25/2017 11:52:40 AM  
**Updated At:** 4/5/2018 11:42:57 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JRemoteSocketConnection (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JRemoteSocketConnection

```
public class JRemoteSocketConnection
extends AbstractJRemoteConnection
```

This class handles the connection and communication to the jListener server over a socket interface.
<dl><dt><br></dt></dl>

<!--   -->

### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static String`<br> | `ACTION_TIMEOUT_PROPERTY` <br> |
| `static String`<br> | `ALLOW_INPUT` <br> |
| `static String`<br> | `CHARSET` <br> |
| `static String`<br> | `COMPRESSION_PROPERTY` <br> |
| `static String`<br> | `COMPRESSION_THRESHOLD_PROPERTY` <br> |
| `static String`<br> | `SSL_PROPERTY` <br> |
| `static String`<br> | `USE_NAIVE_TRUST_MANAGER_PROPERTY` <br> |




<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JRemoteSocketConnection(String host, int port)` <br> |
| `JRemoteSocketConnection(String host, int port, Properties info)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `close()` <br> |
| `int`<br> | `compressionThreshold()` <br> |
| `protected void`<br> | `connect(String host, int port)` <br> |
| `boolean`<br> | `isEnabledCompression()` <br> |
| `boolean`<br> | `isEnabledNaiveTrustManager()` <br> |
| `boolean`<br> | `isEnabledSSL()` <br> |
| `Response`<br> | `receive()` <br> |
| `void`<br> | `send(JRemoteRequest request)` <br> |


- <!--   -->Methods inherited from class com.jbase.jremote.io.AbstractJRemoteConnection
    - `authenticate, authenticate, getCharset, getCharsetDecoder, getCharsetEncoder, sendWaitForResponse, setCharset, setProperties`
- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Field Detail
<!--   -->
#### SSL\_PROPERTY

```
public static final String SSL_PROPERTY
```
<dl><dt style="margin-left: 20px;"><br></dt></dl><!--   -->
#### USE\_NAIVE\_TRUST\_MANAGER\_PROPERTY

```
public static final String USE_NAIVE_TRUST_MANAGER_PROPERTY
```
<dl><dt style="margin-left: 20px;"><br></dt></dl><!--   -->
#### COMPRESSION\_PROPERTY

```
public static final String COMPRESSION_PROPERTY
```
<dl><dt style="margin-left: 20px;"><br></dt></dl><!--   -->
#### COMPRESSION\_THRESHOLD\_PROPERTY

```
public static final String COMPRESSION_THRESHOLD_PROPERTY
```
<dl><dt style="margin-left: 20px;"><br></dt></dl><!--   -->
#### ALLOW\_INPUT

```
public static final String ALLOW_INPUT
```
<dl><dt style="margin-left: 20px;"><br></dt></dl><!--   -->
#### CHARSET

```
public static final String CHARSET
```
<dl><dt style="margin-left: 20px;"><br></dt></dl><!--   -->
#### 


#### ACTION\_TIMEOUT\_PROPERTY

```
public static final String ACTION_TIMEOUT_PROPERTY
```
<dl><dt style="margin-left: 20px;"><br></dt></dl><!-- ========= CONSTRUCTOR DETAIL ======== -->
<!--   -->

### 


### Constructor Detail
<!--   -->
#### JRemoteSocketConnection

```
public JRemoteSocketConnection(String host,
                               int port,
                               Properties info)
                        throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### JRemoteSocketConnection

```
public JRemoteSocketConnection(String host,
                               int port)
                        throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### connect

```
protected void connect(String host,
                       int port)
                throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
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
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjremoteconnection#receive--">receive</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjremoteconnection" title="class in com.jbase.jremote.io">AbstractJRemoteConnection</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### close

```
public void close()
           throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_abstractjremoteconnection#close--">close</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_abstractjremoteconnection" title="class in com.jbase.jremote.io">AbstractJRemoteConnection</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### isEnabledSSL

```
public boolean isEnabledSSL()
```
<!--   -->
#### 


#### isEnabledNaiveTrustManager

```
public boolean isEnabledNaiveTrustManager()
```
<!--   -->
#### 


#### isEnabledCompression

```
public boolean isEnabledCompression()
```
<!--   -->
#### 


#### compressionThreshold

```
public int compressionThreshold()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)


