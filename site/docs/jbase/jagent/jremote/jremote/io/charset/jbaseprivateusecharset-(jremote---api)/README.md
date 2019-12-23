# JbasePrivateUseCharset (jremote   API)

**Created At:** 9/25/2017 11:42:22 AM  
**Updated At:** 2/15/2018 8:02:17 AM  
**Original Doc:** [com_jbase_jremote_io_charset_JbasePrivateUseCharset](https://docs.jbase.com/39251-charset/com_jbase_jremote_io_charset_JbasePrivateUseCharset)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JbasePrivateUseCharset (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io.charset-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.io.charset.jbaseprivateusecharset-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io.charset-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../jbasecharsetencoder-%28jremote---api%29 "class in com.jbase.jremote.io.charset")
- [Next Class](./../jbaseprivateusecharsetdecoder-%28jremote---api%29 "class in com.jbase.jremote.io.charset")


- [Frames](./.)
- [No Frames](./.)


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

## Class JbasePrivateUseCharset

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [java.nio.charset.Charset](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true "class or interface in java.nio.charset")
    - - com.jbase.jremote.io.charset.JbasePrivateUseCharset


- All Implemented Interfaces:[Comparable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Comparable.html?is-external=true "class or interface in java.lang")&lt;[Charset](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true "class or interface in java.nio.charset")&gt;
* * *


```
public class JbasePrivateUseCharset
extends Charset
```

- - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `protected static byte` | `AM`  |
| `protected static byte[]` | `DEFAULT_REPLACEMENT_BYTES`  |
| `protected static String` | `DEFAULT_REPLACEMENT_STRING`  |
| `protected static byte` | `SVM`  |
| `protected static char` | `uAM`  |
| `protected static char` | `uSVM`  |
| `protected static char` | `uVM`  |
| `protected static byte` | `VM`  |


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `JbasePrivateUseCharset()`  |
| `JbasePrivateUseCharset(Charset baseCharset)`  |


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
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.io.charset.JbasePrivateUseCharset.uAM)


        - #### uVM

```
protected static final char uVM
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.io.charset.JbasePrivateUseCharset.uVM)


        - #### uSVM

```
protected static final char uSVM
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.io.charset.JbasePrivateUseCharset.uSVM)


        - #### AM

```
protected static final byte AM
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.io.charset.JbasePrivateUseCharset.AM)


        - #### VM

```
protected static final byte VM
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.io.charset.JbasePrivateUseCharset.VM)


        - #### SVM

```
protected static final byte SVM
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.io.charset.JbasePrivateUseCharset.SVM)


        - #### DEFAULT\_REPLACEMENT\_STRING

```
protected static final String DEFAULT_REPLACEMENT_STRING
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.io.charset.JbasePrivateUseCharset.DEFAULT_REPLACEMENT_STRING)


        - #### DEFAULT\_REPLACEMENT\_BYTES

```
protected static final byte[] DEFAULT_REPLACEMENT_BYTES
```


    - ### Constructor Detail

        - #### JbasePrivateUseCharset

```
public JbasePrivateUseCharset()
```


        - #### JbasePrivateUseCharset

```
public JbasePrivateUseCharset(Charset baseCharset)
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
- [Package](./../com.jbase.jremote.io.charset-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.io.charset.jbaseprivateusecharset-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io.charset-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../jbasecharsetencoder-%28jremote---api%29 "class in com.jbase.jremote.io.charset")
- [Next Class](./../jbaseprivateusecharsetdecoder-%28jremote---api%29 "class in com.jbase.jremote.io.charset")


- [Frames](./.)
- [No Frames](./.)


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
