# JSelectList (jremote API)

<PageHeader />

## Interface JSelectList

All Superinterfaces:Iterable&lt;String&gt;All Known Subinterfaces:[JCursor](./../jcursor-%28jremote-api%29 "interface in com.jbase.jremote")All Known Implementing Classes:[JCursorImpl](./../io/jcursorimpl-%28jremote-api%29 "class in com.jbase.jremote.io"), [JSelectListImpl](./../io/jselectlistimpl-%28jremote---api%29 "class in com.jbase.jremote.io")
* * *


```
public interface JSelectList
extends Iterable<String>
```

A select list to a jBASE file.
This object represents a list of record keys to a jBASE file.

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `close()`<br>Close select list.<br> |
| `int`<br> | `getFetchSize()`<br>Returns the fetch size.<br> |
| `String`<br> | `getKey()`<br>Returns the current key<br> |
| `int`<br> | `getPosition()`<br>Returns the current position.<br> |
| `void`<br> | `goToPosition(int targetPos)`<br>Move to the specified position.<br> |
| `boolean`<br> | `hasNext()`<br>Returns whether it is possible to move forward.<br> |
| `boolean`<br> | `hasPrevious()`<br>Returns whether it is possible to move backwards.<br> |
| `Iterator<String>`<br> | `iterator()`<br>Returns an iterator to the select list<br> |
| `boolean`<br> | `next()`<br>Move to next item<br> |
| `boolean`<br> | `previous()`<br>Move to previous item<br> |
| `void`<br> | `setFetchSize(int fetchSize)`<br>Sets the fetch size.<br> |


- Methods inherited from interface java.lang.Iterable
    - `forEach, spliterator`

### Method Detail



#### iterator

```
Iterator<String> iterator()
```

Returns an iterator to the select list
Specified by:`iterator` in interface `Iterable<String>`Returns:iterator




#### getKey

```
String getKey()
```

Returns the current key
Returns:key


#### getFetchSize

```
int getFetchSize()
```

Returns the fetch size. This value represents the number of items fetched simultaneously from the server.
Returns:fetch size


#### setFetchSize

```
void setFetchSize(int fetchSize)
```

Sets the fetch size.
Parameters:`fetchSize` - fetch size


#### next

```
boolean next()
      throws JRemoteException
```

Move to next item
Returns:true if OK, false otherwiseThrows:`JRemoteException`


#### previous

```
boolean previous()
          throws JRemoteException
```

Move to previous item
Returns:true if OK, false otherwiseThrows:`JRemoteException`


#### hasNext

```
boolean hasNext()
         throws JRemoteException
```

Returns whether it is possible to move forward.
Returns:true if YES, false otherwiseThrows:`JRemoteException`


#### hasPrevious

```
boolean hasPrevious()
             throws JRemoteException
```

Returns whether it is possible to move backwards.
Returns:true if YES, false otherwiseThrows:`JRemoteException`


#### getPosition

```
int getPosition()
```

Returns the current position. The first item in the list has position 1.
Returns:position


#### goToPosition

```
void goToPosition(int targetPos)
           throws JRemoteException
```

Move to the specified position. The first item in the list has position 1.
Parameters:`targetPos` -Throws:`JRemoteException`


#### close

```
void close()
    throws JRemoteException
```

Close select list. Requests server to release all resources associated to this object.
Throws:`JRemoteException`



Back to [jREMOTE API](com_jbase_jremote_package-summary)

  
<PageFooter />
