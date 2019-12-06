# WrappedJConnection (jremote API)

**Created At:** 9/25/2017 12:08:42 PM  
**Updated At:** 12/24/2018 7:37:28 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="WrappedJConnection (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10,"i21":10,"i22":10,"i23":10,"i24":10,"i25":10,"i26":10,"i27":10,"i28":10,"i29":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript>&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class WrappedJConnection

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></dd></dl>
* * *


```
public class WrappedJConnection
extends Object
implements JConnection
```

Implementation of a connection to a remote jBASE instance.
If constructed in a managed environment then calls will be made through the managed connection to allow the application server to be notified of connection events.
<dl><dt><br></dt></dl>

<!--   -->

### Field Summary

<!--   -->

- Fields inherited from interface com.jbase.jremote.JConnection
    - `DEFAULT_CHARSET, JBASE_DEFAULT_ENCODING`






<!--   -->

### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| `protected `<br> | `WrappedJConnection()` <br> |
| `protected `<br> | `WrappedJConnection(JRemoteManagedConnection managedConnection)` <br> |




<!--   -->

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


<!--   -->



- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->


#### WrappedJConnection

```
protected WrappedJConnection()
```





#### WrappedJConnection

```
protected WrappedJConnection(JRemoteManagedConnection managedConnection)
```



<!--   -->

### 


### Method Detail
<!--   -->


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
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code> - if connection status is invalid</dd></dl>


#### newJDynArray

```
public JDynArray newJDynArray()
```

Description copied from interface: `JConnection`

Create a JDynArray with the correct Charset for this connection.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#newJDynArray--">newJDynArray</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd></dl>


#### newJDynArray

```
public JDynArray newJDynArray(String str)
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#newJDynArray-java.lang.String-">newJDynArray</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd></dl>

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


#### close

```
public void close()
           throws JRemoteException
```

Close this connection.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#close--">close</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


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
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JConnection the connection to jBASE</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>



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
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#switchAccount-java.lang.String-java.lang.String-java.lang.String-">switchAccount</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>user</code> - username that belongs to the account</dd><dd style="margin-left: 20px;"><code>account</code> - name of the account to log into</dd><dd style="margin-left: 20px;"><code>password</code> - password of the account to log into</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">boolean</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#switchAccount-java.lang.String-java.lang.String-java.lang.String-"><code>JConnection.switchAccount(String, String, String)</code></a></dd></dl>



#### open

```
public JFile open(String filename)
           throws JRemoteException
```

Open jBASE file.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#open-java.lang.String-">open</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JFile</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#open-java.lang.String-"><code>JConnection.open(String)</code></a></dd></dl>

#### 


#### call

```
public JSubroutineParameters call(String subroutineName,
                                  JSubroutineParameters parameters)
                           throws JSubroutineNotFoundException,
                                  JRemoteException
```

Call jBASE subroutine.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#call-java.lang.String-com.jbase.jremote.JSubroutineParameters-">call</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">the result parameters from subroutine call</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jsubroutinenotfoundexception" title="class in com.jbase.jremote">JSubroutineNotFoundException</a></code></dd><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#open-java.lang.String-"><code>JConnection.open(String)</code></a></dd></dl>

#### 


#### execute

```
public JExecuteResults execute(String command)
                        throws JRemoteException
```

Description copied from interface: `JConnection`

Execute a jBASE command.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#execute-java.lang.String-">execute</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">the execute results</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>



#### execute

```
public JExecuteResults execute(String command,
                               JSelectList selectList)
                        throws JRemoteException
```

Description copied from interface: `JConnection`

Execute a jBASE command using an existing select list as a filter.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#execute-java.lang.String-com.jbase.jremote.JSelectList-">execute</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">the execute results</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>



#### date

```
public int date()
         throws JRemoteException
```

Return the jBASE internal date. Epoch Dec 31, 1967.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#date--">date</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">int internal date</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#date--"><code>JConnection.date()</code></a></dd></dl>



#### time

```
public int time()
         throws JRemoteException
```

Return the jBASE internal time. Seconds since midnight.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#time--">time</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">int internal time</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#time--"><code>JConnection.time()</code></a></dd></dl>



#### iconv

```
public String iconv(String data,
                    String conversion)
             throws JRemoteException
