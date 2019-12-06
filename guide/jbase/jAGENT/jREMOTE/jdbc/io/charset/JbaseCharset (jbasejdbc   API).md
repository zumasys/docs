# JbaseCharset (jbasejdbc   API)

**Created At:** 9/25/2017 10:44:14 AM  
**Updated At:** 2/15/2018 8:02:47 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JbaseCharset (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10};
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
- [Use](/39234-class-use/com_jbase_jdbc_io_charset_class-use_JbaseCharset)
- [Tree](/39233-charset/com_jbase_jdbc_io_charset_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev Class
- [Next Class](/39233-charset/com_jbase_jdbc_io_charset_JbaseCharsetDecoder "class in com.jbase.jdbc.io.charset")


- [Frames](../../../../../index.html?com/jbase/jdbc/io/charset//39233-charset/com_jbase_jdbc_io_charset_JbaseCharset)
- [No Frames](/39233-charset/com_jbase_jdbc_io_charset_JbaseCharset)


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

## Class JbaseCharset

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [java.nio.charset.Charset](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true "class or interface in java.nio.charset")
    - - com.jbase.jdbc.io.charset.JbaseCharset


- <dl><dt>All Implemented Interfaces:</dt>
<dd>
<a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Comparable.html?is-external=true" title="class or interface in java.lang">Comparable</a>&lt;<a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true" title="class or interface in java.nio.charset">Charset</a>&gt;</dd></dl>
* * *


```
public class JbaseCharset
extends Charset
```

- <!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary


<caption><span>Fields</span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `protected static byte` | `AM`  |
| `protected static byte` | `SVM`  |
| `protected static char` | `uAM`  |
| `protected static char` | `uSVM`  |
| `protected static char` | `uVM`  |
| `protected static byte` | `VM`  |

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `JbaseCharset()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | `contains(Charset chars)`  |
| `CharsetDecoder` | `newDecoder()`  |
| `CharsetEncoder` | `newEncoder()`  |


        - <!--   -->
### Methods inherited from class java.nio.charset.[Charset](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true "class or interface in java.nio.charset")
`aliases, availableCharsets, canEncode, compareTo, decode, defaultCharset, displayName, displayName, encode, encode, equals, forName, hashCode, isRegistered, isSupported, name, toString`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, finalize, getClass, notify, notifyAll, wait, wait, wait`

- <!-- ============ FIELD DETAIL =========== -->
    - <!--   -->
### Field Detail
<!--   -->
        - #### uAM

```
protected static final char uAM
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../constant-values.html#com.jbase.jdbc.io.charset.JbaseCharset.uAM">Constant Field Values</a></dd></dl>

<!--   -->
        - #### uVM

```
protected static final char uVM
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../constant-values.html#com.jbase.jdbc.io.charset.JbaseCharset.uVM">Constant Field Values</a></dd></dl>

<!--   -->
        - #### uSVM

```
protected static final char uSVM
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../constant-values.html#com.jbase.jdbc.io.charset.JbaseCharset.uSVM">Constant Field Values</a></dd></dl>

<!--   -->
        - #### AM

```
protected static final byte AM
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../constant-values.html#com.jbase.jdbc.io.charset.JbaseCharset.AM">Constant Field Values</a></dd></dl>

<!--   -->
        - #### VM

```
protected static final byte VM
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../constant-values.html#com.jbase.jdbc.io.charset.JbaseCharset.VM">Constant Field Values</a></dd></dl>

<!--   -->
        - #### SVM

```
protected static final byte SVM
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../constant-values.html#com.jbase.jdbc.io.charset.JbaseCharset.SVM">Constant Field Values</a></dd></dl>

<!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### JbaseCharset

```
public JbaseCharset()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### contains

```
public boolean contains(Charset chars)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true#contains-java.nio.charset.Charset-" title="class or interface in java.nio.charset">contains</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true" title="class or interface in java.nio.charset">Charset</a></code>
</dd></dl>

<!--   -->
        - #### newDecoder

```
public CharsetDecoder newDecoder()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true#newDecoder--" title="class or interface in java.nio.charset">newDecoder</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true" title="class or interface in java.nio.charset">Charset</a></code>
</dd></dl>

<!--   -->
        - #### newEncoder

```
public CharsetEncoder newEncoder()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true#newEncoder--" title="class or interface in java.nio.charset">newEncoder</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/nio/charset/Charset.html?is-external=true" title="class or interface in java.nio.charset">Charset</a></code>
</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39233-charset/com_jbase_jdbc_io_charset_package-summary)
- Class
- [Use](/39234-class-use/com_jbase_jdbc_io_charset_class-use_JbaseCharset)
- [Tree](/39233-charset/com_jbase_jdbc_io_charset_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jbasejdbc <br>

- Prev Class
- [Next Class](/39233-charset/com_jbase_jdbc_io_charset_JbaseCharsetDecoder "class in com.jbase.jdbc.io.charset")


- [Frames](../../../../../index.html?com/jbase/jdbc/io/charset//39233-charset/com_jbase_jdbc_io_charset_JbaseCharset)
- [No Frames](/39233-charset/com_jbase_jdbc_io_charset_JbaseCharset)


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
