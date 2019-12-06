# JConnectionImpl (jremote API)

**Created At:** 9/25/2017 11:52:06 AM  
**Updated At:** 12/24/2018 8:48:57 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JConnectionImpl (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10,"i21":10,"i22":10,"i23":10,"i24":10,"i25":10,"i26":10,"i27":10,"i28":10,"i29":10,"i30":10,"i31":10,"i32":10,"i33":10,"i34":10,"i35":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript>&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JConnectionImpl

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a>, <a href="/39248-jremote/com_jbase_jremote_jxaconnection" title="interface in com.jbase.jremote">JXAConnection</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true" title="class or interface in javax.transaction.xa">XAResource</a></dd></dl>
* * *


```
public class JConnectionImpl
extends Object
implements JXAConnection
```

The connection to a remote jBASE instance implemented using a IO messages over an abstract connection.
<dl><dt><br></dt></dl>


<!--   -->

### Field Summary

- <!--   -->Fields inherited from interface com.jbase.jremote.JConnection
    - `DEFAULT_CHARSET, JBASE_DEFAULT_ENCODING`
- <!--   -->Fields inherited from interface javax.transaction.xa.XAResource
    - `TMENDRSCAN, TMFAIL, TMJOIN, TMNOFLAGS, TMONEPHASE, TMRESUME, TMSTARTRSCAN, TMSUCCESS, TMSUSPEND, XA_OK, XA_RDONLY`


<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JConnectionImpl()` <br> |
| `JConnectionImpl(AbstractJRemoteConnection connection)` <br> |
| `JConnectionImpl(AbstractJRemoteConnection connection, Properties cxProps)` <br> |




<!--   -->

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


<!--   -->

### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### <!--   -->Constructor Detail
<!--   -->
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



<!--   -->

### Method Detail
<!--   -->
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
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#setTerminalOutputWriter-java.io.Writer-">setTerminalOutputWriter</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#setTerminalOutputWriter-java.io.Writer-"><code>JConnection.setTerminalOutputWriter(java.io.Writer)</code></a></dd></dl>
#### 

#### 


#### newJDynArray

```
public JDynArray newJDynArray()
```

Description copied from interface: `JConnection`

Create a JDynArray with the correct Charset for this connection.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#newJDynArray--">newJDynArray</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd></dl>

#### newjDynArray

```
public JDynArray newJDynArray(String str)
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#newJDynArray-java.lang.String-">newJDynArray</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd></dl><!--   -->
#### 


#### getCharset

```
public Charset getCharset()
```

Description copied from interface: `JConnection`

Get the Charset for this connection. This is used on String operations to convert the bytes received from jBASE to a Java UTF-16 String.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#getCharset--">getCharset</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd></dl>
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
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#switchAccount-java.lang.String-java.lang.String-java.lang.String-">switchAccount</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>user</code> - username that belongs to the account</dd><dd style="margin-left: 20px;"><code>account</code> - name of the account to log into</dd><dd style="margin-left: 20px;"><code>password</code> - password of the account to log into</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">boolean</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#switchAccount-java.lang.String-java.lang.String-java.lang.String-"><code>JConnection.switchAccount(java.lang.String user, java.lang.String account, java.lang.String password)</code></a></dd></dl>
#### 

#### 


#### close

```
public void close()
           throws JRemoteException
```

Description copied from interface: `JConnection`

Close any resources used by this connection.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#close--">close</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#close--"><code>JConnection.close()</code></a></dd></dl>
#### 

#### 


#### open

```
public JFile open(String fileName)
           throws JRemoteException
```

Description copied from interface: `JConnection`

Attempts to open a jBASE file or returns null if the file does not exist.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#open-java.lang.String-">open</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JFile</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#open-java.lang.String-"><code>JConnection.open(java.lang.String fileName)</code></a></dd></dl>
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
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#call-java.lang.String-com.jbase.jremote.JSubroutineParameters-">call</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">the result parameters from subroutine call</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jsubroutinenotfoundexception" title="class in com.jbase.jremote">JSubroutineNotFoundException</a></code></dd><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#call-java.lang.String-com.jbase.jremote.JSubroutineParameters-"><code>JConnection.call(java.lang.String, com.jbase.jremote.JSubroutineParameters)</code></a></dd></dl>

#### execute

```
public JExecuteResults execute(String command)
                        throws JRemoteException
```

Description copied from interface: `JConnection`

Execute a jBASE command.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#execute-java.lang.String-">execute</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">the execute results</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#execute-java.lang.String-"><code>JConnection.execute(java.lang.String)</code></a></dd></dl>
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
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#execute-java.lang.String-com.jbase.jremote.JSelectList-">execute</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">the execute results</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#execute-java.lang.String-com.jbase.jremote.JSelectList-"><code>JConnection.execute(java.lang.String, com.jbase.jremote.JSelectList)</code></a></dd></dl>
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
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#begin--">begin</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#begin--"><code>JConnection.begin()</code></a></dd></dl>
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
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#commit--">commit</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#commit--"><code>JConnection.commit()</code></a></dd></dl>
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
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#rollback--">rollback</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#rollback--"><code>JConnection.rollback()</code></a></dd></dl>
#### 

#### 


#### date

```
public int date()
         throws JRemoteException
```

Return the jBASE internal date. Epoch Dec 31, 1967.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#date--">date</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">int internal date</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
#### 

#### 


#### time

```
public int time()
         throws JRemoteException
```

Return the jBASE internal time. Seconds since midnight.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#time--">time</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">int internal time</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
#### 

#### 


#### getCommon

```
public JDynArray getCommon(String name)
                    throws JRemoteException
```

Return the value of the named common with the supplied name.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#getCommon-java.lang.String-">getCommon</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>name</code> -</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JDynArray value</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>

#### getMetaData

```
public EISMetaDataRepository getMetaData()
                                  throws JRemoteException
```

Description copied from interface: `JConnection`

Return meta data of the connected jBASE instance.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#getMetaData--">getMetaData</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">EISMetaDataRepository meta data repository</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#getMetaData--"><code>JConnection.getMetaData()</code></a></dd></dl>
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
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#iconv-java.lang.String-java.lang.String-">iconv</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>data</code> - data to be converted</dd><dd style="margin-left: 20px;"><code>conversion</code> - the conversion command</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">String the converted data</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>com.jbase.jremote.JConnection#iconv()</code></dd></dl>
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
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#oconv-java.lang.String-java.lang.String-">oconv</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>data</code> - data to be converted</dd><dd style="margin-left: 20px;"><code>conversion</code> - the conversion command</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">String the converted data</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>com.jbase.jremote.JConnection#oconv()</code></dd></dl>
#### 

#### 


#### createStatement

```
public JStatement createStatement()
                           throws JRemoteException
```

Description copied from interface: `JConnection`

Create a statement object that enables queries to be executed and a JResultSet returned.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#createStatement--">createStatement</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JStatement jBase statement object</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#createStatement--"><code>JConnection.createStatement()</code></a></dd></dl>
#### 

#### 


#### createSelectList

```
public JSelectList createSelectList(JDynArray jd)
                             throws JRemoteException
```

Description copied from interface: `JConnection`

Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#createSelectList-com.jbase.jremote.JDynArray-">createSelectList</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>jd</code> - dynamic array containing the keys</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JSelectList select list</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>com.jbase.jremote.JConnection#createSelectList()</code></dd></dl>
#### 

#### 


#### prepare

```
public int prepare(Xid xid)
            throws XAException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true#prepare-javax.transaction.xa.Xid-" title="class or interface in javax.transaction.xa">prepare</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true" title="class or interface in javax.transaction.xa">XAResource</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAException.html?is-external=true" title="class or interface in javax.transaction.xa">XAException</a></code></dd></dl>
#### 

#### 


#### commit

```
public void commit(Xid xid,
                   boolean onePhase)
            throws XAException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true#commit-javax.transaction.xa.Xid-boolean-" title="class or interface in javax.transaction.xa">commit</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true" title="class or interface in javax.transaction.xa">XAResource</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAException.html?is-external=true" title="class or interface in javax.transaction.xa">XAException</a></code></dd></dl>


#### rollback

```
public void rollback(Xid xid)
              throws XAException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true#rollback-javax.transaction.xa.Xid-" title="class or interface in javax.transaction.xa">rollback</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true" title="class or interface in javax.transaction.xa">XAResource</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAException.html?is-external=true" title="class or interface in javax.transaction.xa">XAException</a></code></dd></dl>
#### 

#### 


#### start

```
public void start(Xid xid,
                  int flags)
           throws XAException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true#start-javax.transaction.xa.Xid-int-" title="class or interface in javax.transaction.xa">start</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true" title="class or interface in javax.transaction.xa">XAResource</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAException.html?is-external=true" title="class or interface in javax.transaction.xa">XAException</a></code></dd></dl>
#### 

#### 


#### end

```
public void end(Xid xid,
                int flags)
         throws XAException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true#end-javax.transaction.xa.Xid-int-" title="class or interface in javax.transaction.xa">end</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true" title="class or interface in javax.transaction.xa">XAResource</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAException.html?is-external=true" title="class or interface in javax.transaction.xa">XAException</a></code></dd></dl>
#### 

#### 


#### forget

```
public void forget(Xid xid)
            throws XAException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true#forget-javax.transaction.xa.Xid-" title="class or interface in javax.transaction.xa">forget</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true" title="class or interface in javax.transaction.xa">XAResource</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAException.html?is-external=true" title="class or interface in javax.transaction.xa">XAException</a></code></dd></dl>
#### 

#### 


#### isSameRM

```
public boolean isSameRM(XAResource res)
                 throws XAException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true#isSameRM-javax.transaction.xa.XAResource-" title="class or interface in javax.transaction.xa">isSameRM</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true" title="class or interface in javax.transaction.xa">XAResource</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAException.html?is-external=true" title="class or interface in javax.transaction.xa">XAException</a></code></dd></dl>
#### 

#### 


#### recover

```
public Xid[] recover(int flag)
              throws XAException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true#recover-int-" title="class or interface in javax.transaction.xa">recover</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true" title="class or interface in javax.transaction.xa">XAResource</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAException.html?is-external=true" title="class or interface in javax.transaction.xa">XAException</a></code></dd></dl>
#### 

#### 


#### getTransactionTimeout

```
public int getTransactionTimeout()
                          throws XAException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true#getTransactionTimeout--" title="class or interface in javax.transaction.xa">getTransactionTimeout</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true" title="class or interface in javax.transaction.xa">XAResource</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAException.html?is-external=true" title="class or interface in javax.transaction.xa">XAException</a></code></dd></dl>
#### 

#### 


#### setTransactionTimeout

```
public boolean setTransactionTimeout(int timeout)
                              throws XAException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true#setTransactionTimeout-int-" title="class or interface in javax.transaction.xa">setTransactionTimeout</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true" title="class or interface in javax.transaction.xa">XAResource</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAException.html?is-external=true" title="class or interface in javax.transaction.xa">XAException</a></code></dd></dl>
#### 

#### 


#### sendWaitForResponse

```
public Response sendWaitForResponse(JRemoteRequest req)
                             throws Exception
```

Uses underlying connection to send a request and wait for the response. Required because during testing (ONLY) we may sometimes wish to send an arbitrary packet and see what comes back. Do not handle exceptions the caller is probably interested in them.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Exception.html?is-external=true" title="class or interface in java.lang">Exception</a></code></dd></dl>
#### 

#### 


#### echo

```
public boolean echo(int length)
             throws JRemoteException
```

Send an echo request and waits for a reply.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#echo-int-">echo</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>length</code> - of echo packet to send.</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">True = success</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
#### 

#### 


#### monitoring

```
public String monitoring(String command)
                  throws JRemoteException
```

Send an monitoring request and waits for a reply.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#monitoring-java.lang.String-">monitoring</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>command</code> - to send</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">respose string</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


Back to [jREMOTE API](com_jbase_jremote_package-summary)
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
