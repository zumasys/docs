# JCursor

**Created At:** 9/13/2017 7:57:14 PM  
**Updated At:** 9/13/2017 7:57:39 PM  
**Original Doc:** [jcursor](https://docs.jbase.com/39719-archive/jcursor)  


## Interface JCursor

- All Superinterfaces:[Iterable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true "class or interface in java.lang")&lt;[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")&gt;, [JSelectList](file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JSelectList.html "interface in com.jbase.jremote")All Known Implementing Classes:[JCursorImpl](file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/io/JCursorImpl.html "class in com.jbase.jremote.io")
```
public interface JCursor
extends JSelectList
```

A cursor to a jBASE file. This object represents a list of jBASE file records.
- - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
All Methods [Instance Methods](javascript%3Ashow%282%29;) [Abstract Methods](javascript%3Ashow%284%29;) | `JDynArray` | `getRecord()` Returns the current record.<br> |
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

Returns the current record.Returns:record value
    - - #### setRecord

```
void setRecord(JDynArray record)
```

Modifies the current record. Changes are not applied until methods update() or close() are called.Parameters:`record` -
    - - #### update

```
void update()      throws JRemoteException
```

Update changes. This method will apply all pending changes to the cursor.Throws:`JRemoteException`

