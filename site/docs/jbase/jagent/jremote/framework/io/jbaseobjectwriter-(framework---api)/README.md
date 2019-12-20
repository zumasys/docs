# JBaseObjectWriter (framework   API)

**Created At:** 9/25/2017 10:31:12 AM  
**Updated At:** 2/15/2018 8:02:34 AM  
**Original Doc:** [com_jbase_framework_io_JBaseObjectWriter](https://docs.jbase.com/39220-io/com_jbase_framework_io_JBaseObjectWriter)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JBaseObjectWriter (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6,"i3":6,"i4":6,"i5":6,"i6":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_JBaseObjectWriter)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_JBaseObjectReader "interface in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_JBaseSerializable "interface in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_JBaseObjectWriter)
- [No Frames](/39220-io/com_jbase_framework_io_JBaseObjectWriter)


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

## Interface JBaseObjectWriter

- All Known Implementing Classes:[AbstractJBaseObjectWriter](../../../../com/jbase/framework/io/Abstract/39220-io/com_jbase_framework_io_JBaseObjectWriter "class in com.jbase.framework.io"), [IOJBaseObjectWriter](../../../../com/jbase/framework/io/IO/39220-io/com_jbase_framework_io_JBaseObjectWriter "class in com.jbase.framework.io"), [NIOJBaseObjectWriter](../../../../com/jbase/framework/io/NIO/39220-io/com_jbase_framework_io_JBaseObjectWriter "class in com.jbase.framework.io")
* * *


```
public interface JBaseObjectWriter
```

Serializes objects to jBASE JDBC format.
Author:Peter Kuchta

- - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Abstract Methods](javascript:show%284%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()`  |
| `void` | `writeInt(int i)`  |
| `void` | `writeObject(byte[] o)`  |
| `void` | `writeObject(IByteObject o)`  |
| `void` | `writeObject(JBaseSerializable o)`  |
| `void` | `writeObject(String o)`  |
| `void` | `writeRootObject(JBaseSerializable o)`  |

- - ### Method Detail

        - #### writeInt

```
void writeInt(int i)
       throws IOException
```
Throws:`IOException`


        - #### writeObject

```
void writeObject(JBaseSerializable o)
          throws IOException
```
Throws:`IOException`


        - #### writeObject

```
void writeObject(String o)
          throws IOException
```
Throws:`IOException`


        - #### writeObject

```
void writeObject(byte[] o)
          throws IOException
```
Throws:`IOException`


        - #### writeObject

```
void writeObject(IByteObject o)
          throws IOException
```
Throws:`IOException`


        - #### writeRootObject

```
void writeRootObject(JBaseSerializable o)
              throws IOException
```
Throws:`IOException`


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
- [Use](/39223-class-use/com_jbase_framework_io_class-use_JBaseObjectWriter)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_JBaseObjectReader "interface in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_JBaseSerializable "interface in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_JBaseObjectWriter)
- [No Frames](/39220-io/com_jbase_framework_io_JBaseObjectWriter)


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
