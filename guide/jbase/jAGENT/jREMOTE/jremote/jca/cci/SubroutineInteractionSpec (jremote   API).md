# SubroutineInteractionSpec (jremote   API)

**Created At:** 9/25/2017 11:57:24 AM  
**Updated At:** 2/15/2018 8:02:19 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="SubroutineInteractionSpec (jremote   API)";
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
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_SubroutineInteractionSpec)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_DynamicArrayRecord "interface in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_SubroutineParametersRecord "interface in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_SubroutineInteractionSpec)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_SubroutineInteractionSpec)


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
com.jbase.jremote.jca.cci

## Class SubroutineInteractionSpec

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.cci.SubroutineInteractionSpec


- <dl><dt>All Implemented Interfaces:</dt>
<dd>
<a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true" title="class or interface in java.io">Serializable</a>, javax.resource.cci.InteractionSpec</dd></dl>
* * *


```
public class SubroutineInteractionSpec
extends Object
implements javax.resource.cci.InteractionSpec
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../serialized-form.html#com.jbase.jremote.jca.cci.SubroutineInteractionSpec">Serialized Form</a></dd></dl>

- <!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary


<caption><span>Fields</span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `static String` | `DYNAMIC_ARRAY`  |
| `static String` | `SUBROUTINE_PARAMETERS`  |


        - <!--   -->
### Fields inherited from interface javax.resource.cci.InteractionSpec
`SYNC_RECEIVE, SYNC_SEND, SYNC_SEND_RECEIVE`

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `SubroutineInteractionSpec(String subroutineName)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getSubroutineName()`  |
| `void` | `setSubroutineName(String subroutineName)`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ============ FIELD DETAIL =========== -->
    - <!--   -->
### Field Detail
<!--   -->
        - #### SUBROUTINE\_PARAMETERS

```
public static final String SUBROUTINE_PARAMETERS
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../constant-values.html#com.jbase.jremote.jca.cci.SubroutineInteractionSpec.SUBROUTINE_PARAMETERS">Constant Field Values</a></dd></dl>

<!--   -->
        - #### DYNAMIC\_ARRAY

```
public static final String DYNAMIC_ARRAY
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../constant-values.html#com.jbase.jremote.jca.cci.SubroutineInteractionSpec.DYNAMIC_ARRAY">Constant Field Values</a></dd></dl>

<!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### SubroutineInteractionSpec

```
public SubroutineInteractionSpec(String subroutineName)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getSubroutineName

```
public String getSubroutineName()
```

<!--   -->
        - #### setSubroutineName

```
public void setSubroutineName(String subroutineName)
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_SubroutineInteractionSpec)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_DynamicArrayRecord "interface in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_SubroutineParametersRecord "interface in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_SubroutineInteractionSpec)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_SubroutineInteractionSpec)


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
