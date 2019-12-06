# JCursorImpl (jremote API)

**Created At:** 9/25/2017 11:52:13 AM  
**Updated At:** 12/24/2018 8:50:47 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JCursorImpl (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript>&amp;amp;amp;amp;lt;div&amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JCursorImpl

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39248-jremote/com_jbase_jremote_jcursor" title="interface in com.jbase.jremote">JCursor</a>, <a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a>, Iterable&lt;String&gt;</dd></dl>
* * *


```
public class JCursorImpl
extends JSelectListImpl
implements JCursor
```

A cursor to a jBASE file.
This object represents a list of jBASE file records.

<!--   -->

### Field Summary

- <!--   -->Fields inherited from class com.jbase.jremote.io.JSelectListImpl
    - `connection, cursorStartPos, data, FETCH_BACKWARD, FETCH_FORWARD, fetchSize`




<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JCursorImpl(AbstractJRemoteConnection connection, JSelectListProt data)`<br>Constructs a cursor from a serializable select list.<br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `close()`<br>Close cursor.<br> |
| `JDynArray`<br> | `getRecord()`<br>Returns the current record.<br> |
| `boolean`<br> | `hasNext()`<br>Returns whether it is possible to move the cursor forwards.<br> |
| `boolean`<br> | `hasPrevious()`<br>Returns whether it is possible to move the cursor backwards.<br> |
| `boolean`<br> | `next()`<br>Move cursor to next item<br> |
| `boolean`<br> | `previous()`<br>Move cursor to previous item<br> |
| `void`<br> | `setRecord(JDynArray record)`<br>Modifies the current record.<br> |
| `void`<br> | `update()`<br>Update changes.<br> |


- <!--   -->Methods inherited from class com.jbase.jremote.io.JSelectListImpl
    - `fetchNext, fetchPrevious, getData, getFetchSize, getKey, getPosition, goToPosition, hasNext, hasPrevious, iterator, next, previous, setConnection, setFetchSize`
- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


- <!--   -->Methods inherited from interface com.jbase.jremote.JSelectList
    - `getFetchSize, getKey, getPosition, goToPosition, iterator, setFetchSize`
- <!--   -->Methods inherited from interface java.lang.Iterable
    - `forEach, spliterator`

<!--   -->

### Constructor Detail
<!--   -->


#### JCursorImpl

```
public JCursorImpl(AbstractJRemoteConnection connection,
                   JSelectListProt data)
```

Constructs a cursor from a serializable select list.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>connection</code> - Connection handle used to fetch records from the server</dd><dd style="margin-left: 20px;"><code>data</code> - Serializable select list</dd></dl>




<!--   -->

### Method Detail
<!--   -->


#### next

```
public boolean next()
             throws JRemoteException
```

Move cursor to next item
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#next--">next</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Overrides:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_JSelectListImpl#next--">next</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_jselectlistimpl" title="class in com.jbase.jremote.io">JSelectListImpl</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if OK, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jselectlist#next--"><code>JSelectList.next()</code></a></dd></dl>


#### previous

```
public boolean previous()
                 throws JRemoteException
```

Move cursor to previous item
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#previous--">previous</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Overrides:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_JSelectListImpl#previous--">previous</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_jselectlistimpl" title="class in com.jbase.jremote.io">JSelectListImpl</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if OK, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jselectlist#previous--"><code>JSelectList.previous()</code></a></dd></dl>


#### hasNext

```
public boolean hasNext()
                throws JRemoteException
```

Returns whether it is possible to move the cursor forwards.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#hasNext--">hasNext</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Overrides:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_JSelectListImpl#hasNext--">hasNext</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_jselectlistimpl" title="class in com.jbase.jremote.io">JSelectListImpl</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if YES, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jselectlist#hasNext--"><code>JSelectList.hasNext()</code></a></dd></dl>


#### hasPrevious

```
public boolean hasPrevious()
                    throws JRemoteException
```

Returns whether it is possible to move the cursor backwards.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#hasPrevious--">hasPrevious</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Overrides:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_JSelectListImpl#hasPrevious--">hasPrevious</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_jselectlistimpl" title="class in com.jbase.jremote.io">JSelectListImpl</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if YES, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jselectlist#hasPrevious--"><code>JSelectList.hasPrevious()</code></a></dd></dl>

#### close

```
public void close()
           throws JRemoteException
```

Close cursor. Applies all pending changes and request the server to release all resources associated to this cursor.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#close--">close</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Overrides:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_JSelectListImpl#close--">close</a></code> in class <code><a href="/39250-io/com_jbase_jremote_io_jselectlistimpl" title="class in com.jbase.jremote.io">JSelectListImpl</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jselectlist#close--"><code>JSelectList.close()</code></a></dd></dl>



#### getRecord

```
public JDynArray getRecord()
```

Description copied from interface: `JCursor`

Returns the current record.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jcursor#getRecord--">getRecord</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jcursor" title="interface in com.jbase.jremote">JCursor</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">record value</dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jcursor#getRecord--"><code>JCursor.getRecord()</code></a></dd></dl>


#### setRecord

```
public void setRecord(JDynArray record)
```

Description copied from interface: `JCursor`

Modifies the current record. Changes are not applied until methods update() or close() are called.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jcursor#setRecord-com.jbase.jremote.JDynArray-">setRecord</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jcursor" title="interface in com.jbase.jremote">JCursor</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jcursor#setRecord-com.jbase.jremote.JDynArray-"><code>JCursor.setRecord(com.jbase.jremote.JDynArray)</code></a></dd></dl>

#### update

```
public void update()
            throws JRemoteException
```

Description copied from interface: `JCursor`

Update changes. This method will apply all pending changes to the cursor.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jcursor#update--">update</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jcursor" title="interface in com.jbase.jremote">JCursor</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jcursor#update--"><code>JCursor.update()</code></a></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->

Back to [jREMOTE API](com_jbase_jremote_package-summary)
