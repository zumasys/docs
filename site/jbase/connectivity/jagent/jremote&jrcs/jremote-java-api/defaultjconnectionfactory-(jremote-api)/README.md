# DefaultJConnectionFactory (jremote API)

<PageHeader />

## Class DefaultJConnectionFactory

**All Implemented Interfaces:**

[JConnectionFactory](./../jconnectionfactory-(jremote-api) "interface in com.jbase.jremote")

* * *

```java
public class DefaultJConnectionFactory
extends Object
implements JConnectionFactory
```

The default implementation of a JConnectionFactory that will connect to a remote jBASE instance using a host and a port.

### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| static boolean | DEFAULT\_ENABLE\_COMPRESSION  |
| static boolean | DEFAULT\_ENABLE\_NAIVETRUSTMANAGER  |
| static boolean | DEFAULT\_ENABLE\_SSL  |
| static int | DEFAULT\_PORT  |
| static String | JBASE\_PRODUCT\_JREMOTEJAVA  |

### Constructor Summary

| Constructor and Description |
| --- |
| `DefaultJConnectionFactory()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `disableCompression()`  |
| `void` | `disableNaiveTrustManager()`  |
| `void` | `disableSSL()`  |
| `void` | `enableCompression()`  |
| `void` | `enableNaiveTrustManager()`  |
| `void` | `enableSSL()`  |
| `JConnection` | `getConnection()`<br>Get a connection to a remote jBASE instance. |
| `JConnection` | `getConnection(JConnectionCallbackHandler handler)`<br>Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation. |
| `JConnection` | `getConnection(String user, String password)`<br>Get a connection to a remote jBASE instance. |
| `JConnection` | `getConnection(String user, String password, Properties props)`<br>Get a connection to a remote jBASE instance. |
| `JConnection` | `getConnection(String user, String account, String password)`<br>Get a connection to a remote jBASE account. |
| `protected Properties` | `getConnectionProperties()`  |
| `protected Properties` | `getConnectionProperties(Properties props)`  |
| `String` | `getHost()`  |
| `int` | `getPort()`  |
| `boolean` | `isEnabledCompression()`  |
| `boolean` | `isEnabledNaiveTrustManager()`  |
| `boolean` | `isEnabledSSL()`  |
| `void` | `setHost(String host)`  |
| `void` | `setPort(int port)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### DEFAULT\_PORT

```java
public static final int DEFAULT_PORT
```

See Also:[Constant Field Values](./../constant-field-values)

#### DEFAULT\_ENABLE\_SSL

```java
public static final boolean DEFAULT_ENABLE_SSL
```

See Also:[Constant Field Values](./../constant-field-values)

#### DEFAULT\_ENABLE\_NAIVETRUSTMANAGER

```java
public static final boolean DEFAULT_ENABLE_NAIVETRUSTMANAGER
```

See Also:[Constant Field Values](./../constant-field-values)

#### DEFAULT\_ENABLE\_COMPRESSION

```java
public static final boolean DEFAULT_ENABLE_COMPRESSION
```

See Also:[Constant Field Values](./../constant-field-values)

#### JBASE\_PRODUCT\_JREMOTEJAVA

```java
public static final String JBASE_PRODUCT_JREMOTEJAVA
```

See Also:[Constant Field Values](./../constant-field-values)

Back to [jRemote API](./../../README.md)

### Constructor Detail

#### DefaultJConnectionFactory

```java
public DefaultJConnectionFactory()
```

### Method Detail

#### getConnection

```java
public JConnection getConnection()
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance.
Specified by:`getConnection` in interface `JConnectionFactory`Returns:JConnection The connectionThrows:`JRemoteException`

#### getConnection

```java
public JConnection getConnection(String user,
                                 String password)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance.
Specified by:`getConnection` in interface `JConnectionFactory`Returns:JConnection The connectionThrows:`JRemoteException`

#### getConnection
```java
public JConnection getConnection(String user,
                                 String password,
                                 Properties props)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance.
Specified by:`getConnection` in interface `JConnectionFactory`Returns:JConnection The connectionThrows:`JRemoteException`

#### getConnection

```java
public JConnection getConnection(String user,
                                 String account,
                                 String password)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE account.
Specified by:`getConnection` in interface `JConnectionFactory`Returns:JConnection The connectionThrows:`JRemoteException`

#### getConnection

```java
public JConnection getConnection(JConnectionCallbackHandler handler)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialization.
Specified by:`getConnection` in interface `JConnectionFactory`Returns:JConnection The connectionThrows:`JRemoteException`

#### getConnectionProperties

```java
protected Properties getConnectionProperties()
```

#### getConnectionProperties

```java
protected Properties getConnectionProperties(Properties props)
```

#### getHost

```java
public String getHost()
```

#### setHost

```java
public void setHost(String host)
```

#### getPort

```java
public int getPort()
```

#### setPort

```java
public void setPort(int port)
```

#### enableSSL

```java
public void enableSSL()
```

#### disableSSL

```java
public void disableSSL()
```

#### isEnabledSSL

```java
public boolean isEnabledSSL()
```

#### enableNaiveTrustManager

```java
public void enableNaiveTrustManager()
```

#### disableNaiveTrustManager

```java
public void disableNaiveTrustManager()
```

#### isEnabledNaiveTrustManager

```java
public boolean isEnabledNaiveTrustManager()
```

#### enableCompression

```java
public void enableCompression()
```

#### disableCompression

```java
public void disableCompression()
```

#### isEnabledCompression

```java
public boolean isEnabledCompression()
```

Back to [jRemote API](./../../README.md)

<PageFooter />
