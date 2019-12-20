# Uses of Class com.jbase.jremote.io.AbstractJRemoteConnection (jremote   API)

**Created At:** 9/25/2017 11:43:25 AM  
**Updated At:** 2/15/2018 8:02:55 AM  
**Original Doc:** [com_jbase_jremote_io_class-use_AbstractJRemoteConnection](https://docs.jbase.com/39253-class-use/com_jbase_jremote_io_class-use_AbstractJRemoteConnection)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Class com.jbase.jremote.io.AbstractJRemoteConnection (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39250-io/com_jbase_jremote_io_package-summary)
- [Class](/39250-io/com_jbase_jremote_io_abstractjremoteconnection "class in com.jbase.jremote.io")
- Use
- [Tree](/39250-io/com_jbase_jremote_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jremote/io/class-use//39253-class-use/com_jbase_jremote_io_class-use_AbstractJRemoteConnection)
- [No Frames](/39253-class-use/com_jbase_jremote_io_class-use_AbstractJRemoteConnection)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

## Uses of Class
com.jbase.jremote.io.AbstractJRemoteConnection

- Packages that use [AbstractJRemoteConnection](/39250-io/com_jbase_jremote_io_abstractjremoteconnection "class in com.jbase.jremote.io") | Package | Description |
| --- | --- |
| com.jbase.jremote.io |   |
- - ### Uses of [AbstractJRemoteConnection](/39250-io/com_jbase_jremote_io_abstractjremoteconnection "class in com.jbase.jremote.io") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary)


Subclasses of [AbstractJRemoteConnection](/39250-io/com_jbase_jremote_io_abstractjremoteconnection "class in com.jbase.jremote.io") in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary) | Modifier and Type | Class and Description |
| --- | --- |
| `class` | `InterceptorConnection`<br>This class is responsible for handling the message sending to and from<br> an underlying JConnection.<br> |
| `class` | `JRemoteSocketConnection`<br>This class handles the connection and communication to<br> the jListener server over a socket interface.<br> |



Fields in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary) declared as [AbstractJRemoteConnection](/39250-io/com_jbase_jremote_io_abstractjremoteconnection "class in com.jbase.jremote.io") | Modifier and Type | Field and Description |
| --- | --- |
| `protected AbstractJRemoteConnection` | JSelectListImpl.`connection`  |



Methods in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary) with parameters of type [AbstractJRemoteConnection](/39250-io/com_jbase_jremote_io_abstractjremoteconnection "class in com.jbase.jremote.io") | Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | JConnectionImpl.`init(AbstractJRemoteConnection connection,<br>    boolean allowInput,<br>    Properties cxProps)`  |
| `void` | JSelectListImpl.`setConnection(AbstractJRemoteConnection connection)`<br>Attaches a connection handle to this select list.<br> |



Constructors in [com.jbase.jremote.io](/39250-io/com_jbase_jremote_io_package-summary) with parameters of type [AbstractJRemoteConnection](/39250-io/com_jbase_jremote_io_abstractjremoteconnection "class in com.jbase.jremote.io") | Constructor and Description |
| --- |
| `InterceptorConnection(AbstractJRemoteConnection c,<br>                     InputStream is,<br>                     OutputStream os)`  |
| `JConnectionImpl(AbstractJRemoteConnection connection)`  |
| `JConnectionImpl(AbstractJRemoteConnection connection,<br>               Properties cxProps)`  |
| `JCursorImpl(AbstractJRemoteConnection connection,<br>           JSelectListProt data)`<br>Constructs a cursor from a serializable select list.<br> |
| `JFileImpl(AbstractJRemoteConnection connection,<br>         String fileName)`  |
| `JResultSetImpl(AbstractJRemoteConnection connection,<br>              int statementId,<br>              int fetchSize)`  |
| `JSelectListImpl(AbstractJRemoteConnection connection,<br>               JDynArray keys)`<br>Constructs a select list from specified dynamic array.<br> |
| `JSelectListImpl(AbstractJRemoteConnection connection,<br>               JSelectListProt data)`<br>Constructs a select list from a serializable select list.<br> |
| `JStatementImpl(AbstractJRemoteConnection connection)`<br>Constructor.<br> |

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39250-io/com_jbase_jremote_io_package-summary)
- [Class](/39250-io/com_jbase_jremote_io_abstractjremoteconnection "class in com.jbase.jremote.io")
- Use
- [Tree](/39250-io/com_jbase_jremote_io_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev
- Next


- [Frames](../../../../../index.html?com/jbase/jremote/io/class-use//39253-class-use/com_jbase_jremote_io_class-use_AbstractJRemoteConnection)
- [No Frames](/39253-class-use/com_jbase_jremote_io_class-use_AbstractJRemoteConnection)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
