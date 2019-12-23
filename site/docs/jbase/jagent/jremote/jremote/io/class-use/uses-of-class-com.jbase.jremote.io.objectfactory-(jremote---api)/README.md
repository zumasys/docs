# Uses of Class com.jbase.jremote.io.ObjectFactory (jremote   API)

**Created At:** 9/25/2017 11:46:37 AM  
**Updated At:** 2/15/2018 8:02:41 AM  
**Original Doc:** [com_jbase_jremote_io_class-use_ObjectFactory](https://docs.jbase.com/39253-class-use/com_jbase_jremote_io_class-use_ObjectFactory)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jremote.io.ObjectFactory (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.jremote.io-%28jremote---api%29)
- [Class](./../../objectfactory-%28jremote---api%29 "class in com.jbase.jremote.io")
- Use
- [Tree](./../../com.jbase.jremote.io-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Class
com.jbase.jremote.io.ObjectFactory

- Packages that use [ObjectFactory](./../../objectfactory-%28jremote---api%29 "class in com.jbase.jremote.io") | Package | Description |
| --- | --- |
| com.jbase.jremote.io |   |
| com.jbase.jremote.jca.inflow |   |
- - ### Uses of [ObjectFactory](./../../objectfactory-%28jremote---api%29 "class in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29)


Subclasses of [ObjectFactory](./../../objectfactory-%28jremote---api%29 "class in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29) | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `JRemoteObjectFactory`<br>Creates objects received from the jbase\_agent server.<br> |



Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29) that return [ObjectFactory](./../../objectfactory-%28jremote---api%29 "class in com.jbase.jremote.io") | Modifier and Type | Method and Description |
| --- | --- |
| `ObjectFactory` | NIOJBaseObjectReader.`getObjectFactory()`  |
| `ObjectFactory` | IOJBaseObjectReader.`getObjectFactory()`  |
| `protected abstract ObjectFactory` | AbstractJBaseObjectReader.`getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders.<br> |



Constructors in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29) with parameters of type [ObjectFactory](./../../objectfactory-%28jremote---api%29 "class in com.jbase.jremote.io") | Constructor and Description |
| --- |
| `IOJBaseObjectReader(ObjectFactory factory,<br>                   byte[] b)`<br>Constructor FOR TESTING ONLY.<br> |
| `IOJBaseObjectReader(ObjectFactory factory,<br>                   InputStream is)`  |
| `NIOJBaseObjectReader(ObjectFactory factory,<br>                    SocketChannel channel)`  |
    - ### Uses of [ObjectFactory](./../../objectfactory-%28jremote---api%29 "class in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29)


Subclasses of [ObjectFactory](./../../objectfactory-%28jremote---api%29 "class in com.jbase.jremote.io") in [com.jbase.jremote.jca.inflow](./../../../jca/inflow/com.jbase.jremote.jca.inflow-%28jremote---api%29) | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `InboundObjectFactory`  |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../../com.jbase.jremote.io-%28jremote---api%29)
- [Class](./../../objectfactory-%28jremote---api%29 "class in com.jbase.jremote.io")
- Use
- [Tree](./../../com.jbase.jremote.io-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
