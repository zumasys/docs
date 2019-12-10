# JRemoteActivationSpec (jremote   API)

**Created At:** 9/25/2017 12:01:12 PM  
**Updated At:** 2/15/2018 8:02:44 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JRemoteActivationSpec (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_JRemoteActivationSpec)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39262-inflow/com_jbase_jremote_jca_inflow_InboundRequestHandler "class in com.jbase.jremote.jca.inflow")
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_JRemoteMessageListener "interface in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_JRemoteActivationSpec)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_JRemoteActivationSpec)


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

## Class JRemoteActivationSpec

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.inflow.JRemoteActivationSpec


- All Implemented Interfaces:[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"), javax.resource.spi.ActivationSpec, javax.resource.spi.ResourceAdapterAssociation
* * *


```
public class JRemoteActivationSpec
extends Object
implements javax.resource.spi.ActivationSpec, Serializable
```
See Also:[Serialized Form](../../../../../serialized-form.html#com.jbase.jremote.jca.inflow.JRemoteActivationSpec)

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `JRemoteActivationSpec()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getHandler()`  |
| `javax.resource.spi.ResourceAdapter` | `getResourceAdapter()`  |
| `void` | `setHandler(String handler)`  |
| `void` | `setResourceAdapter(javax.resource.spi.ResourceAdapter ra)`  |
| `void` | `validate()`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### JRemoteActivationSpec

```
public JRemoteActivationSpec()
```


    - ### Method Detail

        - #### validate

```
public void validate()
              throws javax.resource.spi.InvalidPropertyException
```
Specified by:`validate` in interface `javax.resource.spi.ActivationSpec`Throws:`javax.resource.spi.InvalidPropertyException`


        - #### getResourceAdapter

```
public javax.resource.spi.ResourceAdapter getResourceAdapter()
```
Specified by:`getResourceAdapter` in interface `javax.resource.spi.ResourceAdapterAssociation`


        - #### setResourceAdapter

```
public void setResourceAdapter(javax.resource.spi.ResourceAdapter ra)
                        throws javax.resource.ResourceException
```
Specified by:`setResourceAdapter` in interface `javax.resource.spi.ResourceAdapterAssociation`Throws:`javax.resource.ResourceException`


        - #### getHandler

```
public String getHandler()
```


        - #### setHandler

```
public void setHandler(String handler)
```

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_JRemoteActivationSpec)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39262-inflow/com_jbase_jremote_jca_inflow_InboundRequestHandler "class in com.jbase.jremote.jca.inflow")
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_JRemoteMessageListener "interface in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_JRemoteActivationSpec)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_JRemoteActivationSpec)


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
