# Uses of Class com.jbase.jremote.protocol.JSelectListProt (jremote API)

**Created At:** 9/25/2017 12:14:20 PM  
**Updated At:** 4/4/2018 9:50:22 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Class com.jbase.jremote.protocol.JSelectListProt (jremote   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript>&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
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
## Uses of Class
com.jbase.jremote.protocol.JSelectListProt

| Package<br> | Description<br> |
| --- | --- |
<caption>&nbsp;<span>Packages that use <a href="/39270-protocol/com_jbase_jremote_protocol_JSelectListProt" title="class in com.jbase.jremote.protocol">JSelectListProt</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |
| com.jbase.jremote.protocol<br> |  <br> |


<!--   -->

### Uses of [JSelectListProt](/39270-protocol/com_jbase_jremote_protocol_JSelectListProt "class in com.jbase.jremote.protocol") in [com.jbase.jremote](/30312-jagent/jremote-api)


| Constructor and Description<br> |
| --- |
<caption>&nbsp;<span>Constructors in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a> with parameters of type <a href="/39270-protocol/com_jbase_jremote_protocol_JSelectListProt" title="class in com.jbase.jremote.protocol">JSelectListProt</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `JExecuteResults(JSelectListProt selectListProt, JDynArray capturingVar, JDynArray settingVar)` <br> |




<!--   -->

### Uses of [JSelectListProt](/39270-protocol/com_jbase_jremote_protocol_JSelectListProt "class in com.jbase.jremote.protocol") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Fields in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> declared as <a href="/39270-protocol/com_jbase_jremote_protocol_JSelectListProt" title="class in com.jbase.jremote.protocol">JSelectListProt</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `protected JSelectListProt`<br> | JSelectListImpl.`data` <br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> that return <a href="/39270-protocol/com_jbase_jremote_protocol_JSelectListProt" title="class in com.jbase.jremote.protocol">JSelectListProt</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `protected JSelectListProt`<br> | JSelectListImpl.`fetchNext(boolean fetchData)` <br> |
| `protected JSelectListProt`<br> | JSelectListImpl.`fetchPrevious(boolean fetchData)` <br> |
| `JSelectListProt`<br> | JSelectListImpl.`getData()`<br>Obtains a reference to the serializable part of the select list<br> |



| Constructor and Description<br> |
| --- |
<caption>&nbsp;<span>Constructors in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> with parameters of type <a href="/39270-protocol/com_jbase_jremote_protocol_JSelectListProt" title="class in com.jbase.jremote.protocol">JSelectListProt</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `JCursorImpl(AbstractJRemoteConnection connection, JSelectListProt data)`<br>Constructs a cursor from a serializable select list.<br> |
| `JSelectListImpl(AbstractJRemoteConnection connection, JSelectListProt data)`<br>Constructs a select list from a serializable select list.<br> |




<!--   -->

### Uses of [JSelectListProt](/39270-protocol/com_jbase_jremote_protocol_JSelectListProt "class in com.jbase.jremote.protocol") in [com.jbase.jremote.protocol](/39270-protocol/com_jbase_jremote_protocol_package-summary)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39270-protocol/com_jbase_jremote_protocol_package-summary">com.jbase.jremote.protocol</a> that return <a href="/39270-protocol/com_jbase_jremote_protocol_JSelectListProt" title="class in com.jbase.jremote.protocol">JSelectListProt</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `JSelectListProt`<br> | SelectListFetchRequest.`getModifiedSelectList()` <br> |
| `JSelectListProt`<br> | SelectListCommitRequest.`getModifiedSelectList()` <br> |
| `JSelectListProt`<br> | StatementExecuteQueryRequest.`getSelectList()` <br> |
| `JSelectListProt`<br> | SelectListFetchResponse.`getSelectList()` <br> |
| `JSelectListProt`<br> | JediResponse.`getSelectList(CharsetEncoder encoder, CharsetDecoder decoder)` <br> |



| Constructor and Description<br> |
| --- |
<caption>&nbsp;<span>Constructors in <a href="/39270-protocol/com_jbase_jremote_protocol_package-summary">com.jbase.jremote.protocol</a> with parameters of type <a href="/39270-protocol/com_jbase_jremote_protocol_JSelectListProt" title="class in com.jbase.jremote.protocol">JSelectListProt</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `JExecuteRequest(String command, JSelectListProt selectList)` <br> |
| `JSelectListProt(JSelectListProt sl, boolean copyModifiedOnly)`<br>Copy constructor<br> |
| `SelectListCommitRequest(JSelectListProt modifiedSelectList)` <br> |
| `SelectListFetchRequest(int selectListId, int fetchDirection, int fetchSize, boolean fetchData, JSelectListProt modifiedSelectList)` <br> |
| `StatementExecuteQueryRequest(JDynArray queries, JSelectListProt selectList)` <br> |
| `StatementExecuteQueryRequest(String query, JSelectListProt selectList)` <br> |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)
