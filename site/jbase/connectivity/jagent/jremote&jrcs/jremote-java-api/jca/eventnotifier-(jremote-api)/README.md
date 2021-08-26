# EventNotifier (jremote API)

<PageHeader />

## Interface EventNotifier

```java
public interface EventNotifier
```

The interface for event notifcation.

### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| `static EventNotifier` | `CONNECTION_CLOSE_NOTIFIER`  |
| `static EventNotifier` | `CONNECTION_ERROR_NOTIFIER`  |
| `static EventNotifier` | `LOCALTRANS_COMMITTED_NOTIFIER`  |
| `static EventNotifier` | `LOCALTRANS_ROLLEDBACK_NOTIFIER`  |
| `static EventNotifier` | `LOCALTRANS_STARTED_NOTIFIER`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `notify(javax.resource.spi.ConnectionEventListener listener, javax.resource.spi.ConnectionEvent event)`  |

### Field Detail

#### CONNECTION\_ERROR\_NOTIFIER

```java
static final EventNotifier CONNECTION_ERROR_NOTIFIER
```

#### CONNECTION\_CLOSE\_NOTIFIER

```java
static final EventNotifier CONNECTION_CLOSE_NOTIFIER
```

#### LOCALTRANS\_STARTED\_NOTIFIER

```java
static final EventNotifier LOCALTRANS_STARTED_NOTIFIER
```

#### LOCALTRANS\_COMMITTED\_NOTIFIER

```java
static final EventNotifier LOCALTRANS_COMMITTED_NOTIFIER
```

#### LOCALTRANS\_ROLLEDBACK\_NOTIFIER

```java
static final EventNotifier LOCALTRANS_ROLLEDBACK_NOTIFIER
```

### Method Detail

#### notify

```java
void notify(javax.resource.spi.ConnectionEventListener listener,
            javax.resource.spi.ConnectionEvent event)
```

Back to [jRemote API](./../../README.md)

<PageFooter />
