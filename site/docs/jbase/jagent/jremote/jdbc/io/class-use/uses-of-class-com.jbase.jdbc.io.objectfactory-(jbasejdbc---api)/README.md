# Uses of Class com.jbase.jdbc.io.ObjectFactory (jbasejdbc   API)

**Created At:** 9/25/2017 10:47:45 AM  
**Updated At:** 2/15/2018 8:02:46 AM  
**Original Doc:** [com_jbase_jdbc_io_class-use_ObjectFactory](https://docs.jbase.com/39235-class-use/com_jbase_jdbc_io_class-use_ObjectFactory)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jdbc.io.ObjectFactory (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- [Class](/39232-io/com_jbase_jdbc_io_objectfactory "class in com.jbase.jdbc.io")
- Use
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/io/class-use//39235-class-use/com_jbase_jdbc_io_class-use_ObjectFactory)
- [No Frames](/39235-class-use/com_jbase_jdbc_io_class-use_ObjectFactory)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Class
com.jbase.jdbc.io.ObjectFactory

- Packages that use [ObjectFactory](/39232-io/com_jbase_jdbc_io_objectfactory "class in com.jbase.jdbc.io") | Package | Description |
| --- | --- |
| com.jbase.jdbc.io |   |
- - ### Uses of [ObjectFactory](/39232-io/com_jbase_jdbc_io_objectfactory "class in com.jbase.jdbc.io") in [com.jbase.jdbc.io](/39232-io/com_jbase_jdbc_io_package-summary)


Subclasses of [ObjectFactory](/39232-io/com_jbase_jdbc_io_objectfactory "class in com.jbase.jdbc.io") in [com.jbase.jdbc.io](/39232-io/com_jbase_jdbc_io_package-summary) | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `JBaseJDBCObjectFactory`<br>Creates objects received from the jbase\_agent server.<br> |



Methods in [com.jbase.jdbc.io](/39232-io/com_jbase_jdbc_io_package-summary) that return [ObjectFactory](/39232-io/com_jbase_jdbc_io_objectfactory "class in com.jbase.jdbc.io") | Modifier and Type | Method and Description |
| --- | --- |
| `ObjectFactory` | NIOJBaseObjectReader.`getObjectFactory()`  |
| `ObjectFactory` | IOJBaseObjectReader.`getObjectFactory()`  |
| `protected abstract ObjectFactory` | AbstractJBaseObjectReader.`getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders.<br> |



Constructors in [com.jbase.jdbc.io](/39232-io/com_jbase_jdbc_io_package-summary) with parameters of type [ObjectFactory](/39232-io/com_jbase_jdbc_io_objectfactory "class in com.jbase.jdbc.io") | Constructor and Description |
| --- |
| `IOJBaseObjectReader(ObjectFactory factory,<br>                   byte[] b)`<br>Constructor FOR TESTING ONLY.<br> |
| `IOJBaseObjectReader(ObjectFactory factory,<br>                   InputStream is)`  |
| `NIOJBaseObjectReader(ObjectFactory factory,<br>                    SocketChannel channel)`  |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- [Class](/39232-io/com_jbase_jdbc_io_objectfactory "class in com.jbase.jdbc.io")
- Use
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jdbc/io/class-use//39235-class-use/com_jbase_jdbc_io_class-use_ObjectFactory)
- [No Frames](/39235-class-use/com_jbase_jdbc_io_class-use_ObjectFactory)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
