# Uses of Interface com.jbase.framework.io.IByteObject (framework   API)

**Created At:** 9/25/2017 10:24:53 AM  
**Updated At:** 2/15/2018 8:02:37 AM  
**Original Doc:** [com_jbase_framework_io_class-use_IByteObject](https://docs.jbase.com/39223-class-use/com_jbase_framework_io_class-use_IByteObject)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.framework.io.IByteObject (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- [Class](/39220-io/com_jbase_framework_io_IByteObject "interface in com.jbase.framework.io")
- Use
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/framework/io/class-use//39223-class-use/com_jbase_framework_io_class-use_IByteObject)
- [No Frames](/39223-class-use/com_jbase_framework_io_class-use_IByteObject)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.framework.io.IByteObject

- Packages that use [IByteObject](/39220-io/com_jbase_framework_io_IByteObject "interface in com.jbase.framework.io") | Package | Description |
| --- | --- |
| com.jbase.framework.io |   |
- - ### Uses of [IByteObject](/39220-io/com_jbase_framework_io_IByteObject "interface in com.jbase.framework.io") in [com.jbase.framework.io](/39220-io/com_jbase_framework_io_package-summary)


Classes in [com.jbase.framework.io](/39220-io/com_jbase_framework_io_package-summary) that implement [IByteObject](/39220-io/com_jbase_framework_io_IByteObject "interface in com.jbase.framework.io") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `ByteObject`  |



Methods in [com.jbase.framework.io](/39220-io/com_jbase_framework_io_package-summary) that return [IByteObject](/39220-io/com_jbase_framework_io_IByteObject "interface in com.jbase.framework.io") | Modifier and Type | Method and Description |
| --- | --- |
| `protected IByteObject` | AbstractJBaseObjectReader.`readByteObject(char code,<br>              IByteObject o)`  |
| `IByteObject` | JBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned<br> if a null argument is passed in.<br> |
| `IByteObject` | AbstractJBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned<br> if a null argument is passed in.<br> |



Methods in [com.jbase.framework.io](/39220-io/com_jbase_framework_io_package-summary) with parameters of type [IByteObject](/39220-io/com_jbase_framework_io_IByteObject "interface in com.jbase.framework.io") | Modifier and Type | Method and Description |
| --- | --- |
| `protected IByteObject` | AbstractJBaseObjectReader.`readByteObject(char code,<br>              IByteObject o)`  |
| `IByteObject` | JBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned<br> if a null argument is passed in.<br> |
| `IByteObject` | AbstractJBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned<br> if a null argument is passed in.<br> |
| `void` | JBaseObjectWriter.`writeObject(IByteObject o)`  |
| `void` | AbstractJBaseObjectWriter.`writeObject(IByteObject o)`  |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- [Class](/39220-io/com_jbase_framework_io_IByteObject "interface in com.jbase.framework.io")
- Use
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/framework/io/class-use//39223-class-use/com_jbase_framework_io_class-use_IByteObject)
- [No Frames](/39223-class-use/com_jbase_framework_io_class-use_IByteObject)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
