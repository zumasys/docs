# JBaseObjectReader (framework   API)

**Created At:** 9/25/2017 10:31:06 AM  
**Updated At:** 2/15/2018 8:02:36 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JBaseObjectReader (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6,"i3":6,"i4":6,"i5":6,"i6":6,"i7":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_JBaseObjectReader)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_JbaseMsg "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_JBaseObjectWriter "interface in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_JBaseObjectReader)
- [No Frames](/39220-io/com_jbase_framework_io_JBaseObjectReader)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

com.jbase.framework.io

## Interface JBaseObjectReader

- All Known Implementing Classes:[AbstractJBaseObjectReader](../../../../com/jbase/framework/io/Abstract/39220-io/com_jbase_framework_io_JBaseObjectReader "class in com.jbase.framework.io"), [IOJBaseObjectReader](../../../../com/jbase/framework/io/IO/39220-io/com_jbase_framework_io_JBaseObjectReader "class in com.jbase.framework.io"), [NIOJBaseObjectReader](../../../../com/jbase/framework/io/NIO/39220-io/com_jbase_framework_io_JBaseObjectReader "class in com.jbase.framework.io")
* * *


```
public interface JBaseObjectReader
```

Deserializes objects sent from the jsqld server.<br><br> Clients of classes implementing this interface use readObject method<br> to read deserialized objects.<br><br> This interface is simillar to java.io.ObjectInputStream.<br> It does not extend java.io.ObjectInputStream because that would require<br> handling of the original Java'a serialization protocol on the jsqld server.
Author:Peter Kuchta

- - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Abstract Methods](javascript:show%284%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()`  |
| `byte[]` | `readBytes()`  |
| `int` | `readInt()`<br>Reads a 32 bits integer from the underlying InputStream.<br> |
| `Object` | `readObject()`<br>Reads/deserializes next object.<br> |
| `IByteObject` | `readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned<br> if a null argument is passed in.<br> |
| `JBaseSerializable` | `readObject(JBaseSerializable o)`<br>Reads/deserializes next object, a JBaseSerializable object should be created and returned<br> if a null argument is passed in.<br> |
| `JBaseSerializable` | `readRootObject()`<br>Deserializes a root object.<br> |
| `String` | `readString()`<br>Reads a java.lang.String.<br> |

- - ### Method Detail

        - #### readObject

```
Object readObject()
           throws IOException,
                  ClassNotFoundException
```

Reads/deserializes next object.<br> Client should use Java safe cast to cast the object to an expected type.
Throws:`IOException``ClassNotFoundException`


        - #### readObject

```
JBaseSerializable readObject(JBaseSerializable o)
                      throws IOException,
                             ClassNotFoundException
```

Reads/deserializes next object, a JBaseSerializable object should be created and returned<br> if a null argument is passed in.
Throws:`IOException``ClassNotFoundException`


        - #### readObject

```
IByteObject readObject(IByteObject o)
                throws IOException
```

Reads/deserializes next byte object, a new IByteObject should be created and returned<br> if a null argument is passed in.
Throws:`IOException`


        - #### readInt

```
int readInt()
     throws IOException
```

Reads a 32 bits integer from the underlying InputStream.
Throws:`IOException`


        - #### readString

```
String readString()
           throws IOException
```

Reads a java.lang.String. This method will deserialize and convert to String a JDynArray<br> (a variable of type CVar serialized on the server).<br> It will throw an exception if the object coming from the server is of any other type.
Throws:`IOException`


        - #### readBytes

```
byte[] readBytes()
          throws IOException
```
Throws:`IOException`


        - #### readRootObject

```
JBaseSerializable readRootObject()
                          throws IOException,
                                 ClassNotFoundException
```

Deserializes a root object. This method must not be used by implementors of JBaseSerializable<br> (in readObject).
Returns:an instance of JBaseSerializableThrows:`IOException``ClassNotFoundException`


        - #### close

```
void close()
    throws IOException
```
Throws:`IOException`

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_JBaseObjectReader)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_JbaseMsg "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_JBaseObjectWriter "interface in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_JBaseObjectReader)
- [No Frames](/39220-io/com_jbase_framework_io_JBaseObjectReader)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