```

Description copied from interface: `JConnection`

Converts data in external format to internal format.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#iconv-java.lang.String-java.lang.String-">iconv</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>data</code> - data to be converted</dd><dd style="margin-left: 20px;"><code>conversion</code> - the conversion command</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">String the converted data</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>



#### oconv

```
public String oconv(String data,
                    String conversion)
             throws JRemoteException
```

Description copied from interface: `JConnection`

Converts internal representations of data to their external form.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#oconv-java.lang.String-java.lang.String-">oconv</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>data</code> - data to be converted</dd><dd style="margin-left: 20px;"><code>conversion</code> - the conversion command</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">String the converted data</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>



#### getCommon

```
public JDynArray getCommon(String name)
                    throws JRemoteException
```

Return the value of the common with supplied name.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#getCommon-java.lang.String-">getCommon</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JDynArray value</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#getCommon-java.lang.String-"><code>JConnection.getCommon(java.lang.String name)</code></a></dd></dl>



#### getMetaData

```
public EISMetaDataRepository getMetaData()
                                  throws JRemoteException
```

Description copied from interface: `JConnection`

Return meta data of the connected jBASE instance.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#getMetaData--">getMetaData</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">EISMetaDataRepository meta data repository</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#getMetaData--"><code>JConnection.getMetaData()</code></a></dd></dl>



#### createStatement

```
public JStatement createStatement()
                           throws JRemoteException
```

Description copied from interface: `JConnection`

Create a statement object that enables queries to be executed and a JResultSet returned.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#createStatement--">createStatement</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JStatement jBase statement object</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#createStatement--"><code>JConnection.createStatement()</code></a></dd></dl>



#### createSelectList

```
public JSelectList createSelectList(JDynArray jd)
                             throws JRemoteException
```

Description copied from interface: `JConnection`

Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#createSelectList-com.jbase.jremote.JDynArray-">createSelectList</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>jd</code> - dynamic array containing the keys</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JSelectList select list</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#createSelectList-com.jbase.jremote.JDynArray-"><code>JConnection.createSelectList(JDynArray)</code></a></dd></dl>



#### begin

```
public void begin()
           throws JRemoteException
```

Description copied from interface: `JConnection`

Begin a jBASE transaction.

If a transaction already exists then no action will be taken.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#begin--">begin</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#commit--"><code>JConnection.commit()</code></a>, <a href="/39248-jremote/com_jbase_jremote_jconnection#rollback--"><code>JConnection.rollback()</code></a></dd></dl>



#### commit

```
public void commit()
            throws JRemoteException
```

Description copied from interface: `JConnection`

Commit all pending jBASE operations performed in transaction and mark as complete.

If no transaction exists then no action will be taken.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#commit--">commit</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#begin--"><code>JConnection.begin()</code></a></dd></dl>



#### rollback

```
public void rollback()
              throws JRemoteException
```

Description copied from interface: `JConnection`

Rollback all jBASE operations performed in transaction and mark as complete.

If no transaction exists then no action will be taken.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#rollback--">rollback</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jconnection#begin--"><code>JConnection.begin()</code></a></dd></dl>



#### setTerminalOutputWriter

```
public void setTerminalOutputWriter(Writer writer)
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#setTerminalOutputWriter-java.io.Writer-">setTerminalOutputWriter</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd></dl>



#### toString

```
public String toString()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Overrides:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#toString--" title="class or interface in java.lang">toString</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true" title="class or interface in java.lang">Object</a></code></dd></dl>

#### echo

```
public boolean echo(int length)
             throws JRemoteException
```

Send an echo request and waits for a reply.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#echo-int-">echo</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>length</code> - of echo packet to send.</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">True = success</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>

#### monitoring

```
public String monitoring(String command)
                  throws JRemoteException
```

Sends an monitoring command and waits for it's response
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jconnection#monitoring-java.lang.String-">monitoring</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>command</code> - to send</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">respose string</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code> - if monitoring command fails</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Return to [jREMOTE API](com_jbase_jremote_package-summary)
