# JBaseJDBCConnection (jbasejdbc API)

**Created At:** 9/25/2017 10:54:50 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_jbasejdbcconnection](https://docs.jbase.com/39228-jdbc/com_jbase_jdbc_jbasejdbcconnection)  
**Original ID:** 277918  
**Internal:** Yes  

&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;
# Class JBaseJDBCConnection

**All Implemented Interfaces:**[AutoCloseable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/AutoCloseable.html?is-external=true "class or interface in java.lang"), [Connection](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Connection.html?is-external=true "class or interface in java.sql"), [Wrapper](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Wrapper.html?is-external=true "class or interface in java.sql")**Direct Known Subclasses:**[JBaseJDBCSocketConnectio](./../jbasejdbcsocketconnection-%28jbasejdbc-api%29 "class in com.jbase.jdbc")n
```
public abstract class JBaseJDBCConnection
extends Object
implements Connection
```

### 


# Field Summary



## Fields inherited from interface java.sql.Connection
`TRANSACTION_NONE, TRANSACTION_READ_COMMITTED, TRANSACTION_READ_UNCOMMITTED, TRANSACTION_REPEATABLE_READ, TRANSACTION_SERIALIZABLE`






### 


# Constructor Summary


| Constructor and Description<br> |
| --- |
| [JBaseJDBCConnection](../../../com/jbase/jdbc//39228-jdbc/com_jbase_jdbc_JBaseJDBCConnection#JBaseJDBCConnection--)()<br> |






# Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| [Blob](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/Blob.html?is-external=true "class or interface in java.sql")<br> | createBlob()<br> |
| abstract voi`d`<br> | doConnection()<br> |




### 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`






## Methods inherited from interface java.sql.Connection
`abort, clearWarnings, close, commit, createArrayOf, createClob, createNClob, createSQLXML, createStatement, createStatement, createStatement, createStruct, getAutoCommit, getCatalog, getClientInfo, getClientInfo, getHoldability, getMetaData, getNetworkTimeout, getSchema, getTransactionIsolation, getTypeMap, getWarnings, isClosed, isReadOnly, isValid, nativeSQL, prepareCall, prepareCall, prepareCall, prepareStatement, prepareStatement, prepareStatement, prepareStatement, prepareStatement, prepareStatement, releaseSavepoint, rollback, rollback, setAutoCommit, setCatalog, setClientInfo, setClientInfo, setHoldability, setNetworkTimeout, setReadOnly, setSavepoint, setSavepoint, setSchema, setTransactionIsolation, setTypeMap`






## Methods inherited from interface java.sql.Wrapper
`isWrapperFor, unwrap`

### 


# Constructor Detail



#### JBaseJDBCConnection

```
public JBaseJDBCConnection()
```







# Method Detail



#### doConnection

```
public abstract void doConnection()
                           throws SQLException
```
Throws:`SQLException`



#### createBlob

```
public Blob createBlob()
```
Specified by:`createBlob` in interface `Connection`


