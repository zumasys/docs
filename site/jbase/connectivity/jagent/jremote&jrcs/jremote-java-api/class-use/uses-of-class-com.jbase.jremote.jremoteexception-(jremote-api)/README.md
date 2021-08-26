# Uses of Class com.jbase.jremote.JRemoteException (jremote API)

<PageHeader />

## Uses of Class

com.jbase.jremote.JRemoteException

| Package | 
| --- | --- |
| Packages that use [JRemoteException](./../../jremoteexception-(jremote-api) "class in com.jbase.jremote")  |
| com.jbase.jremote |
| com.jbase.jremote.io |
| com.jbase.jremote.jca |
| com.jbase.jremote.jca.spring |
| com.jbase.jremote.protocol |

### Uses of [JRemoteException](./../../jremoteexception-(jremote-api) "class in com.jbase.jremote") in [com.jbase.jremote](./../../../../jremote-api)

| Modifier and Type | Class and Description |
| --- | --- |
 Subclasses of [JRemoteException](./../../jremoteexception-(jremote-api) "class in com.jbase.jremote") in [com.jbase.jremote](./../../../../jremote-api)  | 
| `class` | `JAuthenticationException`<br>A exception thrown when authentication fails. |
| `class` | `JRecordLockedException`<br>A generic jBASE record locked exception. |
| `class` | `JRecordNotFoundException`<br>A generic jBASE record not found exception. |
| `class` | `JSubroutineNotFoundException`<br>This exception is thrown when a call is made to a non existent subroutine. |

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote](./../../../../jremote-api) that throw [JRemoteException](./../../jremoteexception-(jremote-api) "class in com.jbase.jremote")  | |
| `void` | JConnection.`begin()`<br>Begin a jBASE transaction. |
| `JSubroutineParameters` | JConnection.`call(String subroutineName, JSubroutineParameters parameters)`<br>Call a jBASE subroutine. |
| `boolean` | JFile.`clear()`<br>Delete all records from the file. |
| `void` | JSelectList.`close()`<br>Close select list. |
| `boolean` | JFile.`close()`<br>Closes this jBASE file. |
| `void` | JConnection.`close()`<br>Close any resources used by this connection. |
| `void` | JConnection.`commit()`<br>Commit all pending jBASE operations performed in transaction and mark as complete. |
| `JSelectList` | JConnection.`createSelectList(JDynArray jd)`<br>Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers. |
| `JStatement` | JConnection.`createStatement()`<br>Create a statement object that enables queries to be executed and a JResultSet returned. |
| `int` | JConnection.`date()`<br>Return the jBASE internal date. |
| `boolean` | JFile.`delete(String recordKey)`<br>Delete a record where the supplied recordKey is the key to the record. |
| `boolean` | JConnection.`echo(int length)`<br>Sends an echo and waits for it's response |
| `JResultSet` | JStatement.`execute(JDynArray queries)`<br>Execute query. |
| `JResultSet` | JStatement.`execute(JDynArray queries, JSelectList selectList)`<br>Execute query using an existing select list as a filter. |
| `JResultSet` | JStatement.`execute(String query)`<br>Execute query. |
| `JExecuteResults` | JConnection.`execute(String command)`<br>Execute a jBASE command. |
| `JResultSet` | JStatement.`execute(String query, JSelectList selectList)`<br>Execute query using an existing select list as a filter. |
| `JExecuteResults` | JConnection.`execute(String command, JSelectList selectList)`<br>Execute a jBASE command using an existing select list as a filter. |
| `boolean` | JFile.`exists(String recordKey)`<br>This method returns true if the supplied record id exists. |
| `JDynArray` | JConnection.`getCommon(String name)`<br>Return the value of the named common with the supplied name. |
| `JConnection` | JConnectionFactory.`getConnection()`<br>Get a connection to a remote jBASE instance. |
| `JConnection` | DefaultJConnectionFactory.`getConnection()`  |
| `JConnection` | JConnectionFactory.`getConnection(JConnectionCallbackHandler handler)`<br>Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation. |
| `JConnection` | DefaultJConnectionFactory.`getConnection(JConnectionCallbackHandler handler)`  |
| `JConnection` | JConnectionFactory.`getConnection(String user, String password)`<br>Get a connection to a remote jBASE instance. |
| `JConnection` | DefaultJConnectionFactory.`getConnection(String user, String password)`  |
| `JConnection` | JConnectionFactory.`getConnection(String user, String password, Properties props)`<br>Get a connection to a remote jBASE instance. |
| `JConnection` | DefaultJConnectionFactory.`getConnection(String user, String password, Properties props)`  |
| `JConnection` | JConnectionFactory.`getConnection(String user, String account, String password)`<br>Get a connection to a remote jBASE account. |
| `JConnection` | DefaultJConnectionFactory.`getConnection(String user, String account, String password)`  |
| `JCursor` | JFile.`getCursor()`<br>Returns a cursor to this jBASE file. |
| `EISMetaDataRepository` | JConnection.`getMetaData()`<br>Return meta data of the connected jBASE instance. |
| `void` | JSelectList.`goToPosition(int targetPos)`<br>Move to the specified position. |
| `boolean` | JFile.`hasLock(String recordKey)`Check if the specified key holds a lock. |
| `boolean` | JSelectList.`hasNext()`<br>Returns whether it is possible to move forward. |
| `boolean` | JSelectList.`hasPrevious()`<br>Returns whether it is possible to move backwards. |
| `String` | JConnection.`iconv(String data, String conversion)`<br>Converts data in external format to internal format. |
| `String` | JConnection.`monitoring(String command)`<br>Sends an monitoring command and waits for it's response |
| `boolean` | JSelectList.`next()`<br>Move to next item |
| `boolean` | JResultSet.`next()`  |
| `String` | JConnection.`oconv(String data, String conversion)`<br>Converts internal representations of data to their external form. |
| `JFile` | JConnection.`open(String fileName)`<br>Attempts to open a jBASE file or returns null if the file does not exist. |
| `boolean` | JSelectList.`previous()`<br>Move to previous item |
| `JDynArray` | JFile.`read(String recordKey)`<br>Read a record where the supplied recordKey is the key to the record. |
| `JDynArray` | JFile.`readU(String recordKey, boolean blockedRead)`<br>Read a record where the supplied recordKey is the key to the record and locks it for update. |
| `boolean` | JFile.`releaseLock(String recordKey)`<br>Release the update lock (if held) on the specified key. |
| `boolean` | JFile.`releaseLocks()`<br>Releases all locks held by this file. |
| `void` | JConnection.`rollback()`<br>Rollback all jBASE operations performed in transaction and mark as complete. |
| `JSelectList` | JFile.`select()`<br>Returns a select list containing the record keys in this jBASE file. |
| `boolean` | JConnection.`switchAccount(String user, String account, String password)`<br>Log into the specified jBASE account. |
| `int` | JConnection.`time()`<br>Return the jBASE internal time. |
| `void` | JCursor.`update()`<br>Update changes. |
| `boolean` | JFile.`write(String recordKey, JDynArray record)`<br>Write the supplied record to the jBASE file. |
| `boolean` | JFile.`writeU(String recordKey, JDynArray record, boolean blockedWrite)`<br>Write the supplied record to the jBASE file. |

