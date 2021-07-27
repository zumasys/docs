# JSelectList (jremote API)

<PageHeader />

## Interface JSelectList

All Superinterfaces:Iterable&lt;String&gt;  
All Known Subinterfaces:[JCursor](./../jcursor-(jremote-api) "interface in com.jbase.jremote")  
All Known Implementing Classes:[JCursorImpl](./../io/jcursorimpl-(jremote-api) "class in com.jbase.jremote.io"), [JSelectListImpl](./../io/jselectlistimpl-(jremote---api) "class in com.jbase.jremote.io")

* * *

```java
public interface JSelectList
extends Iterable<String>
```

A select list to a jBASE file.
This object represents a list of record keys to a jBASE file.

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()`<br>Close select list. |
| `int` | `getFetchSize()`<br>Returns the fetch size. |
| `String` | `getKey()`<br>Returns the current key |
| `int` | `getPosition()`<br>Returns the current position. |
| `void` | `goToPosition(int targetPos)`<br>Move to the specified position. |
| `boolean` | `hasNext()`<br>Returns whether it is possible to move forward. |
| `boolean` | `hasPrevious()`<br>Returns whether it is possible to move backwards. |
| `Iterator<String>` | `iterator()`<br>Returns an iterator to the select list |
| `boolean` | `next()`<br>Move to next item |
| `boolean` | `previous()`<br>Move to previous item |
| `void` | `setFetchSize(int fetchSize)`<br>Sets the fetch size. |

- Methods inherited from interface java.lang.Iterable
  - `forEach, spliterator`

### Method Detail

#### iterator

```java
Iterator<String> iterator()
```

Returns an iterator to the select list
Specified by:`iterator` in interface `Iterable<String>`Returns:iterator

#### getKey

```java
String getKey()
```

Returns the current key
Returns:key

#### getFetchSize

```java
int getFetchSize()
```

Returns the fetch size. This value represents the number of items fetched simultaneously from the server.
Returns:fetch size

#### setFetchSize

```java
void setFetchSize(int fetchSize)
```

Sets the fetch size.
Parameters:`fetchSize` - fetch size

#### next

```java
boolean next()
      throws JRemoteException
```

Move to next item
Returns:true if OK, false otherwiseThrows:`JRemoteException`

#### previous

```java
boolean previous()
          throws JRemoteException
```

Move to previous item
Returns:true if OK, false otherwiseThrows:`JRemoteException`

#### hasNext

```java
boolean hasNext()
         throws JRemoteException
```

Returns whether it is possible to move forward.
Returns:true if YES, false otherwiseThrows:`JRemoteException`

#### hasPrevious

```java
boolean hasPrevious()
             throws JRemoteException
```

Returns whether it is possible to move backwards.
Returns:true if YES, false otherwiseThrows:`JRemoteException`

#### getPosition

```java
int getPosition()
```

Returns the current position. The first item in the list has position 1.
Returns:position

#### goToPosition

```java
void goToPosition(int targetPos)
           throws JRemoteException
```

Move to the specified position. The first item in the list has position 1.
Parameters:`targetPos` -Throws:`JRemoteException`

#### close

```java
void close()
    throws JRemoteException
```

Close select list. Requests server to release all resources associated to this object.
Throws:`JRemoteException`

Back to [jRemote API](./../../README.md)

<PageFooter />
