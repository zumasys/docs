# com.jbase.jdbc.protocol (jbasejdbc   API)

**Created At:** 9/25/2017 11:02:40 AM  
**Updated At:** 2/15/2018 8:02:53 AM  
**Original Doc:** [com_jbase_jdbc_protocol_package-summary](https://docs.jbase.com/39240-protocol/com_jbase_jdbc_protocol_package-summary)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="com.jbase.jdbc.protocol (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- Package
- Class
- [Use](./../uses-of-package-com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.protocol-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Package](./../../io/inflow/com.jbase.jdbc.io.inflow-%28jbasejdbc---api%29)
- Next Package


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

# Package com.jbase.jdbc.protocol

- Class Summary | Class | Description |
| --- | --- |
| [AccountAuthenticationRequest](./../accountauthenticationrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") | <br>Request for authentication.<br> |
| [AccountAuthenticationRequest.AccountUserCredentials](./../accountauthenticationrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") |   |
| [AuthenticationRequest](./../authenticationrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") | <br>Request for authentication.<br> |
| [BindRequest](./../bindrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | <br>Request to bind parameters to previously precompiled<br> (or prepared) SQL statement.<br> |
| [CallSubroutineRequest](./../callsubroutinerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | <br>Request to call subroutine with supplied parameters.<br> |
| [CompileAndExecuteRequest](./../compileandexecuterequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | <br>Request to compile and execute a SQL statement.<br> |
| [CompileRequest](./../compilerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | <br>Request to compile a SQL statement.<br> |
| [DatabaseMetaDataRequest](./../databasemetadatarequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | <br>Request class to retrieve metadata about the database.<br> |
| [ExecuteRequest](./../executerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | <br>Request to execute previously compiled SQL statement.<br> |
| [FetchRequest](./../fetchrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | <br>Request to fetch result of a query (rows of data) from the server.<br> |
| [InputOutputResponse](./../inputoutputresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | <br>Objects of this class can be sent from jsqld to the client<br> if a terminal output has been produced by a subroutine (CRT, PRINT)<br> or jBASE runtime.<br> |
| [LoadSubroutineRequest](./../loadsubroutinerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") |   |
| [LoggingRequest](./../loggingrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") |   |
| [MetaDataRequest](./../metadatarequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") | <br>Request to retrieve meta data of result set of last executed query.<br> |
| [ParameterList](./../parameterlist-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | <br>ParameterList represents list of parameters to be bound to<br> a PreparedStatement or CallableStatement.<br> |
| [PColumnMetaData](./../pcolumnmetadata-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") |   |
| [PrecompileRequest](./../precompilerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | <br>Request to precompile (or prepare) a parametrized SQL statement.<br> |
| [PResultSet](./../presultset-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") |   |
| [PResultSetMetaData](./../presultsetmetadata-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") |   |
| [ReleaseRequest](./../releaserequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") |   |
| [RemoteInputRequest](./../remoteinputrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") |   |
| [Row](./../row-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") |   |
| [SetPropertiesRequest](./../setpropertiesrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") |   |
| [SetPropertiesResponse](./../setpropertiesresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") |   |
| [SQLErrorResponse](./../sqlerrorresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") |   |
| [SQLOKResponse](./../sqlokresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") |   |
| [SQLParamsResponse](./../sqlparamsresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") |   |
| [SQLRequest](./../sqlrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | <br>Base class of all SQL driver's requests.<br> |
| [SQLResponse](./../sqlresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | <br>Represents a response from jsqld.<br> |
| [SQLResultResponse](./../sqlresultresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") |   |
| [SQLRSMDResponse](./../sqlrsmdresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") |   |
| [SQLStartRequest](./../sqlstartrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") | <br>Base class of all JDBC driver's requests.<br> |
| [SQLUpdateResponse](./../sqlupdateresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") |   |
| [StatementID](./../statementid-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") | <br>An abstraction of the statement ID.<br> |
| [TransactionCommitRequest](./../transactioncommitrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") |   |
| [TransactionRequest](./../transactionrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") |   |
| [TransactionRollbackRequest](./../transactionrollbackrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") |   |
| [TransactionStartRequest](./../transactionstartrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") |   |

Skip navigation links

- [Overview](../../../../overview-summary.html)
- Package
- Class
- [Use](./../uses-of-package-com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.protocol-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Package](./../../io/inflow/com.jbase.jdbc.io.inflow-%28jbasejdbc---api%29)
- Next Package


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
