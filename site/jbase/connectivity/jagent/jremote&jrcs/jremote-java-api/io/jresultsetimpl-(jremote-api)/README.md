# JResultSetImpl (jremote API)

<PageHeader />

## Class JResultSetImpl

All Implemented Interfaces:[JResultSet](./../../jresultset-(jremote-api) "interface in com.jbase.jremote")
* * *

```java
public class JResultSetImpl
extends Object
implements JResultSet
```

### Constructor Summary

| Constructor and Description |
| --- |
| `JResultSetImpl(AbstractJRemoteConnection connection, int statementId, int fetchSize)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | `getRow()`  |
| `boolean` | `next()`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JResultSetImpl

```java
public JResultSetImpl(AbstractJRemoteConnection connection,
                      int statementId,
                      int fetchSize)
```

### Method Detail

#### getRow

```java
public JDynArray getRow()
```

Specified by:`getRow` in interface `JResultSet`

#### next

```java
public boolean next()
             throws JRemoteException
```

Specified by:`next` in interface `JResultSet`  
Throws:`JRemoteException`
  
Back to [jRemote API](./../../README.md)

<PageFooter />
