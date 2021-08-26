# WrappedJConnection (jremote API)

<PageHeader />

## Class WrappedJConnection

All Implemented Interfaces:[JConnection](./../../jconnection-(jremote-api) "interface in com.jbase.jremote")

* * *

```java
public class WrappedJConnection
extends Object
implements JConnection
```

Implementation of a connection to a remote jBASE instance.
If constructed in a managed environment then calls will be made through the managed connection to allow the application server to be notified of connection events.

### Field Summary

- Fields inherited from interface com.jbase.jremote.JConnection
  - `DEFAULT_CHARSET, JBASE_DEFAULT_ENCODING`

### Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| `protected ` | `WrappedJConnection()`  |
| `protected ` | `WrappedJConnection(JRemoteManagedConnection managedConnection)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `begin()`<br>Begin a jBASE transaction. |
| `JSubroutineParameters` | `call(String subroutineName, JSubroutineParameters parameters)`<br>Call jBASE subroutine. |
| `protected void` | `checkStatus()`<br>In a managed environment the `checkStatus` method checks that this handle has not been closed. |
| `void` | `close()`<br>Close this connection. |
| `void` | `commit()`<br>Commit all pending jBASE operations performed in transaction and mark as complete. |
| `JSelectList` | `createSelectList(JDynArray jd)`<br>Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers. |
| `JStatement` | `createStatement()`<br>Create a statement object that enables queries to be executed and a JResultSet returned. |
| `int` | `date()`<br>Return the jBASE internal date. |
| `boolean` | `echo(int length)`<br>Send an echo request and waits for a reply. |
| `JExecuteResults` | `execute(String command)`<br>Execute a jBASE command. |
| `JExecuteResults` | `execute(String command, JSelectList selectList)`<br>Execute a jBASE command using an existing select list as a filter. |
| `Charset` | `getCharset()`<br>Get the Charset for this connection. |
| `JDynArray` | `getCommon(String name)`<br>Return the value of the common with supplied name. |
| `protected JConnection` | `getConnection()`<br>Get the real connection. |
| `protected javax.resource.spi.ManagedConnection` | `getManagedConnection()`  |
| `EISMetaDataRepository` | `getMetaData()`<br>Return meta data of the connected jBASE instance. |
| `String` | `iconv(String data, String conversion)`<br>Converts data in external format to internal format. |
| `protected boolean` | `isClosed()`  |
| `String` | `monitoring(String command)`<br>Sends an monitoring command and waits for it's response |
| `JDynArray` | `newJDynArray()`<br>Create a JDynArray with the correct Charset for this connection. |
| `JDynArray` | `newJDynArray(String str)`  |
| `String` | `oconv(String data, String conversion)`<br>Converts internal representations of data to their external form. |
| `JFile` | `open(String filename)`<br>Open jBASE file. |
| `void` | `rollback()`<br>Rollback all jBASE operations performed in transaction and mark as complete. |
| `protected void` | `setConnection(JConnection connection)`  |
| `protected void` | `setManagedConnection(JRemoteManagedConnection connection)`  |
| `void` | `setTerminalOutputWriter(Writer writer)`  |
| `boolean` | `switchAccount(String user, String account, String password)`<br>Switch jBASE account. |
| `int` | `time()`<br>Return the jBASE internal time. |
| `String` | `toString()`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

### Constructor Detail

#### WrappedJConnection

```java
protected WrappedJConnection()
```

#### WrappedJConnection

```java
protected WrappedJConnection(JRemoteManagedConnection managedConnection)
```

### Method Detail

#### getManagedConnection

```java
protected javax.resource.spi.ManagedConnection getManagedConnection()
```

#### setManagedConnection

```java
protected void setManagedConnection(JRemoteManagedConnection connection)
```

#### checkStatus

```java
protected void checkStatus()
                    throws JRemoteException
