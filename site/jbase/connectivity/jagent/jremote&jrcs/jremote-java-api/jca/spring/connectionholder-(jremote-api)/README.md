# ConnectionHolder (jremote API)

<PageHeader />

## Class ConnectionHolder

```java
public class ConnectionHolder
extends org.springframework.transaction.support.ResourceHolderSupport
```

### Constructor Summary

| Constructor and Description |
| --- |
| `ConnectionHolder(JConnection connection)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `JConnection` | `getJConnection()`  |

- Methods inherited from class org.springframework.transaction.support.ResourceHolderSupport
  - `clear, getDeadline, getTimeToLiveInMillis, getTimeToLiveInSeconds, hasTimeout, isOpen, isRollbackOnly, isSynchronizedWithTransaction, released, requested, reset, setRollbackOnly, setSynchronizedWithTransaction, setTimeoutInMillis, setTimeoutInSeconds`
- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### ConnectionHolder

```java
public ConnectionHolder(JConnection connection)
```

### Method Detail

#### getJConnection

```java
public JConnection getJConnection()
```

Back to [jRemote API](./../../README.md)
  
<PageFooter />
