# Uses of Interface com.jbase.jremote.JConnectionFactory (jremote   API)

**Created At:** 9/25/2017 11:39:01 AM  
**Updated At:** 2/15/2018 8:02:48 AM  
**Original Doc:** [com_jbase_jremote_class-use_JConnectionFactory](https://docs.jbase.com/39249-class-use/com_jbase_jremote_class-use_JConnectionFactory)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jremote.JConnectionFactory (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../../../../jremote-api)
- [Class](./../../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote")
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
com.jbase.jremote.JConnectionFactory

- Packages that use [JConnectionFactory](./../../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote") | Package | Description |
| --- | --- |
| com.jbase.jremote |   |
| com.jbase.jremote.jca |   |
| com.jbase.jremote.jca.spring |   |
- - ### Uses of [JConnectionFactory](./../../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote](./../../../../jremote-api)


Classes in [com.jbase.jremote](./../../../../jremote-api) that implement [JConnectionFactory](./../../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `DefaultJConnectionFactory`<br>The default implementation of a JConnectionFactory that will<br> connect to a remote jBASE instance using a host and a port.<br> |
    - ### Uses of [JConnectionFactory](./../../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29)


Classes in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29) that implement [JConnectionFactory](./../../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `JRemoteConnectionFactoryImpl`<br>The concrete implementation of a remote jBASE connection factory.<br> |
    - ### Uses of [JConnectionFactory](./../../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote.jca.spring](./../../jca/spring/com.jbase.jremote.jca.spring-%28jremote-api%29)


Fields in [com.jbase.jremote.jca.spring](./../../jca/spring/com.jbase.jremote.jca.spring-%28jremote-api%29) declared as [JConnectionFactory](./../../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Field and Description |
| --- | --- |
| `protected JConnectionFactory` | JRemoteLocalTransactionManager.`_connectionFactory`  |



Methods in [com.jbase.jremote.jca.spring](./../../jca/spring/com.jbase.jremote.jca.spring-%28jremote-api%29) that return [JConnectionFactory](./../../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JConnectionFactory` | JRemoteLocalTransactionManager.`getConnectionFactory()`  |



Methods in [com.jbase.jremote.jca.spring](./../../jca/spring/com.jbase.jremote.jca.spring-%28jremote-api%29) with parameters of type [JConnectionFactory](./../../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `static JConnection` | JConnectionFactoryUtils.`getConnection(JConnectionFactory cf)`<br>Obtain a JConnection from the given JConnectionFactory.<br> |
| `static boolean` | JConnectionFactoryUtils.`isConnectionTransactional(JConnection con,<br>                         JConnectionFactory cf)`<br>Determine whether the given JRemote Connection is transactional, that is,<br> bound to the current thread by Spring's transaction facilities.<br> |
| `static void` | JConnectionFactoryUtils.`releaseConnection(JConnection con,<br>                 JConnectionFactory cf)`<br>Close the given JConnection, obtained from the given JConnectionFactory,<br> if it is not managed externally (that is, not bound to the thread).<br> |
| `void` | JRemoteLocalTransactionManager.`setConnectionFactory(JConnectionFactory xf)`  |

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../../../../jremote-api)
- [Class](./../../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote")
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
