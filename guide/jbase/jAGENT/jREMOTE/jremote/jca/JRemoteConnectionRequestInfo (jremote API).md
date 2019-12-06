# JRemoteConnectionRequestInfo (jremote API)

**Created At:** 9/25/2017 12:05:22 PM  
**Updated At:** 4/6/2018 12:14:49 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JRemoteConnectionRequestInfo (jremote   API)";
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

## Class JRemoteConnectionRequestInfo

<dl><dt>All Implemented Interfaces:</dt><dd>javax.resource.spi.ConnectionRequestInfo</dd></dl>
* * *


```
public class JRemoteConnectionRequestInfo
extends Object
implements javax.resource.spi.ConnectionRequestInfo
```

This ConnectionRequestInfo allows JRemote clients to receive well defined callbacks for certain connection events.

A ConnectionRequestInfo object is used by the resource adapter to pass connection request information through the container for connection creation and matching.
<dl><dt><br></dt></dl>

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JRemoteConnectionRequestInfo(JConnectionCallbackHandler handler)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JConnectionCallbackHandler`<br> | `getCallbackHandler()` <br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- <!--   -->Methods inherited from interface javax.resource.spi.ConnectionRequestInfo
    - `equals, hashCode`

<!--   -->

### Constructor Detail
<!--   -->


#### JRemoteConnectionRequestInfo

```
public JRemoteConnectionRequestInfo(JConnectionCallbackHandler handler)
```


<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->


#### getCallbackHandler

```
public JConnectionCallbackHandler getCallbackHandler()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)
