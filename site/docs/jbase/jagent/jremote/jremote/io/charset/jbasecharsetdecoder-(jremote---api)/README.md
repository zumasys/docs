# JbaseCharsetDecoder (jremote   API)

**Created At:** 9/25/2017 11:42:08 AM  
**Updated At:** 2/15/2018 8:02:17 AM  
**Original Doc:** [com_jbase_jremote_io_charset_JbaseCharsetDecoder](https://docs.jbase.com/39251-charset/com_jbase_jremote_io_charset_JbaseCharsetDecoder)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JbaseCharsetDecoder (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39251-charset/com_jbase_jremote_io_charset_package-summary)
- Class
- [Use](/39252-class-use/com_jbase_jremote_io_charset_class-use_JbaseCharsetDecoder)
- [Tree](/39251-charset/com_jbase_jremote_io_charset_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39251-charset/com_jbase_jremote_io_charset_JbaseCharset "class in com.jbase.jremote.io.charset")
- [Next Class](/39251-charset/com_jbase_jremote_io_charset_JbaseCharsetEncoder "class in com.jbase.jremote.io.charset")


- [Frames](../../../../../index.html?com/jbase/jremote/io/charset//39251-charset/com_jbase_jremote_io_charset_JbaseCharsetDecoder)
- [No Frames](/39251-charset/com_jbase_jremote_io_charset_JbaseCharsetDecoder)


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

## Class JbaseCharsetDecoder

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [java.nio.charset.CharsetDecoder](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetDecoder.html?is-external=true "class or interface in java.nio.charset")
    - - com.jbase.jremote.io.charset.JbaseCharsetDecoder


- * * *


```
public class JbaseCharsetDecoder
extends CharsetDecoder
```

An engine that can transform a sequence of bytes in a<br> jBASE charset into a sequence of sixteen-bit Unicode characters.<br>


- 0xfe to Unicode code point 0x00FE.<br>
- 0xfd to Unicode code point 0x00FD.<br>
- 0xfc to Unicode code point 0x00FC.<br>
Author:aphethean

- - ### Constructor Summary


Constructors | Modifier | Constructor and Description |
| --- | --- |
| `protected` | `JbaseCharsetDecoder(JbaseCharset charset)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `protected ByteBuffer` | `checkBuffer(ByteBuffer buffer,<br>           int newDataLength)`  |
| `protected CoderResult` | `decodeLoop(ByteBuffer inBytesBuffer,<br>          CharBuffer outCharBuffer)`<br>Convert the incoming jBASE bytes into Unicode char buffer<br> |


        - ### Methods inherited from class java.nio.charset.[CharsetDecoder](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetDecoder.html?is-external=true "class or interface in java.nio.charset")
`averageCharsPerByte, charset, decode, decode, detectedCharset, flush, implFlush, implOnMalformedInput, implOnUnmappableCharacter, implReplaceWith, implReset, isAutoDetecting, isCharsetDetected, malformedInputAction, maxCharsPerByte, onMalformedInput, onUnmappableCharacter, replacement, replaceWith, reset, unmappableCharacterAction`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### JbaseCharsetDecoder

```
protected JbaseCharsetDecoder(JbaseCharset charset)
```


    - ### Method Detail

        - #### decodeLoop

```
protected CoderResult decodeLoop(ByteBuffer inBytesBuffer,
                                 CharBuffer outCharBuffer)
```

Convert the incoming jBASE bytes into Unicode char buffer
Specified by:`decodeLoop` in class `CharsetDecoder`


        - #### checkBuffer

```
protected ByteBuffer checkBuffer(ByteBuffer buffer,
                                 int newDataLength)
```

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39251-charset/com_jbase_jremote_io_charset_package-summary)
- Class
- [Use](/39252-class-use/com_jbase_jremote_io_charset_class-use_JbaseCharsetDecoder)
- [Tree](/39251-charset/com_jbase_jremote_io_charset_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39251-charset/com_jbase_jremote_io_charset_JbaseCharset "class in com.jbase.jremote.io.charset")
- [Next Class](/39251-charset/com_jbase_jremote_io_charset_JbaseCharsetEncoder "class in com.jbase.jremote.io.charset")


- [Frames](../../../../../index.html?com/jbase/jremote/io/charset//39251-charset/com_jbase_jremote_io_charset_JbaseCharsetDecoder)
- [No Frames](/39251-charset/com_jbase_jremote_io_charset_JbaseCharsetDecoder)


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
