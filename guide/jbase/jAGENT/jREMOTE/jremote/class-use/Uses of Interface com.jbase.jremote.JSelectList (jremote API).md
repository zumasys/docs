# Uses of Interface com.jbase.jremote.JSelectList (jremote API)

**Created At:** 9/25/2017 11:39:59 AM  
**Updated At:** 4/5/2018 8:55:35 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jremote.JSelectList (jremote   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

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
com.jbase.jremote.JSelectList

| Package<br> | Description<br> |
| --- | --- |
<caption>&nbsp;<span>Packages that use <a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.jca<br> |  <br> |




<!--   -->

### Uses of [JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote") in [com.jbase.jremote](/30312-jagent/jremote-api)


| Modifier and Type<br> | Interface and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Subinterfaces of <a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a> in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `interface `<br> | `JCursor`<br>A cursor to a jBASE file.<br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a> that return <a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `JSelectList`<br> | JConnection.`createSelectList(JDynArray jd)`<br>Create a select list object from an existing dynamic array containing a list of keys separated by attribute markers.<br> |
| `JSelectList`<br> | JExecuteResults.`getReturnList()` <br> |
| `JSelectList`<br> | JFile.`select()`<br>Returns a select list containing the record keys in this jBASE file.<br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `JResultSet`<br> | JStatement.`execute(JDynArray queries, JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
| `JResultSet`<br> | JStatement.`execute(String query, JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
| `JExecuteResults`<br> | JConnection.`execute(String command, JSelectList selectList)`<br>Execute a jBASE command using an existing select list as a filter.<br> |




<!--   -->

### Uses of [JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Classes in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> that implement <a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `class `<br> | `JCursorImpl`<br>A cursor to a jBASE file.<br> |
| `class `<br> | `JSelectListImpl`<br>A select list to a jBASE file.<br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> that return <a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `JSelectList`<br> | JConnectionImpl.`createSelectList(JDynArray jd)` <br> |
| `JSelectList`<br> | JFileImpl.`select()` <br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `JResultSet`<br> | JStatementImpl.`execute(JDynArray queries, JSelectList selectList)` <br> |
| `JResultSet`<br> | JStatementImpl.`execute(String query, JSelectList selectList)` <br> |
| `JExecuteResults`<br> | JConnectionImpl.`execute(String command, JSelectList selectList)` <br> |




<!--   -->

### Uses of [JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote") in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> that return <a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `JSelectList`<br> | WrappedJConnection.`createSelectList(JDynArray jd)` <br> |
| `JSelectList`<br> | WrappedJFile.`select()` <br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `JExecuteResults`<br> | WrappedJConnection.`execute(String command, JSelectList selectList)` <br> |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->



Back to [jREMOTE API](com_jbase_jremote_package-summary)


