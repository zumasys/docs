# Uses of Interface com.jbase.jdbc.io.JBaseObjectReader (jbasejdbc   API)

**Created At:** 9/25/2017 10:46:48 AM  
**Updated At:** 2/15/2018 8:02:49 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jdbc.io.JBaseObjectReader (jbasejdbc   API)";
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
- [Class](/39232-io/com_jbase_jdbc_io_jbaseobjectreader "interface in com.jbase.jdbc.io")
- Use
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/io/class-use//39235-class-use/com_jbase_jdbc_io_class-use_JBaseObjectReader)
- [No Frames](/39235-class-use/com_jbase_jdbc_io_class-use_JBaseObjectReader)


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
com.jbase.jdbc.io.JBaseObjectReader

- <caption><span>Packages that use <a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader" title="interface in com.jbase.jdbc.io">JBaseObjectReader</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jdbc.io |   |
| com.jbase.jdbc.protocol |   |
- - <!--   -->
### Uses of [JBaseObjectReader](/39232-io/com_jbase_jdbc_io_jbaseobjectreader "interface in com.jbase.jdbc.io") in [com.jbase.jdbc.io](/39232-io/com_jbase_jdbc_io_package-summary)


<caption><span>Classes in <a href="/39232-io/com_jbase_jdbc_io_package-summary">com.jbase.jdbc.io</a> that implement <a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader" title="interface in com.jbase.jdbc.io">JBaseObjectReader</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `AbstractJBaseObjectReader`<br>Deserializes JBaseSerializable objects sent from the jbase\_agent server,<br> or any other source of serialized JCF objects.<br> |
| `class` | `IOJBaseObjectReader`<br>jBase object reader based on the DataInputStream.<br> |
| `class` | `NIOJBaseObjectReader`<br>jBase object reader based on the new Java IO.<br> |



<caption><span>Methods in <a href="/39232-io/com_jbase_jdbc_io_package-summary">com.jbase.jdbc.io</a> with parameters of type <a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader" title="interface in com.jbase.jdbc.io">JBaseObjectReader</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | SQLError.`readObject(JBaseObjectReader reader,<br>          int version)`<br>Method :                readObject()<br><br> Description:   Read object off the wire.<br> |
| `void` | OKResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | JBaseSerializable.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | ErrorResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
    - <!--   -->
### Uses of [JBaseObjectReader](/39232-io/com_jbase_jdbc_io_jbaseobjectreader "interface in com.jbase.jdbc.io") in [com.jbase.jdbc.protocol](/39240-protocol/com_jbase_jdbc_protocol_package-summary)


<caption><span>Methods in <a href="/39240-protocol/com_jbase_jdbc_protocol_package-summary">com.jbase.jdbc.protocol</a> with parameters of type <a href="/39232-io/com_jbase_jdbc_io_jbaseobjectreader" title="interface in com.jbase.jdbc.io">JBaseObjectReader</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | TransactionStartRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | TransactionRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SQLUpdateResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SQLRSMDResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SQLResultResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SQLRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SQLParamsResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SQLOKResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SQLErrorResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SetPropertiesResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | SetPropertiesRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | Row.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | RemoteInputRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | PResultSetMetaData.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | PResultSet.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | PColumnMetaData.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | ParameterList.`readObject(JBaseObjectReader reader,<br>          int version)`<br>Not implemented yet (currently ParameterList is only being sent from the client to the server).<br> |
| `void` | LoggingRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | LoadSubroutineRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | InputOutputResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | FetchRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | DatabaseMetaDataRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | CompileRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | BindRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | AuthenticationRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | AuthenticationRequest.UserCredentials.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | AccountAuthenticationRequest.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | AccountAuthenticationRequest.AccountUserCredentials.`readObject(JBaseObjectReader reader,<br>          int version)`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- [Class](/39232-io/com_jbase_jdbc_io_jbaseobjectreader "interface in com.jbase.jdbc.io")
- Use
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/io/class-use//39235-class-use/com_jbase_jdbc_io_class-use_JBaseObjectReader)
- [No Frames](/39235-class-use/com_jbase_jdbc_io_class-use_JBaseObjectReader)


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
