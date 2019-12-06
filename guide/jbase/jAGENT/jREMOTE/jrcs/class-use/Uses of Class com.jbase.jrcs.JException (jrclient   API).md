# Uses of Class com.jbase.jrcs.JException (jrclient   API)

**Created At:** 9/25/2017 11:27:44 AM  
**Updated At:** 12/24/2018 7:11:02 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Class com.jbase.jrcs.JException (jrclient   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript>&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
## 

## Uses of [JException](/jrcs/com_jbase_jrcs_jexception "class in com.jbase.jrcs") in [com.jbase.jrcs](/jrcs/com_jbase_jrcs_package-summary)



**Methods in [com.jbase.jrcs](/jrcs/com_jbase_jrcs_package-summary) that throw [JException](/jrcs/com_jbase_jrcs_jexception "class in com.jbase.jrcs")**




| Modifier and Type<br> | Method<br> | Description<br> |
| --- | --- | --- |
| void<br> | JConnection.[abortTransaction](/jrcs/com_jbase_jrcs_JConnection#abortTransaction-java.lang.String-)(String transText)<br> | <br>Aborts the active transaction<br> |
| void<br> | JDynArray.[assign](/jrcs/com_jbase_jrcs_jdynarray#assign-com.jbase.jrcs.JDynArray-)([JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") src)<br> | <br>Assigns the value of a dynamic array to this dynamic array<br> |
| void<br> | JDynArray.[assign](/jrcs/com_jbase_jrcs_jdynarray#assign-java.lang.String-)(String src)<br> | <br>Assigns a string value to this dynamic array<br> |
| boolean<br> | JCapture.[atEnd](/jrcs/com_jbase_jrcs_JCapture#atEnd--)()<br> | <br>Indicates whether the captured output is exhausted<br> |
| [JCommon](/jrcs/com_jbase_jrcs_jcommon "class in com.jbase.jrcs")<br> | JConnection.[attachCommon](/jrcs/com_jbase_jrcs_JConnection#attachCommon-int-java.lang.String-)(int numVars, String name)<br> | <br>Attaches a common block by name with a given number of variables<br> |
| boolean<br> | JSelectList.[bol](/jrcs/com_jbase_jrcs_jselectlist#bol--)()<br> | <br>Indicates whether the select list is at its beginning<br> |
| void<br> | JConnection.[call](/jrcs/com_jbase_jrcs_JConnection#call-java.lang.String-)(String subName)<br> | <br>Calls a host-side subroutine passing it no parameters<br> |
| void<br> | JConnection.[call](/jrcs/com_jbase_jrcs_JConnection#call-java.lang.String-com.jbase.jrcs.JDynArray%3AA-)(String subName, [JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")[] parms)<br> | <br>Calls a host-side subroutine with given parameters<br> |
| void<br> | JConnection.[call](/jrcs/com_jbase_jrcs_JConnection#call-java.lang.String-java.lang.String%3AA-)(String subName, String[] parms)<br> | <br>Calls a host-side subroutine with given parameters<br> |
| char<br> | JDynArray.[charAt](/jrcs/com_jbase_jrcs_jdynarray#charAt-int-)(int index)<br> | <br>Gets a character at a given position in the dynamic array<br> |
| void<br> | JFile.[clearFile](/jrcs/com_jbase_jrcs_jfile#clearFile--)()<br> | <br>Clears the file<br> |
| void<br> | JSelectList.[close](/jrcs/com_jbase_jrcs_jselectlist#close--)()<br> | <br>Closes the select list and releases the server-side handle<br> |
| void<br> | JIndex.[close](/jrcs/com_jbase_jrcs_jindex#close--)()<br> | <br>Closes the index and releases the server-side handle<br> |
| void<br> | JFile.[close](/jrcs/com_jbase_jrcs_jfile#close--)()<br> | <br>Closes the file and releases the server-side handle<br> |
| void<br> | JConnection.[close](/jrcs/com_jbase_jrcs_JConnection#close)()<br> | <br>Closes the connection and ends the server-side jRCS proxy process<br> |
| void<br> | JCommon.[close](/jrcs/com_jbase_jrcs_jcommon#close--)()<br> | <br>Closes the object and releases the server-side handle<br> |
| void<br> | JCapture.[close](/jrcs/com_jbase_jrcs_JCapture.html#close--)()<br> | <br>Closes the object and releases its server-side handle<br> |
| int<br> | JDynArray.[count](/jrcs/com_jbase_jrcs_jdynarray#count-char-)(char delim)<br> | <br>Counts the number of given characters in this dynamic array<br> |
| int<br> | JDynArray.[count](/jrcs/com_jbase_jrcs_jdynarray#count-java.lang.String-)(String delim)<br> | <br>Counts the number of given delimiters in this dynamic array<br> |
| int<br> | JDynArray.[dcount](/jrcs/com_jbase_jrcs_jdynarray#dcount-char-)(char delim)<br> | <br>Counts the number of fields separated by the given character<br> |
| int<br> | JDynArray.[dcount](/jrcs/com_jbase_jrcs_jdynarray#dcount-java.lang.String-)(String delim)<br> | <br>Counts the number of fields separated by the given delimiter<br> |
| void<br> | JDynArray.[delete](/jrcs/com_jbase_jrcs_jdynarray#delete-int-)(int amc)<br> | <br>Deletes the specified attribute<br> |
| void<br> | JDynArray.[delete](/jrcs/com_jbase_jrcs_jdynarray#delete-int-int-)(int amc, int vmc)<br> | <br>Deletes the specified attribute or value.<br> |
| void<br> | JDynArray.[delete](/jrcs/com_jbase_jrcs_jdynarray#delete-int-int-int-)(int amc, int vmc, int svmc)<br> | <br>Deletes the specified attribute, value or sub-value.<br> |
| void<br> | JFile.[delete](/jrcs/com_jbase_jrcs_jfile#delete-java.lang.String-)(String key)<br> | <br>Deletes a record with the given key.<br> |
| void<br> | JConnection.[deleteList](/jrcs/com_jbase_jrcs_JConnection#deleteList-java.lang.String-)(String name)<br> | <br>Deletes the specified list from a work file.<br> |
| void<br> | JConnection.[endTransaction](/jrcs/com_jbase_jrcs_JConnection#endTransaction-java.lang.String-)(String transName)<br> | <br>Ends the active transaction.<br> |
| boolean<br> | JSelectList.[eol](/jrcs/com_jbase_jrcs_jselectlist#eol--)()<br> | <br>Indicates whether the select list is at its end.<br> |
| void<br> | JConnection.execute(String command)<br> | <br>Executes a jCL/jQL command ignoring its results.<br> |
| [JExecuteResults](/jrcs/com_jbase_jrcs_jexecuteresults "class in com.jbase.jrcs")<br> | JConnection.execute(String command, int flags)<br> | <br>Executes a jCL/jQL command and retrieves select parameters resulting from execution.<br> |
| [JExecuteResults](/jrcs/com_jbase_jrcs_jexecuteresults "class in com.jbase.jrcs")<br> | JConnection.execute(String command, int flags, [JSelectList](/jrcs/com_jbase_jrcs_jselectlist "class in com.jbase.jrcs") passList)<br> | <br>Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution.<br> |
| [JExecuteResults](/jrcs/com_jbase_jrcs_jexecuteresults "class in com.jbase.jrcs")<br> | JConnection.[executeAndStore](/jrcs/com_jbase_jrcs_JConnection#executeAndStore-java.lang.String-int-)(String command, int flags)<br> | <br>Executes a jCL/jQL command and retrieves select parameters resulting from execution.<br> |
| [JExecuteResults](/jrcs/com_jbase_jrcs_jexecuteresults "class in com.jbase.jrcs")<br> | JConnection.[executeAndStore](/jrcs/com_jbase_jrcs_JConnection#executeAndStore-java.lang.String-int-com.jbase.jrcs.JSelectList-)(String command, int flags, [JSelectList](/jrcs/com_jbase_jrcs_jselectlist "class in com.jbase.jrcs") passList)<br> | <br>Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution.<br> |
| [JExecuteResults](com_jbase_jrcs_jexecuteresults "class in com.jbase.jrcs")<br> | JConnection.[executeAndStore](/jrcs/com_jbase_jrcs_JConnection#executeAndStore-)(String command, int flags, [JSelectList](com_jbase_jrcs_jselectlist "class in com.jbase.jrcs") passList, int blockSize)<br> | <br>Executes a jCL/jQL command optionally passing it a select list and retrieves select parameters resulting from execution.<br> |
| String<br> | JDynArray.[extract](/jrcs/com_jbase_jrcs_jdynarray#extract-int-)(int amc)<br> | <br>Extracts the specified attribute as a string.<br> |
| String<br> | JDynArray.[extract](/jrcs/com_jbase_jrcs_jdynarray#extract-int-int-)(int amc, int vmc)<br> | <br>Extracts the specified attribute or value as a string.<br> |
| String<br> | JDynArray.[extract](com_jbase_jrcs_jdynarray#extract-int-int-int-)(int amc, int vmc, int svmc)<br> | <br>Extracts the specified attribute, value or sub-value as a string.<br> |
| [JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | JDynArray.[extractDA](com_jbase_jrcs_jdynarray#extractDA-int-)(int amc)<br> | <br>Extracts the specified attribute as a dynamic array.<br> |
| [JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | JDynArray.[extractDA](com_jbase_jrcs_jdynarray#extractDA-int-int-)(int amc, int vmc)<br> | <br>Extracts the specified attribute or value as a dynamic array.<br> |
| [JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | JDynArray.[extractDA](com_jbase_jrcs_jdynarray#extractDA-int-int-int-)(int amc, int vmc, int svmc)<br> | <br>Extracts the specified attribute, value or sub-value as a dynamic array.<br> |
| String<br> | JDynArray.[field](/jrcs/com_jbase_jrcs_jdynarray#field-char-int-)(char delim, int fieldNo)<br> | <br>Extracts the specified field separated by the given delimiter character.<br> |
| String<br> | JDynArray.[field](/jrcs/com_jbase_jrcs_jdynarray#field-java.lang.String-int-)(String delim, int fieldNo)<br> | <br>Extracts the specified field separated by the given delimiter string.<br> |
| int<br> | JCapture.[getBlockSize](com_jbase_jrcs_JCapture#getBlockSize--)()<br> | <br>Sets the block size for nextBlock operation.<br> |
| protected com.jbase.jrcs.JConnector<br> | JConnection.[getConnector](com_jbase_jrcs_JConnection#getConnector--)()<br> | <br> |
| [JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | JCommon.[getDA](/jrcs/com_jbase_jrcs_jcommon#getDA-int-)(int index)<br> | <br>Retrieves a dynamic array from a specific position in a common block.<br> |
| int<br> | JConnection.[getDate](com_jbase_jrcs_JConnection.html#getDate--)()<br> | <br>Returns server date as an integer in internal format.<br> |
| [JFile](/jrcs/com_jbase_jrcs_jfile "class in com.jbase.jrcs")<br> | JCommon.[getFile](/jrcs/com_jbase_jrcs_jcommon#getFile-int-)(int index)<br> | <br>Retrieves a file variable from a specific position in a common block.<br> |
| [JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | JFile.[getIndex](/jrcs/com_jbase_jrcs_jfile#getIndex-java.lang.String-)(String indexName)<br> | <br>Reads information about the specified index.<br> |
| String<br> | JSelectList.[getIndexKey](/jrcs/com_jbase_jrcs_jselectlist#getIndexKey--)()<br> | <br>Returns the index key.<br> |
| [JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | JConnection.[getjBaseVersion](com_jbase_jrcs_JConnection#getjBaseVersion--)()<br> | <br>Retrieves the version of jBASE database connected to this JConnection object.<br> |
| [JSelectList](/jrcs/com_jbase_jrcs_jselectlist "class in com.jbase.jrcs")<br> | JConnection.[getList](com_jbase_jrcs_JConnection#getList-java.lang.String-)(String name)<br> | <br>Retrieves the specified list from a work file.<br> |
| String<br> | JConnection.[getLocale](com_jbase_jrcs_JConnection#getLocale--)()<br> | <br>Reserved for future use.<br> |
| String<br> | JFile.[getPath](/jrcs/com_jbase_jrcs_jfile#getPath--)()<br> | <br>Retrieves the file path.<br> |
| int<br> | JConnection.[getPort](com_jbase_jrcs_JConnection#getPort--)()<br> | <br>Returns the jBASE port number (PIB) assigned to the logged on session.<br> |
| String<br> | JSelectList.[getRecordKey](/jrcs/com_jbase_jrcs_jselectlist#getRecordKey--)()<br> | <br>Retrieves the record key.<br> |
| String<br> | JDynArray.[getString](/jrcs/com_jbase_jrcs_jdynarray#getString--)()<br> | <br>Retrieves the content of the dynamic array as a string.<br> |
| int<br> | JConnection.[getTime](com_jbase_jrcs_JConnection.html#getTime--)()<br> | <br>Retrieves the current server time as an integer in internal format.<br> |
| int<br> | JSelectList.[getVMCount](/jrcs/com_jbase_jrcs_jselectlist#getVMCount--)()<br> | <br>Retrieves the multi-value index for the current key.<br> |
| String<br> | JConnection.[iConv](/jrcs/com_jbase_jrcs_JConnection#iConv-String-java.lang.String-)(String source, String code)<br> | <br>Performs an input conversion of a string using a conversion code.<br> |
| void<br> | JDynArray.[insert](/jrcs/com_jbase_jrcs_jdynarray#insert-com.jbase.jrcs.JDynArray-int-)([JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int amc)<br> | <br>Inserts data from the given dynamic array into the specified attribute.<br> |
| void<br> | JDynArray.[insert](/jrcs/com_jbase_jrcs_jdynarray#insert-com.jbase.jrcs.JDynArray-int-int-)([JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int amc, int vmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute or value.<br> |
| void<br> | JDynArray.[insert](/jrcs/com_jbase_jrcs_jdynarray#insert-com.jbase.jrcs.JDynArray-int-int-int-)([JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int amc, int vmc, int svmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute, value or sub-value.<br> |
| void<br> | JDynArray.[insert](/jrcs/com_jbase_jrcs_jdynarray#insert-java.lang.String-int-)(String data, int amc)<br> | <br>Inserts string data into the specified attribute.<br> |
| void<br> | JDynArray.[insert](/jrcs/com_jbase_jrcs_jdynarray#insert-java.lang.String-int-int-)(String data, int amc, int vmc)<br> | <br>Inserts string data into the specified attribute or value.<br> |
| void<br> | JDynArray.[insert](/jrcs/com_jbase_jrcs_jdynarray#insert-java.lang.String-int-int-int-)(String data, int amc, int vmc, int svmc)<br> | <br>Inserts string data into the specified attribute, value or sub-value.<br> |
| void<br> | JDynArray.[insertDA](/jrcs/com_jbase_jrcs_jdynarray#insertDA-com.jbase.jrcs.JDynArray-int-)([JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int amc)<br> | <br>Inserts data from the given dynamic array into the specified attribute.<br> |
| void<br> | JDynArray.[insertDA](/jrcs/com_jbase_jrcs_jdynarray#insertDA-com.jbase.jrcs.JDynArray-int-int-)([JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int amc, int vmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute or value.<br> |
| void<br> | JDynArray.[insertDA](/jrcs/com_jbase_jrcs_jdynarray#insertDA-com.jbase.jrcs.JDynArray-int-int-int-)([JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int amc, int vmc, int svmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute, value or sub-value.<br> |
| boolean<br> | JSelectList.[isIndex](/jrcs/com_jbase_jrcs_jselectlist#isIndex--)()<br> | <br>Indicates whether this select list was generated from a jBASE index.<br> |
| int<br> | JDynArray.[length](/jrcs/com_jbase_jrcs_jdynarray#length-)()<br> | <br>Returns the length, in characters, of a dynamic array.<br> |
| int<br> | JDynArray.[locate](/jrcs/com_jbase_jrcs_jdynarray#locate-java.lang.String-)(String searchStr)<br> | <br>Searches for a string in all attributes of the dynamic array.<br> |
| int<br> | JDynArray.[locate](/jrcs/com_jbase_jrcs_jdynarray#locate-java.lang.String-int-int-java.lang.String-)(String searchStr, int amc, int vmc, String order)<br> | <br>Searches for a string in all sub-values within a given value of the dynamic array.<br> |
| int<br> | JDynArray.[locate](/jrcs/com_jbase_jrcs_jdynarray#locate-java.lang.String-int-int-java.lang.String-int-)(String searchStr, int amc, int vmc, String order, int start)<br> | <br>Similar to [JDynArray.locate(String, int, int, String)](/jrcs/com_jbase_jrcs_jdynarray#locate-java.lang.String-int-int-java.lang.String-), but allows for a start position.<br> |
| int<br> | JDynArray.[locate](/jrcs/com_jbase_jrcs_jdynarray#locate-java.lang.String-int-java.lang.String-)(String searchStr, int amc, String order)<br> | <br>Searches for a string in all values within a given attribute of the dynamic array.<br> |
| int<br> | JDynArray.[locate](/jrcs/com_jbase_jrcs_jdynarray#locate-java.lang.String-int-java.lang.String-int-)(String searchStr, int amc, String order, int start)<br> | <br>Similar to [JDynArray.locate(String, int, String)](/jrcs/com_jbase_jrcs_jdynarray#locate-java.lang.String-int-java.lang.String-), but allows for a start position.<br> |
| int<br> | JDynArray.[locate](/jrcs/com_jbase_jrcs_jdynarray#locate-java.lang.String-java.lang.String-)(String searchStr, String order)<br> | <br>Searches for a string in all attributes of the dynamic array, which is in a given sort order.<br> |
| int<br> | JDynArray.[locateIgnoreCase](/jrcs/com_jbase_jrcs_jdynarray#locateIgnoreCase-java.lang.String-)(String searchStr)<br> | <br>Similar to [JDynArray.locate(String)](/jrcs/com_jbase_jrcs_jdynarray#locate-java.lang.String-), but performs a case-insensitive comparison.<br> |
| int<br> | JDynArray.[locateIgnoreCase](/jrcs/com_jbase_jrcs_jdynarray#locateIgnoreCase-java.lang.String-int-int-java.lang.String-)(String searchStr, int amc, int vmc, String order)<br> | <br>Similar to [JDynArray.locate(String, int, int, String)](/jrcs/com_jbase_jrcs_jdynarray#locate-java.lang.String-int-int-java.lang.String-), but performs a case-insensitive comparison.<br> |
| int<br> | JDynArray.[locateIgnoreCase](/jrcs/com_jbase_jrcs_jdynarray#locateIgnoreCase-java.lang.String-int-int-java.lang.String-int-)(String searchStr, int amc, int vmc, String order, int start)<br> | <br>Similar to [JDynArray.locate(String, int, int, String, int)](/jrcs/com_jbase_jrcs_jdynarray#locate-java.lang.String-int-int-java.lang.String-int-), but performs a case-insensitive comparison.<br> |
| int<br> | JDynArray.[locateIgnoreCase](/jrcs/com_jbase_jrcs_jdynarray#locateIgnoreCase-java.lang.String-int-java.lang.String-)(String searchStr, int amc, String order)<br> | <br>Similar to [JDynArray.locate(String, int, String)](/jrcs/com_jbase_jrcs_jdynarray#locate-java.lang.String-int-java.lang.String-), but performs a case-insensitive comparison.<br> |
| int<br> | JDynArray.[locateIgnoreCase](com_jbase_jrcs_jdynarray#locateIgnoreCase-java.lang.String-int-java.lang.String-int-)(String searchStr, int amc, String order, int start)<br> | <br>Similar to [JDynArray.locate(String, int, String, int)](com_jbase_jrcs_jdynarray#locate-java.lang.String-int-java.lang.String-int-), but performs a case-insensitive comparison.<br> |
| int<br> | JDynArray.[locateIgnoreCase](com_jbase_jrcs_jdynarray#locateIgnoreCase-java.lang.String-java.lang.String-)(String searchStr, String order)<br> | <br>Similar to [JDynArray.locate(String, String)](com_jbase_jrcs_jdynarray#locate-java.lang.String-java.lang.String-), but performs a case-insensitive comparison.<br> |
| String<br> | JCapture.[nextBlock](com_jbase_jrcs_JCapture#nextBlock--)()<br> | <br>Fetches next block of captured output.<br> |
| String<br> | JConnection.[oConv](com_jbase_jrcs_JConnection#oConv-java.lang.String-java.lang.String-)(String source, String code)<br> | <br>Performs an output conversion of a string using a conversion code.<br> |
| void<br> | JConnection.[open](com_jbase_jrcs_JConnection#open-java.lang.String-int-java.lang.String-java.lang.String-java.lang.String-)(String host, int port, String userName, String password, String accountName)<br> | <br>Opens a TCP/IP connection to the given host and port and establishes a jRCS logon session with specified user name, password and account name.<br> |
| void<br> | JConnection.[open](com_jbase_jrcs_JConnection#open-java.lang.String-java.lang.String-java.lang.String-)(String host, String userName, String password)<br> | <br>Opens a TCP/IP connection to the given host and default jRCS port and establishes a jRCS logon session with specified user name and password.<br> |
| [JFile](/jrcs/com_jbase_jrcs_jfile "class in com.jbase.jrcs")<br> | JConnection.[openFile](com_jbase_jrcs_JConnection#openFile-java.lang.String-)(String fileName)<br> | <br>Opens a file with the given name.<br> |
| [JIndex](com_jbase_jrcs_jindex "class in com.jbase.jrcs")<br> | JFile.[openIndex](com_jbase_jrcs_jfile#openIndex-java.lang.String-)(String indexName)<br> | <br>Opens a named index on this file.<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | JFile.[read](com_jbase_jrcs_jfile#read-java.lang.String-)(String key)<br> | <br>Reads a record from the file without locking.<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | JFile.[read](com_jbase_jrcs_jfile#read-java.lang.String-boolean-)(String key, boolean locked)<br> | <br>Reads a record from the file, optionally locking it.<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | JFile.[read](com_jbase_jrcs_jfile#read-java.lang.String-boolean-boolean-)(String key, boolean locked, boolean wait)<br> | <br>Reads a record from the file, optionally locking it and waiting for the lock.<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | JFile.[readNamedField](com_jbase_jrcs_jfile#readNamedField-java.lang.String-java.lang.String-)(String key, String field)<br> | <br>Reads a named field from a file record.<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | JFile.[readNamedField](com_jbase_jrcs_jfile#readNamedField-java.lang.String-java.lang.String-boolean-)(String key, String field, boolean locked)<br> | <br>Reads a named field from a file record, optionally locking the record.<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | JFile.[readNamedField](com_jbase_jrcs_jfile#readNamedField-java.lang.String-java.lang.String-boolean-boolean-)(String key, String field, boolean locked, boolean wait)<br> | <br>Reads a named field from a file record, optionally locking the record.<br> |
| String<br> | JSelectList.[readNext](com_jbase_jrcs_jselectlist#readNext--)()<br> | <br>Reads the next key from the select list.<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | JFile.[readV](com_jbase_jrcs_jfile#readV-java.lang.String-int-)(String key, int attrib)<br> | <br>Reads an attribute from a file record without locking.<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | JFile.[readV](com_jbase_jrcs_jfile#readV-java.lang.String-int-boolean-)(String key, int attrib, boolean locked)<br> | <br>Reads an attribute from a file record, optionally locking the record.<br> |
| [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs")<br> | JFile.[readV](com_jbase_jrcs_jfile#readV-java.lang.String-int-boolean-boolean-)(String key, int attrib, boolean locked, boolean wait)<br> | <br>Reads an attribute from a file record, optionally locking the record and waiting for the lock.<br> |
| void<br> | JFile.[release](com_jbase_jrcs_jfile#release-java.lang.String-)(String key)<br> | <br>Releases a lock on a file record.<br> |
| void<br> | JFile.[releaseAll](com_jbase_jrcs_jfile#releaseAll--)()<br> | <br>Releases all locks held by the current session on the given file.<br> |
| void<br> | JDynArray.[replace](com_jbase_jrcs_jdynarray#replacey-int-)([JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int amc)<br> | <br>Replaces the given attribute with the content of specified dynamic array.<br> |
| void<br> | JDynArray.[replace](com_jbase_jrcs_jdynarray#replace-int-int-)([JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int amc, int vmc)<br> | <br>Replaces the given attribute or value with the content of specified dynamic array.<br> |
| void<br> | JDynArray.[replace](com_jbase_jrcs_jdynarray#replace-int-int-int-)([JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int amc, int vmc, int svmc)<br> | <br>Replaces the given attribute, value or sub-value with the content of specified dynamic array.<br> |
| void<br> | JDynArray.[replace](com_jbase_jrcs_jdynarray#replace-java.lang.String-int-)(String data, int amc)<br> | <br>Replaces the given attribute with specified string.<br> |
| void<br> | JDynArray.[replace](com_jbase_jrcs_jdynarray#replace-java.lang.String-int-int-)(String data, int amc, int vmc)<br> | <br>Replaces the given attribute or value with specified string.<br> |
| void<br> | JDynArray.[replace](com_jbase_jrcs_jdynarray#replace-java.lang.String-int-int-int-)(String data, int amc, int vmc, int svmc)<br> | <br>Replaces the given attribute, value or sub-value with specified string.<br> |
| void<br> | JDynArray.[replaceDA](com_jbase_jrcs_jdynarray#replaceDA-int-)([JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int amc)<br> | <br>Replaces the given attribute with the content of specified dynamic array Same as replace(JDynArray, amc).<br> |
| void<br> | JDynArray.[replaceDA](com_jbase_jrcs_jdynarray#replaceDA-int-)([JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int amc, int vmc)<br> | <br>Replaces the given attribute or value with the content of specified dynamic array Same as replace(JDynArray, amc, vmc).<br> |
| void<br> | JDynArray.[replaceDA](com_jbase_jrcs_jdynarray#replaceDA-com.jbase.jrcs.JDynArray-int-int-int-)([JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int amc, int vmc, int svmc)<br> | <br>Replaces the given attribute, value or sub-value with the content of specified dynamic array.<br> |
| void<br> | JCapture.[rewind](com_jbase_jrcs_JCapture#rewind-ava.lang.String-)()<br> | <br>Returns the current position in the saved output to the beginning of the output stream.<br> |
| void<br> | JSelectList.[saveList](com_jbase_jrcs_jselectlist#saveList-java.lang.String-)(String listName)<br> | <br>Saves the list under the specified name in a work file.<br> |
| [JSelectList](com_jbase_jrcs_jselectlist "class in com.jbase.jrcs")<br> | JIndex.[select](com_jbase_jrcs_jindex#select--)()<br> | <br>Generates a select list from this index variable.<br> |
| [JSelectList](com_jbase_jrcs_jselectlist "class in com.jbase.jrcs")<br> | JFile.[select](com_jbase_jrcs_jfile#select--)()<br> | <br>Selects all keys in the file in hash order.<br> |
| void<br> | JCapture.[setBlockSize](com_jbase_jrcs_JCapture#setBlockSize-int-)(int blockSize)<br> | <br>Gets the block size for the nextBlock method.<br> |
| void<br> | JDynArray.[setCharAt](com_jbase_jrcs_jdynarray#setCharAt-int-char-)(int index, char newChar)<br> | <br>Sets a character at a given location in the dynamic array.<br> |
| void<br> | JCommon.[setDA](com_jbase_jrcs_jcommon#setDA-int-com.jbase.jrcs.JDynArray-)(int index, [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") dynArray)<br> | <br>Stores a dynamic array into a specific position in a common block.<br> |
| void<br> | JConnection.[setDataEncryptionLevel](com_jbase_jrcs_JConnection#setDataEncryptionLevel-int-)(int dataEncryptionLevel)<br> | <br>Sets the current data encryption level.<br> |
| void<br> | JCommon.[setFile](com_jbase_jrcs_jcommon#setFile-int-com.jbase.jrcs.JFile-)(int index, [JFile](com_jbase_jrcs_jfile "class in com.jbase.jrcs") file)<br> | <br>Stores a file variable into a specific position in a common block.<br> |
| void<br> | JConnection.[setPasswordEncryptionLevel](com_jbase_jrcs_JConnection#setPasswordEncryptionLevel-int-)(int passwordEncryptionLevel)<br> |  Sets the current password encryption level.<br> |
| [JSelectList](com_jbase_jrcs_jselectlist "class in com.jbase.jrcs")<br> | JFile.[sselect](com_jbase_jrcs_jfile#sselect--)()<br> | <br>Selects all keys in the file in ascending sorted order.<br> |
| void<br> | JConnection.[startTransaction](com_jbase_jrcs_JConnection#startTransaction-boolean-java.lang.String-)(boolean sync, String transText)<br> | <br>Starts a transaction.<br> |
| protected static void<br> | JException.[throwWithCode](com_jbase_jrcs_jexception#throwWithCode-int-)(int code)<br> | <br> |
| void<br> | JFile.[write](com_jbase_jrcs_jfile#write-java.lang.String-com.jbase.jrcs.JDynArray-)(String key, [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data)<br> | <br>Writes a record to the file releasing the lock if there is one.<br> |
| void<br> | JFile.[write](com_jbase_jrcs_jfile#write-java.lang.String-com.jbase.jrcs.JDynArray-boolean-)(String key, [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, boolean unlock)<br> | <br>Writes a record to the file optionally releasing the lock.<br> |
| void<br> | JFile.[writeNamedField](com_jbase_jrcs_jfile#writeNamedField-java.lang.String-java.lang.String-com.jbase.jrcs.JDynArray-)([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") key, String field, [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data)<br> | <br>Writes a named record field to the file.<br> |
| void<br> | JFile.[writeNamedField](com_jbase_jrcs_jfile#writeNamedField-java.lang.String-java.lang.String-com.jbase.jrcs.JDynArray-boolean-)([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") key, String field, [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, boolean unlock)<br> | <br>Writes a named record field to the file optionally releasing the lock.<br> |
| void<br> | JFile.[writeV](com_jbase_jrcs_jfile#writeV-java.lang.String-com.jbase.jrcs.JDynArray-int-)(String key, [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int attrib)<br> | <br>Writes a record attribute to the file releasing the lock if there is one.<br> |
| void<br> | JFile.[writeV](com_jbase_jrcs_jfile#writeV-java.lang.String-com.jbase.jrcs.JDynArray-int-boolean-)(String key, [JDynArray](com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") data, int attrib, boolean unlock)<br> | <br>Writes a record attribute to the file optionally releasing the lock.<br> |




**Constructors in [com.jbase.jrcs](com_jbase_jrcs_package-summary) that throw [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")**


| Constructor<br> |  Description<br> |
| --- | --- |
| [JDynArray](com_jbase_jrcs_jdynarray)()<br> | <br>Default constructor.<br> |
| [JDynArray](/jrcs/com_jbase_jrcs_jdynarray#JDynArray-com.jbase.jrcs.JDynArray-)([JDynArray](/jrcs/com_jbase_jrcs_jdynarray "class in com.jbase.jrcs") src)<br> | <br>Constructs a dynamic array from another dynamic array.<br> |
| [JDynArray](com_jbase_jrcs_jdynarray)(String src)<br> | <br>Constructs a dynamic array from a string.<br> |



<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


