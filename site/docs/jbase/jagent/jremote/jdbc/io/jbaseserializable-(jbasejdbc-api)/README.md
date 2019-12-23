# JBaseSerializable (jbasejdbc API)

**Created At:** 9/25/2017 10:53:00 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_io_jbaseserializable](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_jbaseserializable)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JBaseSerializable (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6,"i3":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&amp;amp;lt;div&amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;lt;/div&amp;amp;gt;


# Interface JBaseSerializable

All Known Implementing Classes:[AccountAuthenticationRequest](./../../protocol/accountauthenticationrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol"), [AccountAuthenticationRequest.AccountUserCredentials](/39240-protocol/com_jbase_jdbc_protocol_AccountAuthenticationRequest.AccountUserCredentials "class in com.jbase.jdbc.protocol"), [AuthenticationRequest](./../../protocol/authenticationrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol"), [AuthenticationRequest.UserCredentials](/39240-protocol/com_jbase_jdbc_protocol_AuthenticationRequest.UserCredentials "class in com.jbase.jdbc.protocol"), [BindRequest](./../../protocol/bindrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [CallSubroutineRequest](./../../protocol/callsubroutinerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [CompileAndExecuteRequest](./../../protocol/compileandexecuterequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [CompileRequest](./../../protocol/compilerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [DatabaseMetaDataRequest](./../../protocol/databasemetadatarequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [ErrorResponse](./../errorresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io"), [ExecuteRequest](./../../protocol/executerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [FetchRequest](./../../protocol/fetchrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [InputOutputResponse](./../../protocol/inputoutputresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [LoadSubroutineRequest](./../../protocol/loadsubroutinerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [LoggingRequest](./../../protocol/loggingrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol"), [MetaDataRequest](./../../protocol/metadatarequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol"), [OKResponse](./../okresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io"), [ParameterList](./../../protocol/parameterlist-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [PColumnMetaData](./../../protocol/pcolumnmetadata-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [PrecompileRequest](./../../protocol/precompilerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [PResultSet](./../../protocol/presultset-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [PResultSetMetaData](./../../protocol/presultsetmetadata-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [ReleaseRequest](./../../protocol/releaserequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [RemoteInputRequest](./../../protocol/remoteinputrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [Response](./../response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io"), [Row](./../../protocol/row-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SetPropertiesRequest](./../../protocol/setpropertiesrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SetPropertiesResponse](./../../protocol/setpropertiesresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SQLError](./../sqlerror-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io"), [SQLErrorResponse](./../../protocol/sqlerrorresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SQLOKResponse](./../../protocol/sqlokresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SQLParamsResponse](./../../protocol/sqlparamsresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SQLRequest](./../../protocol/sqlrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SQLResponse](./../../protocol/sqlresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SQLResultResponse](./../../protocol/sqlresultresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SQLRSMDResponse](./../../protocol/sqlrsmdresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SQLStartRequest](./../../protocol/sqlstartrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SQLUpdateResponse](./../../protocol/sqlupdateresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [TransactionCommitRequest](./../../protocol/transactioncommitrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol"), [TransactionRequest](./../../protocol/transactionrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol"), [TransactionRollbackRequest](./../../protocol/transactionrollbackrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol"), [TransactionStartRequest](./../../protocol/transactionstartrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol")

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