### Uses of [JRemoteException](./../../jremoteexception-(jremote-api) "class in com.jbase.jremote") in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-(jremote---api))

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-(jremote---api)) that throw [JRemoteException](./../../jremoteexception-(jremote-api) "class in com.jbase.jremote")  |
| `void` | AbstractJRemoteConnection.`authenticate(String user, String password)`<br>Send data for authentication to the server. |
| `void` | AbstractJRemoteConnection.`authenticate(String user, String account, String password)`<br>Send data for authentication to the server, the server must be configured to authenticate jBASE account connections. |
| `void` | JConnectionImpl.`begin()`  |
| `JSubroutineParameters` | JConnectionImpl.`call(String subroutineName, JSubroutineParameters parameters)`  |
| `boolean` | JFileImpl.`clear()`  |
| `void` | JSelectListImpl.`close()`  |
| `void` | JRemoteSocketConnection.`close()`  |
| `boolean` | JFileImpl.`close()`  |
| `void` | JCursorImpl.`close()`<br>Close cursor. |
| `void` | JConnectionImpl.`close()`  |
| `void` | InterceptorConnection.`close()`<br>Close underlying connection. |
| `abstract void` | AbstractJRemoteConnection.`close()`  |
| `void` | JConnectionImpl.`commit()`  |
| `protected void` | JRemoteSocketConnection.`connect(String host, int port)`  |
| `JSelectList` | JConnectionImpl.`createSelectList(JDynArray jd)`  |
| `JStatement` | JConnectionImpl.`createStatement()`  |
| `int` | JConnectionImpl.`date()`<br>Return the jBASE internal date. |
| `boolean` | JFileImpl.`delete(String recordKey)`  |
| `boolean` | JConnectionImpl.`echo(int length)`<br>Send an echo request and waits for a reply. |
| `JResultSet` | JStatementImpl.`execute(JDynArray queries)`  |
| `JResultSet` | JStatementImpl.`execute(JDynArray queries, JSelectList selectList)`  |
| `JResultSet` | JStatementImpl.`execute(String query)`  |
| `JExecuteResults` | JConnectionImpl.`execute(String command)`  |
| `JResultSet` | JStatementImpl.`execute(String query, JSelectList selectList)`  |
| `JExecuteResults` | JConnectionImpl.`execute(String command, JSelectList selectList)`  |
| `boolean` | JFileImpl.`exists(String recordKey)`  |
| `protected JSelectListProt` | JSelectListImpl.`fetchNext(boolean fetchData)`  |
| `protected JSelectListProt` | JSelectListImpl.`fetchPrevious(boolean fetchData)`  |
| `JDynArray` | JConnectionImpl.`getCommon(String name)`<br>Return the value of the named common with the supplied name. |
| `JCursor` | JFileImpl.`getCursor()`  |
| `EISMetaDataRepository` | JConnectionImpl.`getMetaData()`  |
| `void` | JSelectListImpl.`goToPosition(int targetPos)`  |
| `boolean` | JFileImpl.`hasLock(String recordKey)`  |
| `boolean` | JSelectListImpl.`hasNext()`  |
| `boolean` | JCursorImpl.`hasNext()`<br>Returns whether it is possible to move the cursor forwards. |
| `protected boolean` | JSelectListImpl.`hasNext(boolean fetchData)`  |
| `boolean` | JSelectListImpl.`hasPrevious()`  |
| `boolean` | JCursorImpl.`hasPrevious()`<br>Returns whether it is possible to move the cursor backwards. |
| `protected boolean` | JSelectListImpl.`hasPrevious(boolean fetchData)`  |
| `String` | JConnectionImpl.`iconv(String data, String conversion)`  |
| `String` | JConnectionImpl.`monitoring(String command)`<br>Send an monitoring request and waits for a reply. |
| `boolean` | JSelectListImpl.`next()`  |
| `boolean` | JResultSetImpl.`next()`  |
| `boolean` | JCursorImpl.`next()`<br>Move cursor to next item |
| `protected boolean` | JSelectListImpl.`next(boolean fetchData)`  |
| `String` | JConnectionImpl.`oconv(String data, String conversion)`  |
| `JFile` | JConnectionImpl.`open(String fileName)`  |
| `boolean` | JSelectListImpl.`previous()`  |
| `boolean` | JCursorImpl.`previous()`<br>Move cursor to previous item |
| `protected boolean` | JSelectListImpl.`previous(boolean fetchData)`  |
| `JDynArray` | JFileImpl.`read(String recordKey)`  |
| `JDynArray` | JFileImpl.`readU(String recordKey, boolean blockedRead)`  |
| `Response` | JRemoteSocketConnection.`receive()`  |
| `Response` | InterceptorConnection.`receive()`<br>Intercept any IO messages and handle required input or output on in / out streams. |
| `abstract Response` | AbstractJRemoteConnection.`receive()`  |
| `boolean` | JFileImpl.`releaseLock(String recordKey)`  |
| `boolean` | JFileImpl.`releaseLocks()`  |
| `void` | JConnectionImpl.`rollback()`  |
| `JSelectList` | JFileImpl.`select()`  |
| `void` | JRemoteSocketConnection.`send(JRemoteRequest request)`  |
| `void` | InterceptorConnection.`send(JRemoteRequest request)`  |
| `abstract void` | AbstractJRemoteConnection.`send(JRemoteRequest request)`  |
| `Response` | AbstractJRemoteConnection.`sendWaitForResponse(JRemoteRequest request)`<br>Convenient method which simply calls #send followed by #receive. |
| `void` | AbstractJRemoteConnection.`setProperties(Properties props)`  |
| `boolean` | JConnectionImpl.`switchAccount(String user, String account, String password)`  |
| `int` | JConnectionImpl.`time()`<br>Return the jBASE internal time. |
| `void` | JCursorImpl.`update()`  |
| `boolean` | JFileImpl.`write(String recordKey, JDynArray record)`  |
| `boolean` | JFileImpl.`writeU(String recordKey, JDynArray record, boolean blockedWrite)`  |

