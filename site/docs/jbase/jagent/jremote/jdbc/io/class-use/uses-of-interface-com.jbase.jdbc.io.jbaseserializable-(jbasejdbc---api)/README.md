# Uses of Interface com.jbase.jdbc.io.JBaseSerializable (jbasejdbc   API)

**Created At:** 9/25/2017 10:47:03 AM  
**Updated At:** 2/15/2018 8:02:49 AM  
**Original Doc:** [com_jbase_jdbc_io_class-use_JBaseSerializable](https://docs.jbase.com/39235-class-use/com_jbase_jdbc_io_class-use_JBaseSerializable)  
**Original ID:** 277852  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jdbc.io.JBaseSerializable (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.jdbc.io-%28jbasejdbc---api%29)
- [Class](./../../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
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
com.jbase.jdbc.io.JBaseSerializable

- Packages that use [JBaseSerializable](./../../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") | Package | Description |
| --- | --- |
| com.jbase.jdbc.io |   |
| com.jbase.jdbc.protocol |   |
- - ### Uses of [JBaseSerializable](./../../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") in [com.jbase.jdbc.io](./../../com.jbase.jdbc.io-%28jbasejdbc---api%29)


Classes in [com.jbase.jdbc.io](./../../com.jbase.jdbc.io-%28jbasejdbc---api%29) that implement [JBaseSerializable](./../../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `ErrorResponse`  |
| `class` | `OKResponse`  |
| `class` | `Response`<br>Represents a response from jsqld.<br> |
| `class` | `SQLError`  |



Methods in [com.jbase.jdbc.io](./../../com.jbase.jdbc.io-%28jbasejdbc---api%29) that return [JBaseSerializable](./../../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") | Modifier and Type | Method and Description |
| --- | --- |
| `protected JBaseSerializable` | ObjectFactory.`createGenericObjects(int objectType)`<br>Creates any generic (i.e common to all framework clients) objects.<br> |
| `protected abstract JBaseSerializable` | ObjectFactory.`createObject(int objectType)`<br>Create JBaseSerializable object from the supplied object type.<br> |
| `protected JBaseSerializable` | JBaseJDBCObjectFactory.`createObject(int objectType)`  |
| `protected JBaseSerializable` | AbstractJBaseObjectReader.`readJBaseSerializableObject(char code,<br>                           JBaseSerializable o)`  |
| `JBaseSerializable` | JBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, a JBaseSerializable object should be created and returned<br> if a null argument is passed in.<br> |
| `JBaseSerializable` | AbstractJBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, the ObjectFactory will be used to create a<br> JBaseSerializable object if a null argument is passed in.<br> |
| `JBaseSerializable` | JBaseObjectReader.`readRootObject()`<br>Deserializes a root object.<br> |
| `JBaseSerializable` | AbstractJBaseObjectReader.`readRootObject()`  |



Methods in [com.jbase.jdbc.io](./../../com.jbase.jdbc.io-%28jbasejdbc---api%29) with parameters of type [JBaseSerializable](./../../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") | Modifier and Type | Method and Description |
| --- | --- |
| `protected JBaseSerializable` | AbstractJBaseObjectReader.`readJBaseSerializableObject(char code,<br>                           JBaseSerializable o)`  |
| `JBaseSerializable` | JBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, a JBaseSerializable object should be created and returned<br> if a null argument is passed in.<br> |
| `JBaseSerializable` | AbstractJBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, the ObjectFactory will be used to create a<br> JBaseSerializable object if a null argument is passed in.<br> |
| `protected void` | AbstractJBaseObjectWriter.`writeJBaseSerializableObject(JBaseSerializable o)`  |
| `void` | JBaseObjectWriter.`writeObject(JBaseSerializable o)`  |
| `void` | AbstractJBaseObjectWriter.`writeObject(JBaseSerializable o)`  |
| `void` | JBaseObjectWriter.`writeRootObject(JBaseSerializable o)`  |
| `void` | AbstractJBaseObjectWriter.`writeRootObject(JBaseSerializable o)`  |
    - ### Uses of [JBaseSerializable](./../../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") in [com.jbase.jdbc.protocol](./../../../protocol/com.jbase.jdbc.protocol-%28jbasejdbc---api%29)


Classes in [com.jbase.jdbc.protocol](./../../../protocol/com.jbase.jdbc.protocol-%28jbasejdbc---api%29) that implement [JBaseSerializable](./../../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `AccountAuthenticationRequest`<br>Request for authentication.<br> |
| `static class` | `AccountAuthenticationRequest.AccountUserCredentials`  |
| `class` | `AuthenticationRequest`<br>Request for authentication.<br> |
| `class` | `AuthenticationRequest.UserCredentials`  |
| `class` | `BindRequest`<br>Request to bind parameters to previously precompiled<br> (or prepared) SQL statement.<br> |
| `class` | `CallSubroutineRequest`<br>Request to call subroutine with supplied parameters.<br> |
| `class` | `CompileAndExecuteRequest`<br>Request to compile and execute a SQL statement.<br> |
| `class` | `CompileRequest`<br>Request to compile a SQL statement.<br> |
| `class` | `DatabaseMetaDataRequest`<br>Request class to retrieve metadata about the database.<br> |
| `class` | `ExecuteRequest`<br>Request to execute previously compiled SQL statement.<br> |
| `class` | `FetchRequest`<br>Request to fetch result of a query (rows of data) from the server.<br> |
| `class` | `InputOutputResponse`<br>Objects of this class can be sent from jsqld to the client<br> if a terminal output has been produced by a subroutine (CRT, PRINT)<br> or jBASE runtime.<br> |
| `class` | `LoadSubroutineRequest`  |
| `class` | `LoggingRequest`  |
| `class` | `MetaDataRequest`<br>Request to retrieve meta data of result set of last executed query.<br> |
| `class` | `ParameterList`<br>ParameterList represents list of parameters to be bound to<br> a PreparedStatement or CallableStatement.<br> |
| `class` | `PColumnMetaData`  |
| `class` | `PrecompileRequest`<br>Request to precompile (or prepare) a parametrized SQL statement.<br> |
| `class` | `PResultSet`  |
| `class` | `PResultSetMetaData`  |
| `class` | `ReleaseRequest`  |
| `class` | `RemoteInputRequest`  |
| `class` | `Row`  |
| `class` | `SetPropertiesRequest`  |
| `class` | `SetPropertiesResponse`  |
| `class` | `SQLErrorResponse`  |
| `class` | `SQLOKResponse`  |
| `class` | `SQLParamsResponse`  |
| `class` | `SQLRequest`<br>Base class of all SQL driver's requests.<br> |
| `class` | `SQLResponse`<br>Represents a response from jsqld.<br> |
| `class` | `SQLResultResponse`  |
| `class` | `SQLRSMDResponse`  |
| `class` | `SQLStartRequest`<br>Base class of all JDBC driver's requests.<br> |
| `class` | `SQLUpdateResponse`  |
| `class` | `TransactionCommitRequest`  |
| `class` | `TransactionRequest`  |
| `class` | `TransactionRollbackRequest`  |
| `class` | `TransactionStartRequest`  |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.jdbc.io-%28jbasejdbc---api%29)
- [Class](./../../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
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
