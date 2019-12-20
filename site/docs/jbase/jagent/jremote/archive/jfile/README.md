# JFile

**Created At:** 9/13/2017 7:57:57 PM  
**Updated At:** 9/13/2017 7:58:26 PM  


## Interface JFile

- All Known Implementing Classes:[JFileImpl](file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/io/JFileImpl.html "class in com.jbase.jremote.io"), [WrappedJFile](file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/jca/WrappedJFile.html "class in com.jbase.jremote.jca")
```
public interface JFile
```

The JFile object is used to query, read, and write to jBASE files.Author:aphethean
- - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
All Methods [Instance Methods](javascript%3Ashow%282%29;) [Abstract Methods](javascript%3Ashow%284%29;) | `boolean` | `clear()` Delete all records from the file.<br> |
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

This method returns true if the supplied record id exists.Parameters:`recordKey` - Returns:record existsThrows:`JRemoteException`
    - - #### read

```
JDynArray read(String recordKey)         throws JRecordNotFoundException,                JRemoteException
```

Read a record where the supplied recordKey is the key  to the record.Parameters:`recordKey` - Returns:the record that was readThrows:`JRecordNotFoundException``JRemoteException`
    - - #### readU

```
JDynArray readU(String recordKey,                 boolean blockedRead)          throws JRecordNotFoundException,                 JRecordLockedException,                 JRemoteException
```

Read a record where the supplied recordKey is the key  to the record and locks it for update.Parameters:`recordKey` - The record key`blockedRead` - Specifies whether this method call should block if the record is lockedReturns:the record that was read and lockedThrows:`JRecordNotFoundException``JRemoteException``JRecordLockedException`
    - - #### write

```
boolean write(String recordKey,               JDynArray record)        throws JRemoteException
```

 Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will be released after the record has been written.  Parameters:`recordKey` - `record` - Returns:Returns true if the record did not exist prior to this write or  false if the record was updated.Throws:`JRemoteException`
    - - #### writeU

```
boolean writeU(String recordKey,                JDynArray record,                boolean blockedWrite)         throws JRecordLockedException,                JRemoteException
```

 Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will *NOT* be released.  Parameters:`recordKey` - `record` - `blockedWrite` - Specifies whether this method call should block if the record is already lockedReturns:Returns true if the record did not exist prior to this write or  false if the record was updated.Throws:`JRemoteException``JRecordLockedException`
    - - #### releaseLock

```
boolean releaseLock(String recordKey)              throws JRemoteException
```

Release the update lock (if held) on the specified key.Parameters:`recordKey` - Returns:Returns true if lock has been released successfullyThrows:`JRemoteException`
    - - #### releaseLocks

```
boolean releaseLocks()               throws JRemoteException
```

Releases all locks held by this file.Returns:Returns true if locks have been released successfullyThrows:`JRemoteException`
    - - #### hasLock

```
boolean hasLock(String recordKey)          throws JRemoteException
```

Check if the specified key holds a lock.Parameters:`recordKey` - Returns:Returns true if the record is lockedThrows:`JRemoteException`
    - - #### delete

```
boolean delete(String recordKey)         throws JRemoteException
```

Delete a record where the supplied recordKey is the key to  the record.  

 Returns true if the delete was successful or false if the record  was not found.    
 An exception will be thrown if an error occurs whilst deleting  the record.  Parameters:`recordKey` - Returns:delete successfulThrows:`JRemoteException`
    - - #### close

```
boolean close()        throws JRemoteException
```

Closes this jBASE file.
Closing a JFile frees the associate remote system resources.  Subsequent actions on this JFile object will reopen the file.Returns:close successfulThrows:`JRemoteException`
    - - #### select

```
JSelectList select()             throws JRemoteException
```

Returns a select list containing the record keys in this jBASE file.Returns:JSelectList all record keysThrows:`JRemoteException`
    - - #### getCursor

```
JCursor getCursor()            throws JRemoteException
```

Returns a cursor to this jBASE file.Returns:JCursor cursorThrows:`JRemoteException`
    - - #### clear

```
boolean clear()        throws JRemoteException
```

Delete all records from the file.
Returns true if the operation was successful or false if the records  could not be deleted.Returns:clear successfulThrows:`JRemoteException`

