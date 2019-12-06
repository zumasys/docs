# JBaseSerializable (jbasejdbc API)

**Created At:** 9/25/2017 10:53:00 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JBaseSerializable (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":6,"i1":6,"i2":6,"i3":6};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript>&amp;amp;amp;lt;div&amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;lt;/div&amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

# Interface JBaseSerializable

<dl><dt>All Known Implementing Classes:</dt><dd><a href="/39240-protocol/com_jbase_jdbc_protocol_accountauthenticationrequest" title="class in com.jbase.jdbc.protocol">AccountAuthenticationRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_AccountAuthenticationRequest.AccountUserCredentials" title="class in com.jbase.jdbc.protocol">AccountAuthenticationRequest.AccountUserCredentials</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_authenticationrequest" title="class in com.jbase.jdbc.protocol">AuthenticationRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_AuthenticationRequest.UserCredentials" title="class in com.jbase.jdbc.protocol">AuthenticationRequest.UserCredentials</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_BindRequest" title="class in com.jbase.jdbc.protocol">BindRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_CallSubroutineRequest" title="class in com.jbase.jdbc.protocol">CallSubroutineRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_CompileAndExecuteRequest" title="class in com.jbase.jdbc.protocol">CompileAndExecuteRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_CompileRequest" title="class in com.jbase.jdbc.protocol">CompileRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_DatabaseMetaDataRequest" title="class in com.jbase.jdbc.protocol">DatabaseMetaDataRequest</a>, <a href="/39232-io/com_jbase_jdbc_io_ErrorResponse" title="class in com.jbase.jdbc.io">ErrorResponse</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_ExecuteRequest" title="class in com.jbase.jdbc.protocol">ExecuteRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_FetchRequest" title="class in com.jbase.jdbc.protocol">FetchRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_InputOutputResponse" title="class in com.jbase.jdbc.protocol">InputOutputResponse</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_LoadSubroutineRequest" title="class in com.jbase.jdbc.protocol">LoadSubroutineRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_loggingrequest" title="class in com.jbase.jdbc.protocol">LoggingRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_metadatarequest" title="class in com.jbase.jdbc.protocol">MetaDataRequest</a>, <a href="/39232-io/com_jbase_jdbc_io_OKResponse" title="class in com.jbase.jdbc.io">OKResponse</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_ParameterList" title="class in com.jbase.jdbc.protocol">ParameterList</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_PColumnMetaData" title="class in com.jbase.jdbc.protocol">PColumnMetaData</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_PrecompileRequest" title="class in com.jbase.jdbc.protocol">PrecompileRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_PResultSet" title="class in com.jbase.jdbc.protocol">PResultSet</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_PResultSetMetaData" title="class in com.jbase.jdbc.protocol">PResultSetMetaData</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_ReleaseRequest" title="class in com.jbase.jdbc.protocol">ReleaseRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_RemoteInputRequest" title="class in com.jbase.jdbc.protocol">RemoteInputRequest</a>, <a href="/39232-io/com_jbase_jdbc_io_response" title="class in com.jbase.jdbc.io">Response</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_Row" title="class in com.jbase.jdbc.protocol">Row</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_SetPropertiesRequest" title="class in com.jbase.jdbc.protocol">SetPropertiesRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_SetPropertiesResponse" title="class in com.jbase.jdbc.protocol">SetPropertiesResponse</a>, <a href="/39232-io/com_jbase_jdbc_io_sqlerror" title="class in com.jbase.jdbc.io">SQLError</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_SQLErrorResponse" title="class in com.jbase.jdbc.protocol">SQLErrorResponse</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_SQLOKResponse" title="class in com.jbase.jdbc.protocol">SQLOKResponse</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_SQLParamsResponse" title="class in com.jbase.jdbc.protocol">SQLParamsResponse</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_SQLRequest" title="class in com.jbase.jdbc.protocol">SQLRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_SQLResponse" title="class in com.jbase.jdbc.protocol">SQLResponse</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_SQLResultResponse" title="class in com.jbase.jdbc.protocol">SQLResultResponse</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_SQLRSMDResponse" title="class in com.jbase.jdbc.protocol">SQLRSMDResponse</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest" title="class in com.jbase.jdbc.protocol">SQLStartRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_SQLUpdateResponse" title="class in com.jbase.jdbc.protocol">SQLUpdateResponse</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_transactioncommitrequest" title="class in com.jbase.jdbc.protocol">TransactionCommitRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_transactionrequest" title="class in com.jbase.jdbc.protocol">TransactionRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_transactionrollbackrequest" title="class in com.jbase.jdbc.protocol">TransactionRollbackRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_transactionstartrequest" title="class in com.jbase.jdbc.protocol">TransactionStartRequest</a></dd></dl>

```
public interface JBaseSerializable
```

Interface which must be implemented by objects which take part in the JDBC driver jbase\_agent communication. Note: the interface is not compatible with standard Java java.io.Serializable. This is because we do not intend to implement Java serialization protocol for our purposes (note: this is about Java C++ communication). Each class implementing this interface should have a counterpart on the server side with compatible serializing/deserializing protocol.
<dl><dt><br></dt></dl>

<!-- ======== NESTED CLASS SUMMARY ======== -->



# <!--   -->

# Nested Class Summary


| <br>Modifier and Type<br> | <br>Interface and Description<br> |
| --- | --- |
| <br>static interface<br> | <br>[JBaseSerializable.TYPE](/39232-io/com_jbase_jdbc_io_JBaseSerializable.TYPE "interface in com.jbase.jdbc.io")<br> |





<!-- ========== METHOD SUMMARY =========== -->


# <!--   -->

# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>`int`<br> | <br>`getType()`<br> |
| <br>`int`<br> | <br>`getVersion()`<br> |
| <br>`void`<br> | <br>`readObject(JBaseObjectReader reader, int version)`<br> |
| <br>`void`<br> | <br>`writeObject(JBaseObjectWriter writer, int version)`<br> |

<!-- ============ METHOD DETAIL ========== -->



# <!--   -->

# Method Detail
<!--   -->


#### **writeObject**

```
void writeObject(JBaseObjectWriter writer, int version)
          throws IOException
```
<dl><dt style="margin-left: 40px;"><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>



<!--   -->


#### **readObject**

```
void readObject(JBaseObjectReader reader, int version)
         throws IOException, ClassNotFoundException
```
<dl><dt style="margin-left: 40px;"><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

<!--   -->


#### **getType**

```
int getType()
```
<dl><dt style="margin-left: 40px;"><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">type id of the objects, used during the serialization</dd></dl>

<!--   -->


#### **getVersion**

```
int getVersion()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
