# Uses of Interface com.jbase.jremote.JFile (jremote   API)

**Created At:** 9/25/2017 11:39:26 AM  
**Updated At:** 2/15/2018 8:02:57 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jremote.JFile (jremote   API)";
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
- [Class](/39248-jremote/com_jbase_jremote_jfile "interface in com.jbase.jremote")
- Use
- [Tree](/39248-jremote/com_jbase_jremote_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../index.html?com/jbase/jremote/class-use//39249-class-use/com_jbase_jremote_class-use_JFile)
- [No Frames](/39249-class-use/com_jbase_jremote_class-use_JFile)


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
## Uses of Interface
com.jbase.jremote.JFile

- <caption><span>Packages that use <a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jremote |   |
| com.jbase.jremote.io |   |
| com.jbase.jremote.jca |   |
- - <!--   -->
### Uses of [JFile](/39248-jremote/com_jbase_jremote_jfile "interface in com.jbase.jremote") in [com.jbase.jremote](/30312-jagent/jremote-api)


<caption><span>Methods in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a> that return <a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JFile` | JConnection.`open(String fileName)`<br>Attempts to open a jBASE file or returns null if the file does<br> not exist.<br> |
    - <!--   -->
### Uses of [JFile](/39248-jremote/com_jbase_jremote_jfile "interface in com.jbase.jremote") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


<caption><span>Classes in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> that implement <a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `JFileImpl`<br>The JFile object is used to query, read, and write to jBASE files.<br> |



<caption><span>Methods in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> that return <a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JFile` | JConnectionImpl.`open(String fileName)`  |
    - <!--   -->
### Uses of [JFile](/39248-jremote/com_jbase_jremote_jfile "interface in com.jbase.jremote") in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary)


<caption><span>Classes in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> that implement <a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `WrappedJFile`<br>Provide an interface to remote jBASE files and ensures connection<br> validity.<br> |



<caption><span>Methods in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> that return <a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JFile` | WrappedJConnection.`open(String filename)`<br>Open jBASE file.<br> |



<caption><span>Constructors in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `WrappedJFile(WrappedJConnection connection,<br>            JFile jfile)`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/30312-jagent/jremote-api)
- [Class](/39248-jremote/com_jbase_jremote_jfile "interface in com.jbase.jremote")
- Use
- [Tree](/39248-jremote/com_jbase_jremote_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../index.html?com/jbase/jremote/class-use//39249-class-use/com_jbase_jremote_class-use_JFile)
- [No Frames](/39249-class-use/com_jbase_jremote_class-use_JFile)


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
