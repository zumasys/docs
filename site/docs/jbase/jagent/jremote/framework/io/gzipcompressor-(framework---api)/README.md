# GZipCompressor (framework   API)

**Created At:** 9/25/2017 10:27:53 AM  
**Updated At:** 2/15/2018 8:02:33 AM  
**Original Doc:** [com_jbase_framework_io_GZipCompressor](https://docs.jbase.com/39220-io/com_jbase_framework_io_GZipCompressor)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="GZipCompressor (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_GZipCompressor)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_ErrorResponse "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_IByteObject "interface in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_GZipCompressor)
- [No Frames](/39220-io/com_jbase_framework_io_GZipCompressor)


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

## Class GZipCompressor

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.framework.io.GZipCompressor


- * * *


```
public class GZipCompressor
extends Object
```

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `GZipCompressor()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `byte[]` | `compress(byte[] data)`  |
| `byte[]` | `compress(byte[] data,<br>        int start,<br>        int sz)`  |
| `byte[]` | `uncompress(byte[] data)`  |
| `byte[]` | `uncompress(byte[] data,<br>          int start,<br>          int sz)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### GZipCompressor

```
public GZipCompressor()
```


    - ### Method Detail

        - #### compress

```
public byte[] compress(byte[] data)
                throws IOException
```
Throws:`IOException`


        - #### compress

```
public byte[] compress(byte[] data,
                       int start,
                       int sz)
                throws IOException
```
Throws:`IOException`


        - #### uncompress

```
public byte[] uncompress(byte[] data)
                  throws IOException
```
Throws:`IOException`


        - #### uncompress

```
public byte[] uncompress(byte[] data,
                         int start,
                         int sz)
                  throws IOException
```
Throws:`IOException`

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_GZipCompressor)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_ErrorResponse "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_IByteObject "interface in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_GZipCompressor)
- [No Frames](/39220-io/com_jbase_framework_io_GZipCompressor)


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
