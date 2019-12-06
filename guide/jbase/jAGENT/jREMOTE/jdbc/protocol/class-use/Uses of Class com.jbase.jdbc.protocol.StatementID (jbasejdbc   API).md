# Uses of Class com.jbase.jdbc.protocol.StatementID (jbasejdbc   API)

**Created At:** 9/25/2017 11:01:09 AM  
**Updated At:** 2/15/2018 8:02:55 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Class com.jbase.jdbc.protocol.StatementID (jbasejdbc   API)";
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
- [Class](/39240-protocol/com_jbase_jdbc_protocol_statementid "class in com.jbase.jdbc.protocol")
- Use
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/protocol/class-use//39241-class-use/com_jbase_jdbc_protocol_class-use_StatementID)
- [No Frames](/39241-class-use/com_jbase_jdbc_protocol_class-use_StatementID)


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
com.jbase.jdbc.protocol.StatementID

- <caption><span>Packages that use <a href="/39240-protocol/com_jbase_jdbc_protocol_statementid" title="class in com.jbase.jdbc.protocol">StatementID</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jdbc |   |
| com.jbase.jdbc.protocol |   |
- - <!--   -->
### Uses of [StatementID](/39240-protocol/com_jbase_jdbc_protocol_statementid "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc](/39228-jdbc/com_jbase_jdbc_package-summary)


<caption><span>Methods in <a href="/39228-jdbc/com_jbase_jdbc_package-summary">com.jbase.jdbc</a> that return <a href="/39240-protocol/com_jbase_jdbc_protocol_statementid" title="class in com.jbase.jdbc.protocol">StatementID</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `StatementID` | JBaseJDBCSocketStatement.`getId()`<br>This is a jBASE JDBC driver's private method, not part of the JDBC API.<br> |



<caption><span>Methods in <a href="/39228-jdbc/com_jbase_jdbc_package-summary">com.jbase.jdbc</a> with parameters of type <a href="/39240-protocol/com_jbase_jdbc_protocol_statementid" title="class in com.jbase.jdbc.protocol">StatementID</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | JBaseJDBCSocketStatement.`setId(StatementID _statementId)`  |
    - <!--   -->
### Uses of [StatementID](/39240-protocol/com_jbase_jdbc_protocol_statementid "class in com.jbase.jdbc.protocol") in [com.jbase.jdbc.protocol](/39240-protocol/com_jbase_jdbc_protocol_package-summary)


<caption><span>Fields in <a href="/39240-protocol/com_jbase_jdbc_protocol_package-summary">com.jbase.jdbc.protocol</a> declared as <a href="/39240-protocol/com_jbase_jdbc_protocol_statementid" title="class in com.jbase.jdbc.protocol">StatementID</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `protected StatementID` | SQLResponse.`statementId`  |
| `protected StatementID` | SQLRequest.`statementId`  |



<caption><span>Methods in <a href="/39240-protocol/com_jbase_jdbc_protocol_package-summary">com.jbase.jdbc.protocol</a> that return <a href="/39240-protocol/com_jbase_jdbc_protocol_statementid" title="class in com.jbase.jdbc.protocol">StatementID</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `StatementID` | SQLResponse.`getStatementId()`  |



<caption><span>Constructors in <a href="/39240-protocol/com_jbase_jdbc_protocol_package-summary">com.jbase.jdbc.protocol</a> with parameters of type <a href="/39240-protocol/com_jbase_jdbc_protocol_statementid" title="class in com.jbase.jdbc.protocol">StatementID</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `BindRequest(StatementID statementId,<br>           ParameterList parameterList)`  |
| `CallSubroutineRequest(StatementID statementId,<br>                     ParameterList parameterList)`  |
| `ExecuteRequest(StatementID statementId)`  |
| `FetchRequest(StatementID sId)`  |
| `FetchRequest(StatementID sId,<br>            int fetchSize)`  |
| `MetaDataRequest(StatementID statementId)`  |
| `ReleaseRequest(StatementID statementId)`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- [Class](/39240-protocol/com_jbase_jdbc_protocol_statementid "class in com.jbase.jdbc.protocol")
- Use
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/protocol/class-use//39241-class-use/com_jbase_jdbc_protocol_class-use_StatementID)
- [No Frames](/39241-class-use/com_jbase_jdbc_protocol_class-use_StatementID)


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
