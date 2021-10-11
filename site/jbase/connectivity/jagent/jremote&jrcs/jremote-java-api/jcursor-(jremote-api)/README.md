# JCursor (jremote API)

<PageHeader />

## Interface JCursor

All Superinterfaces:Iterable&lt;String&gt;, [JSelectList](./../jselectlist-(jremote-api) "interface in com.jbase.jremote")  
All Known Implementing Classes:[JCursorImpl](./../io/jcursorimpl-(jremote-api) "class in com.jbase.jremote.io")

* * *

```java
public interface JCursor
extends JSelectList
```

A cursor to a jBASE file.
This object represents a list of jBASE file records.

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | `getRecord()`<br>Returns the current record. |
| `void` | `setRecord(JDynArray record)`<br>Modifies the current record. |
| `void` | `update()`<br>Update changes. |

- Methods inherited from interface com.jbase.jremote.JSelectList
  - `close, getFetchSize, getKey, getPosition, goToPosition, hasNext, hasPrevious, iterator, next, previous, setFetchSize`
- Methods inherited from interface java.lang.Iterable
  - `forEach, spliterator`

### Method Detail

#### getRecord

```java
JDynArray getRecord()
```

Returns the current record.
Returns:record value

#### setRecord

```java
void setRecord(JDynArray record)
```

Modifies the current record. Changes are not applied until methods update() or close() are called.
Parameters:`record` -

#### update

```java
void update()
     throws JRemoteException
```

Update changes. This method will apply all pending changes to the cursor.
Throws:`JRemoteException`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
