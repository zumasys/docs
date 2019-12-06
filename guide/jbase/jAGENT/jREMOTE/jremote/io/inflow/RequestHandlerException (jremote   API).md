# RequestHandlerException (jremote   API)

**Created At:** 9/25/2017 11:50:25 AM  
**Updated At:** 2/15/2018 8:02:47 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="RequestHandlerException (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)
- Class
- [Use](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestHandlerException)
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow")
- [Next Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService "class in com.jbase.jremote.io.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/io/inflow//39256-inflow/com_jbase_jremote_io_inflow_RequestHandlerException)
- [No Frames](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandlerException)


- [All Classes](../../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_top");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ========= END OF TOP NAVBAR ========= --><!-- ======== START OF CLASS DATA ======== -->
com.jbase.jremote.io.inflow

## Class RequestHandlerException

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [java.lang.Throwable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Throwable.html?is-external=true "class or interface in java.lang")
    - - [java.lang.Exception](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Exception.html?is-external=true "class or interface in java.lang")
        - - com.jbase.jremote.io.inflow.RequestHandlerException


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true" title="class or interface in java.io">Serializable</a></dd></dl>
* * *


```
public class RequestHandlerException
extends Exception
```

Exception from RequestHandler.
<dl><dt><span class="simpleTagLabel">Author:</span></dt>
<dd>aphethean</dd>
<dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../serialized-form.html#com.jbase.jremote.io.inflow.RequestHandlerException">Serialized Form</a></dd></dl>

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `RequestHandlerException(Exception e)`  |
| `RequestHandlerException(String error)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `Exception` | `getNestedException()`  |


        - <!--   -->
### Methods inherited from class java.lang.[Throwable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Throwable.html?is-external=true "class or interface in java.lang")
`addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### RequestHandlerException

```
public RequestHandlerException(Exception e)
```

<!--   -->
        - #### RequestHandlerException

```
public RequestHandlerException(String error)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getNestedException

```
public Exception getNestedException()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)
- Class
- [Use](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestHandlerException)
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandler "interface in com.jbase.jremote.io.inflow")
- [Next Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService "class in com.jbase.jremote.io.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/io/inflow//39256-inflow/com_jbase_jremote_io_inflow_RequestHandlerException)
- [No Frames](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandlerException)


- [All Classes](../../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_bottom");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ======== END OF BOTTOM NAVBAR ======= -->
<small>			<center>			<i>Copyright © 2017 jBASE, Inc.. All Rights Reserved.</i>		</center></small>
