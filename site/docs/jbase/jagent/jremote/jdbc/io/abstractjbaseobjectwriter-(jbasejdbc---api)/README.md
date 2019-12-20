# AbstractJBaseObjectWriter (jbasejdbc   API)

**Created At:** 9/25/2017 10:43:09 AM  
**Updated At:** 2/15/2018 8:02:40 AM  
**Original Doc:** [com_jbase_jdbc_io_AbstractJBaseObjectWriter](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="AbstractJBaseObjectWriter (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6,"i3":6,"i4":6,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- Class
- [Use](/39235-class-use/com_jbase_jdbc_io_class-use_AbstractJBaseObjectWriter)
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader "class in com.jbase.jdbc.io")
- [Next Class](/39232-io/com_jbase_jdbc_io_ByteObject "class in com.jbase.jdbc.io")


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter)
- [No Frames](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter)


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

com.jbase.jdbc.io

## Class AbstractJBaseObjectWriter

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.io.AbstractJBaseObjectWriter


- All Implemented Interfaces:[JBaseObjectWriter](/39232-io/com_jbase_jdbc_io_jbaseobjectwriter "interface in com.jbase.jdbc.io")Direct Known Subclasses:[IOJBaseObjectWriter](/39232-io/com_jbase_jdbc_io_IOJBaseObjectWriter "class in com.jbase.jdbc.io"), [NIOJBaseObjectWriter](/39232-io/com_jbase_jdbc_io_niojbaseobjectwriter "class in com.jbase.jdbc.io")
* * *


```
public abstract class AbstractJBaseObjectWriter
extends Object
implements JBaseObjectWriter
```

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `AbstractJBaseObjectWriter()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Abstract Methods](javascript:show%284%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `protected abstract void` | `flush()`  |
| `protected abstract void` | `outByte(byte[] b)`  |
| `protected abstract void` | `outByte(int b)`  |
| `protected abstract void` | `outInt(int i)`  |
| `protected abstract void` | `outUTF(String s)`  |
| `void` | `writeInt(int i)`  |
| `protected void` | `writeJBaseSerializableObject(JBaseSerializable o)`  |
| `void` | `writeObject(byte[] data)`  |
| `void` | `writeObject(IByteObject o)`  |
| `void` | `writeObject(JBaseSerializable o)`  |
| `void` | `writeObject(String o)`  |
| `void` | `writeRootObject(JBaseSerializable o)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


        - ### Methods inherited from interface com.jbase.jdbc.io.[JBaseObjectWriter](/39232-io/com_jbase_jdbc_io_jbaseobjectwriter "interface in com.jbase.jdbc.io")
`close`

- - ### Constructor Detail

        - #### AbstractJBaseObjectWriter

```
public AbstractJBaseObjectWriter()
```


    - ### Method Detail

        - #### outByte

```
protected abstract void outByte(byte[] b)
                         throws IOException
```
Throws:`IOException`


        - #### outByte

```
protected abstract void outByte(int b)
                         throws IOException
```
Throws:`IOException`


        - #### outInt

```
protected abstract void outInt(int i)
                        throws IOException
```
Throws:`IOException`


        - #### outUTF

```
protected abstract void outUTF(String s)
                        throws IOException
```
Throws:`IOException`


        - #### flush

```
protected abstract void flush()
                       throws IOException
```
Throws:`IOException`


        - #### writeInt

```
public void writeInt(int i)
              throws IOException
```
Specified by:`writeInt` in interface `JBaseObjectWriter`Throws:`IOException`


        - #### writeObject

```
public void writeObject(String o)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`


        - #### writeObject

```
public void writeObject(byte[] data)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`


        - #### writeObject

```
public void writeObject(IByteObject o)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`


        - #### writeObject

```
public void writeObject(JBaseSerializable o)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`


        - #### writeJBaseSerializableObject

```
protected void writeJBaseSerializableObject(JBaseSerializable o)
                                     throws IOException
```
Throws:`IOException`


        - #### writeRootObject

```
public void writeRootObject(JBaseSerializable o)
                     throws IOException
```
Specified by:`writeRootObject` in interface `JBaseObjectWriter`Throws:`IOException`

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39232-io/com_jbase_jdbc_io_package-summary)
- Class
- [Use](/39235-class-use/com_jbase_jdbc_io_class-use_AbstractJBaseObjectWriter)
- [Tree](/39232-io/com_jbase_jdbc_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectReader "class in com.jbase.jdbc.io")
- [Next Class](/39232-io/com_jbase_jdbc_io_ByteObject "class in com.jbase.jdbc.io")


- [Frames](../../../../index.html?com/jbase/jdbc/io//39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter)
- [No Frames](/39232-io/com_jbase_jdbc_io_AbstractJBaseObjectWriter)


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
