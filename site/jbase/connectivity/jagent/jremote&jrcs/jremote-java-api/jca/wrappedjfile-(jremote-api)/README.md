# WrappedJFile (jremote API)

<PageHeader />

## Class WrappedJFile

All Implemented Interfaces:[JFile](./../../jfile-(jremote-api) "interface in com.jbase.jremote")

* * *

```java
public class WrappedJFile
extends Object
implements JFile
```

Provide an interface to remote jBASE files and ensures connection validity.

### Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| `protected` | `WrappedJFile(WrappedJConnection connection, JFile jfile)`  |

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

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### WrappedJFile

```java
protected WrappedJFile(WrappedJConnection connection,
                       JFile jfile)
```

### Method Detail

#### exists

```java
public boolean exists(String recordKey)
               throws JRemoteException
```

Description copied from interface: `JFile`

This method returns true if the supplied record id exists.
Specified by:`exists` in interface `JFile`  
Returns:record exists  
Throws:`JRemoteException`

#### read

```java
public JDynArray read(String recordKey)
               throws JRecordNotFoundException,
                      JRemoteException
```

Description copied from interface: `JFile`

Read a record where the supplied recordKey is the key to the record.
Specified by:`read` in interface `JFile`  
Returns:the record that was read  

#### readU

```java
public JDynArray readU(String recordKey,
                       boolean blockedRead)
                throws JRecordNotFoundException,
                       JRemoteException
```

Description copied from interface: `JFile`

Read a record where the supplied recordKey is the key to the record and locks it for update.
Specified by:`readU` in interface `JFile`  
Parameters:`recordKey` - The record key`blockedRead` - Specifies whether this method call should block if the record is locked  
Returns:the record that was read and locked  
Throws:`JRecordNotFoundException``JRemoteException`

#### write

```java
public boolean write(String recordKey,
                     JDynArray record)
              throws JRemoteException
```

Description copied from interface: `JFile`

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will be released after the record has been written.
Specified by:`write` in interface `JFile`  
Returns true if the record did not exist prior to this write or false if the record was updated.  
Throws:`JRemoteException`

#### writeU

```java
public boolean writeU(String recordKey,
                      JDynArray record,
                      boolean blockedWrite)
               throws JRemoteException
```

Description copied from interface: `JFile`

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will *NOT* be released.
Specified by:`writeU` in interface `JFile``blockedWrite` - Specifies whether this method call should block if the record is already locked  
Returns true if the record did not exist prior to this write or false if the record was updated.  
Throws:`JRemoteException`

#### delete

```java
public boolean delete(String recordKey)
               throws JRemoteException
```

Description copied from interface: `JFile`

Delete a record where the supplied recordKey is the key to the record.

Returns true if the delete was successful or false if the record was not found.
An exception will be thrown if an error occurs whilst deleting the record.
Specified by:`delete` in interface `JFile`  
Returns:delete successful  
Throws:`JRemoteException`

#### releaseLock

```java
public boolean releaseLock(String recordKey)
                    throws JRemoteException
```

Description copied from interface: `JFile`

Release the update lock (if held) on the specified key.
Specified by:`releaseLock` in interface `JFile`  
Returns true if lock has been released successfully  
Throws:`JRemoteException`

#### releaseLocks

```java
public boolean releaseLocks()
                     throws JRemoteException
```

Description copied from interface: `JFile`

Releases all locks held by this file.
Specified by:`releaseLocks` in interface `JFile`  
Returns true if locks have been released successfully  
Throws:`JRemoteException`

#### hasLock

```java
public boolean hasLock(String recordKey)
                throws JRemoteException
```

Description copied from interface: `JFile`

Check if the specified key holds a lock.
Specified by:`hasLock` in interface `JFile`  
Returns true if the record is locked  
Throws:`JRemoteException`

#### close

```java
public boolean close()
              throws JRemoteException
```

Description copied from interface: `JFile`

Closes this jBASE file.

Closing a JFile frees the associate remote system resources. Subsequent actions on this JFile object will reopen the file.
Specified by:`close` in interface `JFile`  
Returns:close successful  
Throws:`JRemoteException`

#### select

```java
public JSelectList select()
                   throws JRemoteException
```

Description copied from interface: `JFile`

Returns a select list containing the record keys in this jBASE file.
Specified by:`select` in interface `JFile`  
Returns:JSelectList all record keys  
Throws:`JRemoteException`

#### getCursor

```java
public JCursor getCursor()
                  throws JRemoteException
```

Description copied from interface: `JFile`

Returns a cursor to this jBASE file.
Specified by:`getCursor` in interface `JFile`  
Returns:JCursor cursor  
Throws:`JRemoteException`

#### clear

```java
public boolean clear()
              throws JRemoteException
```

Description copied from interface: `JFile`

Delete all records from the file.

Returns true if the operation was successful or false if the records could not be deleted.
Specified by:`clear` in interface `JFile`  
Returns:clear successful  
Throws:`JRemoteException`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
