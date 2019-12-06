# ActivationWork (jremote   API)

**Created At:** 9/25/2017 11:59:15 AM  
**Updated At:** 2/15/2018 8:02:26 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="ActivationWork (jremote   API)";
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
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_ActivationWork)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev Class
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWorkListener "class in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_ActivationWork)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWork)


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

## Class ActivationWork

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.inflow.ActivationWork


- <dl><dt>All Implemented Interfaces:</dt>
<dd>
<a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Runnable.html?is-external=true" title="class or interface in java.lang">Runnable</a>, javax.resource.spi.work.Work</dd></dl>
* * *


```
public class ActivationWork
extends Object
implements javax.resource.spi.work.Work
```

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `ActivationWork(List<EndpointAdapter> endpoints,<br>              String activation,<br>              byte[] message)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `release()`  |
| `void` | `run()`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### ActivationWork

```
public ActivationWork(List<EndpointAdapter> endpoints,
                      String activation,
                      byte[] message)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### release

```
public void release()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>release</code> in interface <code>javax.resource.spi.work.Work</code>
</dd></dl>

<!--   -->
        - #### run

```
public void run()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Runnable.html?is-external=true#run--" title="class or interface in java.lang">run</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Runnable.html?is-external=true" title="class or interface in java.lang">Runnable</a></code>
</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_ActivationWork)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev Class
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWorkListener "class in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_ActivationWork)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWork)


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
