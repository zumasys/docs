# JSelectListImpl (jremote   API)

<PageHeader />

## Class JSelectListImpl

All Implemented Interfaces:[JSelectList](./../../jselectlist-(jremote-api) "interface in com.jbase.jremote"), Iterable&lt;String&gt;  
Direct Known Subclasses:[JCursorImpl](./../jcursorimpl-(jremote-api) "class in com.jbase.jremote.io")
* * *

```java
public class JSelectListImpl
extends Object
implements JSelectList
```

A select list to a jBASE file.
This object represents a list of record keys to a jBASE file.

### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| `protected AbstractJRemoteConnection` | `connection`  |
| `protected int` | `cursorStartPos`  |
| `protected JSelectListProt` | `data`  |
| `protected static int` | `FETCH_BACKWARD`  |
| `protected static int` | `FETCH_FORWARD`  |
| `protected int` | `fetchSize`  |

### Constructor Summary

| Constructor and Description |
| --- |
| `JSelectListImpl(AbstractJRemoteConnection connection, JDynArray keys)`<br>Constructs a select list from specified dynamic array. |
| `JSelectListImpl(AbstractJRemoteConnection connection, JSelectListProt data)`<br>Constructs a select list from a serializable select list. |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()`<br>Close select list. |
| `protected JSelectListProt` | `fetchNext(boolean fetchData)`  |
| `protected JSelectListProt` | `fetchPrevious(boolean fetchData)`  |
| `JSelectListProt` | `getData()`<br>Obtains a reference to the serializable part of the select list |
| `int` | `getFetchSize()`<br>Returns the fetch size. |
| `String` | `getKey()`<br>Returns the current key |
| `int` | `getPosition()`<br>Returns the current position. |
| `void` | `goToPosition(int targetPos)`<br>Move to the specified position. |
| `boolean` | `hasNext()`<br>Returns whether it is possible to move forward. |
| `protected boolean` | `hasNext(boolean fetchData)`  |
| `boolean` | `hasPrevious()`<br>Returns whether it is possible to move backwards. |
| `protected boolean` | `hasPrevious(boolean fetchData)`  |
| `Iterator<String>` | `iterator()`<br>Returns an iterator to the select list |
| `boolean` | `next()`<br>Move to next item |
| `protected boolean` | `next(boolean fetchData)`  |
| `boolean` | `previous()`<br>Move to previous item |
| `protected boolean` | `previous(boolean fetchData)`  |
| `void` | `setConnection(AbstractJRemoteConnection connection)`<br>Attaches a connection handle to this select list. |
| `void` | `setFetchSize(int fetchSize)`<br>Sets the fetch size. |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- Methods inherited from interface java.lang.Iterable
  - `forEach, spliterator`

### Field Detail

#### connection

```java
protected AbstractJRemoteConnection connection
```

#### data

```java
protected JSelectListProt data
```

#### fetchSize

```java
protected int fetchSize
```

#### cursorStartPos

```java
protected int cursorStartPos
```

#### FETCH\_FORWARD

```java
protected static final int FETCH_FORWARD
```

See Also:[Constant Field Values](./../../constant-field-values)

#### FETCH\_BACKWARD

```java
protected static final int FETCH_BACKWARD
```

See Also:[Constant Field Values](./../../constant-field-values)

### Constructor Detail

#### JSelectListImpl

```java
public JSelectListImpl(AbstractJRemoteConnection connection,
                       JDynArray keys)
```

Constructs a select list from specified dynamic array.  
Parameters:`connection` - Connection handle used to fetch items from server`keys` - Dynamic array containing keys separated by attribute markers.

#### JSelectListImpl

```java
public JSelectListImpl(AbstractJRemoteConnection connection,
                       JSelectListProt data)
```

Constructs a select list from a serializable select list.  
Parameters:`connection` - Connection handle used to fetch items from server`data` - Serializable select list

### Method Detail

#### getKey

```java
public String getKey()
```

Description copied from interface: `JSelectList`

Returns the current key  
Specified by:`getKey` in interface `JSelectList`  
Returns:key  
See Also:[`JSelectList.getKey()`](./../../jselectlist-(jremote-api)#getKey--)

#### getFetchSize

```java
public int getFetchSize()
```

Description copied from interface: `JSelectList`

Returns the fetch size. This value represents the number of items fetched simultaneously from the server.  
Specified by:`getFetchSize` in interface `JSelectList`  
Returns:fetch size  
See Also:[`JSelectList.getFetchSize()`](./../../jselectlist-(jremote-api)#getFetchSize--)

#### setFetchSize

```java
public void setFetchSize(int fetchSize)
```

Description copied from interface: `JSelectList`

Sets the fetch size.  
Specified by:`setFetchSize` in interface `JSelectList`  
Parameters:`fetchSize` - fetch size  
See Also:[`JSelectList.setFetchSize(int)`](./../../jselectlist-(jremote-api)#setFetchSize-int-)

#### setConnection

```java
public void setConnection(AbstractJRemoteConnection connection)
```

Attaches a connection handle to this select list. A connection is required to fetch items from the server.  
Parameters:`connection` - Connection handle

#### getData

```java
public JSelectListProt getData()
```

Obtains a reference to the serializable part of the select list  
Returns:serializable select list

#### next

```java
public boolean next()
             throws JRemoteException
