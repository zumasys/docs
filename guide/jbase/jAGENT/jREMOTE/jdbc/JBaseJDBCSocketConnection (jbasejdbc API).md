# JBaseJDBCSocketConnection (jbasejdbc API)

**Created At:** 9/25/2017 10:55:46 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<noscript>&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

# Class JBaseJDBCSocketConnection
<dl><dt><strong>All Implemented Interfaces:</strong></dt><dd><a href="/39228-jdbc/com_jbase_jdbc_JBaseJDBCGlobals" title="interface in com.jbase.jdbc">JBaseJDBCGlobals</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/AutoCloseable.html?is-external=true" title="class or interface in java.lang">AutoCloseable</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true" title="class or interface in java.sql">Wrapper</a></dd></dl>
```
public class JBaseJDBCSocketConnection
extends JBaseJDBCConnection
implements JBaseJDBCGlobals
```



<!-- ======== NESTED CLASS SUMMARY ======== -->

<!--   -->

# Nested Class Summary

<!--   -->

## Nested classes/interfaces inherited from interface com.jbase.jdbc.JBaseJDBCGlobals
`JBaseJDBCGlobals.TYPES`



<!-- =========== FIELD SUMMARY =========== -->
<!--   -->

# Field Summary

<!--   -->

## Fields inherited from interface com.jbase.jdbc.JBaseJDBCGlobals
`CHAR_AM, CHAR_SM, CHAR_VM, SHORT_AM, SHORT_CHAR_AM, SHORT_CHAR_SM, SHORT_CHAR_VM, SHORT_SM, SHORT_VM`


<!--   -->

## Fields inherited from interface java.sql.Connection
`TRANSACTION_NONE, TRANSACTION_READ_COMMITTED, TRANSACTION_READ_UNCOMMITTED, TRANSACTION_REPEATABLE_READ, TRANSACTION_SERIALIZABLE`

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
<!--   -->

# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>JBaseJDBCSocketConnection([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") url, [Properties](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Properties.html?is-external=true "class or interface in java.util") info)<br> |



<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

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
| <br>protected [Response](/39232-io/com_jbase_jdbc_io_response "class in com.jbase.jdbc.io")<br> | <br>getResponse()<br> | <br>Reads response from the server.<br> |
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




<!--   -->

## 


## Methods inherited from class com.jbase.jdbc.JBaseJDBCConnection
`createBlob`


<!--   -->

## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


<!--   -->

## Methods inherited from interface java.sql.Connection
`abort, createArrayOf, createClob, createNClob, createSQLXML, createStruct, getClientInfo, getClientInfo, getNetworkTimeout, getSchema, isValid, setClientInfo, setClientInfo, setNetworkTimeout, setSchema`


<!--   -->

## Methods inherited from interface java.sql.Wrapper
`isWrapperFor, unwrap`

<!--   -->

# 


# Constructor Detail
<!--   -->


#### **JBaseJDBCSocketConnection**

```
public JBaseJDBCSocketConnection(String url, Properties info)
```





<!-- ============ METHOD DETAIL ========== --><!--   -->
# Method Detail
<!--   -->
#### **doConnection**

```
public void doConnection()
                  throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>doConnection</code> in class <code><a href="/39228-jdbc/com_jbase_jdbc_JBaseJDBCConnection" title="class in com.jbase.jdbc">JBaseJDBCConnection</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **authenticate**

```
protected void authenticate()
                     throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **authenticate**

```
protected void authenticate(String account)
                     throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **sendProperties**

```
protected void sendProperties()
                       throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **isSSLRequired**

```
protected boolean isSSLRequired()
```


<!--   -->


#### **isCompressionRequired**

```
protected boolean isCompressionRequired()
```


<!--   -->


#### **compressionThreshold**

```
protected int compressionThreshold()
```


<!--   -->


#### **getInfo**

```
protected Properties getInfo()
```


<!--   -->


#### **getIsolationLevel**

