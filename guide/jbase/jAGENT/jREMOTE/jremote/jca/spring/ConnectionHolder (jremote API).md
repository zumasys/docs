# ConnectionHolder (jremote API)

**Created At:** 9/25/2017 12:07:47 PM  
**Updated At:** 4/5/2018 11:45:13 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="ConnectionHolder (jremote   API)";
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

## Class ConnectionHolder

```
public class ConnectionHolder
extends org.springframework.transaction.support.ResourceHolderSupport
```

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `ConnectionHolder(JConnection connection)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JConnection`<br> | `getJConnection()` <br> |


- <!--   -->Methods inherited from class org.springframework.transaction.support.ResourceHolderSupport
    - `clear, getDeadline, getTimeToLiveInMillis, getTimeToLiveInSeconds, hasTimeout, isOpen, isRollbackOnly, isSynchronizedWithTransaction, released, requested, reset, setRollbackOnly, setSynchronizedWithTransaction, setTimeoutInMillis, setTimeoutInSeconds`
- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### ConnectionHolder

```
public ConnectionHolder(JConnection connection)
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### getJConnection

```
public JConnection getJConnection()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)
