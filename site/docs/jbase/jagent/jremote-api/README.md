# jREMOTE API

**Created At:** 9/25/2017 12:10:30 PM  
**Updated At:** 8/31/2018 5:48:46 PM  
**Original Doc:** [jremote-api](https://docs.jbase.com/30312-jagent/jremote-api)  

&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;




# Package com.jbase.jremote

## Interface Summary

| Interface<br> | Description<br> |
| --- | --- |
| [JConnection](/39248-jremote/com_jbase_jremote_JConnection "interface in com.jbase.jremote")<br> | <br>The connection to a remote jBASE instance.<br> |
| [JConnectionCallbackHandler](/39248-jremote/com_jbase_jremote_JConnectionCallbackHandler "interface in com.jbase.jremote")<br> |  <br> |
| [JConnectionFactory](/39248-jremote/com_jbase_jremote_JConnectionFactory "interface in com.jbase.jremote")<br> | <br>The connection factory for connections to remote a jBASE instance.<br> |
| [JCursor](/39248-jremote/com_jbase_jremote_JCursor "interface in com.jbase.jremote")<br> | <br>A cursor to a jBASE file.<br> |
| [JFile](/39248-jremote/com_jbase_jremote_JFile "interface in com.jbase.jremote")<br> | <br>The JFile object is used to query, read, and write to jBASE files.<br> |
| [JResultSet](/39248-jremote/com_jbase_jremote_JResultSet "interface in com.jbase.jremote")<br> | <br>Allows iteration of a result set fetched in blocks.<br> |
| [JSelectList](/39248-jremote/com_jbase_jremote_JSelectList "interface in com.jbase.jremote")<br> | <br>A select list to a jBASE file.<br> |
| [JStatement](/39248-jremote/com_jbase_jremote_JStatement "interface in com.jbase.jremote")<br> | <br>A jBASE statement object for executing queries.<br> |
| [JXAConnection](/39248-jremote/com_jbase_jremote_JXAConnection "interface in com.jbase.jremote")<br> |  <br> |



## Class Summary 

| Class<br> | Description<br> |
| --- | --- |
| [DefaultJConnectionFactory](./../jremote/jremote/defaultjconnectionfactory-%28jremote-api%29 "class in com.jbase.jremote")<br> | <br>The default implementation of a JConnectionFactory that will connect to a remote jBASE instance using a host and a port.<br> |
| [EISMetaDataRepository](/39248-jremote/com_jbase_jremote_EISMetaDataRepository "class in com.jbase.jremote")<br> | <br>Wrapper class for EISMetaDataResponse object representing a meta data repository containing information of the underlying EIS instance.<br> |
| [JDynArray](/39248-jremote/com_jbase_jremote_JDynArray "class in com.jbase.jremote")<br> | <br>The JDynArray is a jBASE type that implements a dynamic string array where attribute, value, and subvalue delimiters mark the array indices.<br> |
| [JExecuteResults](/39248-jremote/com_jbase_jremote_JExecuteResults "class in com.jbase.jremote")<br> | <br>The results from an executed command.<br> |
| [JSubroutineParameters](/39248-jremote/com_jbase_jremote_JSubroutineParameters "class in com.jbase.jremote")<br> | <br>A list of parameters to pass to a jBASE subroutine.<br> |



## Exception Summary 

| Exception<br> | Description<br> |
| --- | --- |
| [JAuthenticationException](/39248-jremote/com_jbase_jremote_JAuthenticationException "class in com.jbase.jremote")<br> | <br>A exception thrown when authentication fails.<br> |
| [JRecordLockedException](/39248-jremote/com_jbase_jremote_JRecordLockedException "class in com.jbase.jremote")<br> | <br>A generic jBASE record locked exception.<br> |
| [JRecordNotFoundException](/39248-jremote/com_jbase_jremote_JRecordNotFoundException "class in com.jbase.jremote")<br> | <br>A generic jBASE record not found exception.<br> |
| [JRemoteException](/39248-jremote/com_jbase_jremote_JRemoteException "class in com.jbase.jremote")<br> | <br>A generic exception thrown when an unexpected error occurs whilst communicating with the remote jBASE instance.<br> |
| [JSubroutineNotFoundException](/39248-jremote/com_jbase_jremote_JSubroutineNotFoundException "class in com.jbase.jremote")<br> | <br>This exception is thrown when a call is made to a non existent subroutine.<br> |




