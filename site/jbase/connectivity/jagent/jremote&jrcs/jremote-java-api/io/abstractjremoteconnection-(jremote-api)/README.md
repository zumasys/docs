# AbstractJRemoteConnection (jremote API)

<PageHeader />

## Class AbstractJRemoteConnection

Direct Known Subclasses:[InterceptorConnection](./../interceptorconnection-(jremote-api) "class in com.jbase.jremote.io"), [JRemoteSocketConnection](./../jremotesocketconnection-(jremote-api) "class in com.jbase.jremote.io")
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

Back to [jRemote API](../../../../jremote-api/README.md)

  
<PageFooter />
