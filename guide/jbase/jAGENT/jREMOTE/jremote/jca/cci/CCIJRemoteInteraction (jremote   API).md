# CCIJRemoteInteraction (jremote   API)

**Created At:** 9/25/2017 11:54:51 AM  
**Updated At:** 2/15/2018 8:02:18 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="CCIJRemoteInteraction (jremote   API)";
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
- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJRemoteInteraction)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteDynamicArrayRecord "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteInteraction)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteInteraction)


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

## Class CCIJRemoteInteraction

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.cci.CCIJRemoteInteraction


- <dl><dt>All Implemented Interfaces:</dt>
<dd>javax.resource.cci.Interaction</dd></dl>
* * *


```
public class CCIJRemoteInteraction
extends Object
implements javax.resource.cci.Interaction
```

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `CCIJRemoteInteraction(CCIJConnection c)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `clearWarnings()`  |
| `void` | `close()`  |
| `javax.resource.cci.Record` | `execute(javax.resource.cci.InteractionSpec spec,<br>       javax.resource.cci.Record input)`  |
| `boolean` | `execute(javax.resource.cci.InteractionSpec spec,<br>       javax.resource.cci.Record input,<br>       javax.resource.cci.Record output)`  |
| `javax.resource.cci.Connection` | `getConnection()`  |
| `javax.resource.cci.ResourceWarning` | `getWarnings()`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### CCIJRemoteInteraction

```
public CCIJRemoteInteraction(CCIJConnection c)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### clearWarnings

```
public void clearWarnings()
                   throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>clearWarnings</code> in interface <code>javax.resource.cci.Interaction</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### close

```
public void close()
           throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>close</code> in interface <code>javax.resource.cci.Interaction</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### execute

```
public javax.resource.cci.Record execute(javax.resource.cci.InteractionSpec spec,
                                         javax.resource.cci.Record input)
                                  throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>execute</code> in interface <code>javax.resource.cci.Interaction</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### execute

```
public boolean execute(javax.resource.cci.InteractionSpec spec,
                       javax.resource.cci.Record input,
                       javax.resource.cci.Record output)
                throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>execute</code> in interface <code>javax.resource.cci.Interaction</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### getConnection

```
public javax.resource.cci.Connection getConnection()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getConnection</code> in interface <code>javax.resource.cci.Interaction</code>
</dd></dl>

<!--   -->
        - #### getWarnings

```
public javax.resource.cci.ResourceWarning getWarnings()
                                               throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getWarnings</code> in interface <code>javax.resource.cci.Interaction</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJRemoteInteraction)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteDynamicArrayRecord "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteInteraction)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteInteraction)


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
