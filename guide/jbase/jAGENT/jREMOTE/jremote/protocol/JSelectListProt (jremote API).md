# JSelectListProt (jremote API)

**Created At:** 9/25/2017 12:19:50 PM  
**Updated At:** 4/4/2018 9:49:23 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JSelectListProt (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JSelectListProt

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></dd></dl>
* * *


```
public class JSelectListProt
extends Object
implements JBaseSerializable
```

A serializable list of jBASE file records.

<!--   -->

### Nested Class Summary

- <!--   -->Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`




<!--   -->

### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `protected CharsetDecoder`<br> | `_decoder` <br> |
| `protected CharsetEncoder`<br> | `_encoder` <br> |
| `protected boolean`<br> | `hasRecords` <br> |
| `protected int`<br> | `id` <br> |
| `protected List<String>`<br> | `keys` <br> |
| `protected int`<br> | `position` <br> |
| `protected List<JDynArray>`<br> | `records` <br> |
| `protected HashSet<Integer>`<br> | `updatedRecords` <br> |




<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JSelectListProt()`<br>Constructs an empty list<br> |
| `JSelectListProt(JDynArray keys)`<br>Constructs a select list from specified dynamic array.<br> |
| `JSelectListProt(JSelectListProt sl, boolean copyModifiedOnly)`<br>Copy constructor<br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getId()`<br>Returns the ID of this select list.<br> |
| `String`<br> | `getKey()`<br>Obtains the current key.<br> |
| `int`<br> | `getNumModified()`<br>Returns the number if modified records<br> |
| `int`<br> | `getPosition()`<br>Returns the current position.<br> |
| `JDynArray`<br> | `getRecord()`<br>Obtains the current record value.<br> |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `goToPosition(int position)`<br>Move to the specified position.<br> |
| `boolean`<br> | `hasNext()`<br>Returns whether it is possible to move forward.<br> |
| `boolean`<br> | `hasPrevious()`<br>Returns whether it is possible to move backwards.<br> |
| `boolean`<br> | `hasRecordData()`<br>Indicates whether this select list contains record data.<br> |
| `boolean`<br> | `next()`<br>Move to next item.<br> |
| `boolean`<br> | `previous()`<br>Move to previous item.<br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)`<br>Serialize object<br> |
| `void`<br> | `setCharsetDecoder(CharsetDecoder decoder)` <br> |
| `void`<br> | `setCharsetEncoder(CharsetEncoder encoder)` <br> |
| `void`<br> | `setHasRecordData(boolean hasRecords)`<br>Mark select list to contain record data.<br> |
| `void`<br> | `setRecord(JDynArray record)`<br>Modifies the value of the current record<br> |
| `int`<br> | `size()`<br>Returns the no.<br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)`<br>Serialize object<br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Field Detail
<!--   -->
#### id

```
protected int id
```
<!--   -->
#### position

```
protected int position
```
<!--   -->
#### hasRecords

```
protected boolean hasRecords
```
<!--   -->
#### keys

```
protected List<String> keys
```
<!--   -->
#### records

```
protected List<JDynArray> records
```
<!--   -->
#### updatedRecords

```
protected HashSet<Integer> updatedRecords
```
<!--   -->
#### \_encoder

```
protected CharsetEncoder _encoder
```
<!--   -->
#### \_decoder

```
protected CharsetDecoder _decoder
```
<!-- ========= CONSTRUCTOR DETAIL ======== -->
<!--   -->

### 


### Constructor Detail
<!--   -->
#### JSelectListProt

```
public JSelectListProt()
```

Constructs an empty list
<!--   -->
#### JSelectListProt

```
public JSelectListProt(JDynArray keys)
```

Constructs a select list from specified dynamic array.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>keys</code> - Dynamic array containing keys separated by attribute markers.</dd></dl><!--   -->
#### JSelectListProt

```
public JSelectListProt(JSelectListProt sl,
                       boolean copyModifiedOnly)
```

Copy constructor
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>sl</code> -</dd><dd style="margin-left: 20px;"><code>copyModifiedOnly</code> - if true, copies modified items only.</dd></dl><!-- ============ METHOD DETAIL ========== -->
<!--   -->

### Method Detail
<!--   -->
#### setCharsetEncoder

```
public void setCharsetEncoder(CharsetEncoder encoder)
```
<!--   -->
#### setCharsetDecoder

```
public void setCharsetDecoder(CharsetDecoder decoder)
```
<!--   -->
#### getId

```
public int getId()
```

Returns the ID of this select list.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt></dl><!--   -->
#### size

```
public int size()
```

Returns the no. of items inside this select list.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt></dl><!--   -->
#### hasRecordData

```
public boolean hasRecordData()
```

Indicates whether this select list contains record data.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt></dl><!--   -->
#### setHasRecordData

```
public void setHasRecordData(boolean hasRecords)
```

Mark select list to contain record data.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>hasRecords</code> -</dd></dl><!--   -->
#### getKey

```
public String getKey()
```

Obtains the current key.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">key</dd></dl><!--   -->
#### getRecord

```
public JDynArray getRecord()
```

Obtains the current record value.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">record value</dd></dl><!--   -->
#### setRecord

```
public void setRecord(JDynArray record)
```

Modifies the value of the current record
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>record</code> -</dd></dl><!--   -->
#### getNumModified

```
public int getNumModified()
```

Returns the number if modified records
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt></dl><!--   -->
#### next

```
public boolean next()
             throws JRemoteException
```

Move to next item.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if OK, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### previous

```
public boolean previous()
                 throws JRemoteException
```

Move to previous item.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if OK, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### hasNext

```
public boolean hasNext()
                throws JRemoteException
```

Returns whether it is possible to move forward.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if YES, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### hasPrevious

```
public boolean hasPrevious()
                    throws JRemoteException
```

Returns whether it is possible to move backwards.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">true if YES, false otherwise</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl><!--   -->
#### getPosition

```
public int getPosition()
```

Returns the current position. The first item in the list has position 1.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt></dl><!--   -->
#### goToPosition

```
public void goToPosition(int position)
```

Move to the specified position. The first item in the list has position 1.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>position</code> -</dd></dl><!--   -->
#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```

Serialize object
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#writeObject-com.jbase.jremote.io.JBaseObjectWriter-int-">writeObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```

Serialize object
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#readObject-com.jbase.jremote.io.JBaseObjectReader-int-">readObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl><!--   -->
#### getType

```
public int getType()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#getType--">getType</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">type id of the objects, used during the serialization</dd></dl><!--   -->
#### getVersion

```
public int getVersion()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#getVersion--">getVersion</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)
