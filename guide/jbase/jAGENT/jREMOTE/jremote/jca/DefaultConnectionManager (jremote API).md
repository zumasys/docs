# DefaultConnectionManager (jremote API)

**Created At:** 9/25/2017 11:59:02 AM  
**Updated At:** 4/5/2018 11:59:19 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="DefaultConnectionManager (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class DefaultConnectionManager

<dl><dt>All Implemented Interfaces:</dt><dd>Serializable, javax.resource.spi.ConnectionManager</dd></dl>
* * *


```
public class DefaultConnectionManager
extends Object
implements javax.resource.spi.ConnectionManager
```

This class provides the default implementation of the ConnectionManager for non managed use. There is no pooling or level of service beyond allocating a connection.

The following excerpt is from the JCA specification.

A default implementation of ConnectionManager enables the resource adapter to provide services specific to itself. These services can include connection pooling, error logging and tracing, and security management. The default ConnectionManager delegates to the ManagedConnectionFactory the creation of physical connections to the underlying EIS.
<dl><dt><br></dt></dl>

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `DefaultConnectionManager()` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `Object`<br> | `allocateConnection(javax.resource.spi.ManagedConnectionFactory mcf, javax.resource.spi.ConnectionRequestInfo info)` <br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### DefaultConnectionManager

```
public DefaultConnectionManager()
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### allocateConnection

```
public Object allocateConnection(javax.resource.spi.ManagedConnectionFactory mcf,
                                 javax.resource.spi.ConnectionRequestInfo info)
                          throws javax.resource.ResourceException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>allocateConnection</code> in interface <code>javax.resource.spi.ConnectionManager</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)
