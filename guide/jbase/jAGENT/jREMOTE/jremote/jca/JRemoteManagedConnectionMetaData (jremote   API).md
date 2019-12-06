# JRemoteManagedConnectionMetaData (jremote   API)

**Created At:** 9/25/2017 12:05:41 PM  
**Updated At:** 2/15/2018 8:02:55 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JRemoteManagedConnectionMetaData (jremote   API)";
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
- [Overview](../../../../overview-summary.html)
- [Package](/39258-jca/com_jbase_jremote_jca_package-summary)
- Class
- [Use](/39261-class-use/com_jbase_jremote_jca_class-use_JRemoteManagedConnectionMetaData)
- [Tree](/39258-jca/com_jbase_jremote_jca_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory "class in com.jbase.jremote.jca")
- [Next Class](/39258-jca/com_jbase_jremote_jca_JRemoteRequestProcessingFactory "class in com.jbase.jremote.jca")


- [Frames](../../../../index.html?com/jbase/jremote/jca//39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionMetaData)
- [No Frames](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionMetaData)


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
com.jbase.jremote.jca

## Class JRemoteManagedConnectionMetaData

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.JRemoteManagedConnectionMetaData


- <dl><dt>All Implemented Interfaces:</dt>
<dd>javax.resource.spi.ManagedConnectionMetaData</dd></dl>
* * *


```
public class JRemoteManagedConnectionMetaData
extends Object
implements javax.resource.spi.ManagedConnectionMetaData
```

Provide useful information about connecting to a remote jBASE instance.
<dl><dt><span class="simpleTagLabel">Author:</span></dt>
<dd>aphethean</dd></dl>

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `JRemoteManagedConnectionMetaData(EISMetaDataRepository mdRepository)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getEISProductName()`  |
| `String` | `getEISProductVersion()`  |
| `int` | `getMaxConnections()`  |
| `String` | `getUserName()`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### JRemoteManagedConnectionMetaData

```
public JRemoteManagedConnectionMetaData(EISMetaDataRepository mdRepository)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getEISProductName

```
public String getEISProductName()
                         throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getEISProductName</code> in interface <code>javax.resource.spi.ManagedConnectionMetaData</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### getEISProductVersion

```
public String getEISProductVersion()
                            throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getEISProductVersion</code> in interface <code>javax.resource.spi.ManagedConnectionMetaData</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### getMaxConnections

```
public int getMaxConnections()
                      throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getMaxConnections</code> in interface <code>javax.resource.spi.ManagedConnectionMetaData</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### getUserName

```
public String getUserName()
                   throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getUserName</code> in interface <code>javax.resource.spi.ManagedConnectionMetaData</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../overview-summary.html)
- [Package](/39258-jca/com_jbase_jremote_jca_package-summary)
- Class
- [Use](/39261-class-use/com_jbase_jremote_jca_class-use_JRemoteManagedConnectionMetaData)
- [Tree](/39258-jca/com_jbase_jremote_jca_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory "class in com.jbase.jremote.jca")
- [Next Class](/39258-jca/com_jbase_jremote_jca_JRemoteRequestProcessingFactory "class in com.jbase.jremote.jca")


- [Frames](../../../../index.html?com/jbase/jremote/jca//39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionMetaData)
- [No Frames](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionMetaData)


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
