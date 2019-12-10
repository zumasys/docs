# TransactionRollbackRequest (jbasejdbc API)

**Created At:** 9/25/2017 11:05:27 AM  
**Updated At:** 4/3/2018 10:13:55 PM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="TransactionRollbackRequest (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



# Class TransactionRollbackRequest

All Implemented Interfaces:[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
```
public class TransactionRollbackRequest
extends TransactionRequest
```



# Nested Class Summary



## Nested classes/interfaces inherited from interface com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
`JBaseSerializable.TYPE`






# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>TransactionRollbackRequest()<br> |






# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>int<br> | <br>getType()<br> |




## 


## Methods inherited from class com.jbase.jdbc.protocol.TransactionRequest
`getVersion, readObject, writeObject`





## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# Constructor Detail



#### **TransactionRollbackRequest**

```
public TransactionRollbackRequest()
```







# Method Detail



#### **getType**

```
public int getType()
```

**Specified by:**`getType` in interface `JBaseSerializable`
**Overrides:**`getType` in class `TransactionRequest`
**Returns:**type id of the objects, used during the serialization


