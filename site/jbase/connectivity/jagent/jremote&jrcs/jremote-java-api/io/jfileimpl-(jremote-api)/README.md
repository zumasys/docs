# JFileImpl (jremote API)

<PageHeader />

## Class JFileImpl

All Implemented Interfaces:[JFile](./../../jfile-(jremote-api) "interface in com.jbase.jremote")
* * *

```java
public class JFileImpl
extends Object
implements JFile
```

The JFile object is used to query, read, and write to jBASE files.

See Also:[`open(String fileName)`](./../jconnectionimpl-(jremote-api) "class in com.jbase.jremote.io")

### Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| `protected` | `JFileImpl()`<br>This constructor can be used by ObjectReader to create a new object to be populated with deserialized data. |
| `protected` | `JFileImpl(AbstractJRemoteConnection connection, String fileName)`  |
| `protected` | `JFileImpl(String fileName)`  |

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

#### JFileImpl

```java
protected JFileImpl(AbstractJRemoteConnection connection,
                    String fileName)
```

#### JFileImpl

```java
protected JFileImpl(String fileName)
```

#### JFileImpl

```java
protected JFileImpl()
```

This constructor can be used by ObjectReader to create a new object to be populated with deserialized data.

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
See Also:[`JFile.exists(java.lang.String)`](./../../jfile-(jremote-api)#exists-java.lang)

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
Throws:`JRecordNotFoundException``JRemoteException`  
See Also:[`JFile.read(java.lang.String)`](./../../jfile-(jremote-api)#read-java.lang)

#### readU

```java
public JDynArray readU(String recordKey,
                       boolean blockedRead)
                throws JRecordNotFoundException,
                       JRecordLockedException,
                       JRemoteException
```

Description copied from interface: `JFile`

Read a record where the supplied recordKey is the key to the record and locks it for update.  
Specified by:`readU` in interface `JFile`  
Parameters:`recordKey` - The record key`blockedRead` - Specifies whether this method call should block if the record is locked  
Returns:the record that was read and locked  
Throws:`JRecordNotFoundException``JRemoteException``JRecordLockedException`  
See Also:[`JFile.readU(java.lang.String, boolean)`](./../../jfile-(jremote-api)#readU-java.lang)

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
See Also:[`JFile.write(java.lang.String, com.jbase.jremote.JDynArray)`](./../../jfile-(jremote-api)#write-java.lang.String-com.jbase.jremote)

#### writeU

```java
public boolean writeU(String recordKey,
                      JDynArray record,
                      boolean blockedWrite)
               throws JRecordLockedException,
                      JRemoteException
```

Description copied from interface: `JFile`

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will *NOT* be released.  
Specified by:`writeU` in interface `JFile``blockedWrite` - Specifies whether this method call should block if the record is already lockedReturns:  
Returns true if the record did not exist prior to this write or false if the record was updated.  
Throws:`JRemoteException`,`JRecordLockedException`  
See Also:[`JFile.writeU(java.lang.String, com.jbase.jremote.JDynArray, boolean)`](./../../jfile-(jremote-api)#writeU-java.lang.String-com.jbase.jremote)

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
See Also:[`JFile.releaseLock(java.lang.String)`](./../../jfile-(jremote-api)#releaseLock-java.lang)

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
See Also:[`JFile.releaseLocks()`](./../../jfile-(jremote-api)#releaseLocks--)

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
See Also:[`JFile.hasLock(java.lang.String)`](./../../jfile-(jremote-api)#hasLock-java.lang)

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
See Also:[`JFile.delete(java.lang.String)`](./../../jfile-(jremote-api)#delete-java.lang)

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
See Also:[`JFile.close()`](./../../jfile-(jremote-api)#close--)

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
See Also:[`JFile.select()`](./../../jfile-(jremote-api)#select--)

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
See Also:[`JFile.getCursor()`](./../../jfile-(jremote-api)#getCursor--)

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
See Also:[`JFile.clear()`](./../../jfile-(jremote-api)#clear--)

Back to [jRemote API](./../../README.md)
  
<PageFooter />
