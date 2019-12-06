# CCIJRemoteConnectionFactory (jremote   API)

**Created At:** 9/25/2017 11:54:36 AM  
**Updated At:** 2/15/2018 8:02:18 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="CCIJRemoteConnectionFactory (jremote   API)";
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
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJRemoteConnectionFactory)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJConnection "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteDynamicArrayRecord "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteConnectionFactory)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteConnectionFactory)


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

## Class CCIJRemoteConnectionFactory

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.cci.CCIJRemoteConnectionFactory


- <dl><dt>All Implemented Interfaces:</dt>
<dd>
<a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true" title="class or interface in java.io">Serializable</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/naming/Referenceable.html?is-external=true" title="class or interface in javax.naming">Referenceable</a>, javax.resource.cci.ConnectionFactory</dd></dl>
* * *


```
public class CCIJRemoteConnectionFactory
extends Object
implements javax.resource.cci.ConnectionFactory
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../serialized-form.html#com.jbase.jremote.jca.cci.CCIJRemoteConnectionFactory">Serialized Form</a></dd></dl>

- <!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary


<caption><span>Fields</span><span class="tabEnd"> </span></caption>| Modifier and Type | Field and Description |
| --- | --- |
| `protected javax.resource.cci.RecordFactory` | `_recordFactory`  |

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `CCIJRemoteConnectionFactory()`<br>Construct a connection factory for use in a non managed environment using<br> the default connection manager.<br> |
| `CCIJRemoteConnectionFactory(javax.resource.spi.ManagedConnectionFactory mcf)`<br>Construct a connection factory for use in a non managed environment using<br> the default connection manager.<br> |
| `CCIJRemoteConnectionFactory(javax.resource.spi.ManagedConnectionFactory mcf,<br>                           javax.resource.spi.ConnectionManager cm)`<br>Constructor for managed connection factory.<br> |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `javax.resource.cci.Connection` | `getConnection()`  |
| `javax.resource.cci.Connection` | `getConnection(javax.resource.cci.ConnectionSpec cxSpec)`  |
| `javax.resource.cci.ResourceAdapterMetaData` | `getMetaData()`  |
| `javax.resource.cci.RecordFactory` | `getRecordFactory()`  |
| `Reference` | `getReference()`  |
| `void` | `setReference(Reference reference)`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ============ FIELD DETAIL =========== -->
    - <!--   -->
### Field Detail
<!--   -->
        - #### \_recordFactory

```
protected javax.resource.cci.RecordFactory _recordFactory
```

<!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### CCIJRemoteConnectionFactory

```
public CCIJRemoteConnectionFactory()
```

Construct a connection factory for use in a non managed environment using<br> the default connection manager.
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="/39258-jca/com_jbase_jremote_jca_defaultconnectionmanager" title="class in com.jbase.jremote.jca"><code>DefaultConnectionManager</code></a></dd></dl>

<!--   -->
        - #### CCIJRemoteConnectionFactory

```
public CCIJRemoteConnectionFactory(javax.resource.spi.ManagedConnectionFactory mcf)
```

Construct a connection factory for use in a non managed environment using<br> the default connection manager.
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="/39258-jca/com_jbase_jremote_jca_defaultconnectionmanager" title="class in com.jbase.jremote.jca"><code>DefaultConnectionManager</code></a></dd></dl>

<!--   -->
        - #### CCIJRemoteConnectionFactory

```
public CCIJRemoteConnectionFactory(javax.resource.spi.ManagedConnectionFactory mcf,
                                   javax.resource.spi.ConnectionManager cm)
```

Constructor for managed connection factory.  The application server<br> will use this constructor and supply a configured ManagedConnectionFactory and<br> ConnectionManager.  This class will hook into the application server connection <br> pool via the supplied ConnectionManager.

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getConnection

```
public javax.resource.cci.Connection getConnection()
                                            throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getConnection</code> in interface <code>javax.resource.cci.ConnectionFactory</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### getConnection

```
public javax.resource.cci.Connection getConnection(javax.resource.cci.ConnectionSpec cxSpec)
                                            throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getConnection</code> in interface <code>javax.resource.cci.ConnectionFactory</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### getMetaData

```
public javax.resource.cci.ResourceAdapterMetaData getMetaData()
                                                       throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getMetaData</code> in interface <code>javax.resource.cci.ConnectionFactory</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### getRecordFactory

```
public javax.resource.cci.RecordFactory getRecordFactory()
                                                  throws javax.resource.ResourceException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getRecordFactory</code> in interface <code>javax.resource.cci.ConnectionFactory</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd></dl>

<!--   -->
        - #### setReference

```
public void setReference(Reference reference)
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><code>Referenceable.setReference(Reference)</code></dd></dl>

<!--   -->
        - #### getReference

```
public Reference getReference()
                       throws NamingException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/naming/Referenceable.html?is-external=true#getReference--" title="class or interface in javax.naming">getReference</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/naming/Referenceable.html?is-external=true" title="class or interface in javax.naming">Referenceable</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/naming/NamingException.html?is-external=true" title="class or interface in javax.naming">NamingException</a></code></dd>
<dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/naming/Referenceable.html?is-external=true#getReference--" title="class or interface in javax.naming"><code>Referenceable.getReference()</code></a></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJRemoteConnectionFactory)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJConnection "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteDynamicArrayRecord "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteConnectionFactory)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteConnectionFactory)


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
