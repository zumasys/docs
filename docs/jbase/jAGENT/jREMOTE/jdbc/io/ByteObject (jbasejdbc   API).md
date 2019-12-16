# ByteObject (jbasejdbc   API)

**Created At:** 9/25/2017 10:43:15 AM  
**Updated At:** 2/15/2018 8:02:40 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ByteObject (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- Class
- [Use](/39235-class-use/com_jbase_jdbc_io_class-use_ByteObject)
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter "class in com.jbase.jdbc.io")
- [Next Class](/39232-io/com_jbase_jdbc_io_bytetools "class in com.jbase.jdbc.io")


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_ByteObject)
- [No Frames](/39232-io/com_jbase_jdbc_io_ByteObject)


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

com.jbase.jdbc.io

## Class ByteObject

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.io.ByteObject


- All Implemented Interfaces:[IByteObject](../../../../com/jbase/jdbc/io/I/39232-io/com_jbase_jdbc_io_ByteObject "interface in com.jbase.jdbc.io")
* * *


```
public class ByteObject
extends Object
implements IByteObject
```

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `ByteObject()`  |
| `ByteObject(byte[] buf)`  |
| `ByteObject(int length)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `ByteBuffer` | `getByteBuffer()`<br>This method should return a ByteBuffer set to the position to<br> start writing into it.<br> |
| `byte[]` | `getBytes()`<br>Return the bytes backing this IByteObject.<br> |
| `void` | `setByteBuffer(ByteBuffer byteBuffer)`<br>Allow the internal storage to be replaced, as it may be reallocated<br> externally.<br> |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### ByteObject

```
public ByteObject()
```


        - #### ByteObject

```
public ByteObject(byte[] buf)
```


        - #### ByteObject

```
public ByteObject(int length)
```


    - ### Method Detail

        - #### getBytes

```
public byte[] getBytes()
```

Description copied from interface: `IByteObject`

Return the bytes backing this IByteObject.
Specified by:`getBytes` in interface `IByteObject`


        - #### getByteBuffer

```
public ByteBuffer getByteBuffer()
                         throws IOException
```

Description copied from interface: `IByteObject`

This method should return a ByteBuffer set to the position to<br> start writing into it.  NOTE - if reading data the ByteBuffer<br> will be expanded to fit the amount of data being read.
Specified by:`getByteBuffer` in interface `IByteObject`Throws:`IOException`


        - #### setByteBuffer

```
public void setByteBuffer(ByteBuffer byteBuffer)
                   throws IOException
```

Description copied from interface: `IByteObject`

Allow the internal storage to be replaced, as it may be reallocated<br> externally.
Specified by:`setByteBuffer` in interface `IByteObject`Throws:`IOException`

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- Class
- [Use](/39235-class-use/com_jbase_jdbc_io_class-use_ByteObject)
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter "class in com.jbase.jdbc.io")
- [Next Class](/39232-io/com_jbase_jdbc_io_bytetools "class in com.jbase.jdbc.io")


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_ByteObject)
- [No Frames](/39232-io/com_jbase_jdbc_io_ByteObject)


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
