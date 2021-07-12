# JFile (jremote API)

<PageHeader />

## Interface JFile

All Known Implementing Classes:[JFileImpl](./../io/jfileimpl-(jremote-api) "class in com.jbase.jremote.io"), [WrappedJFile](./../jca/wrappedjfile-(jremote-api) "class in com.jbase.jremote.jca")

* * *

```java
public interface JFile
```

The JFile object is used to query, read, and write to jBASE files.

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | `clear()`<br>Delete all records from the file. |
| `boolean` | `close()`<br>Closes this jBASE file. |
| `boolean` | `delete(String recordKey)`<br>Delete a record where the supplied recordKey is the key to the record. |
| `boolean` | `exists(String recordKey)`<br>This method returns true if the supplied record id exists. |
| `JCursor` | `getCursor()`<br>Returns a cursor to this jBASE file. |
| `boolean` | `hasLock(String recordKey)`<br>Check if the specified key holds a lock. |
| `JDynArray` | `read(String recordKey)`<br>Read a record where the supplied recordKey is the key to the record. |
| `JDynArray` | `readU(String recordKey, boolean blockedRead)`<br>Read a record where the supplied recordKey is the key to the record and locks it for update. |
| `boolean` | `releaseLock(String recordKey)`<br>Release the update lock (if held) on the specified key. |
| `boolean` | `releaseLocks()`<br>Releases all locks held by this file. |
| `JSelectList` | `select()`<br>Returns a select list containing the record keys in this jBASE file. |
| `boolean` | `write(String recordKey, JDynArray record)`<br>Write the supplied record to the jBASE file. |
| `boolean` | `writeU(String recordKey, JDynArray record, boolean blockedWrite)`<br>Write the supplied record to the jBASE file. |

### Method Detail

#### exists

```java
boolean exists(String recordKey)
        throws JRemoteException
```

This method returns true if the supplied record id exists.  
Parameters:`recordKey`  
Returns:record exists  
Throws:`JRemoteException`

#### read

```java
JDynArray read(String recordKey)
        throws JRecordNotFoundException,
               JRemoteException
```

Read a record where the supplied recordKey is the key to the record.  
Parameters:`recordKey`  
Returns:the record that was read  
Throws:`JRecordNotFoundException`,`JRemoteException`

#### readU

```java
JDynArray readU(String recordKey,
                boolean blockedRead)
         throws JRecordNotFoundException,
                JRecordLockedException,
                JRemoteException
```

Read a record where the supplied recordKey is the key to the record and locks it for update.
Parameters:`recordKey` - The record key`blockedRead` - Specifies whether this method call should block if the record is locked  
Returns:the record that was read and locked  
Throws:`JRecordNotFoundException`,`JRemoteException`,`JRecordLockedException`

#### write

```java
boolean write(String recordKey,
              JDynArray record)
       throws JRemoteException
```

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will be released after the record has been written.  
Parameters:`recordKey` -`record`
Returns true if the record did not exist prior to this write or false if the record was updated.  
Throws:`JRemoteException`

#### writeU

```java
boolean writeU(String recordKey,
               JDynArray record,
               boolean blockedWrite)
        throws JRecordLockedException,
               JRemoteException
```

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will *NOT* be released.  
Parameters:`recordKey` -`record` -`blockedWrite` - Specifies whether this method call should block if the record is already locked  
Returns true if the record did not exist prior to this write or false if the record was updated.  
Throws:`JRemoteException``JRecordLockedException`

#### releaseLock

```java
boolean releaseLock(String recordKey)
             throws JRemoteException
```

Release the update lock (if held) on the specified key.  
Parameters:`recordKey`  
Returns true if lock has been released successfully  
Throws:`JRemoteException`

#### releaseLocks

```java
boolean releaseLocks()
              throws JRemoteException
```

Releases all locks held by this file.  
Returns true if locks have been released successfully  
Throws:`JRemoteException`

#### hasLock

```java
boolean hasLock(String recordKey)
         throws JRemoteException
```

Check if the specified key holds a lock.  
Parameters:`recordKey`  
Returns true if the record is locked  
Throws:`JRemoteException`

#### delete

```java
boolean delete(String recordKey)
        throws JRemoteException
```

Delete a record where the supplied recordKey is the key to the record.

Returns true if the delete was successful or false if the record was not found.
An exception will be thrown if an error occurs whilst deleting the record.  
Parameters:`recordKey`
Returns:delete successful  
Throws:`JRemoteException`

#### close

```java
boolean close()
       throws JRemoteException
```

Closes this jBASE file.

Closing a JFile frees the associate remote system resources. Subsequent actions on this JFile object will reopen the file.  
Returns:close successful  
Throws:`JRemoteException`

#### select

```java
JSelectList select()
            throws JRemoteException
```

Returns a select list containing the record keys in this jBASE file.  
Returns:JSelectList all record keys  
Throws:`JRemoteException`

#### getCursor

```java
JCursor getCursor()
           throws JRemoteException
```

Returns a cursor to this jBASE file.  
Returns:JCursor cursor  
Throws:`JRemoteException`

#### clear

```java
boolean clear()
       throws JRemoteException
```

Delete all records from the file.

Returns true if the operation was successful or false if the records could not be deleted.  
Returns:clear successful  
Throws:`JRemoteException`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
