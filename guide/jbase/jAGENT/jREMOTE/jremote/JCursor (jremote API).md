# JCursor (jremote API)

**Created At:** 9/25/2017 12:09:14 PM  
**Updated At:** 12/24/2018 7:44:44 PM  


JavaScript is disabled on your browser.



## Interface JCursor

All Superinterfaces:Iterable&lt;String&gt;, [JSelectList](/39248-jremote/com_jbase_jremote_JSelectList "interface in com.jbase.jremote")All Known Implementing Classes:[JCursorImpl](/39250-io/com_jbase_jremote_io_JCursorImpl "class in com.jbase.jremote.io")
* * *


```
public interface JCursor
extends JSelectList
```

A cursor to a jBASE file.
This object represents a list of jBASE file records.

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JDynArray`<br> | `getRecord()`<br>Returns the current record.<br> |
| `void`<br> | `setRecord(JDynArray record)`<br>Modifies the current record.<br> |
| `void`<br> | `update()`<br>Update changes.<br> |


- Methods inherited from interface com.jbase.jremote.JSelectList
    - `close, getFetchSize, getKey, getPosition, goToPosition, hasNext, hasPrevious, iterator, next, previous, setFetchSize`
- Methods inherited from interface java.lang.Iterable
    - `forEach, spliterator`

### Method Detail



#### getRecord

```
JDynArray getRecord()
```

Returns the current record.
Returns:record value




#### setRecord

```
void setRecord(JDynArray record)
```

Modifies the current record. Changes are not applied until methods update() or close() are called.
Parameters:`record` -


#### update

```
void update()
     throws JRemoteException
```

Update changes. This method will apply all pending changes to the cursor.
Throws:`JRemoteException`

Back to [jREMOTE API](com_jbase_jremote_package-summary)


