# Uses of Class com.jbase.jdbc.io.inflow.RequestListenerService (jbasejdbc   API)

**Created At:** 9/25/2017 10:50:07 AM  
**Updated At:** 2/15/2018 8:02:51 AM  
**Original Doc:** [com_jbase_jdbc_io_inflow_class-use_RequestListenerService](https://docs.jbase.com/39239-class-use/com_jbase_jdbc_io_inflow_class-use_RequestListenerService)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jdbc.io.inflow.RequestListenerService (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](./../../com.jbase.jdbc.io.inflow-%28jbasejdbc---api%29)
- [Class](./../../requestlistenerservice-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io.inflow")
- Use
- [Tree](./../../com.jbase.jdbc.io.inflow-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Class
com.jbase.jdbc.io.inflow.RequestListenerService

- Packages that use [RequestListenerService](./../../requestlistenerservice-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io.inflow") | Package | Description |
| --- | --- |
| com.jbase.jdbc.io.inflow |   |
- - ### Uses of [RequestListenerService](./../../requestlistenerservice-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io.inflow") in [com.jbase.jdbc.io.inflow](./../../com.jbase.jdbc.io.inflow-%28jbasejdbc---api%29)


Methods in [com.jbase.jdbc.io.inflow](./../../com.jbase.jdbc.io.inflow-%28jbasejdbc---api%29) that return [RequestListenerService](./../../requestlistenerservice-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `RequestListenerService` | RequestHandler.`getListenerService()`<br>Return the listener service.<br> |



Methods in [com.jbase.jdbc.io.inflow](./../../com.jbase.jdbc.io.inflow-%28jbasejdbc---api%29) with parameters of type [RequestListenerService](./../../requestlistenerservice-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io.inflow") | Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | RequestProcessingAbstractFactory.`createRequestHandler(RequestListenerService rls)`<br>In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.<br> |



Constructors in [com.jbase.jdbc.io.inflow](./../../com.jbase.jdbc.io.inflow-%28jbasejdbc---api%29) with parameters of type [RequestListenerService](./../../requestlistenerservice-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io.inflow") | Constructor and Description |
| --- |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s)`  |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s,<br>                     int socketTimeout)`<br>Construct a request listener that will block for the supplied<br> number of milliseconds.<br> |

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](./../../com.jbase.jdbc.io.inflow-%28jbasejdbc---api%29)
- [Class](./../../requestlistenerservice-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io.inflow")
- Use
- [Tree](./../../com.jbase.jdbc.io.inflow-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
