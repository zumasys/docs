# SQLResultResponse (jbasejdbc   API)

**Created At:** 9/25/2017 11:04:42 AM  
**Updated At:** 2/15/2018 8:02:54 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="SQLResultResponse (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_sqlresultresponse)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_SQLResponse "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_SQLRSMDResponse "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_SQLResultResponse)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_SQLResultResponse)


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

## Class SQLResultResponse

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jdbc.io.Response](/39232-io/com_jbase_jdbc_io_response "class in com.jbase.jdbc.io")
    - - [com.jbase.jdbc.protocol.SQLResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLResponse "class in com.jbase.jdbc.protocol")
        - - com.jbase.jdbc.protocol.SQLResultResponse


- All Implemented Interfaces:[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
* * *


```
public class SQLResultResponse
extends SQLResponse
```

- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
`JBaseSerializable.TYPE`


    - ### Field Summary

        - ### Fields inherited from class com.jbase.jdbc.protocol.[SQLResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLResponse "class in com.jbase.jdbc.protocol")
`statementId`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `SQLResultResponse()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `PResultSet` | `getPResultSet()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer,<br>           int version)`  |


        - ### Methods inherited from class com.jbase.jdbc.protocol.[SQLResponse](/39240-protocol/com_jbase_jdbc_protocol_SQLResponse "class in com.jbase.jdbc.protocol")
`getStatementId`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### SQLResultResponse

```
public SQLResultResponse()
```


    - ### Method Detail

        - #### getPResultSet

```
public PResultSet getPResultSet()
```


        - #### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Throws:`IOException`


        - #### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Throws:`IOException``ClassNotFoundException`


        - #### getType

```
public int getType()
```
Returns:type id of the objects, used during the serialization


        - #### getVersion

```
public int getVersion()
```

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_sqlresultresponse)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_SQLResponse "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_SQLRSMDResponse "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_SQLResultResponse)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_SQLResultResponse)


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