| Constructor and Description |
| --- |
 Constructors in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-(jremote---api)) that throw [JRemoteException](./../../jremoteexception-(jremote-api) "class in com.jbase.jremote")  |
| `JRemoteSocketConnection(String host, int port)`  |
| `JRemoteSocketConnection(String host, int port, Properties info)`  |

### Uses of [JRemoteException](./../../jremoteexception-(jremote-api) "class in com.jbase.jremote") in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-(jremote---api))

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-(jremote---api)) that throw [JRemoteException](./../../jremoteexception-(jremote-api) "class in com.jbase.jremote")  |
| `void` | WrappedJConnection.`begin()`  |
| `JSubroutineParameters` | WrappedJConnection.`call(String subroutineName, JSubroutineParameters parameters)`<br>Call jBASE subroutine. |
| `protected void` | WrappedJConnection.`checkStatus()`<br>In a managed environment the `checkStatus` method checks that this handle has not been closed. |
| `boolean` | WrappedJFile.`clear()`  |
| `boolean` | WrappedJFile.`close()`  |
| `void` | WrappedJConnection.`close()`<br>Close this connection. |
| `void` | WrappedJConnection.`commit()`  |
| `JSelectList` | WrappedJConnection.`createSelectList(JDynArray jd)`  |
| `JStatement` | WrappedJConnection.`createStatement()`  |
| `int` | WrappedJConnection.`date()`<br>Return the jBASE internal date. |
| `boolean` | WrappedJFile.`delete(String recordKey)`  |
| `boolean` | WrappedJConnection.`echo(int length)`<br>Send an echo request and waits for a reply. |
| `JExecuteResults` | WrappedJConnection.`execute(String command)`  |
| `JExecuteResults` | WrappedJConnection.`execute(String command, JSelectList selectList)`  |
| `boolean` | WrappedJFile.`exists(String recordKey)`  |
| `JDynArray` | WrappedJConnection.`getCommon(String name)`<br>Return the value of the common with supplied name. |
| `protected JConnection` | WrappedJConnection.`getConnection()`<br>Get the real connection. |
| `JConnection` | JRemoteConnectionFactoryImpl.`getConnection()`  |
| `JConnection` | JRemoteConnectionFactoryImpl.`getConnection(JConnectionCallbackHandler handler)`  |
| `JConnection` | JRemoteConnectionFactoryImpl.`getConnection(String user, String password)`  |
| `JConnection` | JRemoteConnectionFactoryImpl.`getConnection(String user, String password, Properties props)`  |
| `JConnection` | JRemoteConnectionFactoryImpl.`getConnection(String user, String account, String password)`  |
| `protected JConnection` | JRemoteConnectionFactoryImpl.`getConnection(String user, String account, String password, JConnectionCallbackHandler handler)`  |
| `JCursor` | WrappedJFile.`getCursor()`  |
| `EISMetaDataRepository` | WrappedJConnection.`getMetaData()`  |
| `boolean` | WrappedJFile.`hasLock(String recordKey)`  |
| `String` | WrappedJConnection.`iconv(String data, String conversion)`  |
| `String` | WrappedJConnection.`monitoring(String command)`<br>Sends an monitoring command and waits for it's response |
| `String` | WrappedJConnection.`oconv(String data, String conversion)`  |
| `JFile` | WrappedJConnection.`open(String filename)`<br>Open jBASE file. |
| `JDynArray` | WrappedJFile.`read(String recordKey)`  |
| `JDynArray` | WrappedJFile.`readU(String recordKey, boolean blockedRead)`  |
| `boolean` | WrappedJFile.`releaseLock(String recordKey)`  |
| `boolean` | WrappedJFile.`releaseLocks()`  |
| `void` | WrappedJConnection.`rollback()`  |
| `JSelectList` | WrappedJFile.`select()`  |
| `boolean` | WrappedJConnection.`switchAccount(String user, String account, String password)`<br>Switch jBASE account. |
| `int` | WrappedJConnection.`time()`<br>Return the jBASE internal time. |
| `boolean` | WrappedJFile.`write(String recordKey, JDynArray record)`  |
| `boolean` | WrappedJFile.`writeU(String recordKey, JDynArray record, boolean blockedWrite)`  |

