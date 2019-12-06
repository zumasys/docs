# JbasePrivateUseCharsetEncoder (framework   API)

**Created At:** 9/25/2017 10:23:36 AM  
**Updated At:** 2/15/2018 8:02:35 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JbasePrivateUseCharsetEncoder (framework   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39221-charset/com_jbase_framework_io_charset_package-summary)
- Class
- [Use](/39222-class-use/com_jbase_framework_io_charset_class-use_JbasePrivateUseCharsetEncoder)
- [Tree](/39221-charset/com_jbase_framework_io_charset_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- [Prev Class](/39221-charset/com_jbase_framework_io_charset_JbasePrivateUseCharsetDecoder "class in com.jbase.framework.io.charset")
- Next Class


- [Frames](../../../../../index.html?com/jbase/framework/io/charset//39221-charset/com_jbase_framework_io_charset_JbasePrivateUseCharsetEncoder)
- [No Frames](/39221-charset/com_jbase_framework_io_charset_JbasePrivateUseCharsetEncoder)


- [All Classes](../../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_top");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ========= END OF TOP NAVBAR ========= --><!-- ======== START OF CLASS DATA ======== -->
com.jbase.framework.io.charset

## Class JbasePrivateUseCharsetEncoder

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [java.nio.charset.CharsetEncoder](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetEncoder.html?is-external=true "class or interface in java.nio.charset")
    - - com.jbase.framework.io.charset.JbasePrivateUseCharsetEncoder


- * * *


```
public class JbasePrivateUseCharsetEncoder
extends CharsetEncoder
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
<dl><dt><span class="simpleTagLabel">Author:</span></dt>
<dd>aphethean</dd></dl>

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Modifier | Constructor and Description |
| --- | --- |
| `protected` | `JbasePrivateUseCharsetEncoder(JbasePrivateUseCharset charset,<br>                             CharsetEncoder baseEncoder)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected CoderResult` | `encodeLoop(CharBuffer inCharBuffer,<br>          ByteBuffer outByteBuffer)`<br>Convert the incoming unicode char buffer to a jBASE byte buffer<br> |
| `protected void` | `implOnMalformedInput(CodingErrorAction newAction)`  |
| `protected void` | `implOnUnmappableCharacter(CodingErrorAction newAction)`  |
| `protected void` | `implReplaceWith(byte[] newReplacement)`  |


        - <!--   -->
### Methods inherited from class java.nio.charset.[CharsetEncoder](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetEncoder.html?is-external=true "class or interface in java.nio.charset")
`averageBytesPerChar, canEncode, canEncode, charset, encode, encode, flush, implFlush, implReset, isLegalReplacement, malformedInputAction, maxBytesPerChar, onMalformedInput, onUnmappableCharacter, replacement, replaceWith, reset, unmappableCharacterAction`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### JbasePrivateUseCharsetEncoder

```
protected JbasePrivateUseCharsetEncoder(JbasePrivateUseCharset charset,
                                        CharsetEncoder baseEncoder)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### implOnMalformedInput

```
protected void implOnMalformedInput(CodingErrorAction newAction)
```
<dl><dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetEncoder.html?is-external=true#implOnMalformedInput-java.nio.charset.CodingErrorAction-" title="class or interface in java.nio.charset">implOnMalformedInput</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetEncoder.html?is-external=true" title="class or interface in java.nio.charset">CharsetEncoder</a></code>
</dd></dl>

<!--   -->
        - #### implOnUnmappableCharacter

```
protected void implOnUnmappableCharacter(CodingErrorAction newAction)
```
<dl><dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetEncoder.html?is-external=true#implOnUnmappableCharacter-java.nio.charset.CodingErrorAction-" title="class or interface in java.nio.charset">implOnUnmappableCharacter</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetEncoder.html?is-external=true" title="class or interface in java.nio.charset">CharsetEncoder</a></code>
</dd></dl>

<!--   -->
        - #### implReplaceWith

```
protected void implReplaceWith(byte[] newReplacement)
```
<dl><dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetEncoder.html?is-external=true#implReplaceWith-byte:A-" title="class or interface in java.nio.charset">implReplaceWith</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetEncoder.html?is-external=true" title="class or interface in java.nio.charset">CharsetEncoder</a></code>
</dd></dl>

<!--   -->
        - #### encodeLoop

```
protected CoderResult encodeLoop(CharBuffer inCharBuffer,
                                 ByteBuffer outByteBuffer)
```

Convert the incoming unicode char buffer to a jBASE byte buffer
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetEncoder.html?is-external=true#encodeLoop-java.nio.CharBuffer-java.nio.ByteBuffer-" title="class or interface in java.nio.charset">encodeLoop</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetEncoder.html?is-external=true" title="class or interface in java.nio.charset">CharsetEncoder</a></code>
</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39221-charset/com_jbase_framework_io_charset_package-summary)
- Class
- [Use](/39222-class-use/com_jbase_framework_io_charset_class-use_JbasePrivateUseCharsetEncoder)
- [Tree](/39221-charset/com_jbase_framework_io_charset_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- [Prev Class](/39221-charset/com_jbase_framework_io_charset_JbasePrivateUseCharsetDecoder "class in com.jbase.framework.io.charset")
- Next Class


- [Frames](../../../../../index.html?com/jbase/framework/io/charset//39221-charset/com_jbase_framework_io_charset_JbasePrivateUseCharsetEncoder)
- [No Frames](/39221-charset/com_jbase_framework_io_charset_JbasePrivateUseCharsetEncoder)


- [All Classes](../../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_bottom");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ======== END OF BOTTOM NAVBAR ======= -->
<small>			<center>			<i>Copyright © 2017 jBASE, Inc.. All Rights Reserved.</i>		</center></small>
