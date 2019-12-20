# ByteTools (framework   API)

**Created At:** 9/25/2017 10:22:05 AM  
**Updated At:** 2/15/2018 8:02:33 AM  
**Original Doc:** [com_jbase_framework_io_ByteTools](https://docs.jbase.com/39220-io/com_jbase_framework_io_ByteTools)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ByteTools (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":9,"i1":9,"i2":9,"i3":9};<br>var tabs = {65535:["t0","All Methods"],1:["t1","Static Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_ByteTools)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_ByteObject "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_ErrorResponse "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_ByteTools)
- [No Frames](/39220-io/com_jbase_framework_io_ByteTools)


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

## Class ByteTools

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.framework.io.ByteTools


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
See Also:[Constant Field Values](../../../../constant-values.html#com.jbase.framework.io.ByteTools.NUMBER_OF_BITS_IN_A_BYTE)


        - #### MASK\_TO\_BYTE

```
public static final short MASK_TO_BYTE
```
See Also:[Constant Field Values](../../../../constant-values.html#com.jbase.framework.io.ByteTools.MASK_TO_BYTE)


        - #### SIZE\_OF\_AN\_INT\_IN\_BYTES

```
public static final int SIZE_OF_AN_INT_IN_BYTES
```
See Also:[Constant Field Values](../../../../constant-values.html#com.jbase.framework.io.ByteTools.SIZE_OF_AN_INT_IN_BYTES)


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
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_ByteTools)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_ByteObject "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_ErrorResponse "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_ByteTools)
- [No Frames](/39220-io/com_jbase_framework_io_ByteTools)


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