### Uses of [JRemoteException](./../../jremoteexception-(jremote-api) "class in com.jbase.jremote") in [com.jbase.jremote.jca.spring](./../../jca/spring/com.jbase.jremote.jca.spring-(jremote-api))

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.jca.spring](./../../jca/spring/com.jbase.jremote.jca.spring-(jremote-api)) that throw [JRemoteException](./../../jremoteexception-(jremote-api) "class in com.jbase.jremote")  | 
|`static JConnection` | JConnectionFactoryUtils.`getConnection(JConnectionFactory cf)`<br>Obtain a JConnection from the given JConnectionFactory. |

### Uses of [JRemoteException](./../../jremoteexception-(jremote-api) "class in com.jbase.jremote") in [com.jbase.jremote.protocol](./../../protocol/com.jbase.jremote.protocol-(jremote-api))

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.protocol](./../../protocol/com.jbase.jremote.protocol-(jremote-api)) that throw [JRemoteException](./../../jremoteexception-(jremote-api) "class in com.jbase.jremote")  | 
| `boolean` | JSelectListProt.`hasNext()`<br>Returns whether it is possible to move forward. |
| `boolean` | JSelectListProt.`hasPrevious()`<br>Returns whether it is possible to move backwards. |
| `boolean` | JSelectListProt.`next()`<br>Move to next item. |
| `boolean` | JSelectListProt.`previous()`<br>Move to previous item. |

Back to [jRemote API](./../../README.md)
  
<PageFooter />
