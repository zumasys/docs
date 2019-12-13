# JbaseCharset (jremote   API)

**Created At:** 9/25/2017 11:42:01 AM  
**Updated At:** 2/15/2018 8:02:17 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JbaseCharset (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39251-charset/com_jbase_jremote_io_charset_package-summary)
- Class
- [Use](/39252-class-use/com_jbase_jremote_io_charset_class-use_JbaseCharset)
- [Tree](/39251-charset/com_jbase_jremote_io_charset_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev Class
- [Next Class](/39251-charset/com_jbase_jremote_io_charset_JbaseCharsetDecoder "class in com.jbase.jremote.io.charset")


- [Frames](../../../../../index.html?com/jbase/jremote/io/charset//39251-charset/com_jbase_jremote_io_charset_JbaseCharset)
- [No Frames](/39251-charset/com_jbase_jremote_io_charset_JbaseCharset)


- [All Classes](../../../../../allclasses-noframe.html)


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

com.jbase.jremote.io.charset

## Class JbaseCharset

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [java.nio.charset.Charset](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true "class or interface in java.nio.charset")
    - - com.jbase.jremote.io.charset.JbaseCharset


- All Implemented Interfaces:[Comparable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Comparable.html?is-external=true "class or interface in java.lang")&lt;[Charset](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true "class or interface in java.nio.charset")&gt;
* * *


```
public class JbaseCharset
extends Charset
```

- - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `protected static byte` | `AM`  |
| `protected static byte` | `SVM`  |
| `protected static char` | `uAM`  |
| `protected static char` | `uSVM`  |
| `protected static char` | `uVM`  |
| `protected static byte` | `VM`  |


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `JbaseCharset()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | `contains(Charset chars)`  |
| `CharsetDecoder` | `newDecoder()`  |
| `CharsetEncoder` | `newEncoder()`  |


        - ### Methods inherited from class java.nio.charset.[Charset](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true "class or interface in java.nio.charset")
`aliases, availableCharsets, canEncode, compareTo, decode, defaultCharset, displayName, displayName, encode, encode, equals, forName, hashCode, isRegistered, isSupported, name, toString`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, finalize, getClass, notify, notifyAll, wait, wait, wait`

- - ### Field Detail

        - #### uAM

```
protected static final char uAM
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.io.charset.JbaseCharset.uAM)


        - #### uVM

```
protected static final char uVM
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.io.charset.JbaseCharset.uVM)


        - #### uSVM

```
protected static final char uSVM
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.io.charset.JbaseCharset.uSVM)


        - #### AM

```
protected static final byte AM
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.io.charset.JbaseCharset.AM)


        - #### VM

```
protected static final byte VM
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.io.charset.JbaseCharset.VM)


        - #### SVM

```
protected static final byte SVM
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.io.charset.JbaseCharset.SVM)


    - ### Constructor Detail

        - #### JbaseCharset

```
public JbaseCharset()
```


    - ### Method Detail

        - #### contains

```
public boolean contains(Charset chars)
```
Specified by:`contains` in class `Charset`


        - #### newDecoder

```
public CharsetDecoder newDecoder()
```
Specified by:`newDecoder` in class `Charset`


        - #### newEncoder

```
public CharsetEncoder newEncoder()
```
Specified by:`newEncoder` in class `Charset`

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39251-charset/com_jbase_jremote_io_charset_package-summary)
- Class
- [Use](/39252-class-use/com_jbase_jremote_io_charset_class-use_JbaseCharset)
- [Tree](/39251-charset/com_jbase_jremote_io_charset_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev Class
- [Next Class](/39251-charset/com_jbase_jremote_io_charset_JbaseCharsetDecoder "class in com.jbase.jremote.io.charset")


- [Frames](../../../../../index.html?com/jbase/jremote/io/charset//39251-charset/com_jbase_jremote_io_charset_JbaseCharset)
- [No Frames](/39251-charset/com_jbase_jremote_io_charset_JbaseCharset)


- [All Classes](../../../../../allclasses-noframe.html)


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
