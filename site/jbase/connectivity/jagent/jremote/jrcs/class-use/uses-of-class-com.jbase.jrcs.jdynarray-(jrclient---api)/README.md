# Uses of Class com.jbase.jrcs.JDynArray (jrclient   API)

**Created At:** 9/25/2017 11:27:37 AM  
**Updated At:** 12/24/2018 7:20:14 PM  
**Original Doc:** [com_jbase_jrcs_class-use_jdynarray](https://docs.jbase.com/39245-class-use/com_jbase_jrcs_class-use_jdynarray)  
**Original ID:** 278023  
**Internal:** No  

## Uses of [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") in [com.jbase.jrcs](./../../com.jbase.jrcs-%28jrclient---api%29)

**Methods in [com.jbase.jrcs](./../../com.jbase.jrcs-%28jrclient---api%29) that return**[**JDynArray**](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")

| Modifier and Type | Method |  Description |
| --- | --- | --- |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JDynArray.[extractDA](./../../jdynarray-%28jrclient---api%29)(int amc) | Extracts the specified attribute as a dynamic array |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JDynArray.[extractDA](./../../jdynarray-%28jrclient---api%29)(int amc, int vmc) | Extracts the specified attribute or value as a dynamic array |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JDynArray.[extractDA](./../../jdynarray-%28jrclient---api%29)(int amc, int vmc, int svmc) |  Extracts the specified attribute, value or sub-value as a dynamic array |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JCommon.[getDA](./../../jcommon-%28jrclient-api%29)(int index) | Retrieves a dynamic array from a specific position in a common block |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[getIndex](./../../jfile-%28jrclient-api%29)(String indexName) | Reads information about the specified index |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JConnection.[getjBaseVersion](./../../jconnection-%28jrclient-api%29)() | Retrieves the version of jBASE database connected to this JConnection object |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[read](./../../jfile-%28jrclient-api%29)(String key) | Reads a record from the file without locking |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[read](./../../jfile-%28jrclient-api%29)(String key, boolean locked) | Reads a record from the file, optionally locking it |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[read](./../../jfile-%28jrclient-api%29)(String key, boolean locked, boolean wait) | Reads a record from the file, optionally locking it and waiting for the lock |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[readNamedField](./../../jfile-%28jrclient-api%29)(String key, String field) | Reads a named field from a file record |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[readNamedField](./../../jfile-%28jrclient-api%29)(String key, String field, boolean locked) | Reads a named field from a file record, optionally locking the record |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[readNamedField](./../../jfile-%28jrclient-api%29)(String key, String field, boolean locked, boolean wait) |  Reads a named field from a file record, optionally locking the record |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[readV](./../../jfile-%28jrclient-api%29)(String key, int attrib) | Reads an attribute from a file record without locking |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[readV](./../../jfile-%28jrclient-api%29)([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") key, int attrib, boolean locked) | Reads an attribute from a file record, optionally locking the record |
| [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") | JFile.[readV](./../../jfile-%28jrclient-api%29)(String key, int attrib, boolean locked, boolean wait) |  Reads an attribute from a file record, optionally locking the record and waiting for the lock |

**Methods in [com.jbase.jrcs](./../../com.jbase.jrcs-%28jrclient---api%29) with parameters of type**[**JDynArray**](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")

| Modifier and Type | Method | Description |
| --- | --- | --- |
| void | JDynArray.[assign](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") src) | Assigns the value of a dynamic array to this dynamic array |
| void | JConnection.[call](./../../jconnection-%28jrclient-api%29)(String subName, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")[] parms) | Calls a host-side subroutine with given parameters |
| void | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc) | Inserts data from the given dynamic array into the specified attribute |
| void | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc) | Inserts data from the given dynamic array into the specified attribute or value. |
| void | JDynArray.[insert](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc) | Inserts data from the given dynamic array into the specified attribute, value or sub-value. |
| void | JDynArray.[insertDA](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc) | Inserts data from the given dynamic array into the specified attribute. |
| void | JDynArray.[insertDA](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc) | Inserts data from the given dynamic array into the specified attribute or value. |
| void | JDynArray.[insertDA](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc) | Inserts data from the given dynamic array into the specified attribute, value or sub-value. |
| void | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc) | Replaces the given attribute with the content of specified dynamic array |
| void | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc) | Replaces the given attribute or value with the content of specified dynamic array |
| void | JDynArray.[replace](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc) | Replaces the given attribute, value or sub-value with the content of specified dynamic array |
| void | JDynArray.[replaceDA](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc) | Replaces the given attribute with the content of specified dynamic array Same as replace(JDynArray, amc) |
| void | JDynArray.[replaceDA](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc) | Replaces the given attribute or value with the content of specified dynamic array Same as replace(JDynArray, amc, vmc) |
| void | JDynArray.[replaceDA](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int amc, int vmc, int svmc) | Replaces the given attribute, value or sub-value with the content of specified dynamic array. |
| void | JCommon.[setDA](./../../jcommon-%28jrclient-api%29)(int index, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") dynArray) | Stores a dynamic array into a specific position in a common block |
| void | JFile.[write](./../../jfile-%28jrclient-api%29)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data) | Writes a record to the file releasing the lock if there is one |
| void | JFile.[write](./../../jfile-%28jrclient-api%29)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, boolean unlock) | Writes a record to the file optionally releasing the lock |
| void | JFile.[writeNamedField](./../../jfile-%28jrclient-api%29)(String key, String field, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data) | Writes a named record field to the file |
| void | JFile.[writeNamedField](./../../jfile-%28jrclient-api%29)(String key, String field, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, boolean unlock) | Writes a named record field to the file optionally releasing the lock |
| void | JFile.[writeV](./../../jfile-%28jrclient-api%29)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int attrib) | Writes a record attribute to the file releasing the lock if there is one |
| void | JFile.[writeV](./../../jfile-%28jrclient-api%29)(String key, [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") data, int attrib, boolean unlock) | Writes a record attribute to the file optionally releasing the lock |

**Constructors in [com.jbase.jrcs](./../../com.jbase.jrcs-%28jrclient---api%29) with parameters of type [JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")**


| Constructor |  Description |
| --- | --- |
| [JDynArray](./../../jdynarray-%28jrclient---api%29)([JDynArray](./../../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") src) | Constructs a dynamic array from another dynamic array |
