# JStatement (jremote API)

<PageHeader />

## Interface JStatement

All Known Implementing Classes:[JStatementImpl](./../io/jstatementimpl-(jremote-api) "class in com.jbase.jremote.io")

* * *

```java
public interface JStatement
```

A jBASE statement object for executing queries.

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `JResultSet` | `execute(JDynArray queries)`<br>Execute query. |
| `JResultSet` | `execute(JDynArray queries, JSelectList selectList)`<br>Execute query using an existing select list as a filter. |
| `JResultSet` | `execute(String query)`<br>Execute query. |
| `JResultSet` | `execute(String query, JSelectList selectList)`<br>Execute query using an existing select list as a filter. |
| `void` | `setFetchSize(int rows)`<br>Sets the fetch size. |

### Method Detail

#### execute

```java
JResultSet execute(String query)
            throws JRemoteException
```

Execute query.
Parameters:`query` - as a string  
Returns:result set  
Throws:`JRemoteException`

#### execute

```java
JResultSet execute(String query,
                   JSelectList selectList)
            throws JRemoteException
```

Execute query using an existing select list as a filter.
Parameters:`query` - as a string`selectList`  
Returns:result set  
Throws:`JRemoteException`

#### execute

```java
JResultSet execute(JDynArray queries)
            throws JRemoteException
```

Execute query.
Parameters:`queries` - query as a dynamic array  
Returns:result set  
Throws:`JRemoteException`

#### execute

```java
JResultSet execute(JDynArray queries,
                   JSelectList selectList)
            throws JRemoteException
```

Execute query using an existing select list as a filter.
Parameters:`queries` - query as a dynamic array`selectList`  
Returns:result set  
Throws:`JRemoteException`

#### setFetchSize

```java
void setFetchSize(int rows)
```

Sets the fetch size.
Parameters:`rows` -

Back to [jRemote API](./../../README.md)

<PageFooter />
