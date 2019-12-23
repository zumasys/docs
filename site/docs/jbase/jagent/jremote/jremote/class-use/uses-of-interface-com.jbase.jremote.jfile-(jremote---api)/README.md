# Uses of Interface com.jbase.jremote.JFile (jremote   API)

**Created At:** 9/25/2017 11:39:26 AM  
**Updated At:** 2/15/2018 8:02:57 AM  
**Original Doc:** [com_jbase_jremote_class-use_JFile](https://docs.jbase.com/39249-class-use/com_jbase_jremote_class-use_JFile)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jremote.JFile (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../../../../jremote-api)
- [Class](./../../jfile-%28jremote-api%29 "interface in com.jbase.jremote")
- Use
- [Tree](./../../com.jbase.jremote-class-hierarchy)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Interface
com.jbase.jremote.JFile

- Packages that use [JFile](./../../jfile-%28jremote-api%29 "interface in com.jbase.jremote") | Package | Description |
| --- | --- |
| com.jbase.jremote |   |
| com.jbase.jremote.io |   |
| com.jbase.jremote.jca |   |
- - ### Uses of [JFile](./../../jfile-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote](./../../../../jremote-api)


Methods in [com.jbase.jremote](./../../../../jremote-api) that return [JFile](./../../jfile-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JFile` | JConnection.`open(String fileName)`<br>Attempts to open a jBASE file or returns null if the file does<br> not exist.<br> |
    - ### Uses of [JFile](./../../jfile-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-%28jremote---api%29)


Classes in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-%28jremote---api%29) that implement [JFile](./../../jfile-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `JFileImpl`<br>The JFile object is used to query, read, and write to jBASE files.<br> |



Methods in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-%28jremote---api%29) that return [JFile](./../../jfile-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JFile` | JConnectionImpl.`open(String fileName)`  |
    - ### Uses of [JFile](./../../jfile-%28jremote-api%29 "interface in com.jbase.jremote") in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29)


Classes in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29) that implement [JFile](./../../jfile-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `WrappedJFile`<br>Provide an interface to remote jBASE files and ensures connection<br> validity.<br> |



Methods in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29) that return [JFile](./../../jfile-%28jremote-api%29 "interface in com.jbase.jremote") | Modifier and Type | Method and Description |
| --- | --- |
| `JFile` | WrappedJConnection.`open(String filename)`<br>Open jBASE file.<br> |



Constructors in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-%28jremote---api%29) with parameters of type [JFile](./../../jfile-%28jremote-api%29 "interface in com.jbase.jremote") | Constructor and Description |
| --- |
| `WrappedJFile(WrappedJConnection connection,<br>            JFile jfile)`  |

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../../../../jremote-api)
- [Class](./../../jfile-%28jremote-api%29 "interface in com.jbase.jremote")
- Use
- [Tree](./../../com.jbase.jremote-class-hierarchy)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
