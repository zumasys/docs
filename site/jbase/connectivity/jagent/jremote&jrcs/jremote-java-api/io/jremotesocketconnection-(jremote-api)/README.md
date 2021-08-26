# JRemoteSocketConnection (jremote API)

<PageHeader />

## Class JRemoteSocketConnection

```java
public class JRemoteSocketConnection
extends AbstractJRemoteConnection
```

This class handles the connection and communication to the jListener server over a socket interface.

### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| `static String` | `ACTION_TIMEOUT_PROPERTY`  |
| `static String` | `ALLOW_INPUT`  |
| `static String` | `CHARSET`  |
| `static String` | `COMPRESSION_PROPERTY`  |
| `static String` | `COMPRESSION_THRESHOLD_PROPERTY`  |
| `static String` | `SSL_PROPERTY`  |
| `static String` | `USE_NAIVE_TRUST_MANAGER_PROPERTY`  |

### Constructor Summary

| Constructor and Description |
| --- |
| `JRemoteSocketConnection(String host, int port)`  |
| `JRemoteSocketConnection(String host, int port, Properties info)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()`  |
| `int` | `compressionThreshold()`  |
| `protected void` | `connect(String host, int port)`  |
| `boolean` | `isEnabledCompression()`  |
| `boolean` | `isEnabledNaiveTrustManager()`  |
| `boolean` | `isEnabledSSL()`  |
| `Response` | `receive()`  |
| `void` | `send(JRemoteRequest request)`  |

- Methods inherited from class com.jbase.jremote.io.AbstractJRemoteConnection
  - `authenticate, authenticate, getCharset, getCharsetDecoder, getCharsetEncoder, sendWaitForResponse, setCharset, setProperties`
- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### SSL\_PROPERTY

```java
public static final String SSL_PROPERTY
```

#### USE\_NAIVE\_TRUST\_MANAGER\_PROPERTY

```java
public static final String USE_NAIVE_TRUST_MANAGER_PROPERTY
```

#### COMPRESSION\_PROPERTY

```java
public static final String COMPRESSION_PROPERTY
```

#### COMPRESSION\_THRESHOLD\_PROPERTY

```java
public static final String COMPRESSION_THRESHOLD_PROPERTY
```

#### ALLOW\_INPUT

```java
public static final String ALLOW_INPUT
```

#### CHARSET

```java
public static final String CHARSET
```

#### ACTION\_TIMEOUT\_PROPERTY

```java
public static final String ACTION_TIMEOUT_PROPERTY
```

### Constructor Detail

#### JRemoteSocketConnection

```java
public JRemoteSocketConnection(String host,
                               int port,
                               Properties info)
                        throws JRemoteException
```

Throws:`JRemoteException`

#### JRemoteSocketConnection

```java
public JRemoteSocketConnection(String host,
                               int port)
                        throws JRemoteException
```

Throws:`JRemoteException`

### Method Detail

#### connect

```java
protected void connect(String host,
                       int port)
                throws JRemoteException
```

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

Specified by:`receive` in class `AbstractJRemoteConnection`  
Throws:`JRemoteException`

#### close

```java
public void close()
           throws JRemoteException
```

Specified by:`close` in class `AbstractJRemoteConnection`  
Throws:`JRemoteException`

#### isEnabledSSL

```java
public boolean isEnabledSSL()
```

#### isEnabledNaiveTrustManager

```java
public boolean isEnabledNaiveTrustManager()
```

#### isEnabledCompression

```java
public boolean isEnabledCompression()
```

#### compressionThreshold

```java
public int compressionThreshold()
```

Back to [jRemote API](./../../README.md)
  
<PageFooter />
