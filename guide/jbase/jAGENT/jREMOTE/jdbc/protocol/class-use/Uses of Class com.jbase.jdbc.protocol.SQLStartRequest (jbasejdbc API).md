# Uses of Class com.jbase.jdbc.protocol.SQLStartRequest (jbasejdbc API)

**Created At:** 9/25/2017 11:00:55 AM  
**Updated At:** 4/3/2018 10:10:55 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Class com.jbase.jdbc.protocol.SQLStartRequest (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript>&amp;amp;amp;amp;lt;div&amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
# <!--   -->Uses of Class com.jbase.jdbc.protocol.SQLStartRequest



**Packages that use [SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")**


| <br>Package<br> | <br>Description<br> |
| --- | --- |
| <br>com.jbase.jdbc<br> | <br><br> |
| <br>com.jbase.jdbc.protocol<br> | <br><br> |



<!--   -->

## Uses of [SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc](/39228-jdbc/com_jbase_jdbc_package-summary)



**Fields in [com.jbase.jdbc](/39228-jdbc/com_jbase_jdbc_package-summary) with type parameters of type [SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")**


| <br>Modifier and Type<br> | <br>Field and Description<br> |
| --- | --- |
| <br>protected [List](http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true "class or interface in java.util")&lt;[SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")&gt;<br> | <br>JBaseJDBCSocketStatement.[batchRequestsList](../../../../../com/jbase/jdbc/JBaseJDBCSocketStatement.html#batchRequestsList)<br> |


<!--   -->

### 


## Uses of [SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc.protocol](/39240-protocol/com_jbase_jdbc_protocol_package-summary)



**Subclasses of [SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc.protocol](/39240-protocol/com_jbase_jdbc_protocol_package-summary)**


| <br>Modifier and Type<br> | <br>Class<br> | Description<br> |
| --- | --- | --- |
| <br>class<br> | <br>[BindRequest](/39240-protocol/com_jbase_jdbc_protocol_BindRequest "class in com.jbase.jdbc.protocol")<br> | <br>Request to bind parameters to previously precompiled (or prepared) SQL statement.<br> |
| <br>class<br> | <br>[CallSubroutineRequest](/39240-protocol/com_jbase_jdbc_protocol_CallSubroutineRequest "class in com.jbase.jdbc.protocol")<br> | <br>Request to call subroutine with supplied parameters.<br> |
| <br>class<br> | <br>[CompileAndExecuteRequest](/39240-protocol/com_jbase_jdbc_protocol_CompileAndExecuteRequest "class in com.jbase.jdbc.protocol")<br> | <br>Request to compile and execute a SQL statement.<br> |
| <br>class<br> | <br>[CompileRequest](/39240-protocol/com_jbase_jdbc_protocol_CompileRequest "class in com.jbase.jdbc.protocol")<br> | <br>Request to compile a SQL statement.<br> |
| <br>class<br> | <br>[DatabaseMetaDataRequest](/39240-protocol/com_jbase_jdbc_protocol_DatabaseMetaDataRequest "class in com.jbase.jdbc.protocol")<br> | <br>Request class to retrieve metadata about the database.<br> |
| <br>class<br> | <br>[ExecuteRequest](/39240-protocol/com_jbase_jdbc_protocol_ExecuteRequest "class in com.jbase.jdbc.protocol")<br> | <br>Request to execute previously compiled SQL statement.<br> |
| <br>class<br> | <br>[FetchRequest](/39240-protocol/com_jbase_jdbc_protocol_FetchRequest "class in com.jbase.jdbc.protocol")<br> | <br><br><br>Request to fetch result of a query (rows of data) from the server.<br> |
| <br>class<br> | <br>[LoadSubroutineRequest](/39240-protocol/com_jbase_jdbc_protocol_LoadSubroutineRequest "class in com.jbase.jdbc.protocol")<br> | <br> |
| <br>class<br> | <br>[MetaDataRequest](/39240-protocol/com_jbase_jdbc_protocol_metadatarequest "class in com.jbase.jdbc.protocol")<br> | <br><br><br>Request to retrieve meta data of result set of last executed query.<br> |
| <br>class<br> | <br>[PrecompileRequest](/39240-protocol/com_jbase_jdbc_protocol_PrecompileRequest "class in com.jbase.jdbc.protocol")<br> | <br>Request to precompile (or prepare) a parametrized SQL statement.<br> |
| <br>class<br> | <br>[ReleaseRequest](/39240-protocol/com_jbase_jdbc_protocol_ReleaseRequest "class in com.jbase.jdbc.protocol")<br> | <br> |
| <br>class<br> | <br>[SetPropertiesRequest](/39240-protocol/com_jbase_jdbc_protocol_SetPropertiesRequest "class in com.jbase.jdbc.protocol")<br> | <br> |
| <br>class<br> | <br>[SQLRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLRequest "class in com.jbase.jdbc.protocol")<br> | <br>``Base class of all SQL driver's requests.<br> |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
