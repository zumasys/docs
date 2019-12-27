# Uses of Interface com.jbase.jremote.jca.EventNotifier (jremote   API)

**Created At:** 9/25/2017 11:57:45 AM  
**Updated At:** 2/15/2018 8:02:23 AM  
**Original Doc:** [com_jbase_jremote_jca_class-use_EventNotifier](https://docs.jbase.com/39261-class-use/com_jbase_jremote_jca_class-use_EventNotifier)  
**Original ID:** 278207  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jremote.jca.EventNotifier (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.jremote.jca-%28jremote---api%29)
- [Class](./../../eventnotifier-%28jremote-api%29 "interface in com.jbase.jremote.jca")
- Use
- [Tree](./../../com.jbase.jremote.jca-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.jremote.jca.EventNotifier

- Packages that use [EventNotifier](./../../eventnotifier-%28jremote-api%29 "interface in com.jbase.jremote.jca") | Package | Description |
| --- | --- |
| com.jbase.jremote.jca |   |
- - ### Uses of [EventNotifier](./../../eventnotifier-%28jremote-api%29 "interface in com.jbase.jremote.jca") in [com.jbase.jremote.jca](./../../com.jbase.jremote.jca-%28jremote---api%29)


Fields in [com.jbase.jremote.jca](./../../com.jbase.jremote.jca-%28jremote---api%29) declared as [EventNotifier](./../../eventnotifier-%28jremote-api%29 "interface in com.jbase.jremote.jca") | Modifier and Type | Field and Description |
| --- | --- |
| `static EventNotifier` | EventNotifier.`CONNECTION_CLOSE_NOTIFIER`  |
| `static EventNotifier` | EventNotifier.`CONNECTION_ERROR_NOTIFIER`  |
| `static EventNotifier` | EventNotifier.`LOCALTRANS_COMMITTED_NOTIFIER`  |
| `static EventNotifier` | EventNotifier.`LOCALTRANS_ROLLEDBACK_NOTIFIER`  |
| `static EventNotifier` | EventNotifier.`LOCALTRANS_STARTED_NOTIFIER`  |



Methods in [com.jbase.jremote.jca](./../../com.jbase.jremote.jca-%28jremote---api%29) with parameters of type [EventNotifier](./../../eventnotifier-%28jremote-api%29 "interface in com.jbase.jremote.jca") | Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | JRemoteManagedConnection.`notify(EventNotifier notifier,<br>      javax.resource.spi.ConnectionEvent event)`  |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.jremote.jca-%28jremote---api%29)
- [Class](./../../eventnotifier-%28jremote-api%29 "interface in com.jbase.jremote.jca")
- Use
- [Tree](./../../com.jbase.jremote.jca-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
