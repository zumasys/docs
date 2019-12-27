# JBaseJDBCSocketConnection (jbasejdbc API)

**Created At:** 9/25/2017 10:55:46 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_jbasejdbcsocketconnection](https://docs.jbase.com/39228-jdbc/com_jbase_jdbc_jbasejdbcsocketconnection)  
**Original ID:** 277926  
**Internal:** Yes  

&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;


# Class JBaseJDBCSocketConnection
**All Implemented Interfaces:**[JBaseJDBCGlobals](./../jbasejdbcglobals-%28jbasejdbc---api%29 "interface in com.jbase.jdbc"), [AutoCloseable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/AutoCloseable.html?is-external=true "class or interface in java.lang"), [Connection](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true "class or interface in java.sql"), [Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")
```
public class JBaseJDBCSocketConnection
extends JBaseJDBCConnection
implements JBaseJDBCGlobals
```



# Nested Class Summary



## Nested classes/interfaces inherited from interface com.jbase.jdbc.JBaseJDBCGlobals
`JBaseJDBCGlobals.TYPES`






# Field Summary



## Fields inherited from interface com.jbase.jdbc.JBaseJDBCGlobals
`CHAR_AM, CHAR_SM, CHAR_VM, SHORT_AM, SHORT_CHAR_AM, SHORT_CHAR_SM, SHORT_CHAR_VM, SHORT_SM, SHORT_VM`




## Fields inherited from interface java.sql.Connection
`TRANSACTION_NONE, TRANSACTION_READ_COMMITTED, TRANSACTION_READ_UNCOMMITTED, TRANSACTION_REPEATABLE_READ, TRANSACTION_SERIALIZABLE`




# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>JBaseJDBCSocketConnection([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") url, [Properties](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Properties.html?is-external=true "class or interface in java.util") info)<br> |






# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> | <br>Description<br> |
| --- | --- | --- |
| <br>protected void<br> | <br>authenticate()<br> | <br><br> |
| <br>protected void<br> | <br>authenticate([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") account)<br> | <br><br> |
| <br>void<br> | <br>clearWarnings()<br> | <br><br> |
| <br>void<br> | <br>close()<br> | <br><br> |
| <br>void<br> | <br>commit()<br> | <br>Makes all changes made since the previous commit/rollback permanent and releases any database locks currently held by this Connection object.<br> |
| <br>protected int<br> | <br>compressionThreshold()<br> | <br><br> |
| <br>protected void<br> | <br>connect([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") host, int port)<br> | <br><br> |
| <br>[Statement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Statement.html?is-external=true "class or interface in java.sql")<br> | <br>createStatement()<br> | <br>Creates a Statement object for sending SQL statements to the database.<br> |
| <br>[Statement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Statement.html?is-external=true "class or interface in java.sql")<br> | <br>createStatement(int resultSetType, int resultSetConcurrency)<br> | <br>TODO: Creates a Statement object that will generate ResultSet objects with the given type and concurrency.<br> |
| <br>[Statement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Statement.html?is-external=true "class or interface in java.sql")<br> | <br>createStatement(int resultSetType, int resultSetConcurrency, int resultSetHoldability)<br> | <br>TODO: Creates a Statement object that will generate ResultSet objects with the given type, concurrency, and holdability.<br> |
| <br>void<br> | <br>doConnection()<br> | <br><br> |
| <br>boolean<br> | <br>getAutoCommit()<br> | <br>Retrieves the current auto-commit mode for this Connection object.<br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>getCatalog()<br> | <br>Retrieves this Connection object's current catalog name.<br> |
| <br>protected [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>getConnectionInfo()<br> | <br>Debugging tool.<br> |
| <br>int<br> | <br>getHoldability()<br> | <br><br> |
| <br>protected [Properties](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Properties.html?is-external=true "class or interface in java.util")<br> | <br>getInfo()<br> | <br><br> |
| <br>protected int<br> | <br>getIsolationLevel()<br> | <br><br> |
| <br>[DatabaseMetaData](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/DatabaseMetaData.html?is-external=true "class or interface in java.sql")<br> | <br>getMetaData()<br> | <br>Retrieves a DatabaseMetaData object that contains metadata about the database to which this Connection object represents a connection.<br> |
| <br>protected [Response](./../io/response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io")<br> | <br>getResponse()<br> | <br>Reads response from the server.<br> |
| <br>int<br> | <br>getTransactionIsolation()<br> | <br><br> |
| <br>[Map](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Map.html?is-external=true "class or interface in java.util")&lt;[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang"),[Class](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Class.html?is-external=true "class or interface in java.lang")&lt;?&gt;&gt;<br> | <br>getTypeMap()<br> | <br>TODO: Retrieves the Map object associated with this Connection object.<br> |
| <br>[SQLWarning](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLWarning.html?is-external=true "class or interface in java.sql")<br> | <br>getWarnings()<br> | <br>Retrieves the first warning reported by calls on this Connection object.<br> |
| <br>boolean<br> | <br>isClosed()<br> | <br><br> |
| <br>protected boolean<br> | <br>isCompressionRequired()<br> | <br><br> |
| <br>boolean<br> | <br>isEnabledNaiveTrustManager()<br> | <br><br> |
| <br>boolean<br> | <br>isReadOnly()<br> | <br>Retrieves whether this Connection object is in read-only mode.<br> |
| <br>protected boolean<br> | <br>isSSLRequired()<br> | <br><br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>nativeSQL([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") sql)<br> | <br>Converts the given SQL statement into the system's native SQL grammar.<br> |
| <br>[CallableStatement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true "class or interface in java.sql")<br> | <br>prepareCall([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") sql)<br> | <br>TODO: Creates a CallableStatement object for calling database stored procedures.<br> |
| <br>[CallableStatement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true "class or interface in java.sql")<br> | <br>prepareCall([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") sql, int resultSetType, int resultSetConcurrency)<br> | <br>TODO: Creates a CallableStatement object that will generate ResultSet objects with the given type and concurrency.<br> |
| <br>[CallableStatement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/CallableStatement.html?is-external=true "class or interface in java.sql")<br> | <br>prepareCall([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") sql, int resultSetType, int resultSetConcurrency, int resultSetHoldability)<br> | <br>TODO: Creates a CallableStatement object that will generate ResultSet objects with the given type and concurrency.<br> |
| <br>[PreparedStatement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/PreparedStatement.html?is-external=true "class or interface in java.sql")<br> | <br>prepareStatement([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") sql)<br> | <br>Creates a PreparedStatement object for sending parameterized SQL statements to the database.<br> |
| <br>[PreparedStatement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/PreparedStatement.html?is-external=true "class or interface in java.sql")<br> | <br>prepareStatement([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") sql, int autoGeneratedKeys)<br> | <br>Creates a default PreparedStatement object that has the capability to retrieve auto-generated keys.<br> |
| <br>[PreparedStatement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/PreparedStatement.html?is-external=true "class or interface in java.sql")<br> | <br>prepareStatement([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") sql, int[] columnIndexes)<br> | <br><br> |
| <br>[PreparedStatement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/PreparedStatement.html?is-external=true "class or interface in java.sql")<br> | <br>prepareStatement([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") sql, int resultSetType, int resultSetConcurrency)<br> | <br><br> |
| <br>[PreparedStatement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/PreparedStatement.html?is-external=true "class or interface in java.sql")<br> | <br>prepareStatement([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") sql, int resultSetType, int resultSetConcurrency, int resultSetHoldability)<br> | <br><br> |
| <br>[PreparedStatement](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/PreparedStatement.html?is-external=true "class or interface in java.sql")<br> | <br>prepareStatement([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") sql, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")[] columnNames)<br> | <br><br> |
| <br>void<br> | <br>releaseSavepoint([Savepoint](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Savepoint.html?is-external=true "class or interface in java.sql") savepoint)<br> | <br>jBASE NOTE: Currently jSQL does no support savepoints.<br> |
| <br>void<br> | <br>rollback()<br> | <br>Undoes all changes made in the current transaction and releases any database locks currently held by this Connection object.<br> |
| <br>void<br> | <br>rollback([Savepoint](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Savepoint.html?is-external=true "class or interface in java.sql") savepoint)<br> | <br>Undoes all changes made after the given Savepoint object was set.<br> |
| <br>protected void<br> | <br>sendProperties()<br> | <br><br> |
| <br>void<br> | <br>setAutoCommit(boolean autoCommit)<br> | <br>Sets this connection's auto-commit mode to the given state.<br> |
| <br>void<br> | <br>setCatalog([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") catalog)<br> | <br>Sets the given catalog name in order to select a subspace of this Connection object's database in which to work.<br> |
| <br>void<br> | <br>setHoldability(int holdability)<br> | <br><br> |
| <br>void<br> | <br>setReadOnly(boolean readOnly)<br> | <br>Puts this connection in read-only mode as a hint to the driver to enable database optimizations.<br> |
| <br>[Savepoint](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Savepoint.html?is-external=true "class or interface in java.sql")<br> | <br>setSavepoint()<br> | <br>jBASE NOTE: Currently jSQL does no support savepoints.<br> |
| <br>[Savepoint](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Savepoint.html?is-external=true "class or interface in java.sql")<br> | <br>setSavepoint([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") name)<br> | <br>jBASE NOTE: Currently jSQL does no support savepoints.<br> |
| <br>void<br> | <br>setTransactionIsolation(int level)<br> | <br><br> |
| <br>void<br> | <br>setTypeMap([Map](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Map.html?is-external=true "class or interface in java.util") map)<br> | <br>TODO: Installs the given TypeMap object as the type map for this Connection object.<br> |






## 


## Methods inherited from class com.jbase.jdbc.JBaseJDBCConnection
`createBlob`




## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`




## Methods inherited from interface java.sql.Connection
`abort, createArrayOf, createClob, createNClob, createSQLXML, createStruct, getClientInfo, getClientInfo, getNetworkTimeout, getSchema, isValid, setClientInfo, setClientInfo, setNetworkTimeout, setSchema`




## Methods inherited from interface java.sql.Wrapper
`isWrapperFor, unwrap`

# 


# Constructor Detail



#### **JBaseJDBCSocketConnection**

```
public JBaseJDBCSocketConnection(String url, Properties info)
```






# Method Detail

#### **doConnection**

```
public void doConnection()
                  throws SQLException
```

**Specified by:**`doConnection` in class `JBaseJDBCConnection`
**Throws:**`SQLException`




#### **authenticate**

```
protected void authenticate()
                     throws SQLException
```
**Throws:**`SQLException`




#### **authenticate**

```
protected void authenticate(String account)
                     throws SQLException
```

**Throws:**`SQLException`




#### **sendProperties**

```
protected void sendProperties()
                       throws SQLException
```

**Throws:**`SQLException`




#### **isSSLRequired**

```
protected boolean isSSLRequired()
```





#### **isCompressionRequired**

```
protected boolean isCompressionRequired()
```





#### **compressionThreshold**

```
protected int compressionThreshold()
```





#### **getInfo**

```
protected Properties getInfo()
```





#### **getIsolationLevel**

```
protected int getIsolationLevel()
```





#### **getConnectionInfo**

```
protected String getConnectionInfo()
```

Debugging tool.
**Returns:**traceback or another connection info string.





#### **connect**

```
protected void connect(String host, int port)
                throws NoSuchAlgorithmException,
                       UnknownHostException,
                       IOException
```

**Throws:**`NoSuchAlgorithmException``UnknownHostException``IOException`




#### **isEnabledNaiveTrustManager**

```
public boolean isEnabledNaiveTrustManager()
```





#### **getHoldability**

```
public int getHoldability()
                   throws SQLException
```

**Specified by:**`getHoldability` in interface `Connection`
**Throws:**`SQLException`




#### **getTransactionIsolation**

```
public int getTransactionIsolation()
                            throws SQLException
```

**Specified by:**`getTransactionIsolation` in interface `Connection`
**Throws:**`SQLException`




#### **clearWarnings**

```
public void clearWarnings()
                   throws SQLException
```

**Specified by:**`clearWarnings` in interface `Connection`
**Throws:**`SQLException`




#### **close**

```
public void close()
           throws SQLException
```

**Specified by:**`close` in interface `AutoCloseable`
**Specified by:**`close` in interface `Connection`
**Throws:**`SQLException`




#### **commit**

```
public void commit()
            throws SQLException
```

Makes all changes made since the previous commit/rollback permanent and releases any database locks currently held by this Connection object. This method should be used only when auto-commit mode has been disabled.
**Specified by:**`commit` in interface `Connection`
**Throws:**`SQLException` - if a database access error occurs or this Connection object is in auto-commit mode




#### **rollback**

```
public void rollback()
              throws SQLException
```

Undoes all changes made in the current transaction and releases any database locks currently held by this Connection object. This method should be used only when auto-commit mode has been disabled.
**Specified by:**`rollback` in interface `Connection`
**Throws:**`SQLException` - if a database access error occurs or this Connection object is in auto-commit mode




#### **getAutoCommit**

```
public boolean getAutoCommit()
                      throws SQLException
```

Retrieves the current auto-commit mode for this Connection object.

**Specified by:**`getAutoCommit` in interface `Connection`
**Returns:**the current state of this Connection object's auto-commit mode
**Throws:**`SQLException` - if a database access error occurs
**See Also:**[`Connection.getAutoCommit()`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true#getAutoCommit-- "class or interface in java.sql")




#### isClosed

```
public boolean isClosed()
                 throws SQLException
```

**Specified by:**`isClosed` in interface `Connection`
**Throws:**`SQLException`




#### **isReadOnly**

```
public boolean isReadOnly()
                   throws SQLException
```

Retrieves whether this Connection object is in read-only mode.
**Specified by:**`isReadOnly` in interface `Connection`
**Returns:**true if this Connection object is read-only; false otherwise
**Throws:**`SQLException` - if a database access error occurs




#### **setHoldability**

```
public void setHoldability(int holdability)
                    throws SQLException
```

**Specified by:**`setHoldability` in interface `Connection`
**Throws:**`SQLException`




#### **setTransactionIsolation**

```
public void setTransactionIsolation(int level)
                             throws SQLException
```

**Specified by:**`setTransactionIsolation` in interface `Connection`
**Throws:**`SQLException`




#### **setAutoCommit**

```
public void setAutoCommit(boolean autoCommit)
                   throws SQLException
```

Sets this connection's auto-commit mode to the given state. If a connection is in auto-commit mode, then all its SQL statements will be executed and committed as individual transactions. Otherwise, its SQL statements are grouped into transactions that are terminated by a call to either the method commit or the method rollback. By default, new connections are in auto-commit mode. The commit occurs when the statement completes or the next execute occurs, whichever comes first. In the case of statements returning a ResultSet object, the statement completes when the last row of the ResultSet object has been retrieved or the ResultSet object has been closed. In advanced cases, a single statement may return multiple results as well as output parameter values. In these cases, the commit occurs when all results and output parameter values have been retrieved. NOTE: If this method is called during a transaction, the transaction is committed.
**Specified by:**`setAutoCommit` in interface `Connection`
**Parameters:**`autoCommit` - true to enable auto-commit mode; false to disable it
**Throws:**`SQLException` - - if a database access error occurs
**See Also:**[`Connection.setAutoCommit(boolean)`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true#setAutoCommit-boolean- "class or interface in java.sql")




#### **setReadOnly**

```
public void setReadOnly(boolean readOnly)
                 throws SQLException
```

Puts this connection in read-only mode as a hint to the driver to enable database optimizations. Note: This method cannot be called during a transaction.
**Specified by:**`setReadOnly` in interface `Connection`
**Parameters:**`readOnly` - true enables read-only mode; false disables it
**Throws:**`SQLException` - if a database access error occurs or this method is called during a transaction




#### **getCatalog**

```
public String getCatalog()
                  throws SQLException
```

Retrieves this Connection object's current catalog name.
**Specified by:**`getCatalog` in interface `Connection`
**Returns:**the current catalog name or null if there is none
**Throws:**`SQLException` - if a database access error occurs
**See Also:**[`Connection.getCatalog()`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true#getCatalog-- "class or interface in java.sql")




#### setCatalog

```
public void setCatalog(String catalog)
                throws SQLException
```

Sets the given catalog name in order to select a subspace of this Connection object's database in which to work. If the driver does not support catalogs, it will silently ignore this request. jBASE NOTE: We don't support catalogs at the moment.
**Specified by:**`setCatalog` in interface `Connection`
**Parameters:**`catalog` - the name of a catalog (subspace in this Connection object's database) in which to work
**Throws:**`SQLException` - if a database access error occurs




#### **getMetaData**

```
public DatabaseMetaData getMetaData()
                             throws SQLException
```

Retrieves a DatabaseMetaData object that contains metadata about the database to which this Connection object represents a connection. The metadata includes information about the database's tables, its supported SQL grammar, its stored procedures, the capabilities of this connection, and so on.
**Specified by:**`getMetaData` in interface `Connection`
**Returns:**a DatabaseMetaData object for this Connection object
**Throws:**`SQLException` - if a database access error occurs




#### **getWarnings**

```
public SQLWarning getWarnings()
                       throws SQLException
```

Retrieves the first warning reported by calls on this Connection object. If there is more than one warning, subsequent warnings will be chained to the first one and can be retrieved by calling the method SQLWarning.getNextWarning on the warning that was retrieved previously. This method may not be called on a closed connection; doing so will cause an SQLException to be thrown. Note: Subsequent warnings will be chained to this SQLWarning. jBASE NOTE: Currently jSQL does not support warnings; this method will always return null.
**Specified by:**`getWarnings` in interface `Connection`
**Returns:**the first SQLWarning object or null if there are none
**Throws:**`SQLException` - if a database access error occurs or this method is called on a closed connection





#### **setSavepoint**

```
public Savepoint setSavepoint()
                       throws SQLException
```

jBASE NOTE: Currently jSQL does no support savepoints.

Creates an unnamed savepoint in the current transaction and returns the new Savepoint object that represents it.
**Specified by:**`setSavepoint` in interface `Connection`
**Returns:**the new Savepoint object
**Throws:**`SQLException` - if a database access error occurs or this Connection object is currently in auto-commit mode





#### **releaseSavepoint**

```
public void releaseSavepoint(Savepoint savepoint)
                      throws SQLException 
```

jBASE NOTE: Currently jSQL does no support savepoints.

Removes the given Savepoint object from the current transaction. Any reference to the savepoint after it has been removed will cause an SQLException to be thrown.
**Specified by:**`releaseSavepoint` in interface `Connection`
**Parameters:**`savepoint` - the Savepoint object to be removed
**Throws:**`SQLException` - if a database access error occurs or the given Savepoint object is not a valid savepoint in the current transaction





#### **rollback**

```
public void rollback(Savepoint savepoint)
              throws SQLException
```

Undoes all changes made after the given Savepoint object was set. This method should be used only when auto-commit has been disabled.
**Specified by:**`rollback` in interface `Connection`
**Parameters:**`savepoint` - the Savepoint object to roll back to
**Throws:**`SQLException` - if a database access error occurs, the Savepoint object is no longer valid, or this Connection object is currently in auto-commit mode





#### **createStatement**

```
public Statement createStatement()
                          throws SQLException
```

Creates a Statement object for sending SQL statements to the database. SQL statements without parameters are normally executed using Statement objects. If the same SQL statement is executed many times, it may be more efficient to use a PreparedStatement object. Result sets created using the returned Statement object will by default be type TYPE\_FORWARD\_ONLY and have a concurrency level of CONCUR\_READ\_ONLY.
**Specified by:**`createStatement` in interface `Connection`
**Returns:**a new default Statement object
**Throws:**`SQLException` - if a database access error occurs




#### **createStatement**

```
public Statement createStatement(int resultSetType, int resultSetConcurrency)
                          throws SQLException
```

TODO: Creates a Statement object that will generate ResultSet objects with the given type and concurrency. This method is the same as the createStatement method above, but it allows the default result set type and concurrency to be overridden.
**Specified by:**`createStatement` in interface `Connection`
**Parameters:**`resultSetType` - a result set type; one of ResultSet.TYPE\_FORWARD\_ONLY, ResultSet.TYPE\_SCROLL\_INSENSITIVE, or ResultSet.TYPE\_SCROLL\_SENSITIVE,`resultSetConcurrency` - a concurrency type; one of ResultSet.CONCUR\_READ\_ONLY or ResultSet.CONCUR\_UPDATABLE.
**Returns:**a new Statement object that will generate ResultSet objects with the given type and concurrency
**Throws:**`SQLException` - if a database access error occurs or the given parameters are not ResultSet constants indicating type and concurrency




#### **createStatement**

```
public Statement createStatement(int resultSetType, int resultSetConcurrency, int resultSetHoldability)
                          throws SQLException
```

TODO: Creates a Statement object that will generate ResultSet objects with the given type, concurrency, and holdability. This method is the same as the createStatement method above, but it allows the default result set type, concurrency, and holdability to be overridden.
**Specified by:**`createStatement` in interface `Connection`

**Parameters:**`resultSetType` - one of the following ResultSet constants: ResultSet.TYPE\_FORWARD\_ONLY, ResultSet.TYPE\_SCROLL\_INSENSITIVE, or ResultSet.TYPE\_SCROLL\_SENSITIVE,`resultSetConcurrency` - one of the following ResultSet constants: ResultSet.CONCUR\_READ\_ONLY or ResultSet.CONCUR\_UPDATABLE,`resultSetHoldability` - one of the following ResultSet constants: ResultSet.HOLD\_CURSORS\_OVER\_COMMIT or ResultSet.CLOSE\_CURSORS\_AT\_COMMIT.

**Returns:**a new Statement object that will generate ResultSet objects with the given type, concurrency, and holdability

**Throws:**`SQLException` - if a database access error occurs or the given parameters are not ResultSet constants indicating type, concurrency, and holdability

**See Also:**[`ResultSet`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true "class or interface in java.sql")




#### **getTypeMap**

```
public Map<String,Class<?>> getTypeMap()
                                throws SQLException
```

TODO: Retrieves the Map object associated with this Connection object. Unless the application has added an entry, the type map returned will be empty.
**Specified by:**`getTypeMap` in interface `Connection`
**Throws:**`SQLException` - if a database access error occurs




#### **setTypeMap**

```
public void setTypeMap(Map map)
                throws SQLException
```

TODO: Installs the given TypeMap object as the type map for this Connection object. The type map will be used for the custom mapping of SQL structured types and distinct types.
**Specified by:**`setTypeMap` in interface `Connection`
**Parameters:**`map` - the java.util.Map object to install as the replacement for this Connection object's default type map
**Throws:**`SQLException` - if a database access error occurs or the given parameter is not a java.util.Map object
**See Also**:[`Connection.getTypeMap()`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true#getTypeMap-- "class or interface in java.sql")




#### **nativeSQL**

```
public String nativeSQL(String sql)
                 throws SQLException
```

Converts the given SQL statement into the system's native SQL grammar. A driver may convert the JDBC SQL grammar into its system's native SQL grammar prior to sending it. This method returns the native form of the statement that the driver would have sent. jBASE NOTE: This method returns its actual parameter unchanged.
**Specified by:**`nativeSQL` in interface `Connection`
**Parameters:**`sql` - an SQL statement that may contain one or more '?' parameter placeholders
**Returns:**the native form of this statement
**Throws:**`SQLException` - if a database access error occurs




#### **prepareCall**

```
public CallableStatement prepareCall(String sql)
                              throws SQLException
```

TODO: Creates a CallableStatement object for calling database stored procedures. The CallableStatement object provides methods for setting up its IN and OUT parameters, and methods for executing the call to a stored procedure. Note: This method is optimized for handling stored procedure call statements. Some drivers may send the call statement to the database when the method prepareCall is done; others may wait until the CallableStatement object is executed. This has no direct effect on users; however, it does affect which method throws certain SQLExceptions. Result sets created using the returned CallableStatement object will by default be type TYPE\_FORWARD\_ONLY and have a concurrency level of CONCUR\_READ\_ONLY.
**Specified by:**`prepareCall` in interface `Connection`
**Parameters:**`sql` - an SQL statement that may contain one or more '?' parameter placeholders. Typically this statement is a JDBC function call escape string.
**Returns:**a new default CallableStatement object containing the pre-compiled SQL statement
**Throws:**`SQLException` - if a database access error occurs




#### **prepareCall**

```
public CallableStatement prepareCall(String sql, int resultSetType, int resultSetConcurrency)
                              throws SQLException
```

TODO: Creates a CallableStatement object that will generate ResultSet objects with the given type and concurrency. This method is the same as the prepareCall method above, but it allows the default result set type and concurrency to be overridden.
**Specified by:**`prepareCall` in interface `Connection`
**Parameters:**`sql` - a String object that is the SQL statement to be sent to the database; may contain on or more ? parameters`resultSetType` - a result set type; one of ResultSet.TYPE\_FORWARD\_ONLY, ResultSet.TYPE\_SCROLL\_INSENSITIVE, or ResultSet.TYPE\_SCROLL\_SENSITIVE`resultSetConcurrency` - a concurrency type; one of ResultSet.CONCUR\_READ\_ONLY or ResultSet.CONCUR\_UPDATABLE
**Returns:**a new CallableStatement object containing the pre-compiled SQL statement that will produce ResultSet objects with the given type and concurrency
**Throws:**`SQLException` - if a database access error occurs or the given parameters are not ResultSet constants indicating type and concurrency




#### **prepareCall**

```
public CallableStatement prepareCall(String sql, int resultSetType, int resultSetConcurrency, int resultSetHoldability)
                              throws SQLException
```

TODO: Creates a CallableStatement object that will generate ResultSet objects with the given type and concurrency. This method is the same as the prepareCall method above, but it allows the default result set type, result set concurrency type and holdability to be overridden.

**Specified by:**`prepareCall` in interface `Connection`
**Parameters:**`sql` - a String object that is the SQL statement to be sent to the database; may contain on or more ? parameters`resultSetType` - one of the following ResultSet constants: ResultSet.TYPE\_FORWARD\_ONLY, ResultSet.TYPE\_SCROLL\_INSENSITIVE, or ResultSet.TYPE\_SCROLL\_SENSITIVE`resultSetConcurrency` - one of the following ResultSet constants: ResultSet.CONCUR\_READ\_ONLY or ResultSet.CONCUR\_UPDATABLE`resultSetHoldability` - one of the following ResultSet constants: ResultSet.HOLD\_CURSORS\_OVER\_COMMIT or ResultSet.CLOSE\_CURSORS\_AT\_COMMIT
**Returns:**a new CallableStatement object, containing the pre-compiled SQL statement, that will generate ResultSet objects with the given type, concurrency, and holdability
**Throws:**`SQLException` - if a database access error occurs or the given parameters are not ResultSet constants indicating type, concurrency, and holdability





#### **prepareStatement**

```
public PreparedStatement prepareStatement(String sql)
                                   throws SQLException 
```

Creates a PreparedStatement object for sending parameterized SQL statements to the database.

A SQL statement with or without IN parameters can be pre-compiled and stored in a PreparedStatement object. This object can then be used to efficiently execute this statement multiple times. Note: This method is optimized for handling parametric SQL statements that benefit from precompilation. If the driver supports precompilation, the method prepareStatement will send the statement to the database for precompilation. Some drivers may not support precompilation. In this case, the statement may not be sent to the database until the PreparedStatement object is executed. This has no direct effect on users; however, it does affect which methods throw certain SQLException objects. Result sets created using the returned PreparedStatement object will by default be type TYPE\_FORWARD\_ONLY and have a concurrency level of CONCUR\_READ\_ONLY.

**Specified by:**`prepareStatement` in interface `Connection`
**Parameters:**`sql` - an SQL statement that may contain one or more '?' IN parameter placeholders
**Returns:**a new default PreparedStatement object containing the pre-compiled SQL statement
**Throws:**`SQLException` - if a database access error occurs




#### **prepareStatement**

```
public PreparedStatement prepareStatement(String sql, int autoGeneratedKeys)
                                   throws SQLException
```

Creates a default PreparedStatement object that has the capability to retrieve auto-generated keys. The given constant tells the driver whether it should make auto-generated keys available for retrieval. This parameter is ignored if the SQL statement is not an INSERT statement. Note: This method is optimized for handling parametric SQL statements that benefit from precompilation. If the driver supports precompilation, the method prepareStatement will send the statement to the database for precompilation. Some drivers may not support precompilation. In this case, the statement may not be sent to the database until the PreparedStatement object is executed. This has no direct effect on users; however, it does affect which methods throw certain SQLExceptions. Result sets created using the returned PreparedStatement object will by default be type TYPE\_FORWARD\_ONLY and have a concurrency level of CONCUR\_READ\_ONLY.
**Specified by:**`prepareStatement` in interface `Connection`
**Parameters:**`sql` - - an SQL statement that may contain one or more '?' IN parameter placeholders`autoGeneratedKeys` - - a flag indicating whether auto-generated keys should be returned; one of Statement.RETURN\_GENERATED\_KEYS or Statement.NO\_GENERATED\_KEYS
**Returns:**a new PreparedStatement object, containing the pre-compiled SQL statement, that will have the capability of returning auto-generated keys
**Throws:**`SQLException` - - if a database access error occurs or the given parameter is not a Statement constant indicating whether auto-generated keys should be returned




#### **prepareStatement**

```
public PreparedStatement prepareStatement(String sql, int resultSetType, int resultSetConcurrency)
                                   throws SQLException
```
**Specified by:**`prepareStatement` in interface `Connection`
**Throws:**`SQLException`




#### **prepareStatement**

```
public PreparedStatement prepareStatement(String sql, int resultSetType, int resultSetConcurrency, int resultSetHoldability)
                                   throws SQLException
```
**Specified by:**`prepareStatement` in interface `Connection`
**Throws:**`SQLException`




#### **prepareStatement**

```
public PreparedStatement prepareStatement(String sql, int[] columnIndexes)
                                   throws SQLException
```
**Specified by:**`prepareStatement` in interface `Connection`
**Throws:**`SQLException`




#### **setSavepoint**

```
public Savepoint setSavepoint(String name)
                       throws SQLException
```

jBASE NOTE: Currently jSQL does no support savepoints.

Creates a savepoint with the given name in the current transaction and returns the new Savepoint object that represents it.
**Specified by:**`setSavepoint` in interface `Connection`
**Parameters:**`    name` - a String containing the name of the savepoint
**Returns:**the new Savepoint object
**Throws:**`SQLException` - if a database access error occurs or this Connection object is currently in auto-commit mode
**See Also:**[`Savepoint`](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Savepoint.html?is-external=true "class or interface in java.sql")




#### **prepareStatement**

```
public PreparedStatement prepareStatement(String sql, String[] columnNames)
                                   throws SQLException
```
**Specified by:**`prepareStatement` in interface `Connection`
**Throws:**`SQLException`






#### **getResponse**

```
protected Response getResponse()
                        throws SQLException
```

Reads response from the server. Handles InputOutputResponse on its own.

**Throws:**`SQLException`


