# WrappedJFile (jremote API)

**Created At:** 9/25/2017 12:08:49 PM  
**Updated At:** 12/24/2018 7:40:46 PM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="WrappedJFile (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;


## Class WrappedJFile

All Implemented Interfaces:[JFile](/39248-jremote/com_jbase_jremote_jfile "interface in com.jbase.jremote")
* * *


```
public class WrappedJFile
extends Object
implements JFile
```

Provide an interface to remote jBASE files and ensures connection validity.

### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| `protected `<br> | `WrappedJFile(WrappedJConnection connection, JFile jfile)` <br> |






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


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### WrappedJFile

```
protected WrappedJFile(WrappedJConnection connection,
                       JFile jfile)
```







### Method Detail

#### exists

```
public boolean exists(String recordKey)
               throws JRemoteException
```

Description copied from interface: `JFile`

This method returns true if the supplied record id exists.
Specified by:`exists` in interface `JFile`Returns:record existsThrows:`JRemoteException`


#### read

```
public JDynArray read(String recordKey)
               throws JRecordNotFoundException,
                      JRemoteException
```

Description copied from interface: `JFile`

Read a record where the supplied recordKey is the key to the record.
Specified by:`read` in interface `JFile`Returns:the record that was readThrows:`JRecordNotFoundException``JRemoteException`
#### readU

```
public JDynArray readU(String recordKey,
                       boolean blockedRead)
                throws JRecordNotFoundException,
                       JRemoteException
```

Description copied from interface: `JFile`

Read a record where the supplied recordKey is the key to the record and locks it for update.
Specified by:`readU` in interface `JFile`Parameters:`recordKey` - The record key`blockedRead` - Specifies whether this method call should block if the record is lockedReturns:the record that was read and lockedThrows:`JRecordNotFoundException``JRemoteException`


#### write

```
public boolean write(String recordKey,
                     JDynArray record)
              throws JRemoteException
```

Description copied from interface: `JFile`

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will be released after the record has been written.
Specified by:`write` in interface `JFile`Returns:Returns true if the record did not exist prior to this write or false if the record was updated.Throws:`JRemoteException`


#### writeU

```
public boolean writeU(String recordKey,
                      JDynArray record,
                      boolean blockedWrite)
               throws JRemoteException
```

Description copied from interface: `JFile`

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will *NOT* be released.
Specified by:`writeU` in interface `JFile``blockedWrite` - Specifies whether this method call should block if the record is already lockedReturns:Returns true if the record did not exist prior to this write or false if the record was updated.Throws:`JRemoteException`


#### delete

```
public boolean delete(String recordKey)
               throws JRemoteException
```

Description copied from interface: `JFile`

Delete a record where the supplied recordKey is the key to the record.

Returns true if the delete was successful or false if the record was not found.
An exception will be thrown if an error occurs whilst deleting the record.
Specified by:`delete` in interface `JFile`Returns:delete successfulThrows:`JRemoteException`
#### releaseLock

```
public boolean releaseLock(String recordKey)
                    throws JRemoteException
```

Description copied from interface: `JFile`

Release the update lock (if held) on the specified key.
Specified by:`releaseLock` in interface `JFile`Returns:Returns true if lock has been released successfullyThrows:`JRemoteException`


#### releaseLocks

```
public boolean releaseLocks()
                     throws JRemoteException
```

Description copied from interface: `JFile`

Releases all locks held by this file.
Specified by:`releaseLocks` in interface `JFile`Returns:Returns true if locks have been released successfullyThrows:`JRemoteException`


#### hasLock

```
public boolean hasLock(String recordKey)
                throws JRemoteException
```

Description copied from interface: `JFile`

Check if the specified key holds a lock.
Specified by:`hasLock` in interface `JFile`Returns:Returns true if the record is lockedThrows:`JRemoteException`


#### close

```
public boolean close()
              throws JRemoteException
```

Description copied from interface: `JFile`

Closes this jBASE file.

Closing a JFile frees the associate remote system resources. Subsequent actions on this JFile object will reopen the file.
Specified by:`close` in interface `JFile`Returns:close successfulThrows:`JRemoteException`


#### select

```
public JSelectList select()
                   throws JRemoteException
```

Description copied from interface: `JFile`

Returns a select list containing the record keys in this jBASE file.
Specified by:`select` in interface `JFile`Returns:JSelectList all record keysThrows:`JRemoteException`


#### getCursor

```
public JCursor getCursor()
                  throws JRemoteException
```

Description copied from interface: `JFile`

Returns a cursor to this jBASE file.
Specified by:`getCursor` in interface `JFile`Returns:JCursor cursorThrows:`JRemoteException`


#### clear

```
public boolean clear()
              throws JRemoteException
```

Description copied from interface: `JFile`

Delete all records from the file.

Returns true if the operation was successful or false if the records could not be deleted.
Specified by:`clear` in interface `JFile`Returns:clear successfulThrows:`JRemoteException`


Back to [jREMOTE API](com_jbase_jremote_package-summary)


