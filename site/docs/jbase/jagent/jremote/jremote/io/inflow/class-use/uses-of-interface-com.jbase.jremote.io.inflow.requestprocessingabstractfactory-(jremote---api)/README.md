# Uses of Interface com.jbase.jremote.io.inflow.RequestProcessingAbstractFactory (jremote   API)

**Created At:** 9/25/2017 11:49:21 AM  
**Updated At:** 2/15/2018 8:02:20 AM  
**Original Doc:** [com_jbase_jremote_io_inflow_class-use_RequestProcessingAbstractFactory](https://docs.jbase.com/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestProcessingAbstractFactory)  
**Original ID:** 278137  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jremote.io.inflow.RequestProcessingAbstractFactory (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](./../../com.jbase.jremote.io.inflow-%28jremote---api%29)
- [Class](./../../requestprocessingabstractfactory-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow")
- Use
- [Tree](./../../com.jbase.jremote.io.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.jremote.io.inflow.RequestProcessingAbstractFactory

- Packages that use [RequestProcessingAbstractFactory](./../../requestprocessingabstractfactory-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") | Package | Description |
| --- | --- |
| com.jbase.jremote.io.inflow |   |
| com.jbase.jremote.jca |   |
- - ### Uses of [RequestProcessingAbstractFactory](./../../requestprocessingabstractfactory-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.io.inflow](./../../com.jbase.jremote.io.inflow-%28jremote---api%29)


Constructors in [com.jbase.jremote.io.inflow](./../../com.jbase.jremote.io.inflow-%28jremote---api%29) with parameters of type [RequestProcessingAbstractFactory](./../../requestprocessingabstractfactory-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") | Constructor and Description |
| --- |
| `RequestListenerService(RequestProcessingAbstractFactory requestProcessingFactory,<br>                      javax.resource.spi.XATerminator xaTerminator,<br>                      String host,<br>                      int port)`<br>Construct service that will not create new threads for client connections.<br> |
| `RequestListenerService(RequestProcessingAbstractFactory requestProcessingFactory,<br>                      javax.resource.spi.XATerminator xaTerminator,<br>                      javax.resource.spi.work.WorkManager workManager,<br>                      String host,<br>                      int port,<br>                      boolean threadPerConnection)`<br>Supply a work manager and optionally create a new thread to handle<br> each client connection.<br> |
    - ### Uses of [RequestProcessingAbstractFactory](./../../requestprocessingabstractfactory-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca](./../../../../jca/com.jbase.jremote.jca-%28jremote---api%29)


Classes in [com.jbase.jremote.jca](./../../../../jca/com.jbase.jremote.jca-%28jremote---api%29) that implement [RequestProcessingAbstractFactory](./../../requestprocessingabstractfactory-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `JRemoteRequestProcessingFactory`  |

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](./../../com.jbase.jremote.io.inflow-%28jremote---api%29)
- [Class](./../../requestprocessingabstractfactory-%28jremote---api%29 "interface in com.jbase.jremote.io.inflow")
- Use
- [Tree](./../../com.jbase.jremote.io.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
