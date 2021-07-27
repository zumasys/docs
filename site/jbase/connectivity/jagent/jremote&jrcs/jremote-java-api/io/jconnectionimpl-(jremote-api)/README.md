# JConnectionImpl (jremote API)

<PageHeader />

## Class JConnectionImpl

All Implemented Interfaces:[JConnection](./../../jconnection-(jremote-api) "interface in com.jbase.jremote"), [JXAConnection](./../../jxaconnection-(jremote-api) "interface in com.jbase.jremote"), [XAResource](http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true "class or interface in javax.transaction.xa")
* * *

```java
public class JConnectionImpl
extends Object
implements JXAConnection
```

The connection to a remote jBASE instance implemented using a IO messages over an abstract connection.

### Field Summary

- Fields inherited from interface com.jbase.jremote.JConnection
  - `DEFAULT_CHARSET, JBASE_DEFAULT_ENCODING`
- Fields inherited from interface javax.transaction.xa.XAResource
  - `TMENDRSCAN, TMFAIL, TMJOIN, TMNOFLAGS, TMONEPHASE, TMRESUME, TMSTARTRSCAN, TMSUCCESS, TMSUSPEND, XA_OK, XA_RDONLY`

### Constructor Summary

| Constructor and Description |
| --- |
| `JConnectionImpl()`  |
| `JConnectionImpl(AbstractJRemoteConnection connection)`  |
| `JConnectionImpl(AbstractJRemoteConnection connection, Properties cxProps)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `begin()`<br>Begin a jBASE transaction. |
| `JSubroutineParameters` | `call(String subroutineName, JSubroutineParameters parameters)`<br>Call a jBASE subroutine. |
| `void` | `close()`<br>Close any resources used by this connection. |
| `void` | `commit()`<br>Commit all pending jBASE operations performed in transaction and mark as complete. |
| `void` | `commit(Xid xid, boolean onePhase)`  |
| `JSelectList` | `createSelectList(JDynArray jd)`<br>Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers. |
| `JStatement` | `createStatement()`<br>Create a statement object that enables queries to be executed and a JResultSet returned. |
| `int` | `date()`<br>Return the jBASE internal date. |
| `boolean` | `echo(int length)`<br>Send an echo request and waits for a reply. |
| `void` | `end(Xid xid, int flags)`  |
| `JExecuteResults` | `execute(String command)`<br>Execute a jBASE command. |
| `JExecuteResults` | `execute(String command, JSelectList selectList)`<br>Execute a jBASE command using an existing select list as a filter. |
| `void` | `forget(Xid xid)`  |
| `Charset` | `getCharset()`<br>Get the Charset for this connection. |
| `JDynArray` | `getCommon(String name)`<br>Return the value of the named common with the supplied name. |
| `EISMetaDataRepository` | `getMetaData()`<br>Return meta data of the connected jBASE instance. |
| `int` | `getTransactionTimeout()`  |
| `String` | `iconv(String data, String conversion)`<br>Converts data in external format to internal format. |
| `protected void` | `init(AbstractJRemoteConnection connection, boolean allowInput, Properties cxProps)`  |
| `boolean` | `isSameRM(XAResource res)`  |
| `String` | `monitoring(String command)`<br>Send an monitoring request and waits for a reply. |
| `JDynArray` | `newJDynArray()`<br>Create a JDynArray with the correct Charset for this connection. |
| `JDynArray` | `newJDynArray(String str)`  |
| `String` | `oconv(String data, String conversion)`<br>Converts internal representations of data to their external form. |
| `JFile` | `open(String fileName)`<br>Attempts to open a jBASE file or returns null if the file does not exist. |
| `int` | `prepare(Xid xid)`  |
| `Xid[]` | `recover(int flag)`  |
| `void` | `rollback()`<br>Rollback all jBASE operations performed in transaction and mark as complete. |
| `void` | `rollback(Xid xid)`  |
| `Response` | `sendWaitForResponse(JRemoteRequest req)`<br>Uses underlying connection to send a request and wait for the response. |
| `void` | `setOutputStream(OutputStream out)`  |
| `void` | `setTerminalOutputWriter(Writer writer)`  |
| `boolean` | `setTransactionTimeout(int timeout)`  |
| `void` | `start(Xid xid, int flags)`  |
| `boolean` | `switchAccount(String user, String account, String password)`<br>Log into the specified jBASE account. |
| `int` | `time()`<br>Return the jBASE internal time. |

### Methods inherited from class java.lang.Object

`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JConnectionImpl

