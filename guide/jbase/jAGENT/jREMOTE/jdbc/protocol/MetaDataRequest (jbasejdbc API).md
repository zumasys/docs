# MetaDataRequest (jbasejdbc API)

**Created At:** 9/25/2017 11:02:34 AM  
**Updated At:** 4/3/2018 10:12:41 PM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="MetaDataRequest (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



# Class MetaDataRequest

All Implemented Interfaces:[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
```
public class MetaDataRequest
extends SQLRequest
```

Request to retrieve meta data of result set of last executed query.

# Nested Class Summary



## Nested classes/interfaces inherited from interface com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
`JBaseSerializable.TYPE`








# Field Summary



## Fields inherited from class com.jbase.jdbc.protocol.[SQLRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLRequest "class in com.jbase.jdbc.protocol")
`log, statementId`






# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>`MetaDataRequest()`<br> |
| <br>`MetaDataRequest(StatementID statementId)`<br> |






# Method Summary


| <br>Modifier and Type<br> | Method<br> | <br>Description<br> |
| --- | --- | --- |
| <br>`int`<br> | <br>`getType()`<br><br> | <br>This method must be overridden by classes inheriting from SQLStartRequest.<br> |




## 


## Methods inherited from class com.jbase.jdbc.protocol.[SQLRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLRequest "class in com.jbase.jdbc.protocol")
`readObject, writeObject`





## Methods inherited from class com.jbase.jdbc.protocol.[SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")
`getVersion`





## Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# Constructor Detail

#### **MetaDataRequest**

```
public MetaDataRequest()
```





#### **MetaDataRequest**

```
public MetaDataRequest(StatementID statementId)
```







# 


# Method Detail

#### **getType**

```
public int getType()
```

Description copied from class: `SQLStartRequest.`

This method must be overridden by classes inheriting from SQLStartRequest.
**Specified by:**`getType` in interface `JBaseSerializable`
**Overrides:**`getType` in class `SQLStartRequest`
**Returns:**type id of the objects, used during the serialization


