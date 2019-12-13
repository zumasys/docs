# Uses of Interface com.jbase.jremote.JConnectionCallbackHandler (jremote   API)

**Created At:** 9/25/2017 11:38:54 AM  
**Updated At:** 2/15/2018 8:02:57 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jremote.JConnectionCallbackHandler (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

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


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.jremote.JConnectionCallbackHandler

- Packages that use [JConnectionCallbackHandler](/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler "interface in com.jbase.jremote") | Package | Description |
| --- | --- |
| com.jbase.jremote |   |
| com.jbase.jremote.jca |   |
- - ### Uses of [JConnectionCallbackHandler](/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler "interface in com.jbase.jremote") in [com.jbase.jremote](/30312-jagent/jremote-api)


Methods in [com.jbase.jremote](/30312-jagent/jremote-api) with parameters of type [JConnectionCallbackHandler](/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JConnection` | JConnectionFactory.`getConnection(JConnectionCallbackHandler handler)`<br>Get a connection to a remote jBASE instance, in a managed environment<br> the callback handler provides ancillary connection initialisation.<br> |
| `JConnection` | DefaultJConnectionFactory.`getConnection(JConnectionCallbackHandler handler)`  |
    - ### Uses of [JConnectionCallbackHandler](/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler "interface in com.jbase.jremote") in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary)


Methods in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary) that return [JConnectionCallbackHandler](/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JConnectionCallbackHandler` | JRemoteConnectionRequestInfo.`getCallbackHandler()`  |



Methods in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary) with parameters of type [JConnectionCallbackHandler](/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `protected javax.resource.spi.ManagedConnection` | JRemoteManagedConnectionFactory.`createConnection(Subject subject,<br>                JConnectionCallbackHandler callbackHandler)`  |
| `JConnection` | JRemoteConnectionFactoryImpl.`getConnection(JConnectionCallbackHandler handler)`  |
| `protected JConnection` | JRemoteConnectionFactoryImpl.`getConnection(String user,<br>             String account,<br>             String password,<br>             JConnectionCallbackHandler handler)`  |



Constructors in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary) with parameters of type [JConnectionCallbackHandler](/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler "interface in com.jbase.jremote") | Constructor and Description |
| --- |
| `JRemoteConnectionRequestInfo(JConnectionCallbackHandler handler)`  |

Skip navigation links

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


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
