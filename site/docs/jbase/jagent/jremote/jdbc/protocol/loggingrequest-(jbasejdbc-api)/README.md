# LoggingRequest (jbasejdbc API)

**Created At:** 9/25/2017 11:02:28 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_protocol_loggingrequest](https://docs.jbase.com/39240-protocol/com_jbase_jdbc_protocol_loggingrequest)  
**Original ID:** 277984  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="LoggingRequest (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



# Class LoggingRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")


```
public class LoggingRequest
extends Object
implements JBaseSerializable
```

# Nested Class Summary



## Nested classes/interfaces inherited from interface com.jbase.jdbc.io.JBaseSerializable
`JBaseSerializable.TYPE`




# 


# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>`LoggingRequest(String info)`<br> |
| <br>`LoggingRequest(String info, int level)`<br> |






# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>`int`<br> | <br>`getType()`<br> |
| <br>`int`<br> | <br>`getVersion()`<br> |
| <br>`void`<br> | <br>`readObject(JBaseObjectReader reader, int version)`<br> |
| <br>`void`<br> | <br>`writeObject(JBaseObjectWriter writer, int version)`<br> |




## 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# Constructor Detail

#### **LoggingRequest**

```
public LoggingRequest(String info, int level)
```





#### **LoggingRequest**

```
public LoggingRequest(String info)
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




#### **readObject**

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


