# NIOJBaseObjectReader (framework   API)

**Created At:** 9/25/2017 10:31:44 AM  
**Updated At:** 2/15/2018 8:02:36 AM  
**Original Doc:** [com_jbase_framework_io_NIOJBaseObjectReader](https://docs.jbase.com/39220-io/com_jbase_framework_io_NIOJBaseObjectReader)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="NIOJBaseObjectReader (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.framework.io-%28framework---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.framework.io.niojbaseobjectreader-%28framework---api%29)
- [Tree](./../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](./../naivetrustmanager-%28framework---api%29 "class in com.jbase.framework.io")
- [Next Class](./../niojbaseobjectwriter-%28framework---api%29 "class in com.jbase.framework.io")


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

## Class NIOJBaseObjectReader

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.framework.io.AbstractJBaseObjectReader](./../abstractjbaseobjectreader-%28framework---api%29 "class in com.jbase.framework.io")
    - - com.jbase.framework.io.NIOJBaseObjectReader


- All Implemented Interfaces:[JBaseObjectReader](./../jbaseobjectreader-%28framework---api%29 "interface in com.jbase.framework.io")
* * *


```
public class NIOJBaseObjectReader
extends AbstractJBaseObjectReader
```

jBase object reader based on the new Java IO.
Author:aphethean

- - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `static long` | `READ_TIMEOUT`<br>The temporary selectors read timeout.<br> |


        - ### Fields inherited from class com.jbase.framework.io.[AbstractJBaseObjectReader](./../abstractjbaseobjectreader-%28framework---api%29 "class in com.jbase.framework.io")
`log`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `NIOJBaseObjectReader(ObjectFactory factory,<br>                    SocketChannel channel)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | `checkBuffer(int newDataLength)`  |
| `void` | `close()`  |
| `protected int` | `doRead(int numberOfBytes)`<br>Read bytes using the read a temporary Selector<br> |
| `protected byte` | `getByte()`  |
| `protected int` | `getBytes(byte[] buf)`  |
| `protected int` | `getBytes(ByteBuffer bBuf)`  |
| `protected int` | `getInt()`  |
| `ObjectFactory` | `getObjectFactory()`<br>This method must be implemented by concrete ObjectReaders.<br> |
| `protected int` | `inBytes(int numberOfBytesToRead)`  |
| `boolean` | `isClosed()`  |
| `protected String` | `readUTF()`  |
| `void` | `setSocketChannel(SocketChannel socketChannel)`  |


        - ### Methods inherited from class com.jbase.framework.io.[AbstractJBaseObjectReader](./../abstractjbaseobjectreader-%28framework---api%29 "class in com.jbase.framework.io")
`bufferedRead, checkBuffer, readByteObject, readBytes, readInt, readJBaseSerializableObject, readObject, readObject, readObject, readRootObject, readString`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Field Detail

        - #### READ\_TIMEOUT

```
public static final long READ_TIMEOUT
```

The temporary selectors read timeout.  30 seconds.
See Also:[Constant Field Values](../../../../constant-values.html#com.jbase.framework.io.NIOJBaseObjectReader.READ_TIMEOUT)


    - ### Constructor Detail

        - #### NIOJBaseObjectReader

```
public NIOJBaseObjectReader(ObjectFactory factory,
                            SocketChannel channel)
```


    - ### Method Detail

        - #### getObjectFactory

```
public ObjectFactory getObjectFactory()
```

Description copied from class: `AbstractJBaseObjectReader`

This method must be implemented by concrete ObjectReaders.
Specified by:`getObjectFactory` in class `AbstractJBaseObjectReader`Returns:an instance of a class implementing JBaseSerializable


        - #### close

```
public void close()
           throws IOException
```
Specified by:`close` in interface `JBaseObjectReader`Specified by:`close` in class `AbstractJBaseObjectReader`Throws:`IOException`


        - #### getByte

```
protected byte getByte()
                throws IOException
```
Specified by:`getByte` in class `AbstractJBaseObjectReader`Throws:`IOException`


        - #### getInt

```
protected int getInt()
              throws IOException
```
Specified by:`getInt` in class `AbstractJBaseObjectReader`Throws:`IOException`


        - #### getBytes

```
protected int getBytes(byte[] buf)
                throws IOException
```
Specified by:`getBytes` in class `AbstractJBaseObjectReader`Throws:`IOException`


        - #### getBytes

```
protected int getBytes(ByteBuffer bBuf)
                throws IOException
```
Specified by:`getBytes` in class `AbstractJBaseObjectReader`Throws:`IOException`


        - #### inBytes

```
protected int inBytes(int numberOfBytesToRead)
               throws IOException
```
Specified by:`inBytes` in class `AbstractJBaseObjectReader`Throws:`IOException`


        - #### readUTF

```
protected String readUTF()
                  throws IOException
```
Specified by:`readUTF` in class `AbstractJBaseObjectReader`Throws:`IOException`


        - #### doRead

```
protected int doRead(int numberOfBytes)
              throws IOException
```

Read bytes using the read a temporary Selector
Throws:`IOException`


        - #### checkBuffer

```
protected void checkBuffer(int newDataLength)
```


        - #### isClosed

```
public boolean isClosed()
```


        - #### setSocketChannel

```
public void setSocketChannel(SocketChannel socketChannel)
```

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.framework.io-%28framework---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.framework.io.niojbaseobjectreader-%28framework---api%29)
- [Tree](./../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](./../naivetrustmanager-%28framework---api%29 "class in com.jbase.framework.io")
- [Next Class](./../niojbaseobjectwriter-%28framework---api%29 "class in com.jbase.framework.io")


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
