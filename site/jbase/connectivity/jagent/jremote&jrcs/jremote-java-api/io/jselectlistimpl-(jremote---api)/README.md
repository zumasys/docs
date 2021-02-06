# JSelectListImpl (jremote   API)

<PageHeader />

## Class JSelectListImpl

All Implemented Interfaces:[JSelectList](./../../jselectlist-(jremote-api) "interface in com.jbase.jremote"), Iterable&lt;String&gt;Direct Known Subclasses:[JCursorImpl](./../jcursorimpl-(jremote-api) "class in com.jbase.jremote.io")
* * *


```
public class JSelectListImpl
extends Object
implements JSelectList
```

A select list to a jBASE file.
This object represents a list of record keys to a jBASE file.

### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `protected AbstractJRemoteConnection`<br> | `connection` <br> |
| `protected int`<br> | `cursorStartPos` <br> |
| `protected JSelectListProt`<br> | `data` <br> |
| `protected static int`<br> | `FETCH_BACKWARD` <br> |
| `protected static int`<br> | `FETCH_FORWARD` <br> |
| `protected int`<br> | `fetchSize` <br> |






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JSelectListImpl(AbstractJRemoteConnection connection, JDynArray keys)`<br>Constructs a select list from specified dynamic array.<br> |
| `JSelectListImpl(AbstractJRemoteConnection connection, JSelectListProt data)`<br>Constructs a select list from a serializable select list.<br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `close()`<br>Close select list.<br> |
| `protected JSelectListProt`<br> | `fetchNext(boolean fetchData)` <br> |
| `protected JSelectListProt`<br> | `fetchPrevious(boolean fetchData)` <br> |
| `JSelectListProt`<br> | `getData()`<br>Obtains a reference to the serializable part of the select list<br> |
| `int`<br> | `getFetchSize()`<br>Returns the fetch size.<br> |
| `String`<br> | `getKey()`<br>Returns the current key<br> |
| `int`<br> | `getPosition()`<br>Returns the current position.<br> |
| `void`<br> | `goToPosition(int targetPos)`<br>Move to the specified position.<br> |
| `boolean`<br> | `hasNext()`<br>Returns whether it is possible to move forward.<br> |
| `protected boolean`<br> | `hasNext(boolean fetchData)` <br> |
| `boolean`<br> | `hasPrevious()`<br>Returns whether it is possible to move backwards.<br> |
| `protected boolean`<br> | `hasPrevious(boolean fetchData)` <br> |
| `Iterator<String>`<br> | `iterator()`<br>Returns an iterator to the select list<br> |
| `boolean`<br> | `next()`<br>Move to next item<br> |
| `protected boolean`<br> | `next(boolean fetchData)` <br> |
| `boolean`<br> | `previous()`<br>Move to previous item<br> |
| `protected boolean`<br> | `previous(boolean fetchData)` <br> |
| `void`<br> | `setConnection(AbstractJRemoteConnection connection)`<br>Attaches a connection handle to this select list.<br> |
| `void`<br> | `setFetchSize(int fetchSize)`<br>Sets the fetch size.<br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- Methods inherited from interface java.lang.Iterable
    - `forEach, spliterator`

### Field Detail

#### connection

```
protected AbstractJRemoteConnection connection
```

#### 


#### data

```
protected JSelectListProt data
```

#### 


#### fetchSize

```
protected int fetchSize
```

#### 


#### cursorStartPos

```
protected int cursorStartPos
```

#### 


#### FETCH\_FORWARD

```
protected static final int FETCH_FORWARD
```
See Also:[Constant Field Values](./../../constant-field-values)
#### 


#### FETCH\_BACKWARD

```
protected static final int FETCH_BACKWARD
```
See Also:[Constant Field Values](./../../constant-field-values)


### 


### Constructor Detail

#### JSelectListImpl

```
public JSelectListImpl(AbstractJRemoteConnection connection,
                       JDynArray keys)
```

Constructs a select list from specified dynamic array.
Parameters:`connection` - Connection handle used to fetch items from server`keys` - Dynamic array containing keys separated by attribute markers.
#### 


#### JSelectListImpl

```
public JSelectListImpl(AbstractJRemoteConnection connection,
                       JSelectListProt data)
