# JResultSetImpl (jremote API)

**Created At:** 9/25/2017 11:52:46 AM  
**Updated At:** 12/24/2018 8:53:06 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JResultSetImpl (jremote   API)";
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
var activeTableTab = "activeTableTab";</script><noscript>&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JResultSetImpl

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39248-jremote/com_jbase_jremote_jresultset" title="interface in com.jbase.jremote">JResultSet</a></dd></dl>
* * *


```
public class JResultSetImpl
extends Object
implements JResultSet
```

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JResultSetImpl(AbstractJRemoteConnection connection, int statementId, int fetchSize)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JDynArray`<br> | `getRow()` <br> |
| `boolean`<br> | `next()` <br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->


#### JResultSetImpl

```
public JResultSetImpl(AbstractJRemoteConnection connection,
                      int statementId,
                      int fetchSize)
```





<!--   -->

### Method Detail
<!--   -->


#### getRow

```
public JDynArray getRow()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jresultset#getRow--">getRow</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jresultset" title="interface in com.jbase.jremote">JResultSet</a></code></dd></dl>


#### next

```
public boolean next()
             throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jresultset#next--">next</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jresultset" title="interface in com.jbase.jremote">JResultSet</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->

Back to [jREMOTE API](com_jbase_jremote_package-summary)
