# Uses of Class com.jbase.jdbc.protocol.ParameterList (jbasejdbc   API)

**Created At:** 9/25/2017 10:58:58 AM  
**Updated At:** 2/15/2018 8:02:20 AM  
**Original Doc:** [com_jbase_jdbc_protocol_class-use_ParameterList](https://docs.jbase.com/39241-class-use/com_jbase_jdbc_protocol_class-use_ParameterList)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jdbc.protocol.ParameterList (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- [Class](./../../parameterlist-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
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
com.jbase.jdbc.protocol.ParameterList

- Packages that use [ParameterList](./../../parameterlist-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | Package | Description |
| --- | --- |
| com.jbase.jdbc |   |
| com.jbase.jdbc.protocol |   |
- - ### Uses of [ParameterList](./../../parameterlist-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc](./../../../jbase-jdbc-api)


Fields in [com.jbase.jdbc](./../../../jbase-jdbc-api) declared as [ParameterList](./../../parameterlist-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | Modifier and Type | Field and Description |
| --- | --- |
| `protected ParameterList` | JBaseJDBCPreparedStatement.`parameters`  |
    - ### Uses of [ParameterList](./../../parameterlist-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc.protocol](./../../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)


Fields in [com.jbase.jdbc.protocol](./../../com.jbase.jdbc.protocol-%28jbasejdbc---api%29) declared as [ParameterList](./../../parameterlist-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | Modifier and Type | Field and Description |
| --- | --- |
| `protected ParameterList` | DatabaseMetaDataRequest.`parameterList`  |
| `protected ParameterList` | BindRequest.`parameterList`  |



Methods in [com.jbase.jdbc.protocol](./../../com.jbase.jdbc.protocol-%28jbasejdbc---api%29) that return [ParameterList](./../../parameterlist-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | Modifier and Type | Method and Description |
| --- | --- |
| `ParameterList` | SQLParamsResponse.`getParameterList()`  |
| `ParameterList` | DatabaseMetaDataRequest.`getParameterList()`  |
| `ParameterList` | BindRequest.`getParameterList()`  |



Methods in [com.jbase.jdbc.protocol](./../../com.jbase.jdbc.protocol-%28jbasejdbc---api%29) with parameters of type [ParameterList](./../../parameterlist-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | Modifier and Type | Method and Description |
| --- | --- |
| `void` | ParameterList.`copyFrom(ParameterList other)`  |
| `void` | DatabaseMetaDataRequest.`setParameterList(ParameterList ps)`  |
| `void` | BindRequest.`setParameterList(ParameterList ps)`  |



Constructors in [com.jbase.jdbc.protocol](./../../com.jbase.jdbc.protocol-%28jbasejdbc---api%29) with parameters of type [ParameterList](./../../parameterlist-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | Constructor and Description |
| --- |
| `BindRequest(StatementID statementId,<br>           ParameterList parameterList)`  |
| `CallSubroutineRequest(StatementID statementId,<br>                     ParameterList parameterList)`  |
| `DatabaseMetaDataRequest(String requestedProperty,<br>                       ParameterList parameterList)`  |
| `ParameterList(ParameterList pl)`<br>Constructor.<br> |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- [Class](./../../parameterlist-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
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
