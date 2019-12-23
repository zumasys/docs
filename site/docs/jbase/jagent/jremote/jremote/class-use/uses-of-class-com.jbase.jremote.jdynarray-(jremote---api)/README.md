# Uses of Class com.jbase.jremote.JDynArray (jremote   API)

**Created At:** 9/25/2017 11:39:13 AM  
**Updated At:** 2/15/2018 8:02:57 AM  
**Original Doc:** [com_jbase_jremote_class-use_JDynArray](https://docs.jbase.com/39249-class-use/com_jbase_jremote_class-use_JDynArray)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jremote.JDynArray (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../../../../jremote-api)
- [Class](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote")
- Use
- [Tree](./../../com.jbase.jremote-class-hierarchy)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Class
com.jbase.jremote.JDynArray

- Packages that use [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Package | Description |
| --- | --- |
| com.jbase.jremote |   |
| com.jbase.jremote.io |   |
| com.jbase.jremote.jca |   |
| com.jbase.jremote.jca.cci |   |
| com.jbase.jremote.jca.inflow |   |
| com.jbase.jremote.protocol |   |
- - ### Uses of [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") in [com.jbase.jremote](./../../../../jremote-api)


Methods in [com.jbase.jremote](./../../../../jremote-api) that return [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | JExecuteResults.`getCapturingVar()`  |
| `JDynArray` | JConnection.`getCommon(String name)`<br>Return the value of the named common with the supplied name.<br> |
| `JDynArray` | JCursor.`getRecord()`<br>Returns the current record.<br> |
| `JDynArray` | EISMetaDataRepository.`getRepositoryEntry(String key)`<br>Obtain the value of a repository entry<br> |
| `JDynArray` | JResultSet.`getRow()`  |
| `JDynArray` | JExecuteResults.`getSettingVar()`  |
| `JDynArray` | JConnection.`newJDynArray()`<br>Create a JDynArray with the correct Charset for this connection.<br> |
| `JDynArray` | JConnection.`newJDynArray(String str)`  |
| `JDynArray` | JFile.`read(String recordKey)`<br>Read a record where the supplied recordKey is the key <br> to the record.<br> |
| `JDynArray` | JFile.`readU(String recordKey,<br>     boolean blockedRead)`<br>Read a record where the supplied recordKey is the key <br> to the record and locks it for update.<br> |



Methods in [com.jbase.jremote](./../../../../jremote-api) with parameters of type [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JSelectList` | JConnection.`createSelectList(JDynArray jd)`<br>Create a select list object from an existing dynamic array<br> containing a list of keys separated by attribute markers.<br> |
| `JResultSet` | JStatement.`execute(JDynArray queries)`<br>Execute query.<br> |
| `JResultSet` | JStatement.`execute(JDynArray queries,<br>       JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
| `void` | JCursor.`setRecord(JDynArray record)`<br>Modifies the current record.<br> |
| `boolean` | JFile.`write(String recordKey,<br>     JDynArray record)`<br>Write the supplied record to the jBASE file.<br> |
| `boolean` | JFile.`writeU(String recordKey,<br>      JDynArray record,<br>      boolean blockedWrite)`<br>Write the supplied record to the jBASE file.<br> |



Constructors in [com.jbase.jremote](./../../../../jremote-api) with parameters of type [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Constructor and Description |
| --- |
| `JExecuteResults(JSelectListProt selectListProt,<br>               JDynArray capturingVar,<br>               JDynArray settingVar)`  |
    - ### Uses of [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-%28jremote---api%29)


Methods in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-%28jremote---api%29) that return [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | JConnectionImpl.`getCommon(String name)`<br>Return the value of the named common with the supplied name.<br> |
| `JDynArray` | JCursorImpl.`getRecord()`  |
| `JDynArray` | JResultSetImpl.`getRow()`  |
| `JDynArray` | JConnectionImpl.`newJDynArray()`  |
| `JDynArray` | JConnectionImpl.`newJDynArray(String str)`  |
| `JDynArray` | JFileImpl.`read(String recordKey)`  |
| `JDynArray` | JFileImpl.`readU(String recordKey,<br>     boolean blockedRead)`  |



Methods in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-%28jremote---api%29) with parameters of type [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JSelectList` | JConnectionImpl.`createSelectList(JDynArray jd)`  |
| `JResultSet` | JStatementImpl.`execute(JDynArray queries)`  |
| `JResultSet` | JStatementImpl.`execute(JDynArray queries,<br>       JSelectList selectList)`  |
| `void` | JCursorImpl.`setRecord(JDynArray record)`  |
| `boolean` | JFileImpl.`write(String recordKey,<br>     JDynArray record)`  |
| `boolean` | JFileImpl.`writeU(String recordKey,<br>      JDynArray record,<br>      boolean blockedWrite)`  |



Constructors in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-%28jremote---api%29) with parameters of type [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Constructor and Description |
| --- |
| `JSelectListImpl(AbstractJRemoteConnection connection,<br>               JDynArray keys)`<br>Constructs a select list from specified dynamic array.<br> |
    - ### Uses of [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29)


Methods in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29) that return [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | WrappedJConnection.`getCommon(String name)`<br>Return the value of the common with supplied name.<br> |
| `JDynArray` | WrappedJConnection.`newJDynArray()`  |
| `JDynArray` | WrappedJConnection.`newJDynArray(String str)`  |
| `JDynArray` | WrappedJFile.`read(String recordKey)`  |
| `JDynArray` | WrappedJFile.`readU(String recordKey,<br>     boolean blockedRead)`  |



Methods in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29) with parameters of type [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JSelectList` | WrappedJConnection.`createSelectList(JDynArray jd)`  |
| `boolean` | WrappedJFile.`write(String recordKey,<br>     JDynArray record)`  |
| `boolean` | WrappedJFile.`writeU(String recordKey,<br>      JDynArray record,<br>      boolean blockedWrite)`  |
    - ### Uses of [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") in [com.jbase.jremote.jca.cci](./../../jca/cci/com.jbase.jremote.jca.cci-%28jremote---api%29)


Methods in [com.jbase.jremote.jca.cci](./../../jca/cci/com.jbase.jremote.jca.cci-%28jremote---api%29) that return [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `protected JDynArray` | CCIJRemoteDynamicArrayRecord.`getJDynArray()`  |
    - ### Uses of [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") in [com.jbase.jremote.jca.inflow](./../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29)


Methods in [com.jbase.jremote.jca.inflow](./../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29) that return [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | JRemoteMessageListener.`onMessage(JDynArray dynArray)`  |



Methods in [com.jbase.jremote.jca.inflow](./../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29) with parameters of type [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | JRemoteMessageListener.`onMessage(JDynArray dynArray)`  |
    - ### Uses of [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") in [com.jbase.jremote.protocol](./../../protocol/com.jbase.jremote.protocol-%28jremote-api%29)


Fields in [com.jbase.jremote.protocol](./../../protocol/com.jbase.jremote.protocol-%28jremote-api%29) with type parameters of type [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Modifier and Type | Field and Description |
| --- | --- |
| `protected List<JDynArray>` | JSelectListProt.`records`  |



Methods in [com.jbase.jremote.protocol](./../../protocol/com.jbase.jremote.protocol-%28jremote-api%29) that return [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | JediResponse.`getData(CharsetEncoder encoder,<br>       CharsetDecoder decoder)`  |
| `JDynArray` | InputOutputResponse.`getOutput()`  |
| `JDynArray` | JSelectListProt.`getRecord()`<br>Obtains the current record value.<br> |
| `JDynArray` | EISMetaDataResponse.`getRepositoryEntry(String key)`<br>Obtain the value of a repository entry<br> |
| `JDynArray` | ReadCommonResponse.`getValue(CharsetEncoder encoder,<br>        CharsetDecoder decoder)`  |



Methods in [com.jbase.jremote.protocol](./../../protocol/com.jbase.jremote.protocol-%28jremote-api%29) with parameters of type [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `void` | JSelectListProt.`setRecord(JDynArray record)`<br>Modifies the value of the current record<br> |



Constructors in [com.jbase.jremote.protocol](./../../protocol/com.jbase.jremote.protocol-%28jremote-api%29) with parameters of type [JDynArray](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") | Constructor and Description |
| --- |
| `JSelectListProt(JDynArray keys)`<br>Constructs a select list from specified dynamic array.<br> |
| `StatementExecuteQueryRequest(JDynArray queries,<br>                            JSelectListProt selectList)`  |
| `WriteRecordRequest(int writeMode,<br>                  String fileName,<br>                  String recordKey,<br>                  JDynArray data)`  |

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../../../../jremote-api)
- [Class](./../../jdynarray-%28jremote-api%29 "class in com.jbase.jremote")
- Use
- [Tree](./../../com.jbase.jremote-class-hierarchy)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
