# JCursor (jremote API)

**Created At:** 9/25/2017 12:09:14 PM  
**Updated At:** 12/24/2018 7:44:44 PM  

<noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Interface JCursor

<dl><dt>All Superinterfaces:</dt><dd>Iterable&lt;String&gt;, <a href="/39248-jremote/com_jbase_jremote_JSelectList" title="interface in com.jbase.jremote">JSelectList</a></dd></dl><dl><dt>All Known Implementing Classes:</dt><dd><a href="/39250-io/com_jbase_jremote_io_JCursorImpl" title="class in com.jbase.jremote.io">JCursorImpl</a></dd></dl>
* * *


```
public interface JCursor
extends JSelectList
```

A cursor to a jBASE file.
This object represents a list of jBASE file records.

<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JDynArray`<br> | `getRecord()`<br>Returns the current record.<br> |
| `void`<br> | `setRecord(JDynArray record)`<br>Modifies the current record.<br> |
| `void`<br> | `update()`<br>Update changes.<br> |


- <!--   -->Methods inherited from interface com.jbase.jremote.JSelectList
    - `close, getFetchSize, getKey, getPosition, goToPosition, hasNext, hasPrevious, iterator, next, previous, setFetchSize`
- <!--   -->Methods inherited from interface java.lang.Iterable
    - `forEach, spliterator`

<!--   -->

### Method Detail
<!--   -->


#### getRecord

```
JDynArray getRecord()
```

Returns the current record.
<dl><dt><span class="returnLabel">Returns:</span></dt><dd>record value</dd></dl>




#### setRecord

```
void setRecord(JDynArray record)
```

Modifies the current record. Changes are not applied until methods update() or close() are called.
<dl><dt><span class="paramLabel">Parameters:</span></dt><dd><code>record</code> -</dd></dl>


#### update

```
void update()
     throws JRemoteException
```

Update changes. This method will apply all pending changes to the cursor.
<dl><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->Back to [jREMOTE API](com_jbase_jremote_package-summary)


