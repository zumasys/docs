# Uses of Interface com.jbase.jremote.JConnectionFactory (jremote   API)

**Created At:** 9/25/2017 11:39:01 AM  
**Updated At:** 2/15/2018 8:02:48 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jremote.JConnectionFactory (jremote   API)";
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
- [Class](/39248-jremote/com_jbase_jremote_jconnectionfactory "interface in com.jbase.jremote")
- Use
- [Tree](/39248-jremote/com_jbase_jremote_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../index.html?com/jbase/jremote/class-use//39249-class-use/com_jbase_jremote_class-use_JConnectionFactory)
- [No Frames](/39249-class-use/com_jbase_jremote_class-use_JConnectionFactory)


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
com.jbase.jremote.JConnectionFactory

- <caption><span>Packages that use <a href="/39248-jremote/com_jbase_jremote_jconnectionfactory" title="interface in com.jbase.jremote">JConnectionFactory</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jremote |   |
| com.jbase.jremote.jca |   |
| com.jbase.jremote.jca.spring |   |
- - <!--   -->
### Uses of [JConnectionFactory](/39248-jremote/com_jbase_jremote_jconnectionfactory "interface in com.jbase.jremote") in [com.jbase.jremote](/30312-jagent/jremote-api)


<caption><span>Classes in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a> that implement <a href="/39248-jremote/com_jbase_jremote_jconnectionfactory" title="interface in com.jbase.jremote">JConnectionFactory</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `DefaultJConnectionFactory`<br>The default implementation of a JConnectionFactory that will<br> connect to a remote jBASE instance using a host and a port.<br> |
    - <!--   -->
### Uses of [JConnectionFactory](/39248-jremote/com_jbase_jremote_jconnectionfactory "interface in com.jbase.jremote") in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary)


<caption><span>Classes in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> that implement <a href="/39248-jremote/com_jbase_jremote_jconnectionfactory" title="interface in com.jbase.jremote">JConnectionFactory</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `JRemoteConnectionFactoryImpl`<br>The concrete implementation of a remote jBASE connection factory.<br> |
    - <!--   -->
### Uses of [JConnectionFactory](/39248-jremote/com_jbase_jremote_jconnectionfactory "interface in com.jbase.jremote") in [com.jbase.jremote.jca.spring](/39268-spring/com_jbase_jremote_jca_spring_package-summary)


<caption><span>Fields in <a href="/39268-spring/com_jbase_jremote_jca_spring_package-summary">com.jbase.jremote.jca.spring</a> declared as <a href="/39248-jremote/com_jbase_jremote_jconnectionfactory" title="interface in com.jbase.jremote">JConnectionFactory</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `protected JConnectionFactory` | JRemoteLocalTransactionManager.`_connectionFactory`  |



<caption><span>Methods in <a href="/39268-spring/com_jbase_jremote_jca_spring_package-summary">com.jbase.jremote.jca.spring</a> that return <a href="/39248-jremote/com_jbase_jremote_jconnectionfactory" title="interface in com.jbase.jremote">JConnectionFactory</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JConnectionFactory` | JRemoteLocalTransactionManager.`getConnectionFactory()`  |



<caption><span>Methods in <a href="/39268-spring/com_jbase_jremote_jca_spring_package-summary">com.jbase.jremote.jca.spring</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jconnectionfactory" title="interface in com.jbase.jremote">JConnectionFactory</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `static JConnection` | JConnectionFactoryUtils.`getConnection(JConnectionFactory cf)`<br>Obtain a JConnection from the given JConnectionFactory.<br> |
| `static boolean` | JConnectionFactoryUtils.`isConnectionTransactional(JConnection con,<br>                         JConnectionFactory cf)`<br>Determine whether the given JRemote Connection is transactional, that is,<br> bound to the current thread by Spring's transaction facilities.<br> |
| `static void` | JConnectionFactoryUtils.`releaseConnection(JConnection con,<br>                 JConnectionFactory cf)`<br>Close the given JConnection, obtained from the given JConnectionFactory,<br> if it is not managed externally (that is, not bound to the thread).<br> |
| `void` | JRemoteLocalTransactionManager.`setConnectionFactory(JConnectionFactory xf)`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/30312-jagent/jremote-api)
- [Class](/39248-jremote/com_jbase_jremote_jconnectionfactory "interface in com.jbase.jremote")
- Use
- [Tree](/39248-jremote/com_jbase_jremote_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../index.html?com/jbase/jremote/class-use//39249-class-use/com_jbase_jremote_class-use_JConnectionFactory)
- [No Frames](/39249-class-use/com_jbase_jremote_class-use_JConnectionFactory)


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
