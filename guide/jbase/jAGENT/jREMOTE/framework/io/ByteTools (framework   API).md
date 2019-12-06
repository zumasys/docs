# ByteTools (framework   API)

**Created At:** 9/25/2017 10:22:05 AM  
**Updated At:** 2/15/2018 8:02:33 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="ByteTools (framework   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":9,"i1":9,"i2":9,"i3":9};
var tabs = {65535:["t0","All Methods"],1:["t1","Static Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_ByteTools)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_ByteObject "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_ErrorResponse "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_ByteTools)
- [No Frames](/39220-io/com_jbase_framework_io_ByteTools)


- [All Classes](../../../../allclasses-noframe.html)


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
com.jbase.framework.io

## Class ByteTools

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.framework.io.ByteTools


- * * *


```
public class ByteTools
extends Object
```

- <!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary


<caption><span>Fields</span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `static short` | `MASK_TO_BYTE`  |
| `static int` | `NUMBER_OF_BITS_IN_A_BYTE`  |
| `static int` | `SIZE_OF_AN_INT_IN_BYTES`  |

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `ByteTools()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t1" class="tableTab"><span><a href="javascript:show(1);">Static Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `static String` | `dumpBytes(byte[] bs)`  |
| `static byte[]` | `intToByteArray(int value)`  |
| `static int` | `readInt(byte[] p_src)`  |
| `static void` | `writeInt(byte[] p_dest,<br>        int p_toWrite)`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ============ FIELD DETAIL =========== -->
    - <!--   -->
### Field Detail
<!--   -->
        - #### NUMBER\_OF\_BITS\_IN\_A\_BYTE

```
public static final int NUMBER_OF_BITS_IN_A_BYTE
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../constant-values.html#com.jbase.framework.io.ByteTools.NUMBER_OF_BITS_IN_A_BYTE">Constant Field Values</a></dd></dl>

<!--   -->
        - #### MASK\_TO\_BYTE

```
public static final short MASK_TO_BYTE
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../constant-values.html#com.jbase.framework.io.ByteTools.MASK_TO_BYTE">Constant Field Values</a></dd></dl>

<!--   -->
        - #### SIZE\_OF\_AN\_INT\_IN\_BYTES

```
public static final int SIZE_OF_AN_INT_IN_BYTES
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../constant-values.html#com.jbase.framework.io.ByteTools.SIZE_OF_AN_INT_IN_BYTES">Constant Field Values</a></dd></dl>

<!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### ByteTools

```
public ByteTools()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### writeInt

```
public static void writeInt(byte[] p_dest,
                            int p_toWrite)
```

<!--   -->
        - #### intToByteArray

```
public static final byte[] intToByteArray(int value)
```

<!--   -->
        - #### readInt

```
public static int readInt(byte[] p_src)
```

<!--   -->
        - #### dumpBytes

```
public static String dumpBytes(byte[] bs)
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_ByteTools)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_ByteObject "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_ErrorResponse "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_ByteTools)
- [No Frames](/39220-io/com_jbase_framework_io_ByteTools)


- [All Classes](../../../../allclasses-noframe.html)


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
