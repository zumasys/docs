# Uses of Interface com.jbase.framework.io.JBaseObjectReader (framework   API)

**Created At:** 9/25/2017 10:25:21 AM  
**Updated At:** 2/15/2018 8:02:31 AM  
**Original Doc:** [com_jbase_framework_io_class-use_JBaseObjectReader](https://docs.jbase.com/39223-class-use/com_jbase_framework_io_class-use_JBaseObjectReader)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.framework.io.JBaseObjectReader (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- [Class](/39220-io/com_jbase_framework_io_JBaseObjectReader "interface in com.jbase.framework.io")
- Use
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/framework/io/class-use//39223-class-use/com_jbase_framework_io_class-use_JBaseObjectReader)
- [No Frames](/39223-class-use/com_jbase_framework_io_class-use_JBaseObjectReader)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.framework.io.JBaseObjectReader

- Packages that use [JBaseObjectReader](/39220-io/com_jbase_framework_io_JBaseObjectReader "interface in com.jbase.framework.io") | Package | Description |
| --- | --- |
| com.jbase.framework.io |   |
- - ### Uses of [JBaseObjectReader](/39220-io/com_jbase_framework_io_JBaseObjectReader "interface in com.jbase.framework.io") in [com.jbase.framework.io](/39220-io/com_jbase_framework_io_package-summary)


Classes in [com.jbase.framework.io](/39220-io/com_jbase_framework_io_package-summary) that implement [JBaseObjectReader](/39220-io/com_jbase_framework_io_JBaseObjectReader "interface in com.jbase.framework.io") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `AbstractJBaseObjectReader`<br>Deserializes JBaseSerializable objects sent from the jbase\_agent server,<br> or any other source of serialized JCF objects.<br> |
| `class` | `IOJBaseObjectReader`<br>jBase object reader based on the DataInputStream.<br> |
| `class` | `NIOJBaseObjectReader`<br>jBase object reader based on the new Java IO.<br> |



Methods in [com.jbase.framework.io](/39220-io/com_jbase_framework_io_package-summary) with parameters of type [JBaseObjectReader](/39220-io/com_jbase_framework_io_JBaseObjectReader "interface in com.jbase.framework.io") | Modifier and Type | Method and Description |
| --- | --- |
| `void` | SQLError.`readObject(JBaseObjectReader reader,<br>          int version)`<br>Method :                readObject()<br><br> Description:   Read object off the wire.<br> |
| `void` | OKResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | JBaseSerializable.`readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | ErrorResponse.`readObject(JBaseObjectReader reader,<br>          int version)`  |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- [Class](/39220-io/com_jbase_framework_io_JBaseObjectReader "interface in com.jbase.framework.io")
- Use
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/framework/io/class-use//39223-class-use/com_jbase_framework_io_class-use_JBaseObjectReader)
- [No Frames](/39223-class-use/com_jbase_framework_io_class-use_JBaseObjectReader)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
