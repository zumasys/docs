# ByteObject (framework   API)

**Created At:** 9/25/2017 10:21:59 AM  
**Updated At:** 2/15/2018 8:02:33 AM  
**Original Doc:** [com_jbase_framework_io_ByteObject](https://docs.jbase.com/39220-io/com_jbase_framework_io_ByteObject)  
**Original ID:** 277703  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ByteObject (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.framework.io-%28framework---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.framework.io.byteobject-%28framework---api%29)
- [Tree](./../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](./../abstractjbaseobjectwriter-%28framework---api%29 "class in com.jbase.framework.io")
- [Next Class](./../bytetools-%28framework---api%29 "class in com.jbase.framework.io")


- [Frames](./.)
- [No Frames](./.)


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

## Class ByteObject

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.framework.io.ByteObject


- All Implemented Interfaces:[IByteObject](./. "interface in com.jbase.framework.io")
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
- [Package](./../com.jbase.framework.io-%28framework---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.framework.io.byteobject-%28framework---api%29)
- [Tree](./../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](./../abstractjbaseobjectwriter-%28framework---api%29 "class in com.jbase.framework.io")
- [Next Class](./../bytetools-%28framework---api%29 "class in com.jbase.framework.io")


- [Frames](./.)
- [No Frames](./.)


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
