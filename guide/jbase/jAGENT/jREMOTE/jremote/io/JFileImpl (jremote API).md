# JFileImpl (jremote API)

**Created At:** 9/25/2017 11:52:20 AM  
**Updated At:** 12/24/2018 8:52:05 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JFileImpl (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript>&amp;lt;div&amp;gt;JavaScript is disabled on your browser.&amp;lt;/div&amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JFileImpl

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></dd></dl>
* * *


```
public class JFileImpl
extends Object
implements JFile
```

The JFile object is used to query, read, and write to jBASE files.
<dl><dt><br></dt><dt><span class="seeLabel">See Also:</span></dt><dd><a href="/39250-io/com_jbase_jremote_io_jconnectionimpl" title="class in com.jbase.jremote.io"><code>open(String fileName)</code></a></dd></dl>

<!--   -->

### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| `protected `<br> | `JFileImpl()`<br>This constructor can be used by ObjectReader to create a new object to be populated with deserialized data.<br> |
| `protected `<br> | `JFileImpl(AbstractJRemoteConnection connection, String fileName)` <br> |
| `protected `<br> | `JFileImpl(String fileName)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `boolean`<br> | `clear()`<br>Delete all records from the file.<br> |
| `boolean`<br> | `close()`<br>Closes this jBASE file.<br> |
| `boolean`<br> | `delete(String recordKey)`<br>Delete a record where the supplied recordKey is the key to the record.<br> |
| `boolean`<br> | `exists(String recordKey)`<br>This method returns true if the supplied record id exists.<br> |
| `JCursor`<br> | `getCursor()`<br>Returns a cursor to this jBASE file.<br> |
| `boolean`<br> | `hasLock(String recordKey)`<br>Check if the specified key holds a lock.<br> |
| `JDynArray`<br> | `read(String recordKey)`<br>Read a record where the supplied recordKey is the key to the record.<br> |
| `JDynArray`<br> | `readU(String recordKey, boolean blockedRead)`<br>Read a record where the supplied recordKey is the key to the record and locks it for update.<br> |
| `boolean`<br> | `releaseLock(String recordKey)`<br>Release the update lock (if held) on the specified key.<br> |
| `boolean`<br> | `releaseLocks()`<br>Releases all locks held by this file.<br> |
| `JSelectList`<br> | `select()`<br>Returns a select list containing the record keys in this jBASE file.<br> |
| `boolean`<br> | `write(String recordKey, JDynArray record)`<br>Write the supplied record to the jBASE file.<br> |
| `boolean`<br> | `writeU(String recordKey, JDynArray record, boolean blockedWrite)`<br>Write the supplied record to the jBASE file.<br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->


#### JFileImpl

```
protected JFileImpl(AbstractJRemoteConnection connection,
                    String fileName)
```





#### JFileImpl

```
protected JFileImpl(String fileName)
```



#### JFileImpl

```
protected JFileImpl()
```

This constructor can be used by ObjectReader to create a new object to be populated with deserialized data.



<!--   -->

### Method Detail
<!--   -->


#### exists

```
public boolean exists(String recordKey)
               throws JRemoteException
```

Description copied from interface: `JFile`

This method returns true if the supplied record id exists.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jfile#exists-java.lang.String-">exists</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt><span class="returnLabel">Returns:</span></dt><dd>record exists</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt><span class="seeLabel">See Also:</span></dt><dd><a href="/39248-jremote/com_jbase_jremote_jfile#exists-java.lang.String-"><code>JFile.exists(java.lang.String)</code></a></dd></dl>




#### read

```
public JDynArray read(String recordKey)
               throws JRecordNotFoundException,
                      JRemoteException
```

Description copied from interface: `JFile`

Read a record where the supplied recordKey is the key to the record.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jfile#read-java.lang.String-">read</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt><span class="returnLabel">Returns:</span></dt><dd>the record that was read</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jrecordnotfoundexception" title="class in com.jbase.jremote">JRecordNotFoundException</a></code></dd><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt><span class="seeLabel">See Also:</span></dt><dd><a href="/39248-jremote/com_jbase_jremote_jfile#read-java.lang.String-"><code>JFile.read(java.lang.String)</code></a></dd></dl>


#### readU

```
public JDynArray readU(String recordKey,
                       boolean blockedRead)
                throws JRecordNotFoundException,
                       JRecordLockedException,
                       JRemoteException
```

Description copied from interface: `JFile`

Read a record where the supplied recordKey is the key to the record and locks it for update.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jfile#readU-java.lang.String-boolean-">readU</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt><span class="paramLabel">Parameters:</span></dt><dd><code>recordKey</code> - The record key</dd><dd><code>blockedRead</code> - Specifies whether this method call should block if the record is locked</dd><dt><span class="returnLabel">Returns:</span></dt><dd>the record that was read and locked</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jrecordnotfoundexception" title="class in com.jbase.jremote">JRecordNotFoundException</a></code></dd><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dd><code><a href="/39248-jremote/com_jbase_jremote_jrecordlockedexception" title="class in com.jbase.jremote">JRecordLockedException</a></code></dd><dt><span class="seeLabel">See Also:</span></dt><dd><a href="/39248-jremote/com_jbase_jremote_jfile#readU-java.lang.String-boolean-"><code>JFile.readU(java.lang.String, boolean)</code></a></dd></dl>


#### write

```
public boolean write(String recordKey,
                     JDynArray record)
              throws JRemoteException
```

Description copied from interface: `JFile`

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will be released after the record has been written.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jfile#write-java.lang.String-com.jbase.jremote.JDynArray-">write</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt><span class="returnLabel">Returns:</span></dt><dd>Returns true if the record did not exist prior to this write or false if the record was updated.</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt><span class="seeLabel">See Also:</span></dt><dd><a href="/39248-jremote/com_jbase_jremote_jfile#write-java.lang.String-com.jbase.jremote.JDynArray-"><code>JFile.write(java.lang.String, com.jbase.jremote.JDynArray)</code></a></dd></dl>


#### writeU

```
public boolean writeU(String recordKey,
                      JDynArray record,
                      boolean blockedWrite)
               throws JRecordLockedException,
                      JRemoteException
```

Description copied from interface: `JFile`

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will *NOT* be released.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jfile#writeU-java.lang.String-com.jbase.jremote.JDynArray-boolean-">writeU</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dd><code>blockedWrite</code> - Specifies whether this method call should block if the record is already locked</dd><dt><span class="returnLabel">Returns:</span></dt><dd>Returns true if the record did not exist prior to this write or false if the record was updated.</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dd><code><a href="/39248-jremote/com_jbase_jremote_jrecordlockedexception" title="class in com.jbase.jremote">JRecordLockedException</a></code></dd><dt><span class="seeLabel">See Also:</span></dt><dd><a href="/39248-jremote/com_jbase_jremote_jfile#writeU-java.lang.String-com.jbase.jremote.JDynArray-boolean-"><code>JFile.writeU(java.lang.String, com.jbase.jremote.JDynArray, boolean)</code></a></dd></dl>


#### releaseLock

```
public boolean releaseLock(String recordKey)
                    throws JRemoteException
```

Description copied from interface: `JFile`

Release the update lock (if held) on the specified key.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jfile#releaseLock-java.lang.String-">releaseLock</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt><span class="returnLabel">Returns:</span></dt><dd>Returns true if lock has been released successfully</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt><span class="seeLabel">See Also:</span></dt><dd><a href="/39248-jremote/com_jbase_jremote_jfile#releaseLock-java.lang.String-"><code>JFile.releaseLock(java.lang.String)</code></a></dd></dl>


#### releaseLocks

```
public boolean releaseLocks()
                     throws JRemoteException
```

Description copied from interface: `JFile`

Releases all locks held by this file.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jfile#releaseLocks--">releaseLocks</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt><span class="returnLabel">Returns:</span></dt><dd>Returns true if locks have been released successfully</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt><span class="seeLabel">See Also:</span></dt><dd><a href="/39248-jremote/com_jbase_jremote_jfile#releaseLocks--"><code>JFile.releaseLocks()</code></a></dd></dl>


#### hasLock

```
public boolean hasLock(String recordKey)
                throws JRemoteException
```

Description copied from interface: `JFile`

Check if the specified key holds a lock.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jfile#hasLock-java.lang.String-">hasLock</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt><span class="returnLabel">Returns:</span></dt><dd>Returns true if the record is locked</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt><span class="seeLabel">See Also:</span></dt><dd><a href="/39248-jremote/com_jbase_jremote_jfile#hasLock-java.lang.String-"><code>JFile.hasLock(java.lang.String)</code></a></dd></dl>


#### delete

```
public boolean delete(String recordKey)
               throws JRemoteException
```

Description copied from interface: `JFile`

Delete a record where the supplied recordKey is the key to the record.

Returns true if the delete was successful or false if the record was not found.
An exception will be thrown if an error occurs whilst deleting the record.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jfile#delete-java.lang.String-">delete</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt><span class="returnLabel">Returns:</span></dt><dd>delete successful</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt><span class="seeLabel">See Also:</span></dt><dd><a href="/39248-jremote/com_jbase_jremote_jfile#delete-java.lang.String-"><code>JFile.delete(java.lang.String)</code></a></dd></dl>


#### close

```
public boolean close()
              throws JRemoteException
```

Description copied from interface: `JFile`

Closes this jBASE file.

Closing a JFile frees the associate remote system resources. Subsequent actions on this JFile object will reopen the file.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jfile#close--">close</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt><span class="returnLabel">Returns:</span></dt><dd>close successful</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt><span class="seeLabel">See Also:</span></dt><dd><a href="/39248-jremote/com_jbase_jremote_jfile#close--"><code>JFile.close()</code></a></dd></dl>


#### select

```
public JSelectList select()
                   throws JRemoteException
```

Description copied from interface: `JFile`

Returns a select list containing the record keys in this jBASE file.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jfile#select--">select</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt><span class="returnLabel">Returns:</span></dt><dd>JSelectList all record keys</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt><span class="seeLabel">See Also:</span></dt><dd><a href="/39248-jremote/com_jbase_jremote_jfile#select--"><code>JFile.select()</code></a></dd></dl>


#### getCursor

```
public JCursor getCursor()
                  throws JRemoteException
```

Description copied from interface: `JFile`

Returns a cursor to this jBASE file.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jfile#getCursor--">getCursor</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt><span class="returnLabel">Returns:</span></dt><dd>JCursor cursor</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt><span class="seeLabel">See Also:</span></dt><dd><a href="/39248-jremote/com_jbase_jremote_jfile#getCursor--"><code>JFile.getCursor()</code></a></dd></dl>


#### clear

```
public boolean clear()
              throws JRemoteException
```

Description copied from interface: `JFile`

Delete all records from the file.

Returns true if the operation was successful or false if the records could not be deleted.
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jfile#clear--">clear</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt><span class="returnLabel">Returns:</span></dt><dd>clear successful</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt><span class="seeLabel">See Also:</span></dt><dd><a href="/39248-jremote/com_jbase_jremote_jfile#clear--"><code>JFile.clear()</code></a></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->

Back to [jREMOTE API](com_jbase_jremote_package-summary)


