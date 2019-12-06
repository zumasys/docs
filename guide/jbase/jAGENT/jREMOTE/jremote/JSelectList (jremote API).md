# JSelectList (jremote API)

**Created At:** 9/25/2017 12:10:01 PM  
**Updated At:** 12/24/2018 8:05:09 PM  

<noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Interface JSelectList

<dl><dt>All Superinterfaces:</dt><dd>Iterable&lt;String&gt;</dd></dl><dl><dt>All Known Subinterfaces:</dt><dd><a href="/39248-jremote/com_jbase_jremote_jcursor" title="interface in com.jbase.jremote">JCursor</a></dd></dl><dl><dt>All Known Implementing Classes:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jcursorimpl" title="class in com.jbase.jremote.io">JCursorImpl</a>, <a href="/39250-io/com_jbase_jremote_io_JSelectListImpl" title="class in com.jbase.jremote.io">JSelectListImpl</a></dd></dl>
* * *


```
public interface JSelectList
extends Iterable<String>
```

A select list to a jBASE file.
This object represents a list of record keys to a jBASE file.

<!--   -->

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


- <!--   -->Methods inherited from interface java.lang.Iterable
    - `forEach, spliterator`

<!--   -->

### Method Detail
<!--   -->


#### iterator

```
Iterator<String> iterator()
```

Returns an iterator to the select list
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>iterator</code> in interface <code>Iterable&lt;String&gt;</code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">iterator</dd></dl>




#### getKey

```
String getKey()
```

Returns the current key
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">key</dd></dl>


#### getFetchSize

```
int getFetchSize()
```

Returns the fetch size. This value represents the number of items fetched simultaneously from the server.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">fetch size</dd></dl>


#### setFetchSize

```
void setFetchSize(int fetchSize)
```

Sets the fetch size.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>fetchSize</code> - fetch size</dd></dl>


#### next

```
boolean next()
      throws JRemoteException
```

Move to next item
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if OK, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### previous

```
boolean previous()
          throws JRemoteException
```

Move to previous item
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if OK, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### hasNext

```
boolean hasNext()
         throws JRemoteException
```

Returns whether it is possible to move forward.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if YES, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### hasPrevious

```
boolean hasPrevious()
             throws JRemoteException
```

Returns whether it is possible to move backwards.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if YES, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### getPosition

```
int getPosition()
```

Returns the current position. The first item in the list has position 1.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">position</dd></dl>


#### goToPosition

```
void goToPosition(int targetPos)
           throws JRemoteException
```

Move to the specified position. The first item in the list has position 1.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>targetPos</code> -</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### close

```
void close()
    throws JRemoteException
```

Close select list. Requests server to release all resources associated to this object.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->

Back to [jREMOTE API](com_jbase_jremote_package-summary)
