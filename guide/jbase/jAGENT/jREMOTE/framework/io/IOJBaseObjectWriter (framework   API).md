# IOJBaseObjectWriter (framework   API)

**Created At:** 9/25/2017 10:30:53 AM  
**Updated At:** 2/15/2018 8:02:36 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="IOJBaseObjectWriter (framework   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
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
- [Use](/39223-class-use/com_jbase_framework_io_class-use_IOJBaseObjectWriter)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_IOJBaseObjectReader "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_JbaseMsg "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_IOJBaseObjectWriter)
- [No Frames](/39220-io/com_jbase_framework_io_IOJBaseObjectWriter)


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

## Class IOJBaseObjectWriter

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.framework.io.AbstractJBaseObjectWriter](/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter "class in com.jbase.framework.io")
    - - com.jbase.framework.io.IOJBaseObjectWriter


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="/39220-io/com_jbase_framework_io_JBaseObjectWriter" title="interface in com.jbase.framework.io">JBaseObjectWriter</a></dd></dl>
* * *


```
public class IOJBaseObjectWriter
extends AbstractJBaseObjectWriter
```

jBase object writer based on the DataOutputStream.

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `IOJBaseObjectWriter(OutputStream os)`  |
| `IOJBaseObjectWriter(OutputStream os,<br>                   boolean compressed,<br>                   int compressionThreshold)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()`  |
| `protected void` | `flush()`  |
| `protected void` | `outByte(byte[] b)`  |
| `protected void` | `outByte(int b)`  |
| `protected void` | `outInt(int i)`  |
| `protected void` | `outUTF(String s)`<br>Write a UTF8 string.<br> |


        - <!--   -->
### Methods inherited from class com.jbase.framework.io.[AbstractJBaseObjectWriter](/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter "class in com.jbase.framework.io")
`writeInt, writeJBaseSerializableObject, writeObject, writeObject, writeObject, writeObject, writeRootObject`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### IOJBaseObjectWriter

```
public IOJBaseObjectWriter(OutputStream os)
```

<!--   -->
        - #### IOJBaseObjectWriter

```
public IOJBaseObjectWriter(OutputStream os,
                           boolean compressed,
                           int compressionThreshold)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### close

```
public void close()
           throws IOException
```
<dl><dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### flush

```
protected void flush()
              throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter#flush--">flush</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter" title="class in com.jbase.framework.io">AbstractJBaseObjectWriter</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### outByte

```
protected void outByte(byte[] b)
                throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter#outByte-byte:A-">outByte</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter" title="class in com.jbase.framework.io">AbstractJBaseObjectWriter</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### outByte

```
protected void outByte(int b)
                throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter#outByte-int-">outByte</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter" title="class in com.jbase.framework.io">AbstractJBaseObjectWriter</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### outInt

```
protected void outInt(int i)
               throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter#outInt-int-">outInt</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter" title="class in com.jbase.framework.io">AbstractJBaseObjectWriter</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### outUTF

```
protected void outUTF(String s)
               throws IOException
```

Write a UTF8 string. This could be made more efficient by implementing our own UTF8 <br> encoder (or using the DataOutputStream) instead of duplicating the string.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter#outUTF-java.lang.String-">outUTF</a></code> in class <code><a href="/39220-io/com_jbase_framework_io_AbstractJBaseObjectWriter" title="class in com.jbase.framework.io">AbstractJBaseObjectWriter</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_IOJBaseObjectWriter)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_IOJBaseObjectReader "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_JbaseMsg "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_IOJBaseObjectWriter)
- [No Frames](/39220-io/com_jbase_framework_io_IOJBaseObjectWriter)


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
