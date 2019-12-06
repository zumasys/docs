# WrappedJConnection (jremote API)

**Created At:** 9/25/2017 12:08:42 PM  
**Updated At:** 12/24/2018 7:37:28 PM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="WrappedJConnection (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10,"i21":10,"i22":10,"i23":10,"i24":10,"i25":10,"i26":10,"i27":10,"i28":10,"i29":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;


## Class WrappedJConnection

All Implemented Interfaces:[JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote")
* * *


```
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


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| `protected `<br> | `WrappedJConnection()` <br> |
| `protected `<br> | `WrappedJConnection(JRemoteManagedConnection managedConnection)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `begin()`<br>Begin a jBASE transaction.<br> |
| `JSubroutineParameters`<br> | `call(String subroutineName, JSubroutineParameters parameters)`<br>Call jBASE subroutine.<br> |
| `protected void`<br> | `checkStatus()`<br>In a managed environment the `checkStatus` method checks that this handle has not been closed.<br> |
| `void`<br> | `close()`<br>Close this connection.<br> |
| `void`<br> | `commit()`<br>Commit all pending jBASE operations performed in transaction and mark as complete.<br> |
| `JSelectList`<br> | `createSelectList(JDynArray jd)`<br>Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.<br> |
| `JStatement`<br> | `createStatement()`<br>Create a statement object that enables queries to be executed and a JResultSet returned.<br> |
| `int`<br> | `date()`<br>Return the jBASE internal date.<br> |
| `boolean`<br> | `echo(int length)`<br>Send an echo request and waits for a reply.<br> |
| `JExecuteResults`<br> | `execute(String command)`<br>Execute a jBASE command.<br> |
| `JExecuteResults`<br> | `execute(String command, JSelectList selectList)`<br>Execute a jBASE command using an existing select list as a filter.<br> |
| `Charset`<br> | `getCharset()`<br>Get the Charset for this connection.<br> |
| `JDynArray`<br> | `getCommon(String name)`<br>Return the value of the common with supplied name.<br> |
| `protected JConnection`<br> | `getConnection()`<br>Get the real connection.<br> |
| `protected javax.resource.spi.ManagedConnection`<br> | `getManagedConnection()` <br> |
| `EISMetaDataRepository`<br> | `getMetaData()`<br>Return meta data of the connected jBASE instance.<br> |
| `String`<br> | `iconv(String data, String conversion)`<br>Converts data in external format to internal format.<br> |
| `protected boolean`<br> | `isClosed()` <br> |
| `String`<br> | `monitoring(String command)`<br>Sends an monitoring command and waits for it's response<br> |
| `JDynArray`<br> | `newJDynArray()`<br>Create a JDynArray with the correct Charset for this connection.<br> |
| `JDynArray`<br> | `newJDynArray(String str)` <br> |
| `String`<br> | `oconv(String data, String conversion)`<br>Converts internal representations of data to their external form.<br> |
| `JFile`<br> | `open(String filename)`<br>Open jBASE file.<br> |
| `void`<br> | `rollback()`<br>Rollback all jBASE operations performed in transaction and mark as complete.<br> |
| `protected void`<br> | `setConnection(JConnection connection)` <br> |
| `protected void`<br> | `setManagedConnection(JRemoteManagedConnection connection)` <br> |
| `void`<br> | `setTerminalOutputWriter(Writer writer)` <br> |
| `boolean`<br> | `switchAccount(String user, String account, String password)`<br>Switch jBASE account.<br> |
| `int`<br> | `time()`<br>Return the jBASE internal time.<br> |
| `String`<br> | `toString()` <br> |






- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

### Constructor Detail



#### WrappedJConnection

```
protected WrappedJConnection()
```





#### WrappedJConnection

```
protected WrappedJConnection(JRemoteManagedConnection managedConnection)
```





### 


### Method Detail



#### getManagedConnection

```
protected javax.resource.spi.ManagedConnection getManagedConnection()
```





#### setManagedConnection

```
protected void setManagedConnection(JRemoteManagedConnection connection)
```



#### checkStatus

```
protected void checkStatus()
                    throws JRemoteException
```

In a managed environment the `checkStatus` method checks that this handle has not been closed.
Throws:`JRemoteException` - if connection status is invalid


#### newJDynArray

```
public JDynArray newJDynArray()
```

Description copied from interface: `JConnection`

Create a JDynArray with the correct Charset for this connection.
Specified by:`newJDynArray` in interface `JConnection`


#### newJDynArray

```
public JDynArray newJDynArray(String str)
```
Specified by:`newJDynArray` in interface `JConnection`

#### 


#### getCharset

```
public Charset getCharset()
```

Description copied from interface: `JConnection`

Get the Charset for this connection. This is used on String operations to convert the bytes received from jBASE to a Java UTF-16 String.
Specified by:`getCharset` in interface `JConnection`
#### 

#### 


#### close

```
public void close()
           throws JRemoteException
```

Close this connection.
Specified by:`close` in interface `JConnection`Throws:`JRemoteException`


#### isClosed

```
protected boolean isClosed()
```



#### getConnection

```
protected JConnection getConnection()
                             throws JRemoteException
```

Get the real connection.
Returns:JConnection the connection to jBASEThrows:`JRemoteException`



#### setConnection

```
protected void setConnection(JConnection connection)
```



#### switchAccount

```
public boolean switchAccount(String user,
                             String account,
                             String password)
                      throws JRemoteException
```

Switch jBASE account.
Specified by:`switchAccount` in interface `JConnection`Parameters:`user` - username that belongs to the account`account` - name of the account to log into`password` - password of the account to log intoReturns:booleanThrows:`JRemoteException`See Also:[`JConnection.switchAccount(String, String, String)`](/39248-jremote/com_jbase_jremote_jconnection#switchAccount-java.lang.String-java.lang.String-java.lang.String-)



#### open

```
public JFile open(String filename)
           throws JRemoteException
```

Open jBASE file.
Specified by:`open` in interface `JConnection`Returns:JFileThrows:`JRemoteException`See Also:[`JConnection.open(String)`](/39248-jremote/com_jbase_jremote_jconnection#open-java.lang.String-)

#### 


#### call

```
public JSubroutineParameters call(String subroutineName,
                                  JSubroutineParameters parameters)
                           throws JSubroutineNotFoundException,
                                  JRemoteException
```

Call jBASE subroutine.
Specified by:`call` in interface `JConnection`Returns:the result parameters from subroutine callThrows:`JSubroutineNotFoundException``JRemoteException`See Also:[`JConnection.open(String)`](/39248-jremote/com_jbase_jremote_jconnection#open-java.lang.String-)

#### 


#### execute

```
public JExecuteResults execute(String command)
                        throws JRemoteException
```

Description copied from interface: `JConnection`

Execute a jBASE command.
Specified by:`execute` in interface `JConnection`Returns:the execute resultsThrows:`JRemoteException`



#### execute

```
public JExecuteResults execute(String command,
                               JSelectList selectList)
                        throws JRemoteException
```

Description copied from interface: `JConnection`

Execute a jBASE command using an existing select list as a filter.
Specified by:`execute` in interface `JConnection`Returns:the execute resultsThrows:`JRemoteException`



#### date

```
public int date()
         throws JRemoteException
```

Return the jBASE internal date. Epoch Dec 31, 1967.
Specified by:`date` in interface `JConnection`Returns:int internal dateThrows:`JRemoteException`See Also:[`JConnection.date()`](/39248-jremote/com_jbase_jremote_jconnection#date--)



#### time

```
public int time()
         throws JRemoteException
```

Return the jBASE internal time. Seconds since midnight.
Specified by:`time` in interface `JConnection`Returns:int internal timeThrows:`JRemoteException`See Also:[`JConnection.time()`](/39248-jremote/com_jbase_jremote_jconnection#time--)



#### iconv

```
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
Specified by:`oconv` in interface `JConnection`Parameters:`data` - data to be converted`conversion` - the conversion commandReturns:String the converted dataThrows:`JRemoteException`



#### getCommon

```
public JDynArray getCommon(String name)
                    throws JRemoteException
```

Return the value of the common with supplied name.
Specified by:`getCommon` in interface `JConnection`Returns:JDynArray valueThrows:`JRemoteException`See Also:[`JConnection.getCommon(java.lang.String name)`](/39248-jremote/com_jbase_jremote_jconnection#getCommon-java.lang.String-)



#### getMetaData

```
public EISMetaDataRepository getMetaData()
                                  throws JRemoteException
```

Description copied from interface: `JConnection`

Return meta data of the connected jBASE instance.
Specified by:`getMetaData` in interface `JConnection`Returns:EISMetaDataRepository meta data repositoryThrows:`JRemoteException`See Also:[`JConnection.getMetaData()`](/39248-jremote/com_jbase_jremote_jconnection#getMetaData--)



#### createStatement

```
public JStatement createStatement()
                           throws JRemoteException
```

Description copied from interface: `JConnection`

Create a statement object that enables queries to be executed and a JResultSet returned.
Specified by:`createStatement` in interface `JConnection`Returns:JStatement jBase statement objectThrows:`JRemoteException`See Also:[`JConnection.createStatement()`](/39248-jremote/com_jbase_jremote_jconnection#createStatement--)



#### createSelectList

```
public JSelectList createSelectList(JDynArray jd)
                             throws JRemoteException
```

Description copied from interface: `JConnection`

Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.
Specified by:`createSelectList` in interface `JConnection`Parameters:`jd` - dynamic array containing the keysReturns:JSelectList select listThrows:`JRemoteException`See Also:[`JConnection.createSelectList(JDynArray)`](/39248-jremote/com_jbase_jremote_jconnection#createSelectList-com.jbase.jremote.JDynArray-)



#### begin

```
public void begin()
           throws JRemoteException
```

Description copied from interface: `JConnection`

Begin a jBASE transaction.

If a transaction already exists then no action will be taken.
Specified by:`begin` in interface `JConnection`Throws:`JRemoteException`See Also:[`JConnection.commit()`](/39248-jremote/com_jbase_jremote_jconnection#commit--), [`JConnection.rollback()`](/39248-jremote/com_jbase_jremote_jconnection#rollback--)



#### commit

```
public void commit()
            throws JRemoteException
```

Description copied from interface: `JConnection`

Commit all pending jBASE operations performed in transaction and mark as complete.

If no transaction exists then no action will be taken.
Specified by:`commit` in interface `JConnection`Throws:`JRemoteException`See Also:[`JConnection.begin()`](/39248-jremote/com_jbase_jremote_jconnection#begin--)



#### rollback

```
public void rollback()
              throws JRemoteException
```

Description copied from interface: `JConnection`

Rollback all jBASE operations performed in transaction and mark as complete.

If no transaction exists then no action will be taken.
Specified by:`rollback` in interface `JConnection`Throws:`JRemoteException`See Also:[`JConnection.begin()`](/39248-jremote/com_jbase_jremote_jconnection#begin--)



#### setTerminalOutputWriter

```
public void setTerminalOutputWriter(Writer writer)
```
Specified by:`setTerminalOutputWriter` in interface `JConnection`



#### toString

```
public String toString()
```
Overrides:`toString` in class `Object`

#### echo

```
public boolean echo(int length)
             throws JRemoteException
```

Send an echo request and waits for a reply.
Specified by:`echo` in interface `JConnection`Parameters:`length` - of echo packet to send.Returns:True = successThrows:`JRemoteException`

#### monitoring

```
public String monitoring(String command)
                  throws JRemoteException
```

Sends an monitoring command and waits for it's response
Specified by:`monitoring` in interface `JConnection`Parameters:`command` - to sendReturns:respose stringThrows:`JRemoteException` - if monitoring command fails

Return to [jREMOTE API](com_jbase_jremote_package-summary)
