# Uses of Interface com.jbase.framework.io.inflow.RequestProcessingAbstractFactory (framework   API)

**Created At:** 9/25/2017 10:29:01 AM  
**Updated At:** 2/15/2018 8:02:43 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.framework.io.inflow.RequestProcessingAbstractFactory (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](/39226-inflow/com_jbase_framework_io_inflow_package-summary)
- [Class](/39226-inflow/com_jbase_framework_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.framework.io.inflow")
- Use
- [Tree](/39226-inflow/com_jbase_framework_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/framework/io/inflow/class-use//39227-class-use/com_jbase_framework_io_inflow_class-use_RequestProcessingAbstractFactory)
- [No Frames](/39227-class-use/com_jbase_framework_io_inflow_class-use_RequestProcessingAbstractFactory)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.framework.io.inflow.RequestProcessingAbstractFactory

- Packages that use [RequestProcessingAbstractFactory](/39226-inflow/com_jbase_framework_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.framework.io.inflow") | Package | Description |
| --- | --- |
| com.jbase.framework.io.inflow |   |
- - ### Uses of [RequestProcessingAbstractFactory](/39226-inflow/com_jbase_framework_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.framework.io.inflow") in [com.jbase.framework.io.inflow](/39226-inflow/com_jbase_framework_io_inflow_package-summary)


Constructors in [com.jbase.framework.io.inflow](/39226-inflow/com_jbase_framework_io_inflow_package-summary) with parameters of type [RequestProcessingAbstractFactory](/39226-inflow/com_jbase_framework_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.framework.io.inflow") | Constructor and Description |
| --- |
| `RequestListenerService(RequestProcessingAbstractFactory requestProcessingFactory,<br>                      javax.resource.spi.XATerminator xaTerminator,<br>                      String host,<br>                      int port)`<br>Construct service that will not create new threads for client connections.<br> |
| `RequestListenerService(RequestProcessingAbstractFactory requestProcessingFactory,<br>                      javax.resource.spi.XATerminator xaTerminator,<br>                      javax.resource.spi.work.WorkManager workManager,<br>                      String host,<br>                      int port,<br>                      boolean threadPerConnection)`<br>Supply a work manager and optionally create a new thread to handle<br> each client connection.<br> |

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](/39226-inflow/com_jbase_framework_io_inflow_package-summary)
- [Class](/39226-inflow/com_jbase_framework_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.framework.io.inflow")
- Use
- [Tree](/39226-inflow/com_jbase_framework_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/framework/io/inflow/class-use//39227-class-use/com_jbase_framework_io_inflow_class-use_RequestProcessingAbstractFactory)
- [No Frames](/39227-class-use/com_jbase_framework_io_inflow_class-use_RequestProcessingAbstractFactory)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
