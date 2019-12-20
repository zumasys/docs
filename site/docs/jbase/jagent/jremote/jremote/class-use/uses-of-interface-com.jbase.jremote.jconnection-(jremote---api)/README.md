# Uses of Interface com.jbase.jremote.JConnection (jremote   API)

**Created At:** 9/25/2017 11:38:48 AM  
**Updated At:** 2/15/2018 8:02:57 AM  
**Original Doc:** [com_jbase_jremote_class-use_JConnection](https://docs.jbase.com/39249-class-use/com_jbase_jremote_class-use_JConnection)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jremote.JConnection (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

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


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.jremote.JConnection

- Packages that use [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") | Package | Description |
| --- | --- |
| com.jbase.jremote |   |
| com.jbase.jremote.io |   |
| com.jbase.jremote.jca |   |
| com.jbase.jremote.jca.cci |   |
| com.jbase.jremote.jca.spring |   |
- - ### Uses of [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") in [com.jbase.jremote](/30312-jagent/jremote-api)


Subinterfaces of [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") in [com.jbase.jremote](/30312-jagent/jremote-api) | Modifier and Type | Interface and Description |
| --- | --- |
| `interface` | `JXAConnection`  |



Methods in [com.jbase.jremote](/30312-jagent/jremote-api) that return [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
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



Methods in [com.jbase.jremote](/30312-jagent/jremote-api) with parameters of type [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | JConnectionCallbackHandler.`initialise(Subject subject,<br>          JConnection connection)`<br>Initialise a connection for the supplied Subject.<br> |
| `boolean` | JConnectionCallbackHandler.`reinitialise(Subject subject,<br>            JConnection connection)`<br>The Subject intends to use a connection that was previously <br> initialised for another Subject.<br> |
| `boolean` | JConnectionCallbackHandler.`reuse(Subject subject,<br>     JConnection connection)`<br>The Subject is reusing the supplied connection.<br> |
    - ### Uses of [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


Classes in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary) that implement [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `JConnectionImpl`<br>The connection to a remote jBASE instance implemented<br> using a IO messages over an abstract connection.<br> |
    - ### Uses of [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary)


Classes in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary) that implement [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `WrappedJConnection`<br>Implementation of a connection to a remote jBASE instance.<br> |



Methods in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary) that return [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
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



Methods in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary) with parameters of type [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | WrappedJConnection.`setConnection(JConnection connection)`  |



Constructors in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary) with parameters of type [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") | Constructor and Description |
| --- |
| `JRemoteManagedConnection(JConnection connection,<br>                        Subject subject)`<br>Constructor for JRemoteManagedConnection<br> |
    - ### Uses of [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") in [com.jbase.jremote.jca.cci](/39259-cci/com_jbase_jremote_jca_cci_package-summary)


Methods in [com.jbase.jremote.jca.cci](/39259-cci/com_jbase_jremote_jca_cci_package-summary) that return [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `protected JConnection` | CCIJConnection.`getJConnection()`  |



Constructors in [com.jbase.jremote.jca.cci](/39259-cci/com_jbase_jremote_jca_cci_package-summary) with parameters of type [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") | Constructor and Description |
| --- |
| `CCIJConnection(JConnection c)`  |
| `CCILocalTransactionManager(JConnection c)`  |
    - ### Uses of [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") in [com.jbase.jremote.jca.spring](/39268-spring/com_jbase_jremote_jca_spring_package-summary)


Methods in [com.jbase.jremote.jca.spring](/39268-spring/com_jbase_jremote_jca_spring_package-summary) that return [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `static JConnection` | JConnectionFactoryUtils.`getConnection(JConnectionFactory cf)`<br>Obtain a JConnection from the given JConnectionFactory.<br> |
| `JConnection` | ConnectionHolder.`getJConnection()`  |



Methods in [com.jbase.jremote.jca.spring](/39268-spring/com_jbase_jremote_jca_spring_package-summary) with parameters of type [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `static boolean` | JConnectionFactoryUtils.`isConnectionTransactional(JConnection con,<br>                         JConnectionFactory cf)`<br>Determine whether the given JRemote Connection is transactional, that is,<br> bound to the current thread by Spring's transaction facilities.<br> |
| `static void` | JConnectionFactoryUtils.`releaseConnection(JConnection con,<br>                 JConnectionFactory cf)`<br>Close the given JConnection, obtained from the given JConnectionFactory,<br> if it is not managed externally (that is, not bound to the thread).<br> |



Constructors in [com.jbase.jremote.jca.spring](/39268-spring/com_jbase_jremote_jca_spring_package-summary) with parameters of type [JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote") | Constructor and Description |
| --- |
| `ConnectionHolder(JConnection connection)`  |

Skip navigation links

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


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
