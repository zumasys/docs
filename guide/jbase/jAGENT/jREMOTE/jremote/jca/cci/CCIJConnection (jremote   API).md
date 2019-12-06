# CCIJConnection (jremote   API)

**Created At:** 9/25/2017 11:54:29 AM  
**Updated At:** 2/15/2018 8:02:18 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="CCIJConnection (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10};
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
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJConnection)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev Class
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteConnectionFactory "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJConnection)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJConnection)


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

## Class CCIJConnection

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.cci.CCIJConnection


- <dl><dt>All Implemented Interfaces:</dt>
<dd>javax.resource.cci.Connection</dd></dl>
* * *


```
public class CCIJConnection
extends Object
implements javax.resource.cci.Connection
```

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Modifier | Constructor and Description |
| --- | --- |
| `protected` | `CCIJConnection(JConnection c)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()`<br>Close this connection.<br> |
| `javax.resource.cci.Interaction` | `createInteraction()`  |
| `protected JConnection` | `getJConnection()`  |
| `javax.resource.cci.LocalTransaction` | `getLocalTransaction()`  |
| `javax.resource.cci.ConnectionMetaData` | `getMetaData()`  |
| `javax.resource.cci.ResultSetInfo` | `getResultSetInfo()`  |
| `String` | `toString()`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### CCIJConnection

```
protected CCIJConnection(JConnection c)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### close

```
public void close()
           throws javax.resource.ResourceException
```

Close this connection.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>close</code> in interface <code>javax.resource.cci.Connection</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### createInteraction

```
public javax.resource.cci.Interaction createInteraction()
                                                 throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>createInteraction</code> in interface <code>javax.resource.cci.Connection</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### getLocalTransaction

```
public javax.resource.cci.LocalTransaction getLocalTransaction()
                                                        throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getLocalTransaction</code> in interface <code>javax.resource.cci.Connection</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### getMetaData

```
public javax.resource.cci.ConnectionMetaData getMetaData()
                                                  throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getMetaData</code> in interface <code>javax.resource.cci.Connection</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### getResultSetInfo

```
public javax.resource.cci.ResultSetInfo getResultSetInfo()
                                                  throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getResultSetInfo</code> in interface <code>javax.resource.cci.Connection</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### getJConnection

```
protected JConnection getJConnection()
```

<!--   -->
        - #### toString

```
public String toString()
```
<dl><dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#toString--" title="class or interface in java.lang">toString</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true" title="class or interface in java.lang">Object</a></code>
</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJConnection)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev Class
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteConnectionFactory "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJConnection)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJConnection)


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
