# JRemoteObjectFactory (jremote   API)

**Created At:** 9/25/2017 11:52:27 AM  
**Updated At:** 2/15/2018 8:02:15 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JRemoteObjectFactory (jremote   API)";
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
- [Overview](../../../../overview-summary.html)
- [Package](/39250-io/com_jbase_jremote_io_package-summary)
- Class
- [Use](/39253-class-use/com_jbase_jremote_io_class-use_JRemoteObjectFactory)
- [Tree](/39250-io/com_jbase_jremote_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39250-io/com_jbase_jremote_io_jfileimpl "class in com.jbase.jremote.io")
- [Next Class](/39250-io/com_jbase_jremote_io_JRemoteObjectFactory.TYPE "interface in com.jbase.jremote.io")


- [Frames](../../../../index.html?com/jbase/jremote/io//39250-io/com_jbase_jremote_io_JRemoteObjectFactory)
- [No Frames](/39250-io/com_jbase_jremote_io_JRemoteObjectFactory)


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
com.jbase.jremote.io

## Class JRemoteObjectFactory

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jremote.io.ObjectFactory](/39250-io/com_jbase_jremote_io_objectfactory "class in com.jbase.jremote.io")
    - - com.jbase.jremote.io.JRemoteObjectFactory


- * * *


```
public class JRemoteObjectFactory
extends ObjectFactory
```

Creates objects received from the jbase\_agent server.

- <!-- ======== NESTED CLASS SUMMARY ======== -->
    - <!--   -->
### Nested Class Summary


<caption><span>Nested Classes</span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `static interface` | `JRemoteObjectFactory.TYPE`  |

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `JRemoteObjectFactory()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `protected JBaseSerializable` | `createObject(int objectType)`<br>Create JBaseSerializable object from the supplied object type.<br> |


        - <!--   -->
### Methods inherited from class com.jbase.jremote.io.[ObjectFactory](/39250-io/com_jbase_jremote_io_objectfactory "class in com.jbase.jremote.io")
`createGenericObjects`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### JRemoteObjectFactory

```
public JRemoteObjectFactory()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### createObject

```
protected JBaseSerializable createObject(int objectType)
                                  throws UnknownTypeException
```

Description copied from class: `ObjectFactory`

Create JBaseSerializable object from the supplied object type.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39250-io/com_jbase_jremote_io_objectfactory#createObject-int-">createObject</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_objectfactory" title="class in com.jbase.jremote.io">ObjectFactory</a></code>
</dd>
<dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>objectType</code> - type identifier</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>an instance of a class implementing JBaseSerializable</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException" title="class in com.jbase.jremote.io.exception">UnknownTypeException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39250-io/com_jbase_jremote_io_package-summary)
- Class
- [Use](/39253-class-use/com_jbase_jremote_io_class-use_JRemoteObjectFactory)
- [Tree](/39250-io/com_jbase_jremote_io_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39250-io/com_jbase_jremote_io_jfileimpl "class in com.jbase.jremote.io")
- [Next Class](/39250-io/com_jbase_jremote_io_JRemoteObjectFactory.TYPE "interface in com.jbase.jremote.io")


- [Frames](../../../../index.html?com/jbase/jremote/io//39250-io/com_jbase_jremote_io_JRemoteObjectFactory)
- [No Frames](/39250-io/com_jbase_jremote_io_JRemoteObjectFactory)


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
