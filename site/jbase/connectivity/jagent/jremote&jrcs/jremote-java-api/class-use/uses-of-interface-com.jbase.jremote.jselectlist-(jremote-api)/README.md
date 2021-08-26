# Uses of Interface com.jbase.jremote.JSelectList (jremote API)

<PageHeader />

## Uses of Interface

com.jbase.jremote.JSelectList

| Package | Description |
| --- | --- |
| Packages that use [JSelectList](./../../jselectlist-(jremote-api) "interface in com.jbase.jremote")  | com.jbase.jremote |   |
| com.jbase.jremote.io |   |
| com.jbase.jremote.jca |   |

### Uses of [JSelectList](./../../jselectlist-(jremote-api) "interface in com.jbase.jremote") in [com.jbase.jremote](./../../../../jremote-api)

| Modifier and Type | Interface and Description |
| --- | --- |
 Subinterfaces of [JSelectList](./../../jselectlist-(jremote-api) "interface in com.jbase.jremote") in [com.jbase.jremote](./../../../../jremote-api)  |  
|`interface` | `JCursor`<br>A cursor to a jBASE file. |

| Modifier and Type | Method and Description |
| --- | --- |
| Methods in [com.jbase.jremote](./../../../../jremote-api) that return [JSelectList](./../../jselectlist-(jremote-api) "interface in com.jbase.jremote")  |  
|`JSelectList` | JConnection.`createSelectList(JDynArray jd)`<br>Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers. |
| `JSelectList` | JExecuteResults.`getReturnList()`  |
| `JSelectList` | JFile.`select()`<br>Returns a select list containing the record keys in this jBASE file. |

| Modifier and Type | Method and Description |
| --- | --- |
| Methods in [com.jbase.jremote](./../../../../jremote-api) with parameters of type [JSelectList](./../../jselectlist-(jremote-api) "interface in com.jbase.jremote")  |
| `JResultSet` | JStatement.`execute(JDynArray queries, JSelectList selectList)`<br>Execute query using an existing select list as a filter. |
| `JResultSet` | JStatement.`execute(String query, JSelectList selectList)`<br>Execute query using an existing select list as a filter. |
| `JExecuteResults` | JConnection.`execute(String command, JSelectList selectList)`<br>Execute a jBASE command using an existing select list as a filter. |

### Uses of [JSelectList](./../../jselectlist-(jremote-api) "interface in com.jbase.jremote") in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-(jremote---api))

| Modifier and Type | Class and Description |
| --- | --- |
| Classes in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-(jremote---api)) that implement [JSelectList](./../../jselectlist-(jremote-api) "interface in com.jbase.jremote")| `class` | `JCursorImpl`<br>A cursor to a jBASE file. |
| `class` | `JSelectListImpl`<br>A select list to a jBASE file. |

| Modifier and Type | Method and Description |
| --- | --- |
| Methods in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-(jremote---api)) that return [JSelectList](./../../jselectlist-(jremote-api) "interface in com.jbase.jremote")  |  
|`JSelectList` | JConnectionImpl.`createSelectList(JDynArray jd)`  |
| `JSelectList` | JFileImpl.`select()`  |

| Modifier and Type | Method and Description |
| --- | --- |
| Methods in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-(jremote---api)) with parameters of type [JSelectList](./../../jselectlist-(jremote-api) "interface in com.jbase.jremote")  |
| `JResultSet` | JStatementImpl.`execute(JDynArray queries, JSelectList selectList)`  |
| `JResultSet` | JStatementImpl.`execute(String query, JSelectList selectList)`  |
| `JExecuteResults` | JConnectionImpl.`execute(String command, JSelectList selectList)`  |

### Uses of [JSelectList](./../../jselectlist-(jremote-api) "interface in com.jbase.jremote") in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-(jremote---api))

| Modifier and Type | Method and Description |
| --- | --- |
| Methods in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-(jremote---api)) that return [JSelectList](./../../jselectlist-(jremote-api) "interface in com.jbase.jremote")|
| `JSelectList` | WrappedJConnection.`createSelectList(JDynArray jd)`  |
| `JSelectList` | WrappedJFile.`select()`  |

| Modifier and Type | Method and Description |
| --- | --- |
| Methods in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-(jremote---api)) with parameters of type [JSelectList](./../../jselectlist-(jremote-api) "interface in com.jbase.jremote")  |
|`JExecuteResults` | WrappedJConnection.`execute(String command, JSelectList selectList)`  |

Back to [jRemote API](./../../README.md)

<PageFooter />