```

Description copied from interface: `JSelectList`

Move to next item  
Specified by:`next` in interface `JSelectList`  
Returns:true if OK, false otherwise  
Throws:`JRemoteException`  
See Also:[`JSelectList.next()`](./../../jselectlist-(jremote-api)#next--)

#### previous

```java
public boolean previous()
                 throws JRemoteException
```

Description copied from interface: `JSelectList`

Move to previous item  
Specified by:`previous` in interface `JSelectList`  
Returns:true if OK, false otherwise  
Throws:`JRemoteException`  
See Also:[`JSelectList.previous()`](./../../jselectlist-(jremote-api)#previous--)

#### hasNext

```java
public boolean hasNext()
                throws JRemoteException
```

Description copied from interface: `JSelectList`

Returns whether it is possible to move forward.  
Specified by:`hasNext` in interface `JSelectList`  
Returns:true if YES, false otherwise  
Throws:`JRemoteException`  
See Also:[`JSelectList.hasNext()`](./../../jselectlist-(jremote-api)#hasNext--)

#### hasPrevious

```java
public boolean hasPrevious()
                    throws JRemoteException
```

Description copied from interface: `JSelectList`

Returns whether it is possible to move backwards.  
Specified by:`hasPrevious` in interface `JSelectList`  
Returns:true if YES, false otherwise  
Throws:`JRemoteException`  
See Also:[`JSelectList.hasPrevious()`](./../../jselectlist-(jremote-api)#hasPrevious--)

#### next

```java
protected boolean next(boolean fetchData)
                throws JRemoteException
```

Throws:`JRemoteException`

#### previous

```java
protected boolean previous(boolean fetchData)
                    throws JRemoteException
```

Throws:`JRemoteException`

#### hasNext

```java
protected boolean hasNext(boolean fetchData)
                   throws JRemoteException
```

Throws:`JRemoteException`

#### hasPrevious

```java
protected boolean hasPrevious(boolean fetchData)
                       throws JRemoteException
```

Throws:`JRemoteException`

#### getPosition

```java
public int getPosition()
```

Description copied from interface: `JSelectList`

Returns the current position. The first item in the list has position 1.  
Specified by:`getPosition` in interface `JSelectList`  
Returns:position  
See Also:[`JSelectList.getPosition()`](./../../jselectlist-(jremote-api)#getPosition--)

#### goToPosition

```java
public void goToPosition(int targetPos)
                  throws JRemoteException
```

Description copied from interface: `JSelectList`

Move to the specified position. The first item in the list has position 1.  
Specified by:`goToPosition` in interface `JSelectList`  
Throws:`JRemoteException`  
See Also:`com.jbase.jremote.JSelectList#goToPosition()`

#### fetchNext

```java
protected JSelectListProt fetchNext(boolean fetchData)
                             throws JRemoteException
```

Throws:`JRemoteException`

#### fetchPrevious

```java
protected JSelectListProt fetchPrevious(boolean fetchData)
                                 throws JRemoteException
```

Throws:`JRemoteException`

#### close

```java
public void close()
           throws JRemoteException
```

Description copied from interface: `JSelectList`

Close select list. Requests server to release all resources associated to this object.  
Specified by:`close` in interface `JSelectList`  
Throws:`JRemoteException`  
See Also:[`JSelectList.close()`](./../../jselectlist-(jremote-api)#close--)

#### iterator

```java
public Iterator<String> iterator()
```

Description copied from interface: `JSelectList`

Returns an iterator to the select list  
Specified by:`iterator` in interface `JSelectList`  
Specified by:`iterator` in interface `Iterable<String>`  
Returns:iterator  
See Also:[`JSelectList.iterator()`](./../../jselectlist-(jremote-api)#iterator--)

Back to [jRemote API](./../../README.md)
  
<PageFooter />
