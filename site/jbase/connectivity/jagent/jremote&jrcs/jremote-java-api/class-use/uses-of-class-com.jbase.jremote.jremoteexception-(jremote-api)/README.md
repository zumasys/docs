# Uses of Class com.jbase.jremote.JRemoteException (jremote API)

<PageHeader />

## Uses of Class
com.jbase.jremote.JRemoteException

| Package<br> | Description<br> |
| --- | --- |
 Packages that use [JRemoteException](./../../jremoteexception-%28jremote-api%29 "class in com.jbase.jremote")  | com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.jca<br> |  <br> |
| com.jbase.jremote.jca.spring<br> |  <br> |
| com.jbase.jremote.protocol<br> |  <br> |





### Uses of [JRemoteException](./../../jremoteexception-%28jremote-api%29 "class in com.jbase.jremote") in [com.jbase.jremote](./../../../../jremote-api)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Subclasses of [JRemoteException](./../../jremoteexception-%28jremote-api%29 "class in com.jbase.jremote") in [com.jbase.jremote](./../../../../jremote-api)  | `class `<br> | `JAuthenticationException`<br>A exception thrown when authentication fails.<br> |
| `class `<br> | `JRecordLockedException`<br>A generic jBASE record locked exception.<br> |
| `class `<br> | `JRecordNotFoundException`<br>A generic jBASE record not found exception.<br> |
| `class `<br> | `JSubroutineNotFoundException`<br>This exception is thrown when a call is made to a non existent subroutine.<br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote](./../../../../jremote-api) that throw [JRemoteException](./../../jremoteexception-%28jremote-api%29 "class in com.jbase.jremote")  | `void`<br> | JConnection.`begin()`<br>Begin a jBASE transaction.<br> |
| `JSubroutineParameters`<br> | JConnection.`call(String subroutineName, JSubroutineParameters parameters)`<br>Call a jBASE subroutine.<br> |
| `boolean`<br> | JFile.`clear()`<br>Delete all records from the file.<br> |
| `void`<br> | JSelectList.`close()`<br>Close select list.<br> |
| `boolean`<br> | JFile.`close()`<br>Closes this jBASE file.<br> |
| `void`<br> | JConnection.`close()`<br>Close any resources used by this connection.<br> |
| `void`<br> | JConnection.`commit()`<br>Commit all pending jBASE operations performed in transaction and mark as complete.<br> |
| `JSelectList`<br> | JConnection.`createSelectList(JDynArray jd)`<br>Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.<br> |
| `JStatement`<br> | JConnection.`createStatement()`<br>Create a statement object that enables queries to be executed and a JResultSet returned.<br> |
| `int`<br> | JConnection.`date()`<br>Return the jBASE internal date.<br> |
| `boolean`<br> | JFile.`delete(String recordKey)`<br>Delete a record where the supplied recordKey is the key to the record.<br> |
| `boolean`<br> | JConnection.`echo(int length)`<br>Sends an echo and waits for it's response<br> |
| `JResultSet`<br> | JStatement.`execute(JDynArray queries)`<br>Execute query.<br> |
| `JResultSet`<br> | JStatement.`execute(JDynArray queries, JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
| `JResultSet`<br> | JStatement.`execute(String query)`<br>Execute query.<br> |
| `JExecuteResults`<br> | JConnection.`execute(String command)`<br>Execute a jBASE command.<br> |
| `JResultSet`<br> | JStatement.`execute(String query, JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
| `JExecuteResults`<br> | JConnection.`execute(String command, JSelectList selectList)`<br>Execute a jBASE command using an existing select list as a filter.<br> |
| `boolean`<br> | JFile.`exists(String recordKey)`<br>This method returns true if the supplied record id exists.<br> |
| `JDynArray`<br> | JConnection.`getCommon(String name)`<br>Return the value of the named common with the supplied name.<br> |
| `JConnection`<br> | JConnectionFactory.`getConnection()`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | DefaultJConnectionFactory.`getConnection()` <br> |
| `JConnection`<br> | JConnectionFactory.`getConnection(JConnectionCallbackHandler handler)`<br>Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation.<br> |
| `JConnection`<br> | DefaultJConnectionFactory.`getConnection(JConnectionCallbackHandler handler)` <br> |
| `JConnection`<br> | JConnectionFactory.`getConnection(String user, String password)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | DefaultJConnectionFactory.`getConnection(String user, String password)` <br> |
| `JConnection`<br> | JConnectionFactory.`getConnection(String user, String password, Properties props)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | DefaultJConnectionFactory.`getConnection(String user, String password, Properties props)` <br> |
| `JConnection`<br> | JConnectionFactory.`getConnection(String user, String account, String password)`<br>Get a connection to a remote jBASE account.<br> |
| `JConnection`<br> | DefaultJConnectionFactory.`getConnection(String user, String account, String password)` <br> |
| `JCursor`<br> | JFile.`getCursor()`<br>Returns a cursor to this jBASE file.<br> |
| `EISMetaDataRepository`<br> | JConnection.`getMetaData()`<br>Return meta data of the connected jBASE instance.<br> |
| `void`<br> | JSelectList.`goToPosition(int targetPos)`<br>Move to the specified position.<br> |
| `boolean`<br> | JFile.`hasLock(String recordKey)`<br>Check if the specified key holds a lock.<br> |
| `boolean`<br> | JSelectList.`hasNext()`<br>Returns whether it is possible to move forward.<br> |
| `boolean`<br> | JSelectList.`hasPrevious()`<br>Returns whether it is possible to move backwards.<br> |
| `String`<br> | JConnection.`iconv(String data, String conversion)`<br>Converts data in external format to internal format.<br> |
| `String`<br> | JConnection.`monitoring(String command)`<br>Sends an monitoring command and waits for it's response<br> |
| `boolean`<br> | JSelectList.`next()`<br>Move to next item<br> |
| `boolean`<br> | JResultSet.`next()` <br> |
| `String`<br> | JConnection.`oconv(String data, String conversion)`<br>Converts internal representations of data to their external form.<br> |
| `JFile`<br> | JConnection.`open(String fileName)`<br>Attempts to open a jBASE file or returns null if the file does not exist.<br> |
| `boolean`<br> | JSelectList.`previous()`<br>Move to previous item<br> |
| `JDynArray`<br> | JFile.`read(String recordKey)`<br>Read a record where the supplied recordKey is the key to the record.<br> |
| `JDynArray`<br> | JFile.`readU(String recordKey, boolean blockedRead)`<br>Read a record where the supplied recordKey is the key to the record and locks it for update.<br> |
| `boolean`<br> | JFile.`releaseLock(String recordKey)`<br>Release the update lock (if held) on the specified key.<br> |
| `boolean`<br> | JFile.`releaseLocks()`<br>Releases all locks held by this file.<br> |
| `void`<br> | JConnection.`rollback()`<br>Rollback all jBASE operations performed in transaction and mark as complete.<br> |
| `JSelectList`<br> | JFile.`select()`<br>Returns a select list containing the record keys in this jBASE file.<br> |
| `boolean`<br> | JConnection.`switchAccount(String user, String account, String password)`<br>Log into the specified jBASE account.<br> |
| `int`<br> | JConnection.`time()`<br>Return the jBASE internal time.<br> |
| `void`<br> | JCursor.`update()`<br>Update changes.<br> |
| `boolean`<br> | JFile.`write(String recordKey, JDynArray record)`<br>Write the supplied record to the jBASE file.<br> |
| `boolean`<br> | JFile.`writeU(String recordKey, JDynArray record, boolean blockedWrite)`<br>Write the supplied record to the jBASE file.<br> |






### Uses of [JRemoteException](./../../jremoteexception-%28jremote-api%29 "class in com.jbase.jremote") in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-%28jremote---api%29)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-%28jremote---api%29) that throw [JRemoteException](./../../jremoteexception-%28jremote-api%29 "class in com.jbase.jremote")  | `void`<br> | AbstractJRemoteConnection.`authenticate(String user, String password)`<br>Send data for authentication to the server.<br> |
| `void`<br> | AbstractJRemoteConnection.`authenticate(String user, String account, String password)`<br>Send data for authentication to the server, the server must be configured to authenticate jBASE account connections.<br> |
| `void`<br> | JConnectionImpl.`begin()` <br> |
| `JSubroutineParameters`<br> | JConnectionImpl.`call(String subroutineName, JSubroutineParameters parameters)` <br> |
| `boolean`<br> | JFileImpl.`clear()` <br> |
| `void`<br> | JSelectListImpl.`close()` <br> |
| `void`<br> | JRemoteSocketConnection.`close()` <br> |
| `boolean`<br> | JFileImpl.`close()` <br> |
| `void`<br> | JCursorImpl.`close()`<br>Close cursor.<br> |
| `void`<br> | JConnectionImpl.`close()` <br> |
| `void`<br> | InterceptorConnection.`close()`<br>Close underlying connection.<br> |
| `abstract void`<br> | AbstractJRemoteConnection.`close()` <br> |
| `void`<br> | JConnectionImpl.`commit()` <br> |
| `protected void`<br> | JRemoteSocketConnection.`connect(String host, int port)` <br> |
| `JSelectList`<br> | JConnectionImpl.`createSelectList(JDynArray jd)` <br> |
| `JStatement`<br> | JConnectionImpl.`createStatement()` <br> |
| `int`<br> | JConnectionImpl.`date()`<br>Return the jBASE internal date.<br> |
| `boolean`<br> | JFileImpl.`delete(String recordKey)` <br> |
| `boolean`<br> | JConnectionImpl.`echo(int length)`<br>Send an echo request and waits for a reply.<br> |
| `JResultSet`<br> | JStatementImpl.`execute(JDynArray queries)` <br> |
| `JResultSet`<br> | JStatementImpl.`execute(JDynArray queries, JSelectList selectList)` <br> |
| `JResultSet`<br> | JStatementImpl.`execute(String query)` <br> |
| `JExecuteResults`<br> | JConnectionImpl.`execute(String command)` <br> |
| `JResultSet`<br> | JStatementImpl.`execute(String query, JSelectList selectList)` <br> |
| `JExecuteResults`<br> | JConnectionImpl.`execute(String command, JSelectList selectList)` <br> |
| `boolean`<br> | JFileImpl.`exists(String recordKey)` <br> |
| `protected JSelectListProt`<br> | JSelectListImpl.`fetchNext(boolean fetchData)` <br> |
| `protected JSelectListProt`<br> | JSelectListImpl.`fetchPrevious(boolean fetchData)` <br> |
| `JDynArray`<br> | JConnectionImpl.`getCommon(String name)`<br>Return the value of the named common with the supplied name.<br> |
| `JCursor`<br> | JFileImpl.`getCursor()` <br> |
| `EISMetaDataRepository`<br> | JConnectionImpl.`getMetaData()` <br> |
| `void`<br> | JSelectListImpl.`goToPosition(int targetPos)` <br> |
| `boolean`<br> | JFileImpl.`hasLock(String recordKey)` <br> |
| `boolean`<br> | JSelectListImpl.`hasNext()` <br> |
| `boolean`<br> | JCursorImpl.`hasNext()`<br>Returns whether it is possible to move the cursor forwards.<br> |
| `protected boolean`<br> | JSelectListImpl.`hasNext(boolean fetchData)` <br> |
| `boolean`<br> | JSelectListImpl.`hasPrevious()` <br> |
| `boolean`<br> | JCursorImpl.`hasPrevious()`<br>Returns whether it is possible to move the cursor backwards.<br> |
| `protected boolean`<br> | JSelectListImpl.`hasPrevious(boolean fetchData)` <br> |
| `String`<br> | JConnectionImpl.`iconv(String data, String conversion)` <br> |
| `String`<br> | JConnectionImpl.`monitoring(String command)`<br>Send an monitoring request and waits for a reply.<br> |
| `boolean`<br> | JSelectListImpl.`next()` <br> |
| `boolean`<br> | JResultSetImpl.`next()` <br> |
| `boolean`<br> | JCursorImpl.`next()`<br>Move cursor to next item<br> |
| `protected boolean`<br> | JSelectListImpl.`next(boolean fetchData)` <br> |
| `String`<br> | JConnectionImpl.`oconv(String data, String conversion)` <br> |
| `JFile`<br> | JConnectionImpl.`open(String fileName)` <br> |
| `boolean`<br> | JSelectListImpl.`previous()` <br> |
| `boolean`<br> | JCursorImpl.`previous()`<br>Move cursor to previous item<br> |
| `protected boolean`<br> | JSelectListImpl.`previous(boolean fetchData)` <br> |
| `JDynArray`<br> | JFileImpl.`read(String recordKey)` <br> |
| `JDynArray`<br> | JFileImpl.`readU(String recordKey, boolean blockedRead)` <br> |
| `Response`<br> | JRemoteSocketConnection.`receive()` <br> |
| `Response`<br> | InterceptorConnection.`receive()`<br>Intercept any IO messages and handle required input or output on in / out streams.<br> |
| `abstract Response`<br> | AbstractJRemoteConnection.`receive()` <br> |
| `boolean`<br> | JFileImpl.`releaseLock(String recordKey)` <br> |
| `boolean`<br> | JFileImpl.`releaseLocks()` <br> |
| `void`<br> | JConnectionImpl.`rollback()` <br> |
| `JSelectList`<br> | JFileImpl.`select()` <br> |
| `void`<br> | JRemoteSocketConnection.`send(JRemoteRequest request)` <br> |
| `void`<br> | InterceptorConnection.`send(JRemoteRequest request)` <br> |
| `abstract void`<br> | AbstractJRemoteConnection.`send(JRemoteRequest request)` <br> |
| `Response`<br> | AbstractJRemoteConnection.`sendWaitForResponse(JRemoteRequest request)`<br>Convenient method which simply calls #send followed by #receive.<br> |
| `void`<br> | AbstractJRemoteConnection.`setProperties(Properties props)` <br> |
| `boolean`<br> | JConnectionImpl.`switchAccount(String user, String account, String password)` <br> |
| `int`<br> | JConnectionImpl.`time()`<br>Return the jBASE internal time.<br> |
| `void`<br> | JCursorImpl.`update()` <br> |
| `boolean`<br> | JFileImpl.`write(String recordKey, JDynArray record)` <br> |
| `boolean`<br> | JFileImpl.`writeU(String recordKey, JDynArray record, boolean blockedWrite)` <br> |



| Constructor and Description<br> |
| --- |
 Constructors in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-%28jremote---api%29) that throw [JRemoteException](./../../jremoteexception-%28jremote-api%29 "class in com.jbase.jremote")  | `JRemoteSocketConnection(String host, int port)` <br> |
