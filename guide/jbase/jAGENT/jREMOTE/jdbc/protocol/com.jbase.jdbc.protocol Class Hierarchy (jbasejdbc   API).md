# com.jbase.jdbc.protocol Class Hierarchy (jbasejdbc   API)

**Created At:** 9/25/2017 11:02:52 AM  
**Updated At:** 2/15/2018 8:02:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="com.jbase.jdbc.protocol Class Hierarchy (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- Use
- Tree
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev](/39238-inflow/com_jbase_jdbc_io_inflow_package-tree)
- Next


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_package-tree)


- [All Classes](../../../../allclasses-noframe.html)


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
# Hierarchy For Package com.jbase.jdbc.protocol
Package Hierarchies:
- [All Packages](../../../../overview-tree.html)

## Class Hierarchy

- java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
    - com.jbase.jdbc.protocol.[AccountAuthenticationRequest](/39240-protocol/com_jbase_jdbc_protocol_accountauthenticationrequest "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[AccountAuthenticationRequest.AccountUserCredentials](/39240-protocol/com_jbase_jdbc_protocol_AccountAuthenticationRequest.AccountUserCredentials "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[AuthenticationRequest](/39240-protocol/com_jbase_jdbc_protocol_authenticationrequest "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[AuthenticationRequest.UserCredentials](/39240-protocol/com_jbase_jdbc_protocol_AuthenticationRequest.UserCredentials "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[LoggingRequest](/39240-protocol/com_jbase_jdbc_protocol_loggingrequest "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[ParameterList](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.[JBaseJDBCGlobals](/39228-jdbc/com_jbase_jdbc_JBaseJDBCGlobals "interface in com.jbase.jdbc"), com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[PColumnMetaData](/39240-protocol/com_jbase_jdbc_protocol_PColumnMetaData "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[PResultSet](/39240-protocol/com_jbase_jdbc_protocol_PResultSet "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[PResultSetMetaData](/39240-protocol/com_jbase_jdbc_protocol_PResultSetMetaData "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[RemoteInputRequest](/39240-protocol/com_jbase_jdbc_protocol_RemoteInputRequest "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.io.[Response](/39232-io/com_jbase_jdbc_io_response "class in com.jbase.jdbc.io") (implements com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))
        - com.jbase.jdbc.protocol.[InputOutputResponse](/39240-protocol/com_jbase_jdbc_protocol_InputOutputResponse "class in com.jbase.jdbc.protocol")
        - com.jbase.jdbc.protocol.[SQLResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLResponse "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SetPropertiesResponse](/39240-protocol/com_jbase_jdbc_protocol_SetPropertiesResponse "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SQLErrorResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLErrorResponse "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SQLOKResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLOKResponse "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SQLParamsResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLParamsResponse "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SQLResultResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLResultResponse "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SQLRSMDResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLRSMDResponse "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SQLUpdateResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLUpdateResponse "class in com.jbase.jdbc.protocol")
    - com.jbase.jdbc.protocol.[Row](/39240-protocol/com_jbase_jdbc_protocol_Row "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))
    - com.jbase.jdbc.protocol.[SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))
        - com.jbase.jdbc.protocol.[CompileRequest](/39240-protocol/com_jbase_jdbc_protocol_CompileRequest "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[CompileAndExecuteRequest](/39240-protocol/com_jbase_jdbc_protocol_CompileAndExecuteRequest "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[PrecompileRequest](/39240-protocol/com_jbase_jdbc_protocol_PrecompileRequest "class in com.jbase.jdbc.protocol")
        - com.jbase.jdbc.protocol.[DatabaseMetaDataRequest](/39240-protocol/com_jbase_jdbc_protocol_DatabaseMetaDataRequest "class in com.jbase.jdbc.protocol")
        - com.jbase.jdbc.protocol.[LoadSubroutineRequest](/39240-protocol/com_jbase_jdbc_protocol_LoadSubroutineRequest "class in com.jbase.jdbc.protocol")
        - com.jbase.jdbc.protocol.[SQLRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLRequest "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[BindRequest](/39240-protocol/com_jbase_jdbc_protocol_BindRequest "class in com.jbase.jdbc.protocol")
                - com.jbase.jdbc.protocol.[CallSubroutineRequest](/39240-protocol/com_jbase_jdbc_protocol_CallSubroutineRequest "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[ExecuteRequest](/39240-protocol/com_jbase_jdbc_protocol_ExecuteRequest "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[FetchRequest](/39240-protocol/com_jbase_jdbc_protocol_FetchRequest "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[MetaDataRequest](/39240-protocol/com_jbase_jdbc_protocol_metadatarequest "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[ReleaseRequest](/39240-protocol/com_jbase_jdbc_protocol_ReleaseRequest "class in com.jbase.jdbc.protocol")
            - com.jbase.jdbc.protocol.[SetPropertiesRequest](/39240-protocol/com_jbase_jdbc_protocol_SetPropertiesRequest "class in com.jbase.jdbc.protocol")
    - com.jbase.jdbc.protocol.[StatementID](/39240-protocol/com_jbase_jdbc_protocol_statementid "class in com.jbase.jdbc.protocol")
    - com.jbase.jdbc.protocol.[TransactionRequest](/39240-protocol/com_jbase_jdbc_protocol_transactionrequest "class in com.jbase.jdbc.protocol") (implements com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io"))
        - com.jbase.jdbc.protocol.[TransactionCommitRequest](/39240-protocol/com_jbase_jdbc_protocol_transactioncommitrequest "class in com.jbase.jdbc.protocol")
        - com.jbase.jdbc.protocol.[TransactionRollbackRequest](/39240-protocol/com_jbase_jdbc_protocol_transactionrollbackrequest "class in com.jbase.jdbc.protocol")
        - com.jbase.jdbc.protocol.[TransactionStartRequest](/39240-protocol/com_jbase_jdbc_protocol_transactionstartrequest "class in com.jbase.jdbc.protocol")
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- Use
- Tree
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev](/39238-inflow/com_jbase_jdbc_io_inflow_package-tree)
- Next


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_package-tree)


- [All Classes](../../../../allclasses-noframe.html)


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
