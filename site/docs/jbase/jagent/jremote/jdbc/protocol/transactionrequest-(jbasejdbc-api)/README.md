# TransactionRequest (jbasejdbc API)

**Created At:** 9/25/2017 11:05:21 AM  
**Updated At:** 4/3/2018 10:13:06 PM  
**Original Doc:** [com_jbase_jdbc_protocol_transactionrequest](https://docs.jbase.com/39240-protocol/com_jbase_jdbc_protocol_transactionrequest)  
**Original ID:** 278010  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="TransactionRequest (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&lt;a name="navbar.top"&gt;&lt;/a&gt;&lt;a name="navbar.top.firstrow"&gt;&lt;/a&gt;
# Class TransactionRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")Direct Known Subclasses:[TransactionCommitRequest](./../transactioncommitrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol"), [TransactionRollbackRequest](./../transactionrollbackrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol"), [TransactionStartRequest](./../transactionstartrequest-%28jbasejdbc-api%29 "class in com.jbase.jdbc.protocol")
```
public class TransactionRequest
extends Object
implements JBaseSerializable
```



# 

# Nested Class Summary



### Nested classes/interfaces inherited from interface com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
`JBaseSerializable.TYPE`




# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>TransactionRequest()<br> |






# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>int<br> | <br>getType()<br> |
| <br>int<br> | <br>getVersion()<br> |
| <br>void<br> | <br>readObject([JBaseObjectReader](./../../io/jbaseobjectreader-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") reader, int version)<br> |
| <br>void<br> | <br>writeObject([JBaseObjectWriter](./../../io/jbaseobjectwriter-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") writer, int version)<br> |




### 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# 

# Constructor Detail

#### **TransactionRequest**

```
public TransactionRequest()
```





# Method Detail

#### **getType**

```
public int getType()
```

**Specified by:**`getType` in interface `JBaseSerializable`
**Returns:**type id of the objects, used during the serialization




#### **getVersion**

```
public int getVersion()
```

**Specified by:**`getVersion` in interface `JBaseSerializable`




#### readObject

```
public void readObject(JBaseObjectReader reader, int version)
                throws IOException, ClassNotFoundException
```

**Specified by:**`readObject` in interface `JBaseSerializable`
**Throws:**`IOException``ClassNotFoundException`




#### **writeObject**

```
public void writeObject(JBaseObjectWriter writer, int version)
                 throws IOException
```

**Specified by:**`writeObject` in interface `JBaseSerializable`
**Throws:**`IOException`




