# JRemoteSocketConnection (jremote API)

**Created At:** 9/25/2017 11:52:40 AM  
**Updated At:** 4/5/2018 11:42:57 PM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JRemoteSocketConnection (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class JRemoteSocketConnection

```
public class JRemoteSocketConnection
extends AbstractJRemoteConnection
```

This class handles the connection and communication to the jListener server over a socket interface.

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






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JRemoteSocketConnection(String host, int port)` <br> |
| `JRemoteSocketConnection(String host, int port, Properties info)` <br> |






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


- Methods inherited from class com.jbase.jremote.io.AbstractJRemoteConnection
    - `authenticate, authenticate, getCharset, getCharsetDecoder, getCharsetEncoder, sendWaitForResponse, setCharset, setProperties`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### SSL\_PROPERTY

```
public static final String SSL_PROPERTY
```


#### USE\_NAIVE\_TRUST\_MANAGER\_PROPERTY

```
public static final String USE_NAIVE_TRUST_MANAGER_PROPERTY
```


#### COMPRESSION\_PROPERTY

```
public static final String COMPRESSION_PROPERTY
```


#### COMPRESSION\_THRESHOLD\_PROPERTY

```
public static final String COMPRESSION_THRESHOLD_PROPERTY
```


#### ALLOW\_INPUT

```
public static final String ALLOW_INPUT
```


#### CHARSET

```
public static final String CHARSET
```


#### 


#### ACTION\_TIMEOUT\_PROPERTY

```
public static final String ACTION_TIMEOUT_PROPERTY
```




### 


### Constructor Detail

#### JRemoteSocketConnection

```
public JRemoteSocketConnection(String host,
                               int port,
                               Properties info)
                        throws JRemoteException
```
Throws:`JRemoteException`
#### 


#### JRemoteSocketConnection

```
public JRemoteSocketConnection(String host,
                               int port)
                        throws JRemoteException
```
Throws:`JRemoteException`


### 


### Method Detail

#### connect

```
protected void connect(String host,
                       int port)
                throws JRemoteException
```
Throws:`JRemoteException`
#### 


#### send

```
public void send(JRemoteRequest request)
          throws JRemoteException
```
Specified by:`send` in class `AbstractJRemoteConnection`Throws:`JRemoteException`
#### 


#### receive

```
public Response receive()
                 throws JRemoteException
```
Specified by:`receive` in class `AbstractJRemoteConnection`Throws:`JRemoteException`
#### 


#### close

```
public void close()
           throws JRemoteException
```
Specified by:`close` in class `AbstractJRemoteConnection`Throws:`JRemoteException`
#### 


#### isEnabledSSL

```
public boolean isEnabledSSL()
```

#### 


#### isEnabledNaiveTrustManager

```
public boolean isEnabledNaiveTrustManager()
```

#### 


#### isEnabledCompression

```
public boolean isEnabledCompression()
```

#### 


#### compressionThreshold

```
public int compressionThreshold()
```

Back to [jREMOTE API](com_jbase_jremote_package-summary)


