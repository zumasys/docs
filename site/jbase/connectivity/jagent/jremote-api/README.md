# jRemote API

<PageHeader />

## Package com.jbase.jremote

## Interface Summary

| Interface | Description |
| --- | --- |
| [JConnection](./../jremote&jrcs/jremote-java-api/jconnection-(jremote-api)/README.md "interface in com.jbase.jremote")<br> | <br>The connection to a remote jBASE instance.<br> |
| [JConnectionCallbackHandler](./../jremote&jrcs/jremote-java-api/jconnectioncallbackhandler-(jremote-api) "interface in com.jbase.jremote")<br> |  <br> |
| [JConnectionFactory](./../jremote&jrcs/jremote-java-api/jconnectionfactory-(jremote-api) "interface in com.jbase.jremote")<br> | <br>The connection factory for connections to remote a jBASE instance.<br> |
| [JCursor](./../jremote&jrcs/jremote-java-api/jcursor-(jremote-api) "interface in com.jbase.jremote")<br> | <br>A cursor to a jBASE file.<br> |
| [JFile](./../jremote&jrcs/jremote-java-api/jfile-(jremote-api) "interface in com.jbase.jremote")<br> | <br>The JFile object is used to query, read, and write to jBASE files.<br> |
| [JResultSet](./../jremote&jrcs/jremote-java-api/jresultset-(jremote-api) "interface in com.jbase.jremote")<br> | <br>Allows iteration of a result set fetched in blocks.<br> |
| [JSelectList](./../jremote&jrcs/jremote-java-api/jselectlist-(jremote-api) "interface in com.jbase.jremote")<br> | <br>A select list to a jBASE file.<br> |
| [JStatement](./../jremote&jrcs/jremote-java-api/jstatement-(jremote-api) "interface in com.jbase.jremote")<br> | <br>A jBASE statement object for executing queries.<br> |
| [JXAConnection](./../jremote&jrcs/jremote-java-api/jxaconnection-(jremote-api) "interface in com.jbase.jremote")<br> |  <br> |

## Class Summary

| Class<br> | Description<br> |
| --- | --- |
| [DefaultJConnectionFactory](./../jremote&jrcs/jremote-java-api/defaultjconnectionfactory-(jremote-api) "class in com.jbase.jremote")<br> | <br>The default implementation of a JConnectionFactory that will connect to a remote jBASE instance using a host and a port.<br> |
| [EISMetaDataRepository](./../jremote&jrcs/jremote-java-api/eismetadatarepository-(jremote-api) "class in com.jbase.jremote")<br> | <br>Wrapper class for EISMetaDataResponse object representing a meta data repository containing information of the underlying EIS instance.<br> |
| [JDynArray](./../jremote&jrcs/jremote-java-api/jdynarray-(jremote-api) "class in com.jbase.jremote")<br> | <br>The JDynArray is a jBASE type that implements a dynamic string array where attribute, value, and subvalue delimiters mark the array indices.<br> |
| [JExecuteResults](./../jremote&jrcs/jremote-java-api/jexecuteresults-(jremote-api) "class in com.jbase.jremote")<br> | <br>The results from an executed command.<br> |
| [JSubroutineParameters](./../jremote&jrcs/jremote-java-api/jsubroutineparameters-(jremote-api) "class in com.jbase.jremote")<br> | <br>A list of parameters to pass to a jBASE subroutine.<br> |

## Exception Summary

| Exception<br> | Description<br> |
| --- | --- |
| [JAuthenticationException](./../jremote&jrcs/jremote-java-api/jauthenticationexception-(jremote-api) "class in com.jbase.jremote")<br> | <br>A exception thrown when authentication fails.<br> |
| [JRecordLockedException](./../jremote&jrcs/jremote-java-api/jrecordlockedexception-(jremote-api) "class in com.jbase.jremote")<br> | <br>A generic jBASE record locked exception.<br> |
| [JRecordNotFoundException](./../jremote&jrcs/jremote-java-api/jrecordnotfoundexception-(jremote-api) "class in com.jbase.jremote")<br> | <br>A generic jBASE record not found exception.<br> |
| [JRemoteException](./../jremote&jrcs/jremote-java-api/jremoteexception-(jremote-api) "class in com.jbase.jremote")<br> | <br>A generic exception thrown when an unexpected error occurs whilst communicating with the remote jBASE instance.<br> |
| [JSubroutineNotFoundException](./../jremote&jrcs/jremote-java-api/jsubroutinenotfoundexception-(jremote-api) "class in com.jbase.jremote")<br> | <br>This exception is thrown when a call is made to a non existent subroutine.<br> |

<PageFooter />
