# Uses of Class com.jbase.jdbc.protocol.ParameterList (jbasejdbc   API)

**Created At:** 9/25/2017 10:58:58 AM  
**Updated At:** 2/15/2018 8:02:20 AM  
**Original Doc:** [com_jbase_jdbc_protocol_class-use_ParameterList](https://docs.jbase.com/39241-class-use/com_jbase_jdbc_protocol_class-use_ParameterList)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jdbc.protocol.ParameterList (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- [Class](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol")
- Use
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/protocol/class-use//39241-class-use/com_jbase_jdbc_protocol_class-use_ParameterList)
- [No Frames](/39241-class-use/com_jbase_jdbc_protocol_class-use_ParameterList)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Class
com.jbase.jdbc.protocol.ParameterList

- Packages that use [ParameterList](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol") | Package | Description |
| --- | --- |
| com.jbase.jdbc |   |
| com.jbase.jdbc.protocol |   |
- - ### Uses of [ParameterList](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc](/39228-jdbc/com_jbase_jdbc_package-summary)


Fields in [com.jbase.jdbc](/39228-jdbc/com_jbase_jdbc_package-summary) declared as [ParameterList](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol") | Modifier and Type | Field and Description |
| --- | --- |
| `protected ParameterList` | JBaseJDBCPreparedStatement.`parameters`  |
    - ### Uses of [ParameterList](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc.protocol](/39240-protocol/com_jbase_jdbc_protocol_package-summary)


Fields in [com.jbase.jdbc.protocol](/39240-protocol/com_jbase_jdbc_protocol_package-summary) declared as [ParameterList](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol") | Modifier and Type | Field and Description |
| --- | --- |
| `protected ParameterList` | DatabaseMetaDataRequest.`parameterList`  |
| `protected ParameterList` | BindRequest.`parameterList`  |



Methods in [com.jbase.jdbc.protocol](/39240-protocol/com_jbase_jdbc_protocol_package-summary) that return [ParameterList](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol") | Modifier and Type | Method and Description |
| --- | --- |
| `ParameterList` | SQLParamsResponse.`getParameterList()`  |
| `ParameterList` | DatabaseMetaDataRequest.`getParameterList()`  |
| `ParameterList` | BindRequest.`getParameterList()`  |



Methods in [com.jbase.jdbc.protocol](/39240-protocol/com_jbase_jdbc_protocol_package-summary) with parameters of type [ParameterList](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol") | Modifier and Type | Method and Description |
| --- | --- |
| `void` | ParameterList.`copyFrom(ParameterList other)`  |
| `void` | DatabaseMetaDataRequest.`setParameterList(ParameterList ps)`  |
| `void` | BindRequest.`setParameterList(ParameterList ps)`  |



Constructors in [com.jbase.jdbc.protocol](/39240-protocol/com_jbase_jdbc_protocol_package-summary) with parameters of type [ParameterList](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol") | Constructor and Description |
| --- |
| `BindRequest(StatementID statementId,<br>           ParameterList parameterList)`  |
| `CallSubroutineRequest(StatementID statementId,<br>                     ParameterList parameterList)`  |
| `DatabaseMetaDataRequest(String requestedProperty,<br>                       ParameterList parameterList)`  |
| `ParameterList(ParameterList pl)`<br>Constructor.<br> |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- [Class](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol")
- Use
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/protocol/class-use//39241-class-use/com_jbase_jdbc_protocol_class-use_ParameterList)
- [No Frames](/39241-class-use/com_jbase_jdbc_protocol_class-use_ParameterList)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