```
protected int getIsolationLevel()
```


<!--   -->


#### **getConnectionInfo**

```
protected String getConnectionInfo()
```

Debugging tool.<dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>traceback or another connection info string.</dd>


<!--   -->


#### **connect**

```
protected void connect(String host, int port)
                throws NoSuchAlgorithmException,
                       UnknownHostException,
                       IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/security/NoSuchAlgorithmException.html?is-external=true" title="class or interface in java.security">NoSuchAlgorithmException</a></code></dd><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/net/UnknownHostException.html?is-external=true" title="class or interface in java.net">UnknownHostException</a></code></dd><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### **isEnabledNaiveTrustManager**

```
public boolean isEnabledNaiveTrustManager()
```


<!--   -->


#### **getHoldability**

```
public int getHoldability()
                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getHoldability</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **getTransactionIsolation**

```
public int getTransactionIsolation()
                            throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getTransactionIsolation</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **clearWarnings**

```
public void clearWarnings()
                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>clearWarnings</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **close**

```
public void close()
           throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>close</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/AutoCloseable.html?is-external=true" title="class or interface in java.lang">AutoCloseable</a></code></dd><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>close</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **commit**

```
public void commit()
            throws SQLException
```

Makes all changes made since the previous commit/rollback permanent and releases any database locks currently held by this Connection object. This method should be used only when auto-commit mode has been disabled.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>commit</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or this Connection object is in auto-commit mode</dd></dl>

<!--   -->


#### **rollback**

```
public void rollback()
              throws SQLException
```

Undoes all changes made in the current transaction and releases any database locks currently held by this Connection object. This method should be used only when auto-commit mode has been disabled.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>rollback</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or this Connection object is in auto-commit mode</dd></dl>

<!--   -->


#### **getAutoCommit**

```
public boolean getAutoCommit()
                      throws SQLException
```

Retrieves the current auto-commit mode for this Connection object.
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getAutoCommit</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">the current state of this Connection object&#39;s auto-commit mode</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true#getAutoCommit--" title="class or interface in java.sql"><code>Connection.getAutoCommit()</code></a></dd></dl>

<!--   -->


#### isClosed

```
public boolean isClosed()
                 throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>isClosed</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **isReadOnly**

```
public boolean isReadOnly()
                   throws SQLException
```

Retrieves whether this Connection object is in read-only mode.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>isReadOnly</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">true if this Connection object is read-only; false otherwise</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->


#### **setHoldability**

```
public void setHoldability(int holdability)
                    throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>setHoldability</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setTransactionIsolation**

```
public void setTransactionIsolation(int level)
                             throws SQLException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>setTransactionIsolation</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setAutoCommit**

```
public void setAutoCommit(boolean autoCommit)
                   throws SQLException
```

Sets this connection's auto-commit mode to the given state. If a connection is in auto-commit mode, then all its SQL statements will be executed and committed as individual transactions. Otherwise, its SQL statements are grouped into transactions that are terminated by a call to either the method commit or the method rollback. By default, new connections are in auto-commit mode. The commit occurs when the statement completes or the next execute occurs, whichever comes first. In the case of statements returning a ResultSet object, the statement completes when the last row of the ResultSet object has been retrieved or the ResultSet object has been closed. In advanced cases, a single statement may return multiple results as well as output parameter values. In these cases, the commit occurs when all results and output parameter values have been retrieved. NOTE: If this method is called during a transaction, the transaction is committed.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>setAutoCommit</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>autoCommit</code> - true to enable auto-commit mode; false to disable it</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - - if a database access error occurs</dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true#setAutoCommit-boolean-" title="class or interface in java.sql"><code>Connection.setAutoCommit(boolean)</code></a></dd></dl>

<!--   -->


#### **setReadOnly**

```
public void setReadOnly(boolean readOnly)
                 throws SQLException
```

