# Uses of Interface com.jbase.jremote.JResultSet (jremote   API)

**Created At:** 9/25/2017 11:39:52 AM  
**Updated At:** 2/15/2018 8:02:57 AM  
**Original Doc:** [com_jbase_jremote_class-use_JResultSet](https://docs.jbase.com/39249-class-use/com_jbase_jremote_class-use_JResultSet)  
**Original ID:** 278058  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jremote.JResultSet (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../../../../jremote-api)
- [Class](./../../jresultset-%28jremote-api%29 "interface in com.jbase.jremote")
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

## Uses of Interface
com.jbase.jremote.JResultSet

- Packages that use [JResultSet](./../../jresultset-%28jremote-api%29 "interface in com.jbase.jremote") | Package | Description |
| --- | --- |
| com.jbase.jremote |   |
| com.jbase.jremote.io |   |
- - ### Uses of [JResultSet](./../../jresultset-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote](./../../../../jremote-api)


Methods in [com.jbase.jremote](./../../../../jremote-api) that return [JResultSet](./../../jresultset-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JResultSet` | JStatement.`execute(JDynArray queries)`<br>Execute query.<br> |
| `JResultSet` | JStatement.`execute(JDynArray queries,<br>       JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
| `JResultSet` | JStatement.`execute(String query)`<br>Execute query.<br> |
| `JResultSet` | JStatement.`execute(String query,<br>       JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
    - ### Uses of [JResultSet](./../../jresultset-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-%28jremote---api%29)


Classes in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-%28jremote---api%29) that implement [JResultSet](./../../jresultset-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `JResultSetImpl`  |



Methods in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-%28jremote---api%29) that return [JResultSet](./../../jresultset-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JResultSet` | JStatementImpl.`execute(JDynArray queries)`  |
| `JResultSet` | JStatementImpl.`execute(JDynArray queries,<br>       JSelectList selectList)`  |
| `JResultSet` | JStatementImpl.`execute(String query)`  |
| `JResultSet` | JStatementImpl.`execute(String query,<br>       JSelectList selectList)`  |

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../../../../jremote-api)
- [Class](./../../jresultset-%28jremote-api%29 "interface in com.jbase.jremote")
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
