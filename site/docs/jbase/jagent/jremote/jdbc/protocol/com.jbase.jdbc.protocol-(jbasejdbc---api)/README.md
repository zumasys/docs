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
- [Use](/39240-protocol/com_jbase_jdbc_protocol_package-use)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Package](/39238-inflow/com_jbase_jdbc_io_inflow_package-summary)
- Next Package


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_package-summary)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_package-summary)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

# Package com.jbase.jdbc.protocol

- Class Summary | Class | Description |
| --- | --- |
| [AccountAuthenticationRequest](/39240-protocol/com_jbase_jdbc_protocol_accountauthenticationrequest "class in com.jbase.jdbc.protocol") | <br>Request for authentication.<br> |
| [AccountAuthenticationRequest.AccountUserCredentials](/39240-protocol/com_jbase_jdbc_protocol_AccountAuthenticationRequest.AccountUserCredentials "class in com.jbase.jdbc.protocol") |   |
| [AuthenticationRequest](/39240-protocol/com_jbase_jdbc_protocol_authenticationrequest "class in com.jbase.jdbc.protocol") | <br>Request for authentication.<br> |
| [BindRequest](/39240-protocol/com_jbase_jdbc_protocol_BindRequest "class in com.jbase.jdbc.protocol") | <br>Request to bind parameters to previously precompiled<br> (or prepared) SQL statement.<br> |
| [CallSubroutineRequest](/39240-protocol/com_jbase_jdbc_protocol_CallSubroutineRequest "class in com.jbase.jdbc.protocol") | <br>Request to call subroutine with supplied parameters.<br> |
| [CompileAndExecuteRequest](/39240-protocol/com_jbase_jdbc_protocol_CompileAndExecuteRequest "class in com.jbase.jdbc.protocol") | <br>Request to compile and execute a SQL statement.<br> |
| [CompileRequest](/39240-protocol/com_jbase_jdbc_protocol_CompileRequest "class in com.jbase.jdbc.protocol") | <br>Request to compile a SQL statement.<br> |
| [DatabaseMetaDataRequest](/39240-protocol/com_jbase_jdbc_protocol_DatabaseMetaDataRequest "class in com.jbase.jdbc.protocol") | <br>Request class to retrieve metadata about the database.<br> |
| [ExecuteRequest](/39240-protocol/com_jbase_jdbc_protocol_ExecuteRequest "class in com.jbase.jdbc.protocol") | <br>Request to execute previously compiled SQL statement.<br> |
| [FetchRequest](/39240-protocol/com_jbase_jdbc_protocol_FetchRequest "class in com.jbase.jdbc.protocol") | <br>Request to fetch result of a query (rows of data) from the server.<br> |
| [InputOutputResponse](/39240-protocol/com_jbase_jdbc_protocol_InputOutputResponse "class in com.jbase.jdbc.protocol") | <br>Objects of this class can be sent from jsqld to the client<br> if a terminal output has been produced by a subroutine (CRT, PRINT)<br> or jBASE runtime.<br> |
| [LoadSubroutineRequest](/39240-protocol/com_jbase_jdbc_protocol_LoadSubroutineRequest "class in com.jbase.jdbc.protocol") |   |
| [LoggingRequest](/39240-protocol/com_jbase_jdbc_protocol_loggingrequest "class in com.jbase.jdbc.protocol") |   |
| [MetaDataRequest](/39240-protocol/com_jbase_jdbc_protocol_metadatarequest "class in com.jbase.jdbc.protocol") | <br>Request to retrieve meta data of result set of last executed query.<br> |
| [ParameterList](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol") | <br>ParameterList represents list of parameters to be bound to<br> a PreparedStatement or CallableStatement.<br> |
| [PColumnMetaData](/39240-protocol/com_jbase_jdbc_protocol_PColumnMetaData "class in com.jbase.jdbc.protocol") |   |
| [PrecompileRequest](/39240-protocol/com_jbase_jdbc_protocol_PrecompileRequest "class in com.jbase.jdbc.protocol") | <br>Request to precompile (or prepare) a parametrized SQL statement.<br> |
| [PResultSet](/39240-protocol/com_jbase_jdbc_protocol_PResultSet "class in com.jbase.jdbc.protocol") |   |
| [PResultSetMetaData](/39240-protocol/com_jbase_jdbc_protocol_PResultSetMetaData "class in com.jbase.jdbc.protocol") |   |
| [ReleaseRequest](/39240-protocol/com_jbase_jdbc_protocol_ReleaseRequest "class in com.jbase.jdbc.protocol") |   |
| [RemoteInputRequest](/39240-protocol/com_jbase_jdbc_protocol_RemoteInputRequest "class in com.jbase.jdbc.protocol") |   |
| [Row](/39240-protocol/com_jbase_jdbc_protocol_Row "class in com.jbase.jdbc.protocol") |   |
| [SetPropertiesRequest](/39240-protocol/com_jbase_jdbc_protocol_SetPropertiesRequest "class in com.jbase.jdbc.protocol") |   |
| [SetPropertiesResponse](/39240-protocol/com_jbase_jdbc_protocol_SetPropertiesResponse "class in com.jbase.jdbc.protocol") |   |
| [SQLErrorResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLErrorResponse "class in com.jbase.jdbc.protocol") |   |
| [SQLOKResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLOKResponse "class in com.jbase.jdbc.protocol") |   |
| [SQLParamsResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLParamsResponse "class in com.jbase.jdbc.protocol") |   |
| [SQLRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLRequest "class in com.jbase.jdbc.protocol") | <br>Base class of all SQL driver's requests.<br> |
| [SQLResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLResponse "class in com.jbase.jdbc.protocol") | <br>Represents a response from jsqld.<br> |
| [SQLResultResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLResultResponse "class in com.jbase.jdbc.protocol") |   |
| [SQLRSMDResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLRSMDResponse "class in com.jbase.jdbc.protocol") |   |
| [SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol") | <br>Base class of all JDBC driver's requests.<br> |
| [SQLUpdateResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLUpdateResponse "class in com.jbase.jdbc.protocol") |   |
| [StatementID](/39240-protocol/com_jbase_jdbc_protocol_statementid "class in com.jbase.jdbc.protocol") | <br>An abstraction of the statement ID.<br> |
| [TransactionCommitRequest](/39240-protocol/com_jbase_jdbc_protocol_transactioncommitrequest "class in com.jbase.jdbc.protocol") |   |
| [TransactionRequest](/39240-protocol/com_jbase_jdbc_protocol_transactionrequest "class in com.jbase.jdbc.protocol") |   |
| [TransactionRollbackRequest](/39240-protocol/com_jbase_jdbc_protocol_transactionrollbackrequest "class in com.jbase.jdbc.protocol") |   |
| [TransactionStartRequest](/39240-protocol/com_jbase_jdbc_protocol_transactionstartrequest "class in com.jbase.jdbc.protocol") |   |

Skip navigation links

- [Overview](../../../../overview-summary.html)
- Package
- Class
- [Use](/39240-protocol/com_jbase_jdbc_protocol_package-use)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Package](/39238-inflow/com_jbase_jdbc_io_inflow_package-summary)
- Next Package


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_package-summary)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_package-summary)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
