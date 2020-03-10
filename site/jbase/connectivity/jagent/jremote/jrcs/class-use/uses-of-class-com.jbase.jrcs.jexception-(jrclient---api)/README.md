# Uses of Class com.jbase.jrcs.JException (jrclient API)

**Created At:** 9/25/2017 11:27:44 AM  
**Updated At:** 12/24/2018 7:11:02 PM  
**Original Doc:** [com_jbase_jrcs_class-use_jexception](https://docs.jbase.com/39245-class-use/com_jbase_jrcs_class-use_jexception)  
**Original ID:** 278024  
**Internal:** No  

## Uses of [JException](./../../jexception-%28jrclient-api%29 "class in com.jbase.jrcs") in [com.jbase.jrcs](./../../com.jbase.jrcs-%28jrclient---api%29)

**Methods in [com.jbase.jrcs](./../../com.jbase.jrcs-%28jrclient---api%29) that throw [JException](./../../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")**

| Modifier and Type | Method | Description |
| --- | --- | --- |
| void | JConnection.[abortTransaction](./../../jconnection-%28jrclient-api%29#abortTransaction-java.lang)(String transText) | Aborts the active transaction |
| void | JDynArray.[assign](./../../jdynarray-%28jrclient---api%29#assign-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") src) | Assigns the value of a dynamic array to this dynamic array |
| void | JDynArray.[assign](./../../jdynarray-%28jrclient---api%29#assign-java.lang)(String src) | Assigns a string value to this dynamic array |
| boolean | JCapture.[atEnd](./../../jcapture-%28jrclient-api%29#atEnd--)() | Indicates whether the captured output is exhausted |
| [JCommon](./../../jcommon-%28jrclient-api%29 "class in com.jbase.jrcs") | JConnection.[attachCommon](./../../jconnection-%28jrclient-api%29#attachCommon-int-java.lang)(int numVars, String name) | Attaches a common block by name with a given number of variables |
| boolean | JSelectList.[bol](./../../jselectlist-%28jrclient---api%29#bol--)() | Indicates whether the select list is at its beginning |
| void | JConnection.[call](./../../jconnection-%28jrclient-api%29#call-java.lang)(String subName) | Calls a host-side subroutine passing it no parameters |
| void | JConnection.[call](./../../jconnection-%28jrclient-api%29#call-java.lang.String-com.jbase.jrcs)(String subName, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")[] parms) | Calls a host-side subroutine with given parameters |
| void | JConnection.[call](./../../jconnection-%28jrclient-api%29#call-java.lang.String-java.lang)(String subName, String[] parms) | Calls a host-side subroutine with given parameters |
| char | JDynArray.[charAt](./../../jdynarray-%28jrclient---api%29#charAt-int-)(int index) | Gets a character at a given position in the dynamic array |
| void | JFile.[clearFile](./../../jfile-%28jrclient-api%29#clearFile--)() | Clears the file |
| void | JSelectList.[close](./../../jselectlist-%28jrclient---api%29#close--)() | Closes the select list and releases the server-side handle |
| void | JIndex.[close](./../../jindex-%28jrclient-api%29#close--)() | Closes the index and releases the server-side handle |
| void | JFile.[close](./../../jfile-%28jrclient-api%29#close--)() | Closes the file and releases the server-side handle |
| void | JConnection.[close](./../../jconnection-%28jrclient-api%29#close)() | Closes the connection and ends the server-side jRCS proxy process |
| void | JCommon.[close](./../../jcommon-%28jrclient-api%29#close--)() | Closes the object and releases the server-side handle |
| void | JCapture.[close](./../../jcapture-%28jrclient-api%29)() | Closes the object and releases its server-side handle |
| int | JDynArray.[count](./../../jdynarray-%28jrclient---api%29#count-char-)(char delim) | Counts the number of given characters in this dynamic array |
| int | JDynArray.[count](./../../jdynarray-%28jrclient---api%29#count-java.lang)(String delim) | Counts the number of given delimiters in this dynamic array |
| int | JDynArray.[dcount](./../../jdynarray-%28jrclient---api%29#dcount-char-)(char delim) | Counts the number of fields separated by the given character |
| int | JDynArray.[dcount](./../../jdynarray-%28jrclient---api%29#dcount-java.lang)(String delim) | Counts the number of fields separated by the given delimiter |
| void | JDynArray.[delete](./../../jdynarray-%28jrclient---api%29#delete-int-)(int amc) | Deletes the specified attribute |
| void | JDynArray.[delete](./../../jdynarray-%28jrclient---api%29#delete-int-int-)(int amc, int vmc) | Deletes the specified attribute or value. |
| void | JDynArray.[delete](./../../jdynarray-%28jrclient---api%29#delete-int-int-int-)(int amc, int vmc, int svmc) | Deletes the specified attribute, value or sub-value. |
| void | JFile.[delete](./../../jfile-%28jrclient-api%29#delete-java.lang)(String key) | Deletes a record with the given key. |
| void | JConnection.[deleteList](./../../jconnection-%28jrclient-api%29#deleteList-java.lang)(String name) | Deletes the specified list from a work file. |
| void | JConnection.[endTransaction](./../../jconnection-%28jrclient-api%29#endTransaction-java.lang)(String transName) | Ends the active transaction. |
| boolean | JSelectList.[eol](./../../jselectlist-%28jrclient---api%29#eol--)() | Indicates whether the select list is at its end. |
| void | JConnection.execute(String command) | Executes a jCL/jQL command ignoring its results. |
| [JExecuteResults](./../../jexecuteresults-%28jrclient-api%29 "class in com.jbase.jrcs") | JConnection.execute(String command, int flags) | Executes a jCL/jQL command and retrieves select parameters resulting from execution. |
| [JExecuteResults](./../../jexecuteresults-%28jrclient-api%29 "class in com.jbase.jrcs") | JConnection.execute(String command, int flags, [JSelectList](./../../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs") passList) | Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution. |
| [JExecuteResults](./../../jexecuteresults-%28jrclient-api%29 "class in com.jbase.jrcs") | JConnection.[executeAndStore](./../../jconnection-%28jrclient-api%29#executeAndStore-java.lang)(String command, int flags) | Executes a jCL/jQL command and retrieves select parameters resulting from execution. |
| [JExecuteResults](./../../jexecuteresults-%28jrclient-api%29 "class in com.jbase.jrcs") | JConnection.[executeAndStore](./../../jconnection-%28jrclient-api%29#executeAndStore-java.lang.String-int-com.jbase.jrcs)(String command, int flags, [JSelectList](./../../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs") passList) | Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution. |
| [JExecuteResults](./../../jexecuteresults-%28jrclient-api%29 "class in com.jbase.jrcs") | JConnection.[executeAndStore](./../../jconnection-%28jrclient-api%29#executeAndStore-)(String command, int flags, [JSelectList](./../../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs") passList, int blockSize) | Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution. |
| String | JDynArray.[extract](./../../jdynarray-%28jrclient---api%29#extract-int-)(int amc) | Extracts the specified attribute as a string. |
| String | JDynArray.[extract](./../../jdynarray-%28jrclient---api%29#extract-int-int-)(int amc, int vmc) | Extracts the specified attribute or value as a string. |
| String | JDynArray.[extract](./../../jdynarray-%28jrclient---api%29#extract-int-int-int-)(int amc, int vmc, int svmc) | Extracts the specified attribute, value or sub-value as a string. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JDynArray.[extractDA](./../../jdynarray-%28jrclient---api%29#extractDA-int-)(int amc) | Extracts the specified attribute as a dynamic array. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JDynArray.[extractDA](./../../jdynarray-%28jrclient---api%29#extractDA-int-int-)(int amc, int vmc) | Extracts the specified attribute or value as a dynamic array. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JDynArray.[extractDA](./../../jdynarray-%28jrclient---api%29#extractDA-int-int-int-)(int amc, int vmc, int svmc) | Extracts the specified attribute, value or sub-value as a dynamic array. |
| String | JDynArray.[field](./../../jdynarray-%28jrclient---api%29#field-char-int-)(char delim, int fieldNo) | Extracts the specified field separated by the given delimiter character. |
| String | JDynArray.[field](./../../jdynarray-%28jrclient---api%29#field-java.lang)(String delim, int fieldNo) | Extracts the specified field separated by the given delimiter string. |
| int | JCapture.[getBlockSize](./../../jcapture-%28jrclient-api%29#getBlockSize--)() | Sets the block size for nextBlock operation. |
| protected com.jbase.jrcs.JConnector | JConnection.[getConnector](./../../jconnection-%28jrclient-api%29#getConnector--)() |  |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JCommon.[getDA](./../../jcommon-%28jrclient-api%29#getDA-int-)(int index) | Retrieves a dynamic array from a specific position in a common block. |
| int | JConnection.[getDate](./../../jconnection-%28jrclient-api%29)() | Returns server date as an integer in internal format. |
| [JFile](./../../jfile-%28jrclient-api%29 "class in com.jbase.jrcs") | JCommon.[getFile](./../../jcommon-%28jrclient-api%29#getFile-int-)(int index) | Retrieves a file variable from a specific position in a common block. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[getIndex](./../../jfile-%28jrclient-api%29#getIndex-java.lang)(String indexName) | Reads information about the specified index. |
| String | JSelectList.[getIndexKey](./../../jselectlist-%28jrclient---api%29#getIndexKey--)() | Returns the index key. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JConnection.[getjBaseVersion](./../../jconnection-%28jrclient-api%29#getjBaseVersion--)() | Retrieves the version of jBASE database connected to this JConnection object. |
| [JSelectList](./../../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs") | JConnection.[getList](./../../jconnection-%28jrclient-api%29#getList-java.lang)(String name) | Retrieves the specified list from a work file. |
| String | JConnection.[getLocale](./../../jconnection-%28jrclient-api%29#getLocale--)() | Reserved for future use. |
| String | JFile.[getPath](./../../jfile-%28jrclient-api%29#getPath--)() | Retrieves the file path. |
| int | JConnection.[getPort](./../../jconnection-%28jrclient-api%29#getPort--)() | Returns the jBASE port number (PIB) assigned to the logged on session. |
| String | JSelectList.[getRecordKey](./../../jselectlist-%28jrclient---api%29#getRecordKey--)() | Retrieves the record key. |
| String | JDynArray.[getString](./../../jdynarray-%28jrclient---api%29#getString--)() | Retrieves the content of the dynamic array as a string. |
| int | JConnection.[getTime](./../../jconnection-%28jrclient-api%29)() | Retrieves the current server time as an integer in internal format. |
| int | JSelectList.[getVMCount](./../../jselectlist-%28jrclient---api%29#getVMCount--)() | Retrieves the multi-value index for the current key. |
| String | JConnection.[iConv](./../../jconnection-%28jrclient-api%29#iConv-String-java.lang)(String source, String code) | Performs an input conversion of a string using a conversion code. |
| void | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29#insert-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc) | Inserts data from the given dynamic array into the specified attribute. |
| void | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29#insert-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc) | Inserts data from the given dynamic array into the specified attribute or value. |
| void | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29#insert-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc) | Inserts data from the given dynamic array into the specified attribute, value or sub-value. |
| void | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29#insert-java.lang)(String data, int amc) | Inserts string data into the specified attribute. |
| void | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29#insert-java.lang)(String data, int amc, int vmc) | Inserts string data into the specified attribute or value. |
| void | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29#insert-java.lang)(String data, int amc, int vmc, int svmc) | Inserts string data into the specified attribute, value or sub-value. |
| void | JDynArray.[insertDA](./../../jdynarray-%28jrclient---api%29#insertDA-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc) | Inserts data from the given dynamic array into the specified attribute. |
| void | JDynArray.[insertDA](./../../jdynarray-%28jrclient---api%29#insertDA-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc) | Inserts data from the given dynamic array into the specified attribute or value. |
| void | JDynArray.[insertDA](./../../jdynarray-%28jrclient---api%29#insertDA-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc) | Inserts data from the given dynamic array into the specified attribute, value or sub-value. |
| boolean | JSelectList.[isIndex](./../../jselectlist-%28jrclient---api%29#isIndex--)() | Indicates whether this select list was generated from a jBASE index. |
| int | JDynArray.[length](./../../jdynarray-%28jrclient---api%29#length-)() | Returns the length, in characters, of a dynamic array. |
| int | JDynArray.[locate](./../../jdynarray-%28jrclient---api%29#locate-java.lang)(String searchStr) | Searches for a string in all attributes of the dynamic array. |
| int | JDynArray.[locate](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-int-java.lang)(String searchStr, int amc, int vmc, String order) | Searches for a string in all sub-values within a given value of the dynamic array. |
| int | JDynArray.[locate](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-int-java.lang)(String searchStr, int amc, int vmc, String order, int start) | Similar to [JDynArray.locate(String, int, int, String)](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-int-java.lang), but allows for a start position. |
| int | JDynArray.[locate](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-java.lang)(String searchStr, int amc, String order) | Searches for a string in all values within a given attribute of the dynamic array. |
| int | JDynArray.[locate](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-java.lang)(String searchStr, int amc, String order, int start) | Similar to [JDynArray.locate(String, int, String)](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-java.lang), but allows for a start position. |
| int | JDynArray.[locate](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-java.lang)(String searchStr, String order) | Searches for a string in all attributes of the dynamic array, which is in a given sort order. |
| int | JDynArray.[locateIgnoreCase](./../../jdynarray-%28jrclient---api%29#locateIgnoreCase-java.lang)(String searchStr) | Similar to [JDynArray.locate(String)](./../../jdynarray-%28jrclient---api%29#locate-java.lang), but performs a case-insensitive comparison. |
| int | JDynArray.[locateIgnoreCase](./../../jdynarray-%28jrclient---api%29#locateIgnoreCase-java.lang.String-int-int-java.lang)(String searchStr, int amc, int vmc, String order) | Similar to [JDynArray.locate(String, int, int, String)](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-int-java.lang), but performs a case-insensitive comparison. |
| int | JDynArray.[locateIgnoreCase](./../../jdynarray-%28jrclient---api%29#locateIgnoreCase-java.lang.String-int-int-java.lang)(String searchStr, int amc, int vmc, String order, int start) | Similar to [JDynArray.locate(String, int, int, String, int)](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-int-java.lang), but performs a case-insensitive comparison. |
| int | JDynArray.[locateIgnoreCase](./../../jdynarray-%28jrclient---api%29#locateIgnoreCase-java.lang.String-int-java.lang)(String searchStr, int amc, String order) | Similar to [JDynArray.locate(String, int, String)](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-java.lang), but performs a case-insensitive comparison. |
| int | JDynArray.[locateIgnoreCase](./../../jdynarray-%28jrclient---api%29#locateIgnoreCase-java.lang.String-int-java.lang)(String searchStr, int amc, String order, int start) | Similar to [JDynArray.locate(String, int, String, int)](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-java.lang), but performs a case-insensitive comparison. |
| int | JDynArray.[locateIgnoreCase](./../../jdynarray-%28jrclient---api%29#locateIgnoreCase-java.lang.String-java.lang)(String searchStr, String order) | Similar to [JDynArray.locate(String, String)](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-java.lang), but performs a case-insensitive comparison. |
| String | JCapture.[nextBlock](./../../jcapture-%28jrclient-api%29#nextBlock--)() | Fetches next block of captured output. |
| String | JConnection.[oConv](./../../jconnection-%28jrclient-api%29#oConv-java.lang.String-java.lang)(String source, String code) | Performs an output conversion of a string using a conversion code. |
| void | JConnection.[open](./../../jconnection-%28jrclient-api%29#open-java.lang.String-int-java.lang.String-java.lang.String-java.lang)(String host, int port, String userName, String password, String accountName) | Opens a TCP/IP connection to the given host and port and establishes a jRCS logon session with specified user name, password and account name. |
| void | JConnection.[open](./../../jconnection-%28jrclient-api%29#open-java.lang.String-java.lang.String-java.lang)(String host, String userName, String password) | Opens a TCP/IP connection to the given host and default jRCS port and establishes a jRCS logon session with specified user name and password. |
| [JFile](./../../jfile-%28jrclient-api%29 "class in com.jbase.jrcs") | JConnection.[openFile](./../../jconnection-%28jrclient-api%29#openFile-java.lang)(String fileName) | Opens a file with the given name. |
| [JIndex](./../../jindex-%28jrclient-api%29 "class in com.jbase.jrcs") | JFile.[openIndex](./../../jfile-%28jrclient-api%29#openIndex-java.lang)(String indexName) | Opens a named index on this file. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[read](./../../jfile-%28jrclient-api%29#read-java.lang)(String key) | Reads a record from the file without locking. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[read](./../../jfile-%28jrclient-api%29#read-java.lang)(String key, boolean locked) | Reads a record from the file, optionally locking it. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[read](./../../jfile-%28jrclient-api%29#read-java.lang)(String key, boolean locked, boolean wait) | Reads a record from the file, optionally locking it and waiting for the lock. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[readNamedField](./../../jfile-%28jrclient-api%29#readNamedField-java.lang.String-java.lang)(String key, String field) | Reads a named field from a file record. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[readNamedField](./../../jfile-%28jrclient-api%29#readNamedField-java.lang.String-java.lang)(String key, String field, boolean locked) | Reads a named field from a file record, optionally locking the record. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[readNamedField](./../../jfile-%28jrclient-api%29#readNamedField-java.lang.String-java.lang)(String key, String field, boolean locked, boolean wait) | Reads a named field from a file record, optionally locking the record. |
| String | JSelectList.[readNext](./../../jselectlist-%28jrclient---api%29#readNext--)() | Reads the next key from the select list. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[readV](./../../jfile-%28jrclient-api%29#readV-java.lang)(String key, int attrib) | Reads an attribute from a file record without locking. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[readV](./../../jfile-%28jrclient-api%29#readV-java.lang)(String key, int attrib, boolean locked) | Reads an attribute from a file record, optionally locking the record. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[readV](./../../jfile-%28jrclient-api%29#readV-java.lang)(String key, int attrib, boolean locked, boolean wait) | Reads an attribute from a file record, optionally locking the record and waiting for the lock. |
| void | JFile.[release](./../../jfile-%28jrclient-api%29#release-java.lang)(String key) | Releases a lock on a file record. |
| void | JFile.[releaseAll](./../../jfile-%28jrclient-api%29#releaseAll--)() | Releases all locks held by the current session on the given file. |
| void | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29#replacey-int-)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc) | Replaces the given attribute with the content of specified dynamic array. |
| void | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29#replace-int-int-)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc) | Replaces the given attribute or value with the content of specified dynamic array. |
| void | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29#replace-int-int-int-)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc) | Replaces the given attribute, value or sub-value with the content of specified dynamic array. |
| void | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29#replace-java.lang)(String data, int amc) | Replaces the given attribute with specified string. |
| void | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29#replace-java.lang)(String data, int amc, int vmc) | Replaces the given attribute or value with specified string. |
| void | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29#replace-java.lang)(String data, int amc, int vmc, int svmc) | Replaces the given attribute, value or sub-value with specified string. |
| void | JDynArray.[replaceDA](./../../jdynarray-%28jrclient---api%29#replaceDA-int-)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc) | Replaces the given attribute with the content of specified dynamic array Same as replace(JDynArray, amc). |
| void | JDynArray.[replaceDA](./../../jdynarray-%28jrclient---api%29#replaceDA-int-)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc) | Replaces the given attribute or value with the content of specified dynamic array Same as replace(JDynArray, amc, vmc). |
| void | JDynArray.[replaceDA](./../../jdynarray-%28jrclient---api%29#replaceDA-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc) | Replaces the given attribute, value or sub-value with the content of specified dynamic array. |
| void | JCapture.[rewind](./../../jcapture-%28jrclient-api%29#rewind-ava.lang)() | Returns the current position in the saved output to the beginning of the output stream. |
| void | JSelectList.[saveList](./../../jselectlist-%28jrclient---api%29#saveList-java.lang)(String listName) | Saves the list under the specified name in a work file. |
| [JSelectList](./../../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs") | JIndex.[select](./../../jindex-%28jrclient-api%29#select--)() | Generates a select list from this index variable. |
| [JSelectList](./../../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[select](./../../jfile-%28jrclient-api%29#select--)() | Selects all keys in the file in hash order. |
| void | JCapture.[setBlockSize](./../../jcapture-%28jrclient-api%29#setBlockSize-int-)(int blockSize) | Gets the block size for the nextBlock method. |
| void | JDynArray.[setCharAt](./../../jdynarray-%28jrclient---api%29#setCharAt-int-char-)(int index, char newChar) | Sets a character at a given location in the dynamic array. |
| void | JCommon.[setDA](./../../jcommon-%28jrclient-api%29#setDA-int-com.jbase.jrcs)(int index, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") dynArray) | Stores a dynamic array into a specific position in a common block. |
| void | JConnection.[setDataEncryptionLevel](./../../jconnection-%28jrclient-api%29#setDataEncryptionLevel-int-)(int dataEncryptionLevel) | Sets the current data encryption level. |
| void | JCommon.[setFile](./../../jcommon-%28jrclient-api%29#setFile-int-com.jbase.jrcs)(int index, [JFile](./../../jfile-%28jrclient-api%29 "class in com.jbase.jrcs") file) | Stores a file variable into a specific position in a common block. |
| void | JConnection.[setPasswordEncryptionLevel](./../../jconnection-%28jrclient-api%29#setPasswordEncryptionLevel-int-)(int passwordEncryptionLevel) |  Sets the current password encryption level. |
| [JSelectList](./../../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[sselect](./../../jfile-%28jrclient-api%29#sselect--)() | Selects all keys in the file in ascending sorted order. |
| void | JConnection.[startTransaction](./../../jconnection-%28jrclient-api%29#startTransaction-boolean-java.lang)(boolean sync, String transText) | Starts a transaction. |
| protected static void | JException.[throwWithCode](./../../jexception-%28jrclient-api%29#throwWithCode-int-)(int code) |  |
| void | JFile.[write](./../../jfile-%28jrclient-api%29#write-java.lang.String-com.jbase.jrcs)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data) | Writes a record to the file releasing the lock if there is one. |
| void | JFile.[write](./../../jfile-%28jrclient-api%29#write-java.lang.String-com.jbase.jrcs)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, boolean unlock) | Writes a record to the file optionally releasing the lock. |
| void | JFile.[writeNamedField](./../../jfile-%28jrclient-api%29#writeNamedField-java.lang.String-java.lang.String-com.jbase.jrcs)([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") key, String field, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data) | Writes a named record field to the file. |
| void | JFile.[writeNamedField](./../../jfile-%28jrclient-api%29#writeNamedField-java.lang.String-java.lang.String-com.jbase.jrcs)([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") key, String field, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, boolean unlock) | Writes a named record field to the file optionally releasing the lock. |
| void | JFile.[writeV](./../../jfile-%28jrclient-api%29#writeV-java.lang.String-com.jbase.jrcs)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int attrib) | Writes a record attribute to the file releasing the lock if there is one. |
| void | JFile.[writeV](./../../jfile-%28jrclient-api%29#writeV-java.lang.String-com.jbase.jrcs)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int attrib, boolean unlock) | Writes a record attribute to the file optionally releasing the lock. |

**Constructors in [com.jbase.jrcs](./../../com.jbase.jrcs-%28jrclient---api%29) that throw [JException](./../../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")**

| Constructor |  Description |
| --- | --- |
| [JDynArray](./../../jdynarray-%28jrclient---api%29)() | Default constructor. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29#JDynArray-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") src) | Constructs a dynamic array from another dynamic array. |
| [JDynArray](./../../jdynarray-%28jrclient---api%29)(String src) | Constructs a dynamic array from a string. |
