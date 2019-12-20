# PrecompileRequest (jbasejdbc   API)

**Created At:** 9/25/2017 11:03:18 AM  
**Updated At:** 2/15/2018 8:02:53 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="PrecompileRequest (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_precompilerequest)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_PColumnMetaData "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_PResultSet "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_PrecompileRequest)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_PrecompileRequest)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

com.jbase.jdbc.protocol

## Class PrecompileRequest

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jdbc.protocol.SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")
    - - [com.jbase.jdbc.protocol.CompileRequest](/39240-protocol/com_jbase_jdbc_protocol_CompileRequest "class in com.jbase.jdbc.protocol")
        - - com.jbase.jdbc.protocol.PrecompileRequest


- All Implemented Interfaces:[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
* * *


```
public class PrecompileRequest
extends CompileRequest
```

Request to precompile (or prepare) a parametrized SQL statement.<br> <br> This class has the same attributes as CompileRequest,<br> so we can reuse its JBaseSerializable interface implementation.
Author:Peter Kucbta

- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
`JBaseSerializable.TYPE`


    - ### Field Summary

        - ### Fields inherited from class com.jbase.jdbc.protocol.[CompileRequest](/39240-protocol/com_jbase_jdbc_protocol_CompileRequest "class in com.jbase.jdbc.protocol")
`CN, sql`


        - ### Fields inherited from class com.jbase.jdbc.protocol.[SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")
`log`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `PrecompileRequest()`  |
| `PrecompileRequest(String sql)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getType()`<br>This method must be overridden by classes inheriting from SQLStartRequest.<br> |


        - ### Methods inherited from class com.jbase.jdbc.protocol.[CompileRequest](/39240-protocol/com_jbase_jdbc_protocol_CompileRequest "class in com.jbase.jdbc.protocol")
`getStatement, readObject, writeObject`


        - ### Methods inherited from class com.jbase.jdbc.protocol.[SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")
`getVersion`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### PrecompileRequest

```
public PrecompileRequest()
```


        - #### PrecompileRequest

```
public PrecompileRequest(String sql)
```


    - ### Method Detail

        - #### getType

```
public int getType()
```

Description copied from class: `SQLStartRequest`

This method must be overridden by classes inheriting from SQLStartRequest.
Specified by:`getType` in interface `JBaseSerializable`Overrides:`getType` in class `CompileRequest`Returns:type id of the objects, used during the serialization

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_precompilerequest)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_PColumnMetaData "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_PResultSet "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_PrecompileRequest)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_PrecompileRequest)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