```

Constructs a select list from a serializable select list.
Parameters:`connection` - Connection handle used to fetch items from server`data` - Serializable select list


### 


### Method Detail

#### getKey

```
public String getKey()
```

Description copied from interface: `JSelectList`

Returns the current key
Specified by:`getKey` in interface `JSelectList`Returns:keySee Also:[`JSelectList.getKey()`](./../../jselectlist-(jremote-api)#getKey--)
#### 


#### getFetchSize

```
public int getFetchSize()
```

Description copied from interface: `JSelectList`

Returns the fetch size. This value represents the number of items fetched simultaneously from the server.
Specified by:`getFetchSize` in interface `JSelectList`Returns:fetch sizeSee Also:[`JSelectList.getFetchSize()`](./../../jselectlist-(jremote-api)#getFetchSize--)
#### 


#### setFetchSize

```
public void setFetchSize(int fetchSize)
```

Description copied from interface: `JSelectList`

Sets the fetch size.
Specified by:`setFetchSize` in interface `JSelectList`Parameters:`fetchSize` - fetch sizeSee Also:[`JSelectList.setFetchSize(int)`](./../../jselectlist-(jremote-api)#setFetchSize-int-)
#### 


#### setConnection

```
public void setConnection(AbstractJRemoteConnection connection)
```

Attaches a connection handle to this select list. A connection is required to fetch items from the server.
Parameters:`connection` - Connection handle
#### 


#### getData

```
public JSelectListProt getData()
```

Obtains a reference to the serializable part of the select list
Returns:serializable select list
#### 


#### next

```
public boolean next()
             throws JRemoteException
```

Description copied from interface: `JSelectList`

Move to next item
Specified by:`next` in interface `JSelectList`Returns:true if OK, false otherwiseThrows:`JRemoteException`See Also:[`JSelectList.next()`](./../../jselectlist-(jremote-api)#next--)
#### 


#### previous

```
public boolean previous()
                 throws JRemoteException
```

Description copied from interface: `JSelectList`

Move to previous item
Specified by:`previous` in interface `JSelectList`Returns:true if OK, false otherwiseThrows:`JRemoteException`See Also:[`JSelectList.previous()`](./../../jselectlist-(jremote-api)#previous--)
#### 


#### hasNext

```
public boolean hasNext()
                throws JRemoteException
```

Description copied from interface: `JSelectList`

Returns whether it is possible to move forward.
Specified by:`hasNext` in interface `JSelectList`Returns:true if YES, false otherwiseThrows:`JRemoteException`See Also:[`JSelectList.hasNext()`](./../../jselectlist-(jremote-api)#hasNext--)
#### 


#### hasPrevious

```
public boolean hasPrevious()
                    throws JRemoteException
```

Description copied from interface: `JSelectList`

Returns whether it is possible to move backwards.
Specified by:`hasPrevious` in interface `JSelectList`Returns:true if YES, false otherwiseThrows:`JRemoteException`See Also:[`JSelectList.hasPrevious()`](./../../jselectlist-(jremote-api)#hasPrevious--)
#### 


#### next

```
protected boolean next(boolean fetchData)
                throws JRemoteException
```
Throws:`JRemoteException`
#### 


#### previous

```
protected boolean previous(boolean fetchData)
                    throws JRemoteException
```
Throws:`JRemoteException`
#### 


#### hasNext

```
protected boolean hasNext(boolean fetchData)
                   throws JRemoteException
```
Throws:`JRemoteException`
#### 


#### hasPrevious

```
protected boolean hasPrevious(boolean fetchData)
                       throws JRemoteException
```
Throws:`JRemoteException`
#### 


#### getPosition

```
public int getPosition()
```

Description copied from interface: `JSelectList`

Returns the current position. The first item in the list has position 1.
Specified by:`getPosition` in interface `JSelectList`Returns:positionSee Also:[`JSelectList.getPosition()`](./../../jselectlist-(jremote-api)#getPosition--)
#### 


#### goToPosition

```
public void goToPosition(int targetPos)
                  throws JRemoteException
```

Description copied from interface: `JSelectList`

Move to the specified position. The first item in the list has position 1.
Specified by:`goToPosition` in interface `JSelectList`Throws:`JRemoteException`See Also:`com.jbase.jremote.JSelectList#goToPosition()`
#### 


#### fetchNext

```
protected JSelectListProt fetchNext(boolean fetchData)
                             throws JRemoteException
```
Throws:`JRemoteException`
#### 


#### fetchPrevious

```
protected JSelectListProt fetchPrevious(boolean fetchData)
                                 throws JRemoteException
```
Throws:`JRemoteException`
#### 


#### close

```
public void close()
           throws JRemoteException
```

Description copied from interface: `JSelectList`

Close select list. Requests server to release all resources associated to this object.
Specified by:`close` in interface `JSelectList`Throws:`JRemoteException`See Also:[`JSelectList.close()`](./../../jselectlist-(jremote-api)#close--)
#### 


#### iterator

```
public Iterator<String> iterator()
```

Description copied from interface: `JSelectList`

Returns an iterator to the select list
Specified by:`iterator` in interface `JSelectList`Specified by:`iterator` in interface `Iterable<String>`Returns:iteratorSee Also:[`JSelectList.iterator()`](./../../jselectlist-(jremote-api)#iterator--)

Back to [jRemote API](../../../../jremote-api/README.md)

  
<PageFooter />
