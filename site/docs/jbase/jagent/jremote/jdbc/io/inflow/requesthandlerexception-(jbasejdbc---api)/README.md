# RequestHandlerException (jbasejdbc   API)

**Created At:** 9/25/2017 10:51:32 AM  
**Updated At:** 2/15/2018 8:02:51 AM  
**Original Doc:** [com_jbase_jdbc_io_inflow_RequestHandlerException](https://docs.jbase.com/39238-inflow/com_jbase_jdbc_io_inflow_RequestHandlerException)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="RequestHandlerException (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39238-inflow/com_jbase_jdbc_io_inflow_package-summary)
- Class
- [Use](/39239-class-use/com_jbase_jdbc_io_inflow_class-use_RequestHandlerException)
- [Tree](/39238-inflow/com_jbase_jdbc_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39238-inflow/com_jbase_jdbc_io_inflow_RequestHandler "interface in com.jbase.jdbc.io.inflow")
- [Next Class](/39238-inflow/com_jbase_jdbc_io_inflow_RequestListenerService "class in com.jbase.jdbc.io.inflow")


- [Frames](../../../../../index.html?com/jbase/jdbc/io/inflow//39238-inflow/com_jbase_jdbc_io_inflow_RequestHandlerException)
- [No Frames](/39238-inflow/com_jbase_jdbc_io_inflow_RequestHandlerException)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

com.jbase.jdbc.io.inflow

## Class RequestHandlerException

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [java.lang.Throwable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Throwable.html?is-external=true "class or interface in java.lang")
    - - [java.lang.Exception](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Exception.html?is-external=true "class or interface in java.lang")
        - - com.jbase.jdbc.io.inflow.RequestHandlerException


- All Implemented Interfaces:[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io")
* * *


```
public class RequestHandlerException
extends Exception
```

Exception from RequestHandler.
Author:aphetheanSee Also:[Serialized Form](../../../../../serialized-form.html#com.jbase.jdbc.io.inflow.RequestHandlerException)

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `RequestHandlerException(Exception e)`  |
| `RequestHandlerException(String error)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `Exception` | `getNestedException()`  |


        - ### Methods inherited from class java.lang.[Throwable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Throwable.html?is-external=true "class or interface in java.lang")
`addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

- - ### Constructor Detail

        - #### RequestHandlerException

```
public RequestHandlerException(Exception e)
```


        - #### RequestHandlerException

```
public RequestHandlerException(String error)
```


    - ### Method Detail

        - #### getNestedException

```
public Exception getNestedException()
```

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39238-inflow/com_jbase_jdbc_io_inflow_package-summary)
- Class
- [Use](/39239-class-use/com_jbase_jdbc_io_inflow_class-use_RequestHandlerException)
- [Tree](/39238-inflow/com_jbase_jdbc_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39238-inflow/com_jbase_jdbc_io_inflow_RequestHandler "interface in com.jbase.jdbc.io.inflow")
- [Next Class](/39238-inflow/com_jbase_jdbc_io_inflow_RequestListenerService "class in com.jbase.jdbc.io.inflow")


- [Frames](../../../../../index.html?com/jbase/jdbc/io/inflow//39238-inflow/com_jbase_jdbc_io_inflow_RequestHandlerException)
- [No Frames](/39238-inflow/com_jbase_jdbc_io_inflow_RequestHandlerException)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