Puts this connection in read-only mode as a hint to the driver to enable database optimizations. Note: This method cannot be called during a transaction.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true#setReadOnly-boolean-" title="class or interface in java.sql">setReadOnly</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>readOnly</code> - true enables read-only mode; false disables it</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or this method is called during a transaction</dd></dl>

<!--   -->


#### **getCatalog**

```
public String getCatalog()
                  throws SQLException
```

Retrieves this Connection object's current catalog name.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getCatalog</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">the current catalog name or null if there is none</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true#getCatalog--" title="class or interface in java.sql"><code>Connection.getCatalog()</code></a></dd></dl>

<!--   -->


#### setCatalog

```
public void setCatalog(String catalog)
                throws SQLException
```

Sets the given catalog name in order to select a subspace of this Connection object's database in which to work. If the driver does not support catalogs, it will silently ignore this request. jBASE NOTE: We don't support catalogs at the moment.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true#setCatalog-java.lang.String-" title="class or interface in java.sql">setCatalog</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>catalog</code> - the name of a catalog (subspace in this Connection object&#39;s database) in which to work</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->


#### **getMetaData**

```
public DatabaseMetaData getMetaData()
                             throws SQLException
```

Retrieves a DatabaseMetaData object that contains metadata about the database to which this Connection object represents a connection. The metadata includes information about the database's tables, its supported SQL grammar, its stored procedures, the capabilities of this connection, and so on.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getMetaData</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">a DatabaseMetaData object for this Connection object</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->


#### **getWarnings**

```
public SQLWarning getWarnings()
                       throws SQLException
```

Retrieves the first warning reported by calls on this Connection object. If there is more than one warning, subsequent warnings will be chained to the first one and can be retrieved by calling the method SQLWarning.getNextWarning on the warning that was retrieved previously. This method may not be called on a closed connection; doing so will cause an SQLException to be thrown. Note: Subsequent warnings will be chained to this SQLWarning. jBASE NOTE: Currently jSQL does not support warnings; this method will always return null.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getWarnings</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">the first SQLWarning object or null if there are none</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or this method is called on a closed connection</dd><dt style="margin-left: 40px;"><br></dt></dl>

<!--   -->


#### **setSavepoint**

```
public Savepoint setSavepoint()
                       throws SQLException
```

jBASE NOTE: Currently jSQL does no support savepoints.

Creates an unnamed savepoint in the current transaction and returns the new Savepoint object that represents it.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>setSavepoint</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">the new Savepoint object</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or this Connection object is currently in auto-commit mode</dd><dt style="margin-left: 40px;"><br></dt></dl>

<!--   -->


#### **releaseSavepoint**

```
public void releaseSavepoint(Savepoint savepoint)
                      throws SQLException 
```

jBASE NOTE: Currently jSQL does no support savepoints.

Removes the given Savepoint object from the current transaction. Any reference to the savepoint after it has been removed will cause an SQLException to be thrown.<dt><strong><br></strong><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>releaseSavepoint</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>savepoint</code> - the Savepoint object to be removed</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the given Savepoint object is not a valid savepoint in the current transaction</dd>


<!--   -->


#### **rollback**

```
public void rollback(Savepoint savepoint)
              throws SQLException
```

Undoes all changes made after the given Savepoint object was set. This method should be used only when auto-commit has been disabled.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true#rollback-java.sql.Savepoint-" title="class or interface in java.sql">rollback</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 40px;"><code>savepoint</code> - the Savepoint object to roll back to</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs, the Savepoint object is no longer valid, or this Connection object is currently in auto-commit mode</dd><dt style="margin-left: 40px;"><br></dt></dl>

<!--   -->


#### **createStatement**

```
public Statement createStatement()
                          throws SQLException
```

Creates a Statement object for sending SQL statements to the database. SQL statements without parameters are normally executed using Statement objects. If the same SQL statement is executed many times, it may be more efficient to use a PreparedStatement object. Result sets created using the returned Statement object will by default be type TYPE\_FORWARD\_ONLY and have a concurrency level of CONCUR\_READ\_ONLY.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>createStatement</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">a new default Statement object</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->


