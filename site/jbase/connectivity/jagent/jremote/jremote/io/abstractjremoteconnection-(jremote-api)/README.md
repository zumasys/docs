# AbstractJRemoteConnection (jremote API)

**Created At:** 9/25/2017 11:40:56 AM  
**Updated At:** 4/5/2018 11:27:17 PM  
**Original Doc:** [com_jbase_jremote_io_abstractjremoteconnection](https://docs.jbase.com/39250-io/com_jbase_jremote_io_abstractjremoteconnection)  
**Original ID:** 278068  
**Internal:** No  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="AbstractJRemoteConnection (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":6,"i3":10,"i4":10,"i5":10,"i6":6,"i7":6,"i8":10,"i9":10,"i10":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;


## Class AbstractJRemoteConnection

Direct Known Subclasses:[InterceptorConnection](./../interceptorconnection-%28jremote-api%29 "class in com.jbase.jremote.io"), [JRemoteSocketConnection](./../jremotesocketconnection-%28jremote-api%29 "class in com.jbase.jremote.io")
* * *


```
public abstract class AbstractJRemoteConnection
extends Object
```

Abstract interface to a remote jBASE instance.

This abstract connection decouples the JRemoteConnection from the underlying physical connection. It performs services such as authentication in a connection independant way.

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `AbstractJRemoteConnection()` <br> |






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


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### AbstractJRemoteConnection

```
public AbstractJRemoteConnection()
```



### 


### Method Detail

#### send

```
public abstract void send(JRemoteRequest request)
                   throws JRemoteException
```
Throws:`JRemoteException`
#### 


#### receive

```
public abstract Response receive()
                          throws JRemoteException
```
Throws:`JRemoteException`
#### 


#### close

```
public abstract void close()
                    throws JRemoteException
```
Throws:`JRemoteException`
#### 


#### sendWaitForResponse

```
public Response sendWaitForResponse(JRemoteRequest request)
                             throws JRemoteException
```

Convenient method which simply calls #send followed by #receive.
Parameters:`request` - a request to the serverReturns:response from the serverThrows:`JRemoteException`
#### 


#### authenticate

```
public void authenticate(String user,
                         String password)
                  throws JRemoteException
```

Send data for authentication to the server. If the authentication fails the server will close the connection.
Throws:`JRemoteException`
#### 


#### authenticate

```
public void authenticate(String user,
                         String account,
                         String password)
                  throws JRemoteException
```

Send data for authentication to the server, the server must be configured to authenticate jBASE account connections. If the authentication fails the server will close the connection.
Throws:`JRemoteException`
#### 


#### setProperties

```
public void setProperties(Properties props)
                   throws JRemoteException
```
Throws:`JRemoteException`
#### 


#### getCharset

```
public Charset getCharset()
```

#### 


#### getCharsetEncoder

```
public CharsetEncoder getCharsetEncoder()
```

#### 


#### getCharsetDecoder

```
public CharsetDecoder getCharsetDecoder()
```

#### 


#### setCharset

```
public void setCharset(Charset charset)
```

Back to [jREMOTE API](com_jbase_jremote_package-summary)