| `JRemoteSocketConnection(String host, int port, Properties info)` <br> |






### Uses of [JRemoteException](./../../jremoteexception-%28jremote-api%29 "class in com.jbase.jremote") in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29) that throw [JRemoteException](./../../jremoteexception-%28jremote-api%29 "class in com.jbase.jremote")  | `void`<br> | WrappedJConnection.`begin()` <br> |
| `JSubroutineParameters`<br> | WrappedJConnection.`call(String subroutineName, JSubroutineParameters parameters)`<br>Call jBASE subroutine.<br> |
| `protected void`<br> | WrappedJConnection.`checkStatus()`<br>In a managed environment the `checkStatus` method checks that this handle has not been closed.<br> |
| `boolean`<br> | WrappedJFile.`clear()` <br> |
| `boolean`<br> | WrappedJFile.`close()` <br> |
| `void`<br> | WrappedJConnection.`close()`<br>Close this connection.<br> |
| `void`<br> | WrappedJConnection.`commit()` <br> |
| `JSelectList`<br> | WrappedJConnection.`createSelectList(JDynArray jd)` <br> |
| `JStatement`<br> | WrappedJConnection.`createStatement()` <br> |
| `int`<br> | WrappedJConnection.`date()`<br>Return the jBASE internal date.<br> |
| `boolean`<br> | WrappedJFile.`delete(String recordKey)` <br> |
| `boolean`<br> | WrappedJConnection.`echo(int length)`<br>Send an echo request and waits for a reply.<br> |
| `JExecuteResults`<br> | WrappedJConnection.`execute(String command)` <br> |
| `JExecuteResults`<br> | WrappedJConnection.`execute(String command, JSelectList selectList)` <br> |
| `boolean`<br> | WrappedJFile.`exists(String recordKey)` <br> |
| `JDynArray`<br> | WrappedJConnection.`getCommon(String name)`<br>Return the value of the common with supplied name.<br> |
| `protected JConnection`<br> | WrappedJConnection.`getConnection()`<br>Get the real connection.<br> |
| `JConnection`<br> | JRemoteConnectionFactoryImpl.`getConnection()` <br> |
| `JConnection`<br> | JRemoteConnectionFactoryImpl.`getConnection(JConnectionCallbackHandler handler)` <br> |
| `JConnection`<br> | JRemoteConnectionFactoryImpl.`getConnection(String user, String password)` <br> |
| `JConnection`<br> | JRemoteConnectionFactoryImpl.`getConnection(String user, String password, Properties props)` <br> |
| `JConnection`<br> | JRemoteConnectionFactoryImpl.`getConnection(String user, String account, String password)` <br> |
| `protected JConnection`<br> | JRemoteConnectionFactoryImpl.`getConnection(String user, String account, String password, JConnectionCallbackHandler handler)` <br> |
| `JCursor`<br> | WrappedJFile.`getCursor()` <br> |
| `EISMetaDataRepository`<br> | WrappedJConnection.`getMetaData()` <br> |
| `boolean`<br> | WrappedJFile.`hasLock(String recordKey)` <br> |
| `String`<br> | WrappedJConnection.`iconv(String data, String conversion)` <br> |
| `String`<br> | WrappedJConnection.`monitoring(String command)`<br>Sends an monitoring command and waits for it's response<br> |
| `String`<br> | WrappedJConnection.`oconv(String data, String conversion)` <br> |
| `JFile`<br> | WrappedJConnection.`open(String filename)`<br>Open jBASE file.<br> |
| `JDynArray`<br> | WrappedJFile.`read(String recordKey)` <br> |
| `JDynArray`<br> | WrappedJFile.`readU(String recordKey, boolean blockedRead)` <br> |
| `boolean`<br> | WrappedJFile.`releaseLock(String recordKey)` <br> |
| `boolean`<br> | WrappedJFile.`releaseLocks()` <br> |
| `void`<br> | WrappedJConnection.`rollback()` <br> |
| `JSelectList`<br> | WrappedJFile.`select()` <br> |
| `boolean`<br> | WrappedJConnection.`switchAccount(String user, String account, String password)`<br>Switch jBASE account.<br> |
| `int`<br> | WrappedJConnection.`time()`<br>Return the jBASE internal time.<br> |
| `boolean`<br> | WrappedJFile.`write(String recordKey, JDynArray record)` <br> |
| `boolean`<br> | WrappedJFile.`writeU(String recordKey, JDynArray record, boolean blockedWrite)` <br> |






