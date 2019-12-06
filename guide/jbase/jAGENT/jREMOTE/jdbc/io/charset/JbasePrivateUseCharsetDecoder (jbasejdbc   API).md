# JbasePrivateUseCharsetDecoder (jbasejdbc   API)

**Created At:** 9/25/2017 10:44:42 AM  
**Updated At:** 2/15/2018 8:02:25 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JbasePrivateUseCharsetDecoder (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39233-charset/com_jbase_jdbc_io_charset_package-summary)
- Class
- [Use](/39234-class-use/com_jbase_jdbc_io_charset_class-use_JbasePrivateUseCharsetDecoder)
- [Tree](/39233-charset/com_jbase_jdbc_io_charset_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39233-charset/com_jbase_jdbc_io_charset_JbasePrivateUseCharset "class in com.jbase.jdbc.io.charset")
- [Next Class](/39233-charset/com_jbase_jdbc_io_charset_JbasePrivateUseCharsetEncoder "class in com.jbase.jdbc.io.charset")


- [Frames](../../../../../index.html?com/jbase/jdbc/io/charset//39233-charset/com_jbase_jdbc_io_charset_JbasePrivateUseCharsetDecoder)
- [No Frames](/39233-charset/com_jbase_jdbc_io_charset_JbasePrivateUseCharsetDecoder)


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

com.jbase.jdbc.io.charset

## Class JbasePrivateUseCharsetDecoder

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [java.nio.charset.CharsetDecoder](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetDecoder.html?is-external=true "class or interface in java.nio.charset")
    - - com.jbase.jdbc.io.charset.JbasePrivateUseCharsetDecoder


- * * *


```
public class JbasePrivateUseCharsetDecoder
extends CharsetDecoder
```

An engine that can transform a sequence of bytes in a<br> jBASE private use charset into a sequence of sixteen-bit<br> Unicode characters.

The jBASE charset set is very similiar to the UTF-8 charset<br> except for 3 bytes that are used to delimit attributes, values,<br> and subvalues in a dynamic array.  These bytes 0xfe, 0xfd, and<br> 0xfc respectively are not used in the UTF-8 charset and are<br> therefore able to be converted bi-directionally with Unicode Private<br> Use Area (U+E000 - U+F8FF) as follows:
- 0xfe to Unicode code point 0xF8FE.  0xEFA3BE (UTF-8) or 0xF8FE (UTF-16)<br>
- 0xfd to Unicode code point 0xF8FD.  0xEFA3BD (UTF-8) or 0XF8FD (UTF-16)<br>
- 0xfc to Unicode code point 0xF8FC.  0xEFA3BC (UTF-8) or 0XF8FC (UTF-16)<br> 

<br> There are several other questions that may be raised when talking<br> about encoding or decoding a charset.
<br> 1.  What about existing data containing 0xfe?  In jBASE there is no<br> danger of this character being lost or miss converted because this<br> character was always used to delimit an attribute and therefore is<br> not the SMALL ICELANDIC LETTER THORN (LATIN SMALL LETTER THORN)<br> http://www.cs.tut.fi/~jkorpela/latin1/3.html.<br> 

<br> 2.  Can I convert non jBASE data using this decoder/encoder.  No, it<br> will be wrong for the above reason (see question 1) and the reality<br> is you do not want to convert non jBASE data using this decoder / encoder.<br> 

<br> The decoder / encoder may be called zero or more times.<br>
Author:aphethean

- - ### Constructor Summary


Constructors | Modifier | Constructor and Description |
| --- | --- |
| `protected` | `JbasePrivateUseCharsetDecoder(JbasePrivateUseCharset charset,<br>                             CharsetDecoder baseDecoder)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `protected ByteBuffer` | `checkBuffer(ByteBuffer buffer,<br>           int newDataLength)`  |
| `protected CoderResult` | `decodeLoop(ByteBuffer inBytesBuffer,<br>          CharBuffer outCharBuffer)`<br>Convert the incoming jBASE bytes into Unicode char buffer<br> |
| `protected void` | `implOnMalformedInput(CodingErrorAction newAction)`  |
| `protected void` | `implOnUnmappableCharacter(CodingErrorAction newAction)`  |
| `protected void` | `implReplaceWith(String newReplacement)`  |


        - ### Methods inherited from class java.nio.charset.[CharsetDecoder](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetDecoder.html?is-external=true "class or interface in java.nio.charset")
`averageCharsPerByte, charset, decode, decode, detectedCharset, flush, implFlush, implReset, isAutoDetecting, isCharsetDetected, malformedInputAction, maxCharsPerByte, onMalformedInput, onUnmappableCharacter, replacement, replaceWith, reset, unmappableCharacterAction`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### JbasePrivateUseCharsetDecoder

```
protected JbasePrivateUseCharsetDecoder(JbasePrivateUseCharset charset,
                                        CharsetDecoder baseDecoder)
```


    - ### Method Detail

        - #### implOnMalformedInput

```
protected void implOnMalformedInput(CodingErrorAction newAction)
```
Overrides:`implOnMalformedInput` in class `CharsetDecoder`


        - #### implOnUnmappableCharacter

```
protected void implOnUnmappableCharacter(CodingErrorAction newAction)
```
Overrides:`implOnUnmappableCharacter` in class `CharsetDecoder`


        - #### implReplaceWith

```
protected void implReplaceWith(String newReplacement)
```
Overrides:`implReplaceWith` in class `CharsetDecoder`


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
- [Package](/39233-charset/com_jbase_jdbc_io_charset_package-summary)
- Class
- [Use](/39234-class-use/com_jbase_jdbc_io_charset_class-use_JbasePrivateUseCharsetDecoder)
- [Tree](/39233-charset/com_jbase_jdbc_io_charset_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39233-charset/com_jbase_jdbc_io_charset_JbasePrivateUseCharset "class in com.jbase.jdbc.io.charset")
- [Next Class](/39233-charset/com_jbase_jdbc_io_charset_JbasePrivateUseCharsetEncoder "class in com.jbase.jdbc.io.charset")


- [Frames](../../../../../index.html?com/jbase/jdbc/io/charset//39233-charset/com_jbase_jdbc_io_charset_JbasePrivateUseCharsetDecoder)
- [No Frames](/39233-charset/com_jbase_jdbc_io_charset_JbasePrivateUseCharsetDecoder)


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
