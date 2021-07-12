# JConnection (jremote API)

<PageHeader />

## Interface JConnection

All Known Subinterfaces:[JXAConnection](./../jxaconnection-(jremote-api) "interface in com.jbase.jremote") 

All Known Implementing Classes:[JConnectionImpl](./../io/jconnectionimpl-(jremote-api) "class in com.jbase.jremote.io"), [WrappedJConnection](./../jca/wrappedjconnection-(jremote-api) "class in com.jbase.jremote.jca")

* * *

```java
public interface JConnection
```

The connection to a remote jBASE instance.

### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| `static Charset` | `DEFAULT_CHARSET`  |
| `static String` | `JBASE_DEFAULT_ENCODING`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `begin()`<br>Begin a jBASE transaction. |
| `JSubroutineParameters` | `call(String subroutineName, JSubroutineParameters parameters)`<br>Call a jBASE subroutine. |
| `void` | `close()`<br>Close any resources used by this connection. |
| `void` | `commit()`<br>Commit all pending jBASE operations performed in transaction and mark as complete. |
| `JSelectList` | `createSelectList(JDynArray jd)`<br>Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers. |
| `JStatement` | `createStatement()`<br>Create a statement object that enables queries to be executed and a JResultSet returned. |
| `int` | `date()`<br>Return the jBASE internal date. |
| `boolean` | `echo(int length)`<br>Sends an echo and waits for it's response |
| `JExecuteResults` | `execute(String command)`<br>Execute a jBASE command. |
| `JExecuteResults` | `execute(String command, JSelectList selectList)`<br>Execute a jBASE command using an existing select list as a filter. |
| `Charset` | `getCharset()`<br>Get the Charset for this connection. |
| `JDynArray` | `getCommon(String name)`<br>Return the value of the named common with the supplied name. |
| `EISMetaDataRepository` | `getMetaData()`<br>Return meta data of the connected jBASE instance. |
| `String` | `iconv(String data, String conversion)`<br>Converts data in external format to internal format. |
| `String` | `monitoring(String command)`<br>Sends an monitoring command and waits for it's response |
| `JDynArray` | `newJDynArray()`<br>Create a JDynArray with the correct Charset for this connection. |
| `JDynArray` | `newJDynArray(String str)`  |
| `String` | `oconv(String data, String conversion)`<br>Converts internal representations of data to their external form. |
| `JFile` | `open(String fileName)`<br>Attempts to open a jBASE file or returns null if the file does not exist. |
| `void` | `rollback()`<br>Rollback all jBASE operations performed in transaction and mark as complete. |
| `void` | `setTerminalOutputWriter(Writer writer)`  |
| `boolean` | `switchAccount(String user, String account, String password)`<br>Log into the specified jBASE account. |
| `int` | `time()`<br>Return the jBASE internal time. |

### Field Detail

#### JBASE\_DEFAULT\_ENCODING

```java
static final String JBASE_DEFAULT_ENCODING
```

#### DEFAULT\_CHARSET

```java
static final Charset DEFAULT_CHARSET
```

### Method Detail

#### setTerminalOutputWriter

```java
void setTerminalOutputWriter(Writer writer)
```

#### newJDynArray

```java
JDynArray newJDynArray()
```

Create a JDynArray with the correct Charset for this connection.

#### newJDynArray

```java
JDynArray newJDynArray(String str)
```

#### getCharset

```java
Charset getCharset()
```

Get the Charset for this connection. This is used on String operations to convert the bytes received from jBASE to a Java UTF-16 String.

#### switchAccount

```java
boolean switchAccount(String user,
                      String account,
                      String password)
               throws JRemoteException
```

Log into the specified jBASE account.
Parameters:`user` - username that belongs to the account`account` - name of the account to log into`password` - password of the account to log into  
Returns:boolean  
Throws:`JRemoteException`

#### close

```java
void close()
    throws JRemoteException
```

Close any resources used by this connection.
Throws:`JRemoteException`

#### open

```java
JFile open(String fileName)
    throws JRemoteException
```

