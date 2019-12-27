# SQLResponse (jbasejdbc   API)

**Created At:** 9/25/2017 11:04:36 AM  
**Updated At:** 2/15/2018 8:02:54 AM  
**Original Doc:** [com_jbase_jdbc_protocol_SQLResponse](https://docs.jbase.com/39240-protocol/com_jbase_jdbc_protocol_SQLResponse)  
**Original ID:** 278003  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="SQLResponse (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jdbc.protocol.sqlresponse-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.protocol-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](./../sqlrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
- [Next Class](./../sqlresultresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")


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

## Class SQLResponse

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jdbc.io.Response](./../../io/response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io")
    - - com.jbase.jdbc.protocol.SQLResponse


- All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")Direct Known Subclasses:[SetPropertiesResponse](./../setpropertiesresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SQLErrorResponse](./../sqlerrorresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SQLOKResponse](./../sqlokresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SQLParamsResponse](./../sqlparamsresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SQLResultResponse](./../sqlresultresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SQLRSMDResponse](./../sqlrsmdresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SQLUpdateResponse](./../sqlupdateresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
* * *


```
public abstract class SQLResponse
extends Response
```

Represents a response from jsqld.
Author:Peter KuchtaSee Also:`ErrorResponse`

- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
`JBaseSerializable.TYPE`


    - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `protected StatementID` | `statementId`  |


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `SQLResponse()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `StatementID` | `getStatementId()`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


        - ### Methods inherited from interface com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
`getType, getVersion, readObject, writeObject`

- - ### Field Detail

        - #### statementId

```
protected StatementID statementId
```


    - ### Constructor Detail

        - #### SQLResponse

```
public SQLResponse()
```


    - ### Method Detail

        - #### getStatementId

```
public StatementID getStatementId()
```

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jdbc.protocol.sqlresponse-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.protocol-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](./../sqlrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
- [Next Class](./../sqlresultresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")


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
