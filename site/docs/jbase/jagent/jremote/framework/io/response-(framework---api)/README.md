# Response (framework   API)

**Created At:** 9/25/2017 10:32:43 AM  
**Updated At:** 2/15/2018 8:02:34 AM  
**Original Doc:** [com_jbase_framework_io_Response](https://docs.jbase.com/39220-io/com_jbase_framework_io_Response)  
**Original ID:** 277792  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Response (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.framework.io-%28framework---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.framework.io.response-%28framework---api%29)
- [Tree](./../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](./../prefixbytebuffer-%28framework---api%29 "class in com.jbase.framework.io")
- [Next Class](./../sqlerror-%28framework---api%29 "class in com.jbase.framework.io")


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

## Class Response

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.framework.io.Response


- All Implemented Interfaces:[JBaseSerializable](./../jbaseserializable-%28framework---api%29 "interface in com.jbase.framework.io")Direct Known Subclasses:[ErrorResponse](./. "class in com.jbase.framework.io"), [OKResponse](./. "class in com.jbase.framework.io")
* * *


```
public abstract class Response
extends Object
implements JBaseSerializable
```

Represents a response from jsqld.
Author:Peter KuchtaSee Also:[`ErrorResponse`](./. "class in com.jbase.framework.io")

- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.framework.io.[JBaseSerializable](./../jbaseserializable-%28framework---api%29 "interface in com.jbase.framework.io")
`JBaseSerializable.TYPE`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `Response()`  |


    - ### Method Summary

        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


        - ### Methods inherited from interface com.jbase.framework.io.[JBaseSerializable](./../jbaseserializable-%28framework---api%29 "interface in com.jbase.framework.io")
`getType, getVersion, readObject, writeObject`

- - ### Constructor Detail

        - #### Response

```
public Response()
```

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.framework.io-%28framework---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.framework.io.response-%28framework---api%29)
- [Tree](./../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](./../prefixbytebuffer-%28framework---api%29 "class in com.jbase.framework.io")
- [Next Class](./../sqlerror-%28framework---api%29 "class in com.jbase.framework.io")


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
