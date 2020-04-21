# jREMOTE API

<PageHeader />

## Package com.jbase.jremote

## Interface Summary

| Interface | Description |
| --- | --- |
| [JConnection](./../jremote&jrcs/jrcs-java-api/jconnection-(jrclient-api)/README.md "interface in com.jbase.jremote")<br> | <br>The connection to a remote jBASE instance.<br> |
| [JConnectionCallbackHandler](./../jremote/jremote/jconnectioncallbackhandler-%28jremote-api%29 "interface in com.jbase.jremote")<br> |  <br> |
| [JConnectionFactory](./../jremote/jremote/jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote")<br> | <br>The connection factory for connections to remote a jBASE instance.<br> |
| [JCursor](./../jremote/jremote/jcursor-%28jremote-api%29 "interface in com.jbase.jremote")<br> | <br>A cursor to a jBASE file.<br> |
| [JFile](./../jremote/jremote/jfile-%28jremote-api%29 "interface in com.jbase.jremote")<br> | <br>The JFile object is used to query, read, and write to jBASE files.<br> |
| [JResultSet](./../jremote/jremote/jresultset-%28jremote-api%29 "interface in com.jbase.jremote")<br> | <br>Allows iteration of a result set fetched in blocks.<br> |
| [JSelectList](./../jremote/jremote/jselectlist-%28jremote-api%29 "interface in com.jbase.jremote")<br> | <br>A select list to a jBASE file.<br> |
| [JStatement](./../jremote/jremote/jstatement-%28jremote-api%29 "interface in com.jbase.jremote")<br> | <br>A jBASE statement object for executing queries.<br> |
| [JXAConnection](./../jremote/jremote/jxaconnection-%28jremote-api%29 "interface in com.jbase.jremote")<br> |  <br> |

## Class Summary

| Class<br> | Description<br> |
| --- | --- |
| [DefaultJConnectionFactory](./../jremote/jremote/defaultjconnectionfactory-%28jremote-api%29 "class in com.jbase.jremote")<br> | <br>The default implementation of a JConnectionFactory that will connect to a remote jBASE instance using a host and a port.<br> |
| [EISMetaDataRepository](./../jremote/jremote/eismetadatarepository-%28jremote-api%29 "class in com.jbase.jremote")<br> | <br>Wrapper class for EISMetaDataResponse object representing a meta data repository containing information of the underlying EIS instance.<br> |
| [JDynArray](./../jremote/jremote/jdynarray-%28jremote-api%29 "class in com.jbase.jremote")<br> | <br>The JDynArray is a jBASE type that implements a dynamic string array where attribute, value, and subvalue delimiters mark the array indices.<br> |
| [JExecuteResults](./../jremote/jremote/jexecuteresults-%28jremote-api%29 "class in com.jbase.jremote")<br> | <br>The results from an executed command.<br> |
| [JSubroutineParameters](./../jremote/jremote/jsubroutineparameters-%28jremote-api%29 "class in com.jbase.jremote")<br> | <br>A list of parameters to pass to a jBASE subroutine.<br> |

## Exception Summary

| Exception<br> | Description<br> |
| --- | --- |
| [JAuthenticationException](./../jremote/jremote/jauthenticationexception-%28jremote-api%29 "class in com.jbase.jremote")<br> | <br>A exception thrown when authentication fails.<br> |
| [JRecordLockedException](./../jremote/jremote/jrecordlockedexception-%28jremote-api%29 "class in com.jbase.jremote")<br> | <br>A generic jBASE record locked exception.<br> |
| [JRecordNotFoundException](./../jremote/jremote/jrecordnotfoundexception-%28jremote-api%29 "class in com.jbase.jremote")<br> | <br>A generic jBASE record not found exception.<br> |
| [JRemoteException](./../jremote/jremote/jremoteexception-%28jremote-api%29 "class in com.jbase.jremote")<br> | <br>A generic exception thrown when an unexpected error occurs whilst communicating with the remote jBASE instance.<br> |
| [JSubroutineNotFoundException](./../jremote/jremote/jsubroutinenotfoundexception-%28jremote-api%29 "class in com.jbase.jremote")<br> | <br>This exception is thrown when a call is made to a non existent subroutine.<br> |

<PageFooter />
