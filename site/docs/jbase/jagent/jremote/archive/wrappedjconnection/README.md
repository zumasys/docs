# WrappedJConnection

**Created At:** 9/13/2017 7:49:19 PM  
**Updated At:** 9/13/2017 7:50:12 PM  
**Original Doc:** [wrappedjconnection](https://docs.jbase.com/39719-archive/wrappedjconnection)  
**Original ID:** 276690  
**Internal:** Yes  


## Class WrappedJConnection

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.WrappedJConnection
- All Implemented Interfaces:[JConnection](./../jconnection "interface in com.jbase.jremote")
```
public class WrappedJConnection
extends Object
implements JConnection
```

 Implementation of a connection to a remote jBASE instance.  
 If constructed in a managed environment then calls will be made through  the managed connection to allow the application server to be notified of connection events.  Author:aphethean
- - ### Field Summary

        - ### Fields inherited from interface com.jbase.jremote.[JConnection](./../jconnection "interface in com.jbase.jremote")
`DEFAULT_CHARSET, JBASE_DEFAULT_ENCODING`
- - ### Constructor Summary


| Modifier | Constructor and Description |
| --- | --- |
Constructors | `protected` | `WrappedJConnection()`  |
| `protected` | `WrappedJConnection(JRemoteManagedConnection managedConnection)`  |
- - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
All Methods [Instance Methods](javascript%3Ashow%282%29;) [Concrete Methods](javascript%3Ashow%288%29;) | `void` | `begin()` Begin a jBASE transaction.<br> |
| `JSubroutineParameters` | `call(String subroutineName,     JSubroutineParameters parameters)` Call jBASE subroutine.<br> |
| `protected void` | `checkStatus()` In a managed environment the `checkStatus` method checks that  this handle has not been closed.<br> |
| `void` | `close()` Close this connection.<br> |
| `void` | `commit()` Commit all pending jBASE operations performed in transaction  and mark as complete.<br> |
| `JSelectList` | `createSelectList(JDynArray jd)` Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.<br> |
| `JStatement` | `createStatement()` Create a statement object that enables queries to be executed and a JResultSet returned.<br> |
| `int` | `date()` Return the jBASE internal date.<br> |
| `boolean` | `echo(int length)`  Send an echo request and waits for a reply.<br> |
| `JExecuteResults` | `execute(String command)` Execute a jBASE command.<br> |
| `JExecuteResults` | `execute(String command,        JSelectList selectList)` Execute a jBASE command using an existing select list as a filter.<br> |
| `Charset` | `getCharset()` Get the Charset for this connection.<br> |
| `JDynArray` | `getCommon(String name)` Return the value of the common with supplied name.<br> |
| `protected JConnection` | `getConnection()` Get the real connection.<br> |
| `protected javax.resource.spi.ManagedConnection` | `getManagedConnection()`  |
| `EISMetaDataRepository` | `getMetaData()` Return meta data of the connected jBASE instance.<br> |
| `String` | `iconv(String data,      String conversion)` Converts data in external format to internal format.<br> |
| `protected boolean` | `isClosed()`  |
| `String` | `monitoring(String command)` Sends an monitoring command and waits for it's response<br> |
| `JDynArray` | `newJDynArray()` Create a JDynArray with the correct Charset for this connection.<br> |
| `JDynArray` | `newJDynArray(String str)`  |
| `String` | `oconv(String data,      String conversion)` Converts internal representations of data to their external form.<br> |
| `JFile` | `open(String filename)` Open jBASE file.<br> |
| `void` | `rollback()` Rollback all jBASE operations performed in transaction and mark as complete.<br> |
| `protected void` | `setConnection(JConnection connection)`  |
| `protected void` | `setManagedConnection(JRemoteManagedConnection connection)`  |
| `void` | `setTerminalOutputWriter(Writer writer)`  |
| `boolean` | `switchAccount(String user,              String account,              String password)` Switch jBASE account.<br> |
| `int` | `time()` Return the jBASE internal time.<br> |
| `String` | `toString()`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`
- - ### Constructor Detail
 
        - #### WrappedJConnection

```
protected WrappedJConnection()
```
    - - #### WrappedJConnection

```
protected WrappedJConnection(JRemoteManagedConnection managedConnection)
```
- - ### Method Detail
 
        - #### getManagedConnection

```
protected javax.resource.spi.ManagedConnection getManagedConnection()
```
    - - #### setManagedConnection

```
protected void setManagedConnection(JRemoteManagedConnection connection)
```
    - - #### checkStatus

```
protected void checkStatus()                     throws JRemoteException
```

In a managed environment the `checkStatus` method checks that  this handle has not been closed.Throws:`JRemoteException` - if connection status is invalid
    - - #### newJDynArray

```
public JDynArray newJDynArray()
```

Description copied from interface: `JConnection`
Create a JDynArray with the correct Charset for this connection.Specified by:`newJDynArray` in interface `JConnection`
    - - #### newJDynArray

```
public JDynArray newJDynArray(String str)
```
Specified by:`newJDynArray` in interface `JConnection`
    - - #### getCharset

```
public Charset getCharset()
```

Description copied from interface: `JConnection`
Get the Charset for this connection.  This is used on String operations to convert the bytes received from jBASE to a Java UTF-16 String.Specified by:`getCharset` in interface `JConnection`
    - - #### close

```
public void close()            throws JRemoteException
```

Close this connection.Specified by:`close` in interface `JConnection`Throws:`JRemoteException`
    - - #### isClosed

```
protected boolean isClosed()
```
    - - #### getConnection

```
protected JConnection getConnection()                              throws JRemoteException
```

Get the real connection.Returns:JConnection the connection to jBASEThrows:`JRemoteException`
    - - #### setConnection

```
protected void setConnection(JConnection connection)
```
    - - #### switchAccount

```
public boolean switchAccount(String user,                              String account,                              String password)                       throws JRemoteException
```

Switch jBASE account.Specified by:`switchAccount` in interface `JConnection`Parameters:`user` - username that belongs to the account`account` - name of the account to log into`password` - password of the account to log intoReturns:booleanThrows:`JRemoteException`See Also:[`JConnection.switchAccount(String, String, String)`](./../jconnection#switchAccount-java.lang.String-java.lang.String-java.lang)
    - - #### open

```
public JFile open(String filename)            throws JRemoteException
```

Open jBASE file.Specified by:`open` in interface `JConnection`Returns:JFileThrows:`JRemoteException`See Also:[`JConnection.open(String)`](./../jconnection#open-java.lang)
    - - #### call

```
public JSubroutineParameters call(String subroutineName,                                   JSubroutineParameters parameters)                            throws JSubroutineNotFoundException,                                   JRemoteException
```

Call jBASE subroutine.Specified by:`call` in interface `JConnection`Returns:the result parameters from subroutine callThrows:`JSubroutineNotFoundException``JRemoteException`See Also:[`JConnection.open(String)`](./../jconnection#open-java.lang)
    - - #### execute

```
public JExecuteResults execute(String command)                         throws JRemoteException
```

Description copied from interface: `JConnection`
Execute a jBASE command.Specified by:`execute` in interface `JConnection`Returns:the execute resultsThrows:`JRemoteException`
    - - #### execute

```
public JExecuteResults execute(String command,                                JSelectList selectList)                         throws JRemoteException
```

Description copied from interface: `JConnection`
Execute a jBASE command using an existing select list as a filter.Specified by:`execute` in interface `JConnection`Returns:the execute resultsThrows:`JRemoteException`
    - - #### date

```
public int date()          throws JRemoteException
```

Return the jBASE internal date.  Epoch Dec 31, 1967.Specified by:`date` in interface `JConnection`Returns:int internal dateThrows:`JRemoteException`See Also:[`JConnection.date()`](./../jconnection)
    - - #### time

```
public int time()          throws JRemoteException
```

Return the jBASE internal time.  Seconds since midnight.Specified by:`time` in interface `JConnection`Returns:int internal timeThrows:`JRemoteException`See Also:[`JConnection.time()`](./../jconnection)
    - - #### iconv

```
public String iconv(String data,                     String conversion)              throws JRemoteException
```

Description copied from interface: `JConnection`
Converts data in external format to internal format.Specified by:`iconv` in interface `JConnection`Parameters:`data` - data to be converted`conversion` - the conversion commandReturns:String the converted dataThrows:`JRemoteException`
    - - #### oconv

```
public String oconv(String data,                     String conversion)              throws JRemoteException
```

Description copied from interface: `JConnection`
Converts internal representations of data to their external form.Specified by:`oconv` in interface `JConnection`Parameters:`data` - data to be converted`conversion` - the conversion commandReturns:String the converted dataThrows:`JRemoteException`
    - - #### getCommon

```
public JDynArray getCommon(String name)                     throws JRemoteException
```

Return the value of the common with supplied name.Specified by:`getCommon` in interface `JConnection`Returns:JDynArray valueThrows:`JRemoteException`See Also:[`JConnection.getCommon(java.lang.String name)`](./../jconnection#getCommon-java.lang)
    - - #### getMetaData

```
public EISMetaDataRepository getMetaData()                                   throws JRemoteException
```

Description copied from interface: `JConnection`
Return meta data of the connected jBASE instance.Specified by:`getMetaData` in interface `JConnection`Returns:EISMetaDataRepository meta data repositoryThrows:`JRemoteException`See Also:[`JConnection.getMetaData()`](./../jconnection)
    - - #### createStatement

```
public JStatement createStatement()                            throws JRemoteException
```

Description copied from interface: `JConnection`
Create a statement object that enables queries to be executed and a JResultSet returned.Specified by:`createStatement` in interface `JConnection`Returns:JStatement jBase statement objectThrows:`JRemoteException`See Also:[`JConnection.createStatement()`](./../jconnection)
    - - #### createSelectList

```
public JSelectList createSelectList(JDynArray jd)                              throws JRemoteException
```

Description copied from interface: `JConnection`
Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.Specified by:`createSelectList` in interface `JConnection`Parameters:`jd` - dynamic array containing the keysReturns:JSelectList select listThrows:`JRemoteException`See Also:[`JConnection.createSelectList(JDynArray)`](./../jconnection#createSelectList-com.jbase.jremote)
    - - #### begin

```
public void begin()            throws JRemoteException
```

Description copied from interface: `JConnection`
Begin a jBASE transaction.
If a transaction already exists then no action will be taken.Specified by:`begin` in interface `JConnection`Throws:`JRemoteException`See Also:[`JConnection.commit()`](./../jconnection),  [`JConnection.rollback()`](./../jconnection)
    - - #### commit

```
public void commit()             throws JRemoteException
```

Description copied from interface: `JConnection`
Commit all pending jBASE operations performed in transaction  and mark as complete.
If no transaction exists then no action will be taken.Specified by:`commit` in interface `JConnection`Throws:`JRemoteException`See Also:[`JConnection.begin()`](./../jconnection)
    - - #### rollback

```
public void rollback()               throws JRemoteException
```

Description copied from interface: `JConnection`
Rollback all jBASE operations performed in transaction and mark as complete.
If no transaction exists then no action will be taken.Specified by:`rollback` in interface `JConnection`Throws:`JRemoteException`See Also:[`JConnection.begin()`](./../jconnection)
    - - #### setTerminalOutputWriter

```
public void setTerminalOutputWriter(Writer writer)
```
Specified by:`setTerminalOutputWriter` in interface `JConnection`
    - - #### toString

```
public String toString()
```
Overrides:`toString` in class `Object`
    - - #### echo

```
public boolean echo(int length)              throws JRemoteException
```

 Send an echo request and waits for a reply.  Specified by:`echo` in interface `JConnection`Parameters:`length` - of echo packet to send.Returns:True = successThrows:`JRemoteException`
    - - #### monitoring

```
public String monitoring(String command)                   throws JRemoteException
```

Sends an monitoring command and waits for it's responseSpecified by:`monitoring` in interface `JConnection`Parameters:`command` - to sendReturns:respose stringThrows:`JRemoteException` - if monitoring command fails

