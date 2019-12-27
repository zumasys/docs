# SQLRequest (jbasejdbc   API)

**Created At:** 9/25/2017 11:04:30 AM  
**Updated At:** 2/15/2018 8:02:54 AM  
**Original Doc:** [com_jbase_jdbc_protocol_SQLRequest](https://docs.jbase.com/39240-protocol/com_jbase_jdbc_protocol_SQLRequest)  
**Original ID:** 278002  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="SQLRequest (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jdbc.protocol.sqlrequest-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.protocol-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](./../sqlparamsresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
- [Next Class](./../sqlresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")


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

## Class SQLRequest

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jdbc.protocol.SQLStartRequest](./../sqlstartrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
    - - com.jbase.jdbc.protocol.SQLRequest


- All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")Direct Known Subclasses:[BindRequest](./../bindrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [ExecuteRequest](./../executerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [FetchRequest](./../fetchrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [MetaDataRequest](./../metadatarequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol"), [ReleaseRequest](./../releaserequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol"), [SetPropertiesRequest](./../setpropertiesrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
* * *


```
public abstract class SQLRequest
extends SQLStartRequest
```

Base class of all SQL driver's requests.<br><br> Derived classes should override method getType, and both methods {write|read}Object<br> if they want to serialize / deserialize attributes other then statementId.
Author:Peter Kuchta

- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
`JBaseSerializable.TYPE`


    - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `protected static Logger` | `log`  |
| `protected StatementID` | `statementId`  |


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `SQLRequest()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `void` | `readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer,<br>           int version)`<br>As a bare minimum each JDBC request contains statement ID.<br> |


        - ### Methods inherited from class com.jbase.jdbc.protocol.[SQLStartRequest](./../sqlstartrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
`getType, getVersion`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Field Detail

        - #### log

```
protected static final Logger log
```


        - #### statementId

```
protected StatementID statementId
```


    - ### Constructor Detail

        - #### SQLRequest

```
public SQLRequest()
```


    - ### Method Detail

        - #### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```

As a bare minimum each JDBC request contains statement ID.<br> Derived classes which override this method should take care of serializing / deserializing<br> of the statement ID on their own.
Throws:`IOException`


        - #### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Throws:`IOException``ClassNotFoundException`

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jdbc.protocol.sqlrequest-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.protocol-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](./../sqlparamsresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
- [Next Class](./../sqlresponse-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")


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
