# Uses of Class com.jbase.jrcs.JDynArray (jrclient   API)

**Created At:** 9/25/2017 11:27:37 AM  
**Updated At:** 12/24/2018 7:20:14 PM  
**Original Doc:** [com_jbase_jrcs_class-use_jdynarray](https://docs.jbase.com/39245-class-use/com_jbase_jrcs_class-use_jdynarray)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jrcs.JDynArray (jrclient   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->&amp;lt;div&amp;gt;JavaScript is disabled on your browser.&amp;lt;/div&amp;gt;
## Uses of [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") in [com.jbase.jrcs](./../../com.jbase.jrcs-%28jrclient---api%29)



**Methods in [com.jbase.jrcs](./../../com.jbase.jrcs-%28jrclient---api%29) that return**[**JDynArray**](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")


| Modifier and Type<br> | Method<br> |  Description<br> |
| --- | --- | --- |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JDynArray.[extractDA](./../../jdynarray-%28jrclient---api%29)(int amc)<br> | <br>Extracts the specified attribute as a dynamic array<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JDynArray.[extractDA](./../../jdynarray-%28jrclient---api%29)(int amc, int vmc)<br> | <br>Extracts the specified attribute or value as a dynamic array<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JDynArray.[extractDA](./../../jdynarray-%28jrclient---api%29)(int amc, int vmc, int svmc)<br> |  Extracts the specified attribute, value or sub-value as a dynamic array<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JCommon.[getDA](./../../jcommon-%28jrclient-api%29)(int index)<br> | <br>Retrieves a dynamic array from a specific position in a common block<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[getIndex](./../../jfile-%28jrclient-api%29)(String indexName)<br> | <br>Reads information about the specified index<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JConnection.[getjBaseVersion](./../../jconnection-%28jrclient-api%29)()<br> | <br>Retrieves the version of jBASE database connected to this JConnection object<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[read](./../../jfile-%28jrclient-api%29)(String key)<br> | <br>Reads a record from the file without locking<br><br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[read](./../../jfile-%28jrclient-api%29)(String key, boolean locked)<br> | <br>Reads a record from the file, optionally locking it<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[read](./../../jfile-%28jrclient-api%29)(String key, boolean locked, boolean wait)<br> | <br>Reads a record from the file, optionally locking it and waiting for the lock<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[readNamedField](./../../jfile-%28jrclient-api%29)(String key, String field)<br> | <br>Reads a named field from a file record<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[readNamedField](./../../jfile-%28jrclient-api%29)(String key, String field, boolean locked)<br> | <br>Reads a named field from a file record, optionally locking the record<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[readNamedField](./../../jfile-%28jrclient-api%29)(String key, String field, boolean locked, boolean wait)<br> |  <br>Reads a named field from a file record, optionally locking the record<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[readV](./../../jfile-%28jrclient-api%29)(String key, int attrib)<br> | <br>Reads an attribute from a file record without locking<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[readV](./../../jfile-%28jrclient-api%29)([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") key, int attrib, boolean locked)<br> | <br>Reads an attribute from a file record, optionally locking the record<br> |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | JFile.[readV](./../../jfile-%28jrclient-api%29)(String key, int attrib, boolean locked, boolean wait)<br> |  <br>Reads an attribute from a file record, optionally locking the record and waiting for the lock<br> |




**Methods in [com.jbase.jrcs](./../../com.jbase.jrcs-%28jrclient---api%29) with parameters of type**[**JDynArray**](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")




| Modifier and Type<br> | Method<br> | Description<br> |
| --- | --- | --- |
| void<br> | JDynArray.[assign](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") src)<br> | <br>Assigns the value of a dynamic array to this dynamic array<br> |
| void<br> | JConnection.[call](./../../jconnection-%28jrclient-api%29)(String subName, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")[] parms)<br> | <br>Calls a host-side subroutine with given parameters<br> |
| void<br> | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc)<br> | <br>Inserts data from the given dynamic array into the specified attribute<br> |
| void<br> | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute or value.<br> |
| void<br> | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute, value or sub-value.<br> |
| void<br> | JDynArray.[insertDA](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc)<br> | <br>Inserts data from the given dynamic array into the specified attribute.<br> |
| void<br> | JDynArray.[insertDA](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute or value.<br> |
| void<br> | JDynArray.[insertDA](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc)<br> | <br>Inserts data from the given dynamic array into the specified attribute, value or sub-value.<br> |
| void<br> | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc)<br> | <br>Replaces the given attribute with the content of specified dynamic array<br> |
| void<br> | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc)<br> | <br>Replaces the given attribute or value with the content of specified dynamic array<br> |
| void<br> | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc)<br> | <br>Replaces the given attribute, value or sub-value with the content of specified dynamic array<br> |
| void<br> | JDynArray.[replaceDA](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc)<br> | <br>Replaces the given attribute with the content of specified dynamic array Same as replace(JDynArray, amc)<br> |
| void<br> | JDynArray.[replaceDA](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc)<br> | <br>Replaces the given attribute or value with the content of specified dynamic array Same as replace(JDynArray, amc, vmc)<br> |
| void<br> | JDynArray.[replaceDA](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc)<br> | <br>Replaces the given attribute, value or sub-value with the content of specified dynamic array.<br> |
| void<br> | JCommon.[setDA](./../../jcommon-%28jrclient-api%29)(int index, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") dynArray)<br> | <br>Stores a dynamic array into a specific position in a common block<br> |
| void<br> | JFile.[write](./../../jfile-%28jrclient-api%29)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data)<br> | <br>Writes a record to the file releasing the lock if there is one<br> |
| void<br> | JFile.[write](./../../jfile-%28jrclient-api%29)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, boolean unlock)<br> | <br>Writes a record to the file optionally releasing the lock<br> |
| void<br> | JFile.[writeNamedField](./../../jfile-%28jrclient-api%29)(String key, String field, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data)<br> | <br>Writes a named record field to the file<br> |
| void<br> | JFile.[writeNamedField](./../../jfile-%28jrclient-api%29)(String key, String field, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, boolean unlock)<br> | <br>Writes a named record field to the file optionally releasing the lock<br> |
| void<br> | JFile.[writeV](./../../jfile-%28jrclient-api%29)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int attrib)<br> | <br>Writes a record attribute to the file releasing the lock if there is one<br> |
| void<br> | JFile.[writeV](./../../jfile-%28jrclient-api%29)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int attrib, boolean unlock)<br> | <br>Writes a record attribute to the file optionally releasing the lock<br> |




**Constructors in [com.jbase.jrcs](./../../com.jbase.jrcs-%28jrclient---api%29) with parameters of type [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")**


| Constructor<br> |  Description<br> |
| --- | --- |
| [JDynArray](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") src)<br> | <br>Constructs a dynamic array from another dynamic array<br> |









