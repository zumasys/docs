# JConnection

**Created At:** 9/13/2017 7:45:49 PM  
**Updated At:** 4/3/2018 9:50:36 PM  


# Interface JConnection
All Known Subinterfaces:[JXAConnection](jxaconnection "interface in com.jbase.jremote")All Known Implementing Classes:[JConnectionImpl](jconnectionimpl "class in com.jbase.jremote.io"), [WrappedJConnection](wrappedjconnection "class in com.jbase.jremote.jca")
```
public interface JConnection
```



The connection to a remote jBASE instance.




#  

# Field Summary


| <br>Modifier and Type<br> | <br>Field and Description<br> |
| --- | --- |
| <br>static [Charset](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true "class or interface in java.nio.charset")<br> | <br>DEFAULT\_CHARSET<br> |
| <br>static [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>JBASE\_DEFAULT\_ENCODING<br> |




#  

# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> | <br>Description<br> |
| --- | --- | --- |
| <br>void<br> | <br>begin()<br> | <br>Begin a jBASE transaction.<br> |
| <br>[JSubroutineParameters](com_jbase_jremote_JSubroutineParameters "class in com.jbase.jremote")<br> | <br>call([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") subroutineName,     [JSubroutineParameters](file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JSubroutineParameters.html "class in com.jbase.jremote") parameters)<br> | <br>Call a jBASE subroutine.<br> |
| <br>void<br> | <br>close()<br> | <br>Close any resources used by this connection.<br> |
| <br>void<br> | <br>commit()<br> | <br>Commit all pending jBASE operations performed in transaction  and mark as complete.<br> |
| <br>[JSelectList](com_jbase_jremote_JSelectList "interface in com.jbase.jremote")<br> | <br>createSelectList([JDynArray](com_jbase_jremote_JDynArray "class in com.jbase.jremote") jd)<br> | <br>Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.<br> |
| <br>[JStatement](com_jbase_jremote_JStatement "interface in com.jbase.jremote")<br> | <br>createStatement()<br> | <br>Create a statement object that enables queries to be executed and a JResultSet returned.<br> |
| <br>int<br> | <br>date()<br> | <br>Return the jBASE internal date.<br> |
| <br>boolean<br> | <br>echo(int length)<br> | <br>Sends an echo and waits for it's response<br> |
| <br>[JExecuteResults](com_jbase_jremote_JExecuteResults "class in com.jbase.jremote")<br> | <br>execute([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") command)<br> | <br><br> |
| <br>[JExecuteResults](com_jbase_jremote_JExecuteResults "class in com.jbase.jremote")<br> | <br>execute([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") command, [JSelectList](com_jbase_jremote_JSelectList "interface in com.jbase.jremote") selectList)<br> | <br>Execute a jBASE command using an existing select list as a filter.<br> |
| <br>[Charset](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true "class or interface in java.nio.charset")<br> | <br>getCharset()<br> | <br>Get the Charset for this connection.<br> |
| <br>[JDynArray](com_jbase_jremote_JDynArray "class in com.jbase.jremote")<br> | <br>getCommon([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") name)<br> | <br>Return the value of the named common with the supplied name.<br> |
| <br>[EISMetaDataRepository](com_jbase_jremote_EISMetaDataRepository "class in com.jbase.jremote")<br> | <br>getMetaData()<br> | <br>Return meta data of the connected jBASE instance.<br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>iconv([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") data, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") conversion)<br> | <br>Converts data in external format to internal format.<br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>monitoring([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") command)<br> | <br>Sends an monitoring command and waits for it's response.<br> |
| <br>[JDynArray](com_jbase_jremote_JDynArray "class in com.jbase.jremote")<br> | <br>newJDynArray()<br> | <br>Create a JDynArray with the correct Charset for this connection.<br> |
| <br>[JDynArray](file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JDynArray.html "class in com.jbase.jremote")<br> | <br>newJDynArray([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") str)<br> | <br><br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>oconv([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") data, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") conversion)<br> | <br>Converts internal representations of data to their external form.<br> |
| <br>[JFile](com_jbase_jremote_JFile "interface in com.jbase.jremote")<br> | <br>open([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") fileName)<br> | <br>Attempts to open a jBASE file or returns null if the file does not exist.<br> |
| <br>void<br> | <br>rollback()<br> | <br>Rollback all jBASE operations performed in transaction and mark as complete.<br> |
| <br>void<br> | <br>setTerminalOutputWriter([Writer](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Writer.html?is-external=true "class or interface in java.io") writer)<br> | <br><br> |
| <br>boolean<br> | <br>switchAccount([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") user, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") account, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") password)<br> | <br>Log into the specified jBASE account.<br> |
| <br>int<br> | <br>time()<br> | <br>Return the jBASE internal time.<br> |






# Field Detail 

#### **JBASE\_DEFAULT\_ENCODING**

```
static final String JBASE_DEFAULT_ENCODING
```

**See Also:**[Constant Field Values](299736-constant-values)




#### **DEFAULT\_CHARSET**

```
static final Charset DEFAULT_CHARSET
```





# Method Detail



#### **setTerminalOutputWriter**

```
void setTerminalOutputWriter(Writer writer)
```





#### **newJDynArray**

```
JDynArray newJDynArray()
```



Create a JDynArray with the correct Charset for this connection.





#### **newJDynArray**

```
JDynArray newJDynArray(String str)
```





#### **getCharset**

```
Charset getCharset()
```



Get the Charset for this connection.  This is used on String operations to convert the bytes received from jBASE to a Java UTF-16 String.





#### **switchAccount**

```
boolean switchAccount(String user, String account, String password)
                throws JRemoteException
```



Log into the specified jBASE account.

**Parameters:**`user` - username that belongs to the account`account` - name of the account to log into`password` - password of the account to log into
**Returns:**boolean
**Throws:**`JRemoteException`




#### **close**

```
void close()
     throws JRemoteException
```



Close any resources used by this connection.

**Throws:**`JRemoteException`




#### **open**

```
JFile open(String fileName)
     throws JRemoteException
```



Attempts to open a jBASE file or returns null if the file does not exist.

**Parameters:**`    fileName` - 
**Returns:**JFile
**Throws:**`JRemoteException`




#### **call**

```
JSubroutineParameters call(String subroutineName, JSubroutineParameters parameters)
                    throws JSubroutineNotFoundException, JRemoteException
```



Call a jBASE subroutine.

**Parameters:**`subroutineName` - `parameters` -
**Returns:**the result parameters from subroutine call
**Throws:**`JSubroutineNotFoundException``JRemoteException`




#### execute

```
JExecuteResults execute(String command)
                  throws JRemoteException
```



Execute a jBASE command.

**Parameters:**`command` - 
**Returns:**the execute results
**Throws:**`JRemoteException`




#### **execute**

```
JExecuteResults execute(String command, JSelectList selectList)
                  throws JRemoteException
```



Execute a jBASE command using an existing select list as a filter.

**Parameters:**`command` - `selectList` - 
**Returns:**the execute results
**Throws:**`JRemoteException`




#### **begin**

```
void begin()
     throws JRemoteException
```



Begin a jBASE transaction.

If a transaction already exists then no action will be taken.

**Throws:**`JRemoteException`
**See Also:**[`commit()`](com_jbase_jremote_JConnection),  [`rollback()`](com_jbase_jremote_JConnection)




#### **commit**

```
void commit()
      throws JRemoteException
```



Commit all pending jBASE operations performed in transaction  and mark as complete.

If no transaction exists then no action will be taken.

**Throws:**`JRemoteException`
**See Also:**[`begin()`](com_jbase_jremote_JConnection)




#### **rollback**

```
void rollback()
        throws JRemoteException
```



Rollback all jBASE operations performed in transaction and mark as complete.

If no transaction exists then no action will be taken.

**Throws:**`JRemoteException`
**See Also:**[`begin()`](com_jbase_jremote_JConnection)




#### **date**

```
int date()
   throws JRemoteException
```



Return the jBASE internal date.  Epoch Dec 31, 1967.

**Returns:**int internal date

**Throws:**`JRemoteException`




#### **time**

```
int time()
   throws JRemoteException
```



Return the jBASE internal time.  Seconds since midnight.

**Returns:**int internal time
**Throws:**`JRemoteException`




#### **getCommon**

```
JDynArray getCommon(String name)
              throws JRemoteException
```



Return the value of the named common with the supplied name.

**Parameters:**`name` - 
**Returns:**JDynArray value
**Throws:**`JRemoteException`




#### **getMetaData**

```
EISMetaDataRepository getMetaData()
                            throws JRemoteException
```



Return meta data of the connected jBASE instance.

**Returns:**EISMetaDataRepository meta data repository
**Throws:**`JRemoteException`


#### **iconv**

```
String iconv(String data, String conversion)
       throws JRemoteException
```



Converts data in external format to internal format.
**Parameters:**`data` - data to be converted`conversion` - the conversion command**Returns:**String the converted data
**Throws:**`JRemoteException`




#### **oconv**

```
String oconv(String data, String conversion)
       throws JRemoteException
```



Converts internal representations of data to their external form.

**Parameters:**`data` - data to be converted`conversion` - the conversion command
**Returns:**String the converted data
**Throws:**`JRemoteException`




#### **createStatement**

```
JStatement createStatement()
                     throws JRemoteException
```



Create a statement object that enables queries to be executed and a JResultSet returned.

**Returns:**JStatement jBase statement object
**Throws:**`JRemoteException`




#### createSelectList

```
JSelectList createSelectList(JDynArray jd)
                       throws JRemoteException
```



Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.

**Parameters:**`    jd` - dynamic array containing the keys
**Returns:**JSelectList select list
**Throws:**`JRemoteException`




#### **echo**

```
boolean echo(int length)
       throws JRemoteException
```



Sends an echo and waits for it's response

**Parameters:**`    length` - of echo packet to send.
**Returns:**True = success
**Throws:**`JRemoteException` - if echo fails




#### **monitoring**

```
String monitoring(String command)
            throws JRemoteException
```



Sends an monitoring command and waits for it's response

**Parameter**s:`    command` - to send
**Returns:**respose string
**Throws:**`JRemoteException` - if monitoring command fails