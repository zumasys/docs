# ObjectFactory (framework   API)

**Created At:** 9/25/2017 10:31:58 AM  
**Updated At:** 2/15/2018 8:02:34 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="ObjectFactory (framework   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":6};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"],8:["t4","Concrete Methods"]};
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
- [Use](/39223-class-use/com_jbase_framework_io_class-use_ObjectFactory)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_NIOJBaseObjectWriter "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_OKResponse "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_ObjectFactory)
- [No Frames](/39220-io/com_jbase_framework_io_ObjectFactory)


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

## Class ObjectFactory

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.framework.io.ObjectFactory


- * * *


```
public abstract class ObjectFactory
extends Object
```

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `ObjectFactory()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected JBaseSerializable` | `createGenericObjects(int objectType)`<br>Creates any generic (i.e common to all framework clients) objects.<br> |
| `protected abstract JBaseSerializable` | `createObject(int objectType)`<br>Create JBaseSerializable object from the supplied object type.<br> |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### ObjectFactory

```
public ObjectFactory()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### createObject

```
protected abstract JBaseSerializable createObject(int objectType)
                                           throws UnknownTypeException
```

Create JBaseSerializable object from the supplied object type.
<dl><dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>objectType</code> - type identifier</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>an instance of a class implementing JBaseSerializable</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="/39224-exception/com_jbase_framework_io_exception_UnknownTypeException" title="class in com.jbase.framework.io.exception">UnknownTypeException</a></code></dd></dl>

<!--   -->
        - #### createGenericObjects

```
protected JBaseSerializable createGenericObjects(int objectType)
                                          throws UnknownTypeException
```

Creates any generic (i.e common to all framework clients) objects. If the<br> object is not generic calls the client specific createObject method.
<dl><dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>objectType</code> - type identifier</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>an instance of a class implementing JBaseSerializable</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="/39224-exception/com_jbase_framework_io_exception_UnknownTypeException" title="class in com.jbase.framework.io.exception">UnknownTypeException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39220-io/com_jbase_framework_io_package-summary)
- Class
- [Use](/39223-class-use/com_jbase_framework_io_class-use_ObjectFactory)
- [Tree](/39220-io/com_jbase_framework_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


framework <br>

- [Prev Class](/39220-io/com_jbase_framework_io_NIOJBaseObjectWriter "class in com.jbase.framework.io")
- [Next Class](/39220-io/com_jbase_framework_io_OKResponse "class in com.jbase.framework.io")


- [Frames](../../../../index.html?com/jbase/framework/io//39220-io/com_jbase_framework_io_ObjectFactory)
- [No Frames](/39220-io/com_jbase_framework_io_ObjectFactory)


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
