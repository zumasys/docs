# Uses of Class com.jbase.jremote.JRecordLockedException (jremote API)

**Created At:** 9/25/2017 11:39:33 AM  
**Updated At:** 4/5/2018 12:32:35 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jremote.JRecordLockedException (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.



<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Class
com.jbase.jremote.JRecordLockedException

| Package<br> | Description<br> |
| --- | --- |
 Packages that use [JRecordLockedException](/39248-jremote/com_jbase_jremote_JRecordLockedException "class in com.jbase.jremote")  | com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |





### Uses of [JRecordLockedException](/39248-jremote/com_jbase_jremote_JRecordLockedException "class in com.jbase.jremote") in [com.jbase.jremote](/30312-jagent/jremote-api)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote](/30312-jagent/jremote-api) that throw [JRecordLockedException](/39248-jremote/com_jbase_jremote_JRecordLockedException "class in com.jbase.jremote")  | `JDynArray`<br> | JFile.`readU(String recordKey, boolean blockedRead)`<br>Read a record where the supplied recordKey is the key to the record and locks it for update.<br> |
| `boolean`<br> | JFile.`writeU(String recordKey, JDynArray record, boolean blockedWrite)`<br>Write the supplied record to the jBASE file.<br> |






### Uses of [JRecordLockedException](/39248-jremote/com_jbase_jremote_JRecordLockedException "class in com.jbase.jremote") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary) that throw [JRecordLockedException](/39248-jremote/com_jbase_jremote_JRecordLockedException "class in com.jbase.jremote")  | `JDynArray`<br> | JFileImpl.`readU(String recordKey, boolean blockedRead)` <br> |
| `boolean`<br> | JFileImpl.`writeU(String recordKey, JDynArray record, boolean blockedWrite)` <br> |

Back to [jREMOTE API](com_jbase_jremote_package-summary)
