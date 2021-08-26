# TransactionManager (jremote API)

<PageHeader />

## Class TransactionManager

All Implemented Interfaces:javax.resource.spi.LocalTransaction

* * *

```java
public class TransactionManager
extends Object
implements javax.resource.spi.LocalTransaction
```

### Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| `protected` | `TransactionManager(JRemoteManagedConnection managedConnection)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `begin()`<br>Begin a transaction on this connection. |
| `void` | `commit()`<br>Commit a transaction on this connection. |
| `protected boolean` | `isManagedTransaction()`  |
| `void` | `rollback()`<br>Rollback a transaction on this connection. |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### TransactionManager

```java
protected TransactionManager(JRemoteManagedConnection managedConnection)
```

### Method Detail

#### begin

```java
public void begin()
           throws javax.resource.ResourceException
```

Begin a transaction on this connection. Performs a callback to the managed connection begin.
Specified by:`begin` in interface `javax.resource.spi.LocalTransaction`  
Throws:`javax.resource.ResourceException`See Also:`#begin()`

#### commit

```java
public void commit()
            throws javax.resource.ResourceException
```

Commit a transaction on this connection. Performs a callback to the managed connection commit.
Specified by:`commit` in interface `javax.resource.spi.LocalTransaction`  
Throws:`javax.resource.ResourceException`  
See Also:`#commit()`

#### rollback

```java
public void rollback()
              throws javax.resource.ResourceException
```

Rollback a transaction on this connection. Performs a callback to the managed connection rollback.
Specified by:`rollback` in interface `javax.resource.spi.LocalTransaction`  
Throws:`javax.resource.ResourceException`  
See Also:`#rollback()`

#### isManagedTransaction

```java
protected boolean isManagedTransaction()
```

Back to [jRemote API](./../../README.md)
  
<PageFooter />