Attempts to open a jBASE file or returns null if the file does not exist.

Parameters:`fileName`
Returns:JFile  
Throws:`JRemoteException`

#### call

```java
JSubroutineParameters call(String subroutineName,
                           JSubroutineParameters parameters)
                    throws JSubroutineNotFoundException,
                           JRemoteException
```

Call a jBASE subroutine.
Parameters:`subroutineName` -`parameters`   
Returns:the result parameters from subroutine call  
Throws:`JSubroutineNotFoundException``JRemoteException`

#### execute

```java
JExecuteResults execute(String command)
                 throws JRemoteException
```

Execute a jBASE command.
Parameters:`command`  
Returns:the execute results  
Throws:`JRemoteException`

#### execute

```java
JExecuteResults execute(String command,
                        JSelectList selectList)
                 throws JRemoteException
```

Execute a jBASE command using an existing select list as a filter.
Parameters:`command` -`selectList`  
Returns:the execute results  
Throws:`JRemoteException`

#### begin

```java
void begin()
    throws JRemoteException
```

Begin a jBASE transaction.

If a transaction already exists then no action will be taken.
Throws:`JRemoteException`  
See Also:`commit()`, `rollback()`

#### commit

```java
void commit()
     throws JRemoteException
```

Commit all pending jBASE operations performed in transaction and mark as complete.

If no transaction exists then no action will be taken.
Throws:`JRemoteException`  
See Also:`begin()`

#### rollback

```java
void rollback()
       throws JRemoteException
```

Rollback all jBASE operations performed in transaction and mark as complete.

If no transaction exists then no action will be taken.
Throws:`JRemoteException`See Also:`begin()`

#### date

```java
int date()
  throws JRemoteException
```

Return the jBASE internal date. Epoch Dec 31, 1967.
Returns:int internal dateThrows:`JRemoteException`


#### time

```java
int time()
  throws JRemoteException
```

Return the jBASE internal time. Seconds since midnight.
Returns:int internal time  
Throws:`JRemoteException`

#### getCommon

```java
JDynArray getCommon(String name)
             throws JRemoteException
```

Return the value of the named common with the supplied name.
Parameters:`name`  
Returns:JDynArray value  
Throws:`JRemoteException`


#### getMetaData

```
EISMetaDataRepository getMetaData()
                           throws JRemoteException
```

Return meta data of the connected jBASE instance.
Returns:EISMetaDataRepository meta data repositoryThrows:`JRemoteException`

#### iconv

```java
String iconv(String data,
             String conversion)
      throws JRemoteException
```

Converts data in external format to internal format.
Parameters:`data` - data to be converted`conversion` - the conversion command  
Returns:String the converted data  
Throws:`JRemoteException`

#### oconv

```java
String oconv(String data,
             String conversion)
      throws JRemoteException
```

Converts internal representations of data to their external form.
Parameters:`data` - data to be converted`conversion` - the conversion command  
Returns:String the converted data  
Throws:`JRemoteException`

#### createStatement

```java
JStatement createStatement()
                    throws JRemoteException
```

Create a statement object that enables queries to be executed and a JResultSet returned.
Returns:JStatement jBase statement object  
Throws:`JRemoteException`

#### createSelectList

```java
JSelectList createSelectList(JDynArray jd)
                      throws JRemoteException
```

Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.
Parameters:`jd` - dynamic array containing the keys  
Returns:JSelectList select list  
Throws:`JRemoteException`

#### echo

```java
boolean echo(int length)
      throws JRemoteException
```

Sends an echo and waits for it's response
Parameters:`length` - of echo packet to send.  
Returns:True = success  
Throws:`JRemoteException` - if echo fails

#### monitoring

```java
String monitoring(String command)
           throws JRemoteException
```

Sends an monitoring command and waits for it's response
Parameters:`command` - to send  
Returns:respose string  
Throws:`JRemoteException` - if monitoring command fails

Back to [jRemote API](./../../README.md)
  
<PageFooter />