#### **createStatement**

```
public Statement createStatement(int resultSetType, int resultSetConcurrency)
                          throws SQLException
```

TODO: Creates a Statement object that will generate ResultSet objects with the given type and concurrency. This method is the same as the createStatement method above, but it allows the default result set type and concurrency to be overridden.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>createStatement</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>resultSetType</code> - a result set type; one of ResultSet.TYPE_FORWARD_ONLY, ResultSet.TYPE_SCROLL_INSENSITIVE, or ResultSet.TYPE_SCROLL_SENSITIVE,</dd><dd style="margin-left: 60px;"><code>resultSetConcurrency</code> - a concurrency type; one of ResultSet.CONCUR_READ_ONLY or ResultSet.CONCUR_UPDATABLE.</dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">a new Statement object that will generate ResultSet objects with the given type and concurrency</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the given parameters are not ResultSet constants indicating type and concurrency</dd></dl>

<!--   -->


#### **createStatement**

```
public Statement createStatement(int resultSetType, int resultSetConcurrency, int resultSetHoldability)
                          throws SQLException
```

TODO: Creates a Statement object that will generate ResultSet objects with the given type, concurrency, and holdability. This method is the same as the createStatement method above, but it allows the default result set type, concurrency, and holdability to be overridden.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>createStatement</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><p style="margin-left: 40px;"><br></p><dt style="margin-left: 40px;"><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>resultSetType</code> - one of the following ResultSet constants: ResultSet.TYPE_FORWARD_ONLY, ResultSet.TYPE_SCROLL_INSENSITIVE, or ResultSet.TYPE_SCROLL_SENSITIVE,</dd><dd style="margin-left: 60px;"><code>resultSetConcurrency</code> - one of the following ResultSet constants: ResultSet.CONCUR_READ_ONLY or ResultSet.CONCUR_UPDATABLE,</dd><dd style="margin-left: 60px;"><code>resultSetHoldability</code> - one of the following ResultSet constants: ResultSet.HOLD_CURSORS_OVER_COMMIT or ResultSet.CLOSE_CURSORS_AT_COMMIT.</dd><p style="margin-left: 40px;"><br></p><dt style="margin-left: 40px;"><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">a new Statement object that will generate ResultSet objects with the given type, concurrency, and holdability</dd><p style="margin-left: 40px;"><br></p><dt style="margin-left: 40px;"><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the given parameters are not ResultSet constants indicating type, concurrency, and holdability</dd><p style="margin-left: 40px;"><br></p><dt style="margin-left: 40px;"><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/ResultSet.html?is-external=true" title="class or interface in java.sql"><code>ResultSet</code></a></dd></dl>

<!--   -->


#### **getTypeMap**

```
public Map<String,Class<?>> getTypeMap()
                                throws SQLException
```

TODO: Retrieves the Map object associated with this Connection object. Unless the application has added an entry, the type map returned will be empty.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getTypeMap</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->


#### **setTypeMap**

```
public void setTypeMap(Map map)
                throws SQLException
```

TODO: Installs the given TypeMap object as the type map for this Connection object. The type map will be used for the custom mapping of SQL structured types and distinct types.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>setTypeMap</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>map</code> - the java.util.Map object to install as the replacement for this Connection object&#39;s default type map</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the given parameter is not a java.util.Map object</dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also</strong>:</span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true#getTypeMap--" title="class or interface in java.sql"><code>Connection.getTypeMap()</code></a></dd></dl>

<!--   -->


#### **nativeSQL**

```
public String nativeSQL(String sql)
                 throws SQLException
```

