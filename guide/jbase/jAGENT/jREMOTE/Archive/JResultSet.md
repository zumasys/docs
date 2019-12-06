# JResultSet

**Created At:** 9/13/2017 7:58:39 PM  
**Updated At:** 9/13/2017 7:59:02 PM  


## Interface JResultSet

- <dl><dt>All Known Implementing Classes:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/io/JResultSetImpl.html" title="class in com.jbase.jremote.io">JResultSetImpl</a></dd></dl>
```
public interface JResultSet
```

Allows iteration of a result set fetched in blocks.<dl><dt>Author:</dt><dd>aphethean</dd></dl>
- - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
<caption>All Methods <a href="javascript%3Ashow(2);">Instance Methods</a> <a href="javascript%3Ashow(4);">Abstract Methods</a>&nbsp;</caption>| `JDynArray` | `getRow()`  |
| `boolean` | `next()`  |
- - ### Method Detail
 
        - #### next

```
boolean next()       throws JRemoteException
```
<dl><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### getRow

```
JDynArray getRow()
```

