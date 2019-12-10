# JBaseSerializable (framework   API)

**Created At:** 9/25/2017 10:31:19 AM  
**Updated At:** 2/15/2018 8:02:27 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JBaseSerializable (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6,"i3":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_JBaseSerializable)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_JBaseObjectWriter "interface in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_JBaseSerializable.TYPE "interface in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_JBaseSerializable)
- [No Frames](/39220-io/com_jbase_framework_io_JBaseSerializable)


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

## Interface JBaseSerializable

- All Known Implementing Classes:[ErrorResponse](/39220-io/com_jbase_framework_io_ErrorResponse "class in com.jbase.framework.io"), [OKResponse](/39220-io/com_jbase_framework_io_OKResponse "class in com.jbase.framework.io"), [Response](/39220-io/com_jbase_framework_io_Response "class in com.jbase.framework.io"), [SQLError](/39220-io/com_jbase_framework_io_SQLError "class in com.jbase.framework.io")
* * *


```
public interface JBaseSerializable
```

Interface which must be implemented by objects which take part in the<br> JDBC driver  jbase\_agent communication.<br><br> Note: the interface is not compatible with standard Java<br> java.io.Serializable. This is because we do not intend to implement Java<br> serialization protocol for our purposes (note: this is about Java  C++ communication).<br><br> Each class implementing this interface should have a counterpart<br> on the server side with compatible serializing/deserializing protocol.
Author:Peter Kuchta

- - ### Nested Class Summary


Nested Classes | Modifier and Type | Interface and Description |
| --- | --- |
| `static interface` | `JBaseSerializable.TYPE`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Abstract Methods](javascript:show%284%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer,<br>           int version)`  |

- - ### Method Detail

        - #### writeObject

```
void writeObject(JBaseObjectWriter writer,
                 int version)
          throws IOException
```
Throws:`IOException`


        - #### readObject

```
void readObject(JBaseObjectReader reader,
                int version)
         throws IOException,
                ClassNotFoundException
```
Throws:`IOException``ClassNotFoundException`


        - #### getType

```
int getType()
```
Returns:type id of the objects, used during the serialization


        - #### getVersion

```
int getVersion()
```

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_JBaseSerializable)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_JBaseObjectWriter "interface in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_JBaseSerializable.TYPE "interface in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_JBaseSerializable)
- [No Frames](/39220-io/com_jbase_framework_io_JBaseSerializable)


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