Converts the given SQL statement into the system's native SQL grammar. A driver may convert the JDBC SQL grammar into its system's native SQL grammar prior to sending it. This method returns the native form of the statement that the driver would have sent. jBASE NOTE: This method returns its actual parameter unchanged.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true#nativeSQL-java.lang.String-" title="class or interface in java.sql">nativeSQL</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>sql</code> - an SQL statement that may contain one or more &#39;?&#39; parameter placeholders</dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">the native form of this statement</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->


#### **prepareCall**

```
public CallableStatement prepareCall(String sql)
                              throws SQLException
```

TODO: Creates a CallableStatement object for calling database stored procedures. The CallableStatement object provides methods for setting up its IN and OUT parameters, and methods for executing the call to a stored procedure. Note: This method is optimized for handling stored procedure call statements. Some drivers may send the call statement to the database when the method prepareCall is done; others may wait until the CallableStatement object is executed. This has no direct effect on users; however, it does affect which method throws certain SQLExceptions. Result sets created using the returned CallableStatement object will by default be type TYPE\_FORWARD\_ONLY and have a concurrency level of CONCUR\_READ\_ONLY.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>prepareCall</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>sql</code> - an SQL statement that may contain one or more &#39;?&#39; parameter placeholders. Typically this statement is a JDBC function call escape string.</dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">a new default CallableStatement object containing the pre-compiled SQL statement</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->


#### **prepareCall**

```
public CallableStatement prepareCall(String sql, int resultSetType, int resultSetConcurrency)
                              throws SQLException
```

TODO: Creates a CallableStatement object that will generate ResultSet objects with the given type and concurrency. This method is the same as the prepareCall method above, but it allows the default result set type and concurrency to be overridden.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>prepareCall</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>sql</code> - a String object that is the SQL statement to be sent to the database; may contain on or more ? parameters</dd><dd style="margin-left: 60px;"><code>resultSetType</code> - a result set type; one of ResultSet.TYPE_FORWARD_ONLY, ResultSet.TYPE_SCROLL_INSENSITIVE, or ResultSet.TYPE_SCROLL_SENSITIVE</dd><dd style="margin-left: 60px;"><code>resultSetConcurrency</code> - a concurrency type; one of ResultSet.CONCUR_READ_ONLY or ResultSet.CONCUR_UPDATABLE</dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">a new CallableStatement object containing the pre-compiled SQL statement that will produce ResultSet objects with the given type and concurrency</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the given parameters are not ResultSet constants indicating type and concurrency</dd></dl>

<!--   -->


#### **prepareCall**

```
public CallableStatement prepareCall(String sql, int resultSetType, int resultSetConcurrency, int resultSetHoldability)
                              throws SQLException
```

TODO: Creates a CallableStatement object that will generate ResultSet objects with the given type and concurrency. This method is the same as the prepareCall method above, but it allows the default result set type, result set concurrency type and holdability to be overridden.

**Specified by:**<dd style="margin-left: 40px;"><code>prepareCall</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 20px;"><code>sql</code> - a String object that is the SQL statement to be sent to the database; may contain on or more ? parameters</dd><dd style="margin-left: 20px;"><code>resultSetType</code> - one of the following ResultSet constants: ResultSet.TYPE_FORWARD_ONLY, ResultSet.TYPE_SCROLL_INSENSITIVE, or ResultSet.TYPE_SCROLL_SENSITIVE</dd><dd style="margin-left: 20px;"><code>resultSetConcurrency</code> - one of the following ResultSet constants: ResultSet.CONCUR_READ_ONLY or ResultSet.CONCUR_UPDATABLE</dd><dd style="margin-left: 20px;"><code>resultSetHoldability</code> - one of the following ResultSet constants: ResultSet.HOLD_CURSORS_OVER_COMMIT or ResultSet.CLOSE_CURSORS_AT_COMMIT</dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>a new CallableStatement object, containing the pre-compiled SQL statement, that will generate ResultSet objects with the given type, concurrency, and holdability</dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or the given parameters are not ResultSet constants indicating type, concurrency, and holdability</dd>


<!--   -->


#### **prepareStatement**

