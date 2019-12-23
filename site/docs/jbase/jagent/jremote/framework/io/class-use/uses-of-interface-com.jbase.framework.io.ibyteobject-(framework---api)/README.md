# Uses of Interface com.jbase.framework.io.IByteObject (framework   API)

**Created At:** 9/25/2017 10:24:53 AM  
**Updated At:** 2/15/2018 8:02:37 AM  
**Original Doc:** [com_jbase_framework_io_class-use_IByteObject](https://docs.jbase.com/39223-class-use/com_jbase_framework_io_class-use_IByteObject)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.framework.io.IByteObject (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.framework.io-%28framework---api%29)
- [Class](./../../ibyteobject-%28framework---api%29 "interface in com.jbase.framework.io")
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

## Uses of Interface
com.jbase.framework.io.IByteObject

- Packages that use [IByteObject](./../../ibyteobject-%28framework---api%29 "interface in com.jbase.framework.io") | Package | Description |
| --- | --- |
| com.jbase.framework.io |   |
- - ### Uses of [IByteObject](./../../ibyteobject-%28framework---api%29 "interface in com.jbase.framework.io") in [com.jbase.framework.io](./../../com.jbase.framework.io-%28framework---api%29)


Classes in [com.jbase.framework.io](./../../com.jbase.framework.io-%28framework---api%29) that implement [IByteObject](./../../ibyteobject-%28framework---api%29 "interface in com.jbase.framework.io") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `ByteObject`  |



Methods in [com.jbase.framework.io](./../../com.jbase.framework.io-%28framework---api%29) that return [IByteObject](./../../ibyteobject-%28framework---api%29 "interface in com.jbase.framework.io") | Modifier and Type | Method and Description |
| --- | --- |
| `protected IByteObject` | AbstractJBaseObjectReader.`readByteObject(char code,<br>              IByteObject o)`  |
| `IByteObject` | JBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned<br> if a null argument is passed in.<br> |
| `IByteObject` | AbstractJBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned<br> if a null argument is passed in.<br> |



Methods in [com.jbase.framework.io](./../../com.jbase.framework.io-%28framework---api%29) with parameters of type [IByteObject](./../../ibyteobject-%28framework---api%29 "interface in com.jbase.framework.io") | Modifier and Type | Method and Description |
| --- | --- |
| `protected IByteObject` | AbstractJBaseObjectReader.`readByteObject(char code,<br>              IByteObject o)`  |
| `IByteObject` | JBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned<br> if a null argument is passed in.<br> |
| `IByteObject` | AbstractJBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned<br> if a null argument is passed in.<br> |
| `void` | JBaseObjectWriter.`writeObject(IByteObject o)`  |
| `void` | AbstractJBaseObjectWriter.`writeObject(IByteObject o)`  |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.framework.io-%28framework---api%29)
- [Class](./../../ibyteobject-%28framework---api%29 "interface in com.jbase.framework.io")
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
