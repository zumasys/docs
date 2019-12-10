# Uses of Interface com.jbase.framework.io.JBaseObjectWriter (framework   API)

**Created At:** 9/25/2017 10:25:28 AM  
**Updated At:** 2/15/2018 8:02:37 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.framework.io.JBaseObjectWriter (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- [Class](/39220-io/com_jbase_framework_io_JBaseObjectWriter "interface in com.jbase.framework.io")
- Use
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/framework/io/class-use//39223-class-use/com_jbase_framework_io_class-use_JBaseObjectWriter)
- [No Frames](/39223-class-use/com_jbase_framework_io_class-use_JBaseObjectWriter)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.framework.io.JBaseObjectWriter

- Packages that use [JBaseObjectWriter](/39220-io/com_jbase_framework_io_JBaseObjectWriter "interface in com.jbase.framework.io") | Package | Description |
| --- | --- |
| com.jbase.framework.io |   |
- - ### Uses of [JBaseObjectWriter](/39220-io/com_jbase_framework_io_JBaseObjectWriter "interface in com.jbase.framework.io") in [com.jbase.framework.io](/39220-io/com_jbase_framework_io_package-summary)


Classes in [com.jbase.framework.io](/39220-io/com_jbase_framework_io_package-summary) that implement [JBaseObjectWriter](/39220-io/com_jbase_framework_io_JBaseObjectWriter "interface in com.jbase.framework.io") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `AbstractJBaseObjectWriter`  |
| `class` | `IOJBaseObjectWriter`<br>jBase object writer based on the DataOutputStream.<br> |
| `class` | `NIOJBaseObjectWriter`<br>jBase object writer using the new Java IO.<br> |



Methods in [com.jbase.framework.io](/39220-io/com_jbase_framework_io_package-summary) with parameters of type [JBaseObjectWriter](/39220-io/com_jbase_framework_io_JBaseObjectWriter "interface in com.jbase.framework.io") | Modifier and Type | Method and Description |
| --- | --- |
| `void` | SQLError.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | OKResponse.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | JBaseSerializable.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | ErrorResponse.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- [Class](/39220-io/com_jbase_framework_io_JBaseObjectWriter "interface in com.jbase.framework.io")
- Use
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/framework/io/class-use//39223-class-use/com_jbase_framework_io_class-use_JBaseObjectWriter)
- [No Frames](/39223-class-use/com_jbase_framework_io_class-use_JBaseObjectWriter)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
