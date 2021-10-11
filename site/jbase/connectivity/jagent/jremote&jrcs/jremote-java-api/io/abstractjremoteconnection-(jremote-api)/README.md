# AbstractJRemoteConnection (jremote API)

<PageHeader />

## Class AbstractJRemoteConnection

Direct Known Subclasses:[InterceptorConnection](./../interceptorconnection-(jremote-api) "class in com.jbase.jremote.io"), [JRemoteSocketConnection](./../jremotesocketconnection-(jremote-api) "class in com.jbase.jremote.io")
* * *

```java
public abstract class AbstractJRemoteConnection
extends Object
```

Abstract interface to a remote jBASE instance.

This abstract connection decouples the JRemoteConnection from the underlying physical connection. It performs services such as authentication in a connection independant way.

### Constructor Summary

| Constructor and Description |
| --- |
| `AbstractJRemoteConnection()`  |

### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `authenticate(String user, String password)`<br>Send data for authentication to the server. |
| `void` | `authenticate(String user, String account, String password)`<br>Send data for authentication to the server, the server must be configured to authenticate jBASE account connections. |
| `abstract void` | `close()`  |
| `Charset` | `getCharset()`  |
| `CharsetDecoder` | `getCharsetDecoder()`  |
| `CharsetEncoder` | `getCharsetEncoder()`  |
| `abstract Response` | `receive()`  |
| `abstract void` | `send(JRemoteRequest request)`  |
| `Response` | `sendWaitForResponse(JRemoteRequest request)`<br>Convenient method which simply calls #send followed by #receive. |
| `void` | `setCharset(Charset charset)`  |
| `void` | `setProperties(Properties props)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### AbstractJRemoteConnection

```java
public AbstractJRemoteConnection()
```

### Method Detail

#### send

```java
public abstract void send(JRemoteRequest request)
                   throws JRemoteException
```

Throws:`JRemoteException`

#### receive

```java
public abstract Response receive()
                          throws JRemoteException
```

Throws:`JRemoteException`

#### close

```java
public abstract void close()
                    throws JRemoteException
```

Throws:`JRemoteException`

#### sendWaitForResponse

```java
public Response sendWaitForResponse(JRemoteRequest request)
                             throws JRemoteException
```

Convenient method which simply calls #send followed by #receive.  
Parameters:`request` - a request to the serverReturns:response from the serverThrows:`JRemoteException`

#### authenticate

```java
public void authenticate(String user,
                         String password)
                  throws JRemoteException
```

Send data for authentication to the server. If the authentication fails the server will close the connection.  
Throws:`JRemoteException`

#### authenticate

```java
public void authenticate(String user,
                         String account,
                         String password)
                  throws JRemoteException
```

Send data for authentication to the server, the server must be configured to authenticate jBASE account connections. If the authentication fails the server will close the connection.  
Throws:`JRemoteException`

#### setProperties

```java
public void setProperties(Properties props)
                   throws JRemoteException
```

Throws:`JRemoteException`

#### getCharset

```java
public Charset getCharset()
```

#### getCharsetEncoder

```java
public CharsetEncoder getCharsetEncoder()
```

#### getCharsetDecoder

```java
public CharsetDecoder getCharsetDecoder()
```

#### setCharset

```java
public void setCharset(Charset charset)
```

Back to [jRemote API](./../../README.md)
  
<PageFooter />
