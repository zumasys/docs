# Uses of Class com.jbase.jremote.io.exception.UnknownTypeException (jremote   API)

**Created At:** 9/25/2017 11:47:26 AM  
**Updated At:** 2/15/2018 8:02:46 AM  
**Original Doc:** [com_jbase_jremote_io_exception_class-use_UnknownTypeException](https://docs.jbase.com/39255-class-use/com_jbase_jremote_io_exception_class-use_UnknownTypeException)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jremote.io.exception.UnknownTypeException (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](/39254-exception/com_jbase_jremote_io_exception_package-summary)
- [Class](/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException "class in com.jbase.jremote.io.exception")
- Use
- [Tree](/39254-exception/com_jbase_jremote_io_exception_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jremote/io/exception/class-use//39255-class-use/com_jbase_jremote_io_exception_class-use_UnknownTypeException)
- [No Frames](/39255-class-use/com_jbase_jremote_io_exception_class-use_UnknownTypeException)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Class
com.jbase.jremote.io.exception.UnknownTypeException

- Packages that use [UnknownTypeException](/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException "class in com.jbase.jremote.io.exception") | Package | Description |
| --- | --- |
| com.jbase.jremote.io |   |
| com.jbase.jremote.jca.inflow |   |
- - ### Uses of [UnknownTypeException](/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException "class in com.jbase.jremote.io.exception") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


Methods in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary) that throw [UnknownTypeException](/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException "class in com.jbase.jremote.io.exception") | Modifier and Type | Method and Description |
| --- | --- |
| `protected JBaseSerializable` | ObjectFactory.`createGenericObjects(int objectType)`<br>Creates any generic (i.e common to all framework clients) objects.<br> |
| `protected abstract JBaseSerializable` | ObjectFactory.`createObject(int objectType)`<br>Create JBaseSerializable object from the supplied object type.<br> |
| `protected JBaseSerializable` | JRemoteObjectFactory.`createObject(int objectType)`  |
| `protected abstract ObjectFactory` | AbstractJBaseObjectReader.`getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders.<br> |
    - ### Uses of [UnknownTypeException](/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException "class in com.jbase.jremote.io.exception") in [com.jbase.jremote.jca.inflow](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)


Methods in [com.jbase.jremote.jca.inflow](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary) that throw [UnknownTypeException](/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException "class in com.jbase.jremote.io.exception") | Modifier and Type | Method and Description |
| --- | --- |
| `JBaseSerializable` | InboundObjectFactory.`createObject(int type)`  |

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](/39254-exception/com_jbase_jremote_io_exception_package-summary)
- [Class](/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException "class in com.jbase.jremote.io.exception")
- Use
- [Tree](/39254-exception/com_jbase_jremote_io_exception_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../../index.html?com/jbase/jremote/io/exception/class-use//39255-class-use/com_jbase_jremote_io_exception_class-use_UnknownTypeException)
- [No Frames](/39255-class-use/com_jbase_jremote_io_exception_class-use_UnknownTypeException)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
