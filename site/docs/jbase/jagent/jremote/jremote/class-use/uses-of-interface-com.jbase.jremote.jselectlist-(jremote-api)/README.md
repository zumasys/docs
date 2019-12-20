# Uses of Interface com.jbase.jremote.JSelectList (jremote API)

**Created At:** 9/25/2017 11:39:59 AM  
**Updated At:** 4/5/2018 8:55:35 PM  
**Original Doc:** [com_jbase_jremote_class-use_jselectlist](https://docs.jbase.com/39249-class-use/com_jbase_jremote_class-use_jselectlist)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jremote.JSelectList (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.



<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.jremote.JSelectList

| Package<br> | Description<br> |
| --- | --- |
 Packages that use [JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote")  | com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.jca<br> |  <br> |






### Uses of [JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote") in [com.jbase.jremote](/30312-jagent/jremote-api)


| Modifier and Type<br> | Interface and Description<br> |
| --- | --- |
 Subinterfaces of [JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote") in [com.jbase.jremote](/30312-jagent/jremote-api)  | `interface `<br> | `JCursor`<br>A cursor to a jBASE file.<br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote](/30312-jagent/jremote-api) that return [JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote")  | `JSelectList`<br> | JConnection.`createSelectList(JDynArray jd)`<br>Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.<br> |
| `JSelectList`<br> | JExecuteResults.`getReturnList()` <br> |
| `JSelectList`<br> | JFile.`select()`<br>Returns a select list containing the record keys in this jBASE file.<br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote](/30312-jagent/jremote-api) with parameters of type [JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote")  | `JResultSet`<br> | JStatement.`execute(JDynArray queries, JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
| `JResultSet`<br> | JStatement.`execute(String query, JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
| `JExecuteResults`<br> | JConnection.`execute(String command, JSelectList selectList)`<br>Execute a jBASE command using an existing select list as a filter.<br> |






### Uses of [JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Classes in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary) that implement [JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote")  | `class `<br> | `JCursorImpl`<br>A cursor to a jBASE file.<br> |
| `class `<br> | `JSelectListImpl`<br>A select list to a jBASE file.<br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary) that return [JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote")  | `JSelectList`<br> | JConnectionImpl.`createSelectList(JDynArray jd)` <br> |
| `JSelectList`<br> | JFileImpl.`select()` <br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary) with parameters of type [JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote")  | `JResultSet`<br> | JStatementImpl.`execute(JDynArray queries, JSelectList selectList)` <br> |
| `JResultSet`<br> | JStatementImpl.`execute(String query, JSelectList selectList)` <br> |
| `JExecuteResults`<br> | JConnectionImpl.`execute(String command, JSelectList selectList)` <br> |






### Uses of [JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote") in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary) that return [JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote")  | `JSelectList`<br> | WrappedJConnection.`createSelectList(JDynArray jd)` <br> |
| `JSelectList`<br> | WrappedJFile.`select()` <br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary) with parameters of type [JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote")  | `JExecuteResults`<br> | WrappedJConnection.`execute(String command, JSelectList selectList)` <br> |





Back to [jREMOTE API](com_jbase_jremote_package-summary)


