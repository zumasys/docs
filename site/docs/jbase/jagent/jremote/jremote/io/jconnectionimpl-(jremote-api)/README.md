# JConnectionImpl (jremote API)

**Created At:** 9/25/2017 11:52:06 AM  
**Updated At:** 12/24/2018 8:48:57 PM  
**Original Doc:** [com_jbase_jremote_io_jconnectionimpl](https://docs.jbase.com/39250-io/com_jbase_jremote_io_jconnectionimpl)  
**Original ID:** 278160  
**Internal:** No  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JConnectionImpl (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10,"i21":10,"i22":10,"i23":10,"i24":10,"i25":10,"i26":10,"i27":10,"i28":10,"i29":10,"i30":10,"i31":10,"i32":10,"i33":10,"i34":10,"i35":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;


## Class JConnectionImpl

All Implemented Interfaces:[JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote"), [JXAConnection](./../../jxaconnection-%28jremote-api%29 "interface in com.jbase.jremote"), [XAResource](http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true "class or interface in javax.transaction.xa")
* * *


```
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


| Constructor and Description<br> |
| --- |
| `JConnectionImpl()` <br> |
| `JConnectionImpl(AbstractJRemoteConnection connection)` <br> |
| `JConnectionImpl(AbstractJRemoteConnection connection, Properties cxProps)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `begin()`<br>Begin a jBASE transaction.<br> |
| `JSubroutineParameters`<br> | `call(String subroutineName, JSubroutineParameters parameters)`<br>Call a jBASE subroutine.<br> |
| `void`<br> | `close()`<br>Close any resources used by this connection.<br> |
| `void`<br> | `commit()`<br>Commit all pending jBASE operations performed in transaction and mark as complete.<br> |
| `void`<br> | `commit(Xid xid, boolean onePhase)` <br> |
| `JSelectList`<br> | `createSelectList(JDynArray jd)`<br>Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.<br> |
| `JStatement`<br> | `createStatement()`<br>Create a statement object that enables queries to be executed and a JResultSet returned.<br> |
| `int`<br> | `date()`<br>Return the jBASE internal date.<br> |
| `boolean`<br> | `echo(int length)`<br>Send an echo request and waits for a reply.<br> |
| `void`<br> | `end(Xid xid, int flags)` <br> |
| `JExecuteResults`<br> | `execute(String command)`<br>Execute a jBASE command.<br> |
| `JExecuteResults`<br> | `execute(String command, JSelectList selectList)`<br>Execute a jBASE command using an existing select list as a filter.<br> |
| `void`<br> | `forget(Xid xid)` <br> |
| `Charset`<br> | `getCharset()`<br>Get the Charset for this connection.<br> |
| `JDynArray`<br> | `getCommon(String name)`<br>Return the value of the named common with the supplied name.<br> |
| `EISMetaDataRepository`<br> | `getMetaData()`<br>Return meta data of the connected jBASE instance.<br> |
| `int`<br> | `getTransactionTimeout()` <br> |
| `String`<br> | `iconv(String data, String conversion)`<br>Converts data in external format to internal format.<br> |
| `protected void`<br> | `init(AbstractJRemoteConnection connection, boolean allowInput, Properties cxProps)` <br> |
| `boolean`<br> | `isSameRM(XAResource res)` <br> |
| `String`<br> | `monitoring(String command)`<br>Send an monitoring request and waits for a reply.<br> |
| `JDynArray`<br> | `newJDynArray()`<br>Create a JDynArray with the correct Charset for this connection.<br> |
| `JDynArray`<br> | `newJDynArray(String str)` <br> |
| `String`<br> | `oconv(String data, String conversion)`<br>Converts internal representations of data to their external form.<br> |
| `JFile`<br> | `open(String fileName)`<br>Attempts to open a jBASE file or returns null if the file does not exist.<br> |
| `int`<br> | `prepare(Xid xid)` <br> |
| `Xid[]`<br> | `recover(int flag)` <br> |
| `void`<br> | `rollback()`<br>Rollback all jBASE operations performed in transaction and mark as complete.<br> |
| `void`<br> | `rollback(Xid xid)` <br> |
| `Response`<br> | `sendWaitForResponse(JRemoteRequest req)`<br>Uses underlying connection to send a request and wait for the response.<br> |
| `void`<br> | `setOutputStream(OutputStream out)` <br> |
| `void`<br> | `setTerminalOutputWriter(Writer writer)` <br> |
| `boolean`<br> | `setTransactionTimeout(int timeout)` <br> |
| `void`<br> | `start(Xid xid, int flags)` <br> |
| `boolean`<br> | `switchAccount(String user, String account, String password)`<br>Log into the specified jBASE account.<br> |
| `int`<br> | `time()`<br>Return the jBASE internal time.<br> |




### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JConnectionImpl

```
public JConnectionImpl()
```

#### 

#### 


#### JConnectionImpl

```
public JConnectionImpl(AbstractJRemoteConnection connection)
```

#### 

#### 


#### JConnectionImpl

```
public JConnectionImpl(AbstractJRemoteConnection connection,
                       Properties cxProps)
```





### Method Detail

#### init

```
protected void init(AbstractJRemoteConnection connection,
                    boolean allowInput,
                    Properties cxProps)
```

#### 

#### 


#### setOutputStream

```
public void setOutputStream(OutputStream out)
```

#### 

#### 


#### setTerminalOutputWriter

```
public void setTerminalOutputWriter(Writer writer)
```
Specified by:`setTerminalOutputWriter` in interface `JConnection`See Also:[`JConnection.setTerminalOutputWriter(java.io.Writer)`](/39248-jremote/com_jbase_jremote_jconnection#setTerminalOutputWriter-java.io.Writer-)
#### 

#### 


#### newJDynArray

```
public JDynArray newJDynArray()
```

Description copied from interface: `JConnection`

Create a JDynArray with the correct Charset for this connection.
Specified by:`newJDynArray` in interface `JConnection`

#### newjDynArray

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


#### switchAccount

```
public boolean switchAccount(String user,
                             String account,
                             String password)
                      throws JRemoteException
```

Description copied from interface: `JConnection`

Log into the specified jBASE account.
Specified by:`switchAccount` in interface `JConnection`Parameters:`user` - username that belongs to the account`account` - name of the account to log into`password` - password of the account to log intoReturns:booleanThrows:`JRemoteException`See Also:[`JConnection.switchAccount(java.lang.String user, java.lang.String account, java.lang.String password)`](/39248-jremote/com_jbase_jremote_jconnection#switchAccount-java.lang.String-java.lang.String-java.lang.String-)
#### 

#### 


#### close

```
public void close()
           throws JRemoteException
```

Description copied from interface: `JConnection`

Close any resources used by this connection.
Specified by:`close` in interface `JConnection`Throws:`JRemoteException`See Also:[`JConnection.close()`](/39248-jremote/com_jbase_jremote_jconnection#close--)
#### 

#### 


#### open

```
public JFile open(String fileName)
           throws JRemoteException
```

Description copied from interface: `JConnection`

Attempts to open a jBASE file or returns null if the file does not exist.
Specified by:`open` in interface `JConnection`Returns:JFileThrows:`JRemoteException`See Also:[`JConnection.open(java.lang.String fileName)`](/39248-jremote/com_jbase_jremote_jconnection#open-java.lang.String-)
#### 

#### 


#### call

```
public JSubroutineParameters call(String subroutineName,
                                  JSubroutineParameters parameters)
                           throws JSubroutineNotFoundException,
                                  JRemoteException
```

Description copied from interface: `JConnection`

Call a jBASE subroutine.
Specified by:`call` in interface `JConnection`Returns:the result parameters from subroutine callThrows:`JSubroutineNotFoundException``JRemoteException`See Also:[`JConnection.call(java.lang.String, com.jbase.jremote.JSubroutineParameters)`](/39248-jremote/com_jbase_jremote_jconnection#call-java.lang.String-com.jbase.jremote.JSubroutineParameters-)

#### execute

```
public JExecuteResults execute(String command)
                        throws JRemoteException
```

Description copied from interface: `JConnection`

Execute a jBASE command.
Specified by:`execute` in interface `JConnection`Returns:the execute resultsThrows:`JRemoteException`See Also:[`JConnection.execute(java.lang.String)`](/39248-jremote/com_jbase_jremote_jconnection#execute-java.lang.String-)
#### 

#### 


#### execute

```
public JExecuteResults execute(String command,
                               JSelectList selectList)
                        throws JRemoteException
```

Description copied from interface: `JConnection`

Execute a jBASE command using an existing select list as a filter.
Specified by:`execute` in interface `JConnection`Returns:the execute resultsThrows:`JRemoteException`See Also:[`JConnection.execute(java.lang.String, com.jbase.jremote.JSelectList)`](/39248-jremote/com_jbase_jremote_jconnection#execute-java.lang.String-com.jbase.jremote.JSelectList-)
#### 

#### 


#### begin

```
public void begin()
           throws JRemoteException
```

Description copied from interface: `JConnection`

Begin a jBASE transaction.

If a transaction already exists then no action will be taken.
Specified by:`begin` in interface `JConnection`Throws:`JRemoteException`See Also:[`JConnection.begin()`](/39248-jremote/com_jbase_jremote_jconnection#begin--)
#### 

#### 


#### commit

```
public void commit()
            throws JRemoteException
```

Description copied from interface: `JConnection`

Commit all pending jBASE operations performed in transaction and mark as complete.

If no transaction exists then no action will be taken.
Specified by:`commit` in interface `JConnection`Throws:`JRemoteException`See Also:[`JConnection.commit()`](/39248-jremote/com_jbase_jremote_jconnection#commit--)
#### 

#### 


#### rollback

```
public void rollback()
              throws JRemoteException
```

Description copied from interface: `JConnection`

Rollback all jBASE operations performed in transaction and mark as complete.

If no transaction exists then no action will be taken.
Specified by:`rollback` in interface `JConnection`Throws:`JRemoteException`See Also:[`JConnection.rollback()`](/39248-jremote/com_jbase_jremote_jconnection#rollback--)
#### 

#### 


#### date

```
public int date()
         throws JRemoteException
```

Return the jBASE internal date. Epoch Dec 31, 1967.
Specified by:`date` in interface `JConnection`Returns:int internal dateThrows:`JRemoteException`
#### 

#### 


#### time

```
public int time()
         throws JRemoteException
```

Return the jBASE internal time. Seconds since midnight.
Specified by:`time` in interface `JConnection`Returns:int internal timeThrows:`JRemoteException`
#### 

#### 


#### getCommon

```
public JDynArray getCommon(String name)
                    throws JRemoteException
```

Return the value of the named common with the supplied name.
Specified by:`getCommon` in interface `JConnection`Parameters:`name` -Returns:JDynArray valueThrows:`JRemoteException`

#### getMetaData

```
public EISMetaDataRepository getMetaData()
                                  throws JRemoteException
```

Description copied from interface: `JConnection`

Return meta data of the connected jBASE instance.
Specified by:`getMetaData` in interface `JConnection`Returns:EISMetaDataRepository meta data repositoryThrows:`JRemoteException`See Also:[`JConnection.getMetaData()`](/39248-jremote/com_jbase_jremote_jconnection#getMetaData--)
#### 

#### 


#### iconv

```
public String iconv(String data,
                    String conversion)
             throws JRemoteException
```

Description copied from interface: `JConnection`

Converts data in external format to internal format.
Specified by:`iconv` in interface `JConnection`Parameters:`data` - data to be converted`conversion` - the conversion commandReturns:String the converted dataThrows:`JRemoteException`See Also:`com.jbase.jremote.JConnection#iconv()`
#### 

#### 


#### oconv

```
public String oconv(String data,
                    String conversion)
             throws JRemoteException
```

Description copied from interface: `JConnection`

Converts internal representations of data to their external form.
Specified by:`oconv` in interface `JConnection`Parameters:`data` - data to be converted`conversion` - the conversion commandReturns:String the converted dataThrows:`JRemoteException`See Also:`com.jbase.jremote.JConnection#oconv()`
#### 

#### 


#### createStatement

```
public JStatement createStatement()
                           throws JRemoteException
```

Description copied from interface: `JConnection`

Create a statement object that enables queries to be executed and a JResultSet returned.
Specified by:`createStatement` in interface `JConnection`Returns:JStatement jBase statement objectThrows:`JRemoteException`See Also:[`JConnection.createStatement()`](/39248-jremote/com_jbase_jremote_jconnection#createStatement--)
#### 

#### 


#### createSelectList

```
public JSelectList createSelectList(JDynArray jd)
                             throws JRemoteException
```

Description copied from interface: `JConnection`

Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.
Specified by:`createSelectList` in interface `JConnection`Parameters:`jd` - dynamic array containing the keysReturns:JSelectList select listThrows:`JRemoteException`See Also:`com.jbase.jremote.JConnection#createSelectList()`
#### 

#### 


#### prepare

```
public int prepare(Xid xid)
            throws XAException
```
Specified by:`prepare` in interface `XAResource`Throws:`XAException`
#### 

#### 


#### commit

```
public void commit(Xid xid,
                   boolean onePhase)
            throws XAException
```
Specified by:`commit` in interface `XAResource`Throws:`XAException`


#### rollback

```
public void rollback(Xid xid)
              throws XAException
```
Specified by:`rollback` in interface `XAResource`Throws:`XAException`
#### 

#### 


#### start

```
public void start(Xid xid,
                  int flags)
           throws XAException
```
Specified by:`start` in interface `XAResource`Throws:`XAException`
#### 

#### 


#### end

```
public void end(Xid xid,
                int flags)
         throws XAException
```
Specified by:`end` in interface `XAResource`Throws:`XAException`
#### 

#### 


#### forget

```
public void forget(Xid xid)
            throws XAException
```
Specified by:`forget` in interface `XAResource`Throws:`XAException`
#### 

#### 


#### isSameRM

```
public boolean isSameRM(XAResource res)
                 throws XAException
```
Specified by:`isSameRM` in interface `XAResource`Throws:`XAException`
#### 

#### 


#### recover

```
public Xid[] recover(int flag)
              throws XAException
```
Specified by:`recover` in interface `XAResource`Throws:`XAException`
#### 

#### 


#### getTransactionTimeout

```
public int getTransactionTimeout()
                          throws XAException
```
Specified by:`getTransactionTimeout` in interface `XAResource`Throws:`XAException`
#### 

#### 


#### setTransactionTimeout

```
public boolean setTransactionTimeout(int timeout)
                              throws XAException
```
Specified by:`setTransactionTimeout` in interface `XAResource`Throws:`XAException`
#### 

#### 


#### sendWaitForResponse

```
public Response sendWaitForResponse(JRemoteRequest req)
                             throws Exception
```

Uses underlying connection to send a request and wait for the response. Required because during testing (ONLY) we may sometimes wish to send an arbitrary packet and see what comes back. Do not handle exceptions the caller is probably interested in them.
Throws:`Exception`
#### 

#### 


#### echo

```
public boolean echo(int length)
             throws JRemoteException
```

Send an echo request and waits for a reply.
Specified by:`echo` in interface `JConnection`Parameters:`length` - of echo packet to send.Returns:True = successThrows:`JRemoteException`
#### 

#### 


#### monitoring

```
public String monitoring(String command)
                  throws JRemoteException
```

Send an monitoring request and waits for a reply.
Specified by:`monitoring` in interface `JConnection`Parameters:`command` - to sendReturns:respose stringThrows:`JRemoteException`


Back to [jREMOTE API](com_jbase_jremote_package-summary)


