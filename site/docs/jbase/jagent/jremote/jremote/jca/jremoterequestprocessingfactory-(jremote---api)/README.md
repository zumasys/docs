# JRemoteRequestProcessingFactory (jremote   API)

**Created At:** 9/25/2017 12:05:48 PM  
**Updated At:** 2/15/2018 8:02:55 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JRemoteRequestProcessingFactory (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39258-jca/com_jbase_jremote_jca_package-summary)
- Class
- [Use](/39261-class-use/com_jbase_jremote_jca_class-use_JRemoteRequestProcessingFactory)
- [Tree](/39258-jca/com_jbase_jremote_jca_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionMetaData "class in com.jbase.jremote.jca")
- [Next Class](/39258-jca/com_jbase_jremote_jca_jremoteresourceadapter "class in com.jbase.jremote.jca")


- [Frames](../../../../index.html?com/jbase/jremote/jca//39258-jca/com_jbase_jremote_jca_JRemoteRequestProcessingFactory)
- [No Frames](/39258-jca/com_jbase_jremote_jca_JRemoteRequestProcessingFactory)


- [All Classes](../../../../allclasses-noframe.html)


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

com.jbase.jremote.jca

## Class JRemoteRequestProcessingFactory

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.JRemoteRequestProcessingFactory


- All Implemented Interfaces:[RequestProcessingAbstractFactory](/39256-inflow/com_jbase_jremote_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.jremote.io.inflow")
* * *


```
public class JRemoteRequestProcessingFactory
extends Object
implements RequestProcessingAbstractFactory
```

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `JRemoteRequestProcessingFactory(List<EndpointAdapter> eps)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `RequestHandler` | `createRequestHandler(RequestListenerService rls)`<br>In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.<br> |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### JRemoteRequestProcessingFactory

```
public JRemoteRequestProcessingFactory(List<EndpointAdapter> eps)
```


    - ### Method Detail

        - #### createRequestHandler

```
public RequestHandler createRequestHandler(RequestListenerService rls)
```

Description copied from interface: `RequestProcessingAbstractFactory`

In ThreadPerConnection mode this method will be called by<br> RequestListenerService when new connection is opened.  This creates<br> one RequestHandler for each connection.
Specified by:`createRequestHandler` in interface `RequestProcessingAbstractFactory`Returns:RequestHandler instance

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39258-jca/com_jbase_jremote_jca_package-summary)
- Class
- [Use](/39261-class-use/com_jbase_jremote_jca_class-use_JRemoteRequestProcessingFactory)
- [Tree](/39258-jca/com_jbase_jremote_jca_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionMetaData "class in com.jbase.jremote.jca")
- [Next Class](/39258-jca/com_jbase_jremote_jca_jremoteresourceadapter "class in com.jbase.jremote.jca")


- [Frames](../../../../index.html?com/jbase/jremote/jca//39258-jca/com_jbase_jremote_jca_JRemoteRequestProcessingFactory)
- [No Frames](/39258-jca/com_jbase_jremote_jca_JRemoteRequestProcessingFactory)


- [All Classes](../../../../allclasses-noframe.html)


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
