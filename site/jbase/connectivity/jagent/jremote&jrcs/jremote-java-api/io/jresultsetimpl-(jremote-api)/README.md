# JResultSetImpl (jremote API)

<PageHeader />

## Class JResultSetImpl

All Implemented Interfaces:[JResultSet](./../../jresultset-(jremote-api) "interface in com.jbase.jremote")
* * *


```
public class JResultSetImpl
extends Object
implements JResultSet
```

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JResultSetImpl(AbstractJRemoteConnection connection, int statementId, int fetchSize)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JDynArray`<br> | `getRow()` <br> |
| `boolean`<br> | `next()` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail



#### JResultSetImpl

```
public JResultSetImpl(AbstractJRemoteConnection connection,
                      int statementId,
                      int fetchSize)
```







### Method Detail



#### getRow

```
public JDynArray getRow()
```
Specified by:`getRow` in interface `JResultSet`


#### next

```
public boolean next()
             throws JRemoteException
```
Specified by:`next` in interface `JResultSet`Throws:`JRemoteException`



Back to [jRemote API](../../../../jremote-api/README.md)

  
<PageFooter />
