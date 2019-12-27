# TransactionCommitRequest (jbasejdbc API)

**Created At:** 9/25/2017 11:05:14 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_protocol_transactioncommitrequest](https://docs.jbase.com/39240-protocol/com_jbase_jdbc_protocol_transactioncommitrequest)  
**Original ID:** 278009  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="TransactionCommitRequest (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



# Class TransactionCommitRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")


```
public class TransactionCommitRequest
extends TransactionRequest
```



# 

# 


# Nested Class Summary

## 

## Nested classes/interfaces inherited from interface com.jbase.jdbc.io.JBaseSerializable
`JBaseSerializable.TYPE`








# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>TransactionCommitRequest()<br> |






# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>int<br> | <br>getType()<br> |




## 

## 


## Methods inherited from class com.jbase.jdbc.protocol.TransactionRequest
`getVersion, readObject, writeObject`




## 

## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
# 


# Constructor Detail

#### **TransactionCommitRequest**

```
public TransactionCommitRequest()
```



# 

# 


# Method Detail

#### **getType**

```
public int getType()
```

**Specified by:**`getType` in interface `JBaseSerializable`
**Overrides:**`getType` in class `TransactionRequest`
**Returns:**type id of the objects, used during the serialization


