# JConnection (jrclient API)

**Created At:** 9/25/2017 11:28:35 AM  
**Updated At:** 9/20/2018 1:03:24 PM  
**Original Doc:** [com_jbase_jrcs_jconnection](https://docs.jbase.com/jrcs/com_jbase_jrcs_jconnection)  

<!-- try { if (location.href.indexOf('is-external=true') == -1) { parent.document.title="JConnection (jrclient API)"; } } catch(err) { } //--> var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10,"i21":10,"i22":10,"i23":10,"i24":10,"i25":10,"i26":10,"i27":10,"i28":10,"i29":10,"i30":10,"i31":10,"i32":10,"i33":10,"i34":10,"i35":10,"i36":10,"i37":10,"i38":10}; var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]}; var altColor = "altColor"; var rowColor = "rowColor"; var tableTab = "tableTab"; var activeTableTab = "activeTableTab"; &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;


# Class JConnection


```
public final class JConnection
```

Represents a connection to a jBASE host.

## Field Summary


| <br>Modifier and Type<br> | <br>Field<br> | Description<br> |
| --- | --- | --- |
| <br>static int<br> | <br>ENC\_OFF<br> | <br>Encryption off.<br> |
| <br>static int<br> | <br>ENC\_REQUIRED<br> | <br>Encryption required.<br> |
| <br>static int<br> | <br>ENC\_SUPPORTED<br> | <br>Encryption supported.<br> |
| <br>static int<br> | <br>EXEC\_GET\_CAPTURE<br> | <br>Passed to execute() or executeAndStore() to retrieve the capture string returned by executed command.<br> |
| <br>static int<br> | <br>EXEC\_GET\_RETURNLIST<br> | <br>Passed to execute() or executeAndStore() to retrieve the list returned by executed command.<br> |
| <br>static int<br> | EXEC\_GET\_RETURNSTRING<br> | <br>Passed to execute() or executeAndStore() to retrieve the return string of executed command.<br> |




### 


## Constructor Summary


| Constructor and Description<br> |
| --- |
| JConnection()<br> |








## Method Summary


| <br>Modifier and Type<br> | Method<br> | <br>Description<br> |
| --- | --- | --- |
| <br>void<br> | <br>abortTransaction(String transText)<br> | <br>Aborts the active transaction<br> |
| <br>[JCommon](./../jcommon-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | <br>attachCommon(int numVars, String name)<br> | <br>Attaches a common block by name with a given number of variables<br> |
| <br>void<br> | <br>call(String subName)<br> | <br>Calls a host-side subroutine passing it no parameters<br> |
| <br>void<br> | <br>call(String subName, [DynArray](./../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")[] parms)<br> | <br>Calls a host-side subroutine with given parameters<br> |
| <br>void<br> | call(String subName, String[] parms)<br> | <br>Calls a host-side subroutine with given parameters<br> |
| <br>void<br> | <br>close()<br> | <br>Closes the connection and ends the server-side jRCS proxy process<br> |
| <br>void<br> | <br>deleteList(String name)<br> | <br>Deletes the specified list from a work file<br> |
| <br>void<br> | <br>endTransaction(String transName)<br> | <br>Ends the active transaction<br> |
| <br>void<br> | <br>execute(String command)<br> | <br>Executes a jCL/jQL command ignoring its results<br> |
| <br>[JExecuteResults](./../jexecuteresults-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | <br>execute(String command, int flags)<br> | <br>Executes a jCL/jQL command and retrieves select parameters resulting from execution<br> |
| <br>[JExecuteResults](./../jexecuteresults-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | <br>execute(String command, int flags, [JSelectList](./../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs") passList)<br> | <br>Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution<br> |
| <br>[JExecuteResults](./../jexecuteresults-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | executeAndStore(String command, int flags)<br> | <br>Executes a jCL/jQL command and retrieves select parameters resulting from execution.<br> |
| <br>[JExecuteResults](./../jexecuteresults-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | <br>executeAndStore(String command, int flags, [JSelectList](./../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs") passList)<br> | <br>Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution.<br> |
| <br>[JExecuteResults](./../jexecuteresults-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | <br>executeAndStore(String command, int flags,[JSelectList](./../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs") passList, int blockSize)<br> | <br>Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution.<br> |
| <br>char<br> | <br>getAM()<br> | <br>Retrieves the attribute mark character for this connection<br> |
| <br>String<br> | <br>getCodePage()<br> | <br>Reserved for future use<br> |
| <br>protected com.jbase.jrcs.JConnector<br> |  getConnector()<br> | <br><br> |
| <br>int<br> | <br>getDataEncryptionLevel()<br> | <br><br> |
| <br>int<br> | <br>getDate()<br> | <br>Returns server date as an integer in internal format<br> |
| <br>Charset<br> | <br>getHostCharacterEncoding()<br> | <br>Returns the character set used to map Unicode strings onto byte sequences passed to the host and read from the host.<br> |
| <br>[JDynArray](./../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | getjBaseVersion()<br> | <br>Retrieves the version of jBASE database connected to this JConnection object<br> |
| <br>[JSelectList](./../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | <br>getList(String name)<br> | <br>Retrieves the specified list from a work file<br> |
| <br>String<br> | <br>getLocale()<br> | <br>Reserved for future use<br> |
| <br>int<br> | getPasswordEncryptionLevel()<br> | <br><br> |
| <br>int<br> | getPort()<br> | <br>Returns the jBASE port number (PIB) assigned to the logged on session<br> |
| <br>char<br> | <br>getSVM()<br> | <br>Retrieves the subvalue mark character for this connection<br> |
| <br>[JIOHandler](./../jiohandler-%28jrclient-api%29 "interface in com.jbase.jrcs")<br> | <br>getTermIOHandler()<br> | <br>Retrieves a reference to the current terminal I/O handler<br> |
| <br>int<br> | <br>getTime()<br> | <br>Retrieves the current server time as an integer in internal format<br> |
| <br>char<br> | <br>getVM()<br> | <br>Retrieves the value mark character for this connection<br> |
| <br>String<br> | <br>iConv(String source, String code)<br> | <br>Performs an input conversion of a string using a conversion code<br> |
| <br>String<br> | <br>oConv(String source, String code)<br> | <br>Performs an output conversion of a string using a conversion code<br> |
| <br>void<br> | <br>open(String host, int port, String userName, String password, String accountName)<br> | <br>Opens a TCP/IP connection to the given host and port and establishes a jRCS logon session with specified user name, password and account name<br> |
| <br>void<br> | <br>open(String host, String userName, String password)<br> | <br>Opens a TCP/IP connection to the given host and default jRCS port and establishes a jRCS logon session with specified user name and password<br> |
| <br>[JFile](./../jfile-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | <br>openFile(String fileName)<br> | <br>Opens a file with the given name<br> |
| <br>void<br> | <br>setDataEncryptionLevel(int dataEncryptionLevel)<br> | <br>Sets the current data encryption level.<br> |
| <br>void<br> | <br>setHostCharacterEncoding(Charset charSet)<br> | <br>Sets the character set used to map Unicode strings onto byte sequences passed to the host and read from the host.<br> |
| <br>void<br> | <br>setPasswordEncryptionLevel(int passwordEncryptionLevel)<br> | <br>Sets the current password encryption level.<br> |
| <br>void<br> | <br>setTermIOHandler([JIOHandler](./../jiohandler-%28jrclient-api%29 "interface in com.jbase.jrcs") handler)<br> | <br>Sets a terminal I/O handler<br> |
| <br>void<br> | <br>startTransaction(boolean sync, String transText)<br> | <br>Starts a transaction<br> |








## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

## Field Detail

#### **EXEC\_GET\_CAPTURE**

```
public static final int EXEC_GET_CAPTURE
```

Passed to execute() or executeAndStore() to retrieve the capture string returned by executed command


#### 


#### **EXEC\_GET\_RETURNSTRING**

```
public static final int EXEC_GET_RETURNSTRING
```

Passed to execute() or executeAndStore() to retrieve the return string of executed command



#### **EXEC\_GET\_RETURNLIST**

```
public static final int EXEC_GET_RETURNLIST
```

Passed to execute() or executeAndStore() to retrieve the list returned by executed command


#### 


#### **ENC\_REQUIRED**

```
public static final int ENC_REQUIRED
```

Encryption required


#### 


#### **ENC\_SUPPORTED**

```
public static final int ENC_SUPPORTED
```

Encryption supported


#### 


#### **ENC\_OFF**

```
public static final int ENC_OFF
```

Encryption off





## Constructor Detail

#### **JConnection**

```
public JConnection()
```



## Method Detail

#### **abortTransaction**

```
public void abortTransaction(String transText)
```

Aborts the active transaction

Parameters: `transText` - Text to be stored in the transaction file. This parameter can be a blank string ("")

Throws: `JException `





#### **getAM**

```
public char getAM()
```

Retrieves the attribute mark character for this connection

Returns: Attribute mark character







#### **getVM**

```
public char getVM()
```

Retrieves the value mark character for this connection.

Returns: Value mark character







#### **getSVM**

```
public char getSVM()
```

Retrieves the subvalue mark character for this connection

Returns: Subvalue mark character





#### **attachCommon**

```
public JCommon attachCommon(int numVars, String name)
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs") Attaches a common block by name with a given number of variables

Parameters:

`numVars` - Number of variables in the common block`        `

`name` - Name of the common block. To attach an unnamed common specify a blank string ("")

Returns: JCommon object representing the attached common block

Throws: `JException `







#### **call**

```
public void call(String subName, String[] parms)
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Calls a host-side subroutine with given parameters

Parameters:` `

`subName` - Subroutine name`  `

`parms` - An array of subroutine parameters.

The number of parameters must exactly match the jBC signature of the  subroutine.

Throws: `JException `

#### **call**

```
public void call(String subName)
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Calls a host-side subroutine passing it no parameters

Parameters:`        `

`    subName` - Subroutine name

Throws:` ``JException ```





#### **call**

```
public void call(String subName, JDynArray[] parms)
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Calls a host-side subroutine with given parameters

Parameters:` `

`subName` - Subroutine name

`parms` - An array of subroutine parameters in the form of dynamic arrays.

The number of parameters must exactly match the jBC signature of the subroutine.

Throws: `JException `

#### **close**

```
public void close()       
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Closes the connection and ends the server-side jRCS proxy process

Throws: `JException `





#### **getCodePage**

```
public String getCodePage()
```

Reserved for future use





#### **getDate**

```
public int getDate()
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Returns server date as an integer in internal format

Returns: Server date

Throws: `JException `



``

#### **deleteList**

```
public void deleteList(String name) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Deletes the specified list from a work file

Parameters:

`name` - Name of list to delete

Throws:`JException `

#### **endTransaction**

```
public void endTransaction(String transName)
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Ends the active transaction

Parameters:`        `

`transName` - Text to be stored in the transaction file. This parameter can be a blank string ("")

Throws: `JException `





#### **getList**

```
public JSelectList getList(String name)
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Retrieves the specified list from a work file

Parameters: `        `

`name` - Name of list to retrieve

Returns: JSelectList object representing the list read

Throws:` JException  `

#### 


#### 


#### **iConv**

```
public String iConv(String source, String code)
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Performs an input conversion of a string using a conversion code.

Parameters:

`source` - String to convert

`code` - Conversion code Returns:Converted string

Throws:`JException   ```

#### 


#### 


#### **getjBaseVersion**

```
public JDynArray getjBaseVersion()
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Retrieves the version of jBASE database connected to this JConnection object

Returns: jBASE version as a dynamic array

Throws: `JException `

#### 


#### 


#### **getLocale**

```
public String getLocale()
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Reserved for future use

Throws:`    JException`

#### 


#### 


#### **oConv**

```
public String oConv(String source, String code)
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Performs an output conversion of a string using a conversion code.

Parameters:`        `

`source` - String to convert `        `

`code` - Conversion code Returns: Converted string

Throws: `JException `

#### 


#### 


#### **open**

```
public void open(String host, int port, String userName, String password, String accountName)
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Opens a TCP/IP connection to the given host and port and establishes a jRCS logon session with specified user name, password and account name.

Parameters:

`host` - Host name or IP address to connect to

`port` - IP port number to connect to. Use JConstants.JRCS\_PORT for the default port number

`userName` - User name

`password` - User's password

`accountName` - Account name. This parameter can be a blank string (""). In this case the logon is performed to the home

directory of the user specified by the userName parameter

Throws: `JException `

#### 


#### 


#### **open**

```
public void open(String host, String userName, String password)
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Opens a TCP/IP connection to the given host and default jRCS port and establishes a jRCS logon session with specified username and password.

Parameters:

`host` - Host name or IP address to connect to`   `

`userName` - User name

`password` - User's password

Throws: `JException `

#### 


#### 


#### **openFile**

```
public JFile openFile(String fileName)
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Opens a file with the given name

Parameters:

`fileName` - Name of file to open. The names are case-sensitive on UNIX-like systems.  It is possible to specify DICT in front of the  name to open the dictionary portion of the file.

Returns: JFile object representing the open file.

Throws: `JException`

#### 


#### 


#### **getPort**

```
public int getPort()
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Returns the jBASE port number (PIB) assigned to the logged on session

Returns: Port (PIB) number corresponding to the current session.

Throws:`JException `

#### 


#### 


#### **startTransaction**

```
public void startTransaction(boolean sync, String transText)
```

throws `JException `

Starts a transaction

Parameters:

`sync` - Forces the subsequent end or abort of the transaction to flush all database updates

`transText` - Text to be stored in  the transaction file. It is possible to specify an empty string ("")

Throws: `JException `

#### 


#### 


#### **getTime**

```
public int getTime()
```

throws `JException `

Retrieves the current server time as an integer in internal format.

Returns: Current server time.

Throws:` JException`

#### 


#### 


#### **getConnector**

```
protected com.jbase.jrcs.JConnector getConnector() 
```

Throws:`JException`

#### 


#### 


#### **execute**

```
public JExecuteResults execute(String command, int flags, JSelectList passList)
```

throws `JException `

Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution.

Parameters:

`command` - Command to execute.

`flags` - A bit mask specifying parameters to return from the host. This can be any of the following:


| <br>EXEC\_GET\_CAPTURE<br> | <br>retrieves the capture string<br> |
| <br>EXEC\_GET\_RETURNLIST<br> | <br>retrieves the select list generated by the command<br> |
| <br>EXEC\_GET\_RETURNSTRING<br> | <br>retrieves the return string<br> |


`passList` - Select list to be passed to the command. This parameter can be null

Returns: JExecuteResults object with requested execution results.

Throws**:**`JException`

#### 


#### 


#### **execute**

```
public JExecuteResults execute(String command, int flags)
```

throws `JException `

Executes a jCL/jQL command and retrieves select parameters resulting from execution.

Parameters:

`command` - Command to execute.

`flags` - A bit mask specifying parameters to return from the host. See `execute(String,int, JSelectList).  `

Returns: JExecuteResults object with requested execution results.

Throws:` JException`

#### 


#### 


#### **execute**

```
public void execute(String command)
```

throws `JException `

xecutes a jCL/jQL command ignoring its results.

Parameters:

`command` - Command to execute.

Throws: `JException`

#### 


#### 


#### **executeAndStore**

```
public JExecuteResults executeAndStore(String command, int flags, JSelectList passList, int blockSize)
```

throws `JException `

Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution. The function retrieves a reference to a JCapture object to incrementally fetch the captured output.

Parameters:

`command` - Command to execute `flags` - A bit mask specifying parameters to return from the hostThis can be any of the following:


| <br>EXEC\_GET\_RETURNLIST<br> | <br>retrieves the select list generated by the command<br> |
| <br>EXEC\_GET\_RETURNSTRING<br> | <br>retrieves the return string<br> |


`passList` - Select list to be passed to the command. This parameter can be null.

`blockSize` - Initial block size for the capture.

Returns: JExecuteResults object with requested execution results.

Throws: `JException `



`  `

#### **executeAndStore**

```
public JExecuteResults executeAndStore(String command, int flags, JSelectList passList) 
```

throws `JException`

Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution. The

function retrieves a reference to a JCapture object to incrementally fetch the captured output.

Parameters:

`command` - Command to execute

`flags` - A bit mask specifying parameters to return from the host. See `executeAndStore(String, int, JSelectList, int)`

`passList` - Select list to be passed to the command. This parameter can be null.

Returns: JExecuteResults object with requested execution results.

Throws:`JException `





#### **executeAndStore**

```
public JExecuteResults executeAndStore(String command, int flags) 
```

throws `JException`

Executes a jCL/jQL command and retrieves select parameters resulting from execution. The function retrieves a reference to a JCapture object to incrementally fetch the captured output.

Parameters:

`command` - Command to execute.

`flags` - A bit mask specifying parameters to return from the host. See `executeAndStore(String, int, JSelectList, int) `

Returns: JExecuteResults object with requested execution results.

Throws: `JException`





#### **getTermIOHandler**

```
public JIOHandler getTermIOHandler() 
```

Retrieves a reference to the current terminal I/O handler.

Returns: Current terminal I/O handler or null if the default handler is used.





#### setTermIOHandler

```
public void setTermIOHandler(JIOHandler handler) 
```

Sets a terminal I/O handler

Parameters:

`handler` - New terminal I/O handler or null to use the default.







#### getHostCharacterEncoding

```
public Charset getHostCharacterEncoding() 
```

Returns the character set used to map Unicode strings onto byte sequences passed to the host and read from the host.

Returns: Current charset used to encode data passed to host.





#### **setHostCharacterEncoding**

```
public void setHostCharacterEncoding(Charset charSet) 
```

Sets the character set used to map Unicode strings onto byte sequences passed to the host and read from the host.

Parameters:

`charSet` - A Charset object used to perform character mapping. If this parameter is null, the encoding defaults to Windows Latin-1.





#### **getDataEncryptionLevel**

```
public int getDataEncryptionLevel() 
```

Returns: Current data encryption level setting.





#### setDataEncryptionLevel

```
public void setDataEncryptionLevel(int dataEncryptionLevel) 
```

throws `JException`

Sets the current data encryption level.

Parameters:

`dataEncryptionLevel` - Data encryption level to set (ENC\_REQUIRED to ENC\_OFF)

Throws: `JException` - Encryption level specified is invalid or connection is already active.





#### **getPasswordEncryptionLevel**

```
public int getPasswordEncryptionLevel() 
```

Returns: Current password encryption level setting.





#### **setPasswordEncryptionLevel**

```
public void setPasswordEncryptionLevel(int passwordEncryptionLevel) 
```

throws `JException`

Sets the current password encryption level.

Parameters:

`passwordEncryptionLevel` - Password encryption level to set (ENC\_REQUIRED to ENC\_OFF).

Throws: `JException` - Encryption level specified is invalid or connection is already active.
