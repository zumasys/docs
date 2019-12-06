# JbaseCharsetDecoder (jbasejdbc   API)

**Created At:** 9/25/2017 10:44:21 AM  
**Updated At:** 2/15/2018 8:02:47 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JbaseCharsetDecoder (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39233-charset/com_jbase_jdbc_io_charset_package-summary)
- Class
- [Use](/39234-class-use/com_jbase_jdbc_io_charset_class-use_JbaseCharsetDecoder)
- [Tree](/39233-charset/com_jbase_jdbc_io_charset_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39233-charset/com_jbase_jdbc_io_charset_JbaseCharset "class in com.jbase.jdbc.io.charset")
- [Next Class](/39233-charset/com_jbase_jdbc_io_charset_JbaseCharsetEncoder "class in com.jbase.jdbc.io.charset")


- [Frames](../../../../../index.html?com/jbase/jdbc/io/charset//39233-charset/com_jbase_jdbc_io_charset_JbaseCharsetDecoder)
- [No Frames](/39233-charset/com_jbase_jdbc_io_charset_JbaseCharsetDecoder)


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
com.jbase.jdbc.io.charset

## Class JbaseCharsetDecoder

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [java.nio.charset.CharsetDecoder](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetDecoder.html?is-external=true "class or interface in java.nio.charset")
    - - com.jbase.jdbc.io.charset.JbaseCharsetDecoder


- * * *


```
public class JbaseCharsetDecoder
extends CharsetDecoder
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
| `protected` | `JbaseCharsetDecoder(JbaseCharset charset)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected ByteBuffer` | `checkBuffer(ByteBuffer buffer,<br>           int newDataLength)`  |
| `protected CoderResult` | `decodeLoop(ByteBuffer inBytesBuffer,<br>          CharBuffer outCharBuffer)`<br>Convert the incoming jBASE bytes into Unicode char buffer<br> |


        - <!--   -->
### Methods inherited from class java.nio.charset.[CharsetDecoder](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetDecoder.html?is-external=true "class or interface in java.nio.charset")
`averageCharsPerByte, charset, decode, decode, detectedCharset, flush, implFlush, implOnMalformedInput, implOnUnmappableCharacter, implReplaceWith, implReset, isAutoDetecting, isCharsetDetected, malformedInputAction, maxCharsPerByte, onMalformedInput, onUnmappableCharacter, replacement, replaceWith, reset, unmappableCharacterAction`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### JbaseCharsetDecoder

```
protected JbaseCharsetDecoder(JbaseCharset charset)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### decodeLoop

```
protected CoderResult decodeLoop(ByteBuffer inBytesBuffer,
                                 CharBuffer outCharBuffer)
```

Convert the incoming jBASE bytes into Unicode char buffer
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetDecoder.html?is-external=true#decodeLoop-java.nio.ByteBuffer-java.nio.CharBuffer-" title="class or interface in java.nio.charset">decodeLoop</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/CharsetDecoder.html?is-external=true" title="class or interface in java.nio.charset">CharsetDecoder</a></code>
</dd></dl>

<!--   -->
        - #### checkBuffer

```
protected ByteBuffer checkBuffer(ByteBuffer buffer,
                                 int newDataLength)
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39233-charset/com_jbase_jdbc_io_charset_package-summary)
- Class
- [Use](/39234-class-use/com_jbase_jdbc_io_charset_class-use_JbaseCharsetDecoder)
- [Tree](/39233-charset/com_jbase_jdbc_io_charset_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](/39233-charset/com_jbase_jdbc_io_charset_JbaseCharset "class in com.jbase.jdbc.io.charset")
- [Next Class](/39233-charset/com_jbase_jdbc_io_charset_JbaseCharsetEncoder "class in com.jbase.jdbc.io.charset")


- [Frames](../../../../../index.html?com/jbase/jdbc/io/charset//39233-charset/com_jbase_jdbc_io_charset_JbaseCharsetDecoder)
- [No Frames](/39233-charset/com_jbase_jdbc_io_charset_JbaseCharsetDecoder)


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
