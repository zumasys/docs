# ActivationWorkListener (jremote   API)

**Created At:** 9/25/2017 11:59:22 AM  
**Updated At:** 2/15/2018 8:02:26 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="ActivationWorkListener (jremote   API)";
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
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_ActivationWorkListener)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWork "class in com.jbase.jremote.jca.inflow")
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapter "class in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_ActivationWorkListener)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWorkListener)


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

## Class ActivationWorkListener

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.inflow.ActivationWorkListener


- <dl><dt>All Implemented Interfaces:</dt>
<dd>
<a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/EventListener.html?is-external=true" title="class or interface in java.util">EventListener</a>, javax.resource.spi.work.WorkListener</dd></dl>
* * *


```
public class ActivationWorkListener
extends Object
implements javax.resource.spi.work.WorkListener
```

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `ActivationWorkListener()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `workAccepted(javax.resource.spi.work.WorkEvent we)`  |
| `void` | `workCompleted(javax.resource.spi.work.WorkEvent we)`  |
| `void` | `workRejected(javax.resource.spi.work.WorkEvent we)`  |
| `void` | `workStarted(javax.resource.spi.work.WorkEvent we)`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### ActivationWorkListener

```
public ActivationWorkListener()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### workAccepted

```
public void workAccepted(javax.resource.spi.work.WorkEvent we)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>workAccepted</code> in interface <code>javax.resource.spi.work.WorkListener</code>
</dd></dl>

<!--   -->
        - #### workCompleted

```
public void workCompleted(javax.resource.spi.work.WorkEvent we)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>workCompleted</code> in interface <code>javax.resource.spi.work.WorkListener</code>
</dd></dl>

<!--   -->
        - #### workRejected

```
public void workRejected(javax.resource.spi.work.WorkEvent we)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>workRejected</code> in interface <code>javax.resource.spi.work.WorkListener</code>
</dd></dl>

<!--   -->
        - #### workStarted

```
public void workStarted(javax.resource.spi.work.WorkEvent we)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>workStarted</code> in interface <code>javax.resource.spi.work.WorkListener</code>
</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_ActivationWorkListener)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWork "class in com.jbase.jremote.jca.inflow")
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapter "class in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_ActivationWorkListener)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWorkListener)


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
