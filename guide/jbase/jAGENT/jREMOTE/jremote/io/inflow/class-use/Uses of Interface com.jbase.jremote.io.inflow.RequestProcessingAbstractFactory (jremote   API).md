# Uses of Interface com.jbase.jremote.io.inflow.RequestProcessingAbstractFactory (jremote   API)

**Created At:** 9/25/2017 11:49:21 AM  
**Updated At:** 2/15/2018 8:02:20 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jremote.io.inflow.RequestProcessingAbstractFactory (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)
- [Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.jremote.io.inflow")
- Use
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jremote/io/inflow/class-use//39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestProcessingAbstractFactory)
- [No Frames](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestProcessingAbstractFactory)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.jremote.io.inflow.RequestProcessingAbstractFactory

- Packages that use [RequestProcessingAbstractFactory](/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.jremote.io.inflow") | Package | Description |
| --- | --- |
| com.jbase.jremote.io.inflow |   |
| com.jbase.jremote.jca |   |
- - ### Uses of [RequestProcessingAbstractFactory](/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.io.inflow](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)


Constructors in [com.jbase.jremote.io.inflow](/39256-inflow/com_jbase_jremote_io_inflow_package-summary) with parameters of type [RequestProcessingAbstractFactory](/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.jremote.io.inflow") | Constructor and Description |
| --- |
| `RequestListenerService(RequestProcessingAbstractFactory requestProcessingFactory,<br>                      javax.resource.spi.XATerminator xaTerminator,<br>                      String host,<br>                      int port)`<br>Construct service that will not create new threads for client connections.<br> |
| `RequestListenerService(RequestProcessingAbstractFactory requestProcessingFactory,<br>                      javax.resource.spi.XATerminator xaTerminator,<br>                      javax.resource.spi.work.WorkManager workManager,<br>                      String host,<br>                      int port,<br>                      boolean threadPerConnection)`<br>Supply a work manager and optionally create a new thread to handle<br> each client connection.<br> |
    - ### Uses of [RequestProcessingAbstractFactory](/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.jremote.io.inflow") in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary)


Classes in [com.jbase.jremote.jca](/39258-jca/com_jbase_jremote_jca_package-summary) that implement [RequestProcessingAbstractFactory](/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.jremote.io.inflow") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `JRemoteRequestProcessingFactory`  |

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)
- [Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.jremote.io.inflow")
- Use
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jremote/io/inflow/class-use//39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestProcessingAbstractFactory)
- [No Frames](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestProcessingAbstractFactory)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