```

In a managed environment the `checkStatus` method checks that this handle has not been closed.
Throws:`JRemoteException` - if connection status is invalid

#### newJDynArray

```java
public JDynArray newJDynArray()
```

Description copied from interface: `JConnection`

Create a JDynArray with the correct Charset for this connection.
Specified by:`newJDynArray` in interface `JConnection`

#### newJDynArray

```java
public JDynArray newJDynArray(String str)
```

Specified by:`newJDynArray` in interface `JConnection`

#### getCharset

```java
public Charset getCharset()
```

Description copied from interface: `JConnection`

Get the Charset for this connection. This is used on String operations to convert the bytes received from jBASE to a Java UTF-16 String.
Specified by:`getCharset` in interface `JConnection`

#### close

```java
public void close()
           throws JRemoteException
```

Close this connection.
Specified by:`close` in interface `JConnection`Throws:`JRemoteException`

#### isClosed

```java
protected boolean isClosed()
```

#### getConnection

```java
protected JConnection getConnection()
                             throws JRemoteException
```

Get the real connection.
Returns:JConnection the connection to jBASEThrows:`JRemoteException`

#### setConnection

```java
protected void setConnection(JConnection connection)
```

#### switchAccount

```java
public boolean switchAccount(String user,
                             String account,
                             String password)
                      throws JRemoteException
```

Switch jBASE account.
Specified by:`switchAccount` in interface `JConnection`  
Parameters:`user` - username that belongs to the account`account` - name of the account to log into`password` - password of the account to log into  
Returns:boolean  
Throws:`JRemoteException`  
See Also:[`JConnection.switchAccount(String, String, String)`](./../../jconnection-(jremote-api)#switchAccount-java.lang.String-java.lang.String-java.lang)

#### open

```java
public JFile open(String filename)
           throws JRemoteException
```

Open jBASE file.
Specified by:`open` in interface `JConnection`  
Returns:JFileThrows:`JRemoteException`  
See Also:[`JConnection.open(String)`](./../../jconnection-(jremote-api)#open-java.lang)

#### call

```java
public JSubroutineParameters call(String subroutineName,
                                  JSubroutineParameters parameters)
                           throws JSubroutineNotFoundException,
                                  JRemoteException
```

Call jBASE subroutine.
Specified by:`call` in interface `JConnection`  
Returns:the result parameters from subroutine call  
Throws:`JSubroutineNotFoundException``JRemoteException`  
See Also:[`JConnection.open(String)`](./../../jconnection-(jremote-api)#open-java.lang)

#### execute

```java
public JExecuteResults execute(String command)
                        throws JRemoteException
```

Description copied from interface: `JConnection`

Execute a jBASE command.
Specified by:`execute` in interface `JConnection`Returns:the execute resultsThrows:`JRemoteException`

#### execute

```java
public JExecuteResults execute(String command,
                               JSelectList selectList)
                        throws JRemoteException
```

Description copied from interface: `JConnection`

Execute a jBASE command using an existing select list as a filter.
Specified by:`execute` in interface `JConnection`  
Returns:the execute results  
Throws:`JRemoteException`

#### date

```java
public int date()
         throws JRemoteException
```

Return the jBASE internal date. Epoch Dec 31, 1967.
Specified by:`date` in interface `JConnection`  
Returns:int internal date  
Throws:`JRemoteException`  
See Also:[`JConnection.date()`](./../../jconnection-(jremote-api)#date--)

#### time

```java
public int time()
         throws JRemoteException
```

Return the jBASE internal time. Seconds since midnight.
Specified by:`time` in interface `JConnection`  
Returns:int internal time  
Throws:`JRemoteException`  
See Also:[`JConnection.time()`](./../../jconnection-(jremote-api)#time--)

#### iconv

```java
public String iconv(String data,
                    String conversion)
             throws JRemoteException
```

Description copied from interface: `JConnection`

Converts data in external format to internal format.
Specified by:`iconv` in interface `JConnection`Parameters:`data` - data to be converted`conversion` - the conversion commandReturns:String the converted dataThrows:`JRemoteException`

#### oconv

```
public String oconv(String data,
                    String conversion)
             throws JRemoteException
