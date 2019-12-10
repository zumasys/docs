# JStatement

**Created At:** 9/13/2017 8:00:01 PM  
**Updated At:** 9/13/2017 8:00:26 PM  


## Interface JStatement

- All Known Implementing Classes:[JStatementImpl](file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/io/JStatementImpl.html "class in com.jbase.jremote.io")
```
public interface JStatement
```

A jBASE statement object for executing queries.Author:aphethean
- - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
All Methods [Instance Methods](javascript%3Ashow%282%29;) [Abstract Methods](javascript%3Ashow%284%29;) | `JResultSet` | `execute(JDynArray queries)` Execute query.<br> |
| `JResultSet` | `execute(JDynArray queries,        JSelectList selectList)` Execute query using an existing select list as a filter.<br> |
| `JResultSet` | `execute(String query)` Execute query.<br> |
| `JResultSet` | `execute(String query,        JSelectList selectList)` Execute query using an existing select list as a filter.<br> |
| `void` | `setFetchSize(int rows)` Sets the fetch size.<br> |
- - ### Method Detail
 
        - #### execute

```
JResultSet execute(String query)             throws JRemoteException
```

Execute query.Parameters:`query` - as a stringReturns:result setThrows:`JRemoteException`
    - - #### execute

```
JResultSet execute(String query,                    JSelectList selectList)             throws JRemoteException
```

Execute query using an existing select list as a filter.Parameters:`query` - as a string`selectList` - Returns:result setThrows:`JRemoteException`
    - - #### execute

```
JResultSet execute(JDynArray queries)             throws JRemoteException
```

Execute query.Parameters:`queries` - query as a dynamic arrayReturns:result setThrows:`JRemoteException`
    - - #### execute

```
JResultSet execute(JDynArray queries,                    JSelectList selectList)             throws JRemoteException
```

Execute query using an existing select list as a filter.Parameters:`queries` - query as a dynamic array`selectList` - Returns:result setThrows:`JRemoteException`
    - - #### setFetchSize

```
void setFetchSize(int rows)
```

Sets the fetch size.Parameters:`rows` -

