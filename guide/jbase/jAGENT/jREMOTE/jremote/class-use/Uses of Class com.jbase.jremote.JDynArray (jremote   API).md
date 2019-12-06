# Uses of Class com.jbase.jremote.JDynArray (jremote   API)

**Created At:** 9/25/2017 11:39:13 AM  
**Updated At:** 2/15/2018 8:02:57 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Class com.jbase.jremote.JDynArray (jremote   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/30312-jagent/jremote-api)
- [Class](/39248-jremote/com_jbase_jremote_jdynarray "class in com.jbase.jremote")
- Use
- [Tree](/39248-jremote/com_jbase_jremote_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../index.html?com/jbase/jremote/class-use//39249-class-use/com_jbase_jremote_class-use_JDynArray)
- [No Frames](/39249-class-use/com_jbase_jremote_class-use_JDynArray)


- [All Classes](../../../../allclasses-noframe.html)


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
com.jbase.jremote.JDynArray

- <caption><span>Packages that use <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jremote |   |
| com.jbase.jremote.io |   |
| com.jbase.jremote.jca |   |
| com.jbase.jremote.jca.cci |   |
| com.jbase.jremote.jca.inflow |   |
| com.jbase.jremote.protocol |   |
- - <!--   -->
### Uses of [JDynArray](/39248-jremote/com_jbase_jremote_jdynarray "class in com.jbase.jremote") in [com.jbase.jremote](/30312-jagent/jremote-api)


<caption><span>Methods in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a> that return <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | JExecuteResults.`getCapturingVar()`  |
| `JDynArray` | JConnection.`getCommon(String name)`<br>Return the value of the named common with the supplied name.<br> |
| `JDynArray` | JCursor.`getRecord()`<br>Returns the current record.<br> |
| `JDynArray` | EISMetaDataRepository.`getRepositoryEntry(String key)`<br>Obtain the value of a repository entry<br> |
| `JDynArray` | JResultSet.`getRow()`  |
| `JDynArray` | JExecuteResults.`getSettingVar()`  |
| `JDynArray` | JConnection.`newJDynArray()`<br>Create a JDynArray with the correct Charset for this connection.<br> |
| `JDynArray` | JConnection.`newJDynArray(String str)`  |
| `JDynArray` | JFile.`read(String recordKey)`<br>Read a record where the supplied recordKey is the key <br> to the record.<br> |
| `JDynArray` | JFile.`readU(String recordKey,<br>     boolean blockedRead)`<br>Read a record where the supplied recordKey is the key <br> to the record and locks it for update.<br> |



<caption><span>Methods in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JSelectList` | JConnection.`createSelectList(JDynArray jd)`<br>Create a select list object from an existing dynamic array<br> containing a list of keys separated by attribute markers.<br> |
| `JResultSet` | JStatement.`execute(JDynArray queries)`<br>Execute query.<br> |
| `JResultSet` | JStatement.`execute(JDynArray queries,<br>       JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
| `void` | JCursor.`setRecord(JDynArray record)`<br>Modifies the current record.<br> |
| `boolean` | JFile.`write(String recordKey,<br>     JDynArray record)`<br>Write the supplied record to the jBASE file.<br> |
| `boolean` | JFile.`writeU(String recordKey,<br>      JDynArray record,<br>      boolean blockedWrite)`<br>Write the supplied record to the jBASE file.<br> |



<caption><span>Constructors in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `JExecuteResults(JSelectListProt selectListProt,<br>               JDynArray capturingVar,<br>               JDynArray settingVar)`  |
    - <!--   -->
### Uses of [JDynArray](/39248-jremote/com_jbase_jremote_jdynarray "class in com.jbase.jremote") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


<caption><span>Methods in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> that return <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | JConnectionImpl.`getCommon(String name)`<br>Return the value of the named common with the supplied name.<br> |
| `JDynArray` | JCursorImpl.`getRecord()`  |
| `JDynArray` | JResultSetImpl.`getRow()`  |
| `JDynArray` | JConnectionImpl.`newJDynArray()`  |
| `JDynArray` | JConnectionImpl.`newJDynArray(String str)`  |
| `JDynArray` | JFileImpl.`read(String recordKey)`  |
| `JDynArray` | JFileImpl.`readU(String recordKey,<br>     boolean blockedRead)`  |



<caption><span>Methods in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JSelectList` | JConnectionImpl.`createSelectList(JDynArray jd)`  |
| `JResultSet` | JStatementImpl.`execute(JDynArray queries)`  |
| `JResultSet` | JStatementImpl.`execute(JDynArray queries,<br>       JSelectList selectList)`  |
| `void` | JCursorImpl.`setRecord(JDynArray record)`  |
| `boolean` | JFileImpl.`write(String recordKey,<br>     JDynArray record)`  |
| `boolean` | JFileImpl.`writeU(String recordKey,<br>      JDynArray record,<br>      boolean blockedWrite)`  |



<caption><span>Constructors in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `JSelectListImpl(AbstractJRemoteConnection connection,<br>               JDynArray keys)`<br>Constructs a select list from specified dynamic array.<br> |
    - <!--   -->
### Uses of [JDynArray](/39248-jremote/com_jbase_jremote_jdynarray "class in com.jbase.jremote") in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary)


<caption><span>Methods in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> that return <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | WrappedJConnection.`getCommon(String name)`<br>Return the value of the common with supplied name.<br> |
| `JDynArray` | WrappedJConnection.`newJDynArray()`  |
| `JDynArray` | WrappedJConnection.`newJDynArray(String str)`  |
| `JDynArray` | WrappedJFile.`read(String recordKey)`  |
| `JDynArray` | WrappedJFile.`readU(String recordKey,<br>     boolean blockedRead)`  |



<caption><span>Methods in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JSelectList` | WrappedJConnection.`createSelectList(JDynArray jd)`  |
| `boolean` | WrappedJFile.`write(String recordKey,<br>     JDynArray record)`  |
| `boolean` | WrappedJFile.`writeU(String recordKey,<br>      JDynArray record,<br>      boolean blockedWrite)`  |
    - <!--   -->
### Uses of [JDynArray](/39248-jremote/com_jbase_jremote_jdynarray "class in com.jbase.jremote") in [com.jbase.jremote.jca.cci](/39259-cci/com_jbase_jremote_jca_cci_package-summary)


<caption><span>Methods in <a href="/39259-cci/com_jbase_jremote_jca_cci_package-summary">com.jbase.jremote.jca.cci</a> that return <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected JDynArray` | CCIJRemoteDynamicArrayRecord.`getJDynArray()`  |
    - <!--   -->
### Uses of [JDynArray](/39248-jremote/com_jbase_jremote_jdynarray "class in com.jbase.jremote") in [com.jbase.jremote.jca.inflow](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)


<caption><span>Methods in <a href="/39262-inflow/com_jbase_jremote_jca_inflow_package-summary">com.jbase.jremote.jca.inflow</a> that return <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | JRemoteMessageListener.`onMessage(JDynArray dynArray)`  |



<caption><span>Methods in <a href="/39262-inflow/com_jbase_jremote_jca_inflow_package-summary">com.jbase.jremote.jca.inflow</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | JRemoteMessageListener.`onMessage(JDynArray dynArray)`  |
    - <!--   -->
### Uses of [JDynArray](/39248-jremote/com_jbase_jremote_jdynarray "class in com.jbase.jremote") in [com.jbase.jremote.protocol](/39270-protocol/com_jbase_jremote_protocol_package-summary)


<caption><span>Fields in <a href="/39270-protocol/com_jbase_jremote_protocol_package-summary">com.jbase.jremote.protocol</a> with type parameters of type <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `protected List<JDynArray>` | JSelectListProt.`records`  |



<caption><span>Methods in <a href="/39270-protocol/com_jbase_jremote_protocol_package-summary">com.jbase.jremote.protocol</a> that return <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | JediResponse.`getData(CharsetEncoder encoder,<br>       CharsetDecoder decoder)`  |
| `JDynArray` | InputOutputResponse.`getOutput()`  |
| `JDynArray` | JSelectListProt.`getRecord()`<br>Obtains the current record value.<br> |
| `JDynArray` | EISMetaDataResponse.`getRepositoryEntry(String key)`<br>Obtain the value of a repository entry<br> |
| `JDynArray` | ReadCommonResponse.`getValue(CharsetEncoder encoder,<br>        CharsetDecoder decoder)`  |



<caption><span>Methods in <a href="/39270-protocol/com_jbase_jremote_protocol_package-summary">com.jbase.jremote.protocol</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | JSelectListProt.`setRecord(JDynArray record)`<br>Modifies the value of the current record<br> |



<caption><span>Constructors in <a href="/39270-protocol/com_jbase_jremote_protocol_package-summary">com.jbase.jremote.protocol</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jdynarray" title="class in com.jbase.jremote">JDynArray</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `JSelectListProt(JDynArray keys)`<br>Constructs a select list from specified dynamic array.<br> |
| `StatementExecuteQueryRequest(JDynArray queries,<br>                            JSelectListProt selectList)`  |
| `WriteRecordRequest(int writeMode,<br>                  String fileName,<br>                  String recordKey,<br>                  JDynArray data)`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/30312-jagent/jremote-api)
- [Class](/39248-jremote/com_jbase_jremote_jdynarray "class in com.jbase.jremote")
- Use
- [Tree](/39248-jremote/com_jbase_jremote_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../index.html?com/jbase/jremote/class-use//39249-class-use/com_jbase_jremote_class-use_JDynArray)
- [No Frames](/39249-class-use/com_jbase_jremote_class-use_JDynArray)


- [All Classes](../../../../allclasses-noframe.html)


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
