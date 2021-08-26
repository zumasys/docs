# Uses of Class com.jbase.jremote.protocol.JSelectListProt (jremote API)

<PageHeader />

## Uses of Class

com.jbase.jremote.protocol.JSelectListProt

| Package |
| --- | --- |
 Packages that use [JSelectListProt](./../../jselectlistprot-(jremote-api) "class in com.jbase.jremote.protocol")  |
| com.jbase.jremote |
| com.jbase.jremote.io |
| com.jbase.jremote.protocol |

### Uses of [JSelectListProt](./../../jselectlistprot-(jremote-api) "class in com.jbase.jremote.protocol") in [com.jbase.jremote](./../../../../../jremote-api)

| Constructor and Description |
| --- |
| Constructors in [com.jbase.jremote](./../../../../../jremote-api) with parameters of type [JSelectListProt](./../../jselectlistprot-(jremote-api) "class in com.jbase.jremote.protocol")  |
|`JExecuteResults(JSelectListProt selectListProt, JDynArray capturingVar, JDynArray settingVar)`  |

### Uses of [JSelectListProt](./../../jselectlistprot-(jremote-api) "class in com.jbase.jremote.protocol") in [com.jbase.jremote.io](./../../../io/com.jbase.jremote.io-(jremote---api))

| Modifier and Type | Field and Description |
| --- | --- |
| Fields in [com.jbase.jremote.io](./../../../io/com.jbase.jremote.io-(jremote---api)) declared as [JSelectListProt](./../../jselectlistprot-(jremote-api) "class in com.jbase.jremote.protocol")  |
| `protected JSelectListProt` | JSelectListImpl.`data`  |

| Modifier and Type | Method and Description |
| --- | --- |
| Methods in [com.jbase.jremote.io](./../../../io/com.jbase.jremote.io-(jremote---api)) that return [JSelectListProt](./../../jselectlistprot-(jremote-api) "class in com.jbase.jremote.protocol")  |
|`protected JSelectListProt` | JSelectListImpl.`fetchNext(boolean fetchData)`  |
| `protected JSelectListProt` | JSelectListImpl.`fetchPrevious(boolean fetchData)`  |
| `JSelectListProt` | JSelectListImpl.`getData()`<br>Obtains a reference to the serializable part of the select list |

| Constructor and Description |
| --- |
| Constructors in [com.jbase.jremote.io](./../../../io/com.jbase.jremote.io-(jremote---api)) with parameters of type [JSelectListProt](./../../jselectlistprot-(jremote-api) "class in com.jbase.jremote.protocol")  |
| `JCursorImpl(AbstractJRemoteConnection connection, JSelectListProt data)`<br>Constructs a cursor from a serializable select list. |
| `JSelectListImpl(AbstractJRemoteConnection connection, JSelectListProt data)`<br>Constructs a select list from a serializable select list. |

### Uses of [JSelectListProt](./../../jselectlistprot-(jremote-api) "class in com.jbase.jremote.protocol") in [com.jbase.jremote.protocol](./../../com.jbase.jremote.protocol-(jremote-api))

| Modifier and Type | Method and Description |
| --- | --- |
| Methods in [com.jbase.jremote.protocol](./../../com.jbase.jremote.protocol-(jremote-api)) that return [JSelectListProt](./../../jselectlistprot-(jremote-api) "class in com.jbase.jremote.protocol")  |
| `JSelectListProt` | SelectListFetchRequest.`getModifiedSelectList()`  |
| `JSelectListProt` | SelectListCommitRequest.`getModifiedSelectList()`  |
| `JSelectListProt` | StatementExecuteQueryRequest.`getSelectList()`  |
| `JSelectListProt` | SelectListFetchResponse.`getSelectList()`  |
| `JSelectListProt` | JediResponse.`getSelectList(CharsetEncoder encoder, CharsetDecoder decoder)`  |

| Constructor and Description |
| --- |
| Constructors in [com.jbase.jremote.protocol](./../../com.jbase.jremote.protocol-(jremote-api)) with parameters of type [JSelectListProt](./../../jselectlistprot-(jremote-api) "class in com.jbase.jremote.protocol")  |
| `JExecuteRequest(String command, JSelectListProt selectList)`  |
| `JSelectListProt(JSelectListProt sl, boolean copyModifiedOnly)`<br>Copy constructor |
| `SelectListCommitRequest(JSelectListProt modifiedSelectList)`  |
| `SelectListFetchRequest(int selectListId, int fetchDirection, int fetchSize, boolean fetchData, JSelectListProt modifiedSelectList)`  |
| `StatementExecuteQueryRequest(JDynArray queries, JSelectListProt selectList)`  |
| `StatementExecuteQueryRequest(String query, JSelectListProt selectList)`  |

Back to [jRemote API](./../../README.md)

<PageFooter />
