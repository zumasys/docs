# IOJBaseObjectWriter (framework   API)

**Created At:** 9/25/2017 10:30:53 AM  
**Updated At:** 2/15/2018 8:02:36 AM  
**Original Doc:** [com_jbase_framework_io_IOJBaseObjectWriter](https://docs.jbase.com/39220-io/com_jbase_framework_io_IOJBaseObjectWriter)  
**Original ID:** 277775  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="IOJBaseObjectWriter (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.framework.io-%28framework---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.framework.io.iojbaseobjectwriter-%28framework---api%29)
- [Tree](./../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](./../iojbaseobjectreader-%28framework---api%29 "class in com.jbase.framework.io")
- [Next Class](./../jbasemsg-%28framework---api%29 "class in com.jbase.framework.io")


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

## Class IOJBaseObjectWriter

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.framework.io.AbstractJBaseObjectWriter](./../abstractjbaseobjectwriter-%28framework---api%29 "class in com.jbase.framework.io")
    - - com.jbase.framework.io.IOJBaseObjectWriter


- All Implemented Interfaces:[JBaseObjectWriter](./../jbaseobjectwriter-%28framework---api%29 "interface in com.jbase.framework.io")
* * *


```
public class IOJBaseObjectWriter
extends AbstractJBaseObjectWriter
```

jBase object writer based on the DataOutputStream.

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `IOJBaseObjectWriter(OutputStream os)`  |
| `IOJBaseObjectWriter(OutputStream os,<br>                   boolean compressed,<br>                   int compressionThreshold)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()`  |
| `protected void` | `flush()`  |
| `protected void` | `outByte(byte[] b)`  |
| `protected void` | `outByte(int b)`  |
| `protected void` | `outInt(int i)`  |
| `protected void` | `outUTF(String s)`<br>Write a UTF8 string.<br> |


        - ### Methods inherited from class com.jbase.framework.io.[AbstractJBaseObjectWriter](./../abstractjbaseobjectwriter-%28framework---api%29 "class in com.jbase.framework.io")
`writeInt, writeJBaseSerializableObject, writeObject, writeObject, writeObject, writeObject, writeRootObject`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### IOJBaseObjectWriter

```
public IOJBaseObjectWriter(OutputStream os)
```


        - #### IOJBaseObjectWriter

```
public IOJBaseObjectWriter(OutputStream os,
                           boolean compressed,
                           int compressionThreshold)
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
                throws IOException
```
Specified by:`outByte` in class `AbstractJBaseObjectWriter`Throws:`IOException`


        - #### outByte

```
protected void outByte(int b)
                throws IOException
```
Specified by:`outByte` in class `AbstractJBaseObjectWriter`Throws:`IOException`


        - #### outInt

```
protected void outInt(int i)
               throws IOException
```
Specified by:`outInt` in class `AbstractJBaseObjectWriter`Throws:`IOException`


        - #### outUTF

```
protected void outUTF(String s)
               throws IOException
```

Write a UTF8 string. This could be made more efficient by implementing our own UTF8 <br> encoder (or using the DataOutputStream) instead of duplicating the string.
Specified by:`outUTF` in class `AbstractJBaseObjectWriter`Throws:`IOException`

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.framework.io-%28framework---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.framework.io.iojbaseobjectwriter-%28framework---api%29)
- [Tree](./../com.jbase.framework.io-class-hierarchy-%28framework---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](./../iojbaseobjectreader-%28framework---api%29 "class in com.jbase.framework.io")
- [Next Class](./../jbasemsg-%28framework---api%29 "class in com.jbase.framework.io")


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
