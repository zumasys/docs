# Uses of Class com.jbase.jdbc.protocol.SQLStartRequest (jbasejdbc API)

**Created At:** 9/25/2017 11:00:55 AM  
**Updated At:** 4/3/2018 10:10:55 PM  
**Original Doc:** [com_jbase_jdbc_protocol_class-use_sqlstartrequest](https://docs.jbase.com/39241-class-use/com_jbase_jdbc_protocol_class-use_sqlstartrequest)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jdbc.protocol.SQLStartRequest (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->&amp;amp;amp;lt;div&amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;lt;/div&amp;amp;amp;gt;
# Uses of Class com.jbase.jdbc.protocol.SQLStartRequest



**Packages that use [SQLStartRequest](./../../sqlstartrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")**


| <br>Package<br> | <br>Description<br> |
| --- | --- |
| <br>com.jbase.jdbc<br> | <br><br> |
| <br>com.jbase.jdbc.protocol<br> | <br><br> |





## Uses of [SQLStartRequest](./../../sqlstartrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc](./../../../jbase-jdbc-api)



**Fields in [com.jbase.jdbc](./../../../jbase-jdbc-api) with type parameters of type [SQLStartRequest](./../../sqlstartrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")**


| <br>Modifier and Type<br> | <br>Field and Description<br> |
| --- | --- |
| <br>protected [List](http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true "class or interface in java.util")&lt;[SQLStartRequest](./../../sqlstartrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")&gt;<br> | <br>JBaseJDBCSocketStatement.[batchRequestsList](../../../../../com/jbase/jdbc/JBaseJDBCSocketStatement.html#batchRequestsList)<br> |




### 


## Uses of [SQLStartRequest](./../../sqlstartrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc.protocol](./../../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)



**Subclasses of [SQLStartRequest](./../../sqlstartrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc.protocol](./../../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)**


| <br>Modifier and Type<br> | <br>Class<br> | Description<br> |
| --- | --- | --- |
| <br>class<br> | <br>[BindRequest](./../../bindrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")<br> | <br>Request to bind parameters to previously precompiled (or prepared) SQL statement.<br> |
| <br>class<br> | <br>[CallSubroutineRequest](./../../callsubroutinerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")<br> | <br>Request to call subroutine with supplied parameters.<br> |
| <br>class<br> | <br>[CompileAndExecuteRequest](./../../compileandexecuterequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")<br> | <br>Request to compile and execute a SQL statement.<br> |
| <br>class<br> | <br>[CompileRequest](./../../compilerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")<br> | <br>Request to compile a SQL statement.<br> |
| <br>class<br> | <br>[DatabaseMetaDataRequest](./../../databasemetadatarequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")<br> | <br>Request class to retrieve metadata about the database.<br> |
| <br>class<br> | <br>[ExecuteRequest](./../../executerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")<br> | <br>Request to execute previously compiled SQL statement.<br> |
| <br>class<br> | <br>[FetchRequest](./../../fetchrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")<br> | <br><br><br>Request to fetch result of a query (rows of data) from the server.<br> |
| <br>class<br> | <br>[LoadSubroutineRequest](./../../loadsubroutinerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")<br> | <br> |
| <br>class<br> | <br>[MetaDataRequest](./../../metadatarequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol")<br> | <br><br><br>Request to retrieve meta data of result set of last executed query.<br> |
| <br>class<br> | <br>[PrecompileRequest](./../../precompilerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")<br> | <br>Request to precompile (or prepare) a parametrized SQL statement.<br> |
| <br>class<br> | <br>[ReleaseRequest](./../../releaserequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")<br> | <br> |
| <br>class<br> | <br>[SetPropertiesRequest](./../../setpropertiesrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")<br> | <br> |
| <br>class<br> | <br>[SQLRequest](./../../sqlrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")<br> | <br>``Base class of all SQL driver's requests.<br> |


