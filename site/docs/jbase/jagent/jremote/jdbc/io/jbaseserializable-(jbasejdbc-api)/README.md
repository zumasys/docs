# JBaseSerializable (jbasejdbc API)

**Created At:** 9/25/2017 10:53:00 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_io_jbaseserializable](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_jbaseserializable)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JBaseSerializable (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6,"i3":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&amp;amp;lt;div&amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;lt;/div&amp;amp;gt;


# Interface JBaseSerializable

All Known Implementing Classes:[AccountAuthenticationRequest](/39240-protocol/com_jbase_jdbc_protocol_accountauthenticationrequest "class in com.jbase.jdbc.protocol"), [AccountAuthenticationRequest.AccountUserCredentials](/39240-protocol/com_jbase_jdbc_protocol_AccountAuthenticationRequest.AccountUserCredentials "class in com.jbase.jdbc.protocol"), [AuthenticationRequest](/39240-protocol/com_jbase_jdbc_protocol_authenticationrequest "class in com.jbase.jdbc.protocol"), [AuthenticationRequest.UserCredentials](/39240-protocol/com_jbase_jdbc_protocol_AuthenticationRequest.UserCredentials "class in com.jbase.jdbc.protocol"), [BindRequest](/39240-protocol/com_jbase_jdbc_protocol_BindRequest "class in com.jbase.jdbc.protocol"), [CallSubroutineRequest](/39240-protocol/com_jbase_jdbc_protocol_CallSubroutineRequest "class in com.jbase.jdbc.protocol"), [CompileAndExecuteRequest](/39240-protocol/com_jbase_jdbc_protocol_CompileAndExecuteRequest "class in com.jbase.jdbc.protocol"), [CompileRequest](/39240-protocol/com_jbase_jdbc_protocol_CompileRequest "class in com.jbase.jdbc.protocol"), [DatabaseMetaDataRequest](/39240-protocol/com_jbase_jdbc_protocol_DatabaseMetaDataRequest "class in com.jbase.jdbc.protocol"), [ErrorResponse](/39232-io/com_jbase_jdbc_io_ErrorResponse "class in com.jbase.jdbc.io"), [ExecuteRequest](/39240-protocol/com_jbase_jdbc_protocol_ExecuteRequest "class in com.jbase.jdbc.protocol"), [FetchRequest](/39240-protocol/com_jbase_jdbc_protocol_FetchRequest "class in com.jbase.jdbc.protocol"), [InputOutputResponse](/39240-protocol/com_jbase_jdbc_protocol_InputOutputResponse "class in com.jbase.jdbc.protocol"), [LoadSubroutineRequest](/39240-protocol/com_jbase_jdbc_protocol_LoadSubroutineRequest "class in com.jbase.jdbc.protocol"), [LoggingRequest](/39240-protocol/com_jbase_jdbc_protocol_loggingrequest "class in com.jbase.jdbc.protocol"), [MetaDataRequest](/39240-protocol/com_jbase_jdbc_protocol_metadatarequest "class in com.jbase.jdbc.protocol"), [OKResponse](/39232-io/com_jbase_jdbc_io_OKResponse "class in com.jbase.jdbc.io"), [ParameterList](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol"), [PColumnMetaData](/39240-protocol/com_jbase_jdbc_protocol_PColumnMetaData "class in com.jbase.jdbc.protocol"), [PrecompileRequest](/39240-protocol/com_jbase_jdbc_protocol_PrecompileRequest "class in com.jbase.jdbc.protocol"), [PResultSet](/39240-protocol/com_jbase_jdbc_protocol_PResultSet "class in com.jbase.jdbc.protocol"), [PResultSetMetaData](/39240-protocol/com_jbase_jdbc_protocol_PResultSetMetaData "class in com.jbase.jdbc.protocol"), [ReleaseRequest](/39240-protocol/com_jbase_jdbc_protocol_ReleaseRequest "class in com.jbase.jdbc.protocol"), [RemoteInputRequest](/39240-protocol/com_jbase_jdbc_protocol_RemoteInputRequest "class in com.jbase.jdbc.protocol"), [Response](/39232-io/com_jbase_jdbc_io_response "class in com.jbase.jdbc.io"), [Row](/39240-protocol/com_jbase_jdbc_protocol_Row "class in com.jbase.jdbc.protocol"), [SetPropertiesRequest](/39240-protocol/com_jbase_jdbc_protocol_SetPropertiesRequest "class in com.jbase.jdbc.protocol"), [SetPropertiesResponse](/39240-protocol/com_jbase_jdbc_protocol_SetPropertiesResponse "class in com.jbase.jdbc.protocol"), [SQLError](/39232-io/com_jbase_jdbc_io_sqlerror "class in com.jbase.jdbc.io"), [SQLErrorResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLErrorResponse "class in com.jbase.jdbc.protocol"), [SQLOKResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLOKResponse "class in com.jbase.jdbc.protocol"), [SQLParamsResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLParamsResponse "class in com.jbase.jdbc.protocol"), [SQLRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLRequest "class in com.jbase.jdbc.protocol"), [SQLResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLResponse "class in com.jbase.jdbc.protocol"), [SQLResultResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLResultResponse "class in com.jbase.jdbc.protocol"), [SQLRSMDResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLRSMDResponse "class in com.jbase.jdbc.protocol"), [SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol"), [SQLUpdateResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLUpdateResponse "class in com.jbase.jdbc.protocol"), [TransactionCommitRequest](/39240-protocol/com_jbase_jdbc_protocol_transactioncommitrequest "class in com.jbase.jdbc.protocol"), [TransactionRequest](/39240-protocol/com_jbase_jdbc_protocol_transactionrequest "class in com.jbase.jdbc.protocol"), [TransactionRollbackRequest](/39240-protocol/com_jbase_jdbc_protocol_transactionrollbackrequest "class in com.jbase.jdbc.protocol"), [TransactionStartRequest](/39240-protocol/com_jbase_jdbc_protocol_transactionstartrequest "class in com.jbase.jdbc.protocol")

```
public interface JBaseSerializable
```

Interface which must be implemented by objects which take part in the JDBC driver jbase\_agent communication. Note: the interface is not compatible with standard Java java.io.Serializable. This is because we do not intend to implement Java serialization protocol for our purposes (note: this is about Java C++ communication). Each class implementing this interface should have a counterpart on the server side with compatible serializing/deserializing protocol.

# 

# Nested Class Summary


| <br>Modifier and Type<br> | <br>Interface and Description<br> |
| --- | --- |
| <br>static interface<br> | <br>[JBaseSerializable.TYPE](/39232-io/com_jbase_jdbc_io_JBaseSerializable.TYPE "interface in com.jbase.jdbc.io")<br> |








# 

# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>`int`<br> | <br>`getType()`<br> |
| <br>`int`<br> | <br>`getVersion()`<br> |
| <br>`void`<br> | <br>`readObject(JBaseObjectReader reader, int version)`<br> |
| <br>`void`<br> | <br>`writeObject(JBaseObjectWriter writer, int version)`<br> |

# 

# Method Detail



#### **writeObject**

```
void writeObject(JBaseObjectWriter writer, int version)
          throws IOException
```
**Throws:**`IOException`






#### **readObject**

```
void readObject(JBaseObjectReader reader, int version)
         throws IOException, ClassNotFoundException
```
**Throws:**`IOException``ClassNotFoundException`




#### **getType**

```
int getType()
```
**Returns:**type id of the objects, used during the serialization




#### **getVersion**

```
int getVersion()
```


