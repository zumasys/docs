# ByteTools (jremote   API)

**Created At:** 9/25/2017 11:41:09 AM  
**Updated At:** 2/15/2018 8:02:38 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ByteTools (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":9,"i1":9,"i2":9,"i3":9};<br>var tabs = {65535:["t0","All Methods"],1:["t1","Static Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39250-io/com_jbase_jremote_io_package-summary)
- Class
- [Use](/39253-class-use/com_jbase_jremote_io_class-use_ByteTools)
- [Tree](/39250-io/com_jbase_jremote_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39250-io/com_jbase_jremote_io_byteobject "class in com.jbase.jremote.io")
- [Next Class](/39250-io/com_jbase_jremote_io_errorresponse "class in com.jbase.jremote.io")


- [Frames](../../../../index.html?com/jbase/jremote/io//39250-io/com_jbase_jremote_io_ByteTools)
- [No Frames](/39250-io/com_jbase_jremote_io_ByteTools)


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

com.jbase.jremote.io

## Class ByteTools

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.io.ByteTools


- * * *


```
public class ByteTools
extends Object
```

- - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `static short` | `MASK_TO_BYTE`  |
| `static int` | `NUMBER_OF_BITS_IN_A_BYTE`  |
| `static int` | `SIZE_OF_AN_INT_IN_BYTES`  |


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `ByteTools()`  |


    - ### Method Summary


All Methods [Static Methods](javascript:show%281%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `static String` | `dumpBytes(byte[] bs)`  |
| `static byte[]` | `intToByteArray(int value)`  |
| `static int` | `readInt(byte[] p_src)`  |
| `static void` | `writeInt(byte[] p_dest,<br>        int p_toWrite)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Field Detail

        - #### NUMBER\_OF\_BITS\_IN\_A\_BYTE

```
public static final int NUMBER_OF_BITS_IN_A_BYTE
```
See Also:[Constant Field Values](../../../../constant-values.html#com.jbase.jremote.io.ByteTools.NUMBER_OF_BITS_IN_A_BYTE)


        - #### MASK\_TO\_BYTE

```
public static final short MASK_TO_BYTE
```
See Also:[Constant Field Values](../../../../constant-values.html#com.jbase.jremote.io.ByteTools.MASK_TO_BYTE)


        - #### SIZE\_OF\_AN\_INT\_IN\_BYTES

```
public static final int SIZE_OF_AN_INT_IN_BYTES
```
See Also:[Constant Field Values](../../../../constant-values.html#com.jbase.jremote.io.ByteTools.SIZE_OF_AN_INT_IN_BYTES)


    - ### Constructor Detail

        - #### ByteTools

```
public ByteTools()
```


    - ### Method Detail

        - #### writeInt

```
public static void writeInt(byte[] p_dest,
                            int p_toWrite)
```


        - #### intToByteArray

```
public static final byte[] intToByteArray(int value)
```


        - #### readInt

```
public static int readInt(byte[] p_src)
```


        - #### dumpBytes

```
public static String dumpBytes(byte[] bs)
```

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39250-io/com_jbase_jremote_io_package-summary)
- Class
- [Use](/39253-class-use/com_jbase_jremote_io_class-use_ByteTools)
- [Tree](/39250-io/com_jbase_jremote_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39250-io/com_jbase_jremote_io_byteobject "class in com.jbase.jremote.io")
- [Next Class](/39250-io/com_jbase_jremote_io_errorresponse "class in com.jbase.jremote.io")


- [Frames](../../../../index.html?com/jbase/jremote/io//39250-io/com_jbase_jremote_io_ByteTools)
- [No Frames](/39250-io/com_jbase_jremote_io_ByteTools)


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
