# JRemoteConnectionFactoryImpl (jremote API)

<PageHeader />

## Class JRemoteConnectionFactoryImpl

**All Implemented Interfaces:**
[JConnectionFactory](./../../jconnectionfactory-(jremote-api) "interface in com.jbase.jremote"), Serializable, Referenceable
* * *

```java
public class JRemoteConnectionFactoryImpl
extends Object
implements javax.resource.Referenceable, Serializable, JConnectionFactory
```

The concrete implementation of a remote jBASE connection factory.

This factory can be used from a managed and non managed environment (see Java Connector Architecture specification). In the managed environment an application server or other environment will supply a ManagedConnectionFactory that holds all the details for how to create a connection. For example a user name, host address, or account to connect to.

When used in a managed environment it is expected that this factory will be constructed with a ConnectionManager that offers connection pooling or a better level of service.

The non managed environment will use a default ConnectionManager that offers little or no support for connection pooling.

### Constructor Summary

| Constructor and Description |
| --- |
| `JRemoteConnectionFactoryImpl()`<br>Construct a connection factory for use in a non managed environment using the default connection manager. |
| `JRemoteConnectionFactoryImpl(javax.resource.spi.ManagedConnectionFactory mcf)`<br>Construct a connection factory for use in a non managed environment using the default connection manager. |
| `JRemoteConnectionFactoryImpl(javax.resource.spi.ManagedConnectionFactory mcf, javax.resource.spi.ConnectionManager cm)`<br>Constructor for managed connection factory. |






### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
| `JConnection` | `getConnection()`<br>Get a connection to a remote jBASE instance. |
| `JConnection` | `getConnection(JConnectionCallbackHandler handler)`<br>Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation. |
| `JConnection` | `getConnection(String user, String password)`<br>Get a connection to a remote jBASE instance. |
| `JConnection` | `getConnection(String user, String password, Properties props)`<br>Get a connection to a remote jBASE instance. |
| `JConnection` | `getConnection(String user, String account, String password)`<br>Get a connection to a remote jBASE account. |
| `protected JConnection` | `getConnection(String user, String account, String password, JConnectionCallbackHandler handler)`  |
| `Reference` | `getReference()`  |
| `void` | `setReference(Reference reference)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JRemoteConnectionFactoryImpl

```java
public JRemoteConnectionFactoryImpl()
```

Construct a connection factory for use in a non managed environment using the default connection manager.
See Also:[`DefaultConnectionManager`](./../defaultconnectionmanager-(jremote-api) "class in com.jbase.jremote.jca")

#### JRemoteConnectionFactoryImpl

```java
public JRemoteConnectionFactoryImpl(javax.resource.spi.ManagedConnectionFactory mcf)
```

Construct a connection factory for use in a non managed environment using the default connection manager.
See Also:[`DefaultConnectionManager`](./../defaultconnectionmanager-(jremote-api) "class in com.jbase.jremote.jca")

#### JRemoteConnectionFactoryImpl

```java
public JRemoteConnectionFactoryImpl(javax.resource.spi.ManagedConnectionFactory mcf,
                                    javax.resource.spi.ConnectionManager cm)
```

Constructor for managed connection factory. The application server will use this constructor and supply a configured ManagedConnectionFactory and ConnectionManager. This class will hook into the application server connection pool via the supplied ConnectionManager.

### Method Detail

#### getConnection

```java
public JConnection getConnection()
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance.
Specified by:`getConnection` in interface `JConnectionFactory`  
Returns:JConnection The connectionThrows:`JRemoteException`

#### getConnection

```java
public JConnection getConnection(String user,
                                 String password)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance.
Specified by:`getConnection` in interface `JConnectionFactory`  
Returns:JConnection The connectionThrows:`JRemoteException`

#### getConnection

```java
public JConnection getConnection(String user,
                                 String password,
                                 Properties props)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance.
Specified by:`getConnection` in interface `JConnectionFactory`  
Returns:JConnection The connectionThrows:`JRemoteException`

#### getConnection

```java
public JConnection getConnection(String user,
                                 String account,
                                 String password)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE account.
Specified by:`getConnection` in interface `JConnectionFactory`  
Returns:JConnection The connectionThrows:`JRemoteException`

#### getConnection

```java
public JConnection getConnection(JConnectionCallbackHandler handler)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation.
Specified by:`getConnection` in interface `JConnectionFactory`  
Returns:JConnection The connectionThrows:`JRemoteException`

#### getConnection

```java
protected JConnection getConnection(String user,
                                    String account,
                                    String password,
                                    JConnectionCallbackHandler handler)
                             throws JRemoteException
```

Throws:`JRemoteException`

#### setReference

```java
public void setReference(Reference reference)
```

See Also:`Referenceable.setReference(Reference)`

#### getReference

```java
public Reference getReference()
                       throws NamingException
```

Specified by:`getReference` in interface `Referenceable`  
Throws:`NamingException`  
See Also:`Referenceable.getReference()`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
