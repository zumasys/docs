# JStatement (jremote API)

**Created At:** 9/25/2017 12:10:07 PM  
**Updated At:** 12/24/2018 7:55:16 PM  

<noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Interface JStatement

<dl><dt>All Known Implementing Classes:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jstatementimpl" title="class in com.jbase.jremote.io">JStatementImpl</a></dd></dl>
* * *


```
public interface JStatement
```

A jBASE statement object for executing queries.
<dl><dt><br></dt></dl>

<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JResultSet`<br> | `execute(JDynArray queries)`<br>Execute query.<br> |
| `JResultSet`<br> | `execute(JDynArray queries, JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
| `JResultSet`<br> | `execute(String query)`<br>Execute query.<br> |
| `JResultSet`<br> | `execute(String query, JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
| `void`<br> | `setFetchSize(int rows)`<br>Sets the fetch size.<br> |

<!--   -->

### Method Detail
<!--   -->
#### execute

```
JResultSet execute(String query)
            throws JRemoteException
```

Execute query.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>query</code> - as a string</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">result set</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### execute

```
JResultSet execute(String query,
                   JSelectList selectList)
            throws JRemoteException
```

Execute query using an existing select list as a filter.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>query</code> - as a string</dd><dd style="margin-left: 20px;"><code>selectList</code> -</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">result set</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### execute

```
JResultSet execute(JDynArray queries)
            throws JRemoteException
```

Execute query.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>queries</code> - query as a dynamic array</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">result set</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### execute

```
JResultSet execute(JDynArray queries,
                   JSelectList selectList)
            throws JRemoteException
```

Execute query using an existing select list as a filter.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>queries</code> - query as a dynamic array</dd><dd style="margin-left: 20px;"><code>selectList</code> -</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">result set</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### setFetchSize

```
void setFetchSize(int rows)
```

Sets the fetch size.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>rows</code> -</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->

Back to [jREMOTE API](com_jbase_jremote_package-summary)
