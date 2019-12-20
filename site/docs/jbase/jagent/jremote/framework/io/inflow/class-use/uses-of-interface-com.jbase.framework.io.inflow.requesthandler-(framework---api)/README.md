# Uses of Interface com.jbase.framework.io.inflow.RequestHandler (framework   API)

**Created At:** 9/25/2017 10:28:23 AM  
**Updated At:** 2/15/2018 8:02:42 AM  
**Original Doc:** [com_jbase_framework_io_inflow_class-use_RequestHandler](https://docs.jbase.com/39227-class-use/com_jbase_framework_io_inflow_class-use_RequestHandler)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.framework.io.inflow.RequestHandler (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](/39226-inflow/com_jbase_framework_io_inflow_package-summary)
- [Class](/39226-inflow/com_jbase_framework_io_inflow_RequestHandler "interface in com.jbase.framework.io.inflow")
- Use
- [Tree](/39226-inflow/com_jbase_framework_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/framework/io/inflow/class-use//39227-class-use/com_jbase_framework_io_inflow_class-use_RequestHandler)
- [No Frames](/39227-class-use/com_jbase_framework_io_inflow_class-use_RequestHandler)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.framework.io.inflow.RequestHandler

- Packages that use [RequestHandler](/39226-inflow/com_jbase_framework_io_inflow_RequestHandler "interface in com.jbase.framework.io.inflow") | Package | Description |
| --- | --- |
| com.jbase.framework.io.inflow |   |
- - ### Uses of [RequestHandler](/39226-inflow/com_jbase_framework_io_inflow_RequestHandler "interface in com.jbase.framework.io.inflow") in [com.jbase.framework.io.inflow](/39226-inflow/com_jbase_framework_io_inflow_package-summary)


Methods in [com.jbase.framework.io.inflow](/39226-inflow/com_jbase_framework_io_inflow_package-summary) that return [RequestHandler](/39226-inflow/com_jbase_framework_io_inflow_RequestHandler "interface in com.jbase.framework.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | RequestProcessingAbstractFactory.`createRequestHandler(RequestListenerService rls)`<br>In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.<br> |
| `protected RequestHandler` | RequestListenerService.`getRequestHandler()`  |



Constructors in [com.jbase.framework.io.inflow](/39226-inflow/com_jbase_framework_io_inflow_package-summary) with parameters of type [RequestHandler](/39226-inflow/com_jbase_framework_io_inflow_RequestHandler "interface in com.jbase.framework.io.inflow") | Constructor and Description |
| --- |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s)`  |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s,<br>                     int socketTimeout)`<br>Construct a request listener that will block for the supplied<br> number of milliseconds.<br> |

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](/39226-inflow/com_jbase_framework_io_inflow_package-summary)
- [Class](/39226-inflow/com_jbase_framework_io_inflow_RequestHandler "interface in com.jbase.framework.io.inflow")
- Use
- [Tree](/39226-inflow/com_jbase_framework_io_inflow_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/framework/io/inflow/class-use//39227-class-use/com_jbase_framework_io_inflow_class-use_RequestHandler)
- [No Frames](/39227-class-use/com_jbase_framework_io_inflow_class-use_RequestHandler)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
