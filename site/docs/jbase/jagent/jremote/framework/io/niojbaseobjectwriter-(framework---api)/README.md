# NIOJBaseObjectWriter (framework   API)

**Created At:** 9/25/2017 10:31:52 AM  
**Updated At:** 2/15/2018 8:02:34 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="NIOJBaseObjectWriter (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_NIOJBaseObjectWriter)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_NIOJBaseObjectReader "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_ObjectFactory "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_NIOJBaseObjectWriter)
- [No Frames](/39220-io/com_jbase_framework_io_NIOJBaseObjectWriter)


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

## Class NIOJBaseObjectWriter

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.framework.io.AbstractJBaseObjectWriter](/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter "class in com.jbase.framework.io")
    - - com.jbase.framework.io.NIOJBaseObjectWriter


- All Implemented Interfaces:[JBaseObjectWriter](/39220-io/com_jbase_framework_io_JBaseObjectWriter "interface in com.jbase.framework.io")
* * *


```
public class NIOJBaseObjectWriter
extends AbstractJBaseObjectWriter
```

jBase object writer using the new Java IO.
Author:aphethean

- - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `static long` | `WRITE_TIMEOUT`<br>The temporary selectors write timeout.<br> |


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `NIOJBaseObjectWriter(SocketChannel socketChannel)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | `checkBuffer(int newDataLength)`  |
| `void` | `close()`  |
| `protected void` | `flush()`  |
| `protected void` | `outByte(byte[] b)`  |
| `protected void` | `outByte(int b)`  |
| `protected void` | `outInt(int i)`  |
| `protected void` | `outUTF(String s)`  |
| `void` | `setSocketChannel(SocketChannel socketChannel)`  |


        - ### Methods inherited from class com.jbase.framework.io.[AbstractJBaseObjectWriter](/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter "class in com.jbase.framework.io")
`writeInt, writeJBaseSerializableObject, writeObject, writeObject, writeObject, writeObject, writeRootObject`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Field Detail

        - #### WRITE\_TIMEOUT

```
public static final long WRITE_TIMEOUT
```

The temporary selectors write timeout.  30 seconds.
See Also:[Constant Field Values](../../../../constant-values.html#com.jbase.framework.io.NIOJBaseObjectWriter.WRITE_TIMEOUT)


    - ### Constructor Detail

        - #### NIOJBaseObjectWriter

```
public NIOJBaseObjectWriter(SocketChannel socketChannel)
```


    - ### Method Detail

        - #### close

```
public void close()
           throws IOException
```
Throws:`IOException`


        - #### flush

```
protected void flush()
              throws IOException
```
Specified by:`flush` in class `AbstractJBaseObjectWriter`Throws:`IOException`


        - #### outByte

```
protected void outByte(byte[] b)
```
Specified by:`outByte` in class `AbstractJBaseObjectWriter`


        - #### outByte

```
protected void outByte(int b)
```
Specified by:`outByte` in class `AbstractJBaseObjectWriter`


        - #### outInt

```
protected void outInt(int i)
```
Specified by:`outInt` in class `AbstractJBaseObjectWriter`


        - #### outUTF

```
protected void outUTF(String s)
```
Specified by:`outUTF` in class `AbstractJBaseObjectWriter`


        - #### checkBuffer

```
protected void checkBuffer(int newDataLength)
```


        - #### setSocketChannel

```
public void setSocketChannel(SocketChannel socketChannel)
```

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_NIOJBaseObjectWriter)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_NIOJBaseObjectReader "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_ObjectFactory "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_NIOJBaseObjectWriter)
- [No Frames](/39220-io/com_jbase_framework_io_NIOJBaseObjectWriter)


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
