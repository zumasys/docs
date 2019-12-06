# Uses of Interface com.jbase.jremote.JConnectionCallbackHandler (jremote   API)

**Created At:** 9/25/2017 11:38:54 AM  
**Updated At:** 2/15/2018 8:02:57 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jremote.JConnectionCallbackHandler (jremote   API)";
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
- [Class](/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler "interface in com.jbase.jremote")
- Use
- [Tree](/39248-jremote/com_jbase_jremote_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../index.html?com/jbase/jremote/class-use//39249-class-use/com_jbase_jremote_class-use_JConnectionCallbackHandler)
- [No Frames](/39249-class-use/com_jbase_jremote_class-use_JConnectionCallbackHandler)


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
com.jbase.jremote.JConnectionCallbackHandler

- <caption><span>Packages that use <a href="/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler" title="interface in com.jbase.jremote">JConnectionCallbackHandler</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jremote |   |
| com.jbase.jremote.jca |   |
- - <!--   -->
### Uses of [JConnectionCallbackHandler](/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler "interface in com.jbase.jremote") in [com.jbase.jremote](/30312-jagent/jremote-api)


<caption><span>Methods in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler" title="interface in com.jbase.jremote">JConnectionCallbackHandler</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JConnection` | JConnectionFactory.`getConnection(JConnectionCallbackHandler handler)`<br>Get a connection to a remote jBASE instance, in a managed environment<br> the callback handler provides ancillary connection initialisation.<br> |
| `JConnection` | DefaultJConnectionFactory.`getConnection(JConnectionCallbackHandler handler)`  |
    - <!--   -->
### Uses of [JConnectionCallbackHandler](/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler "interface in com.jbase.jremote") in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary)


<caption><span>Methods in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> that return <a href="/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler" title="interface in com.jbase.jremote">JConnectionCallbackHandler</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JConnectionCallbackHandler` | JRemoteConnectionRequestInfo.`getCallbackHandler()`  |



<caption><span>Methods in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler" title="interface in com.jbase.jremote">JConnectionCallbackHandler</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected javax.resource.spi.ManagedConnection` | JRemoteManagedConnectionFactory.`createConnection(Subject subject,<br>                JConnectionCallbackHandler callbackHandler)`  |
| `JConnection` | JRemoteConnectionFactoryImpl.`getConnection(JConnectionCallbackHandler handler)`  |
| `protected JConnection` | JRemoteConnectionFactoryImpl.`getConnection(String user,<br>             String account,<br>             String password,<br>             JConnectionCallbackHandler handler)`  |



<caption><span>Constructors in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler" title="interface in com.jbase.jremote">JConnectionCallbackHandler</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `JRemoteConnectionRequestInfo(JConnectionCallbackHandler handler)`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/30312-jagent/jremote-api)
- [Class](/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler "interface in com.jbase.jremote")
- Use
- [Tree](/39248-jremote/com_jbase_jremote_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../index.html?com/jbase/jremote/class-use//39249-class-use/com_jbase_jremote_class-use_JConnectionCallbackHandler)
- [No Frames](/39249-class-use/com_jbase_jremote_class-use_JConnectionCallbackHandler)


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
