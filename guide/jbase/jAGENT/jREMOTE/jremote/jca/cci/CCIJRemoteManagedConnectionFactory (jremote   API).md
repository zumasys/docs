# CCIJRemoteManagedConnectionFactory (jremote   API)

**Created At:** 9/25/2017 11:54:58 AM  
**Updated At:** 2/15/2018 8:02:18 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="CCIJRemoteManagedConnectionFactory (jremote   API)";
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
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJRemoteManagedConnectionFactory)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteInteraction "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteRecordFactory "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory)


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

## Class CCIJRemoteManagedConnectionFactory

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jremote.jca.JRemoteManagedConnectionFactory](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory "class in com.jbase.jremote.jca")
    - - com.jbase.jremote.jca.cci.CCIJRemoteManagedConnectionFactory


- <dl><dt>All Implemented Interfaces:</dt>
<dd>
<a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true" title="class or interface in java.io">Serializable</a>, javax.resource.spi.ManagedConnectionFactory, javax.resource.spi.ValidatingManagedConnectionFactory</dd></dl>
* * *


```
public class CCIJRemoteManagedConnectionFactory
extends JRemoteManagedConnectionFactory
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../serialized-form.html#com.jbase.jremote.jca.cci.CCIJRemoteManagedConnectionFactory">Serialized Form</a></dd></dl>

- <!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary

        - <!--   -->
### Fields inherited from class com.jbase.jremote.jca.[JRemoteManagedConnectionFactory](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory "class in com.jbase.jremote.jca")
`DEFAULT_PORT`

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `CCIJRemoteManagedConnectionFactory()`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `Object` | `createConnectionFactory()`<br>Construct a new connection factory for use in a non managed<br> environment.<br> |
| `Object` | `createConnectionFactory(javax.resource.spi.ConnectionManager cm)`<br>Construct a new connection factory using the ConnectionManager supplied <br> by the application server.<br> |


        - <!--   -->
### Methods inherited from class com.jbase.jremote.jca.[JRemoteManagedConnectionFactory](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory "class in com.jbase.jremote.jca")
`connect, createConnection, createManagedConnection, equals, getAccount, getActionTimeout, getAllowInput, getCompression, getCompressionThreshold, getEnvironments, getEnvVariables, getHost, getInvalidConnections, getLogWriter, getNaiveTrustManager, getPassword, getPort, getSSL, getUser, getWriter, hashCode, matchManagedConnections, setAccount, setActionTimeout, setAllowInput, setCharset, setCompression, setCompressionThreshold, setEnv, setEnvVariables, setHost, setLogWriter, setNaiveTrustManager, setPassword, setPort, setPort, setSSL, setUser, setWriter`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, finalize, getClass, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### CCIJRemoteManagedConnectionFactory

```
public CCIJRemoteManagedConnectionFactory()
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### createConnectionFactory

```
public Object createConnectionFactory(javax.resource.spi.ConnectionManager cm)
                               throws javax.resource.ResourceException
```

Construct a new connection factory using the ConnectionManager supplied <br> by the application server.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>createConnectionFactory</code> in interface <code>javax.resource.spi.ManagedConnectionFactory</code>
</dd>
<dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
<dd>
<code><a href="/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory#createConnectionFactory-javax.resource.spi.ConnectionManager-">createConnectionFactory</a></code> in class <code><a href="/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory" title="class in com.jbase.jremote.jca">JRemoteManagedConnectionFactory</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd>
<dt><span class="seeLabel">See Also:</span></dt>
<dd><code>ManagedConnectionFactory.createConnectionFactory(ConnectionManager)</code></dd></dl>

<!--   -->
        - #### createConnectionFactory

```
public Object createConnectionFactory()
                               throws javax.resource.ResourceException
```

Construct a new connection factory for use in a non managed<br> environment.  The factory will use a default connection manager.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>createConnectionFactory</code> in interface <code>javax.resource.spi.ManagedConnectionFactory</code>
</dd>
<dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
<dd>
<code><a href="/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory#createConnectionFactory--">createConnectionFactory</a></code> in class <code><a href="/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory" title="class in com.jbase.jremote.jca">JRemoteManagedConnectionFactory</a></code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code>javax.resource.ResourceException</code></dd>
<dt><span class="seeLabel">See Also:</span></dt>
<dd><code>ManagedConnectionFactory.createConnectionFactory()</code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJRemoteManagedConnectionFactory)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteInteraction "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteRecordFactory "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory)


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
