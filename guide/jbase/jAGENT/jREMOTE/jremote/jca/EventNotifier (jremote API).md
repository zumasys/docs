# EventNotifier (jremote API)

**Created At:** 9/25/2017 11:59:08 AM  
**Updated At:** 4/6/2018 12:04:39 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="EventNotifier (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":6};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript>&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Interface EventNotifier

```
public interface EventNotifier
```

The interface for event notifcation.
<dl><dt><br></dt></dl>

<!--   -->

### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static EventNotifier`<br> | `CONNECTION_CLOSE_NOTIFIER` <br> |
| `static EventNotifier`<br> | `CONNECTION_ERROR_NOTIFIER` <br> |
| `static EventNotifier`<br> | `LOCALTRANS_COMMITTED_NOTIFIER` <br> |
| `static EventNotifier`<br> | `LOCALTRANS_ROLLEDBACK_NOTIFIER` <br> |
| `static EventNotifier`<br> | `LOCALTRANS_STARTED_NOTIFIER` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `notify(javax.resource.spi.ConnectionEventListener listener, javax.resource.spi.ConnectionEvent event)` <br> |

<!--   -->

### Field Detail
<!--   -->


#### CONNECTION\_ERROR\_NOTIFIER

```
static final EventNotifier CONNECTION_ERROR_NOTIFIER
```
<!--   -->
#### CONNECTION\_CLOSE\_NOTIFIER

```
static final EventNotifier CONNECTION_CLOSE_NOTIFIER
```
<!--   -->
#### LOCALTRANS\_STARTED\_NOTIFIER

```
static final EventNotifier LOCALTRANS_STARTED_NOTIFIER
```
<!--   -->
#### LOCALTRANS\_COMMITTED\_NOTIFIER

```
static final EventNotifier LOCALTRANS_COMMITTED_NOTIFIER
```
<!--   -->
#### LOCALTRANS\_ROLLEDBACK\_NOTIFIER

```
static final EventNotifier LOCALTRANS_ROLLEDBACK_NOTIFIER
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### notify

```
void notify(javax.resource.spi.ConnectionEventListener listener,
            javax.resource.spi.ConnectionEvent event)
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)
