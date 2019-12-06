# JConnection (jremote API)

**Created At:** 9/25/2017 12:08:55 PM  
**Updated At:** 4/4/2018 1:07:14 AM  

<noscript>&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

<!--   -->
<!-- ========= END OF TOP NAVBAR ========= --><!-- ======== START OF CLASS DATA ======== -->
## Interface JConnection

<dt>All Known Subinterfaces:</dt><dd><a href="/39248-jremote/com_jbase_jremote_JXAConnection" title="interface in com.jbase.jremote">JXAConnection</a>&nbsp;</dd>

<dl><dt>All Known Implementing Classes:</dt><dd><a href="/39250-io/com_jbase_jremote_io_JConnectionImpl" title="class in com.jbase.jremote.io">JConnectionImpl</a>, <a href="com_jbase_jremote_jca_wrappedjconnection" title="class in com.jbase.jremote.jca">WrappedJConnection</a></dd></dl><dl><dt><br></dt></dl>
* * *


```
public interface JConnection
```

The connection to a remote jBASE instance.
<dl><dt><br></dt><dd><br></dd></dl>

<!--   -->

### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static Charset`<br> | `DEFAULT_CHARSET` <br> |
| `static String`<br> | `JBASE_DEFAULT_ENCODING` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `begin()`<br>Begin a jBASE transaction.<br> |
| `JSubroutineParameters`<br> | `call(String subroutineName, JSubroutineParameters parameters)`<br>Call a jBASE subroutine.<br> |
| `void`<br> | `close()`<br>Close any resources used by this connection.<br> |
| `void`<br> | `commit()`<br>Commit all pending jBASE operations performed in transaction and mark as complete.<br> |
| `JSelectList`<br> | `createSelectList(JDynArray jd)`<br>Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.<br> |
| `JStatement`<br> | `createStatement()`<br>Create a statement object that enables queries to be executed and a JResultSet returned.<br> |
| `int`<br> | `date()`<br>Return the jBASE internal date.<br> |
| `boolean`<br> | `echo(int length)`<br>Sends an echo and waits for it's response<br> |
| `JExecuteResults`<br> | `execute(String command)`<br>Execute a jBASE command.<br> |
| `JExecuteResults`<br> | `execute(String command, JSelectList selectList)`<br>Execute a jBASE command using an existing select list as a filter.<br> |
| `Charset`<br> | `getCharset()`<br>Get the Charset for this connection.<br> |
| `JDynArray`<br> | `getCommon(String name)`<br>Return the value of the named common with the supplied name.<br> |
| `EISMetaDataRepository`<br> | `getMetaData()`<br>Return meta data of the connected jBASE instance.<br> |
| `String`<br> | `iconv(String data, String conversion)`<br>Converts data in external format to internal format.<br> |
| `String`<br> | `monitoring(String command)`<br>Sends an monitoring command and waits for it's response<br> |
| `JDynArray`<br> | `newJDynArray()`<br>Create a JDynArray with the correct Charset for this connection.<br> |
| `JDynArray`<br> | `newJDynArray(String str)` <br> |
| `String`<br> | `oconv(String data, String conversion)`<br>Converts internal representations of data to their external form.<br> |
| `JFile`<br> | `open(String fileName)`<br>Attempts to open a jBASE file or returns null if the file does not exist.<br> |
| `void`<br> | `rollback()`<br>Rollback all jBASE operations performed in transaction and mark as complete.<br> |
| `void`<br> | `setTerminalOutputWriter(Writer writer)` <br> |
| `boolean`<br> | `switchAccount(String user, String account, String password)`<br>Log into the specified jBASE account.<br> |
| `int`<br> | `time()`<br>Return the jBASE internal time.<br> |

#### 
<!--   -->


### Field Detail
<!--   -->
#### JBASE\_DEFAULT\_ENCODING

```
static final String JBASE_DEFAULT_ENCODING
```
<dl><dd style="margin-left: 20px;"><br></dd></dl>
#### DEFAULT\_CHARSET

```
static final Charset DEFAULT_CHARSET
```



<!--   -->

### Method Detail
<!--   -->
#### setTerminalOutputWriter

```
void setTerminalOutputWriter(Writer writer)
```

#### newJDynArray

```
JDynArray newJDynArray()
```

Create a JDynArray with the correct Charset for this connection.

#### newJDynArray

```
JDynArray newJDynArray(String str)
```

#### getCharset

```
Charset getCharset()
```

