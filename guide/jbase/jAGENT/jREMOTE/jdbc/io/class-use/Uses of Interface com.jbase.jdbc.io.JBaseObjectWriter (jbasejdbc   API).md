# Uses of Interface com.jbase.jdbc.io.JBaseObjectWriter (jbasejdbc   API)

**Created At:** 9/25/2017 10:46:56 AM  
**Updated At:** 2/15/2018 8:02:49 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jdbc.io.JBaseObjectWriter (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- [Class](/39232-io/com_jbase_jdbc_io_jbaseobjectwriter "interface in com.jbase.jdbc.io")
- Use
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/io/class-use//39235-class-use/com_jbase_jdbc_io_class-use_JBaseObjectWriter)
- [No Frames](/39235-class-use/com_jbase_jdbc_io_class-use_JBaseObjectWriter)


- [All Classes](../../../../../allclasses-noframe.html)


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
## Uses of Interface
com.jbase.jdbc.io.JBaseObjectWriter

- <caption><span>Packages that use <a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter" title="interface in com.jbase.jdbc.io">JBaseObjectWriter</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jdbc.io |   |
| com.jbase.jdbc.protocol |   |
- - <!--   -->
### Uses of [JBaseObjectWriter](/39232-io/com_jbase_jdbc_io_jbaseobjectwriter "interface in com.jbase.jdbc.io") in [com.jbase.jdbc.io](/39232-io/com_jbase_jdbc_io_package-summary)


<caption><span>Classes in <a href="/39232-io/com_jbase_jdbc_io_package-summary">com.jbase.jdbc.io</a> that implement <a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter" title="interface in com.jbase.jdbc.io">JBaseObjectWriter</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `AbstractJBaseObjectWriter`  |
| `class` | `IOJBaseObjectWriter`<br>jBase object writer based on the DataOutputStream.<br> |
| `class` | `NIOJBaseObjectWriter`<br>jBase object writer using the new Java IO.<br> |



<caption><span>Methods in <a href="/39232-io/com_jbase_jdbc_io_package-summary">com.jbase.jdbc.io</a> with parameters of type <a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter" title="interface in com.jbase.jdbc.io">JBaseObjectWriter</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | SQLError.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | OKResponse.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | JBaseSerializable.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | ErrorResponse.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
    - <!--   -->
### Uses of [JBaseObjectWriter](/39232-io/com_jbase_jdbc_io_jbaseobjectwriter "interface in com.jbase.jdbc.io") in [com.jbase.jdbc.protocol](/39240-protocol/com_jbase_jdbc_protocol_package-summary)


<caption><span>Methods in <a href="/39240-protocol/com_jbase_jdbc_protocol_package-summary">com.jbase.jdbc.protocol</a> with parameters of type <a href="/39232-io/com_jbase_jdbc_io_jbaseobjectwriter" title="interface in com.jbase.jdbc.io">JBaseObjectWriter</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | TransactionStartRequest.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | TransactionRequest.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | SQLUpdateResponse.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | SQLRSMDResponse.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | SQLResultResponse.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | SQLRequest.`writeObject(JBaseObjectWriter writer,<br>           int version)`<br>As a bare minimum each JDBC request contains statement ID.<br> |
| `void` | SQLParamsResponse.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | SQLOKResponse.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | SQLErrorResponse.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | SetPropertiesResponse.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | SetPropertiesRequest.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | Row.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | RemoteInputRequest.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | PResultSetMetaData.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | PResultSet.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | PColumnMetaData.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | ParameterList.`writeObject(JBaseObjectWriter writer,<br>           int version)`<br>Implementation of JBaseSerializable.<br> |
| `void` | LoggingRequest.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | LoadSubroutineRequest.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | InputOutputResponse.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | FetchRequest.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | DatabaseMetaDataRequest.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | CompileRequest.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | BindRequest.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | AuthenticationRequest.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | AuthenticationRequest.UserCredentials.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | AccountAuthenticationRequest.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | AccountAuthenticationRequest.AccountUserCredentials.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- [Class](/39232-io/com_jbase_jdbc_io_jbaseobjectwriter "interface in com.jbase.jdbc.io")
- Use
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/io/class-use//39235-class-use/com_jbase_jdbc_io_class-use_JBaseObjectWriter)
- [No Frames](/39235-class-use/com_jbase_jdbc_io_class-use_JBaseObjectWriter)


- [All Classes](../../../../../allclasses-noframe.html)


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
