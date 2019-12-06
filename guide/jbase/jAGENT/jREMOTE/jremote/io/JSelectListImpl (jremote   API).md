# JSelectListImpl (jremote   API)

**Created At:** 9/25/2017 11:52:53 AM  
**Updated At:** 12/24/2018 6:09:47 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JSelectListImpl (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JSelectListImpl

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a>, Iterable&lt;String&gt;</dd></dl><dl><dt>Direct Known Subclasses:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jcursorimpl" title="class in com.jbase.jremote.io">JCursorImpl</a></dd></dl>
* * *


```
public class JSelectListImpl
extends Object
implements JSelectList
```

A select list to a jBASE file.
This object represents a list of record keys to a jBASE file.

<!--   -->

### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `protected AbstractJRemoteConnection`<br> | `connection` <br> |
| `protected int`<br> | `cursorStartPos` <br> |
| `protected JSelectListProt`<br> | `data` <br> |
| `protected static int`<br> | `FETCH_BACKWARD` <br> |
| `protected static int`<br> | `FETCH_FORWARD` <br> |
| `protected int`<br> | `fetchSize` <br> |




<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JSelectListImpl(AbstractJRemoteConnection connection, JDynArray keys)`<br>Constructs a select list from specified dynamic array.<br> |
| `JSelectListImpl(AbstractJRemoteConnection connection, JSelectListProt data)`<br>Constructs a select list from a serializable select list.<br> |




<!--   -->

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


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- <!--   -->Methods inherited from interface java.lang.Iterable
    - `forEach, spliterator`

<!--   -->

### Field Detail
<!--   -->
#### connection

```
protected AbstractJRemoteConnection connection
```
<!--   -->
#### 


#### data

```
protected JSelectListProt data
```
<!--   -->
#### 


#### fetchSize

```
protected int fetchSize
```
<!--   -->
#### 


#### cursorStartPos

```
protected int cursorStartPos
```
<!--   -->
#### 


#### FETCH\_FORWARD

```
protected static final int FETCH_FORWARD
```
<dl><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="299736-constant-values" title="">Constant Field Values</a></dd></dl><!--   -->
#### 


#### FETCH\_BACKWARD

```
protected static final int FETCH_BACKWARD
```
<dl><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="299736-constant-values" title="">Constant Field Values</a></dd></dl><!-- ========= CONSTRUCTOR DETAIL ======== -->
<!--   -->

### 


### Constructor Detail
<!--   -->
#### JSelectListImpl

```
public JSelectListImpl(AbstractJRemoteConnection connection,
                       JDynArray keys)
```

Constructs a select list from specified dynamic array.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>connection</code> - Connection handle used to fetch items from server</dd><dd style="margin-left: 20px;"><code>keys</code> - Dynamic array containing keys separated by attribute markers.</dd></dl><!--   -->
#### 


#### JSelectListImpl

```
public JSelectListImpl(AbstractJRemoteConnection connection,
                       JSelectListProt data)
```

Constructs a select list from a serializable select list.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>connection</code> - Connection handle used to fetch items from server</dd><dd style="margin-left: 20px;"><code>data</code> - Serializable select list</dd></dl><!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### getKey

```
public String getKey()
```

Description copied from interface: `JSelectList`

Returns the current key
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#getKey--">getKey</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">key</dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jselectlist#getKey--"><code>JSelectList.getKey()</code></a></dd></dl><!--   -->
#### 


#### getFetchSize

```
public int getFetchSize()
```

Description copied from interface: `JSelectList`

Returns the fetch size. This value represents the number of items fetched simultaneously from the server.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#getFetchSize--">getFetchSize</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">fetch size</dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jselectlist#getFetchSize--"><code>JSelectList.getFetchSize()</code></a></dd></dl><!--   -->
#### 


#### setFetchSize

```
public void setFetchSize(int fetchSize)
```

Description copied from interface: `JSelectList`

Sets the fetch size.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#setFetchSize-int-">setFetchSize</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>fetchSize</code> - fetch size</dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jselectlist#setFetchSize-int-"><code>JSelectList.setFetchSize(int)</code></a></dd></dl><!--   -->
#### 


#### setConnection

```
public void setConnection(AbstractJRemoteConnection connection)
```

Attaches a connection handle to this select list. A connection is required to fetch items from the server.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>connection</code> - Connection handle</dd></dl><!--   -->
#### 


#### getData

```
public JSelectListProt getData()
```

Obtains a reference to the serializable part of the select list
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">serializable select list</dd></dl><!--   -->
#### 


#### next

```
public boolean next()
             throws JRemoteException
```

Description copied from interface: `JSelectList`

Move to next item
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#next--">next</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if OK, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jselectlist#next--"><code>JSelectList.next()</code></a></dd></dl><!--   -->
#### 


#### previous

```
public boolean previous()
                 throws JRemoteException
```

Description copied from interface: `JSelectList`

Move to previous item
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#previous--">previous</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if OK, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jselectlist#previous--"><code>JSelectList.previous()</code></a></dd></dl><!--   -->
#### 


#### hasNext

```
public boolean hasNext()
                throws JRemoteException
```

Description copied from interface: `JSelectList`

Returns whether it is possible to move forward.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#hasNext--">hasNext</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if YES, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jselectlist#hasNext--"><code>JSelectList.hasNext()</code></a></dd></dl><!--   -->
#### 


#### hasPrevious

```
public boolean hasPrevious()
                    throws JRemoteException
```

Description copied from interface: `JSelectList`

Returns whether it is possible to move backwards.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#hasPrevious--">hasPrevious</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if YES, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jselectlist#hasPrevious--"><code>JSelectList.hasPrevious()</code></a></dd></dl><!--   -->
#### 


#### next

```
protected boolean next(boolean fetchData)
                throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### previous

```
protected boolean previous(boolean fetchData)
                    throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### hasNext

```
protected boolean hasNext(boolean fetchData)
                   throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### hasPrevious

```
protected boolean hasPrevious(boolean fetchData)
                       throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### getPosition

```
public int getPosition()
```

Description copied from interface: `JSelectList`

Returns the current position. The first item in the list has position 1.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#getPosition--">getPosition</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">position</dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jselectlist#getPosition--"><code>JSelectList.getPosition()</code></a></dd></dl><!--   -->
#### 


#### goToPosition

```
public void goToPosition(int targetPos)
                  throws JRemoteException
```

Description copied from interface: `JSelectList`

Move to the specified position. The first item in the list has position 1.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#goToPosition-int-">goToPosition</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>com.jbase.jremote.JSelectList#goToPosition()</code></dd></dl><!--   -->
#### 


#### fetchNext

```
protected JSelectListProt fetchNext(boolean fetchData)
                             throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### fetchPrevious

```
protected JSelectListProt fetchPrevious(boolean fetchData)
                                 throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### 


#### close

```
public void close()
           throws JRemoteException
```

Description copied from interface: `JSelectList`

Close select list. Requests server to release all resources associated to this object.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#close--">close</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jselectlist#close--"><code>JSelectList.close()</code></a></dd></dl><!--   -->
#### 


#### iterator

```
public Iterator<String> iterator()
```

Description copied from interface: `JSelectList`

Returns an iterator to the select list
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jselectlist#iterator--">iterator</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jselectlist" title="interface in com.jbase.jremote">JSelectList</a></code></dd><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true#iterator--" title="class or interface in java.lang">iterator</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true" title="class or interface in java.lang">Iterable</a>&lt;<a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true" title="class or interface in java.lang">String</a>&gt;</code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">iterator</dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_jselectlist#iterator--"><code>JSelectList.iterator()</code></a></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)
