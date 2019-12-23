# JBaseObjectWriter (jbasejdbc API)

**Created At:** 9/25/2017 10:52:54 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_io_jbaseobjectwriter](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_jbaseobjectwriter)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JBaseObjectWriter (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6,"i3":6,"i4":6,"i5":6,"i6":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browse



# Interface JBaseObjectWriter

All Known Implementing Classes:[AbstractJBaseObjectWriter](./../abstractjbaseobjectwriter-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io"), [IOJBaseObjectWriter](./../iojbaseobjectwriter-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io"), [NIOJBaseObjectWriter](./../niojbaseobjectwriter-%28jbasejdbc---api%29 "class in com.jbase.jdbc.io")


```
public interface JBaseObjectWriter
```

Serializes objects to jBASE JDBC format.

# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>void<br> | <br>close()<br> |
| <br>void<br> | <br>writeInt(int i)<br> |
| <br>void<br> | <br>writeObject(byte[] o)<br> |
| <br>void<br> | <br>writeObject([IByteObject](./../ibyteobject-%28jbasejdbc---api%29 "interface in com.jbase.jdbc.io") o)<br> |
| <br>void<br> | <br>writeObject([JBaseSerializable](./../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") o)<br> |
| <br>void<br> | <br>writeObject([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") o)<br> |
| <br>void<br> | <br>writeRootObject([JBaseSerializable](./../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io") o)<br> |

# Method Detail

#### **writeInt**

```
void writeInt(int i)
       throws IOException
```

**Throws:**`IOException`




#### **writeObject**

```
void writeObject(JBaseSerializable o)
          throws IOException
```

**Throws:**`IOException`




#### **writeObject**

```
void writeObject(String o)
          throws IOException
```

**Throws:**`IOException`




#### **writeObject**

```
void writeObject(byte[] o)
          throws IOException
```

**Throws:**`IOException`




#### **writeObject**

```
void writeObject(IByteObject o)
          throws IOException
```

**Throws:**`IOException`




#### **writeRootObject**

```
void writeRootObject(JBaseSerializable o)
              throws IOException
```

**Throws:**`IOException`




#### **close**

```
void close()
    throws IOException
```

**Throws:**`IOException`


