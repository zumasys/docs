# Uses of Class com.jbase.jrcs.JException (jrclient API)

<PageHeader />

## Uses of [JException](./../../jexception-jrclient-api "class in com.jbase.jrcs") in [com.jbase.jrcs](./../../com.jbase.jrcs-jrclient-api)

**Methods in [com.jbase.jrcs](./../../com.jbase.jrcs-jrclient-api) that throw [JException](./../../jexception-jrclient-api "class in com.jbase.jrcs")**

| Modifier and Type | Method | Description |
| --- | --- | --- |
| void | JConnection.[abortTransaction](./../../jconnection-jrclient-api#abortTransaction-java.lang)(String transText) | Aborts the active transaction |
| void | JDynArray.[assign](./../../jdynarray-jrclient-api#assign-com.jbase.jrcs)([JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") src) | Assigns the value of a dynamic array to this dynamic array |
| void | JDynArray.[assign](./../../jdynarray-jrclient-api#assign-java.lang)(String src) | Assigns a string value to this dynamic array |
| boolean | JCapture.[atEnd](./../../jcapture-jrclient-api#atEnd--)() | Indicates whether the captured output is exhausted |
| [JCommon](./../../jcommon-jrclient-api "class in com.jbase.jrcs") | JConnection.[attachCommon](./../../jconnection-jrclient-api#attachCommon-int-java.lang)(int numVars, String name) | Attaches a common block by name with a given number of variables |
| boolean | JSelectList.[bol](./../../jselectlist-jrclient-api#bol--)() | Indicates whether the select list is at its beginning |
| void | JConnection.[call](./../../jconnection-jrclient-api#call-java.lang)(String subName) | Calls a host-side subroutine passing it no parameters |
| void | JConnection.[call](./../../jconnection-jrclient-api#call-java.lang.String-com.jbase.jrcs)(String subName, [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs")[] parms) | Calls a host-side subroutine with given parameters |
| void | JConnection.[call](./../../jconnection-jrclient-api#call-java.lang.String-java.lang)(String subName, String[] parms) | Calls a host-side subroutine with given parameters |
| char | JDynArray.[charAt](./../../jdynarray-jrclient-api#charAt-int-)(int index) | Gets a character at a given position in the dynamic array |
| void | JFile.[clearFile](./../../jfile-jrclient-api#clearFile--)() | Clears the file |
| void | JSelectList.[close](./../../jselectlist-jrclient-api#close--)() | Closes the select list and releases the server-side handle |
| void | JIndex.[close](./../../jindex-jrclient-api#close--)() | Closes the index and releases the server-side handle |
| void | JFile.[close](./../../jfile-jrclient-api#close--)() | Closes the file and releases the server-side handle |
| void | JConnection.[close](./../../jconnection-jrclient-api#close)() | Closes the connection and ends the server-side jRCS proxy process |
| void | JCommon.[close](./../../jcommon-jrclient-api#close--)() | Closes the object and releases the server-side handle |
| void | JCapture.[close](./../../jcapture-jrclient-api)() | Closes the object and releases its server-side handle |
| int | JDynArray.[count](./../../jdynarray-jrclient-api#count-char-)(char delim) | Counts the number of given characters in this dynamic array |
| int | JDynArray.[count](./../../jdynarray-jrclient-api#count-java.lang)(String delim) | Counts the number of given delimiters in this dynamic array |
| int | JDynArray.[dcount](./../../jdynarray-jrclient-api#dcount-char-)(char delim) | Counts the number of fields separated by the given character |
| int | JDynArray.[dcount](./../../jdynarray-jrclient-api#dcount-java.lang)(String delim) | Counts the number of fields separated by the given delimiter |
| void | JDynArray.[delete](./../../jdynarray-jrclient-api#delete-int-)(int amc) | Deletes the specified attribute |
| void | JDynArray.[delete](./../../jdynarray-jrclient-api#delete-int-int-)(int amc, int vmc) | Deletes the specified attribute or value. |
| void | JDynArray.[delete](./../../jdynarray-jrclient-api#delete-int-int-int-)(int amc, int vmc, int svmc) | Deletes the specified attribute, value or sub-value. |
| void | JFile.[delete](./../../jfile-jrclient-api#delete-java.lang)(String key) | Deletes a record with the given key. |
| void | JConnection.[deleteList](./../../jconnection-jrclient-api#deleteList-java.lang)(String name) | Deletes the specified list from a work file. |
| void | JConnection.[endTransaction](./../../jconnection-jrclient-api#endTransaction-java.lang)(String transName) | Ends the active transaction. |
| boolean | JSelectList.[eol](./../../jselectlist-jrclient-api#eol--)() | Indicates whether the select list is at its end. |
| void | JConnection.execute(String command) | Executes a jCL/jQL command ignoring its results. |
| [JExecuteResults](./../../jexecuteresults-jrclient-api "class in com.jbase.jrcs") | JConnection.execute(String command, int flags) | Executes a jCL/jQL command and retrieves select parameters resulting from execution. |
| [JExecuteResults](./../../jexecuteresults-jrclient-api "class in com.jbase.jrcs") | JConnection.execute(String command, int flags, [JSelectList](./../../jselectlist-jrclient-api "class in com.jbase.jrcs") passList) | Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution. |
| [JExecuteResults](./../../jexecuteresults-jrclient-api "class in com.jbase.jrcs") | JConnection.[executeAndStore](./../../jconnection-jrclient-api#executeAndStore-java.lang)(String command, int flags) | Executes a jCL/jQL command and retrieves select parameters resulting from execution. |
| [JExecuteResults](./../../jexecuteresults-jrclient-api "class in com.jbase.jrcs") | JConnection.[executeAndStore](./../../jconnection-jrclient-api#executeAndStore-java.lang.String-int-com.jbase.jrcs)(String command, int flags, [JSelectList](./../../jselectlist-jrclient-api "class in com.jbase.jrcs") passList) | Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution. |
| [JExecuteResults](./../../jexecuteresults-jrclient-api "class in com.jbase.jrcs") | JConnection.[executeAndStore](./../../jconnection-jrclient-api#executeAndStore-)(String command, int flags, [JSelectList](./../../jselectlist-jrclient-api "class in com.jbase.jrcs") passList, int blockSize) | Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution. |
| String | JDynArray.[extract](./../../jdynarray-jrclient-api#extract-int-)(int amc) | Extracts the specified attribute as a string. |
| String | JDynArray.[extract](./../../jdynarray-jrclient-api#extract-int-int-)(int amc, int vmc) | Extracts the specified attribute or value as a string. |
| String | JDynArray.[extract](./../../jdynarray-jrclient-api#extract-int-int-int-)(int amc, int vmc, int svmc) | Extracts the specified attribute, value or sub-value as a string. |
| [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") | JDynArray.[extractDA](./../../jdynarray-jrclient-api#extractDA-int-)(int amc) | Extracts the specified attribute as a dynamic array. |
| [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") | JDynArray.[extractDA](./../../jdynarray-jrclient-api#extractDA-int-int-)(int amc, int vmc) | Extracts the specified attribute or value as a dynamic array. |
| [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") | JDynArray.[extractDA](./../../jdynarray-jrclient-api#extractDA-int-int-int-)(int amc, int vmc, int svmc) | Extracts the specified attribute, value or sub-value as a dynamic array. |
| String | JDynArray.[field](./../../jdynarray-jrclient-api#field-char-int-)(char delim, int fieldNo) | Extracts the specified field separated by the given delimiter character. |
| String | JDynArray.[field](./../../jdynarray-jrclient-api#field-java.lang)(String delim, int fieldNo) | Extracts the specified field separated by the given delimiter string. |
| int | JCapture.[getBlockSize](./../../jcapture-jrclient-api#getBlockSize--)() | Sets the block size for nextBlock operation. |
| protected com.jbase.jrcs.JConnector | JConnection.[getConnector](./../../jconnection-jrclient-api#getConnector--)() |  |
| [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") | JCommon.[getDA](./../../jcommon-jrclient-api#getDA-int-)(int index) | Retrieves a dynamic array from a specific position in a common block. |
| int | JConnection.[getDate](./../../jconnection-jrclient-api)() | Returns server date as an integer in internal format. |
| [JFile](./../../jfile-jrclient-api "class in com.jbase.jrcs") | JCommon.[getFile](./../../jcommon-jrclient-api#getFile-int-)(int index) | Retrieves a file variable from a specific position in a common block. |
| [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") | JFile.[getIndex](./../../jfile-jrclient-api#getIndex-java.lang)(String indexName) | Reads information about the specified index. |
| String | JSelectList.[getIndexKey](./../../jselectlist-jrclient-api#getIndexKey--)() | Returns the index key. |
| [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") | JConnection.[getjBaseVersion](./../../jconnection-jrclient-api#getjBaseVersion--)() | Retrieves the version of jBASE database connected to this JConnection object. |
| [JSelectList](./../../jselectlist-jrclient-api "class in com.jbase.jrcs") | JConnection.[getList](./../../jconnection-jrclient-api#getList-java.lang)(String name) | Retrieves the specified list from a work file. |
| String | JConnection.[getLocale](./../../jconnection-jrclient-api#getLocale--)() | Reserved for future use. |
| String | JFile.[getPath](./../../jfile-jrclient-api#getPath--)() | Retrieves the file path. |
| int | JConnection.[getPort](./../../jconnection-jrclient-api#getPort--)() | Returns the jBASE port number (PIB) assigned to the logged on session. |
| String | JSelectList.[getRecordKey](./../../jselectlist-jrclient-api#getRecordKey--)() | Retrieves the record key. |
| String | JDynArray.[getString](./../../jdynarray-jrclient-api#getString--)() | Retrieves the content of the dynamic array as a string. |
| int | JConnection.[getTime](./../../jconnection-jrclient-api)() | Retrieves the current server time as an integer in internal format. |
| int | JSelectList.[getVMCount](./../../jselectlist-jrclient-api#getVMCount--)() | Retrieves the multi-value index for the current key. |
| String | JConnection.[iConv](./../../jconnection-jrclient-api#iConv-String-java.lang)(String source, String code) | Performs an input conversion of a string using a conversion code. |
| void | JDynArray.[insert](./../../jdynarray-jrclient-api#insert-com.jbase.jrcs)([JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int amc) | Inserts data from the given dynamic array into the specified attribute. |
| void | JDynArray.[insert](./../../jdynarray-jrclient-api#insert-com.jbase.jrcs)([JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int amc, int vmc) | Inserts data from the given dynamic array into the specified attribute or value. |
| void | JDynArray.[insert](./../../jdynarray-jrclient-api#insert-com.jbase.jrcs)([JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int amc, int vmc, int svmc) | Inserts data from the given dynamic array into the specified attribute, value or sub-value. |
| void | JDynArray.[insert](./../../jdynarray-jrclient-api#insert-java.lang)(String data, int amc) | Inserts string data into the specified attribute. |
| void | JDynArray.[insert](./../../jdynarray-jrclient-api#insert-java.lang)(String data, int amc, int vmc) | Inserts string data into the specified attribute or value. |
| void | JDynArray.[insert](./../../jdynarray-jrclient-api#insert-java.lang)(String data, int amc, int vmc, int svmc) | Inserts string data into the specified attribute, value or sub-value. |
| void | JDynArray.[insertDA](./../../jdynarray-jrclient-api#insertDA-com.jbase.jrcs)([JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int amc) | Inserts data from the given dynamic array into the specified attribute. |
| void | JDynArray.[insertDA](./../../jdynarray-jrclient-api#insertDA-com.jbase.jrcs)([JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int amc, int vmc) | Inserts data from the given dynamic array into the specified attribute or value. |
| void | JDynArray.[insertDA](./../../jdynarray-jrclient-api#insertDA-com.jbase.jrcs)([JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int amc, int vmc, int svmc) | Inserts data from the given dynamic array into the specified attribute, value or sub-value. |
| boolean | JSelectList.[isIndex](./../../jselectlist-jrclient-api#isIndex--)() | Indicates whether this select list was generated from a jBASE index. |
| int | JDynArray.[length](./../../jdynarray-jrclient-api#length-)() | Returns the length, in characters, of a dynamic array. |
| int | JDynArray.[locate](./../../jdynarray-jrclient-api#locate-java.lang)(String searchStr) | Searches for a string in all attributes of the dynamic array. |
| int | JDynArray.[locate](./../../jdynarray-jrclient-api#locate-java.lang.String-int-int-java.lang)(String searchStr, int amc, int vmc, String order) | Searches for a string in all sub-values within a given value of the dynamic array. |
| int | JDynArray.[locate](./../../jdynarray-jrclient-api#locate-java.lang.String-int-int-java.lang)(String searchStr, int amc, int vmc, String order, int start) | Similar to [JDynArray.locate(String, int, int, String)](./../../jdynarray-jrclient-api#locate-java.lang.String-int-int-java.lang), but allows for a start position. |
| int | JDynArray.[locate](./../../jdynarray-jrclient-api#locate-java.lang.String-int-java.lang)(String searchStr, int amc, String order) | Searches for a string in all values within a given attribute of the dynamic array. |
| int | JDynArray.[locate](./../../jdynarray-jrclient-api#locate-java.lang.String-int-java.lang)(String searchStr, int amc, String order, int start) | Similar to [JDynArray.locate(String, int, String)](./../../jdynarray-jrclient-api#locate-java.lang.String-int-java.lang), but allows for a start position. |
| int | JDynArray.[locate](./../../jdynarray-jrclient-api#locate-java.lang.String-java.lang)(String searchStr, String order) | Searches for a string in all attributes of the dynamic array, which is in a given sort order. |
| int | JDynArray.[locateIgnoreCase](./../../jdynarray-jrclient-api#locateIgnoreCase-java.lang)(String searchStr) | Similar to [JDynArray.locate(String)](./../../jdynarray-jrclient-api#locate-java.lang), but performs a case-insensitive comparison. |
| int | JDynArray.[locateIgnoreCase](./../../jdynarray-jrclient-api#locateIgnoreCase-java.lang.String-int-int-java.lang)(String searchStr, int amc, int vmc, String order) | Similar to [JDynArray.locate(String, int, int, String)](./../../jdynarray-jrclient-api#locate-java.lang.String-int-int-java.lang), but performs a case-insensitive comparison. |
| int | JDynArray.[locateIgnoreCase](./../../jdynarray-jrclient-api#locateIgnoreCase-java.lang.String-int-int-java.lang)(String searchStr, int amc, int vmc, String order, int start) | Similar to [JDynArray.locate(String, int, int, String, int)](./../../jdynarray-jrclient-api#locate-java.lang.String-int-int-java.lang), but performs a case-insensitive comparison. |
| int | JDynArray.[locateIgnoreCase](./../../jdynarray-jrclient-api#locateIgnoreCase-java.lang.String-int-java.lang)(String searchStr, int amc, String order) | Similar to [JDynArray.locate(String, int, String)](./../../jdynarray-jrclient-api#locate-java.lang.String-int-java.lang), but performs a case-insensitive comparison. |
| int | JDynArray.[locateIgnoreCase](./../../jdynarray-jrclient-api#locateIgnoreCase-java.lang.String-int-java.lang)(String searchStr, int amc, String order, int start) | Similar to [JDynArray.locate(String, int, String, int)](./../../jdynarray-jrclient-api#locate-java.lang.String-int-java.lang), but performs a case-insensitive comparison. |
| int | JDynArray.[locateIgnoreCase](./../../jdynarray-jrclient-api#locateIgnoreCase-java.lang.String-java.lang)(String searchStr, String order) | Similar to [JDynArray.locate(String, String)](./../../jdynarray-jrclient-api#locate-java.lang.String-java.lang), but performs a case-insensitive comparison. |
| String | JCapture.[nextBlock](./../../jcapture-jrclient-api#nextBlock--)() | Fetches next block of captured output. |
| String | JConnection.[oConv](./../../jconnection-jrclient-api#oConv-java.lang.String-java.lang)(String source, String code) | Performs an output conversion of a string using a conversion code. |
| void | JConnection.[open](./../../jconnection-jrclient-api#open-java.lang.String-int-java.lang.String-java.lang.String-java.lang)(String host, int port, String userName, String password, String accountName) | Opens a TCP/IP connection to the given host and port and establishes a jRCS logon session with specified user name, password and account name. |
| void | JConnection.[open](./../../jconnection-jrclient-api#open-java.lang.String-java.lang.String-java.lang)(String host, String userName, String password) | Opens a TCP/IP connection to the given host and default jRCS port and establishes a jRCS logon session with specified user name and password. |
| [JFile](./../../jfile-jrclient-api "class in com.jbase.jrcs") | JConnection.[openFile](./../../jconnection-jrclient-api#openFile-java.lang)(String fileName) | Opens a file with the given name. |
| [JIndex](./../../jindex-jrclient-api "class in com.jbase.jrcs") | JFile.[openIndex](./../../jfile-jrclient-api#openIndex-java.lang)(String indexName) | Opens a named index on this file. |
| [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") | JFile.[read](./../../jfile-jrclient-api#read-java.lang)(String key) | Reads a record from the file without locking. |
| [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") | JFile.[read](./../../jfile-jrclient-api#read-java.lang)(String key, boolean locked) | Reads a record from the file, optionally locking it. |
| [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") | JFile.[read](./../../jfile-jrclient-api#read-java.lang)(String key, boolean locked, boolean wait) | Reads a record from the file, optionally locking it and waiting for the lock. |
| [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") | JFile.[readNamedField](./../../jfile-jrclient-api#readNamedField-java.lang.String-java.lang)(String key, String field) | Reads a named field from a file record. |
| [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") | JFile.[readNamedField](./../../jfile-jrclient-api#readNamedField-java.lang.String-java.lang)(String key, String field, boolean locked) | Reads a named field from a file record, optionally locking the record. |
| [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") | JFile.[readNamedField](./../../jfile-jrclient-api#readNamedField-java.lang.String-java.lang)(String key, String field, boolean locked, boolean wait) | Reads a named field from a file record, optionally locking the record. |
| String | JSelectList.[readNext](./../../jselectlist-jrclient-api#readNext--)() | Reads the next key from the select list. |
| [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") | JFile.[readV](./../../jfile-jrclient-api#readV-java.lang)(String key, int attrib) | Reads an attribute from a file record without locking. |
| [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") | JFile.[readV](./../../jfile-jrclient-api#readV-java.lang)(String key, int attrib, boolean locked) | Reads an attribute from a file record, optionally locking the record. |
| [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") | JFile.[readV](./../../jfile-jrclient-api#readV-java.lang)(String key, int attrib, boolean locked, boolean wait) | Reads an attribute from a file record, optionally locking the record and waiting for the lock. |
| void | JFile.[release](./../../jfile-jrclient-api#release-java.lang)(String key) | Releases a lock on a file record. |
| void | JFile.[releaseAll](./../../jfile-jrclient-api#releaseAll--)() | Releases all locks held by the current session on the given file. |
| void | JDynArray.[replace](./../../jdynarray-jrclient-api#replacey-int-)([JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int amc) | Replaces the given attribute with the content of specified dynamic array. |
| void | JDynArray.[replace](./../../jdynarray-jrclient-api#replace-int-int-)([JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int amc, int vmc) | Replaces the given attribute or value with the content of specified dynamic array. |
| void | JDynArray.[replace](./../../jdynarray-jrclient-api#replace-int-int-int-)([JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int amc, int vmc, int svmc) | Replaces the given attribute, value or sub-value with the content of specified dynamic array. |
| void | JDynArray.[replace](./../../jdynarray-jrclient-api#replace-java.lang)(String data, int amc) | Replaces the given attribute with specified string. |
| void | JDynArray.[replace](./../../jdynarray-jrclient-api#replace-java.lang)(String data, int amc, int vmc) | Replaces the given attribute or value with specified string. |
| void | JDynArray.[replace](./../../jdynarray-jrclient-api#replace-java.lang)(String data, int amc, int vmc, int svmc) | Replaces the given attribute, value or sub-value with specified string. |
| void | JDynArray.[replaceDA](./../../jdynarray-jrclient-api#replaceDA-int-)([JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int amc) | Replaces the given attribute with the content of specified dynamic array Same as replace(JDynArray, amc). |
| void | JDynArray.[replaceDA](./../../jdynarray-jrclient-api#replaceDA-int-)([JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int amc, int vmc) | Replaces the given attribute or value with the content of specified dynamic array Same as replace(JDynArray, amc, vmc). |
| void | JDynArray.[replaceDA](./../../jdynarray-jrclient-api#replaceDA-com.jbase.jrcs)([JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int amc, int vmc, int svmc) | Replaces the given attribute, value or sub-value with the content of specified dynamic array. |
| void | JCapture.[rewind](./../../jcapture-jrclient-api#rewind-ava.lang)() | Returns the current position in the saved output to the beginning of the output stream. |
| void | JSelectList.[saveList](./../../jselectlist-jrclient-api#saveList-java.lang)(String listName) | Saves the list under the specified name in a work file. |
| [JSelectList](./../../jselectlist-jrclient-api "class in com.jbase.jrcs") | JIndex.[select](./../../jindex-jrclient-api#select--)() | Generates a select list from this index variable. |
| [JSelectList](./../../jselectlist-jrclient-api "class in com.jbase.jrcs") | JFile.[select](./../../jfile-jrclient-api#select--)() | Selects all keys in the file in hash order. |
| void | JCapture.[setBlockSize](./../../jcapture-jrclient-api#setBlockSize-int-)(int blockSize) | Gets the block size for the nextBlock method. |
| void | JDynArray.[setCharAt](./../../jdynarray-jrclient-api#setCharAt-int-char-)(int index, char newChar) | Sets a character at a given location in the dynamic array. |
| void | JCommon.[setDA](./../../jcommon-jrclient-api#setDA-int-com.jbase.jrcs)(int index, [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") dynArray) | Stores a dynamic array into a specific position in a common block. |
| void | JConnection.[setDataEncryptionLevel](./../../jconnection-jrclient-api#setDataEncryptionLevel-int-)(int dataEncryptionLevel) | Sets the current data encryption level. |
| void | JCommon.[setFile](./../../jcommon-jrclient-api#setFile-int-com.jbase.jrcs)(int index, [JFile](./../../jfile-jrclient-api "class in com.jbase.jrcs") file) | Stores a file variable into a specific position in a common block. |
| void | JConnection.[setPasswordEncryptionLevel](./../../jconnection-jrclient-api#setPasswordEncryptionLevel-int-)(int passwordEncryptionLevel) |  Sets the current password encryption level. |
| [JSelectList](./../../jselectlist-jrclient-api "class in com.jbase.jrcs") | JFile.[sselect](./../../jfile-jrclient-api#sselect--)() | Selects all keys in the file in ascending sorted order. |
| void | JConnection.[startTransaction](./../../jconnection-jrclient-api#startTransaction-boolean-java.lang)(boolean sync, String transText) | Starts a transaction. |
| protected static void | JException.[throwWithCode](./../../jexception-jrclient-api#throwWithCode-int-)(int code) |  |
| void | JFile.[write](./../../jfile-jrclient-api#write-java.lang.String-com.jbase.jrcs)(String key, [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data) | Writes a record to the file releasing the lock if there is one. |
| void | JFile.[write](./../../jfile-jrclient-api#write-java.lang.String-com.jbase.jrcs)(String key, [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, boolean unlock) | Writes a record to the file optionally releasing the lock. |
| void | JFile.[writeNamedField](./../../jfile-jrclient-api#writeNamedField-java.lang.String-java.lang.String-com.jbase.jrcs)([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") key, String field, [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data) | Writes a named record field to the file. |
| void | JFile.[writeNamedField](./../../jfile-jrclient-api#writeNamedField-java.lang.String-java.lang.String-com.jbase.jrcs)([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") key, String field, [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, boolean unlock) | Writes a named record field to the file optionally releasing the lock. |
| void | JFile.[writeV](./../../jfile-jrclient-api#writeV-java.lang.String-com.jbase.jrcs)(String key, [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int attrib) | Writes a record attribute to the file releasing the lock if there is one. |
| void | JFile.[writeV](./../../jfile-jrclient-api#writeV-java.lang.String-com.jbase.jrcs)(String key, [JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") data, int attrib, boolean unlock) | Writes a record attribute to the file optionally releasing the lock. |

**Constructors in [com.jbase.jrcs](./../../com.jbase.jrcs-jrclient-api) that throw [JException](./../../jexception-jrclient-api "class in com.jbase.jrcs")**

| Constructor |  Description |
| --- | --- |
| [JDynArray](./../../jdynarray-jrclient-api)() | Default constructor. |
| [JDynArray](./../../jdynarray-jrclient-api#JDynArray-com.jbase.jrcs)([JDynArray](./../../jdynarray-jrclient-api "class in com.jbase.jrcs") src) | Constructs a dynamic array from another dynamic array. |
| [JDynArray](./../../jdynarray-jrclient-api)(String src) | Constructs a dynamic array from a string. |

  
<PageFooter />
