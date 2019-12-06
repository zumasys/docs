# Uses of Class com.jbase.jremote.JRecordLockedException (jremote API)

**Created At:** 9/25/2017 11:39:33 AM  
**Updated At:** 4/5/2018 12:32:35 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Class com.jbase.jremote.JRecordLockedException (jremote   API)";
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
## Uses of Class
com.jbase.jremote.JRecordLockedException

| Package<br> | Description<br> |
| --- | --- |
<caption>&nbsp;<span>Packages that use <a href="/39248-jremote/com_jbase_jremote_JRecordLockedException" title="class in com.jbase.jremote">JRecordLockedException</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |



<!--   -->

### Uses of [JRecordLockedException](/39248-jremote/com_jbase_jremote_JRecordLockedException "class in com.jbase.jremote") in [com.jbase.jremote](/30312-jagent/jremote-api)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a> that throw <a href="/39248-jremote/com_jbase_jremote_JRecordLockedException" title="class in com.jbase.jremote">JRecordLockedException</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `JDynArray`<br> | JFile.`readU(String recordKey, boolean blockedRead)`<br>Read a record where the supplied recordKey is the key to the record and locks it for update.<br> |
| `boolean`<br> | JFile.`writeU(String recordKey, JDynArray record, boolean blockedWrite)`<br>Write the supplied record to the jBASE file.<br> |




<!--   -->

### Uses of [JRecordLockedException](/39248-jremote/com_jbase_jremote_JRecordLockedException "class in com.jbase.jremote") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span>Methods in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> that throw <a href="/39248-jremote/com_jbase_jremote_JRecordLockedException" title="class in com.jbase.jremote">JRecordLockedException</a></span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `JDynArray`<br> | JFileImpl.`readU(String recordKey, boolean blockedRead)` <br> |
| `boolean`<br> | JFileImpl.`writeU(String recordKey, JDynArray record, boolean blockedWrite)` <br> |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)
