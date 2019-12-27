# Uses of Interface com.jbase.framework.io.JBaseObjectWriter (framework   API)

**Created At:** 9/25/2017 10:25:28 AM  
**Updated At:** 2/15/2018 8:02:37 AM  
**Original Doc:** [com_jbase_framework_io_class-use_JBaseObjectWriter](https://docs.jbase.com/39223-class-use/com_jbase_framework_io_class-use_JBaseObjectWriter)  
**Original ID:** 277731  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.framework.io.JBaseObjectWriter (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.framework.io-%28framework---api%29)
- [Class](./../../jbaseobjectwriter-%28framework---api%29 "interface in com.jbase.framework.io")
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
com.jbase.framework.io.JBaseObjectWriter

- Packages that use [JBaseObjectWriter](./../../jbaseobjectwriter-%28framework---api%29 "interface in com.jbase.framework.io") | Package | Description |
| --- | --- |
| com.jbase.framework.io |   |
- - ### Uses of [JBaseObjectWriter](./../../jbaseobjectwriter-%28framework---api%29 "interface in com.jbase.framework.io") in [com.jbase.framework.io](./../../com.jbase.framework.io-%28framework---api%29)


Classes in [com.jbase.framework.io](./../../com.jbase.framework.io-%28framework---api%29) that implement [JBaseObjectWriter](./../../jbaseobjectwriter-%28framework---api%29 "interface in com.jbase.framework.io") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `AbstractJBaseObjectWriter`  |
| `class` | `IOJBaseObjectWriter`<br>jBase object writer based on the DataOutputStream.<br> |
| `class` | `NIOJBaseObjectWriter`<br>jBase object writer using the new Java IO.<br> |



Methods in [com.jbase.framework.io](./../../com.jbase.framework.io-%28framework---api%29) with parameters of type [JBaseObjectWriter](./../../jbaseobjectwriter-%28framework---api%29 "interface in com.jbase.framework.io") | Modifier and Type | Method and Description |
| --- | --- |
| `void` | SQLError.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | OKResponse.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | JBaseSerializable.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |
| `void` | ErrorResponse.`writeObject(JBaseObjectWriter writer,<br>           int version)`  |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.framework.io-%28framework---api%29)
- [Class](./../../jbaseobjectwriter-%28framework---api%29 "interface in com.jbase.framework.io")
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
