# TransactionManager (jremote API)

<PageHeader />

## Class TransactionManager

All Implemented Interfaces:javax.resource.spi.LocalTransaction
* * *


```
public class TransactionManager
extends Object
implements javax.resource.spi.LocalTransaction
```

### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| `protected `<br> | `TransactionManager(JRemoteManagedConnection managedConnection)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `begin()`<br>Begin a transaction on this connection.<br> |
| `void`<br> | `commit()`<br>Commit a transaction on this connection.<br> |
| `protected boolean`<br> | `isManagedTransaction()` <br> |
| `void`<br> | `rollback()`<br>Rollback a transaction on this connection.<br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### TransactionManager

```
protected TransactionManager(JRemoteManagedConnection managedConnection)
```



### 


### Method Detail

#### begin

```
public void begin()
           throws javax.resource.ResourceException
```

Begin a transaction on this connection. Performs a callback to the managed connection begin.
Specified by:`begin` in interface `javax.resource.spi.LocalTransaction`Throws:`javax.resource.ResourceException`See Also:`#begin()`
#### commit

```
public void commit()
            throws javax.resource.ResourceException
```

Commit a transaction on this connection. Performs a callback to the managed connection commit.
Specified by:`commit` in interface `javax.resource.spi.LocalTransaction`Throws:`javax.resource.ResourceException`See Also:`#commit()`
#### rollback

```
public void rollback()
              throws javax.resource.ResourceException
```

Rollback a transaction on this connection. Performs a callback to the managed connection rollback.
Specified by:`rollback` in interface `javax.resource.spi.LocalTransaction`Throws:`javax.resource.ResourceException`See Also:`#rollback()`
#### isManagedTransaction

```
protected boolean isManagedTransaction()
```



Back to [jRemote API](../../../../jremote-api/README.md)



  
<PageFooter />
