# JStatement

**Created At:** 9/13/2017 8:00:01 PM  
**Updated At:** 9/13/2017 8:00:26 PM  


## Interface JStatement

- <dl><dt>All Known Implementing Classes:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/io/JStatementImpl.html" title="class in com.jbase.jremote.io">JStatementImpl</a></dd></dl>
```
public interface JStatement
```

A jBASE statement object for executing queries.<dl><dt>Author:</dt><dd>aphethean</dd></dl>
- - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
<caption>All Methods <a href="javascript%3Ashow(2);">Instance Methods</a> <a href="javascript%3Ashow(4);">Abstract Methods</a>&nbsp;</caption>| `JResultSet` | `execute(JDynArray queries)` Execute query.<br> |
| `JResultSet` | `execute(JDynArray queries,        JSelectList selectList)` Execute query using an existing select list as a filter.<br> |
| `JResultSet` | `execute(String query)` Execute query.<br> |
| `JResultSet` | `execute(String query,        JSelectList selectList)` Execute query using an existing select list as a filter.<br> |
| `void` | `setFetchSize(int rows)` Sets the fetch size.<br> |
- - ### Method Detail
 
        - #### execute

```
JResultSet execute(String query)             throws JRemoteException
```

Execute query.<dl><dt>Parameters:</dt><dd><code>query</code> - as a string</dd><dt>Returns:</dt><dd>result set</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### execute

```
JResultSet execute(String query,                    JSelectList selectList)             throws JRemoteException
```

Execute query using an existing select list as a filter.<dl><dt>Parameters:</dt><dd><code>query</code> - as a string</dd><dd><code>selectList</code> -&nbsp;</dd><dt>Returns:</dt><dd>result set</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### execute

```
JResultSet execute(JDynArray queries)             throws JRemoteException
```

Execute query.<dl><dt>Parameters:</dt><dd><code>queries</code> - query as a dynamic array</dd><dt>Returns:</dt><dd>result set</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### execute

```
JResultSet execute(JDynArray queries,                    JSelectList selectList)             throws JRemoteException
```

Execute query using an existing select list as a filter.<dl><dt>Parameters:</dt><dd><code>queries</code> - query as a dynamic array</dd><dd><code>selectList</code> -&nbsp;</dd><dt>Returns:</dt><dd>result set</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### setFetchSize

```
void setFetchSize(int rows)
```

Sets the fetch size.<dl><dt>Parameters:</dt><dd><code>rows</code> -&nbsp;</dd></dl>

