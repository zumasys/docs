# JRemoteActivationSpec (jremote   API)

**Created At:** 9/25/2017 12:01:12 PM  
**Updated At:** 2/15/2018 8:02:44 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JRemoteActivationSpec (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10};
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
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_JRemoteActivationSpec)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39262-inflow/com_jbase_jremote_jca_inflow_InboundRequestHandler "class in com.jbase.jremote.jca.inflow")
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_JRemoteMessageListener "interface in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_JRemoteActivationSpec)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_JRemoteActivationSpec)


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

## Class JRemoteActivationSpec

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.inflow.JRemoteActivationSpec


- <dl><dt>All Implemented Interfaces:</dt>
<dd>
<a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true" title="class or interface in java.io">Serializable</a>, javax.resource.spi.ActivationSpec, javax.resource.spi.ResourceAdapterAssociation</dd></dl>
* * *


```
public class JRemoteActivationSpec
extends Object
implements javax.resource.spi.ActivationSpec, Serializable
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../serialized-form.html#com.jbase.jremote.jca.inflow.JRemoteActivationSpec">Serialized Form</a></dd></dl>

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `JRemoteActivationSpec()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getHandler()`  |
| `javax.resource.spi.ResourceAdapter` | `getResourceAdapter()`  |
| `void` | `setHandler(String handler)`  |
| `void` | `setResourceAdapter(javax.resource.spi.ResourceAdapter ra)`  |
| `void` | `validate()`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### JRemoteActivationSpec

```
public JRemoteActivationSpec()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### validate

```
public void validate()
              throws javax.resource.spi.InvalidPropertyException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>validate</code> in interface <code>javax.resource.spi.ActivationSpec</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.spi.InvalidPropertyException</code></dd></dl>

<!--   -->
        - #### getResourceAdapter

```
public javax.resource.spi.ResourceAdapter getResourceAdapter()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getResourceAdapter</code> in interface <code>javax.resource.spi.ResourceAdapterAssociation</code>
</dd></dl>

<!--   -->
        - #### setResourceAdapter

```
public void setResourceAdapter(javax.resource.spi.ResourceAdapter ra)
                        throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>setResourceAdapter</code> in interface <code>javax.resource.spi.ResourceAdapterAssociation</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### getHandler

```
public String getHandler()
```

<!--   -->
        - #### setHandler

```
public void setHandler(String handler)
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39262-inflow/com_jbase_jremote_jca_inflow_package-summary)
- Class
- [Use](/39263-class-use/com_jbase_jremote_jca_inflow_class-use_JRemoteActivationSpec)
- [Tree](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39262-inflow/com_jbase_jremote_jca_inflow_InboundRequestHandler "class in com.jbase.jremote.jca.inflow")
- [Next Class](/39262-inflow/com_jbase_jremote_jca_inflow_JRemoteMessageListener "interface in com.jbase.jremote.jca.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/inflow//39262-inflow/com_jbase_jremote_jca_inflow_JRemoteActivationSpec)
- [No Frames](/39262-inflow/com_jbase_jremote_jca_inflow_JRemoteActivationSpec)


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
