# WrappedJConnection

**Created At:** 9/13/2017 7:49:19 PM  
**Updated At:** 9/13/2017 7:50:12 PM  


## Class WrappedJConnection

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.WrappedJConnection
- <dl><dt>All Implemented Interfaces:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></dd></dl>
```
public class WrappedJConnection
extends Object
implements JConnection
```

 Implementation of a connection to a remote jBASE instance.  
 If constructed in a managed environment then calls will be made through  the managed connection to allow the application server to be notified of connection events.  <dl><dt>Author:</dt><dd>aphethean</dd></dl>
- - ### Field Summary

        - ### Fields inherited from interface com.jbase.jremote.[JConnection](file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html "interface in com.jbase.jremote")
`DEFAULT_CHARSET, JBASE_DEFAULT_ENCODING`
- - ### Constructor Summary


| Modifier | Constructor and Description |
| --- | --- |
<caption>Constructors </caption>| `protected` | `WrappedJConnection()`  |
| `protected` | `WrappedJConnection(JRemoteManagedConnection managedConnection)`  |
- - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
<caption>All Methods <a href="javascript%3Ashow(2);">Instance Methods</a> <a href="javascript%3Ashow(8);">Concrete Methods</a>&nbsp;</caption>| `void` | `begin()` Begin a jBASE transaction.<br> |
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

In a managed environment the `checkStatus` method checks that  this handle has not been closed.<dl><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code> - if connection status is invalid</dd></dl>
    - - #### newJDynArray

```
public JDynArray newJDynArray()
```

Description copied from interface: `JConnection`
Create a JDynArray with the correct Charset for this connection.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#newJDynArray--">newJDynArray</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd></dl>
    - - #### newJDynArray

```
public JDynArray newJDynArray(String str)
```
<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#newJDynArray-java.lang.String-">newJDynArray</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd></dl>
    - - #### getCharset

```
public Charset getCharset()
```

Description copied from interface: `JConnection`
Get the Charset for this connection.  This is used on String operations to convert the bytes received from jBASE to a Java UTF-16 String.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#getCharset--">getCharset</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd></dl>
    - - #### close

```
public void close()            throws JRemoteException
```

Close this connection.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#close--">close</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### isClosed

```
protected boolean isClosed()
```
    - - #### getConnection

```
protected JConnection getConnection()                              throws JRemoteException
```

Get the real connection.<dl><dt>Returns:</dt><dd>JConnection the connection to jBASE</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### setConnection

```
protected void setConnection(JConnection connection)
```
    - - #### switchAccount

```
public boolean switchAccount(String user,                              String account,                              String password)                       throws JRemoteException
```

Switch jBASE account.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#switchAccount-java.lang.String-java.lang.String-java.lang.String-">switchAccount</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Parameters:</dt><dd><code>user</code> - username that belongs to the account</dd><dd><code>account</code> - name of the account to log into</dd><dd><code>password</code> - password of the account to log into</dd><dt>Returns:</dt><dd>boolean</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt>See Also:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#switchAccount-java.lang.String-java.lang.String-java.lang.String-"><code>JConnection.switchAccount(String, String, String)</code></a></dd></dl>
    - - #### open

```
public JFile open(String filename)            throws JRemoteException
```

Open jBASE file.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#open-java.lang.String-">open</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Returns:</dt><dd>JFile</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt>See Also:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#open-java.lang.String-"><code>JConnection.open(String)</code></a></dd></dl>
    - - #### call

```
public JSubroutineParameters call(String subroutineName,                                   JSubroutineParameters parameters)                            throws JSubroutineNotFoundException,                                   JRemoteException
```

Call jBASE subroutine.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#call-java.lang.String-com.jbase.jremote.JSubroutineParameters-">call</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Returns:</dt><dd>the result parameters from subroutine call</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JSubroutineNotFoundException.html" title="class in com.jbase.jremote">JSubroutineNotFoundException</a></code></dd><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt>See Also:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#open-java.lang.String-"><code>JConnection.open(String)</code></a></dd></dl>
    - - #### execute

```
public JExecuteResults execute(String command)                         throws JRemoteException
```

Description copied from interface: `JConnection`
Execute a jBASE command.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#execute-java.lang.String-">execute</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Returns:</dt><dd>the execute results</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### execute

```
public JExecuteResults execute(String command,                                JSelectList selectList)                         throws JRemoteException
```

Description copied from interface: `JConnection`
Execute a jBASE command using an existing select list as a filter.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#execute-java.lang.String-com.jbase.jremote.JSelectList-">execute</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Returns:</dt><dd>the execute results</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### date

```
public int date()          throws JRemoteException
```

Return the jBASE internal date.  Epoch Dec 31, 1967.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#date--">date</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Returns:</dt><dd>int internal date</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt>See Also:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#date--"><code>JConnection.date()</code></a></dd></dl>
    - - #### time

```
public int time()          throws JRemoteException
```

