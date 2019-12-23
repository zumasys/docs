# Uses of Interface com.jbase.jdbc.io.JBaseObjectReader (jbasejdbc   API)

**Created At:** 9/25/2017 10:46:48 AM  
**Updated At:** 2/15/2018 8:02:49 AM  
**Original Doc:** [com_jbase_jdbc_io_class-use_JBaseObjectReader](https://docs.jbase.com/39235-class-use/com_jbase_jdbc_io_class-use_JBaseObjectReader)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jdbc.io.JBaseObjectReader (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.jdbc.io-%28jbasejdbc---api%29)
- [Class](./../../jbaseobjectreader-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
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

## Uses of Interface
com.jbase.jdbc.io.JBaseObjectReader

- Packages that use [JBaseObjectReader](./../../jbaseobjectreader-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") | Package | Description |
| --- | --- |
| com.jbase.jdbc.io |   |
| com.jbase.jdbc.protocol |   |
- - ### Uses of [JBaseObjectReader](./../../jbaseobjectreader-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") in [com.jbase.jdbc.io](./../../com.jbase.jdbc.io-%28jbasejdbc---api%29)


Classes in [com.jbase.jdbc.io](./../../com.jbase.jdbc.io-%28jbasejdbc---api%29) that implement [JBaseObjectReader](./../../jbaseobjectreader-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `AbstractJBaseObjectReader`<br>Deserializes JBaseSerializable objects sent from the jbase\_agent server,<br> or any other source of serialized JCF objects.<br> |
| `class` | `IOJBaseObjectReader`<br>jBase object reader based on the DataInputStream.<br> |
| `class` | `NIOJBaseObjectReader`<br>jBase object reader based on the new Java IO.<br> |



Methods in [com.jbase.jdbc.io](./../../com.jbase.jdbc.io-%28jbasejdbc---api%29) with parameters of type [JBaseObjectReader](./../../jbaseobjectreader-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") | Modifier and Type | Method and Description |
| --- | --- |
| `void` | SQLError.`readObject(JBaseObjectReader reader,<br>          int version)`<br>Method :                readObject()<br><br> Description:   Read object off the wire.<br> |
| `void` | OKResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | JBaseSerializable.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | ErrorResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
    - ### Uses of [JBaseObjectReader](./../../jbaseobjectreader-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") in [com.jbase.jdbc.protocol](./../../../protocol/com.jbase.jdbc.protocol-%28jbasejdbc---api%29)


Methods in [com.jbase.jdbc.protocol](./../../../protocol/com.jbase.jdbc.protocol-%28jbasejdbc---api%29) with parameters of type [JBaseObjectReader](./../../jbaseobjectreader-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") | Modifier and Type | Method and Description |
| --- | --- |
| `void` | TransactionStartRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | TransactionRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SQLUpdateResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SQLRSMDResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SQLResultResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SQLRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SQLParamsResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SQLOKResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SQLErrorResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SetPropertiesResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SetPropertiesRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | Row.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | RemoteInputRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | PResultSetMetaData.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | PResultSet.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | PColumnMetaData.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | ParameterList.`readObject(JBaseObjectReader reader,<br>          int version)`<br>Not implemented yet (currently ParameterList is only being sent from the client to the server).<br> |
| `void` | LoggingRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | LoadSubroutineRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | InputOutputResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | FetchRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | DatabaseMetaDataRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | CompileRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | BindRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | AuthenticationRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | AuthenticationRequest.UserCredentials.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | AccountAuthenticationRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | AccountAuthenticationRequest.AccountUserCredentials.`readObject(JBaseObjectReader reader,<br>          int version)`  |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.jdbc.io-%28jbasejdbc---api%29)
- [Class](./../../jbaseobjectreader-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
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
