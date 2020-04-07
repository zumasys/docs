# JConnection (jrclient API)

<PageHeader /> 

## Class JConnection

``` java
public final class JConnection
```

Represents a connection to a jBASE host.

## Field Summary

| Modifier and Type | Field | Description |
| --- | --- | --- |
| static int | ENC\_OFF | Encryption off. |
| static int | ENC\_REQUIRED | Encryption required. |
| static int | ENC\_SUPPORTED | Encryption supported. |
| static int | EXEC\_GET\_CAPTURE | Passed to execute() or executeAndStore() to retrieve the capture string returned by executed command. |
| static int | EXEC\_GET\_RETURNLIST | Passed to execute() or executeAndStore() to retrieve the list returned by executed command. |
| static int | EXEC\_GET\_RETURNSTRING | Passed to execute() or executeAndStore() to retrieve the return string of executed command. |

## Constructor Summary

| Constructor and Description |
| --- |
| JConnection() |

## Method Summary

| Modifier and Type | Method | Description |
| --- | --- | --- |
| void | abortTransaction(String transText) | Aborts the active transaction |
| [JCommon](./../jcommon-jrclient-api "class in com.jbase.jrcs") | attachCommon(int numVars, String name) | Attaches a common block by name with a given number of variables |
| void | call(String subName) | Calls a host-side subroutine passing it no parameters |
| void | call(String subName, [DynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs")[] parms) | Calls a host-side subroutine with given parameters |
| void | call(String subName, String[] parms) | Calls a host-side subroutine with given parameters |
| void | close() | Closes the connection and ends the server-side jRCS proxy process |
| void | deleteList(String name) | Deletes the specified list from a work file |
| void | endTransaction(String transName) | Ends the active transaction |
| void | execute(String command) | Executes a jCL/jQL command ignoring its results |
| [JExecuteResults](./../jexecuteresults-jrclient-api "class in com.jbase.jrcs") | execute(String command, int flags) | Executes a jCL/jQL command and retrieves select parameters resulting from execution |
| [JExecuteResults](./../jexecuteresults-jrclient-api "class in com.jbase.jrcs") | execute(String command, int flags, [JSelectList](./../jselectlist-jrclient-api "class in com.jbase.jrcs") passList) | Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution |
| [JExecuteResults](./../jexecuteresults-jrclient-api "class in com.jbase.jrcs") | executeAndStore(String command, int flags) | Executes a jCL/jQL command and retrieves select parameters resulting from execution. |
| [JExecuteResults](./../jexecuteresults-jrclient-api "class in com.jbase.jrcs") | executeAndStore(String command, int flags, [JSelectList](./../jselectlist-jrclient-api "class in com.jbase.jrcs") passList) | Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution. |
| [JExecuteResults](./../jexecuteresults-jrclient-api "class in com.jbase.jrcs") | executeAndStore(String command, int flags,[JSelectList](./../jselectlist-jrclient-api "class in com.jbase.jrcs") passList, int blockSize) | Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution. |
| char | getAM() | Retrieves the attribute mark character for this connection |
| String | getCodePage() | Reserved for future use |
| protected com.jbase.jrcs.JConnector |  getConnector() |  |
| int | getDataEncryptionLevel() |  |
| int | getDate() | Returns server date as an integer in internal format |
| Charset | getHostCharacterEncoding() | Returns the character set used to map Unicode strings onto byte sequences passed to the host and read from the host. |
| [JDynArray](./../jdynarray-jrclient-api "class in com.jbase.jrcs") | getjBaseVersion() | Retrieves the version of jBASE database connected to this JConnection object |
| [JSelectList](./../jselectlist-jrclient-api "class in com.jbase.jrcs") | getList(String name) | Retrieves the specified list from a work file |
| String | getLocale() | Reserved for future use |
| int | getPasswordEncryptionLevel() |  |
| int | getPort() | Returns the jBASE port number (PIB) assigned to the logged on session |
| char | getSVM() | Retrieves the subvalue mark character for this connection |
| [JIOHandler](./../jiohandler-jrclient-api "interface in com.jbase.jrcs") | getTermIOHandler() | Retrieves a reference to the current terminal I/O handler |
| int | getTime() | Retrieves the current server time as an integer in internal format |
| char | getVM() | Retrieves the value mark character for this connection |
| String | iConv(String source, String code) | Performs an input conversion of a string using a conversion code |
| String | oConv(String source, String code) | Performs an output conversion of a string using a conversion code |
| void | open(String host, int port, String userName, String password, String accountName) | Opens a TCP/IP connection to the given host and port and establishes a jRCS logon session with specified user name, password and account name |
| void | open(String host, String userName, String password) | Opens a TCP/IP connection to the given host and default jRCS port and establishes a jRCS logon session with specified user name and password |
| [JFile](./../jfile-jrclient-api "class in com.jbase.jrcs") | openFile(String fileName) | Opens a file with the given name |
| void | setDataEncryptionLevel(int dataEncryptionLevel) | Sets the current data encryption level. |
| void | setHostCharacterEncoding(Charset charSet) | Sets the character set used to map Unicode strings onto byte sequences passed to the host and read from the host. |
| void | setPasswordEncryptionLevel(int passwordEncryptionLevel) | Sets the current password encryption level. |
| void | setTermIOHandler([JIOHandler](./../jiohandler-jrclient-api "interface in com.jbase.jrcs") handler) | Sets a terminal I/O handler |
| void | startTransaction(boolean sync, String transText) | Starts a transaction |

## Methods inherited from class java.lang.Object

`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

## Field Detail

### **EXEC\_GET\_CAPTURE**

``` java
public static final int EXEC_GET_CAPTURE
```

Passed to execute() or executeAndStore() to retrieve the capture string returned by executed command

#### **EXEC\_GET\_RETURNSTRING**

``` java
public static final int EXEC_GET_RETURNSTRING
```

Passed to execute() or executeAndStore() to retrieve the return string of executed command

#### **EXEC\_GET\_RETURNLIST**

``` java
public static final int EXEC_GET_RETURNLIST
```

Passed to execute() or executeAndStore() to retrieve the list returned by executed command

#### **ENC\_REQUIRED**

``` java
public static final int ENC_REQUIRED
```

Encryption required

#### **ENC\_SUPPORTED**

``` java
public static final int ENC_SUPPORTED
```

Encryption supported

#### **ENC\_OFF**

``` java
public static final int ENC_OFF
```

Encryption off

## Constructor Detail

### **JConnection**

``` java
public JConnection()
```

## Method Detail

### **abortTransaction**

``` java
public void abortTransaction(String transText)
```

Aborts the active transaction

Parameters: `transText` - Text to be stored in the transaction file. This parameter can be a blank string ("")

Throws: `JException`

#### **getAM**

``` java
public char getAM()
```

Retrieves the attribute mark character for this connection

Returns: Attribute mark character

#### **getVM**

``` java
public char getVM()
```

Retrieves the value mark character for this connection.

Returns: Value mark character

#### **getSVM**

``` java
public char getSVM()
```

Retrieves the subvalue mark character for this connection

Returns: Subvalue mark character

#### **attachCommon**

``` java
public JCommon attachCommon(int numVars, String name)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs") Attaches a common block by name with a given number of variables

Parameters:

`numVars` - Number of variables in the common block

`name` - Name of the common block. To attach an unnamed common specify a blank string ("")

Returns: JCommon object representing the attached common block

Throws: `JException`

#### call #1

``` java
public void call(String subName, String[] parms)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Calls a host-side subroutine with given parameters

Parameters:

`subName` - Subroutine name

`parms` - An array of subroutine parameters.

The number of parameters must exactly match the jBC signature of the  subroutine.

Throws: `JException`

#### call #2

``` java
public void call(String subName)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Calls a host-side subroutine passing it no parameters

Parameters:

`subName` - Subroutine name

Throws:` ``JException ```

#### call #3

``` java
public void call(String subName, JDynArray[] parms)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Calls a host-side subroutine with given parameters

Parameters:

`subName` - Subroutine name

`parms` - An array of subroutine parameters in the form of dynamic arrays.

The number of parameters must exactly match the jBC signature of the subroutine.

Throws: `JException`

#### close

``` java
public void close()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Closes the connection and ends the server-side jRCS proxy process

Throws: `JException`

#### getCodePage

``` java
public String getCodePage()
```

Reserved for future use

#### getDate

``` java
public int getDate()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Returns server date as an integer in internal format

Returns: Server date

Throws: `JException`

``

#### deleteList

``` java
public void deleteList(String name)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Deletes the specified list from a work file

Parameters:

`name` - Name of list to delete

Throws:`JException`

#### endTransaction

``` java
public void endTransaction(String transName)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Ends the active transaction

Parameters:

`transName` - Text to be stored in the transaction file. This parameter can be a blank string ("")

Throws: `JException`

#### getList

``` java
public JSelectList getList(String name)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Retrieves the specified list from a work file

Parameters:

`name` - Name of list to retrieve

Returns: JSelectList object representing the list read

Throws:`JException`

#### iConv

``` java
public String iConv(String source, String code)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Performs an input conversion of a string using a conversion code.

Parameters:

`source` - String to convert

`code` - Conversion code Returns:Converted string

Throws:`JException   ```

#### getjBaseVersion

``` java
public JDynArray getjBaseVersion()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Retrieves the version of jBASE database connected to this JConnection object

Returns: jBASE version as a dynamic array

Throws: `JException`

#### getLocale

``` java
public String getLocale()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Reserved for future use

Throws:`JException`

#### oConv

``` java
public String oConv(String source, String code)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Performs an output conversion of a string using a conversion code.

Parameters:

`source` - String to convert

`code` - Conversion code Returns: Converted string

Throws: `JException`

#### open #1

``` java
public void open(String host, int port, String userName, String password, String accountName)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Opens a TCP/IP connection to the given host and port and establishes a jRCS logon session with specified user name, password and account name.

Parameters:

`host` - Host name or IP address to connect to

`port` - IP port number to connect to. Use JConstants.JRCS\_PORT for the default port number

`userName` - User name

`password` - User's password

`accountName` - Account name. This parameter can be a blank string (""). In this case the logon is performed to the home

directory of the user specified by the userName parameter

Throws: `JException`

#### open #2

``` java
public void open(String host, String userName, String password)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Opens a TCP/IP connection to the given host and default jRCS port and establishes a jRCS logon session with specified username and password.

Parameters:

`host` - Host name or IP address to connect to

`userName` - User name

`password` - User's password

Throws: `JException`

#### openFile

``` java
public JFile openFile(String fileName)
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Opens a file with the given name

Parameters:

`fileName` - Name of file to open. The names are case-sensitive on UNIX-like systems.  It is possible to specify DICT in front of the  name to open the dictionary portion of the file.

Returns: JFile object representing the open file.

Throws: `JException`

#### getPort

``` java
public int getPort()
```

throws [JException](./../jexception-jrclient-api "class in com.jbase.jrcs")

Returns the jBASE port number (PIB) assigned to the logged on session

Returns: Port (PIB) number corresponding to the current session.

Throws:`JException`

#### startTransaction

``` java
public void startTransaction(boolean sync, String transText)
```

throws `JException`

Starts a transaction

Parameters:

`sync` - Forces the subsequent end or abort of the transaction to flush all database updates

`transText` - Text to be stored in  the transaction file. It is possible to specify an empty string ("")

Throws: `JException`

#### getTime

``` java
public int getTime()
```

throws `JException`

Retrieves the current server time as an integer in internal format.

Returns: Current server time.

Throws:`JException`

#### getConnector

``` java
protected com.jbase.jrcs.JConnector getConnector()
```

Throws:`JException`

#### execute #1

``` java
public JExecuteResults execute(String command, int flags, JSelectList passList)
```

throws `JException`

Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution.

Parameters:

`command` - Command to execute.

`flags` - A bit mask specifying parameters to return from the host. This can be any of the following:

| EXEC\_GET\_CAPTURE | retrieves the capture string |
| EXEC\_GET\_RETURNLIST | retrieves the select list generated by the command |
| EXEC\_GET\_RETURNSTRING | retrieves the return string |

`passList` - Select list to be passed to the command. This parameter can be null

Returns: JExecuteResults object with requested execution results.

Throws**:**`JException`

#### execute #2

``` java
public JExecuteResults execute(String command, int flags)
```

throws `JException`

Executes a jCL/jQL command and retrieves select parameters resulting from execution.

Parameters:

`command` - Command to execute.

`flags` - A bit mask specifying parameters to return from the host. See `execute(String,int, JSelectList).`

Returns: JExecuteResults object with requested execution results.

Throws:`JException`

#### execute #3

``` java
public void execute(String command)
```

throws `JException`

xecutes a jCL/jQL command ignoring its results.

Parameters:

`command` - Command to execute.

Throws: `JException`

#### executeAndStore #1

``` java
public JExecuteResults executeAndStore(String command, int flags, JSelectList passList, int blockSize)
```

throws `JException`

Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution. The function retrieves a reference to a JCapture object to incrementally fetch the captured output.

Parameters:

`command` - Command to execute `flags` - A bit mask specifying parameters to return from the hostThis can be any of the following:

| EXEC\_GET\_RETURNLIST | retrieves the select list generated by the command |
| EXEC\_GET\_RETURNSTRING | retrieves the return string |

`passList` - Select list to be passed to the command. This parameter can be null.

`blockSize` - Initial block size for the capture.

Returns: JExecuteResults object with requested execution results.

Throws: `JException`

### executeAndStore #2

``` java
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

Throws:`JException`

### executeAndStore #3

``` java
public JExecuteResults executeAndStore(String command, int flags)
```

throws `JException`

Executes a jCL/jQL command and retrieves select parameters resulting from execution. The function retrieves a reference to a JCapture object to incrementally fetch the captured output.

Parameters:

`command` - Command to execute.

`flags` - A bit mask specifying parameters to return from the host. See `executeAndStore(String, int, JSelectList, int)`

Returns: JExecuteResults object with requested execution results.

Throws: `JException`

#### getTermIOHandler

```  java
public JIOHandler getTermIOHandler()
```

Retrieves a reference to the current terminal I/O handler.

Returns: Current terminal I/O handler or null if the default handler is used.

#### setTermIOHandler

``` java
public void setTermIOHandler(JIOHandler handler)
```

Sets a terminal I/O handler

Parameters:

`handler` - New terminal I/O handler or null to use the default.

#### getHostCharacterEncoding

``` java
public Charset getHostCharacterEncoding()
```

Returns the character set used to map Unicode strings onto byte sequences passed to the host and read from the host.

Returns: Current charset used to encode data passed to host.

#### setHostCharacterEncoding

``` java
public void setHostCharacterEncoding(Charset charSet)
```

Sets the character set used to map Unicode strings onto byte sequences passed to the host and read from the host.

Parameters:

`charSet` - A Charset object used to perform character mapping. If this parameter is null, the encoding defaults to Windows Latin-1.

#### getDataEncryptionLevel

``` java
public int getDataEncryptionLevel()
```

Returns: Current data encryption level setting.

#### setDataEncryptionLevel

``` java
public void setDataEncryptionLevel(int dataEncryptionLevel)
```

throws `JException`

Sets the current data encryption level.

Parameters:

`dataEncryptionLevel` - Data encryption level to set (ENC\_REQUIRED to ENC\_OFF)

Throws: `JException` - Encryption level specified is invalid or connection is already active.

#### getPasswordEncryptionLevel

``` java
public int getPasswordEncryptionLevel()
```

Returns: Current password encryption level setting.

#### setPasswordEncryptionLevel

``` java
public void setPasswordEncryptionLevel(int passwordEncryptionLevel)
```

throws `JException`

Sets the current password encryption level.

Parameters:

`passwordEncryptionLevel` - Password encryption level to set (ENC\_REQUIRED to ENC\_OFF).

Throws: `JException` - Encryption level specified is invalid or connection is already active.

Back to [jRCS java API](./../README.md)
