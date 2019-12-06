# Uses of Class com.jbase.jdbc.protocol.ParameterList (jbasejdbc   API)

**Created At:** 9/25/2017 10:58:58 AM  
**Updated At:** 2/15/2018 8:02:20 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Class com.jbase.jdbc.protocol.ParameterList (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- [Class](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol")
- Use
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/protocol/class-use//39241-class-use/com_jbase_jdbc_protocol_class-use_ParameterList)
- [No Frames](/39241-class-use/com_jbase_jdbc_protocol_class-use_ParameterList)


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
## Uses of Class
com.jbase.jdbc.protocol.ParameterList

- <caption><span>Packages that use <a href="/39240-protocol/com_jbase_jdbc_protocol_ParameterList" title="class in com.jbase.jdbc.protocol">ParameterList</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jdbc |   |
| com.jbase.jdbc.protocol |   |
- - <!--   -->
### Uses of [ParameterList](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc](/39228-jdbc/com_jbase_jdbc_package-summary)


<caption><span>Fields in <a href="/39228-jdbc/com_jbase_jdbc_package-summary">com.jbase.jdbc</a> declared as <a href="/39240-protocol/com_jbase_jdbc_protocol_ParameterList" title="class in com.jbase.jdbc.protocol">ParameterList</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `protected ParameterList` | JBaseJDBCPreparedStatement.`parameters`  |
    - <!--   -->
### Uses of [ParameterList](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc.protocol](/39240-protocol/com_jbase_jdbc_protocol_package-summary)


<caption><span>Fields in <a href="/39240-protocol/com_jbase_jdbc_protocol_package-summary">com.jbase.jdbc.protocol</a> declared as <a href="/39240-protocol/com_jbase_jdbc_protocol_ParameterList" title="class in com.jbase.jdbc.protocol">ParameterList</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `protected ParameterList` | DatabaseMetaDataRequest.`parameterList`  |
| `protected ParameterList` | BindRequest.`parameterList`  |



<caption><span>Methods in <a href="/39240-protocol/com_jbase_jdbc_protocol_package-summary">com.jbase.jdbc.protocol</a> that return <a href="/39240-protocol/com_jbase_jdbc_protocol_ParameterList" title="class in com.jbase.jdbc.protocol">ParameterList</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `ParameterList` | SQLParamsResponse.`getParameterList()`  |
| `ParameterList` | DatabaseMetaDataRequest.`getParameterList()`  |
| `ParameterList` | BindRequest.`getParameterList()`  |



<caption><span>Methods in <a href="/39240-protocol/com_jbase_jdbc_protocol_package-summary">com.jbase.jdbc.protocol</a> with parameters of type <a href="/39240-protocol/com_jbase_jdbc_protocol_ParameterList" title="class in com.jbase.jdbc.protocol">ParameterList</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | ParameterList.`copyFrom(ParameterList other)`  |
| `void` | DatabaseMetaDataRequest.`setParameterList(ParameterList ps)`  |
| `void` | BindRequest.`setParameterList(ParameterList ps)`  |



<caption><span>Constructors in <a href="/39240-protocol/com_jbase_jdbc_protocol_package-summary">com.jbase.jdbc.protocol</a> with parameters of type <a href="/39240-protocol/com_jbase_jdbc_protocol_ParameterList" title="class in com.jbase.jdbc.protocol">ParameterList</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `BindRequest(StatementID statementId,<br>           ParameterList parameterList)`  |
| `CallSubroutineRequest(StatementID statementId,<br>                     ParameterList parameterList)`  |
| `DatabaseMetaDataRequest(String requestedProperty,<br>                       ParameterList parameterList)`  |
| `ParameterList(ParameterList pl)`<br>Constructor.<br> |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- [Class](/39240-protocol/com_jbase_jdbc_protocol_ParameterList "class in com.jbase.jdbc.protocol")
- Use
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/protocol/class-use//39241-class-use/com_jbase_jdbc_protocol_class-use_ParameterList)
- [No Frames](/39241-class-use/com_jbase_jdbc_protocol_class-use_ParameterList)


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
