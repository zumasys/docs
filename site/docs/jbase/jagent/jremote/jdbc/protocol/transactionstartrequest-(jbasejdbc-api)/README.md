# TransactionStartRequest (jbasejdbc API)

**Created At:** 9/25/2017 11:05:34 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_protocol_transactionstartrequest](https://docs.jbase.com/39240-protocol/com_jbase_jdbc_protocol_transactionstartrequest)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="TransactionStartRequest (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



# Class TransactionStartRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")


```
public class TransactionStartRequest
extends TransactionRequest
```









# Nested Class Summary



## Nested classes/interfaces inherited from interface com.jbase.jdbc.io.JBaseSerializable
`JBaseSerializable.TYPE`






# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>[TransactionStartRequest](../../../../com/jbase/jdbc/protocol//39240-protocol/com_jbase_jdbc_protocol_TransactionStartRequest#TransactionStartRequest-int-)(int` isolationLevel)`<br> |








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






# Constructor Detail

#### **TransactionStartRequest**

```
public TransactionStartRequest(int isolationLevel)
```









# Method Detail

#### **getType**

```
public int getType()
```

**Specified by:**`getType` in interface `JBaseSerializable`
**Overrides:**`getType` in class `TransactionRequest`
**Returns:**type id of the objects, used during the serialization






#### **getVersion**

```
public int getVersion()
```

**Specified by:**`getVersion` in interface `JBaseSerializable`
**Overrides:**`getVersion` in class `TransactionRequest`




#### **readObject**

```
public void readObject(JBaseObjectReader reader, int version)
                throws IOException, ClassNotFoundException
```

Specified by:`readObject` in interface `JBaseSerializable`
**Overrides:**`readObject` in class `TransactionRequest`
**Throws:**`IOException``ClassNotFoundException`




#### **writeObject**

```
public void writeObject(JBaseObjectWriter writer, int version)
                 throws IOException
```

**Specified by:**`writeObject` in interface `JBaseSerializable`
**Overrides:**`writeObject` in class `TransactionRequest`
**Throws:**`IOException`




