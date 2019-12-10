# EndpointAdapter (jremote   API)

**Created At:** 9/25/2017 12:00:37 PM  
**Updated At:** 2/15/2018 8:02:26 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="EndpointAdapter (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_EndpointAdapter)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWorkListener "class in com.jbase.jremote.jca.inflow")
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapterMBean "interface in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapter)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapter)


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

com.jbase.jremote.jca.inflow

## Class EndpointAdapter

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.inflow.EndpointAdapter


- All Implemented Interfaces:[EndpointAdapterMBean](/39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapterMBean "interface in com.jbase.jremote.jca.inflow")
* * *


```
public class EndpointAdapter
extends Object
implements EndpointAdapterMBean
```

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `EndpointAdapter(javax.resource.spi.endpoint.MessageEndpointFactory meFactory,<br>               javax.resource.spi.ActivationSpec aSpec)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getHandler()`  |
| `long` | `getTotalActivations()`  |
| `byte[]` | `process(String activation,<br>       byte[] body)`<br>Process the request or return null if this Endpoint is not<br> able to process the request.<br> |
| `String` | `toString()`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

- - ### Constructor Detail

        - #### EndpointAdapter

```
public EndpointAdapter(javax.resource.spi.endpoint.MessageEndpointFactory meFactory,
                       javax.resource.spi.ActivationSpec aSpec)
```


    - ### Method Detail

        - #### process

```
public byte[] process(String activation,
                      byte[] body)
```

Process the request or return null if this Endpoint is not<br> able to process the request.
Parameters:`activation` - `body` - Returns:String result


        - #### toString

```
public String toString()
```
Overrides:`toString` in class `Object`


        - #### getHandler

```
public String getHandler()
```


        - #### getTotalActivations

```
public long getTotalActivations()
```
Specified by:`getTotalActivations` in interface `EndpointAdapterMBean`

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_EndpointAdapter)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWorkListener "class in com.jbase.jremote.jca.inflow")
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapterMBean "interface in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapter)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapter)


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