```
public PreparedStatement prepareStatement(String sql)
                                   throws SQLException 
```

Creates a PreparedStatement object for sending parameterized SQL statements to the database.

A SQL statement with or without IN parameters can be pre-compiled and stored in a PreparedStatement object. This object can then be used to efficiently execute this statement multiple times. Note: This method is optimized for handling parametric SQL statements that benefit from precompilation. If the driver supports precompilation, the method prepareStatement will send the statement to the database for precompilation. Some drivers may not support precompilation. In this case, the statement may not be sent to the database until the PreparedStatement object is executed. This has no direct effect on users; however, it does affect which methods throw certain SQLException objects. Result sets created using the returned PreparedStatement object will by default be type TYPE\_FORWARD\_ONLY and have a concurrency level of CONCUR\_READ\_ONLY.
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>prepareStatement</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>sql</code> - an SQL statement that may contain one or more &#39;?&#39; IN parameter placeholders</dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">a new default PreparedStatement object containing the pre-compiled SQL statement</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs</dd></dl>

<!--   -->


#### **prepareStatement**

```
public PreparedStatement prepareStatement(String sql, int autoGeneratedKeys)
                                   throws SQLException
```

Creates a default PreparedStatement object that has the capability to retrieve auto-generated keys. The given constant tells the driver whether it should make auto-generated keys available for retrieval. This parameter is ignored if the SQL statement is not an INSERT statement. Note: This method is optimized for handling parametric SQL statements that benefit from precompilation. If the driver supports precompilation, the method prepareStatement will send the statement to the database for precompilation. Some drivers may not support precompilation. In this case, the statement may not be sent to the database until the PreparedStatement object is executed. This has no direct effect on users; however, it does affect which methods throw certain SQLExceptions. Result sets created using the returned PreparedStatement object will by default be type TYPE\_FORWARD\_ONLY and have a concurrency level of CONCUR\_READ\_ONLY.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>prepareStatement</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>sql</code> - - an SQL statement that may contain one or more &#39;?&#39; IN parameter placeholders</dd><dd style="margin-left: 60px;"><code>autoGeneratedKeys</code> - - a flag indicating whether auto-generated keys should be returned; one of Statement.RETURN_GENERATED_KEYS or Statement.NO_GENERATED_KEYS</dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">a new PreparedStatement object, containing the pre-compiled SQL statement, that will have the capability of returning auto-generated keys</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - - if a database access error occurs or the given parameter is not a Statement constant indicating whether auto-generated keys should be returned</dd></dl>

<!--   -->


#### **prepareStatement**

```
public PreparedStatement prepareStatement(String sql, int resultSetType, int resultSetConcurrency)
                                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>prepareStatement</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **prepareStatement**

```
public PreparedStatement prepareStatement(String sql, int resultSetType, int resultSetConcurrency, int resultSetHoldability)
                                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>prepareStatement</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **prepareStatement**

```
public PreparedStatement prepareStatement(String sql, int[] columnIndexes)
                                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>prepareStatement</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>

<!--   -->


#### **setSavepoint**

```
public Savepoint setSavepoint(String name)
                       throws SQLException
```

jBASE NOTE: Currently jSQL does no support savepoints.

Creates a savepoint with the given name in the current transaction and returns the new Savepoint object that represents it.
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>setSavepoint</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 40px;"><code>&nbsp; &nbsp; name</code> - a String containing the name of the savepoint</dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">the new Savepoint object</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code> - if a database access error occurs or this Connection object is currently in auto-commit mode</dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Savepoint.html?is-external=true" title="class or interface in java.sql"><code>Savepoint</code></a></dd></dl>

<!--   -->


#### **prepareStatement**

```
public PreparedStatement prepareStatement(String sql, String[] columnNames)
                                   throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>prepareStatement</code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>



<!--   -->


#### **getResponse**

```
protected Response getResponse()
                        throws SQLException
```

Reads response from the server. Handles InputOutputResponse on its own.
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
