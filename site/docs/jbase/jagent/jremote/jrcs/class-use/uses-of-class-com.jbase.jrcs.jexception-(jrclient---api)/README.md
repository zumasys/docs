# Uses of Class com.jbase.jrcs.JException (jrclient   API)

**Created At:** 9/25/2017 11:27:44 AM  
**Updated At:** 12/24/2018 7:11:02 PM  
**Original Doc:** [com_jbase_jrcs_class-use_jexception](https://docs.jbase.com/39245-class-use/com_jbase_jrcs_class-use_jexception)  
**Original ID:** 278024  
**Internal:** No  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jrcs.JException (jrclient   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->&amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;gt;
## 

## Uses of [JException](./../../jexception-%28jrclient-api%29 "class in com.jbase.jrcs") in [com.jbase.jrcs](./../../com.jbase.jrcs-%28jrclient---api%29)



**Methods in [com.jbase.jrcs](./../../com.jbase.jrcs-%28jrclient---api%29) that throw [JException](./../../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")**




| Modifier and Type<br> | Method<br> | Description<br> |
| --- | --- | --- |
| void<br> | JConnection.[abortTransaction](./../../jconnection-%28jrclient-api%29#abortTransaction-java.lang)(String transText)<br> | <br>Aborts the active transaction<br> |
| void<br> | JDynArray.[assign](./../../jdynarray-%28jrclient---api%29#assign-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") src)<br> | <br>Assigns the value of a dynamic array to this dynamic array<br> |
| void<br> | JDynArray.[assign](./../../jdynarray-%28jrclient---api%29#assign-java.lang)(String src)<br> | <br>Assigns a string value to this dynamic array<br> |
| boolean<br> | JCapture.[atEnd](./../../jcapture-%28jrclient-api%29#atEnd--)()<br> | <br>Indicates whether the captured output is exhausted<br> |
| [JCommon](./../../jcommon-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | JConnection.[attachCommon](./../../jconnection-%28jrclient-api%29#attachCommon-int-java.lang)(int numVars, String name)<br> | <br>Attaches a common block by name with a given number of variables<br> |
| boolean<br> | JSelectList.[bol](./../../jselectlist-%28jrclient---api%29#bol--)()<br> | <br>Indicates whether the select list is at its beginning<br> |
| void<br> | JConnection.[call](./../../jconnection-%28jrclient-api%29#call-java.lang)(String subName)<br> | <br>Calls a host-side subroutine passing it no parameters<br> |
| void<br> | JConnection.[call](./../../jconnection-%28jrclient-api%29#call-java.lang.String-com.jbase.jrcs)(String subName, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")[] parms)<br> | <br>Calls a host-side subroutine with given parameters<br> |
| void<br> | JConnection.[call](./../../jconnection-%28jrclient-api%29#call-java.lang.String-java.lang)(String subName, String[] parms)<br> | <br>Calls a host-side subroutine with given parameters<br> |
| char<br> | JDynArray.[charAt](./../../jdynarray-%28jrclient---api%29#charAt-int-)(int index)<br> | <br>Gets a character at a given position in the dynamic array<br> |
| void<br> | JFile.[clearFile](./../../jfile-%28jrclient-api%29#clearFile--)()<br> | <br>Clears the file<br> |
| void<br> | JSelectList.[close](./../../jselectlist-%28jrclient---api%29#close--)()<br> | <br>Closes the select list and releases the server-side handle<br> |
| void<br> | JIndex.[close](./../../jindex-%28jrclient-api%29#close--)()<br> | <br>Closes the index and releases the server-side handle<br> |
| void<br> | JFile.[close](./../../jfile-%28jrclient-api%29#close--)()<br> | <br>Closes the file and releases the server-side handle<br> |
| void<br> | JConnection.[close](./../../jconnection-%28jrclient-api%29#close)()<br> | <br>Closes the connection and ends the server-side jRCS proxy process<br> |
| void<br> | JCommon.[close](./../../jcommon-%28jrclient-api%29#close--)()<br> | <br>Closes the object and releases the server-side handle<br> |
| void<br> | JCapture.[close](./../../jcapture-%28jrclient-api%29)()<br> | <br>Closes the object and releases its server-side handle<br> |
| int<br> | JDynArray.[count](./../../jdynarray-%28jrclient---api%29#count-char-)(char delim)<br> | <br>Counts the number of given characters in this dynamic array<br> |
| int<br> | JDynArray.[count](./../../jdynarray-%28jrclient---api%29#count-java.lang)(String delim)<br> | <br>Counts the number of given delimiters in this dynamic array<br> |
| int<br> | JDynArray.[dcount](./../../jdynarray-%28jrclient---api%29#dcount-char-)(char delim)<br> | <br>Counts the number of fields separated by the given character<br> |
| int<br> | JDynArray.[dcount](./../../jdynarray-%28jrclient---api%29#dcount-java.lang)(String delim)<br> | <br>Counts the number of fields separated by the given delimiter<br> |
| void<br> | JDynArray.[delete](./../../jdynarray-%28jrclient---api%29#delete-int-)(int amc)<br> | <br>Deletes the specified attribute<br> |
| void<br> | JDynArray.[delete](./../../jdynarray-%28jrclient---api%29#delete-int-int-)(int amc, int vmc)<br> | <br>Deletes the specified attribute or value.<br> |
| void<br> | JDynArray.[delete](./../../jdynarray-%28jrclient---api%29#delete-int-int-int-)(int amc, int vmc, int svmc)<br> | <br>Deletes the specified attribute, value or sub-value.<br> |
| void<br> | JFile.[delete](./../../jfile-%28jrclient-api%29#delete-java.lang)(String key)<br> | <br>Deletes a record with the given key.<br> |
| void<br> | JConnection.[deleteList](./../../jconnection-%28jrclient-api%29#deleteList-java.lang)(String name)<br> | <br>Deletes the specified list from a work file.<br> |
| void<br> | JConnection.[endTransaction](./../../jconnection-%28jrclient-api%29#endTransaction-java.lang)(String transName)<br> | <br>Ends the active transaction.<br> |
| boolean<br> | JSelectList.[eol](./../../jselectlist-%28jrclient---api%29#eol--)()<br> | <br>Indicates whether the select list is at its end.<br> |
| void<br> | JConnection.execute(String command)<br> | <br>Executes a jCL/jQL command ignoring its results.<br> |
| [JExecuteResults](./../../jexecuteresults-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | JConnection.execute(String command, int flags)<br> | <br>Executes a jCL/jQL command and retrieves select parameters resulting from execution.<br> |
| [JExecuteResults](./../../jexecuteresults-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | JConnection.execute(String command, int flags, [JSelectList](./../../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs") passList)<br> | <br>Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution.<br> |
| [JExecuteResults](./../../jexecuteresults-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | JConnection.[executeAndStore](./../../jconnection-%28jrclient-api%29#executeAndStore-java.lang)(String command, int flags)<br> | <br>Executes a jCL/jQL command and retrieves select parameters resulting from execution.<br> |
| [JExecuteResults](./../../jexecuteresults-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | JConnection.[executeAndStore](./../../jconnection-%28jrclient-api%29#executeAndStore-java.lang.String-int-com.jbase.jrcs)(String command, int flags, [JSelectList](./../../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs") passList)<br> | <br>Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution.<br> |
| [JExecuteResults](./../../jexecuteresults-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | JConnection.[executeAndStore](./../../jconnection-%28jrclient-api%29#executeAndStore-)(String command, int flags, [JSelectList](./../../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs") passList, int blockSize)<br> | <br>Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution.<br> |
| String<br> | JDynArray.[extract](./../../jdynarray-%28jrclient---api%29#extract-int-)(int amc)<br> | <br>Extracts the specified attribute as a string.<br> |
| String<br> | JDynArray.[extract](./../../jdynarray-%28jrclient---api%29#extract-int-int-)(int amc, int vmc)<br> | <br>Extracts the specified attribute or value as a string.<br> |
| String<br> | JDynArray.[extract](./../../jdynarray-%28jrclient---api%29#extract-int-int-int-)(int amc, int vmc, int svmc)<br> | <br>Extracts the specified attribute, value or sub-value as a string.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JDynArray.[extractDA](./../../jdynarray-%28jrclient---api%29#extractDA-int-)(int amc)<br> | <br>Extracts the specified attribute as a dynamic array.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JDynArray.[extractDA](./../../jdynarray-%28jrclient---api%29#extractDA-int-int-)(int amc, int vmc)<br> | <br>Extracts the specified attribute or value as a dynamic array.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JDynArray.[extractDA](./../../jdynarray-%28jrclient---api%29#extractDA-int-int-int-)(int amc, int vmc, int svmc)<br> | <br>Extracts the specified attribute, value or sub-value as a dynamic array.<br> |
| String<br> | JDynArray.[field](./../../jdynarray-%28jrclient---api%29#field-char-int-)(char delim, int fieldNo)<br> | <br>Extracts the specified field separated by the given delimiter character.<br> |
| String<br> | JDynArray.[field](./../../jdynarray-%28jrclient---api%29#field-java.lang)(String delim, int fieldNo)<br> | <br>Extracts the specified field separated by the given delimiter string.<br> |
| int<br> | JCapture.[getBlockSize](./../../jcapture-%28jrclient-api%29#getBlockSize--)()<br> | <br>Sets the block size for nextBlock operation.<br> |
| protected com.jbase.jrcs.JConnector<br> | JConnection.[getConnector](./../../jconnection-%28jrclient-api%29#getConnector--)()<br> | <br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JCommon.[getDA](./../../jcommon-%28jrclient-api%29#getDA-int-)(int index)<br> | <br>Retrieves a dynamic array from a specific position in a common block.<br> |
| int<br> | JConnection.[getDate](./../../jconnection-%28jrclient-api%29)()<br> | <br>Returns server date as an integer in internal format.<br> |
| [JFile](./../../jfile-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | JCommon.[getFile](./../../jcommon-%28jrclient-api%29#getFile-int-)(int index)<br> | <br>Retrieves a file variable from a specific position in a common block.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[getIndex](./../../jfile-%28jrclient-api%29#getIndex-java.lang)(String indexName)<br> | <br>Reads information about the specified index.<br> |
| String<br> | JSelectList.[getIndexKey](./../../jselectlist-%28jrclient---api%29#getIndexKey--)()<br> | <br>Returns the index key.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JConnection.[getjBaseVersion](./../../jconnection-%28jrclient-api%29#getjBaseVersion--)()<br> | <br>Retrieves the version of jBASE database connected to this JConnection object.<br> |
| [JSelectList](./../../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JConnection.[getList](./../../jconnection-%28jrclient-api%29#getList-java.lang)(String name)<br> | <br>Retrieves the specified list from a work file.<br> |
| String<br> | JConnection.[getLocale](./../../jconnection-%28jrclient-api%29#getLocale--)()<br> | <br>Reserved for future use.<br> |
| String<br> | JFile.[getPath](./../../jfile-%28jrclient-api%29#getPath--)()<br> | <br>Retrieves the file path.<br> |
| int<br> | JConnection.[getPort](./../../jconnection-%28jrclient-api%29#getPort--)()<br> | <br>Returns the jBASE port number (PIB) assigned to the logged on session.<br> |
| String<br> | JSelectList.[getRecordKey](./../../jselectlist-%28jrclient---api%29#getRecordKey--)()<br> | <br>Retrieves the record key.<br> |
| String<br> | JDynArray.[getString](./../../jdynarray-%28jrclient---api%29#getString--)()<br> | <br>Retrieves the content of the dynamic array as a string.<br> |
| int<br> | JConnection.[getTime](./../../jconnection-%28jrclient-api%29)()<br> | <br>Retrieves the current server time as an integer in internal format.<br> |
| int<br> | JSelectList.[getVMCount](./../../jselectlist-%28jrclient---api%29#getVMCount--)()<br> | <br>Retrieves the multi-value index for the current key.<br> |
| String<br> | JConnection.[iConv](./../../jconnection-%28jrclient-api%29#iConv-String-java.lang)(String source, String code)<br> | <br>Performs an input conversion of a string using a conversion code.<br> |
| void<br> | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29#insert-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc)<br> | <br>Inserts data from the given dynamic array into the specified attribute.<br> |
| void<br> | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29#insert-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute or value.<br> |
| void<br> | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29#insert-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute, value or sub-value.<br> |
| void<br> | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29#insert-java.lang)(String data, int amc)<br> | <br>Inserts string data into the specified attribute.<br> |
| void<br> | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29#insert-java.lang)(String data, int amc, int vmc)<br> | <br>Inserts string data into the specified attribute or value.<br> |
| void<br> | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29#insert-java.lang)(String data, int amc, int vmc, int svmc)<br> | <br>Inserts string data into the specified attribute, value or sub-value.<br> |
| void<br> | JDynArray.[insertDA](./../../jdynarray-%28jrclient---api%29#insertDA-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc)<br> | <br>Inserts data from the given dynamic array into the specified attribute.<br> |
| void<br> | JDynArray.[insertDA](./../../jdynarray-%28jrclient---api%29#insertDA-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute or value.<br> |
| void<br> | JDynArray.[insertDA](./../../jdynarray-%28jrclient---api%29#insertDA-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute, value or sub-value.<br> |
| boolean<br> | JSelectList.[isIndex](./../../jselectlist-%28jrclient---api%29#isIndex--)()<br> | <br>Indicates whether this select list was generated from a jBASE index.<br> |
| int<br> | JDynArray.[length](./../../jdynarray-%28jrclient---api%29#length-)()<br> | <br>Returns the length, in characters, of a dynamic array.<br> |
| int<br> | JDynArray.[locate](./../../jdynarray-%28jrclient---api%29#locate-java.lang)(String searchStr)<br> | <br>Searches for a string in all attributes of the dynamic array.<br> |
| int<br> | JDynArray.[locate](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-int-java.lang)(String searchStr, int amc, int vmc, String order)<br> | <br>Searches for a string in all sub-values within a given value of the dynamic array.<br> |
| int<br> | JDynArray.[locate](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-int-java.lang)(String searchStr, int amc, int vmc, String order, int start)<br> | <br>Similar to [JDynArray.locate(String, int, int, String)](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-int-java.lang), but allows for a start position.<br> |
| int<br> | JDynArray.[locate](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-java.lang)(String searchStr, int amc, String order)<br> | <br>Searches for a string in all values within a given attribute of the dynamic array.<br> |
| int<br> | JDynArray.[locate](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-java.lang)(String searchStr, int amc, String order, int start)<br> | <br>Similar to [JDynArray.locate(String, int, String)](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-java.lang), but allows for a start position.<br> |
| int<br> | JDynArray.[locate](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-java.lang)(String searchStr, String order)<br> | <br>Searches for a string in all attributes of the dynamic array, which is in a given sort order.<br> |
| int<br> | JDynArray.[locateIgnoreCase](./../../jdynarray-%28jrclient---api%29#locateIgnoreCase-java.lang)(String searchStr)<br> | <br>Similar to [JDynArray.locate(String)](./../../jdynarray-%28jrclient---api%29#locate-java.lang), but performs a case-insensitive comparison.<br> |
| int<br> | JDynArray.[locateIgnoreCase](./../../jdynarray-%28jrclient---api%29#locateIgnoreCase-java.lang.String-int-int-java.lang)(String searchStr, int amc, int vmc, String order)<br> | <br>Similar to [JDynArray.locate(String, int, int, String)](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-int-java.lang), but performs a case-insensitive comparison.<br> |
| int<br> | JDynArray.[locateIgnoreCase](./../../jdynarray-%28jrclient---api%29#locateIgnoreCase-java.lang.String-int-int-java.lang)(String searchStr, int amc, int vmc, String order, int start)<br> | <br>Similar to [JDynArray.locate(String, int, int, String, int)](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-int-java.lang), but performs a case-insensitive comparison.<br> |
| int<br> | JDynArray.[locateIgnoreCase](./../../jdynarray-%28jrclient---api%29#locateIgnoreCase-java.lang.String-int-java.lang)(String searchStr, int amc, String order)<br> | <br>Similar to [JDynArray.locate(String, int, String)](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-java.lang), but performs a case-insensitive comparison.<br> |
| int<br> | JDynArray.[locateIgnoreCase](./../../jdynarray-%28jrclient---api%29#locateIgnoreCase-java.lang.String-int-java.lang)(String searchStr, int amc, String order, int start)<br> | <br>Similar to [JDynArray.locate(String, int, String, int)](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-int-java.lang), but performs a case-insensitive comparison.<br> |
| int<br> | JDynArray.[locateIgnoreCase](./../../jdynarray-%28jrclient---api%29#locateIgnoreCase-java.lang.String-java.lang)(String searchStr, String order)<br> | <br>Similar to [JDynArray.locate(String, String)](./../../jdynarray-%28jrclient---api%29#locate-java.lang.String-java.lang), but performs a case-insensitive comparison.<br> |
| String<br> | JCapture.[nextBlock](./../../jcapture-%28jrclient-api%29#nextBlock--)()<br> | <br>Fetches next block of captured output.<br> |
| String<br> | JConnection.[oConv](./../../jconnection-%28jrclient-api%29#oConv-java.lang.String-java.lang)(String source, String code)<br> | <br>Performs an output conversion of a string using a conversion code.<br> |
| void<br> | JConnection.[open](./../../jconnection-%28jrclient-api%29#open-java.lang.String-int-java.lang.String-java.lang.String-java.lang)(String host, int port, String userName, String password, String accountName)<br> | <br>Opens a TCP/IP connection to the given host and port and establishes a jRCS logon session with specified user name, password and account name.<br> |
| void<br> | JConnection.[open](./../../jconnection-%28jrclient-api%29#open-java.lang.String-java.lang.String-java.lang)(String host, String userName, String password)<br> | <br>Opens a TCP/IP connection to the given host and default jRCS port and establishes a jRCS logon session with specified user name and password.<br> |
| [JFile](./../../jfile-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | JConnection.[openFile](./../../jconnection-%28jrclient-api%29#openFile-java.lang)(String fileName)<br> | <br>Opens a file with the given name.<br> |
| [JIndex](./../../jindex-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | JFile.[openIndex](./../../jfile-%28jrclient-api%29#openIndex-java.lang)(String indexName)<br> | <br>Opens a named index on this file.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[read](./../../jfile-%28jrclient-api%29#read-java.lang)(String key)<br> | <br>Reads a record from the file without locking.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[read](./../../jfile-%28jrclient-api%29#read-java.lang)(String key, boolean locked)<br> | <br>Reads a record from the file, optionally locking it.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[read](./../../jfile-%28jrclient-api%29#read-java.lang)(String key, boolean locked, boolean wait)<br> | <br>Reads a record from the file, optionally locking it and waiting for the lock.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[readNamedField](./../../jfile-%28jrclient-api%29#readNamedField-java.lang.String-java.lang)(String key, String field)<br> | <br>Reads a named field from a file record.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[readNamedField](./../../jfile-%28jrclient-api%29#readNamedField-java.lang.String-java.lang)(String key, String field, boolean locked)<br> | <br>Reads a named field from a file record, optionally locking the record.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[readNamedField](./../../jfile-%28jrclient-api%29#readNamedField-java.lang.String-java.lang)(String key, String field, boolean locked, boolean wait)<br> | <br>Reads a named field from a file record, optionally locking the record.<br> |
| String<br> | JSelectList.[readNext](./../../jselectlist-%28jrclient---api%29#readNext--)()<br> | <br>Reads the next key from the select list.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[readV](./../../jfile-%28jrclient-api%29#readV-java.lang)(String key, int attrib)<br> | <br>Reads an attribute from a file record without locking.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[readV](./../../jfile-%28jrclient-api%29#readV-java.lang)(String key, int attrib, boolean locked)<br> | <br>Reads an attribute from a file record, optionally locking the record.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[readV](./../../jfile-%28jrclient-api%29#readV-java.lang)(String key, int attrib, boolean locked, boolean wait)<br> | <br>Reads an attribute from a file record, optionally locking the record and waiting for the lock.<br> |
| void<br> | JFile.[release](./../../jfile-%28jrclient-api%29#release-java.lang)(String key)<br> | <br>Releases a lock on a file record.<br> |
| void<br> | JFile.[releaseAll](./../../jfile-%28jrclient-api%29#releaseAll--)()<br> | <br>Releases all locks held by the current session on the given file.<br> |
| void<br> | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29#replacey-int-)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc)<br> | <br>Replaces the given attribute with the content of specified dynamic array.<br> |
| void<br> | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29#replace-int-int-)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc)<br> | <br>Replaces the given attribute or value with the content of specified dynamic array.<br> |
| void<br> | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29#replace-int-int-int-)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc)<br> | <br>Replaces the given attribute, value or sub-value with the content of specified dynamic array.<br> |
| void<br> | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29#replace-java.lang)(String data, int amc)<br> | <br>Replaces the given attribute with specified string.<br> |
| void<br> | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29#replace-java.lang)(String data, int amc, int vmc)<br> | <br>Replaces the given attribute or value with specified string.<br> |
| void<br> | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29#replace-java.lang)(String data, int amc, int vmc, int svmc)<br> | <br>Replaces the given attribute, value or sub-value with specified string.<br> |
| void<br> | JDynArray.[replaceDA](./../../jdynarray-%28jrclient---api%29#replaceDA-int-)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc)<br> | <br>Replaces the given attribute with the content of specified dynamic array Same as replace(JDynArray, amc).<br> |
| void<br> | JDynArray.[replaceDA](./../../jdynarray-%28jrclient---api%29#replaceDA-int-)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc)<br> | <br>Replaces the given attribute or value with the content of specified dynamic array Same as replace(JDynArray, amc, vmc).<br> |
| void<br> | JDynArray.[replaceDA](./../../jdynarray-%28jrclient---api%29#replaceDA-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc)<br> | <br>Replaces the given attribute, value or sub-value with the content of specified dynamic array.<br> |
| void<br> | JCapture.[rewind](./../../jcapture-%28jrclient-api%29#rewind-ava.lang)()<br> | <br>Returns the current position in the saved output to the beginning of the output stream.<br> |
| void<br> | JSelectList.[saveList](./../../jselectlist-%28jrclient---api%29#saveList-java.lang)(String listName)<br> | <br>Saves the list under the specified name in a work file.<br> |
| [JSelectList](./../../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JIndex.[select](./../../jindex-%28jrclient-api%29#select--)()<br> | <br>Generates a select list from this index variable.<br> |
| [JSelectList](./../../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[select](./../../jfile-%28jrclient-api%29#select--)()<br> | <br>Selects all keys in the file in hash order.<br> |
| void<br> | JCapture.[setBlockSize](./../../jcapture-%28jrclient-api%29#setBlockSize-int-)(int blockSize)<br> | <br>Gets the block size for the nextBlock method.<br> |
| void<br> | JDynArray.[setCharAt](./../../jdynarray-%28jrclient---api%29#setCharAt-int-char-)(int index, char newChar)<br> | <br>Sets a character at a given location in the dynamic array.<br> |
| void<br> | JCommon.[setDA](./../../jcommon-%28jrclient-api%29#setDA-int-com.jbase.jrcs)(int index, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") dynArray)<br> | <br>Stores a dynamic array into a specific position in a common block.<br> |
| void<br> | JConnection.[setDataEncryptionLevel](./../../jconnection-%28jrclient-api%29#setDataEncryptionLevel-int-)(int dataEncryptionLevel)<br> | <br>Sets the current data encryption level.<br> |
| void<br> | JCommon.[setFile](./../../jcommon-%28jrclient-api%29#setFile-int-com.jbase.jrcs)(int index, [JFile](./../../jfile-%28jrclient-api%29 "class in com.jbase.jrcs") file)<br> | <br>Stores a file variable into a specific position in a common block.<br> |
| void<br> | JConnection.[setPasswordEncryptionLevel](./../../jconnection-%28jrclient-api%29#setPasswordEncryptionLevel-int-)(int passwordEncryptionLevel)<br> |  Sets the current password encryption level.<br> |
| [JSelectList](./../../jselectlist-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[sselect](./../../jfile-%28jrclient-api%29#sselect--)()<br> | <br>Selects all keys in the file in ascending sorted order.<br> |
| void<br> | JConnection.[startTransaction](./../../jconnection-%28jrclient-api%29#startTransaction-boolean-java.lang)(boolean sync, String transText)<br> | <br>Starts a transaction.<br> |
| protected static void<br> | JException.[throwWithCode](./../../jexception-%28jrclient-api%29#throwWithCode-int-)(int code)<br> | <br> |
| void<br> | JFile.[write](./../../jfile-%28jrclient-api%29#write-java.lang.String-com.jbase.jrcs)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data)<br> | <br>Writes a record to the file releasing the lock if there is one.<br> |
| void<br> | JFile.[write](./../../jfile-%28jrclient-api%29#write-java.lang.String-com.jbase.jrcs)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, boolean unlock)<br> | <br>Writes a record to the file optionally releasing the lock.<br> |
| void<br> | JFile.[writeNamedField](./../../jfile-%28jrclient-api%29#writeNamedField-java.lang.String-java.lang.String-com.jbase.jrcs)([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") key, String field, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data)<br> | <br>Writes a named record field to the file.<br> |
| void<br> | JFile.[writeNamedField](./../../jfile-%28jrclient-api%29#writeNamedField-java.lang.String-java.lang.String-com.jbase.jrcs)([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") key, String field, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, boolean unlock)<br> | <br>Writes a named record field to the file optionally releasing the lock.<br> |
| void<br> | JFile.[writeV](./../../jfile-%28jrclient-api%29#writeV-java.lang.String-com.jbase.jrcs)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int attrib)<br> | <br>Writes a record attribute to the file releasing the lock if there is one.<br> |
| void<br> | JFile.[writeV](./../../jfile-%28jrclient-api%29#writeV-java.lang.String-com.jbase.jrcs)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int attrib, boolean unlock)<br> | <br>Writes a record attribute to the file optionally releasing the lock.<br> |




**Constructors in [com.jbase.jrcs](./../../com.jbase.jrcs-%28jrclient---api%29) that throw [JException](./../../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")**


| Constructor<br> |  Description<br> |
| --- | --- |
| [JDynArray](./../../jdynarray-%28jrclient---api%29)()<br> | <br>Default constructor.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29#JDynArray-com.jbase.jrcs)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") src)<br> | <br>Constructs a dynamic array from another dynamic array.<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29)(String src)<br> | <br>Constructs a dynamic array from a string.<br> |







