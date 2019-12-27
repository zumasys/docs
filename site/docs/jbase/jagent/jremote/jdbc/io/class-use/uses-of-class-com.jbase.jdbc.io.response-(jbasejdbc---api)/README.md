# Uses of Class com.jbase.jdbc.io.Response (jbasejdbc   API)

**Created At:** 9/25/2017 10:48:06 AM  
**Updated At:** 2/15/2018 8:02:49 AM  
**Original Doc:** [com_jbase_jdbc_io_class-use_Response](https://docs.jbase.com/39235-class-use/com_jbase_jdbc_io_class-use_Response)  
**Original ID:** 277861  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jdbc.io.Response (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.jdbc.io-%28jbasejdbc---api%29)
- [Class](./../../response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io")
- Use
- [Tree](./../../com.jbase.jdbc.io-class-hierarchy-%28jbasejdbc---api%29)
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
com.jbase.jdbc.io.Response

- Packages that use [Response](./../../response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") | Package | Description |
| --- | --- |
| com.jbase.jdbc |   |
| com.jbase.jdbc.io |   |
| com.jbase.jdbc.protocol |   |
- - ### Uses of [Response](./../../response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") in [com.jbase.jdbc](./../../../jbase-jdbc-api)


Methods in [com.jbase.jdbc](./../../../jbase-jdbc-api) that return [Response](./../../response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") | Modifier and Type | Method and Description |
| --- | --- |
| `protected Response` | JBaseJDBCSocketConnection.`getResponse()`<br>Reads response from the server.<br> |
    - ### Uses of [Response](./../../response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") in [com.jbase.jdbc.io](./../../com.jbase.jdbc.io-%28jbasejdbc---api%29)


Subclasses of [Response](./../../response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") in [com.jbase.jdbc.io](./../../com.jbase.jdbc.io-%28jbasejdbc---api%29) | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `ErrorResponse`  |
| `class` | `OKResponse`  |
    - ### Uses of [Response](./../../response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") in [com.jbase.jdbc.protocol](./../../../protocol/com.jbase.jdbc.protocol-%28jbasejdbc---api%29)


Subclasses of [Response](./../../response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") in [com.jbase.jdbc.protocol](./../../../protocol/com.jbase.jdbc.protocol-%28jbasejdbc---api%29) | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `InputOutputResponse`<br>Objects of this class can be sent from jsqld to the client<br> if a terminal output has been produced by a subroutine (CRT, PRINT)<br> or jBASE runtime.<br> |
| `class` | `SetPropertiesResponse`  |
| `class` | `SQLErrorResponse`  |
| `class` | `SQLOKResponse`  |
| `class` | `SQLParamsResponse`  |
| `class` | `SQLResponse`<br>Represents a response from jsqld.<br> |
| `class` | `SQLResultResponse`  |
| `class` | `SQLRSMDResponse`  |
| `class` | `SQLUpdateResponse`  |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.jdbc.io-%28jbasejdbc---api%29)
- [Class](./../../response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io")
- Use
- [Tree](./../../com.jbase.jdbc.io-class-hierarchy-%28jbasejdbc---api%29)
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
