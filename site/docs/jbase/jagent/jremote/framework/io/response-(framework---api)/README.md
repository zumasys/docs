# Response (framework   API)

**Created At:** 9/25/2017 10:32:43 AM  
**Updated At:** 2/15/2018 8:02:34 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Response (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_Response)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_PrefixByteBuffer "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_SQLError "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_Response)
- [No Frames](/39220-io/com_jbase_framework_io_Response)


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


- All Implemented Interfaces:[JBaseSerializable](/39220-io/com_jbase_framework_io_JBaseSerializable "interface in com.jbase.framework.io")Direct Known Subclasses:[ErrorResponse](../../../../com/jbase/framework/io/Error/39220-io/com_jbase_framework_io_Response "class in com.jbase.framework.io"), [OKResponse](../../../../com/jbase/framework/io/OK/39220-io/com_jbase_framework_io_Response "class in com.jbase.framework.io")
* * *


```
public abstract class Response
extends Object
implements JBaseSerializable
```

Represents a response from jsqld.
Author:Peter KuchtaSee Also:[`ErrorResponse`](../../../../com/jbase/framework/io/Error/39220-io/com_jbase_framework_io_Response "class in com.jbase.framework.io")

- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.framework.io.[JBaseSerializable](/39220-io/com_jbase_framework_io_JBaseSerializable "interface in com.jbase.framework.io")
`JBaseSerializable.TYPE`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `Response()`  |


    - ### Method Summary

        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


        - ### Methods inherited from interface com.jbase.framework.io.[JBaseSerializable](/39220-io/com_jbase_framework_io_JBaseSerializable "interface in com.jbase.framework.io")
`getType, getVersion, readObject, writeObject`

- - ### Constructor Detail

        - #### Response

```
public Response()
```

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_Response)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_PrefixByteBuffer "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_SQLError "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_Response)
- [No Frames](/39220-io/com_jbase_framework_io_Response)


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
