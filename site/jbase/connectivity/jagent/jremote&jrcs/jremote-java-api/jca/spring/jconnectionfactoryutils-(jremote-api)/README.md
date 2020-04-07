# JConnectionFactoryUtils (jremote API)

<PageHeader />

## Class JConnectionFactoryUtils

```
public abstract class JConnectionFactoryUtils
extends Object
```

Helper class that provides static methods for obtaining JRemote Connections from a [`JConnectionFactory`](./../../../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote"). Includes special support for Spring-managed transactional Connections, e.g. managed by [`JRemoteLocalTransactionManager`](./../jremotelocaltransactionmanager-%28jremote-api%29 "class in com.jbase.jremote.jca.spring") or `JtaTransactionManager`.

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JConnectionFactoryUtils()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `static JConnection`<br> | `getConnection(JConnectionFactory cf)`<br>Obtain a JConnection from the given JConnectionFactory.<br> |
| `static boolean`<br> | `isConnectionTransactional(JConnection con, JConnectionFactory cf)`<br>Determine whether the given JRemote Connection is transactional, that is, bound to the current thread by Spring's transaction facilities.<br> |
| `static void`<br> | `releaseConnection(JConnection con, JConnectionFactory cf)`<br>Close the given JConnection, obtained from the given JConnectionFactory, if it is not managed externally (that is, not bound to the thread).<br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JConnectionFactoryUtils

```
public JConnectionFactoryUtils()
```



### 


### Method Detail

#### getConnection

```
public static JConnection getConnection(JConnectionFactory cf)
                                 throws JRemoteException
```

Obtain a JConnection from the given JConnectionFactory. Translates ResourceExceptions into the Spring hierarchy of unchecked generic data access exceptions, simplifying calling code and making any exception that is thrown more meaningful.Is aware of a corresponding Connection bound to the current thread, for example when using [`JRemoteLocalTransactionManager`](./../jremotelocaltransactionmanager-%28jremote-api%29 "class in com.jbase.jremote.jca.spring"). Will bind a Connection to the thread if transaction synchronization is active (e.g. if in a JTA transaction).
Parameters:`cf` - the ConnectionFactory to obtain Connection fromReturns:a JConnection from the given JConnectionFactoryThrows:`JRemoteException` - if the attempt to get a Connection failedSee Also:[`releaseConnection(com.jbase.jremote.JConnection, com.jbase.jremote.JConnectionFactory)`](./../jconnectionfactoryutils-%28jremote-api%29#releaseConnection-com.jbase.jremote.JConnection-com.jbase.jremote)
#### 


#### isConnectionTransactional

```
public static boolean isConnectionTransactional(JConnection con,
                                                JConnectionFactory cf)
```

Determine whether the given JRemote Connection is transactional, that is, bound to the current thread by Spring's transaction facilities.
Parameters:`con` - the JConnection to check`cf` - the JConnectionFactory that the JConnection was obtained from (may be `null`)Returns:whether the JConnection is transactional
#### 


#### releaseConnection

```
public static void releaseConnection(JConnection con,
                                     JConnectionFactory cf)
```

Close the given JConnection, obtained from the given JConnectionFactory, if it is not managed externally (that is, not bound to the thread).
Parameters:`con` - the Connection to close if necessary (if this is `null`, the call will be ignored)`cf` - the ConnectionFactory that the Connection was obtained from (can be `null`)See Also:[`getConnection(com.jbase.jremote.JConnectionFactory)`](./../jconnectionfactoryutils-%28jremote-api%29#getConnection-com.jbase.jremote)

Back to [jREMOTE API](com_jbase_jremote_package-summary)
