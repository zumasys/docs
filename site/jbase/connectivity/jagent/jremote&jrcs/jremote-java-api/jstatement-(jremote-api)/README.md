# JStatement (jremote API)

<PageHeader />

## Interface JStatement

All Known Implementing Classes:[JStatementImpl](./../io/jstatementimpl-%28jremote-api%29 "class in com.jbase.jremote.io")
* * *


```
public interface JStatement
```

A jBASE statement object for executing queries.

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JResultSet`<br> | `execute(JDynArray queries)`<br>Execute query.<br> |
| `JResultSet`<br> | `execute(JDynArray queries, JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
| `JResultSet`<br> | `execute(String query)`<br>Execute query.<br> |
| `JResultSet`<br> | `execute(String query, JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
| `void`<br> | `setFetchSize(int rows)`<br>Sets the fetch size.<br> |

### Method Detail

#### execute

```
JResultSet execute(String query)
            throws JRemoteException
```

Execute query.
Parameters:`query` - as a stringReturns:result setThrows:`JRemoteException`


#### execute

```
JResultSet execute(String query,
                   JSelectList selectList)
            throws JRemoteException
```

Execute query using an existing select list as a filter.
Parameters:`query` - as a string`selectList` -Returns:result setThrows:`JRemoteException`


#### execute

```
JResultSet execute(JDynArray queries)
            throws JRemoteException
```

Execute query.
Parameters:`queries` - query as a dynamic arrayReturns:result setThrows:`JRemoteException`


#### execute

```
JResultSet execute(JDynArray queries,
                   JSelectList selectList)
            throws JRemoteException
```

Execute query using an existing select list as a filter.
Parameters:`queries` - query as a dynamic array`selectList` -Returns:result setThrows:`JRemoteException`


#### setFetchSize

```
void setFetchSize(int rows)
```

Sets the fetch size.
Parameters:`rows` -



Back to [jREMOTE API](com_jbase_jremote_package-summary)
