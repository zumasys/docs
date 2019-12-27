# ExecuteRequest (jbasejdbc   API)

**Created At:** 9/25/2017 11:02:02 AM  
**Updated At:** 2/15/2018 8:02:23 AM  
**Original Doc:** [com_jbase_jdbc_protocol_ExecuteRequest](https://docs.jbase.com/39240-protocol/com_jbase_jdbc_protocol_ExecuteRequest)  
**Original ID:** 277980  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ExecuteRequest (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jdbc.protocol.executerequest-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.protocol-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](./../databasemetadatarequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
- [Next Class](./../fetchrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")


- [Frames](./.)
- [No Frames](./.)


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

## Class ExecuteRequest

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jdbc.protocol.SQLStartRequest](./../sqlstartrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
    - - [com.jbase.jdbc.protocol.SQLRequest](./../sqlrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
        - - com.jbase.jdbc.protocol.ExecuteRequest


- All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
* * *


```
public class ExecuteRequest
extends SQLRequest
```

Request to execute previously compiled SQL statement.<br> Does not contain any other attributes then statementId (inherited from JDBCRequest),<br> so does not need to override writeObject and readObject.
Author:Peter Kuchta

- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
`JBaseSerializable.TYPE`


    - ### Field Summary

        - ### Fields inherited from class com.jbase.jdbc.protocol.[SQLRequest](./../sqlrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
`log, statementId`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `ExecuteRequest(StatementID statementId)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getType()`<br>This method must be overridden by classes inheriting from SQLStartRequest.<br> |


        - ### Methods inherited from class com.jbase.jdbc.protocol.[SQLRequest](./../sqlrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
`readObject, writeObject`


        - ### Methods inherited from class com.jbase.jdbc.protocol.[SQLStartRequest](./../sqlstartrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
`getVersion`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### ExecuteRequest

```
public ExecuteRequest(StatementID statementId)
```


    - ### Method Detail

        - #### getType

```
public int getType()
```

Description copied from class: `SQLStartRequest`

This method must be overridden by classes inheriting from SQLStartRequest.
Specified by:`getType` in interface `JBaseSerializable`Overrides:`getType` in class `SQLStartRequest`Returns:type id of the objects, used during the serializationSee Also:[`JBaseSerializable.getType()`](./../../io/jbaseserializable-%28jbasejdbc-api%29#getType--)

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jdbc.protocol.executerequest-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.protocol-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](./../databasemetadatarequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
- [Next Class](./../fetchrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")


- [Frames](./.)
- [No Frames](./.)


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
