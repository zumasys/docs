# Uses of Interface com.jbase.jremote.jca.EventNotifier (jremote   API)

**Created At:** 9/25/2017 11:57:45 AM  
**Updated At:** 2/15/2018 8:02:23 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jremote.jca.EventNotifier (jremote   API)";
        }
    }
    catch(err) {
    }
//--></script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39258-jca/com_jbase_jremote_jca_package-summary)
- [Class](/39258-jca/com_jbase_jremote_jca_eventnotifier "interface in com.jbase.jremote.jca")
- Use
- [Tree](/39258-jca/com_jbase_jremote_jca_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jremote/jca/class-use//39261-class-use/com_jbase_jremote_jca_class-use_EventNotifier)
- [No Frames](/39261-class-use/com_jbase_jremote_jca_class-use_EventNotifier)


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
com.jbase.jremote.jca.EventNotifier

- <caption><span>Packages that use <a href="/39258-jca/com_jbase_jremote_jca_eventnotifier" title="interface in com.jbase.jremote.jca">EventNotifier</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jremote.jca |   |
- - <!--   -->
### Uses of [EventNotifier](/39258-jca/com_jbase_jremote_jca_eventnotifier "interface in com.jbase.jremote.jca") in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary)


<caption><span>Fields in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> declared as <a href="/39258-jca/com_jbase_jremote_jca_eventnotifier" title="interface in com.jbase.jremote.jca">EventNotifier</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `static EventNotifier` | EventNotifier.`CONNECTION_CLOSE_NOTIFIER`  |
| `static EventNotifier` | EventNotifier.`CONNECTION_ERROR_NOTIFIER`  |
| `static EventNotifier` | EventNotifier.`LOCALTRANS_COMMITTED_NOTIFIER`  |
| `static EventNotifier` | EventNotifier.`LOCALTRANS_ROLLEDBACK_NOTIFIER`  |
| `static EventNotifier` | EventNotifier.`LOCALTRANS_STARTED_NOTIFIER`  |



<caption><span>Methods in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> with parameters of type <a href="/39258-jca/com_jbase_jremote_jca_eventnotifier" title="interface in com.jbase.jremote.jca">EventNotifier</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | JRemoteManagedConnection.`notify(EventNotifier notifier,<br>      javax.resource.spi.ConnectionEvent event)`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39258-jca/com_jbase_jremote_jca_package-summary)
- [Class](/39258-jca/com_jbase_jremote_jca_eventnotifier "interface in com.jbase.jremote.jca")
- Use
- [Tree](/39258-jca/com_jbase_jremote_jca_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jremote/jca/class-use//39261-class-use/com_jbase_jremote_jca_class-use_EventNotifier)
- [No Frames](/39261-class-use/com_jbase_jremote_jca_class-use_EventNotifier)


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
