# EventNotifier (jremote API)

**Created At:** 9/25/2017 11:59:08 AM  
**Updated At:** 4/6/2018 12:04:39 AM  
**Original Doc:** [com_jbase_jremote_jca_eventnotifier](https://docs.jbase.com/39258-jca/com_jbase_jremote_jca_eventnotifier)  
**Original ID:** 278219  
**Internal:** No  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="EventNotifier (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;


## Interface EventNotifier

```
public interface EventNotifier
```

The interface for event notifcation.

### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static EventNotifier`<br> | `CONNECTION_CLOSE_NOTIFIER` <br> |
| `static EventNotifier`<br> | `CONNECTION_ERROR_NOTIFIER` <br> |
| `static EventNotifier`<br> | `LOCALTRANS_COMMITTED_NOTIFIER` <br> |
| `static EventNotifier`<br> | `LOCALTRANS_ROLLEDBACK_NOTIFIER` <br> |
| `static EventNotifier`<br> | `LOCALTRANS_STARTED_NOTIFIER` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `notify(javax.resource.spi.ConnectionEventListener listener, javax.resource.spi.ConnectionEvent event)` <br> |

### Field Detail



#### CONNECTION\_ERROR\_NOTIFIER

```
static final EventNotifier CONNECTION_ERROR_NOTIFIER
```

#### CONNECTION\_CLOSE\_NOTIFIER

```
static final EventNotifier CONNECTION_CLOSE_NOTIFIER
```

#### LOCALTRANS\_STARTED\_NOTIFIER

```
static final EventNotifier LOCALTRANS_STARTED_NOTIFIER
```

#### LOCALTRANS\_COMMITTED\_NOTIFIER

```
static final EventNotifier LOCALTRANS_COMMITTED_NOTIFIER
```

#### LOCALTRANS\_ROLLEDBACK\_NOTIFIER

```
static final EventNotifier LOCALTRANS_ROLLEDBACK_NOTIFIER
```



### 


### Method Detail

#### notify

```
void notify(javax.resource.spi.ConnectionEventListener listener,
            javax.resource.spi.ConnectionEvent event)
```

Back to [jREMOTE API](com_jbase_jremote_package-summary)
