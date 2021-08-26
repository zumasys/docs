# JRemoteManagedConnection (jremote API)

<PageHeader />

## Class JRemoteManagedConnection

All Implemented Interfaces:javax.resource.spi.ManagedConnection
* * *

```java
public class JRemoteManagedConnection
extends Object
implements javax.resource.spi.ManagedConnection
```

The application server considers this managed connection to be the physical connection to a remote jBASE instance.

### Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| `protected ` | `JRemoteManagedConnection()`<br>Constructor for JRemoteManagedConnection |
| `protected ` | `JRemoteManagedConnection(JConnection connection, Subject subject)`<br>Constructor for JRemoteManagedConnection |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `addConnectionEventListener(javax.resource.spi.ConnectionEventListener listener)`  |
| `void` | `associateConnection(Object handle)`  |
| `protected void` | `begin()`<br>Provided as a callback method for the LocalTransaction object. |
| `void` | `cleanup()`<br>Put the connection into a state where it may be reused. |
| `void` | `closeHandle(WrappedJConnection handle)`  |
| `protected void` | `commit()`<br>Provided as a callback method for the LocalTransaction object. |
| `void` | `destroy()`  |
| `JConnection` | `getConnection()`  |
| `Object` | `getConnection(Subject subject, javax.resource.spi.ConnectionRequestInfo cxRequestInfo)`  |
| `javax.resource.spi.LocalTransaction` | `getLocalTransaction()`  |
| `protected javax.resource.spi.ConnectionEvent` | `getLocalTransactionCommittedEvent()`  |
| `protected javax.resource.spi.ConnectionEvent` | `getLocalTransactionRolledbackEvent()`  |
| `protected javax.resource.spi.ConnectionEvent` | `getLocalTransactionStartedEvent()`  |
| `PrintWriter` | `getLogWriter()`  |
| `javax.resource.spi.ManagedConnectionMetaData` | `getMetaData()`  |
| `protected Subject` | `getSubject()`  |
| `TransactionManager` | `getTransactionManager()`  |
| `XAResource` | `getXAResource()`  |
| `protected boolean` | `isAlive()`Test physical connection is alive. |
| `protected boolean` | `isInitialised()`  |
| `protected void` | `notify(EventNotifier notifier, javax.resource.spi.ConnectionEvent event)`  |
| `void` | `removeConnectionEventListener(javax.resource.spi.ConnectionEventListener listener)`  |
| `protected void` | `rollback()`<br>Provided as a callback method for the LocalTransaction object. |
| `protected void` | `setInitialised(boolean init)`  |
| `void` | `setLogWriter(PrintWriter out)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JRemoteManagedConnection

```java
protected JRemoteManagedConnection()
```

Constructor for JRemoteManagedConnection

#### JRemoteManagedConnection

```java
protected JRemoteManagedConnection(JConnection connection,
                                   Subject subject)
```

Constructor for JRemoteManagedConnection

### Method Detail

#### getConnection

```java
public JConnection getConnection()
```

#### getSubject

```java
protected Subject getSubject()
```

#### getConnection

```java
public Object getConnection(Subject subject,
                            javax.resource.spi.ConnectionRequestInfo cxRequestInfo)
                     throws javax.resource.ResourceException
```

Specified by:`getConnection` in interface `javax.resource.spi.ManagedConnection`  
Throws:`javax.resource.ResourceException`  
See Also:`ManagedConnection.getConnection(Subject, ConnectionRequestInfo)`

#### closeHandle

```java
public void closeHandle(WrappedJConnection handle)
```

#### destroy

```java
public void destroy()
             throws javax.resource.ResourceException
```

Specified by:`destroy` in interface `javax.resource.spi.ManagedConnection`  
Throws:`javax.resource.ResourceException`  
See Also:`ManagedConnection.destroy()`

#### cleanup

```java
public void cleanup()
             throws javax.resource.ResourceException
```

Put the connection into a state where it may be reused. All transactions should be rolledback, all state reset, and connection specific resources released.
Specified by:`cleanup` in interface `javax.resource.spi.ManagedConnection`  
Throws:`javax.resource.ResourceException`  
See Also:`ManagedConnection.cleanup()`

#### associateConnection

```java
public void associateConnection(Object handle)
                         throws javax.resource.ResourceException
