# Uses of Interface com.jbase.jdbc.io.JBaseSerializable (jbasejdbc   API)

**Created At:** 9/25/2017 10:47:03 AM  
**Updated At:** 2/15/2018 8:02:49 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jdbc.io.JBaseSerializable (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- [Class](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
- Use
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/io/class-use//39235-class-use/com_jbase_jdbc_io_class-use_JBaseSerializable)
- [No Frames](/39235-class-use/com_jbase_jdbc_io_class-use_JBaseSerializable)


- [All Classes](../../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_top");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>
<!--   -->
<!-- ========= END OF TOP NAVBAR ========= -->
## Uses of Interface
com.jbase.jdbc.io.JBaseSerializable

- <caption><span>Packages that use <a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jdbc.io |   |
| com.jbase.jdbc.protocol |   |
- - <!--   -->
### Uses of [JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io") in [com.jbase.jdbc.io](/39232-io/com_jbase_jdbc_io_package-summary)


<caption><span>Classes in <a href="/39232-io/com_jbase_jdbc_io_package-summary">com.jbase.jdbc.io</a> that implement <a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `ErrorResponse`  |
| `class` | `OKResponse`  |
| `class` | `Response`<br>Represents a response from jsqld.<br> |
| `class` | `SQLError`  |



<caption><span>Methods in <a href="/39232-io/com_jbase_jdbc_io_package-summary">com.jbase.jdbc.io</a> that return <a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected JBaseSerializable` | ObjectFactory.`createGenericObjects(int objectType)`<br>Creates any generic (i.e common to all framework clients) objects.<br> |
| `protected abstract JBaseSerializable` | ObjectFactory.`createObject(int objectType)`<br>Create JBaseSerializable object from the supplied object type.<br> |
| `protected JBaseSerializable` | JBaseJDBCObjectFactory.`createObject(int objectType)`  |
| `protected JBaseSerializable` | AbstractJBaseObjectReader.`readJBaseSerializableObject(char code,<br>                           JBaseSerializable o)`  |
| `JBaseSerializable` | JBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, a JBaseSerializable object should be created and returned<br> if a null argument is passed in.<br> |
| `JBaseSerializable` | AbstractJBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, the ObjectFactory will be used to create a<br> JBaseSerializable object if a null argument is passed in.<br> |
| `JBaseSerializable` | JBaseObjectReader.`readRootObject()`<br>Deserializes a root object.<br> |
| `JBaseSerializable` | AbstractJBaseObjectReader.`readRootObject()`  |



<caption><span>Methods in <a href="/39232-io/com_jbase_jdbc_io_package-summary">com.jbase.jdbc.io</a> with parameters of type <a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected JBaseSerializable` | AbstractJBaseObjectReader.`readJBaseSerializableObject(char code,<br>                           JBaseSerializable o)`  |
| `JBaseSerializable` | JBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, a JBaseSerializable object should be created and returned<br> if a null argument is passed in.<br> |
| `JBaseSerializable` | AbstractJBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, the ObjectFactory will be used to create a<br> JBaseSerializable object if a null argument is passed in.<br> |
| `protected void` | AbstractJBaseObjectWriter.`writeJBaseSerializableObject(JBaseSerializable o)`  |
| `void` | JBaseObjectWriter.`writeObject(JBaseSerializable o)`  |
| `void` | AbstractJBaseObjectWriter.`writeObject(JBaseSerializable o)`  |
| `void` | JBaseObjectWriter.`writeRootObject(JBaseSerializable o)`  |
| `void` | AbstractJBaseObjectWriter.`writeRootObject(JBaseSerializable o)`  |
    - <!--   -->
### Uses of [JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io") in [com.jbase.jdbc.protocol](/39240-protocol/com_jbase_jdbc_protocol_package-summary)


<caption><span>Classes in <a href="/39240-protocol/com_jbase_jdbc_protocol_package-summary">com.jbase.jdbc.protocol</a> that implement <a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
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
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- [Class](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
- Use
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/io/class-use//39235-class-use/com_jbase_jdbc_io_class-use_JBaseSerializable)
- [No Frames](/39235-class-use/com_jbase_jdbc_io_class-use_JBaseSerializable)


- [All Classes](../../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_bottom");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>
<!--   -->
<!-- ======== END OF BOTTOM NAVBAR ======= -->
<small>			<center>			<i>Copyright © 2017 jBASE, Inc.. All Rights Reserved.</i>		</center></small>
