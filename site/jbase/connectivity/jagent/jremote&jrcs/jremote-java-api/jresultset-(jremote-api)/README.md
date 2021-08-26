# JResultSet (jremote API)

<PageHeader />

## Interface JResultSet

All Known Implementing Classes:[JResultSetImpl](./../io/jresultsetimpl-(jremote-api) "class in com.jbase.jremote.io")

* * *

```java
public interface JResultSet
```

Allows iteration of a result set fetched in blocks.

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | `getRow()`  |
| `boolean` | `next()`  |

### Method Detail

#### next

```java
boolean next()
      throws JRemoteException
```

Throws:`JRemoteException`

#### getRow

```java
JDynArray getRow()
```

Back to [jRemote API](./../../README.md)

<PageFooter />
