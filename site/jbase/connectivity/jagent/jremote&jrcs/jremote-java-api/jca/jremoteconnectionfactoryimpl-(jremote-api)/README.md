# JRemoteConnectionFactoryImpl (jremote API)

<PageHeader />

## Class JRemoteConnectionFactoryImpl

**All Implemented Interfaces:**
[JConnectionFactory](./../../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote"), Serializable, Referenceable
* * *


```
public class JRemoteConnectionFactoryImpl
extends Object
implements javax.resource.Referenceable, Serializable, JConnectionFactory
```

The concrete implementation of a remote jBASE connection factory.

This factory can be used from a managed and non managed environment (see Java Connector Architecture specification). In the managed environment an application server or other environment will supply a ManagedConnectionFactory that holds all the details for how to create a connection. For example a user name, host address, or account to connect to.

When used in a managed environment it is expected that this factory will be constructed with a ConnectionManager that offers connection pooling or a better level of service.

The non managed environment will use a default ConnectionManager that offers little or no support for connection pooling.



### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JRemoteConnectionFactoryImpl()`<br>Construct a connection factory for use in a non managed environment using the default connection manager.<br> |
| `JRemoteConnectionFactoryImpl(javax.resource.spi.ManagedConnectionFactory mcf)`<br>Construct a connection factory for use in a non managed environment using the default connection manager.<br> |
| `JRemoteConnectionFactoryImpl(javax.resource.spi.ManagedConnectionFactory mcf, javax.resource.spi.ConnectionManager cm)`<br>Constructor for managed connection factory.<br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JConnection`<br> | `getConnection()`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(JConnectionCallbackHandler handler)`<br>Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation.<br> |
| `JConnection`<br> | `getConnection(String user, String password)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(String user, String password, Properties props)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(String user, String account, String password)`<br>Get a connection to a remote jBASE account.<br> |
| `protected JConnection`<br> | `getConnection(String user, String account, String password, JConnectionCallbackHandler handler)` <br> |
| `Reference`<br> | `getReference()` <br> |
| `void`<br> | `setReference(Reference reference)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JRemoteConnectionFactoryImpl

```
public JRemoteConnectionFactoryImpl()
```

Construct a connection factory for use in a non managed environment using the default connection manager.
See Also:[`DefaultConnectionManager`](./../defaultconnectionmanager-%28jremote-api%29 "class in com.jbase.jremote.jca")


#### JRemoteConnectionFactoryImpl

```
public JRemoteConnectionFactoryImpl(javax.resource.spi.ManagedConnectionFactory mcf)
```

Construct a connection factory for use in a non managed environment using the default connection manager.
See Also:[`DefaultConnectionManager`](./../defaultconnectionmanager-%28jremote-api%29 "class in com.jbase.jremote.jca")

#### JRemoteConnectionFactoryImpl

```
public JRemoteConnectionFactoryImpl(javax.resource.spi.ManagedConnectionFactory mcf,
                                    javax.resource.spi.ConnectionManager cm)
```

Constructor for managed connection factory. The application server will use this constructor and supply a configured ManagedConnectionFactory and ConnectionManager. This class will hook into the application server connection pool via the supplied ConnectionManager.



### Method Detail



#### getConnection

```
public JConnection getConnection()
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance.
Specified by:`getConnection` in interface `JConnectionFactory`Returns:JConnection The connectionThrows:`JRemoteException`


#### getConnection

```
public JConnection getConnection(String user,
                                 String password)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance.
Specified by:`getConnection` in interface `JConnectionFactory`Returns:JConnection The connectionThrows:`JRemoteException`


#### getConnection

```
public JConnection getConnection(String user,
                                 String password,
                                 Properties props)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance.
Specified by:`getConnection` in interface `JConnectionFactory`Returns:JConnection The connectionThrows:`JRemoteException`

#### getConnection

```
public JConnection getConnection(String user,
                                 String account,
                                 String password)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE account.
Specified by:`getConnection` in interface `JConnectionFactory`Returns:JConnection The connectionThrows:`JRemoteException`



#### getConnection

```
public JConnection getConnection(JConnectionCallbackHandler handler)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation.
Specified by:`getConnection` in interface `JConnectionFactory`Returns:JConnection The connectionThrows:`JRemoteException`



#### getConnection

```
protected JConnection getConnection(String user,
                                    String account,
                                    String password,
                                    JConnectionCallbackHandler handler)
                             throws JRemoteException
```
Throws:`JRemoteException`

#### setReference

```
public void setReference(Reference reference)
```
See Also:`Referenceable.setReference(Reference)`

#### getReference

```
public Reference getReference()
                       throws NamingException
```
Specified by:`getReference` in interface `Referenceable`Throws:`NamingException`See Also:`Referenceable.getReference()`


Back to [jREMOTE API](com_jbase_jremote_package-summary)



  
<PageFooter />
