# InputOutputResponse (jbasejdbc   API)

**Created At:** 9/25/2017 11:02:15 AM  
**Updated At:** 2/15/2018 8:02:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="InputOutputResponse (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_inputoutputresponse)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_FetchRequest "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_LoadSubroutineRequest "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_InputOutputResponse)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_InputOutputResponse)


- [All Classes](../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_top");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ========= END OF TOP NAVBAR ========= --><!-- ======== START OF CLASS DATA ======== -->
com.jbase.jdbc.protocol

## Class InputOutputResponse

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jdbc.io.Response](/39232-io/com_jbase_jdbc_io_response "class in com.jbase.jdbc.io")
    - - com.jbase.jdbc.protocol.InputOutputResponse


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></dd></dl>
* * *


```
public class InputOutputResponse
extends Response
```

Objects of this class can be sent from jsqld to the client<br> if a terminal output has been produced by a subroutine (CRT, PRINT)<br> or jBASE runtime.<br><br> An INPUT statement executed from a subroutine or jBASE debugger's waiting<br> for user's command will also cause the jsqld to send an object<br> of this class with attribute command == INPUTCMD.<br><br> XXX: Dev. note: consider refactoring/splitting of this class into one responsible<br> for transfering terminal output from the server and one with a server's request<br> for input.
<dl><dt><span class="simpleTagLabel">Author:</span></dt>
<dd>Peter Kuchta</dd></dl>

- <!-- ======== NESTED CLASS SUMMARY ======== -->
    - <!--   -->
### Nested Class Summary

        - <!--   -->
### Nested classes/interfaces inherited from interface com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
`JBaseSerializable.TYPE`

<!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary


<caption><span>Fields</span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `static int` | `INPUTCMD`<br>Constant indicating that the server is waiting for input.<br> |
| `static int` | `OUTPUTCMD`<br>Constant indicating that the object contains a terminal output produced on server.<br> |

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `InputOutputResponse()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getCommand()`  |
| `IByteObject` | `getOutput()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer,<br>           int version)`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ============ FIELD DETAIL =========== -->
    - <!--   -->
### Field Detail
<!--   -->
        - #### OUTPUTCMD

```
public static final int OUTPUTCMD
```

Constant indicating that the object contains a terminal output produced on server.
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../constant-values.html#com.jbase.jdbc.protocol.InputOutputResponse.OUTPUTCMD">Constant Field Values</a></dd></dl>

<!--   -->
        - #### INPUTCMD

```
public static final int INPUTCMD
```

Constant indicating that the server is waiting for input.
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../constant-values.html#com.jbase.jdbc.protocol.InputOutputResponse.INPUTCMD">Constant Field Values</a></dd></dl>

<!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### InputOutputResponse

```
public InputOutputResponse()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getCommand

```
public int getCommand()
```

<!--   -->
        - #### getOutput

```
public IByteObject getOutput()
```

<!--   -->
        - #### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

<!--   -->
        - #### getType

```
public int getType()
```
<dl><dt><span class="returnLabel">Returns:</span></dt>
<dd>type id of the objects, used during the serialization</dd>
<dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable#getType--"><code>JBaseSerializable.getType()</code></a></dd></dl>

<!--   -->
        - #### getVersion

```
public int getVersion()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_inputoutputresponse)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_FetchRequest "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_LoadSubroutineRequest "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_InputOutputResponse)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_InputOutputResponse)


- [All Classes](../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_bottom");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ======== END OF BOTTOM NAVBAR ======= -->
<small>			<center>			<i>Copyright © 2017 jBASE, Inc.. All Rights Reserved.</i>		</center></small>
