# RollbackTransactionRequest (jremote API)

**Created At:** 9/25/2017 12:04:46 PM  
**Updated At:** 4/4/2018 6:31:29 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="RollbackTransactionRequest (jremote   API)";
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

## Class RollbackTransactionRequest

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></dd></dl>
* * *


```
public class RollbackTransactionRequest
extends JRemoteRequest
```

Request to commit transaction.
<dl><dt><br></dt></dl>

<!--   -->

### Nested Class Summary

- <!--   -->Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`




<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `RollbackTransactionRequest()` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getType()` <br> |


- <!--   -->Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
    - `getVersion, readObject, writeObject`


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### 


### Constructor Detail
<!--   -->
#### RollbackTransactionRequest

```
public RollbackTransactionRequest()
```





### Method Detail
<!--   -->
#### getType

```
public int getType()
```
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">type id of the objects, used during the serialization</dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#getType--"><code>JBaseSerializable.getType()</code></a></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)
