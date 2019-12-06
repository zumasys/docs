# Uses of Interface com.jbase.jremote.JConnection (jremote   API)

**Created At:** 9/25/2017 11:38:48 AM  
**Updated At:** 2/15/2018 8:02:57 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="Uses of Interface com.jbase.jremote.JConnection (jremote   API)";
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
- [Class](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote")
- Use
- [Tree](/39248-jremote/com_jbase_jremote_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../index.html?com/jbase/jremote/class-use//39249-class-use/com_jbase_jremote_class-use_JConnection)
- [No Frames](/39249-class-use/com_jbase_jremote_class-use_JConnection)


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
com.jbase.jremote.JConnection

- <caption><span>Packages that use <a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></span><span class="tabEnd"> </span></caption>| Package | Description |
| --- | --- |
| com.jbase.jremote |   |
| com.jbase.jremote.io |   |
| com.jbase.jremote.jca |   |
| com.jbase.jremote.jca.cci |   |
| com.jbase.jremote.jca.spring |   |
- - <!--   -->
### Uses of [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") in [com.jbase.jremote](/30312-jagent/jremote-api)


<caption><span>Subinterfaces of <a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a> in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Interface and Description |
| --- | --- |
| `interface` | `JXAConnection`  |



<caption><span>Methods in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a> that return <a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JConnection` | JConnectionFactory.`getConnection()`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection` | DefaultJConnectionFactory.`getConnection()`  |
| `JConnection` | JConnectionFactory.`getConnection(JConnectionCallbackHandler handler)`<br>Get a connection to a remote jBASE instance, in a managed environment<br> the callback handler provides ancillary connection initialisation.<br> |
| `JConnection` | DefaultJConnectionFactory.`getConnection(JConnectionCallbackHandler handler)`  |
| `JConnection` | JConnectionFactory.`getConnection(String user,<br>             String password)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection` | DefaultJConnectionFactory.`getConnection(String user,<br>             String password)`  |
| `JConnection` | JConnectionFactory.`getConnection(String user,<br>             String password,<br>             Properties props)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection` | DefaultJConnectionFactory.`getConnection(String user,<br>             String password,<br>             Properties props)`  |
| `JConnection` | JConnectionFactory.`getConnection(String user,<br>             String account,<br>             String password)`<br>Get a connection to a remote jBASE account.<br> |
| `JConnection` | DefaultJConnectionFactory.`getConnection(String user,<br>             String account,<br>             String password)`  |



<caption><span>Methods in <a href="/30312-jagent/jremote-api">com.jbase.jremote</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | JConnectionCallbackHandler.`initialise(Subject subject,<br>          JConnection connection)`<br>Initialise a connection for the supplied Subject.<br> |
| `boolean` | JConnectionCallbackHandler.`reinitialise(Subject subject,<br>            JConnection connection)`<br>The Subject intends to use a connection that was previously <br> initialised for another Subject.<br> |
| `boolean` | JConnectionCallbackHandler.`reuse(Subject subject,<br>     JConnection connection)`<br>The Subject is reusing the supplied connection.<br> |
    - <!--   -->
### Uses of [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


<caption><span>Classes in <a href="/39250-io/com_jbase_jremote_io_package-summary">com.jbase.jremote.io</a> that implement <a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `JConnectionImpl`<br>The connection to a remote jBASE instance implemented<br> using a IO messages over an abstract connection.<br> |
    - <!--   -->
### Uses of [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary)


<caption><span>Classes in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> that implement <a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `class` | `WrappedJConnection`<br>Implementation of a connection to a remote jBASE instance.<br> |



<caption><span>Methods in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> that return <a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected JConnection` | JRemoteManagedConnectionFactory.`connect()`  |
| `protected JConnection` | WrappedJConnection.`getConnection()`<br>Get the real connection.<br> |
| `JConnection` | JRemoteManagedConnection.`getConnection()`  |
| `JConnection` | JRemoteConnectionFactoryImpl.`getConnection()`  |
| `JConnection` | JRemoteConnectionFactoryImpl.`getConnection(JConnectionCallbackHandler handler)`  |
| `JConnection` | JRemoteConnectionFactoryImpl.`getConnection(String user,<br>             String password)`  |
| `JConnection` | JRemoteConnectionFactoryImpl.`getConnection(String user,<br>             String password,<br>             Properties props)`  |
| `JConnection` | JRemoteConnectionFactoryImpl.`getConnection(String user,<br>             String account,<br>             String password)`  |
| `protected JConnection` | JRemoteConnectionFactoryImpl.`getConnection(String user,<br>             String account,<br>             String password,<br>             JConnectionCallbackHandler handler)`  |



<caption><span>Methods in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | WrappedJConnection.`setConnection(JConnection connection)`  |



<caption><span>Constructors in <a href="/39258-jca/com_jbase_jremote_jca_package-summary">com.jbase.jremote.jca</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `JRemoteManagedConnection(JConnection connection,<br>                        Subject subject)`<br>Constructor for JRemoteManagedConnection<br> |
    - <!--   -->
### Uses of [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") in [com.jbase.jremote.jca.cci](/39259-cci/com_jbase_jremote_jca_cci_package-summary)


<caption><span>Methods in <a href="/39259-cci/com_jbase_jremote_jca_cci_package-summary">com.jbase.jremote.jca.cci</a> that return <a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected JConnection` | CCIJConnection.`getJConnection()`  |



<caption><span>Constructors in <a href="/39259-cci/com_jbase_jremote_jca_cci_package-summary">com.jbase.jremote.jca.cci</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `CCIJConnection(JConnection c)`  |
| `CCILocalTransactionManager(JConnection c)`  |
    - <!--   -->
### Uses of [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") in [com.jbase.jremote.jca.spring](/39268-spring/com_jbase_jremote_jca_spring_package-summary)


<caption><span>Methods in <a href="/39268-spring/com_jbase_jremote_jca_spring_package-summary">com.jbase.jremote.jca.spring</a> that return <a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `static JConnection` | JConnectionFactoryUtils.`getConnection(JConnectionFactory cf)`<br>Obtain a JConnection from the given JConnectionFactory.<br> |
| `JConnection` | ConnectionHolder.`getJConnection()`  |



<caption><span>Methods in <a href="/39268-spring/com_jbase_jremote_jca_spring_package-summary">com.jbase.jremote.jca.spring</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></span><span class="tabEnd"> </span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `static boolean` | JConnectionFactoryUtils.`isConnectionTransactional(JConnection con,<br>                         JConnectionFactory cf)`<br>Determine whether the given JRemote Connection is transactional, that is,<br> bound to the current thread by Spring's transaction facilities.<br> |
| `static void` | JConnectionFactoryUtils.`releaseConnection(JConnection con,<br>                 JConnectionFactory cf)`<br>Close the given JConnection, obtained from the given JConnectionFactory,<br> if it is not managed externally (that is, not bound to the thread).<br> |



<caption><span>Constructors in <a href="/39268-spring/com_jbase_jremote_jca_spring_package-summary">com.jbase.jremote.jca.spring</a> with parameters of type <a href="/39248-jremote/com_jbase_jremote_jconnection" title="interface in com.jbase.jremote">JConnection</a></span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `ConnectionHolder(JConnection connection)`  |
<!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/30312-jagent/jremote-api)
- [Class](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote")
- Use
- [Tree](/39248-jremote/com_jbase_jremote_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../index.html?com/jbase/jremote/class-use//39249-class-use/com_jbase_jremote_class-use_JConnection)
- [No Frames](/39249-class-use/com_jbase_jremote_class-use_JConnection)


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
