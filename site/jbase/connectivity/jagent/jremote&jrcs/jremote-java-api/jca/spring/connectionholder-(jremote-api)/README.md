# ConnectionHolder (jremote API)

<PageHeader />

## Class ConnectionHolder

```
public class ConnectionHolder
extends org.springframework.transaction.support.ResourceHolderSupport
```

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `ConnectionHolder(JConnection connection)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JConnection`<br> | `getJConnection()` <br> |


- Methods inherited from class org.springframework.transaction.support.ResourceHolderSupport
    - `clear, getDeadline, getTimeToLiveInMillis, getTimeToLiveInSeconds, hasTimeout, isOpen, isRollbackOnly, isSynchronizedWithTransaction, released, requested, reset, setRollbackOnly, setSynchronizedWithTransaction, setTimeoutInMillis, setTimeoutInSeconds`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### ConnectionHolder

```
public ConnectionHolder(JConnection connection)
```



### 


### Method Detail

#### getJConnection

```
public JConnection getJConnection()
```

Back to [jREMOTE API](com_jbase_jremote_package-summary)
