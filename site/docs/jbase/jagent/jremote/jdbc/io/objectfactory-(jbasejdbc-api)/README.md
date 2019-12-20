# ObjectFactory (jbasejdbc API)

**Created At:** 9/25/2017 10:53:38 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_io_objectfactory](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_objectfactory)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ObjectFactory (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;


# Class ObjectFactory

Direct Known Subclasses:[JBaseJDBCObjectFactory](../../../../com/jbase/jdbc/io/JBaseJDBC/39232-io/com_jbase_jdbc_io_ObjectFactory "class in com.jbase.jdbc.io")
```
public abstract class ObjectFactory
extends Object
```

# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>ObjectFactory()<br> |








# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> |  Description<br> |
| --- | --- | --- |
| <br>protected [JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")<br> | <br>createGenericObjects(int objectType)<br> | <br>Creates any generic (i.e common to all framework clients) objects.<br> |
| <br>protected abstract [JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")<br> | <br>createObject(int objectType)<br> | <br>Create JBaseSerializable object from the supplied object type.<br> |




### 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# Constructor Detail

#### **ObjectFactory**

```
public ObjectFactory()
```







# Method Detail

#### **createObject**

```
protected abstract JBaseSerializable createObject(int objectType)
                                           throws UnknownTypeException
```

Create JBaseSerializable object from the supplied object type.

**Parameters:**`objectType` - type identifier
**Returns:**an instance of a class implementing JBaseSerializable
**Throws:**`UnknownTypeException`






#### **createGenericObjects**

```
protected JBaseSerializable createGenericObjects(int objectType)
                                          throws UnknownTypeException
```



Creates any generic (i.e common to all framework clients) objects. If the object is not generic calls the client specific createObject method.
**Parameters:**`objectType` - type identifier
**Returns:**an instance of a class implementing JBaseSerializable
**Throws:**`UnknownTypeException`