```

Description copied from interface: `JConnection`

Converts internal representations of data to their external form.
Specified by:`oconv` in interface `JConnection`  
Parameters:`data` - data to be converted`conversion` - the conversion command  
Returns:String the converted data  
Throws:`JRemoteException`

#### getCommon

```java
public JDynArray getCommon(String name)
                    throws JRemoteException
```

Return the value of the common with supplied name.
Specified by:`getCommon` in interface `JConnection`  
Returns:JDynArray valueThrows:`JRemoteException`  
See Also:[`JConnection.getCommon(java.lang.String name)`](./../../jconnection-(jremote-api)#getCommon-java.lang)

#### getMetaData

```java
public EISMetaDataRepository getMetaData()
                                  throws JRemoteException
```

Description copied from interface: `JConnection`

Return meta data of the connected jBASE instance.
Specified by:`getMetaData` in interface `JConnection`  
Returns:EISMetaDataRepository meta data repository  
Throws:`JRemoteException`  
See Also:[`JConnection.getMetaData()`](./../../jconnection-(jremote-api)#getMetaData--)

#### createStatement

```java
public JStatement createStatement()
                           throws JRemoteException
```

Description copied from interface: `JConnection`

Create a statement object that enables queries to be executed and a JResultSet returned.
Specified by:`createStatement` in interface `JConnection`  
Returns:JStatement jBase statement object  
Throws:`JRemoteException`  
See Also:[`JConnection.createStatement()`](./../../jconnection-(jremote-api)#createStatement--)

#### createSelectList

```java
public JSelectList createSelectList(JDynArray jd)
                             throws JRemoteException
```

Description copied from interface: `JConnection`

Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.
Specified by:`createSelectList` in interface `JConnection`  
Parameters:`jd` - dynamic array containing the keys  
Returns:JSelectList select listThrows:`JRemoteException`  
See Also:[`JConnection.createSelectList(JDynArray)`](./../../jconnection-(jremote-api)#createSelectList-com.jbase.jremote)

#### begin

```java
public void begin()
           throws JRemoteException
```

Description copied from interface: `JConnection`

Begin a jBASE transaction.

If a transaction already exists then no action will be taken.
Specified by:`begin` in interface `JConnection`  
Throws:`JRemoteException`  
See Also:[`JConnection.commit()`](./../../jconnection-(jremote-api)#commit--), [`JConnection.rollback()`](./../../jconnection-(jremote-api)#rollback--)

#### commit

```java
public void commit()
            throws JRemoteException
```

Description copied from interface: `JConnection`

Commit all pending jBASE operations performed in transaction and mark as complete.

If no transaction exists then no action will be taken.
Specified by:`commit` in interface `JConnection`  
Throws:`JRemoteException`  
See Also:[`JConnection.begin()`](./../../jconnection-(jremote-api)#begin--)

#### rollback

```java
public void rollback()
              throws JRemoteException
```

Description copied from interface: `JConnection`

Rollback all jBASE operations performed in transaction and mark as complete.

If no transaction exists then no action will be taken.
Specified by:`rollback` in interface `JConnection`  
Throws:`JRemoteException`  
See Also:[`JConnection.begin()`](./../../jconnection-(jremote-api)#begin--)

#### setTerminalOutputWriter

```java
public void setTerminalOutputWriter(Writer writer)
```

Specified by:`setTerminalOutputWriter` in interface `JConnection`

#### toString

```java
public String toString()
```

Overrides:`toString` in class `Object`

#### echo

```java
public boolean echo(int length)
             throws JRemoteException
```

Send an echo request and waits for a reply.
Specified by:`echo` in interface `JConnection`  
Parameters:`length` - of echo packet to send.  
Returns:True = success  
Throws:`JRemoteException`

#### monitoring

```java
public String monitoring(String command)
                  throws JRemoteException
```

Sends an monitoring command and waits for it's response
Specified by:`monitoring` in interface `JConnection`  
Parameters:`command` - to send  
Returns:respose string  
Throws:`JRemoteException` - if monitoring command fails

Back to [jRemote API](./../../README.md)

<PageFooter />
