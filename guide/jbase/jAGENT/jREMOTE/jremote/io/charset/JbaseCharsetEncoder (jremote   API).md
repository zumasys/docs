# JbaseCharsetEncoder (jremote   API)

**Created At:** 9/25/2017 11:42:15 AM  
**Updated At:** 2/15/2018 8:02:17 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JbaseCharsetEncoder (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39251-charset/com_jbase_jremote_io_charset_package-summary)
- Class
- [Use](/39252-class-use/com_jbase_jremote_io_charset_class-use_JbaseCharsetEncoder)
- [Tree](/39251-charset/com_jbase_jremote_io_charset_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39251-charset/com_jbase_jremote_io_charset_JbaseCharsetDecoder "class in com.jbase.jremote.io.charset")
- [Next Class](/39251-charset/com_jbase_jremote_io_charset_JbasePrivateUseCharset "class in com.jbase.jremote.io.charset")


- [Frames](../../../../../index.html?com/jbase/jremote/io/charset//39251-charset/com_jbase_jremote_io_charset_JbaseCharsetEncoder)
- [No Frames](/39251-charset/com_jbase_jremote_io_charset_JbaseCharsetEncoder)


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
<dl><dt><span class="simpleTagLabel">Author:</span></dt>
<dd>aphethean</dd></dl>

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Modifier | Constructor and Description |
| --- | --- |
| `protected` | `JbaseCharsetEncoder(JbaseCharset charset)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected CoderResult` | `encodeLoop(CharBuffer inCharBuffer,<br>          ByteBuffer outByteBuffer)`<br>Convert the incoming unicode char buffer to a jBASE byte buffer<br> |


        - <!--   -->
### Methods inherited from class java.nio.charset.[CharsetEncoder](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetEncoder.html?is-external=true "class or interface in java.nio.charset")
`averageBytesPerChar, canEncode, canEncode, charset, encode, encode, flush, implFlush, implOnMalformedInput, implOnUnmappableCharacter, implReplaceWith, implReset, isLegalReplacement, malformedInputAction, maxBytesPerChar, onMalformedInput, onUnmappableCharacter, replacement, replaceWith, reset, unmappableCharacterAction`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### JbaseCharsetEncoder

```
protected JbaseCharsetEncoder(JbaseCharset charset)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
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
- [Package](/39251-charset/com_jbase_jremote_io_charset_package-summary)
- Class
- [Use](/39252-class-use/com_jbase_jremote_io_charset_class-use_JbaseCharsetEncoder)
- [Tree](/39251-charset/com_jbase_jremote_io_charset_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39251-charset/com_jbase_jremote_io_charset_JbaseCharsetDecoder "class in com.jbase.jremote.io.charset")
- [Next Class](/39251-charset/com_jbase_jremote_io_charset_JbasePrivateUseCharset "class in com.jbase.jremote.io.charset")


- [Frames](../../../../../index.html?com/jbase/jremote/io/charset//39251-charset/com_jbase_jremote_io_charset_JbaseCharsetEncoder)
- [No Frames](/39251-charset/com_jbase_jremote_io_charset_JbaseCharsetEncoder)


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
