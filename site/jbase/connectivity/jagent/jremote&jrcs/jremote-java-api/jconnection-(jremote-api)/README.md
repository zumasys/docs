# JConnection (jremote API)

<PageHeader />

## Interface JConnection

All Known Subinterfaces:[JXAConnection](./../jxaconnection-(jremote-api) "interface in com.jbase.jremote") 

All Known Implementing Classes:[JConnectionImpl](./../io/jconnectionimpl-(jremote-api) "class in com.jbase.jremote.io"), [WrappedJConnection](./../jca/wrappedjconnection-(jremote-api) "class in com.jbase.jremote.jca")

* * *


```
public interface JConnection
```

The connection to a remote jBASE instance.

### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static Charset`<br> | `DEFAULT_CHARSET` <br> |
| `static String`<br> | `JBASE_DEFAULT_ENCODING` <br> |






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



### Field Detail

#### JBASE\_DEFAULT\_ENCODING

```
static final String JBASE_DEFAULT_ENCODING
```


#### DEFAULT\_CHARSET

```
static final Charset DEFAULT_CHARSET
```





### Method Detail

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
Parameters:`user` - username that belongs to the account`account` - name of the account to log into`password` - password of the account to log intoReturns:booleanThrows:`JRemoteException`
#### 

#### 


#### close

```
void close()
    throws JRemoteException
```

Close any resources used by this connection.
Throws:`JRemoteException`
#### 

#### 


#### open

```
JFile open(String fileName)
    throws JRemoteException
```

Attempts to open a jBASE file or returns null if the file does not exist.

Parameters:`fileName` -Returns:JFileThrows:`JRemoteException`
#### call

```
JSubroutineParameters call(String subroutineName,
                           JSubroutineParameters parameters)
                    throws JSubroutineNotFoundException,
                           JRemoteException
```

Call a jBASE subroutine.
Parameters:`subroutineName` -`parameters` -Returns:the result parameters from subroutine callThrows:`JSubroutineNotFoundException``JRemoteException`

#### execute

```
JExecuteResults execute(String command)
                 throws JRemoteException
```

Execute a jBASE command.
Parameters:`command` -Returns:the execute resultsThrows:`JRemoteException`


#### execute

```
JExecuteResults execute(String command,
                        JSelectList selectList)
                 throws JRemoteException
```

Execute a jBASE command using an existing select list as a filter.
Parameters:`command` -`selectList` -Returns:the execute resultsThrows:`JRemoteException`

#### begin

```
void begin()
    throws JRemoteException
```

Begin a jBASE transaction.

If a transaction already exists then no action will be taken.
Throws:`JRemoteException`See Also:`commit()`, `rollback()`


#### commit

```
void commit()
     throws JRemoteException
```

Commit all pending jBASE operations performed in transaction and mark as complete.

If no transaction exists then no action will be taken.
Throws:`JRemoteException`See Also:`begin()`


#### rollback

```
void rollback()
       throws JRemoteException
```

Rollback all jBASE operations performed in transaction and mark as complete.

If no transaction exists then no action will be taken.
Throws:`JRemoteException`See Also:`begin()`


#### date

```
int date()
  throws JRemoteException
```

Return the jBASE internal date. Epoch Dec 31, 1967.
Returns:int internal dateThrows:`JRemoteException`


#### time

```
int time()
  throws JRemoteException
```

Return the jBASE internal time. Seconds since midnight.
Returns:int internal timeThrows:`JRemoteException`


#### getCommon

```
JDynArray getCommon(String name)
             throws JRemoteException
```

Return the value of the named common with the supplied name.
Parameters:`name` -Returns:JDynArray valueThrows:`JRemoteException`


#### getMetaData

```
EISMetaDataRepository getMetaData()
                           throws JRemoteException
```

Return meta data of the connected jBASE instance.
Returns:EISMetaDataRepository meta data repositoryThrows:`JRemoteException`


#### iconv

```
String iconv(String data,
             String conversion)
      throws JRemoteException
```

Converts data in external format to internal format.
Parameters:`data` - data to be converted`conversion` - the conversion commandReturns:String the converted dataThrows:`JRemoteException`


#### oconv

```
String oconv(String data,
             String conversion)
      throws JRemoteException
```

Converts internal representations of data to their external form.
Parameters:`data` - data to be converted`conversion` - the conversion commandReturns:String the converted dataThrows:`JRemoteException`


#### createStatement

```
JStatement createStatement()
                    throws JRemoteException
```

Create a statement object that enables queries to be executed and a JResultSet returned.
Returns:JStatement jBase statement objectThrows:`JRemoteException`


#### createSelectList

```
JSelectList createSelectList(JDynArray jd)
                      throws JRemoteException
```

Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.
Parameters:`jd` - dynamic array containing the keysReturns:JSelectList select listThrows:`JRemoteException`


#### echo

```
boolean echo(int length)
      throws JRemoteException
```

Sends an echo and waits for it's response
Parameters:`length` - of echo packet to send.Returns:True = successThrows:`JRemoteException` - if echo fails


#### monitoring

```
String monitoring(String command)
           throws JRemoteException
```

Sends an monitoring command and waits for it's response
Parameters:`command` - to sendReturns:respose stringThrows:`JRemoteException` - if monitoring command fails



Back to [jRemote API](../../../../jremote-api/README.md)

  
<PageFooter />
