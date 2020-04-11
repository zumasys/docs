# EventNotifier (jremote API)

<PageHeader />

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

  
<PageFooter />