```

Specified by:`associateConnection` in interface `javax.resource.spi.ManagedConnection`  
Throws:`javax.resource.ResourceException`  
See Also:`ManagedConnection.associateConnection(Object)`

#### addConnectionEventListener

```java
public void addConnectionEventListener(javax.resource.spi.ConnectionEventListener listener)
```

Specified by:`addConnectionEventListener` in interface `javax.resource.spi.ManagedConnection`  
See Also:`ManagedConnection.addConnectionEventListener(ConnectionEventListener)`

#### removeConnectionEventListener

```java
public void removeConnectionEventListener(javax.resource.spi.ConnectionEventListener listener)
```

Specified by:`removeConnectionEventListener` in interface `javax.resource.spi.ManagedConnection`  
See Also:`ManagedConnection.removeConnectionEventListener(ConnectionEventListener)`

#### getXAResource

```java
public XAResource getXAResource()
                         throws javax.resource.ResourceException
```

Specified by:`getXAResource` in interface `javax.resource.spi.ManagedConnection`  
Throws:`javax.resource.ResourceException`  
See Also:`ManagedConnection.getXAResource()`

#### getLocalTransaction

```java
public javax.resource.spi.LocalTransaction getLocalTransaction()
                                                        throws javax.resource.ResourceException
```

Specified by:`getLocalTransaction` in interface `javax.resource.spi.ManagedConnection`  
Throws:`javax.resource.ResourceException`  
See Also:`ManagedConnection.getLocalTransaction()`

#### getMetaData

```java
public javax.resource.spi.ManagedConnectionMetaData getMetaData()
                                                         throws javax.resource.ResourceException
```

Specified by:`getMetaData` in interface `javax.resource.spi.ManagedConnection`  
Throws:`javax.resource.ResourceException`  
See Also:`ManagedConnection.getMetaData()`

#### setLogWriter

```java
public void setLogWriter(PrintWriter out)
                  throws javax.resource.ResourceException
```

Specified by:`setLogWriter` in interface `javax.resource.spi.ManagedConnection`  
Throws:`javax.resource.ResourceException`  
See Also:`ManagedConnection.setLogWriter(PrintWriter)`

#### getLogWriter

```java
public PrintWriter getLogWriter()
                         throws javax.resource.ResourceException
```

Specified by:`getLogWriter` in interface `javax.resource.spi.ManagedConnection`  
Throws:`javax.resource.ResourceException`  
See Also:`ManagedConnection.getLogWriter()`

#### getTransactionManager

```java
public TransactionManager getTransactionManager()
```

#### begin

```java
protected void begin()
              throws javax.resource.ResourceException
```

Provided as a callback method for the LocalTransaction object. The LocalTransaction object should call this method when starting a transaction to allow the connection event listeners to be notified.
Throws:`javax.resource.ResourceException`

#### commit

```java
protected void commit()
               throws javax.resource.ResourceException
```

Provided as a callback method for the LocalTransaction object. The LocalTransaction object should call this method when committing a transaction to allow the connection event listeners to be notified.
Throws:`javax.resource.ResourceException`

#### rollback

```java
protected void rollback()
                 throws javax.resource.ResourceException
```

Provided as a callback method for the LocalTransaction object. The LocalTransaction object should call this method when rolling a transaction back to allow the connection event listeners to be notified.
Throws:`javax.resource.ResourceException`

#### isAlive

```java
protected boolean isAlive()
```

Test physical connection is alive.
Returns:boolean Is connection alive

#### isInitialised

```java
protected boolean isInitialised()
```

#### setInitialised

```java
protected void setInitialised(boolean init)
```

#### notify

```java
protected void notify(EventNotifier notifier,
                      javax.resource.spi.ConnectionEvent event)
```

#### getLocalTransactionStartedEvent

```java
protected javax.resource.spi.ConnectionEvent getLocalTransactionStartedEvent()
```

#### getLocalTransactionCommittedEvent

```java
protected javax.resource.spi.ConnectionEvent getLocalTransactionCommittedEvent()
```

#### getLocalTransactionRolledbackEvent

```java
protected javax.resource.spi.ConnectionEvent getLocalTransactionRolledbackEvent()
```

Back to [jRemote API](./../../README.md)

<PageFooter />
