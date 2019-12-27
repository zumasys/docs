# Uses of Interface com.jbase.jremote.JConnectionCallbackHandler (jremote   API)

**Created At:** 9/25/2017 11:38:54 AM  
**Updated At:** 2/15/2018 8:02:57 AM  
**Original Doc:** [com_jbase_jremote_class-use_JConnectionCallbackHandler](https://docs.jbase.com/39249-class-use/com_jbase_jremote_class-use_JConnectionCallbackHandler)  
**Original ID:** 278049  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jremote.JConnectionCallbackHandler (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../../../../jremote-api)
- [Class](./../../jconnectioncallbackhandler-%28jremote-api%29 "interface in com.jbase.jremote")
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
com.jbase.jremote.JConnectionCallbackHandler

- Packages that use [JConnectionCallbackHandler](./../../jconnectioncallbackhandler-%28jremote-api%29 "interface in com.jbase.jremote") | Package | Description |
| --- | --- |
| com.jbase.jremote |   |
| com.jbase.jremote.jca |   |
- - ### Uses of [JConnectionCallbackHandler](./../../jconnectioncallbackhandler-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote](./../../../../jremote-api)


Methods in [com.jbase.jremote](./../../../../jremote-api) with parameters of type [JConnectionCallbackHandler](./../../jconnectioncallbackhandler-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JConnection` | JConnectionFactory.`getConnection(JConnectionCallbackHandler handler)`<br>Get a connection to a remote jBASE instance, in a managed environment<br> the callback handler provides ancillary connection initialisation.<br> |
| `JConnection` | DefaultJConnectionFactory.`getConnection(JConnectionCallbackHandler handler)`  |
    - ### Uses of [JConnectionCallbackHandler](./../../jconnectioncallbackhandler-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29)


Methods in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29) that return [JConnectionCallbackHandler](./../../jconnectioncallbackhandler-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JConnectionCallbackHandler` | JRemoteConnectionRequestInfo.`getCallbackHandler()`  |



Methods in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29) with parameters of type [JConnectionCallbackHandler](./../../jconnectioncallbackhandler-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `protected javax.resource.spi.ManagedConnection` | JRemoteManagedConnectionFactory.`createConnection(Subject subject,<br>                JConnectionCallbackHandler callbackHandler)`  |
| `JConnection` | JRemoteConnectionFactoryImpl.`getConnection(JConnectionCallbackHandler handler)`  |
| `protected JConnection` | JRemoteConnectionFactoryImpl.`getConnection(String user,<br>             String account,<br>             String password,<br>             JConnectionCallbackHandler handler)`  |



Constructors in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29) with parameters of type [JConnectionCallbackHandler](./../../jconnectioncallbackhandler-%28jremote-api%29 "interface in com.jbase.jremote") | Constructor and Description |
| --- |
| `JRemoteConnectionRequestInfo(JConnectionCallbackHandler handler)`  |

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../../../../jremote-api)
- [Class](./../../jconnectioncallbackhandler-%28jremote-api%29 "interface in com.jbase.jremote")
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
