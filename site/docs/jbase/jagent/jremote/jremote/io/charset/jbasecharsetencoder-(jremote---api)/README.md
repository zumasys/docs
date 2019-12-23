# JbaseCharsetEncoder (jremote   API)

**Created At:** 9/25/2017 11:42:15 AM  
**Updated At:** 2/15/2018 8:02:17 AM  
**Original Doc:** [com_jbase_jremote_io_charset_JbaseCharsetEncoder](https://docs.jbase.com/39251-charset/com_jbase_jremote_io_charset_JbaseCharsetEncoder)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JbaseCharsetEncoder (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io.charset-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.io.charset.jbasecharsetencoder-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io.charset-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../jbasecharsetdecoder-%28jremote---api%29 "class in com.jbase.jremote.io.charset")
- [Next Class](./../jbaseprivateusecharset-%28jremote---api%29 "class in com.jbase.jremote.io.charset")


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

## Class JbaseCharsetEncoder

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [java.nio.charset.CharsetEncoder](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetEncoder.html?is-external=true "class or interface in java.nio.charset")
    - - com.jbase.jremote.io.charset.JbaseCharsetEncoder


- * * *


```
public class JbaseCharsetEncoder
extends CharsetEncoder
```

An engine that can transform a sequence of bytes in a<br> jBASE charset into a sequence of sixteen-bit Unicode characters.<br>


- 0xfe to Unicode code point 0x00FE.<br>
- 0xfd to Unicode code point 0x00FD.<br>
- 0xfc to Unicode code point 0x00FC.<br>
Author:aphethean

- - ### Constructor Summary


Constructors | Modifier | Constructor and Description |
| --- | --- |
| `protected` | `JbaseCharsetEncoder(JbaseCharset charset)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `protected CoderResult` | `encodeLoop(CharBuffer inCharBuffer,<br>          ByteBuffer outByteBuffer)`<br>Convert the incoming unicode char buffer to a jBASE byte buffer<br> |


        - ### Methods inherited from class java.nio.charset.[CharsetEncoder](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetEncoder.html?is-external=true "class or interface in java.nio.charset")
`averageBytesPerChar, canEncode, canEncode, charset, encode, encode, flush, implFlush, implOnMalformedInput, implOnUnmappableCharacter, implReplaceWith, implReset, isLegalReplacement, malformedInputAction, maxBytesPerChar, onMalformedInput, onUnmappableCharacter, replacement, replaceWith, reset, unmappableCharacterAction`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### JbaseCharsetEncoder

```
protected JbaseCharsetEncoder(JbaseCharset charset)
```


    - ### Method Detail

        - #### encodeLoop

```
protected CoderResult encodeLoop(CharBuffer inCharBuffer,
                                 ByteBuffer outByteBuffer)
```

Convert the incoming unicode char buffer to a jBASE byte buffer
Specified by:`encodeLoop` in class `CharsetEncoder`

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io.charset-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.io.charset.jbasecharsetencoder-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io.charset-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../jbasecharsetdecoder-%28jremote---api%29 "class in com.jbase.jremote.io.charset")
- [Next Class](./../jbaseprivateusecharset-%28jremote---api%29 "class in com.jbase.jremote.io.charset")


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
