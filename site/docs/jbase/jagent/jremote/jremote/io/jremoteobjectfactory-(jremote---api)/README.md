# JRemoteObjectFactory (jremote   API)

**Created At:** 9/25/2017 11:52:27 AM  
**Updated At:** 2/15/2018 8:02:15 AM  
**Original Doc:** [com_jbase_jremote_io_JRemoteObjectFactory](https://docs.jbase.com/39250-io/com_jbase_jremote_io_JRemoteObjectFactory)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JRemoteObjectFactory (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.io.jremoteobjectfactory-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](./../jfileimpl-%28jremote-api%29 "class in com.jbase.jremote.io")
- [Next Class](./. "interface in com.jbase.jremote.io")


- [Frames](./.)
- [No Frames](./.)


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

com.jbase.jremote.io

## Class JRemoteObjectFactory

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jremote.io.ObjectFactory](./../objectfactory-%28jremote---api%29 "class in com.jbase.jremote.io")
    - - com.jbase.jremote.io.JRemoteObjectFactory


- * * *


```
public class JRemoteObjectFactory
extends ObjectFactory
```

Creates objects received from the jbase\_agent server.

- - ### Nested Class Summary


Nested Classes | Modifier and Type | Class and Description |
| --- | --- |
| `static interface` | `JRemoteObjectFactory.TYPE`  |


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `JRemoteObjectFactory()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `protected JBaseSerializable` | `createObject(int objectType)`<br>Create JBaseSerializable object from the supplied object type.<br> |


        - ### Methods inherited from class com.jbase.jremote.io.[ObjectFactory](./../objectfactory-%28jremote---api%29 "class in com.jbase.jremote.io")
`createGenericObjects`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### JRemoteObjectFactory

```
public JRemoteObjectFactory()
```


    - ### Method Detail

        - #### createObject

```
protected JBaseSerializable createObject(int objectType)
                                  throws UnknownTypeException
```

Description copied from class: `ObjectFactory`

Create JBaseSerializable object from the supplied object type.
Specified by:`createObject` in class `ObjectFactory`Parameters:`objectType` - type identifierReturns:an instance of a class implementing JBaseSerializableThrows:`UnknownTypeException`

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.io.jremoteobjectfactory-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](./../jfileimpl-%28jremote-api%29 "class in com.jbase.jremote.io")
- [Next Class](./. "interface in com.jbase.jremote.io")


- [Frames](./.)
- [No Frames](./.)


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
