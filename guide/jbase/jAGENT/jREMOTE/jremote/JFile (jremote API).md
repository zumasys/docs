# JFile (jremote API)

**Created At:** 9/25/2017 12:09:32 PM  
**Updated At:** 12/24/2018 3:58:14 PM  

&amp;amp;amp;amp;lt;div&amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;gt;


## Interface JFile

All Known Implementing Classes:[JFileImpl](/39250-io/com_jbase_jremote_io_jfileimpl "class in com.jbase.jremote.io"), [WrappedJFile](com_jbase_jremote_jca_wrappedjfile "class in com.jbase.jremote.jca")
* * *


```
public interface JFile
```

The JFile object is used to query, read, and write to jBASE files.

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

### Method Detail



#### exists

```
boolean exists(String recordKey)
        throws JRemoteException
```

This method returns true if the supplied record id exists.
Parameters:`recordKey` -Returns:record existsThrows:`JRemoteException`
#### read

```
JDynArray read(String recordKey)
        throws JRecordNotFoundException,
               JRemoteException
```

Read a record where the supplied recordKey is the key to the record.
Parameters:`recordKey` -Returns:the record that was readThrows:`JRecordNotFoundException``JRemoteException`

#### readU

```
JDynArray readU(String recordKey,
                boolean blockedRead)
         throws JRecordNotFoundException,
                JRecordLockedException,
                JRemoteException
```

Read a record where the supplied recordKey is the key to the record and locks it for update.
Parameters:`recordKey` - The record key`blockedRead` - Specifies whether this method call should block if the record is lockedReturns:the record that was read and lockedThrows:`JRecordNotFoundException``JRemoteException``JRecordLockedException`
#### write

```
boolean write(String recordKey,
              JDynArray record)
       throws JRemoteException
```

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will be released after the record has been written.
Parameters:`recordKey` -`record` -Returns:Returns true if the record did not exist prior to this write or false if the record was updated.Throws:`JRemoteException`


#### writeU

```
boolean writeU(String recordKey,
               JDynArray record,
               boolean blockedWrite)
        throws JRecordLockedException,
               JRemoteException
```

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will *NOT* be released.
Parameters:`recordKey` -`record` -`blockedWrite` - Specifies whether this method call should block if the record is already lockedReturns:Returns true if the record did not exist prior to this write or false if the record was updated.Throws:`JRemoteException``JRecordLockedException`

#### releaseLock

```
boolean releaseLock(String recordKey)
             throws JRemoteException
```

Release the update lock (if held) on the specified key.
Parameters:`recordKey` -Returns:Returns true if lock has been released successfullyThrows:`JRemoteException`
#### releaseLocks

```
boolean releaseLocks()
              throws JRemoteException
```

Releases all locks held by this file.
Returns:Returns true if locks have been released successfullyThrows:`JRemoteException`
#### hasLock

```
boolean hasLock(String recordKey)
         throws JRemoteException
```

Check if the specified key holds a lock.
Parameters:`recordKey` -Returns:Returns true if the record is lockedThrows:`JRemoteException`

#### delete

```
boolean delete(String recordKey)
        throws JRemoteException
```

Delete a record where the supplied recordKey is the key to the record.

Returns true if the delete was successful or false if the record was not found.
An exception will be thrown if an error occurs whilst deleting the record.
Parameters:`recordKey` -Returns:delete successfulThrows:`JRemoteException`
#### close

```
boolean close()
       throws JRemoteException
```

Closes this jBASE file.

Closing a JFile frees the associate remote system resources. Subsequent actions on this JFile object will reopen the file.
Returns:close successfulThrows:`JRemoteException`

#### select

```
JSelectList select()
            throws JRemoteException
```

Returns a select list containing the record keys in this jBASE file.
Returns:JSelectList all record keysThrows:`JRemoteException`

#### getCursor

```
JCursor getCursor()
           throws JRemoteException
```

Returns a cursor to this jBASE file.
Returns:JCursor cursorThrows:`JRemoteException`
#### clear

```
boolean clear()
       throws JRemoteException
```

Delete all records from the file.

Returns true if the operation was successful or false if the records could not be deleted.
Returns:clear successfulThrows:`JRemoteException`

Back to [jREMOTE API](com_jbase_jremote_package-summary)
