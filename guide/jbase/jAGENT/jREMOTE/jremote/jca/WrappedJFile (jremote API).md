# WrappedJFile (jremote API)

**Created At:** 9/25/2017 12:08:49 PM  
**Updated At:** 12/24/2018 7:40:46 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="WrappedJFile (jremote   API)";
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
var activeTableTab = "activeTableTab";</script><noscript>&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class WrappedJFile

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></dd></dl>
* * *


```
public class WrappedJFile
extends Object
implements JFile
```

Provide an interface to remote jBASE files and ensures connection validity.
<dl><dt><br></dt></dl>

<!--   -->

### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| `protected `<br> | `WrappedJFile(WrappedJConnection connection, JFile jfile)` <br> |




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
#### WrappedJFile

```
protected WrappedJFile(WrappedJConnection connection,
                       JFile jfile)
```





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
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JFile#exists-java.lang.String-">exists</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">record exists</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### read

```
public JDynArray read(String recordKey)
               throws JRecordNotFoundException,
                      JRemoteException
```

Description copied from interface: `JFile`

Read a record where the supplied recordKey is the key to the record.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JFile#read-java.lang.String-">read</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">the record that was read</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jrecordnotfoundexception" title="class in com.jbase.jremote">JRecordNotFoundException</a></code></dd><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
#### readU

```
public JDynArray readU(String recordKey,
                       boolean blockedRead)
                throws JRecordNotFoundException,
                       JRemoteException
```

Description copied from interface: `JFile`

Read a record where the supplied recordKey is the key to the record and locks it for update.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JFile#readU-java.lang.String-boolean-">readU</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>recordKey</code> - The record key</dd><dd style="margin-left: 20px;"><code>blockedRead</code> - Specifies whether this method call should block if the record is locked</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">the record that was read and locked</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jrecordnotfoundexception" title="class in com.jbase.jremote">JRecordNotFoundException</a></code></dd><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### write

```
public boolean write(String recordKey,
                     JDynArray record)
              throws JRemoteException
```

Description copied from interface: `JFile`

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will be released after the record has been written.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JFile#write-java.lang.String-com.jbase.jremote.JDynArray-">write</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">Returns true if the record did not exist prior to this write or false if the record was updated.</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### writeU

```
public boolean writeU(String recordKey,
                      JDynArray record,
                      boolean blockedWrite)
               throws JRemoteException
```

Description copied from interface: `JFile`

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will *NOT* be released.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JFile#writeU-java.lang.String-com.jbase.jremote.JDynArray-boolean-">writeU</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dd style="margin-left: 20px;"><code>blockedWrite</code> - Specifies whether this method call should block if the record is already locked</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">Returns true if the record did not exist prior to this write or false if the record was updated.</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### delete

```
public boolean delete(String recordKey)
               throws JRemoteException
```

Description copied from interface: `JFile`

Delete a record where the supplied recordKey is the key to the record.

Returns true if the delete was successful or false if the record was not found.
An exception will be thrown if an error occurs whilst deleting the record.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JFile#delete-java.lang.String-">delete</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">delete successful</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
#### releaseLock

```
public boolean releaseLock(String recordKey)
                    throws JRemoteException
```

Description copied from interface: `JFile`

Release the update lock (if held) on the specified key.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JFile#releaseLock-java.lang.String-">releaseLock</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">Returns true if lock has been released successfully</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### releaseLocks

```
public boolean releaseLocks()
                     throws JRemoteException
```

Description copied from interface: `JFile`

Releases all locks held by this file.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JFile#releaseLocks--">releaseLocks</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">Returns true if locks have been released successfully</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### hasLock

```
public boolean hasLock(String recordKey)
                throws JRemoteException
```

Description copied from interface: `JFile`

Check if the specified key holds a lock.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JFile#hasLock-java.lang.String-">hasLock</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">Returns true if the record is locked</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### close

```
public boolean close()
              throws JRemoteException
```

Description copied from interface: `JFile`

Closes this jBASE file.

Closing a JFile frees the associate remote system resources. Subsequent actions on this JFile object will reopen the file.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JFile#close--">close</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">close successful</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### select

```
public JSelectList select()
                   throws JRemoteException
```

Description copied from interface: `JFile`

Returns a select list containing the record keys in this jBASE file.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JFile#select--">select</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JSelectList all record keys</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### getCursor

```
public JCursor getCursor()
                  throws JRemoteException
```

Description copied from interface: `JFile`

Returns a cursor to this jBASE file.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JFile#getCursor--">getCursor</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JCursor cursor</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### clear

```
public boolean clear()
              throws JRemoteException
```

Description copied from interface: `JFile`

Delete all records from the file.

Returns true if the operation was successful or false if the records could not be deleted.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JFile#clear--">clear</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jfile" title="interface in com.jbase.jremote">JFile</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">clear successful</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


Back to [jREMOTE API](com_jbase_jremote_package-summary)
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
