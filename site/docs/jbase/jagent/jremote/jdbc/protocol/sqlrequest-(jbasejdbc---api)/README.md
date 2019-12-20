# SQLRequest (jbasejdbc   API)

**Created At:** 9/25/2017 11:04:30 AM  
**Updated At:** 2/15/2018 8:02:54 AM  
**Original Doc:** [com_jbase_jdbc_protocol_SQLRequest](https://docs.jbase.com/39240-protocol/com_jbase_jdbc_protocol_SQLRequest)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="SQLRequest (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_SQLRequest)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_SQLParamsResponse "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_SQLResponse "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_SQLRequest)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_SQLRequest)


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
- - [com.jbase.jdbc.protocol.SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")
    - - com.jbase.jdbc.protocol.SQLRequest


- All Implemented Interfaces:[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")Direct Known Subclasses:[BindRequest](/39240-protocol/com_jbase_jdbc_protocol_BindRequest "class in com.jbase.jdbc.protocol"), [ExecuteRequest](/39240-protocol/com_jbase_jdbc_protocol_ExecuteRequest "class in com.jbase.jdbc.protocol"), [FetchRequest](/39240-protocol/com_jbase_jdbc_protocol_FetchRequest "class in com.jbase.jdbc.protocol"), [MetaDataRequest](/39240-protocol/com_jbase_jdbc_protocol_metadatarequest "class in com.jbase.jdbc.protocol"), [ReleaseRequest](/39240-protocol/com_jbase_jdbc_protocol_ReleaseRequest "class in com.jbase.jdbc.protocol"), [SetPropertiesRequest](/39240-protocol/com_jbase_jdbc_protocol_SetPropertiesRequest "class in com.jbase.jdbc.protocol")
* * *


```
public abstract class SQLRequest
extends SQLStartRequest
```

Base class of all SQL driver's requests.<br><br> Derived classes should override method getType, and both methods {write|read}Object<br> if they want to serialize / deserialize attributes other then statementId.
Author:Peter Kuchta

- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
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


        - ### Methods inherited from class com.jbase.jdbc.protocol.[SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")
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
- [Package](/39240-protocol/com_jbase_jdbc_protocol_package-summary)
- Class
- [Use](/39241-class-use/com_jbase_jdbc_protocol_class-use_SQLRequest)
- [Tree](/39240-protocol/com_jbase_jdbc_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39240-protocol/com_jbase_jdbc_protocol_SQLParamsResponse "class in com.jbase.jdbc.protocol")
- [Next Class](/39240-protocol/com_jbase_jdbc_protocol_SQLResponse "class in com.jbase.jdbc.protocol")


- [Frames](../../../../index.html?com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_SQLRequest)
- [No Frames](/39240-protocol/com_jbase_jdbc_protocol_SQLRequest)


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
