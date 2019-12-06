# JBaseJDBCConnection (jbasejdbc API)

**Created At:** 9/25/2017 10:54:50 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<noscript>&amp;lt;div&amp;gt;JavaScript is disabled on your browser.&amp;lt;/div&amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
# Class JBaseJDBCConnection

<dl><dt><strong>All Implemented Interfaces:</strong></dt><dd><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/AutoCloseable.html?is-external=true" title="class or interface in java.lang">AutoCloseable</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true" title="class or interface in java.sql">Wrapper</a></dd></dl><dl><dt><strong>Direct Known Subclasses:</strong></dt><dd><a href="/39228-jdbc/com_jbase_jdbc_jbasejdbcsocketconnection" title="class in com.jbase.jdbc">JBaseJDBCSocketConnectio</a>n</dd></dl>
```
public abstract class JBaseJDBCConnection
extends Object
implements Connection
```

<!--   -->

### 


# Field Summary

<!--   -->

## Fields inherited from interface java.sql.Connection
`TRANSACTION_NONE, TRANSACTION_READ_COMMITTED, TRANSACTION_READ_UNCOMMITTED, TRANSACTION_REPEATABLE_READ, TRANSACTION_SERIALIZABLE`




<!--   -->

### 


# Constructor Summary


| Constructor and Description<br> |
| --- |
| [JBaseJDBCConnection](../../../com/jbase/jdbc//39228-jdbc/com_jbase_jdbc_JBaseJDBCConnection#JBaseJDBCConnection--)()<br> |




<!--   -->

# Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| [Blob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true "class or interface in java.sql")<br> | createBlob()<br> |
| abstract voi`d`<br> | doConnection()<br> |


<!--   -->

### 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`




<!--   -->

## Methods inherited from interface java.sql.Connection
`abort, clearWarnings, close, commit, createArrayOf, createClob, createNClob, createSQLXML, createStatement, createStatement, createStatement, createStruct, getAutoCommit, getCatalog, getClientInfo, getClientInfo, getHoldability, getMetaData, getNetworkTimeout, getSchema, getTransactionIsolation, getTypeMap, getWarnings, isClosed, isReadOnly, isValid, nativeSQL, prepareCall, prepareCall, prepareCall, prepareStatement, prepareStatement, prepareStatement, prepareStatement, prepareStatement, prepareStatement, releaseSavepoint, rollback, rollback, setAutoCommit, setCatalog, setClientInfo, setClientInfo, setHoldability, setNetworkTimeout, setReadOnly, setSavepoint, setSavepoint, setSchema, setTransactionIsolation, setTypeMap`




<!--   -->

## Methods inherited from interface java.sql.Wrapper
`isWrapperFor, unwrap`

<!--   -->

### 


# Constructor Detail
<!--   -->


#### JBaseJDBCConnection

```
public JBaseJDBCConnection()
```





<!--   -->

# Method Detail
<!--   -->


#### doConnection

```
public abstract void doConnection()
                           throws SQLException
```
<dl><dt style="margin-left: 40px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/SQLException.html?is-external=true" title="class or interface in java.sql">SQLException</a></code></dd></dl>


<!--   -->
#### createBlob

```
public Blob createBlob()
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true#createBlob--" title="class or interface in java.sql">createBlob</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true" title="class or interface in java.sql">Connection</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
