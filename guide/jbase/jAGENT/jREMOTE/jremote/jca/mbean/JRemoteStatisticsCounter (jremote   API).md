# JRemoteStatisticsCounter (jremote   API)

**Created At:** 9/25/2017 12:06:19 PM  
**Updated At:** 2/15/2018 8:02:31 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JRemoteStatisticsCounter (jremote   API)";
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
- [Package](/39266-mbean/com_jbase_jremote_jca_mbean_package-summary)
- Class
- [Use](/39267-class-use/com_jbase_jremote_jca_mbean_class-use_JRemoteStatisticsCounter)
- [Tree](/39266-mbean/com_jbase_jremote_jca_mbean_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev Class
- [Next Class](/39266-mbean/com_jbase_jremote_jca_mbean_JRemoteStatisticsCounter.Types "enum in com.jbase.jremote.jca.mbean")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/mbean//39266-mbean/com_jbase_jremote_jca_mbean_JRemoteStatisticsCounter)
- [No Frames](/39266-mbean/com_jbase_jremote_jca_mbean_JRemoteStatisticsCounter)


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
com.jbase.jremote.jca.mbean

## Class JRemoteStatisticsCounter

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.mbean.JRemoteStatisticsCounter


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="/39256-inflow/com_jbase_jremote_io_inflow_StatisticsCounter" title="interface in com.jbase.jremote.io.inflow">StatisticsCounter</a></dd></dl>
* * *


```
public class JRemoteStatisticsCounter
extends Object
implements StatisticsCounter
```

- <!-- ======== NESTED CLASS SUMMARY ======== -->
    - <!--   -->
### Nested Class Summary


<caption><span>Nested Classes</span><span class="tabEnd"> </span></caption>| Modifier and Type | Class and Description |
| --- | --- |
| `static class` | `JRemoteStatisticsCounter.Types`  |

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `JRemoteStatisticsCounter(JRemoteStatisticsCounter.Types id)`  |
| `JRemoteStatisticsCounter(JRemoteStatisticsCounter.Types id,<br>                        int initialCount)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | `equals(Object obj)`  |
| `Date` | `getDate()`  |
| `int` | `getId()`  |
| `void` | `incrementCount()`  |
| `void` | `setDate(Date d)`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### JRemoteStatisticsCounter

```
public JRemoteStatisticsCounter(JRemoteStatisticsCounter.Types id)
```

<!--   -->
        - #### JRemoteStatisticsCounter

```
public JRemoteStatisticsCounter(JRemoteStatisticsCounter.Types id,
                                int initialCount)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### incrementCount

```
public void incrementCount()
```

<!--   -->
        - #### getId

```
public int getId()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39256-inflow/com_jbase_jremote_io_inflow_StatisticsCounter#getId--">getId</a></code> in interface <code><a href="/39256-inflow/com_jbase_jremote_io_inflow_StatisticsCounter" title="interface in com.jbase.jremote.io.inflow">StatisticsCounter</a></code>
</dd></dl>

<!--   -->
        - #### getDate

```
public Date getDate()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="/39256-inflow/com_jbase_jremote_io_inflow_StatisticsCounter#getDate--">getDate</a></code> in interface <code><a href="/39256-inflow/com_jbase_jremote_io_inflow_StatisticsCounter" title="interface in com.jbase.jremote.io.inflow">StatisticsCounter</a></code>
</dd></dl>

<!--   -->
        - #### setDate

```
public void setDate(Date d)
```

<!--   -->
        - #### equals

```
public boolean equals(Object obj)
```
<dl><dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#equals-java.lang.Object-" title="class or interface in java.lang">equals</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true" title="class or interface in java.lang">Object</a></code>
</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39266-mbean/com_jbase_jremote_jca_mbean_package-summary)
- Class
- [Use](/39267-class-use/com_jbase_jremote_jca_mbean_class-use_JRemoteStatisticsCounter)
- [Tree](/39266-mbean/com_jbase_jremote_jca_mbean_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev Class
- [Next Class](/39266-mbean/com_jbase_jremote_jca_mbean_JRemoteStatisticsCounter.Types "enum in com.jbase.jremote.jca.mbean")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/mbean//39266-mbean/com_jbase_jremote_jca_mbean_JRemoteStatisticsCounter)
- [No Frames](/39266-mbean/com_jbase_jremote_jca_mbean_JRemoteStatisticsCounter)


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
