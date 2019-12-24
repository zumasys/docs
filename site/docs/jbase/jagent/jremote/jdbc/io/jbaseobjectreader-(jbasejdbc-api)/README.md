# JBaseObjectReader (jbasejdbc API)

**Created At:** 9/25/2017 10:52:47 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_io_jbaseobjectreader](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_jbaseobjectreader)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JBaseObjectReader (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6,"i3":6,"i4":6,"i5":6,"i6":6,"i7":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser



# Interface JBaseObjectReader

All Known Implementing Classes:[AbstractJBaseObjectReader](./. "class in com.jbase.jdbc.io"), [IOJBaseObjectReader](./. "class in com.jbase.jdbc.io"), [NIOJBaseObjectReader](./. "class in com.jbase.jdbc.io")
```
public interface JBaseObjectReader
```

Deserializes objects sent from the jsqld server. Clients of classes implementing this interface use readObject method to read deserialized objects. This interface is simillar to java.io.ObjectInputStream. It does not extend java.io.ObjectInputStream because that would require handling of the original Java'a serialization protocol on the jsqld server.

# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> |  Description<br> |
| --- | --- | --- |
| <br>void<br> | <br>close()<br> | <br> |
| <br>byte[]<br> | <br>readBytes()<br> | <br> |
| <br>int<br> | <br>readInt()<br> | <br>Reads a 32 bits integer from the underlying InputStream.<br> |
| <br>[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")<br> | <br>readObject()<br> | <br>Reads/deserializes next object.<br> |
| <br>[IByteObject](./../ibyteobject-%28jbasejdbc---api%29 "interface in com.jbase.jdbc.io")<br> | <br>readObject([IByteObject](./../ibyteobject-%28jbasejdbc---api%29 "interface in com.jbase.jdbc.io") o)<br> | <br>Reads/deserializes next byte object, a new IByteObject should be created and returned if a null argument is passed in.<br><br> |
| <br>[JBaseSerializable](./../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")<br> | <br>readObject([JBaseSerializable](./../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") o)<br> | Reads/deserializes next object, a JBaseSerializable object should be created and returned if a null argument is passed in.<br> |
| <br>[JBaseSerializable](./../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")<br> | <br>readRootObject()<br> | <br>Deserializes a root object.<br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>readString()<br> | <br>Reads a java.lang.String.<br> |

# Method Detail

#### **readObject**

```
Object readObject()
           throws IOException, ClassNotFoundException
```



Reads/deserializes next object. Client should use Java safe cast to cast the object to an expected type.

**Throws:**`IOException``ClassNotFoundException`






#### **readObject**

```
JBaseSerializable readObject(JBaseSerializable o)
                      throws IOException, ClassNotFoundException
```



Reads/deserializes next object, a JBaseSerializable object should be created and returned if a null argument is passed in.

**Throws:**`IOException``ClassNotFoundException`




#### **readObject**

```
IByteObject readObject(IByteObject o)
                throws IOException
```



Reads/deserializes next byte object, a new IByteObject should be created and returned if a null argument is passed in.

**Throws:**`IOException`




#### **readInt**

```
int readInt()
     throws IOException
```



Reads a 32 bits integer from the underlying InputStream.

**Throws:**`IOException`




#### **readString**

```
String readString()
           throws IOException
```



Reads a java.lang.String. This method will deserialize and convert to String a JDynArray (a variable of type CVar serialized on the server). It will throw an exception if the object coming from the server is of any other type.

**Throws:**`IOException`




#### **readBytes**

```
byte[] readBytes()
          throws IOException
```

**Throws:**`IOException`




#### **readRootObject**

```
JBaseSerializable readRootObject()
                          throws IOException, ClassNotFoundException
```



Deserializes a root object. This method must not be used by implementors of JBaseSerializable (in readObject).

**Returns:**an instance of JBaseSerializable
**Throws:**`IOException``ClassNotFoundException`




#### **close**

```
void close()
    throws IOException
```


**Throws:**`IOException`


