# Uses of Interface com.jbase.jdbc.io.IByteObject (jbasejdbc   API)

**Created At:** 9/25/2017 10:46:06 AM  
**Updated At:** 2/15/2018 8:02:48 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jdbc.io.IByteObject (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- [Class](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io")
- Use
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/io/class-use//39235-class-use/com_jbase_jdbc_io_class-use_IByteObject)
- [No Frames](/39235-class-use/com_jbase_jdbc_io_class-use_IByteObject)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.jdbc.io.IByteObject

- Packages that use [IByteObject](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io") | Package | Description |
| --- | --- |
| com.jbase.jdbc.io |   |
| com.jbase.jdbc.protocol |   |
- - ### Uses of [IByteObject](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io") in [com.jbase.jdbc.io](/39232-io/com_jbase_jdbc_io_package-summary)


Classes in [com.jbase.jdbc.io](/39232-io/com_jbase_jdbc_io_package-summary) that implement [IByteObject](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `ByteObject`  |



Methods in [com.jbase.jdbc.io](/39232-io/com_jbase_jdbc_io_package-summary) that return [IByteObject](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io") | Modifier and Type | Method and Description |
| --- | --- |
| `protected IByteObject` | AbstractJBaseObjectReader.`readByteObject(char code,<br>              IByteObject o)`  |
| `IByteObject` | JBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned<br> if a null argument is passed in.<br> |
| `IByteObject` | AbstractJBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned<br> if a null argument is passed in.<br> |



Methods in [com.jbase.jdbc.io](/39232-io/com_jbase_jdbc_io_package-summary) with parameters of type [IByteObject](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io") | Modifier and Type | Method and Description |
| --- | --- |
| `protected IByteObject` | AbstractJBaseObjectReader.`readByteObject(char code,<br>              IByteObject o)`  |
| `IByteObject` | JBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned<br> if a null argument is passed in.<br> |
| `IByteObject` | AbstractJBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned<br> if a null argument is passed in.<br> |
| `void` | JBaseObjectWriter.`writeObject(IByteObject o)`  |
| `void` | AbstractJBaseObjectWriter.`writeObject(IByteObject o)`  |
    - ### Uses of [IByteObject](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io") in [com.jbase.jdbc.protocol](/39240-protocol/com_jbase_jdbc_protocol_package-summary)


Methods in [com.jbase.jdbc.protocol](/39240-protocol/com_jbase_jdbc_protocol_package-summary) that return [IByteObject](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io") | Modifier and Type | Method and Description |
| --- | --- |
| `IByteObject[]` | Row.`getData()`  |
| `IByteObject` | InputOutputResponse.`getOutput()`  |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- [Class](/39232-io/com_jbase_jdbc_io_IByteObject "interface in com.jbase.jdbc.io")
- Use
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/io/class-use//39235-class-use/com_jbase_jdbc_io_class-use_IByteObject)
- [No Frames](/39235-class-use/com_jbase_jdbc_io_class-use_IByteObject)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
