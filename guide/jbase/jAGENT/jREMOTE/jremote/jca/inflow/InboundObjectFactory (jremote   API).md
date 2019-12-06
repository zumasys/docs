# InboundObjectFactory (jremote   API)

**Created At:** 9/25/2017 12:00:58 PM  
**Updated At:** 2/15/2018 8:02:27 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="InboundObjectFactory (jremote   API)";
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
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_InboundObjectFactory)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39262-inflow/com_jbase_jremote_jca_inflow_EndpointMBean "interface in com.jbase.jremote.jca.inflow")
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_InboundRequestHandler "class in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_InboundObjectFactory)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_InboundObjectFactory)


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
com.jbase.jremote.jca.inflow

## Class InboundObjectFactory

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jremote.io.ObjectFactory](/39250-io/com_jbase_jremote_io_objectfactory "class in com.jbase.jremote.io")
    - - com.jbase.jremote.jca.inflow.InboundObjectFactory


- * * *


```
public class InboundObjectFactory
extends ObjectFactory
```

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `InboundObjectFactory()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `JBaseSerializable` | `createObject(int type)`<br>Create JBaseSerializable object from the supplied object type.<br> |


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
        - #### InboundObjectFactory

```
public InboundObjectFactory()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### createObject

```
public JBaseSerializable createObject(int type)
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
<code>type</code> - type identifier</dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>an instance of a class implementing JBaseSerializable</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException" title="class in com.jbase.jremote.io.exception">UnknownTypeException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_InboundObjectFactory)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39262-inflow/com_jbase_jremote_jca_inflow_EndpointMBean "interface in com.jbase.jremote.jca.inflow")
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_InboundRequestHandler "class in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_InboundObjectFactory)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_InboundObjectFactory)


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
