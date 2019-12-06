# Uses of Class com.jbase.jremote.protocol.JSelectListProt (jremote API)

**Created At:** 9/25/2017 12:14:20 PM  
**Updated At:** 4/4/2018 9:50:22 PM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jremote.protocol.JSelectListProt (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Class
com.jbase.jremote.protocol.JSelectListProt

| Package<br> | Description<br> |
| --- | --- |
 Packages that use [JSelectListProt](/39270-protocol/com_jbase_jremote_protocol_JSelectListProt "class in com.jbase.jremote.protocol")  | com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.protocol<br> |  <br> |




### Uses of [JSelectListProt](/39270-protocol/com_jbase_jremote_protocol_JSelectListProt "class in com.jbase.jremote.protocol") in [com.jbase.jremote](/30312-jagent/jremote-api)


| Constructor and Description<br> |
| --- |
 Constructors in [com.jbase.jremote](/30312-jagent/jremote-api) with parameters of type [JSelectListProt](/39270-protocol/com_jbase_jremote_protocol_JSelectListProt "class in com.jbase.jremote.protocol")  | `JExecuteResults(JSelectListProt selectListProt, JDynArray capturingVar, JDynArray settingVar)` <br> |






### Uses of [JSelectListProt](/39270-protocol/com_jbase_jremote_protocol_JSelectListProt "class in com.jbase.jremote.protocol") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
 Fields in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary) declared as [JSelectListProt](/39270-protocol/com_jbase_jremote_protocol_JSelectListProt "class in com.jbase.jremote.protocol")  | `protected JSelectListProt`<br> | JSelectListImpl.`data` <br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary) that return [JSelectListProt](/39270-protocol/com_jbase_jremote_protocol_JSelectListProt "class in com.jbase.jremote.protocol")  | `protected JSelectListProt`<br> | JSelectListImpl.`fetchNext(boolean fetchData)` <br> |
| `protected JSelectListProt`<br> | JSelectListImpl.`fetchPrevious(boolean fetchData)` <br> |
| `JSelectListProt`<br> | JSelectListImpl.`getData()`<br>Obtains a reference to the serializable part of the select list<br> |



| Constructor and Description<br> |
| --- |
 Constructors in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary) with parameters of type [JSelectListProt](/39270-protocol/com_jbase_jremote_protocol_JSelectListProt "class in com.jbase.jremote.protocol")  | `JCursorImpl(AbstractJRemoteConnection connection, JSelectListProt data)`<br>Constructs a cursor from a serializable select list.<br> |
| `JSelectListImpl(AbstractJRemoteConnection connection, JSelectListProt data)`<br>Constructs a select list from a serializable select list.<br> |






### Uses of [JSelectListProt](/39270-protocol/com_jbase_jremote_protocol_JSelectListProt "class in com.jbase.jremote.protocol") in [com.jbase.jremote.protocol](/39270-protocol/com_jbase_jremote_protocol_package-summary)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.protocol](/39270-protocol/com_jbase_jremote_protocol_package-summary) that return [JSelectListProt](/39270-protocol/com_jbase_jremote_protocol_JSelectListProt "class in com.jbase.jremote.protocol")  | `JSelectListProt`<br> | SelectListFetchRequest.`getModifiedSelectList()` <br> |
| `JSelectListProt`<br> | SelectListCommitRequest.`getModifiedSelectList()` <br> |
| `JSelectListProt`<br> | StatementExecuteQueryRequest.`getSelectList()` <br> |
| `JSelectListProt`<br> | SelectListFetchResponse.`getSelectList()` <br> |
| `JSelectListProt`<br> | JediResponse.`getSelectList(CharsetEncoder encoder, CharsetDecoder decoder)` <br> |



| Constructor and Description<br> |
| --- |
 Constructors in [com.jbase.jremote.protocol](/39270-protocol/com_jbase_jremote_protocol_package-summary) with parameters of type [JSelectListProt](/39270-protocol/com_jbase_jremote_protocol_JSelectListProt "class in com.jbase.jremote.protocol")  | `JExecuteRequest(String command, JSelectListProt selectList)` <br> |
| `JSelectListProt(JSelectListProt sl, boolean copyModifiedOnly)`<br>Copy constructor<br> |
| `SelectListCommitRequest(JSelectListProt modifiedSelectList)` <br> |
| `SelectListFetchRequest(int selectListId, int fetchDirection, int fetchSize, boolean fetchData, JSelectListProt modifiedSelectList)` <br> |
| `StatementExecuteQueryRequest(JDynArray queries, JSelectListProt selectList)` <br> |
| `StatementExecuteQueryRequest(String query, JSelectListProt selectList)` <br> |

Back to [jREMOTE API](com_jbase_jremote_package-summary)
