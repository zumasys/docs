# InboundObjectFactory (jremote   API)

**Created At:** 9/25/2017 12:00:58 PM  
**Updated At:** 2/15/2018 8:02:27 AM  
**Original Doc:** [com_jbase_jremote_jca_inflow_InboundObjectFactory](https://docs.jbase.com/39262-inflow/com_jbase_jremote_jca_inflow_InboundObjectFactory)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="InboundObjectFactory (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca.inflow-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.jca.inflow.inboundobjectfactory-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.jca.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../endpointmbean-%28jremote---api%29 "interface in com.jbase.jremote.jca.inflow")
- [Next Class](./../inboundrequesthandler-%28jremote---api%29 "class in com.jbase.jremote.jca.inflow")


- [Frames](./.)
- [No Frames](./.)


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

## Class InboundObjectFactory

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jremote.io.ObjectFactory](./../../../io/objectfactory-%28jremote---api%29 "class in com.jbase.jremote.io")
    - - com.jbase.jremote.jca.inflow.InboundObjectFactory


- * * *


```
public class InboundObjectFactory
extends ObjectFactory
```

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `InboundObjectFactory()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `JBaseSerializable` | `createObject(int type)`<br>Create JBaseSerializable object from the supplied object type.<br> |


        - ### Methods inherited from class com.jbase.jremote.io.[ObjectFactory](./../../../io/objectfactory-%28jremote---api%29 "class in com.jbase.jremote.io")
`createGenericObjects`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### InboundObjectFactory

```
public InboundObjectFactory()
```


    - ### Method Detail

        - #### createObject

```
public JBaseSerializable createObject(int type)
                               throws UnknownTypeException
```

Description copied from class: `ObjectFactory`

Create JBaseSerializable object from the supplied object type.
Specified by:`createObject` in class `ObjectFactory`Parameters:`type` - type identifierReturns:an instance of a class implementing JBaseSerializableThrows:`UnknownTypeException`

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca.inflow-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.jca.inflow.inboundobjectfactory-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.jca.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../endpointmbean-%28jremote---api%29 "interface in com.jbase.jremote.jca.inflow")
- [Next Class](./../inboundrequesthandler-%28jremote---api%29 "class in com.jbase.jremote.jca.inflow")


- [Frames](./.)
- [No Frames](./.)


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
