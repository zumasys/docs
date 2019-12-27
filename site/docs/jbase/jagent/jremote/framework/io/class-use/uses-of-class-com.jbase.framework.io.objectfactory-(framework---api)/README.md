# Uses of Class com.jbase.framework.io.ObjectFactory (framework   API)

**Created At:** 9/25/2017 10:26:16 AM  
**Updated At:** 2/15/2018 8:02:39 AM  
**Original Doc:** [com_jbase_framework_io_class-use_ObjectFactory](https://docs.jbase.com/39223-class-use/com_jbase_framework_io_class-use_ObjectFactory)  
**Original ID:** 277738  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.framework.io.ObjectFactory (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.framework.io-%28framework---api%29)
- [Class](./../../objectfactory-%28framework---api%29 "class in com.jbase.framework.io")
- Use
- [Tree](./../../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Class
com.jbase.framework.io.ObjectFactory

- Packages that use [ObjectFactory](./../../objectfactory-%28framework---api%29 "class in com.jbase.framework.io") | Package | Description |
| --- | --- |
| com.jbase.framework.io |   |
- - ### Uses of [ObjectFactory](./../../objectfactory-%28framework---api%29 "class in com.jbase.framework.io") in [com.jbase.framework.io](./../../com.jbase.framework.io-%28framework---api%29)


Methods in [com.jbase.framework.io](./../../com.jbase.framework.io-%28framework---api%29) that return [ObjectFactory](./../../objectfactory-%28framework---api%29 "class in com.jbase.framework.io") | Modifier and Type | Method and Description |
| --- | --- |
| `ObjectFactory` | NIOJBaseObjectReader.`getObjectFactory()`  |
| `ObjectFactory` | IOJBaseObjectReader.`getObjectFactory()`  |
| `protected abstract ObjectFactory` | AbstractJBaseObjectReader.`getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders.<br> |



Constructors in [com.jbase.framework.io](./../../com.jbase.framework.io-%28framework---api%29) with parameters of type [ObjectFactory](./../../objectfactory-%28framework---api%29 "class in com.jbase.framework.io") | Constructor and Description |
| --- |
| `IOJBaseObjectReader(ObjectFactory factory,<br>                   byte[] b)`<br>Constructor FOR TESTING ONLY.<br> |
| `IOJBaseObjectReader(ObjectFactory factory,<br>                   InputStream is)`  |
| `NIOJBaseObjectReader(ObjectFactory factory,<br>                    SocketChannel channel)`  |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.framework.io-%28framework---api%29)
- [Class](./../../objectfactory-%28framework---api%29 "class in com.jbase.framework.io")
- Use
- [Tree](./../../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
