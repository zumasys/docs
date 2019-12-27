# OKResponse (framework   API)

**Created At:** 9/25/2017 10:32:05 AM  
**Updated At:** 2/15/2018 8:02:36 AM  
**Original Doc:** [com_jbase_framework_io_OKResponse](https://docs.jbase.com/39220-io/com_jbase_framework_io_OKResponse)  
**Original ID:** 277786  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="OKResponse (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.framework.io-%28framework---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.framework.io.okresponse-%28framework---api%29)
- [Tree](./../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](./../objectfactory-%28framework---api%29 "class in com.jbase.framework.io")
- [Next Class](./../prefixbytebuffer-%28framework---api%29 "class in com.jbase.framework.io")


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

com.jbase.framework.io

## Class OKResponse

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.framework.io.Response](./../response-%28framework---api%29 "class in com.jbase.framework.io")
    - - com.jbase.framework.io.OKResponse


- All Implemented Interfaces:[JBaseSerializable](./../jbaseserializable-%28framework---api%29 "interface in com.jbase.framework.io")
* * *


```
public class OKResponse
extends Response
```

- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.framework.io.[JBaseSerializable](./../jbaseserializable-%28framework---api%29 "interface in com.jbase.framework.io")
`JBaseSerializable.TYPE`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `OKResponse()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer,<br>           int version)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### OKResponse

```
public OKResponse()
```


    - ### Method Detail

        - #### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Throws:`IOException`


        - #### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Throws:`IOException``ClassNotFoundException`


        - #### getType

```
public int getType()
```
Returns:type id of the objects, used during the serialization


        - #### getVersion

```
public int getVersion()
```

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.framework.io-%28framework---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.framework.io.okresponse-%28framework---api%29)
- [Tree](./../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](./../objectfactory-%28framework---api%29 "class in com.jbase.framework.io")
- [Next Class](./../prefixbytebuffer-%28framework---api%29 "class in com.jbase.framework.io")


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
