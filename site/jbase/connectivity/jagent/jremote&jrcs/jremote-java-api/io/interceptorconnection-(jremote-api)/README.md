# InterceptorConnection (jremote API)

<PageHeader />

## Class InterceptorConnection

```
public class InterceptorConnection
extends AbstractJRemoteConnection
```

This class is responsible for handling the message sending to and from an underlying JConnection. It is designed to intercept and handle returned messages that are not of the desired type. e.g. A subroutine call may have IO communication before the return parameters are received.

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `InterceptorConnection(AbstractJRemoteConnection c, InputStream is, OutputStream os)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `close()`<br>Close underlying connection.<br> |
| `Response`<br> | `receive()`<br>Intercept any IO messages and handle required input or output on in / out streams.<br> |
| `void`<br> | `send(JRemoteRequest request)` <br> |
| `void`<br> | `setInputStream(InputStream in)`<br>Set the InputStream.<br> |
| `void`<br> | `setOutputStream(OutputStream out)`<br>Set the OutputStream.<br> |
| `void`<br> | `setTerminalOutputWriter(Writer writer)`<br>Set the OutputStream.<br> |


- Methods inherited from class com.jbase.jremote.io.AbstractJRemoteConnection
    - `authenticate, authenticate, getCharset, getCharsetDecoder, getCharsetEncoder, sendWaitForResponse, setCharset, setProperties`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### InterceptorConnection

```
public InterceptorConnection(AbstractJRemoteConnection c,
                             InputStream is,
                             OutputStream os)
```



### 


### Method Detail

#### setOutputStream

```
public void setOutputStream(OutputStream out)
```

Set the OutputStream.
Parameters:`out` - Write output received from the connection to this OutputStream
#### 


#### setTerminalOutputWriter

```
public void setTerminalOutputWriter(Writer writer)
```

Set the OutputStream.
Parameters:`writer` - Write output received from the connection to this Writer
#### 


#### setInputStream

```
public void setInputStream(InputStream in)
```

Set the InputStream.
Parameters:`in` - Receive input from the supplied InputStream
#### 


#### close

```
public void close()
           throws JRemoteException
```

Close underlying connection.
Specified by:`close` in class `AbstractJRemoteConnection`Throws:`JRemoteException`
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

Intercept any IO messages and handle required input or output on in / out streams.
Specified by:`receive` in class `AbstractJRemoteConnection`Throws:`JRemoteException`

Back to [jREMOTE API](com_jbase_jremote_package-summary)
