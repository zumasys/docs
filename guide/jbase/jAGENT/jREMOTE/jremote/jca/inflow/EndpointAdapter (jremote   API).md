# EndpointAdapter (jremote   API)

**Created At:** 9/25/2017 12:00:37 PM  
**Updated At:** 2/15/2018 8:02:26 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="EndpointAdapter (jremote   API)";
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
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_EndpointAdapter)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWorkListener "class in com.jbase.jremote.jca.inflow")
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapterMBean "interface in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapter)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapter)


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

## Class EndpointAdapter

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.inflow.EndpointAdapter


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="/39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapterMBean" title="interface in com.jbase.jremote.jca.inflow">EndpointAdapterMBean</a></dd></dl>
* * *


```
public class EndpointAdapter
extends Object
implements EndpointAdapterMBean
```

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `EndpointAdapter(javax.resource.spi.endpoint.MessageEndpointFactory meFactory,<br>               javax.resource.spi.ActivationSpec aSpec)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getHandler()`  |
| `long` | `getTotalActivations()`  |
| `byte[]` | `process(String activation,<br>       byte[] body)`<br>Process the request or return null if this Endpoint is not<br> able to process the request.<br> |
| `String` | `toString()`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### EndpointAdapter

```
public EndpointAdapter(javax.resource.spi.endpoint.MessageEndpointFactory meFactory,
                       javax.resource.spi.ActivationSpec aSpec)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### process

```
public byte[] process(String activation,
                      byte[] body)
```

Process the request or return null if this Endpoint is not<br> able to process the request.
<dl><dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>activation</code> - </dd>
<dd>
<code>body</code> - </dd>
<dt><span class="returnLabel">Returns:</span></dt>
<dd>String result</dd></dl>

<!--   -->
        - #### toString

```
public String toString()
```
<dl><dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#toString--" title="class or interface in java.lang">toString</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true" title="class or interface in java.lang">Object</a></code>
</dd></dl>

<!--   -->
        - #### getHandler

```
public String getHandler()
```

<!--   -->
        - #### getTotalActivations

```
public long getTotalActivations()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapterMBean#getTotalActivations--">getTotalActivations</a></code> in interface <code><a href="/39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapterMBean" title="interface in com.jbase.jremote.jca.inflow">EndpointAdapterMBean</a></code>
</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_EndpointAdapter)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39262-inflow/com_jbase_jremote_jca_inflow_ActivationWorkListener "class in com.jbase.jremote.jca.inflow")
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapterMBean "interface in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapter)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_EndpointAdapter)


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