Get the Charset for this connection. This is used on String operations to convert the bytes received from jBASE to a Java UTF-16 String.

#### switchAccount

```
boolean switchAccount(String user,
                      String account,
                      String password)
               throws JRemoteException
```

Log into the specified jBASE account.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>user</code> - username that belongs to the account</dd><dd style="margin-left: 20px;"><code>account</code> - name of the account to log into</dd><dd style="margin-left: 20px;"><code>password</code> - password of the account to log into</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">boolean</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd></dl>
#### 

#### 


#### close

```
void close()
    throws JRemoteException
```

Close any resources used by this connection.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
#### 

#### 


#### open

```
JFile open(String fileName)
    throws JRemoteException
```

Attempts to open a jBASE file or returns null if the file does not exist.
<dl><dt style="margin-left: 20px;"><br><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>fileName</code> -</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JFile</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd></dl>
#### call

```
JSubroutineParameters call(String subroutineName,
                           JSubroutineParameters parameters)
                    throws JSubroutineNotFoundException,
                           JRemoteException
```

Call a jBASE subroutine.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>subroutineName</code> -</dd><dd style="margin-left: 20px;"><code>parameters</code> -</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">the result parameters from subroutine call</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JSubroutineNotFoundException</code></dd><dd style="margin-left: 20px;"><code>JRemoteException</code></dd></dl>

#### execute

```
JExecuteResults execute(String command)
                 throws JRemoteException
```

Execute a jBASE command.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>command</code> -</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">the execute results</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### execute

```
JExecuteResults execute(String command,
                        JSelectList selectList)
                 throws JRemoteException
```

Execute a jBASE command using an existing select list as a filter.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>command</code> -</dd><dd style="margin-left: 20px;"><code>selectList</code> -</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">the execute results</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd></dl>

#### begin

```
void begin()
    throws JRemoteException
```

Begin a jBASE transaction.

If a transaction already exists then no action will be taken.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>commit()</code>, <code>rollback()</code></dd><p style="margin-left: 20px;"><br></p></dl>
#### commit

```
void commit()
     throws JRemoteException
```

Commit all pending jBASE operations performed in transaction and mark as complete.

If no transaction exists then no action will be taken.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>begin()</code></dd></dl>


#### rollback

```
void rollback()
       throws JRemoteException
```

Rollback all jBASE operations performed in transaction and mark as complete.

If no transaction exists then no action will be taken.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>begin()</code></dd></dl>


#### date

```
int date()
  throws JRemoteException
```

Return the jBASE internal date. Epoch Dec 31, 1967.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">int internal date</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd></dl>


#### time

```
int time()
  throws JRemoteException
```

Return the jBASE internal time. Seconds since midnight.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">int internal time</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd></dl>


#### getCommon

```
JDynArray getCommon(String name)
             throws JRemoteException
```

Return the value of the named common with the supplied name.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>name</code> -</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JDynArray value</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd></dl>


#### getMetaData

```
EISMetaDataRepository getMetaData()
                           throws JRemoteException
```

Return meta data of the connected jBASE instance.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">EISMetaDataRepository meta data repository</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd></dl>


#### iconv

```
String iconv(String data,
             String conversion)
      throws JRemoteException
```

Converts data in external format to internal format.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>data</code> - data to be converted</dd><dd style="margin-left: 20px;"><code>conversion</code> - the conversion command</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">String the converted data</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd></dl>


#### oconv

```
String oconv(String data,
             String conversion)
      throws JRemoteException
```

Converts internal representations of data to their external form.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>data</code> - data to be converted</dd><dd style="margin-left: 20px;"><code>conversion</code> - the conversion command</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">String the converted data</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd></dl>


#### createStatement

```
JStatement createStatement()
                    throws JRemoteException
```

Create a statement object that enables queries to be executed and a JResultSet returned.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JStatement jBase statement object</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd></dl>


#### createSelectList

```
JSelectList createSelectList(JDynArray jd)
                      throws JRemoteException
```

Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>jd</code> - dynamic array containing the keys</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JSelectList select list</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd></dl>


#### echo

```
boolean echo(int length)
      throws JRemoteException
```

Sends an echo and waits for it's response
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>length</code> - of echo packet to send.</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">True = success</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code> - if echo fails</dd></dl>


#### monitoring

```
String monitoring(String command)
           throws JRemoteException
```

Sends an monitoring command and waits for it's response
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>command</code> - to send</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">respose string</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code> - if monitoring command fails</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->

Back to [jREMOTE API](com_jbase_jremote_package-summary)
