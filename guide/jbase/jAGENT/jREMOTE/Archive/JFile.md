# JFile

**Created At:** 9/13/2017 7:57:57 PM  
**Updated At:** 9/13/2017 7:58:26 PM  


## Interface JFile

- <dl><dt>All Known Implementing Classes:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/io/JFileImpl.html" title="class in com.jbase.jremote.io">JFileImpl</a>, <a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/jca/WrappedJFile.html" title="class in com.jbase.jremote.jca">WrappedJFile</a></dd></dl>
```
public interface JFile
```

The JFile object is used to query, read, and write to jBASE files.<dl><dt>Author:</dt><dd>aphethean</dd></dl>
- - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
<caption>All Methods <a href="javascript%3Ashow(2);">Instance Methods</a> <a href="javascript%3Ashow(4);">Abstract Methods</a>&nbsp;</caption>| `boolean` | `clear()` Delete all records from the file.<br> |
| `boolean` | `close()` Closes this jBASE file.<br> |
| `boolean` | `delete(String recordKey)` Delete a record where the supplied recordKey is the key to  the record.<br> |
| `boolean` | `exists(String recordKey)` This method returns true if the supplied record id exists.<br> |
| `JCursor` | `getCursor()` Returns a cursor to this jBASE file.<br> |
| `boolean` | `hasLock(String recordKey)` Check if the specified key holds a lock.<br> |
| `JDynArray` | `read(String recordKey)` Read a record where the supplied recordKey is the key  to the record.<br> |
| `JDynArray` | `readU(String recordKey,     boolean blockedRead)` Read a record where the supplied recordKey is the key  to the record and locks it for update.<br> |
| `boolean` | `releaseLock(String recordKey)` Release the update lock (if held) on the specified key.<br> |
| `boolean` | `releaseLocks()` Releases all locks held by this file.<br> |
| `JSelectList` | `select()` Returns a select list containing the record keys in this jBASE file.<br> |
| `boolean` | `write(String recordKey,      JDynArray record)`  Write the supplied record to the jBASE file.<br> |
| `boolean` | `writeU(String recordKey,       JDynArray record,      boolean blockedWrite)`  Write the supplied record to the jBASE file.<br> |
- - ### Method Detail
 
        - #### exists

```
boolean exists(String recordKey)         throws JRemoteException
```

This method returns true if the supplied record id exists.<dl><dt>Parameters:</dt><dd><code>recordKey</code> -&nbsp;</dd><dt>Returns:</dt><dd>record exists</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### read

```
JDynArray read(String recordKey)         throws JRecordNotFoundException,                JRemoteException
```

Read a record where the supplied recordKey is the key  to the record.<dl><dt>Parameters:</dt><dd><code>recordKey</code> -&nbsp;</dd><dt>Returns:</dt><dd>the record that was read</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRecordNotFoundException.html" title="class in com.jbase.jremote">JRecordNotFoundException</a></code></dd><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### readU

```
JDynArray readU(String recordKey,                 boolean blockedRead)          throws JRecordNotFoundException,                 JRecordLockedException,                 JRemoteException
```

Read a record where the supplied recordKey is the key  to the record and locks it for update.<dl><dt>Parameters:</dt><dd><code>recordKey</code> - The record key</dd><dd><code>blockedRead</code> - Specifies whether this method call should block if the record is locked</dd><dt>Returns:</dt><dd>the record that was read and locked</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRecordNotFoundException.html" title="class in com.jbase.jremote">JRecordNotFoundException</a></code></dd><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRecordLockedException.html" title="class in com.jbase.jremote">JRecordLockedException</a></code></dd></dl>
    - - #### write

```
boolean write(String recordKey,               JDynArray record)        throws JRemoteException
```

 Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will be released after the record has been written.  <dl><dt>Parameters:</dt><dd><code>recordKey</code> -&nbsp;</dd><dd><code>record</code> -&nbsp;</dd><dt>Returns:</dt><dd>Returns true if the record did not exist prior to this write or &nbsp;false if the record was updated.</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### writeU

```
boolean writeU(String recordKey,                JDynArray record,                boolean blockedWrite)         throws JRecordLockedException,                JRemoteException
```

 Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will *NOT* be released.  <dl><dt>Parameters:</dt><dd><code>recordKey</code> -&nbsp;</dd><dd><code>record</code> -&nbsp;</dd><dd><code>blockedWrite</code> - Specifies whether this method call should block if the record is already locked</dd><dt>Returns:</dt><dd>Returns true if the record did not exist prior to this write or &nbsp;false if the record was updated.</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRecordLockedException.html" title="class in com.jbase.jremote">JRecordLockedException</a></code></dd></dl>
    - - #### releaseLock

```
boolean releaseLock(String recordKey)              throws JRemoteException
```

Release the update lock (if held) on the specified key.<dl><dt>Parameters:</dt><dd><code>recordKey</code> -&nbsp;</dd><dt>Returns:</dt><dd>Returns true if lock has been released successfully</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### releaseLocks

```
boolean releaseLocks()               throws JRemoteException
```

Releases all locks held by this file.<dl><dt>Returns:</dt><dd>Returns true if locks have been released successfully</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### hasLock

```
boolean hasLock(String recordKey)          throws JRemoteException
```

Check if the specified key holds a lock.<dl><dt>Parameters:</dt><dd><code>recordKey</code> -&nbsp;</dd><dt>Returns:</dt><dd>Returns true if the record is locked</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### delete

```
boolean delete(String recordKey)         throws JRemoteException
```

Delete a record where the supplied recordKey is the key to  the record.  

 Returns true if the delete was successful or false if the record  was not found.    
 An exception will be thrown if an error occurs whilst deleting  the record.  <dl><dt>Parameters:</dt><dd><code>recordKey</code> -&nbsp;</dd><dt>Returns:</dt><dd>delete successful</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### close

```
boolean close()        throws JRemoteException
```

Closes this jBASE file.
Closing a JFile frees the associate remote system resources.  Subsequent actions on this JFile object will reopen the file.<dl><dt>Returns:</dt><dd>close successful</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### select

```
JSelectList select()             throws JRemoteException
```

Returns a select list containing the record keys in this jBASE file.<dl><dt>Returns:</dt><dd>JSelectList all record keys</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### getCursor

```
JCursor getCursor()            throws JRemoteException
```

Returns a cursor to this jBASE file.<dl><dt>Returns:</dt><dd>JCursor cursor</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### clear

```
boolean clear()        throws JRemoteException
```

Delete all records from the file.
Returns true if the operation was successful or false if the records  could not be deleted.<dl><dt>Returns:</dt><dd>clear successful</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>

