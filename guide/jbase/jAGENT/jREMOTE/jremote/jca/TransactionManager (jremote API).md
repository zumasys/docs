# TransactionManager (jremote API)

**Created At:** 9/25/2017 12:08:35 PM  
**Updated At:** 4/6/2018 12:10:25 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="TransactionManager (jremote   API)";
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
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class TransactionManager

<dl><dt>All Implemented Interfaces:</dt><dd>javax.resource.spi.LocalTransaction</dd></dl>
* * *


```
public class TransactionManager
extends Object
implements javax.resource.spi.LocalTransaction
```

<!--   -->

### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| `protected `<br> | `TransactionManager(JRemoteManagedConnection managedConnection)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `begin()`<br>Begin a transaction on this connection.<br> |
| `void`<br> | `commit()`<br>Commit a transaction on this connection.<br> |
| `protected boolean`<br> | `isManagedTransaction()` <br> |
| `void`<br> | `rollback()`<br>Rollback a transaction on this connection.<br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### TransactionManager

```
protected TransactionManager(JRemoteManagedConnection managedConnection)
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### begin

```
public void begin()
           throws javax.resource.ResourceException
```

Begin a transaction on this connection. Performs a callback to the managed connection begin.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>begin</code> in interface <code>javax.resource.spi.LocalTransaction</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>#begin()</code></dd></dl><!--   -->
#### commit

```
public void commit()
            throws javax.resource.ResourceException
```

Commit a transaction on this connection. Performs a callback to the managed connection commit.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>commit</code> in interface <code>javax.resource.spi.LocalTransaction</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>#commit()</code></dd></dl><!--   -->
#### rollback

```
public void rollback()
              throws javax.resource.ResourceException
```

Rollback a transaction on this connection. Performs a callback to the managed connection rollback.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>rollback</code> in interface <code>javax.resource.spi.LocalTransaction</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>#rollback()</code></dd></dl><!--   -->
#### isManagedTransaction

```
protected boolean isManagedTransaction()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->

Back to [jREMOTE API](com_jbase_jremote_package-summary)


