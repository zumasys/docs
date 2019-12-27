# PrefixByteBuffer (framework   API)

**Created At:** 9/25/2017 10:32:36 AM  
**Updated At:** 2/15/2018 8:02:28 AM  
**Original Doc:** [com_jbase_framework_io_PrefixByteBuffer](https://docs.jbase.com/39220-io/com_jbase_framework_io_PrefixByteBuffer)  
**Original ID:** 277791  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="PrefixByteBuffer (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.framework.io-%28framework---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.framework.io.prefixbytebuffer-%28framework---api%29)
- [Tree](./../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](./../okresponse-%28framework---api%29 "class in com.jbase.framework.io")
- [Next Class](./../response-%28framework---api%29 "class in com.jbase.framework.io")


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

## Class PrefixByteBuffer

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.framework.io.PrefixByteBuffer


- * * *


```
public class PrefixByteBuffer
extends Object
```

- - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `static int` | `CHUNK_SIZE`  |


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `PrefixByteBuffer()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `void` | `clear()`<br>Method:         clear()<br><br> Description:   Reset buffer to its empty state.<br> |
| `void` | `flip()`<br>Method:         flip()<br><br> Description:   Similar the ByteBuffer.flip() but the position must be<br> set back to the start of the prefix.<br> |
| `byte[]` | `getBackingArray()`<br>Method:                 getBackingArray()<br><br> Description:   Returns a pointer to the backing array<br><br> Note:                  DANGEROUS.<br> |
| `byte` | `getByte()`  |
| `void` | `getBytes(byte[] buf)`  |
| `void` | `getBytes(ByteBuffer bBuf)`  |
| `int` | `getInt()`  |
| `int` | `getStartOffset()`  |
| `String` | `getUTF8()`  |
| `int` | `length()`  |
| `void` | `pushByte(int b)`<br>Write bytes to start methods<br> |
| `void` | `pushBytes(byte[] b)`  |
| `void` | `pushInt(int v)`  |
| `void` | `putByte(int b)`<br>Write bytes to end methods<br> |
| `void` | `putBytes(byte[] b)`  |
| `void` | `putInt(int v)`  |
| `void` | `putUTF8(String s)`  |
| `void` | `readFrom(ByteBuffer buf)`<br>Method:                 readFrom()<br><br> Description:           Read a BufferBuffer into self as if it had been received<br>                                        from an InputStream.<br> |
| `void` | `readFrom(InputStream is,<br>        int length)`<br>Method:                 readFrom()<br><br> Description:           Reads a given number of bytes from a given input stream.<br> |
| `void` | `writeTo(ByteBuffer buf)`  |
| `void` | `writeTo(OutputStream os)`<br>Method:                 writeTo()<br><br> Description:   Write data to a given OutputStream.<br> |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Field Detail

        - #### CHUNK\_SIZE

```
public static final int CHUNK_SIZE
```
See Also:[Constant Field Values](../../../../constant-values.html#com.jbase.framework.io.PrefixByteBuffer.CHUNK_SIZE)


    - ### Constructor Detail

        - #### PrefixByteBuffer

```
public PrefixByteBuffer()
```


    - ### Method Detail

        - #### length

```
public int length()
```


        - #### flip

```
public void flip()
```

Method:         flip()<br><br> Description:   Similar the ByteBuffer.flip() but the position must be<br> set back to the start of the prefix.


        - #### clear

```
public void clear()
```

Method:         clear()<br><br> Description:   Reset buffer to its empty state. Since we will need it again do not loose<br> the backing array.


        - #### writeTo

```
public void writeTo(OutputStream os)
             throws IOException
```

Method:                 writeTo()<br><br> Description:   Write data to a given OutputStream. Must be fast so don't<br>                                        use get().
Throws:`IOException`


        - #### writeTo

```
public void writeTo(ByteBuffer buf)
```


        - #### readFrom

```
public void readFrom(InputStream is,
                     int length)
              throws IOException
```

Method:                 readFrom()<br><br> Description:           Reads a given number of bytes from a given input stream.
Throws:`IOException`


        - #### readFrom

```
public void readFrom(ByteBuffer buf)
```

Method:                 readFrom()<br><br> Description:           Read a BufferBuffer into self as if it had been received<br>                                        from an InputStream.<br><br> Note:                  USED ONLY FOR UNIT TESTING.


        - #### getBackingArray

```
public byte[] getBackingArray()
```

Method:                 getBackingArray()<br><br> Description:   Returns a pointer to the backing array<br><br> Note:                  DANGEROUS. DO NOT MODIFY RETURNED ARRAY.


        - #### getStartOffset

```
public int getStartOffset()
```


        - #### putByte

```
public void putByte(int b)
```

Write bytes to end methods


        - #### putBytes

```
public void putBytes(byte[] b)
```


        - #### putUTF8

```
public void putUTF8(String s)
             throws IOException
```
Throws:`IOException`


        - #### putInt

```
public void putInt(int v)
```


        - #### pushByte

```
public void pushByte(int b)
              throws BufferOverflowException
```

Write bytes to start methods
Throws:`BufferOverflowException`


        - #### pushBytes

```
public void pushBytes(byte[] b)
               throws BufferOverflowException
```
Throws:`BufferOverflowException`


        - #### pushInt

```
public void pushInt(int v)
```


        - #### getByte

```
public byte getByte()
```


        - #### getInt

```
public int getInt()
```


        - #### getBytes

```
public void getBytes(byte[] buf)
```


        - #### getBytes

```
public void getBytes(ByteBuffer bBuf)
```


        - #### getUTF8

```
public String getUTF8()
               throws IOException
```
Throws:`IOException`

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.framework.io-%28framework---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.framework.io.prefixbytebuffer-%28framework---api%29)
- [Tree](./../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](./../okresponse-%28framework---api%29 "class in com.jbase.framework.io")
- [Next Class](./../response-%28framework---api%29 "class in com.jbase.framework.io")


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