### Uses of [JRemoteException](./../../jremoteexception-%28jremote-api%29 "class in com.jbase.jremote") in [com.jbase.jremote.jca.spring](./../../jca/spring/com.jbase.jremote.jca.spring-%28jremote-api%29)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.jca.spring](./../../jca/spring/com.jbase.jremote.jca.spring-%28jremote-api%29) that throw [JRemoteException](./../../jremoteexception-%28jremote-api%29 "class in com.jbase.jremote")  | `static JConnection`<br> | JConnectionFactoryUtils.`getConnection(JConnectionFactory cf)`<br>Obtain a JConnection from the given JConnectionFactory.<br> |






### Uses of [JRemoteException](./../../jremoteexception-%28jremote-api%29 "class in com.jbase.jremote") in [com.jbase.jremote.protocol](./../../protocol/com.jbase.jremote.protocol-%28jremote-api%29)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.protocol](./../../protocol/com.jbase.jremote.protocol-%28jremote-api%29) that throw [JRemoteException](./../../jremoteexception-%28jremote-api%29 "class in com.jbase.jremote")  | `boolean`<br> | JSelectListProt.`hasNext()`<br>Returns whether it is possible to move forward.<br> |
| `boolean`<br> | JSelectListProt.`hasPrevious()`<br>Returns whether it is possible to move backwards.<br> |
| `boolean`<br> | JSelectListProt.`next()`<br>Move to next item.<br> |
| `boolean`<br> | JSelectListProt.`previous()`<br>Move to previous item.<br> |

Back to [jREMOTE API](com_jbase_jremote_package-summary)


