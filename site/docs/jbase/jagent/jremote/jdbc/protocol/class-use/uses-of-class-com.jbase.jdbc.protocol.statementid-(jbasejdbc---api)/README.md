# Uses of Class com.jbase.jdbc.protocol.StatementID (jbasejdbc   API)

**Created At:** 9/25/2017 11:01:09 AM  
**Updated At:** 2/15/2018 8:02:55 AM  
**Original Doc:** [com_jbase_jdbc_protocol_class-use_StatementID](https://docs.jbase.com/39241-class-use/com_jbase_jdbc_protocol_class-use_StatementID)  
**Original ID:** 277972  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jdbc.protocol.StatementID (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- [Class](./../../statementid-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol")
- Use
- [Tree](./../../com.jbase.jdbc.protocol-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Class
com.jbase.jdbc.protocol.StatementID

- Packages that use [StatementID](./../../statementid-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") | Package | Description |
| --- | --- |
| com.jbase.jdbc |   |
| com.jbase.jdbc.protocol |   |
- - ### Uses of [StatementID](./../../statementid-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc](./../../../jbase-jdbc-api)


Methods in [com.jbase.jdbc](./../../../jbase-jdbc-api) that return [StatementID](./../../statementid-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") | Modifier and Type | Method and Description |
| --- | --- |
| `StatementID` | JBaseJDBCSocketStatement.`getId()`<br>This is a jBASE JDBC driver's private method, not part of the JDBC API.<br> |



Methods in [com.jbase.jdbc](./../../../jbase-jdbc-api) with parameters of type [StatementID](./../../statementid-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") | Modifier and Type | Method and Description |
| --- | --- |
| `void` | JBaseJDBCSocketStatement.`setId(StatementID _statementId)`  |
    - ### Uses of [StatementID](./../../statementid-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc.protocol](./../../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)


Fields in [com.jbase.jdbc.protocol](./../../com.jbase.jdbc.protocol-%28jbasejdbc---api%29) declared as [StatementID](./../../statementid-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") | Modifier and Type | Field and Description |
| --- | --- |
| `protected StatementID` | SQLResponse.`statementId`  |
| `protected StatementID` | SQLRequest.`statementId`  |



Methods in [com.jbase.jdbc.protocol](./../../com.jbase.jdbc.protocol-%28jbasejdbc---api%29) that return [StatementID](./../../statementid-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") | Modifier and Type | Method and Description |
| --- | --- |
| `StatementID` | SQLResponse.`getStatementId()`  |



Constructors in [com.jbase.jdbc.protocol](./../../com.jbase.jdbc.protocol-%28jbasejdbc---api%29) with parameters of type [StatementID](./../../statementid-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") | Constructor and Description |
| --- |
| `BindRequest(StatementID statementId,<br>           ParameterList parameterList)`  |
| `CallSubroutineRequest(StatementID statementId,<br>                     ParameterList parameterList)`  |
| `ExecuteRequest(StatementID statementId)`  |
| `FetchRequest(StatementID sId)`  |
| `FetchRequest(StatementID sId,<br>            int fetchSize)`  |
| `MetaDataRequest(StatementID statementId)`  |
| `ReleaseRequest(StatementID statementId)`  |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- [Class](./../../statementid-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol")
- Use
- [Tree](./../../com.jbase.jdbc.protocol-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