```java
public JConnectionImpl()
```

#### JConnectionImpl

```java
public JConnectionImpl(AbstractJRemoteConnection connection)
```

#### JConnectionImpl

```java
public JConnectionImpl(AbstractJRemoteConnection connection,
                       Properties cxProps)
```

### Method Detail

#### init

```java
protected void init(AbstractJRemoteConnection connection,
                    boolean allowInput,
                    Properties cxProps)
```

#### setOutputStream

```java
public void setOutputStream(OutputStream out)
```

#### setTerminalOutputWriter

```java
public void setTerminalOutputWriter(Writer writer)
```

Specified by:`setTerminalOutputWriter` in interface `JConnection`  
See Also:[`JConnection.setTerminalOutputWriter(java.io.Writer)`](./../../jconnection-(jremote-api)#setTerminalOutputWriter-java.io)

#### newJDynArray

```java
public JDynArray newJDynArray()
```

Description copied from interface: `JConnection`

Create a JDynArray with the correct Charset for this connection.  
Specified by:`newJDynArray` in interface `JConnection`

#### newjDynArray

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

#### switchAccount

```java
public boolean switchAccount(String user,
                             String account,
                             String password)
                      throws JRemoteException
```

Description copied from interface: `JConnection`

Log into the specified jBASE account.  
Specified by:`switchAccount` in interface `JConnection`  
Parameters:`user` - username that belongs to the account`account` - name of the account to log into`password` - password of the account to log into  
Returns:boolean  
Throws:`JRemoteException`  
See Also:[`JConnection.switchAccount(java.lang.String user, java.lang.String account, java.lang.String password)`](./../../jconnection-(jremote-api)#switchAccount-java.lang.String-java.lang.String-java.lang)

#### close

```java
public void close()
           throws JRemoteException
```

Description copied from interface: `JConnection`

Close any resources used by this connection.  
Specified by:`close` in interface `JConnection`  
Throws:`JRemoteException`  
See Also:[`JConnection.close()`](./../../jconnection-(jremote-api)#close--)

#### open

```java
public JFile open(String fileName)
           throws JRemoteException
```

Description copied from interface: `JConnection`

Attempts to open a jBASE file or returns null if the file does not exist.  
Specified by:`open` in interface `JConnection`  
Returns:JFile  
Throws:`JRemoteException`  
See Also:[`JConnection.open(java.lang.String fileName)`](./../../jconnection-(jremote-api)#open-java.lang)

#### call

```java
public JSubroutineParameters call(String subroutineName,
                                  JSubroutineParameters parameters)
                           throws JSubroutineNotFoundException,
                                  JRemoteException
```

Description copied from interface: `JConnection`

Call a jBASE subroutine.  
Specified by:`call` in interface `JConnection`  
Returns:the result parameters from subroutine call  
Throws:`JSubroutineNotFoundException``JRemoteException`  
See Also:[`JConnection.call(java.lang.String, com.jbase.jremote.JSubroutineParameters)`](./../../jconnection-(jremote-api)#call-java.lang.String-com.jbase.jremote)

#### execute

```java
public JExecuteResults execute(String command)
                        throws JRemoteException
```

Description copied from interface: `JConnection`

Execute a jBASE command.  
Specified by:`execute` in interface `JConnection`  
Returns:the execute results  
Throws:`JRemoteException`  
See Also:[`JConnection.execute(java.lang.String)`](./../../jconnection-(jremote-api)#execute-java.lang)

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
See Also:[`JConnection.execute(java.lang.String, com.jbase.jremote.JSelectList)`](./../../jconnection-(jremote-api)#execute-java.lang.String-com.jbase.jremote)

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
See Also:[`JConnection.begin()`](./../../jconnection-(jremote-api)#begin--)

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
See Also:[`JConnection.commit()`](./../../jconnection-(jremote-api)#commit--)

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
See Also:[`JConnection.rollback()`](./../../jconnection-(jremote-api)#rollback--)

#### date

```java
public int date()
         throws JRemoteException
```

Return the jBASE internal date. Epoch Dec 31, 1967.  
Specified by:`date` in interface `JConnection`  
Returns:int internal date  
Throws:`JRemoteException`

#### time

```java
public int time()
         throws JRemoteException
```

Return the jBASE internal time. Seconds since midnight.  
Specified by:`time` in interface `JConnection`  
Returns:int internal time  
Throws:`JRemoteException`

#### getCommon

```java
public JDynArray getCommon(String name)
                    throws JRemoteException
```

Return the value of the named common with the supplied name.  
Specified by:`getCommon` in interface `JConnection`  
Parameters:`name`   
Returns:JDynArray value  
Throws:`JRemoteException`

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

#### iconv

```java
public String iconv(String data,
                    String conversion)
             throws JRemoteException
```

Description copied from interface: `JConnection`

Converts data in external format to internal format.  
Specified by:`iconv` in interface `JConnection`  
Parameters:`data` - data to be converted`conversion` - the conversion command  
Returns:String the converted data  
Throws:`JRemoteException`  
See Also:`com.jbase.jremote.JConnection#iconv()`

#### oconv

```java
public String oconv(String data,
                    String conversion)
             throws JRemoteException
```

Description copied from interface: `JConnection`

Converts internal representations of data to their external form.  
Specified by:`oconv` in interface `JConnection`Parameters:`data` - data to be converted`conversion` - the conversion command  
Returns:String the converted data  
Throws:`JRemoteException`  
See Also:`com.jbase.jremote.JConnection#oconv()`

#### createStatement

```java
public JStatement createStatement()
                           throws JRemoteException
```

Description copied from interface: `JConnection`

Create a statement object that enables queries to be executed and a JResultSet returned.  
Specified by:`createStatement` in interface `JConnection`  
Returns:JStatement jBASE statement object  
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
Returns:JSelectList select list  
Throws:`JRemoteException`  
See Also:`com.jbase.jremote.JConnection#createSelectList()`

#### prepare

```java
public int prepare(Xid xid)
            throws XAException
```

Specified by:`prepare` in interface `XAResource`  
Throws:`XAException`

#### commit

```java
public void commit(Xid xid,
                   boolean onePhase)
            throws XAException
```

Specified by:`commit` in interface `XAResource`  
Throws:`XAException`

#### rollback

```java
public void rollback(Xid xid)
              throws XAException
```

Specified by:`rollback` in interface `XAResource`  
Throws:`XAException`

#### start

```java
public void start(Xid xid,
                  int flags)
           throws XAException
```

Specified by:`start` in interface `XAResource`  
Throws:`XAException`

#### end

```java
public void end(Xid xid,
                int flags)
         throws XAException
```

Specified by:`end` in interface `XAResource`  
Throws:`XAException`

#### forget

```java
public void forget(Xid xid)
            throws XAException
```

Specified by:`forget` in interface `XAResource`  
Throws:`XAException`

#### isSameRM

```java
public boolean isSameRM(XAResource res)
                 throws XAException
```

Specified by:`isSameRM` in interface `XAResource`  
Throws:`XAException`

#### recover

```java
public Xid[] recover(int flag)
              throws XAException
```

Specified by:`recover` in interface `XAResource`  
Throws:`XAException`

#### getTransactionTimeout

```java
public int getTransactionTimeout()
                          throws XAException
```

Specified by:`getTransactionTimeout` in interface `XAResource`  
Throws:`XAException`

#### setTransactionTimeout

```java
public boolean setTransactionTimeout(int timeout)
                              throws XAException
```

Specified by:`setTransactionTimeout` in interface `XAResource`  
Throws:`XAException`

#### sendWaitForResponse

```java
public Response sendWaitForResponse(JRemoteRequest req)
                             throws Exception
```

Uses underlying connection to send a request and wait for the response. Required because during testing (ONLY) we may sometimes wish to send an arbitrary packet and see what comes back. Do not handle exceptions the caller is probably interested in them.  
Throws:`Exception`

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

Send an monitoring request and waits for a reply.  
Specified by:`monitoring` in interface `JConnection`  
Parameters:`command` - to sendReturns:respose string  
Throws:`JRemoteException`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
