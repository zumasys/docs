# JFile (jremote API)

**Created At:** 9/25/2017 12:09:32 PM  
**Updated At:** 12/24/2018 3:58:14 PM  

<noscript>&amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Interface JFile

<dl><dt>All Known Implementing Classes:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jfileimpl" title="class in com.jbase.jremote.io">JFileImpl</a>, <a href="com_jbase_jremote_jca_wrappedjfile" title="class in com.jbase.jremote.jca">WrappedJFile</a></dd></dl>
* * *


```
public interface JFile
```

The JFile object is used to query, read, and write to jBASE files.
<dl><dt><br></dt></dl>

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

<!--   -->

### Method Detail
<!--   -->


#### exists

```
boolean exists(String recordKey)
        throws JRemoteException
```

This method returns true if the supplied record id exists.
<dl><dt><span class="paramLabel">Parameters:</span></dt><dd><code>recordKey</code> -</dd><dt><span class="returnLabel">Returns:</span></dt><dd>record exists</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
#### read

```
JDynArray read(String recordKey)
        throws JRecordNotFoundException,
               JRemoteException
```

Read a record where the supplied recordKey is the key to the record.
<dl><dt><span class="paramLabel">Parameters:</span></dt><dd><code>recordKey</code> -</dd><dt><span class="returnLabel">Returns:</span></dt><dd>the record that was read</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jrecordnotfoundexception" title="class in com.jbase.jremote">JRecordNotFoundException</a></code></dd><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>

#### readU

```
JDynArray readU(String recordKey,
                boolean blockedRead)
         throws JRecordNotFoundException,
                JRecordLockedException,
                JRemoteException
```

Read a record where the supplied recordKey is the key to the record and locks it for update.
<dl><dt><span class="paramLabel">Parameters:</span></dt><dd><code>recordKey</code> - The record key</dd><dd><code>blockedRead</code> - Specifies whether this method call should block if the record is locked</dd><dt><span class="returnLabel">Returns:</span></dt><dd>the record that was read and locked</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jrecordnotfoundexception" title="class in com.jbase.jremote">JRecordNotFoundException</a></code></dd><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dd><code><a href="/39248-jremote/com_jbase_jremote_jrecordlockedexception" title="class in com.jbase.jremote">JRecordLockedException</a></code></dd></dl>
#### write

```
boolean write(String recordKey,
              JDynArray record)
       throws JRemoteException
```

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will be released after the record has been written.
<dl><dt><span class="paramLabel">Parameters:</span></dt><dd><code>recordKey</code> -</dd><dd><code>record</code> -</dd><dt><span class="returnLabel">Returns:</span></dt><dd>Returns true if the record did not exist prior to this write or false if the record was updated.</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### writeU

```
boolean writeU(String recordKey,
               JDynArray record,
               boolean blockedWrite)
        throws JRecordLockedException,
               JRemoteException
```

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will *NOT* be released.
<dl><dt><span class="paramLabel">Parameters:</span></dt><dd><code>recordKey</code> -</dd><dd><code>record</code> -</dd><dd><code>blockedWrite</code> - Specifies whether this method call should block if the record is already locked</dd><dt><span class="returnLabel">Returns:</span></dt><dd>Returns true if the record did not exist prior to this write or false if the record was updated.</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dd><code><a href="/39248-jremote/com_jbase_jremote_jrecordlockedexception" title="class in com.jbase.jremote">JRecordLockedException</a></code></dd></dl>

#### releaseLock

```
boolean releaseLock(String recordKey)
             throws JRemoteException
```

Release the update lock (if held) on the specified key.
<dl><dt><span class="paramLabel">Parameters:</span></dt><dd><code>recordKey</code> -</dd><dt><span class="returnLabel">Returns:</span></dt><dd>Returns true if lock has been released successfully</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
#### releaseLocks

```
boolean releaseLocks()
              throws JRemoteException
```

Releases all locks held by this file.
<dl><dt><span class="returnLabel">Returns:</span></dt><dd>Returns true if locks have been released successfully</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
#### hasLock

```
boolean hasLock(String recordKey)
         throws JRemoteException
```

Check if the specified key holds a lock.
<dl><dt><span class="paramLabel">Parameters:</span></dt><dd><code>recordKey</code> -</dd><dt><span class="returnLabel">Returns:</span></dt><dd>Returns true if the record is locked</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>

#### delete

```
boolean delete(String recordKey)
        throws JRemoteException
```

Delete a record where the supplied recordKey is the key to the record.

Returns true if the delete was successful or false if the record was not found.
An exception will be thrown if an error occurs whilst deleting the record.
<dl><dt><span class="paramLabel">Parameters:</span></dt><dd><code>recordKey</code> -</dd><dt><span class="returnLabel">Returns:</span></dt><dd>delete successful</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
#### close

```
boolean close()
       throws JRemoteException
```

Closes this jBASE file.

Closing a JFile frees the associate remote system resources. Subsequent actions on this JFile object will reopen the file.
<dl><dt><span class="returnLabel">Returns:</span></dt><dd>close successful</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>

#### select

```
JSelectList select()
            throws JRemoteException
```

Returns a select list containing the record keys in this jBASE file.
<dl><dt><span class="returnLabel">Returns:</span></dt><dd>JSelectList all record keys</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>

#### getCursor

```
JCursor getCursor()
           throws JRemoteException
```

Returns a cursor to this jBASE file.
<dl><dt><span class="returnLabel">Returns:</span></dt><dd>JCursor cursor</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
#### clear

```
boolean clear()
       throws JRemoteException
```

Delete all records from the file.

Returns true if the operation was successful or false if the records could not be deleted.
<dl><dt><span class="returnLabel">Returns:</span></dt><dd>clear successful</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)