Return the jBASE internal time.  Seconds since midnight.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#time--">time</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Returns:</dt><dd>int internal time</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt>See Also:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#time--"><code>JConnection.time()</code></a></dd></dl>
    - - #### iconv

```
public String iconv(String data,                     String conversion)              throws JRemoteException
```

Description copied from interface: `JConnection`
Converts data in external format to internal format.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#iconv-java.lang.String-java.lang.String-">iconv</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Parameters:</dt><dd><code>data</code> - data to be converted</dd><dd><code>conversion</code> - the conversion command</dd><dt>Returns:</dt><dd>String the converted data</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### oconv

```
public String oconv(String data,                     String conversion)              throws JRemoteException
```

Description copied from interface: `JConnection`
Converts internal representations of data to their external form.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#oconv-java.lang.String-java.lang.String-">oconv</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Parameters:</dt><dd><code>data</code> - data to be converted</dd><dd><code>conversion</code> - the conversion command</dd><dt>Returns:</dt><dd>String the converted data</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### getCommon

```
public JDynArray getCommon(String name)                     throws JRemoteException
```

Return the value of the common with supplied name.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#getCommon-java.lang.String-">getCommon</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Returns:</dt><dd>JDynArray value</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt>See Also:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#getCommon-java.lang.String-"><code>JConnection.getCommon(java.lang.String name)</code></a></dd></dl>
    - - #### getMetaData

```
public EISMetaDataRepository getMetaData()                                   throws JRemoteException
```

Description copied from interface: `JConnection`
Return meta data of the connected jBASE instance.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#getMetaData--">getMetaData</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Returns:</dt><dd>EISMetaDataRepository meta data repository</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt>See Also:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#getMetaData--"><code>JConnection.getMetaData()</code></a></dd></dl>
    - - #### createStatement

```
public JStatement createStatement()                            throws JRemoteException
```

Description copied from interface: `JConnection`
Create a statement object that enables queries to be executed and a JResultSet returned.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#createStatement--">createStatement</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Returns:</dt><dd>JStatement jBase statement object</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt>See Also:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#createStatement--"><code>JConnection.createStatement()</code></a></dd></dl>
    - - #### createSelectList

```
public JSelectList createSelectList(JDynArray jd)                              throws JRemoteException
```

Description copied from interface: `JConnection`
Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#createSelectList-com.jbase.jremote.JDynArray-">createSelectList</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Parameters:</dt><dd><code>jd</code> - dynamic array containing the keys</dd><dt>Returns:</dt><dd>JSelectList select list</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt>See Also:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#createSelectList-com.jbase.jremote.JDynArray-"><code>JConnection.createSelectList(JDynArray)</code></a></dd></dl>
    - - #### begin

```
public void begin()            throws JRemoteException
```

Description copied from interface: `JConnection`
Begin a jBASE transaction.
If a transaction already exists then no action will be taken.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#begin--">begin</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt>See Also:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#commit--"><code>JConnection.commit()</code></a>, &nbsp;<a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#rollback--"><code>JConnection.rollback()</code></a></dd></dl>
    - - #### commit

```
public void commit()             throws JRemoteException
```

Description copied from interface: `JConnection`
Commit all pending jBASE operations performed in transaction  and mark as complete.
If no transaction exists then no action will be taken.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#commit--">commit</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt>See Also:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#begin--"><code>JConnection.begin()</code></a></dd></dl>
    - - #### rollback

```
public void rollback()               throws JRemoteException
```

Description copied from interface: `JConnection`
Rollback all jBASE operations performed in transaction and mark as complete.
If no transaction exists then no action will be taken.<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#rollback--">rollback</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt>See Also:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#begin--"><code>JConnection.begin()</code></a></dd></dl>
    - - #### setTerminalOutputWriter

```
public void setTerminalOutputWriter(Writer writer)
```
<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#setTerminalOutputWriter-java.io.Writer-">setTerminalOutputWriter</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd></dl>
    - - #### toString

```
public String toString()
```
<dl><dt>Overrides:</dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#toString--" title="class or interface in java.lang">toString</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true" title="class or interface in java.lang">Object</a></code></dd></dl>
    - - #### echo

```
public boolean echo(int length)              throws JRemoteException
```

 Send an echo request and waits for a reply.  <dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#echo-int-">echo</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Parameters:</dt><dd><code>length</code> - of echo packet to send.</dd><dt>Returns:</dt><dd>True = success</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### monitoring

```
public String monitoring(String command)                   throws JRemoteException
```

Sends an monitoring command and waits for it's response<dl><dt>Specified by:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html#monitoring-java.lang.String-">monitoring</a></code> in interface <code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JConnection.html" title="interface in com.jbase.jremote">JConnection</a></code></dd><dt>Parameters:</dt><dd><code>command</code> - to send</dd><dt>Returns:</dt><dd>respose string</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code> - if monitoring command fails</dd></dl>

