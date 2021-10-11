# JConnectionFactoryUtils (jremote API)

<PageHeader />

## Class JConnectionFactoryUtils

```java
public abstract class JConnectionFactoryUtils
extends Object
```

Helper class that provides static methods for obtaining JRemote Connections from a [`JConnectionFactory`](./../../../jconnectionfactory-(jremote-api) "interface in com.jbase.jremote"). Includes special support for Spring-managed transactional Connections, e.g. managed by [`JRemoteLocalTransactionManager`](./../jremotelocaltransactionmanager-(jremote-api) "class in com.jbase.jremote.jca.spring") or `JtaTransactionManager`.

### Constructor Summary

| Constructor and Description |
| --- |
| `JConnectionFactoryUtils()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `static JConnection` | `getConnection(JConnectionFactory cf)`<br>Obtain a JConnection from the given JConnectionFactory. |
| `static boolean` | `isConnectionTransactional(JConnection con, JConnectionFactory cf)`<br>Determine whether the given JRemote Connection is transactional, that is, bound to the current thread by Spring's transaction facilities. |
| `static void` | `releaseConnection(JConnection con, JConnectionFactory cf)`<br>Close the given JConnection, obtained from the given JConnectionFactory, if it is not managed externally (that is, not bound to the thread). |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JConnectionFactoryUtils

```java
public JConnectionFactoryUtils()
```

### Method Detail

#### getConnection

```java
public static JConnection getConnection(JConnectionFactory cf)
                                 throws JRemoteException
```

Obtain a JConnection from the given JConnectionFactory. Translates ResourceExceptions into the Spring hierarchy of unchecked generic data access exceptions, simplifying calling code and making any exception that is thrown more meaningful.Is aware of a corresponding Connection bound to the current thread, for example when using [`JRemoteLocalTransactionManager`](./../jremotelocaltransactionmanager-(jremote-api) "class in com.jbase.jremote.jca.spring"). Will bind a Connection to the thread if transaction synchronization is active (e.g. if in a JTA transaction).
Parameters:`cf` - the ConnectionFactory to obtain Connection fromReturns:a JConnection from the given JConnectionFactoryThrows:`JRemoteException` - if the attempt to get a Connection failed  
See Also:[`releaseConnection(com.jbase.jremote.JConnection, com.jbase.jremote.JConnectionFactory)`](./../jconnectionfactoryutils-(jremote-api)#releaseConnection-com.jbase.jremote.JConnection-com.jbase.jremote)

#### isConnectionTransactional

```java
public static boolean isConnectionTransactional(JConnection con,
                                                JConnectionFactory cf)
```

Determine whether the given JRemote Connection is transactional, that is, bound to the current thread by Spring's transaction facilities.
Parameters:`con` - the JConnection to check`cf` - the JConnectionFactory that the JConnection was obtained from (may be `null`)Returns:whether the JConnection is transactional

#### releaseConnection

```java
public static void releaseConnection(JConnection con,
                                     JConnectionFactory cf)
```

Close the given JConnection, obtained from the given JConnectionFactory, if it is not managed externally (that is, not bound to the thread).
Parameters:`con` - the Connection to close if necessary (if this is `null`, the call will be ignored)`cf` - the ConnectionFactory that the Connection was obtained from (can be `null`)See Also:[`getConnection(com.jbase.jremote.JConnectionFactory)`](./../jconnectionfactoryutils-(jremote-api)#getConnection-com.jbase.jremote)

Back to [jRemote API](./../../README.md)

<PageFooter />
