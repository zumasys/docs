# Uses of Interface com.jbase.jremote.JConnection (jremote   API)

**Created At:** 9/25/2017 11:38:48 AM  
**Updated At:** 2/15/2018 8:02:57 AM  
**Original Doc:** [com_jbase_jremote_class-use_JConnection](https://docs.jbase.com/39249-class-use/com_jbase_jremote_class-use_JConnection)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jremote.JConnection (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../../../../jremote-api)
- [Class](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote")
- Use
- [Tree](./../../com.jbase.jremote-class-hierarchy)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.jremote.JConnection

- Packages that use [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") | Package | Description |
| --- | --- |
| com.jbase.jremote |   |
| com.jbase.jremote.io |   |
| com.jbase.jremote.jca |   |
| com.jbase.jremote.jca.cci |   |
| com.jbase.jremote.jca.spring |   |
- - ### Uses of [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote](./../../../../jremote-api)


Subinterfaces of [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote](./../../../../jremote-api) | Modifier and Type | Interface and Description |
| --- | --- |
| `interface` | `JXAConnection`  |



Methods in [com.jbase.jremote](./../../../../jremote-api) that return [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
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



Methods in [com.jbase.jremote](./../../../../jremote-api) with parameters of type [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | JConnectionCallbackHandler.`initialise(Subject subject,<br>          JConnection connection)`<br>Initialise a connection for the supplied Subject.<br> |
| `boolean` | JConnectionCallbackHandler.`reinitialise(Subject subject,<br>            JConnection connection)`<br>The Subject intends to use a connection that was previously <br> initialised for another Subject.<br> |
| `boolean` | JConnectionCallbackHandler.`reuse(Subject subject,<br>     JConnection connection)`<br>The Subject is reusing the supplied connection.<br> |
    - ### Uses of [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-%28jremote---api%29)


Classes in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-%28jremote---api%29) that implement [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `JConnectionImpl`<br>The connection to a remote jBASE instance implemented<br> using a IO messages over an abstract connection.<br> |
    - ### Uses of [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29)


Classes in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29) that implement [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `WrappedJConnection`<br>Implementation of a connection to a remote jBASE instance.<br> |



Methods in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29) that return [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
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



Methods in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29) with parameters of type [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | WrappedJConnection.`setConnection(JConnection connection)`  |



Constructors in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29) with parameters of type [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") | Constructor and Description |
| --- |
| `JRemoteManagedConnection(JConnection connection,<br>                        Subject subject)`<br>Constructor for JRemoteManagedConnection<br> |
    - ### Uses of [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote.jca.cci](./../../jca/cci/com.jbase.jremote.jca.cci-%28jremote---api%29)


Methods in [com.jbase.jremote.jca.cci](./../../jca/cci/com.jbase.jremote.jca.cci-%28jremote---api%29) that return [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `protected JConnection` | CCIJConnection.`getJConnection()`  |



Constructors in [com.jbase.jremote.jca.cci](./../../jca/cci/com.jbase.jremote.jca.cci-%28jremote---api%29) with parameters of type [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") | Constructor and Description |
| --- |
| `CCIJConnection(JConnection c)`  |
| `CCILocalTransactionManager(JConnection c)`  |
    - ### Uses of [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote.jca.spring](./../../jca/spring/com.jbase.jremote.jca.spring-%28jremote-api%29)


Methods in [com.jbase.jremote.jca.spring](./../../jca/spring/com.jbase.jremote.jca.spring-%28jremote-api%29) that return [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `static JConnection` | JConnectionFactoryUtils.`getConnection(JConnectionFactory cf)`<br>Obtain a JConnection from the given JConnectionFactory.<br> |
| `JConnection` | ConnectionHolder.`getJConnection()`  |



Methods in [com.jbase.jremote.jca.spring](./../../jca/spring/com.jbase.jremote.jca.spring-%28jremote-api%29) with parameters of type [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `static boolean` | JConnectionFactoryUtils.`isConnectionTransactional(JConnection con,<br>                         JConnectionFactory cf)`<br>Determine whether the given JRemote Connection is transactional, that is,<br> bound to the current thread by Spring's transaction facilities.<br> |
| `static void` | JConnectionFactoryUtils.`releaseConnection(JConnection con,<br>                 JConnectionFactory cf)`<br>Close the given JConnection, obtained from the given JConnectionFactory,<br> if it is not managed externally (that is, not bound to the thread).<br> |



Constructors in [com.jbase.jremote.jca.spring](./../../jca/spring/com.jbase.jremote.jca.spring-%28jremote-api%29) with parameters of type [JConnection](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote") | Constructor and Description |
| --- |
| `ConnectionHolder(JConnection connection)`  |

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../../../../jremote-api)
- [Class](./../../jconnection-%28jremote-api%29 "interface in com.jbase.jremote")
- Use
- [Tree](./../../com.jbase.jremote-class-hierarchy)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
