# JCursor

**Created At:** 9/13/2017 7:57:14 PM  
**Updated At:** 9/13/2017 7:57:39 PM  


## Interface JCursor

- <dl><dt>All Superinterfaces:</dt><dd><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true" title="class or interface in java.lang">Iterable</a>&lt;<a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true" title="class or interface in java.lang">String</a>&gt;, <a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JSelectList.html" title="interface in com.jbase.jremote">JSelectList</a></dd></dl><dl><dt>All Known Implementing Classes:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/io/JCursorImpl.html" title="class in com.jbase.jremote.io">JCursorImpl</a></dd></dl>
```
public interface JCursor
extends JSelectList
```

A cursor to a jBASE file. This object represents a list of jBASE file records.
- - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
<caption>All Methods <a href="javascript%3Ashow(2);">Instance Methods</a> <a href="javascript%3Ashow(4);">Abstract Methods</a>&nbsp;</caption>| `JDynArray` | `getRecord()` Returns the current record.<br> |
| `void` | `setRecord(JDynArray record)` Modifies the current record.<br> |
| `void` | `update()` Update changes.<br> |


        - ### Methods inherited from interface com.jbase.jremote.[JSelectList](file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JSelectList.html "interface in com.jbase.jremote")
`close, getFetchSize, getKey, getPosition, goToPosition, hasNext, hasPrevious, iterator, next, previous, setFetchSize`
        - ### Methods inherited from interface java.lang.[Iterable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true "class or interface in java.lang")
`forEach, spliterator`
- - ### Method Detail
 
        - #### getRecord

```
JDynArray getRecord()
```

Returns the current record.<dl><dt>Returns:</dt><dd>record value</dd></dl>
    - - #### setRecord

```
void setRecord(JDynArray record)
```

Modifies the current record. Changes are not applied until methods update() or close() are called.<dl><dt>Parameters:</dt><dd><code>record</code> -&nbsp;</dd></dl>
    - - #### update

```
void update()      throws JRemoteException
```

Update changes. This method will apply all pending changes to the cursor.<dl><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>

