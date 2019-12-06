# JBaseJDBCObjectFactory (jbasejdbc API)

**Created At:** 9/25/2017 10:52:27 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JBaseJDBCObjectFactory (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



# Class JBaseJDBCObjectFactory

```
public class JBaseJDBCObjectFactory
extends ObjectFactory
```

Creates objects received from the jbase\_agent server.



# Nested Class Summary


| <br>Modifier and Type<br> | <br>Class and Description<br> |
| --- | --- |
| <br>static interface<br> | <br>[JBaseJDBCObjectFactory.TYPE](/39232-io/com_jbase_jdbc_io_JBaseJDBCObjectFactory.TYPE "interface in com.jbase.jdbc.io")<br> |








# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>JBaseJDBCObjectFactory()<br> |






# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> | Description<br> |
| --- | --- | --- |
| <br>`protected JBaseSerializable`<br> | <br>`createObject(int objectType)`<br> | <br>Create JBaseSerializable object from the supplied object type.<br> |




# Methods inherited from class com.jbase.jdbc.io.ObjectFactory
`createGenericObjects`







# Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# Constructor Detail



#### **JBaseJDBCObjectFactory**

```
public JBaseJDBCObjectFactory()
```









# Method Detail

#### **createObject**

```
protected JBaseSerializable createObject(int objectType)
                                  throws UnknownTypeException
```



Description copied from class: `ObjectFactory`

Create JBaseSerializable object from the supplied object type.

**Specified by:**`createObject` in class `ObjectFactory`
**Parameters:**`objectType` - type identifier
**Returns:**an instance of a class implementing JBaseSerializable
Throws:`UnknownTypeException`


