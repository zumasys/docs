# com.jbase.jdbc.protocol Class Hierarchy (jbasejdbc   API)

**Created At:** 9/25/2017 11:02:52 AM  
**Updated At:** 2/15/2018 8:02:53 AM  
**Original Doc:** [com_jbase_jdbc_protocol_package-tree](https://docs.jbase.com/39240-protocol/com_jbase_jdbc_protocol_package-tree)  
**Original ID:** 277987  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="com.jbase.jdbc.protocol Class Hierarchy (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- Class
- Use
- Tree
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev](./../../io/inflow/com.jbase.jdbc.io.inflow-class-hierarchy-%28jbasejdbc---api%29)
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

# Hierarchy For Package com.jbase.jdbc.protocol
Package Hierarchies:
- [All Packages](../../../../overview-tree.html)

## Class Hierarchy

- java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
    - com.jbase.jdbc.protocol.[AccountAuthenticationRequest](./../accountauthenticationrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[AccountAuthenticationRequest.AccountUserCredentials](./../accountauthenticationrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[AuthenticationRequest](./../authenticationrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[AuthenticationRequest.UserCredentials](./../authenticationrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[LoggingRequest](./../loggingrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[ParameterList](./../parameterlist-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.[JBaseJDBCGlobals](./../../jbasejdbcglobals-%28jbasejdbc---api%29 "interface in com.jbase.jdbc"), com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[PColumnMetaData](./../pcolumnmetadata-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[PResultSet](./../presultset-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[PResultSetMetaData](./../presultsetmetadata-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[RemoteInputRequest](./../remoteinputrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.io.[Response](./../../io/response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io") (implements com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
        - com.jbase.jdbc.protocol.[InputOutputResponse](./../inputoutputresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
        - com.jbase.jdbc.protocol.[SQLResponse](./../sqlresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SetPropertiesResponse](./../setpropertiesresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SQLErrorResponse](./../sqlerrorresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SQLOKResponse](./../sqlokresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SQLParamsResponse](./../sqlparamsresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SQLResultResponse](./../sqlresultresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SQLRSMDResponse](./../sqlrsmdresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SQLUpdateResponse](./../sqlupdateresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
    - com.jbase.jdbc.protocol.[Row](./../row-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[SQLStartRequest](./../sqlstartrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
        - com.jbase.jdbc.protocol.[CompileRequest](./../compilerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[CompileAndExecuteRequest](./../compileandexecuterequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[PrecompileRequest](./../precompilerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
        - com.jbase.jdbc.protocol.[DatabaseMetaDataRequest](./../databasemetadatarequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
        - com.jbase.jdbc.protocol.[LoadSubroutineRequest](./../loadsubroutinerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
        - com.jbase.jdbc.protocol.[SQLRequest](./../sqlrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[BindRequest](./../bindrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
                - com.jbase.jdbc.protocol.[CallSubroutineRequest](./../callsubroutinerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[ExecuteRequest](./../executerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[FetchRequest](./../fetchrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[MetaDataRequest](./../metadatarequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[ReleaseRequest](./../releaserequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SetPropertiesRequest](./../setpropertiesrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
    - com.jbase.jdbc.protocol.[StatementID](./../statementid-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol")
    - com.jbase.jdbc.protocol.[TransactionRequest](./../transactionrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io"))
        - com.jbase.jdbc.protocol.[TransactionCommitRequest](./../transactioncommitrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol")
        - com.jbase.jdbc.protocol.[TransactionRollbackRequest](./../transactionrollbackrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol")
        - com.jbase.jdbc.protocol.[TransactionStartRequest](./../transactionstartrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol")

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- Class
- Use
- Tree
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev](./../../io/inflow/com.jbase.jdbc.io.inflow-class-hierarchy-%28jbasejdbc---api%29)
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
