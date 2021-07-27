# JStatementImpl (jremote API)

<PageHeader />

## Class JStatementImpl

All Implemented Interfaces:[JStatement](./../../jstatement-(jremote-api) "interface in com.jbase.jremote")
* * *

```
public class JStatementImpl
extends Object
implements JStatement
```

### Constructor Summary

| Constructor and Description |
| --- |
| `JStatementImpl(AbstractJRemoteConnection connection)`Constructor. |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `JResultSet` | `execute(JDynArray queries)`<br>Execute query. |
| `JResultSet` | `execute(JDynArray queries, JSelectList selectList)`<br>Execute query using an existing select list as a filter. |
| `JResultSet` | `execute(String query)`<br>Execute query. |
| `JResultSet` | `execute(String query, JSelectList selectList)`<br>Execute query using an existing select list as a filter. |
| `void` | `setFetchSize(int rows)`<br>Sets the fetch size. |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JStatementImpl

```
public JStatementImpl(AbstractJRemoteConnection connection)
```

Constructor.
Parameters:`connection` -

### Method Detail

#### execute

```
public JResultSet execute(String query)
                   throws JRemoteException
```

Description copied from interface: `JStatement`

Execute query.  
Specified by:`execute` in interface `JStatement`  
Parameters:`query` - as a string  
Returns:result set  
Throws:`JRemoteException`  
See Also:[`JStatement.execute(java.lang.String)`](./../../jstatement-(jremote-api)#execute-java.lang)

#### execute

```
public JResultSet execute(JDynArray queries)
                   throws JRemoteException
```

Description copied from interface: `JStatement`

Execute query.  
Specified by:`execute` in interface `JStatement`  
Parameters:`queries` - query as a dynamic array  
Returns:result set  
Throws:`JRemoteException`  
See Also:[`JStatement.execute(com.jbase.jremote.JDynArray)`](./../../jstatement-(jremote-api)#execute-com.jbase.jremote)

#### execute

```
public JResultSet execute(String query,
                          JSelectList selectList)
                   throws JRemoteException
```

Description copied from interface: `JStatement`

Execute query using an existing select list as a filter.  
Specified by:`execute` in interface `JStatement`  
Parameters:`query` - as a string  
Returns:result set  
Throws:`JRemoteException`  
See Also:[`JStatement.execute(java.lang.String, com.jbase.jremote.JSelectList)`](./../../jstatement-(jremote-api)#execute-java.lang.String-com.jbase.jremote)
#### execute

```
public JResultSet execute(JDynArray queries,
                          JSelectList selectList)
                   throws JRemoteException
```

Description copied from interface: `JStatement`

Execute query using an existing select list as a filter.  
Specified by:`execute` in interface `JStatement`  
Parameters:`queries` - query as a dynamic array  
Returns:result set  
Throws:`JRemoteException`  
See Also:[`JStatement.execute(com.jbase.jremote.JDynArray, com.jbase.jremote.JSelectList)`](./../../jstatement-(jremote-api)#execute-com.jbase.jremote.JDynArray-com.jbase.jremote)

#### setFetchSize

```
public void setFetchSize(int rows)
```

Description copied from interface: `JStatement`

Sets the fetch size.  
Specified by:`setFetchSize` in interface `JStatement`  
See Also:[`JStatement.setFetchSize(int)`](./../../jstatement-(jremote-api)#setFetchSize-int-)

Back to [jRemote API](./../../README.md)
  
<PageFooter />
