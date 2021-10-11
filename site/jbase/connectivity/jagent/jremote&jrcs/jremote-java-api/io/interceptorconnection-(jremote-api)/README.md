# InterceptorConnection (jremote API)

<PageHeader />

## Class InterceptorConnection

```java
public class InterceptorConnection
extends AbstractJRemoteConnection
```

This class is responsible for handling the message sending to and from an underlying JConnection. It is designed to intercept and handle returned messages that are not of the desired type. e.g. A subroutine call may have IO communication before the return parameters are received.

### Constructor Summary

| Constructor and Description |
| --- |
| `InterceptorConnection(AbstractJRemoteConnection c, InputStream is, OutputStream os)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()`<br>Close underlying connection. |
| `Response` | `receive()`<br>Intercept any IO messages and handle required input or output on in / out streams. |
| `void` | `send(JRemoteRequest request)`  |
| `void` | `setInputStream(InputStream in)`<br>Set the InputStream. |
| `void` | `setOutputStream(OutputStream out)`<br>Set the OutputStream. |
| `void` | `setTerminalOutputWriter(Writer writer)`<br>Set the OutputStream. |

- Methods inherited from class com.jbase.jremote.io.AbstractJRemoteConnection
  - `authenticate, authenticate, getCharset, getCharsetDecoder, getCharsetEncoder, sendWaitForResponse, setCharset, setProperties`
- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### InterceptorConnection

```java
public InterceptorConnection(AbstractJRemoteConnection c,
                             InputStream is,
                             OutputStream os)
```

### Method Detail

#### setOutputStream

```java
public void setOutputStream(OutputStream out)
```

Set the OutputStream.  
Parameters:`out` - Write output received from the connection to this OutputStream

#### setTerminalOutputWriter

```java
public void setTerminalOutputWriter(Writer writer)
```

Set the OutputStream.  
Parameters:`writer` - Write output received from the connection to this Writer

#### setInputStream

```java
public void setInputStream(InputStream in)
```

Set the InputStream.  
Parameters:`in` - Receive input from the supplied InputStream

#### close

```java
public void close()
           throws JRemoteException
```

Close underlying connection.  
Specified by:`close` in class `AbstractJRemoteConnection`  
Throws:`JRemoteException`

#### send

```java
public void send(JRemoteRequest request)
          throws JRemoteException
```

Specified by:`send` in class `AbstractJRemoteConnection`  
Throws:`JRemoteException`

#### receive

```java
public Response receive()
                 throws JRemoteException
```

Intercept any IO messages and handle required input or output on in / out streams.  
Specified by:`receive` in class `AbstractJRemoteConnection`  
Throws:`JRemoteException`

Back to [jRemote API](./../../README.md)

<PageFooter />
