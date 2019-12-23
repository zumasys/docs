# SQLError (jbasejdbc API)

**Created At:** 9/25/2017 10:54:30 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_io_sqlerror](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_sqlerror)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="SQLError (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&amp;amp;lt;div&amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;lt;/div&amp;amp;gt;


# Class SQLError

All Implemented Interfaces:[JBaseSerializable](./../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
```
public class SQLError
extends Object
implements JBaseSerializable
```



# Nested Class Summary



## Nested classes/interfaces inherited from interface com.jbase.jdbc.io.JBaseSerializable
`JBaseSerializable.TYPE`








# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>SQLError()<br> |






# Method Summary

| <br>Modifier and Type<br> | <br>Method<br> | Description<br> |
| --- | --- | --- |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>getMessage()<br> | <br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>getSQLClass()<br> | <br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>getSQLSubClass()<br> | <br> |
| <br>int<br> | <br>getType()<br> | <br> |
| <br>int<br> | <br>getVersion()<br> | <br> |
| <br>void<br> | <br>readObject([JBaseObjectReader](./../jbaseobjectreader-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") reader, int version)<br> | Method : readObject()<br>Description: Read object off the wire.<br> |
| <br>void<br> | <br>writeObject([JBaseObjectWriter](./../jbaseobjectwriter-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") writer, int version)<br> | <br> |




## 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# Constructor Detail

#### **SQLError**

```
public SQLError()
```









# Method Detail

#### **getMessage**

```
public String getMessage()
```





#### **getSQLClass**

```
public String getSQLClass()
```





#### **getSQLSubClass**

```
public String getSQLSubClass()
```





#### **writeObject**

```
public void writeObject(JBaseObjectWriter writer, int version)
                 throws IOException
```
**Specified by:**`writeObject` in interface `JBaseSerializable`
**Throws:**`IOException`




#### readObject

```
public void readObject(JBaseObjectReader reader, int version)
                throws IOException, ClassNotFoundException
```

**Method:** readObject()

**Description:**Read object off the wire. Note: One day we must convert this to pass C++ strings for its member fields. However, for now, jcf does not support this so pass CVars. 
**Specified by:**`readObject` in interface `JBaseSerializable`
**Throws:**`IOException``ClassNotFoundException`





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




