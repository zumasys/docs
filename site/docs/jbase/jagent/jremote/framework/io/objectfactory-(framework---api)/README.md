# ObjectFactory (framework   API)

**Created At:** 9/25/2017 10:31:58 AM  
**Updated At:** 2/15/2018 8:02:34 AM  
**Original Doc:** [com_jbase_framework_io_ObjectFactory](https://docs.jbase.com/39220-io/com_jbase_framework_io_ObjectFactory)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ObjectFactory (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_ObjectFactory)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_NIOJBaseObjectWriter "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_OKResponse "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_ObjectFactory)
- [No Frames](/39220-io/com_jbase_framework_io_ObjectFactory)


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

com.jbase.framework.io

## Class ObjectFactory

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.framework.io.ObjectFactory


- * * *


```
public abstract class ObjectFactory
extends Object
```

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `ObjectFactory()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Abstract Methods](javascript:show%284%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `protected JBaseSerializable` | `createGenericObjects(int objectType)`<br>Creates any generic (i.e common to all framework clients) objects.<br> |
| `protected abstract JBaseSerializable` | `createObject(int objectType)`<br>Create JBaseSerializable object from the supplied object type.<br> |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### ObjectFactory

```
public ObjectFactory()
```


    - ### Method Detail

        - #### createObject

```
protected abstract JBaseSerializable createObject(int objectType)
                                           throws UnknownTypeException
```

Create JBaseSerializable object from the supplied object type.
Parameters:`objectType` - type identifierReturns:an instance of a class implementing JBaseSerializableThrows:`UnknownTypeException`


        - #### createGenericObjects

```
protected JBaseSerializable createGenericObjects(int objectType)
                                          throws UnknownTypeException
```

Creates any generic (i.e common to all framework clients) objects. If the<br> object is not generic calls the client specific createObject method.
Parameters:`objectType` - type identifierReturns:an instance of a class implementing JBaseSerializableThrows:`UnknownTypeException`

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_ObjectFactory)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_NIOJBaseObjectWriter "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_OKResponse "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_ObjectFactory)
- [No Frames](/39220-io/com_jbase_framework_io_ObjectFactory)


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
