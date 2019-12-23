# Uses of Interface com.jbase.framework.io.JBaseSerializable (framework   API)

**Created At:** 9/25/2017 10:25:35 AM  
**Updated At:** 2/15/2018 8:02:37 AM  
**Original Doc:** [com_jbase_framework_io_class-use_JBaseSerializable](https://docs.jbase.com/39223-class-use/com_jbase_framework_io_class-use_JBaseSerializable)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.framework.io.JBaseSerializable (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.framework.io-%28framework---api%29)
- [Class](./../../jbaseserializable-%28framework---api%29 "interface in com.jbase.framework.io")
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
com.jbase.framework.io.JBaseSerializable

- Packages that use [JBaseSerializable](./../../jbaseserializable-%28framework---api%29 "interface in com.jbase.framework.io") | Package | Description |
| --- | --- |
| com.jbase.framework.io |   |
- - ### Uses of [JBaseSerializable](./../../jbaseserializable-%28framework---api%29 "interface in com.jbase.framework.io") in [com.jbase.framework.io](./../../com.jbase.framework.io-%28framework---api%29)


Classes in [com.jbase.framework.io](./../../com.jbase.framework.io-%28framework---api%29) that implement [JBaseSerializable](./../../jbaseserializable-%28framework---api%29 "interface in com.jbase.framework.io") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `ErrorResponse`  |
| `class` | `OKResponse`  |
| `class` | `Response`<br>Represents a response from jsqld.<br> |
| `class` | `SQLError`  |



Methods in [com.jbase.framework.io](./../../com.jbase.framework.io-%28framework---api%29) that return [JBaseSerializable](./../../jbaseserializable-%28framework---api%29 "interface in com.jbase.framework.io") | Modifier and Type | Method and Description |
| --- | --- |
| `protected JBaseSerializable` | ObjectFactory.`createGenericObjects(int objectType)`<br>Creates any generic (i.e common to all framework clients) objects.<br> |
| `protected abstract JBaseSerializable` | ObjectFactory.`createObject(int objectType)`<br>Create JBaseSerializable object from the supplied object type.<br> |
| `protected JBaseSerializable` | AbstractJBaseObjectReader.`readJBaseSerializableObject(char code,<br>                           JBaseSerializable o)`  |
| `JBaseSerializable` | JBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, a JBaseSerializable object should be created and returned<br> if a null argument is passed in.<br> |
| `JBaseSerializable` | AbstractJBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, the ObjectFactory will be used to create a<br> JBaseSerializable object if a null argument is passed in.<br> |
| `JBaseSerializable` | JBaseObjectReader.`readRootObject()`<br>Deserializes a root object.<br> |
| `JBaseSerializable` | AbstractJBaseObjectReader.`readRootObject()`  |



Methods in [com.jbase.framework.io](./../../com.jbase.framework.io-%28framework---api%29) with parameters of type [JBaseSerializable](./../../jbaseserializable-%28framework---api%29 "interface in com.jbase.framework.io") | Modifier and Type | Method and Description |
| --- | --- |
| `protected JBaseSerializable` | AbstractJBaseObjectReader.`readJBaseSerializableObject(char code,<br>                           JBaseSerializable o)`  |
| `JBaseSerializable` | JBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, a JBaseSerializable object should be created and returned<br> if a null argument is passed in.<br> |
| `JBaseSerializable` | AbstractJBaseObjectReader.`readObject(JBaseSerializable o)`<br>Reads/deserializes next object, the ObjectFactory will be used to create a<br> JBaseSerializable object if a null argument is passed in.<br> |
| `protected void` | AbstractJBaseObjectWriter.`writeJBaseSerializableObject(JBaseSerializable o)`  |
| `void` | JBaseObjectWriter.`writeObject(JBaseSerializable o)`  |
| `void` | AbstractJBaseObjectWriter.`writeObject(JBaseSerializable o)`  |
| `void` | JBaseObjectWriter.`writeRootObject(JBaseSerializable o)`  |
| `void` | AbstractJBaseObjectWriter.`writeRootObject(JBaseSerializable o)`  |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.framework.io-%28framework---api%29)
- [Class](./../../jbaseserializable-%28framework---api%29 "interface in com.jbase.framework.io")
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
