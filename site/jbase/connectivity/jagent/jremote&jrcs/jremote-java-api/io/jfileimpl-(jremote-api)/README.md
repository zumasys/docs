# JFileImpl (jremote API)

<PageHeader />

## Class JFileImpl

All Implemented Interfaces:[JFile](./../../jfile-%28jremote-api%29 "interface in com.jbase.jremote")
* * *


```
public class JFileImpl
extends Object
implements JFile
```

The JFile object is used to query, read, and write to jBASE files.

See Also:[`open(String fileName)`](./../jconnectionimpl-%28jremote-api%29 "class in com.jbase.jremote.io")

### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| `protected `<br> | `JFileImpl()`<br>This constructor can be used by ObjectReader to create a new object to be populated with deserialized data.<br> |
| `protected `<br> | `JFileImpl(AbstractJRemoteConnection connection, String fileName)` <br> |
| `protected `<br> | `JFileImpl(String fileName)` <br> |






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





### Method Detail



#### exists

```
public boolean exists(String recordKey)
               throws JRemoteException
```

Description copied from interface: `JFile`

This method returns true if the supplied record id exists.
Specified by:`exists` in interface `JFile`Returns:record existsThrows:`JRemoteException`See Also:[`JFile.exists(java.lang.String)`](./../../jfile-%28jremote-api%29#exists-java.lang)




#### read

```
public JDynArray read(String recordKey)
               throws JRecordNotFoundException,
                      JRemoteException
```

Description copied from interface: `JFile`

Read a record where the supplied recordKey is the key to the record.
Specified by:`read` in interface `JFile`Returns:the record that was readThrows:`JRecordNotFoundException``JRemoteException`See Also:[`JFile.read(java.lang.String)`](./../../jfile-%28jremote-api%29#read-java.lang)


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
Specified by:`readU` in interface `JFile`Parameters:`recordKey` - The record key`blockedRead` - Specifies whether this method call should block if the record is lockedReturns:the record that was read and lockedThrows:`JRecordNotFoundException``JRemoteException``JRecordLockedException`See Also:[`JFile.readU(java.lang.String, boolean)`](./../../jfile-%28jremote-api%29#readU-java.lang)


#### write

```
public boolean write(String recordKey,
                     JDynArray record)
              throws JRemoteException
```

Description copied from interface: `JFile`

Write the supplied record to the jBASE file. If an update lock was held against the supplied key, it will be released after the record has been written.
Specified by:`write` in interface `JFile`Returns:Returns true if the record did not exist prior to this write or false if the record was updated.Throws:`JRemoteException`See Also:[`JFile.write(java.lang.String, com.jbase.jremote.JDynArray)`](./../../jfile-%28jremote-api%29#write-java.lang.String-com.jbase.jremote)


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
Specified by:`writeU` in interface `JFile``blockedWrite` - Specifies whether this method call should block if the record is already lockedReturns:Returns true if the record did not exist prior to this write or false if the record was updated.Throws:`JRemoteException``JRecordLockedException`See Also:[`JFile.writeU(java.lang.String, com.jbase.jremote.JDynArray, boolean)`](./../../jfile-%28jremote-api%29#writeU-java.lang.String-com.jbase.jremote)


#### releaseLock

```
public boolean releaseLock(String recordKey)
                    throws JRemoteException
```

Description copied from interface: `JFile`

Release the update lock (if held) on the specified key.
Specified by:`releaseLock` in interface `JFile`Returns:Returns true if lock has been released successfullyThrows:`JRemoteException`See Also:[`JFile.releaseLock(java.lang.String)`](./../../jfile-%28jremote-api%29#releaseLock-java.lang)


#### releaseLocks

```
public boolean releaseLocks()
                     throws JRemoteException
```

Description copied from interface: `JFile`

Releases all locks held by this file.
Specified by:`releaseLocks` in interface `JFile`Returns:Returns true if locks have been released successfullyThrows:`JRemoteException`See Also:[`JFile.releaseLocks()`](./../../jfile-%28jremote-api%29#releaseLocks--)


#### hasLock

```
public boolean hasLock(String recordKey)
                throws JRemoteException
```

Description copied from interface: `JFile`

Check if the specified key holds a lock.
Specified by:`hasLock` in interface `JFile`Returns:Returns true if the record is lockedThrows:`JRemoteException`See Also:[`JFile.hasLock(java.lang.String)`](./../../jfile-%28jremote-api%29#hasLock-java.lang)


#### delete

```
public boolean delete(String recordKey)
               throws JRemoteException
```

Description copied from interface: `JFile`

Delete a record where the supplied recordKey is the key to the record.

Returns true if the delete was successful or false if the record was not found.
An exception will be thrown if an error occurs whilst deleting the record.
Specified by:`delete` in interface `JFile`Returns:delete successfulThrows:`JRemoteException`See Also:[`JFile.delete(java.lang.String)`](./../../jfile-%28jremote-api%29#delete-java.lang)


#### close

```
public boolean close()
              throws JRemoteException
```

Description copied from interface: `JFile`

Closes this jBASE file.

Closing a JFile frees the associate remote system resources. Subsequent actions on this JFile object will reopen the file.
Specified by:`close` in interface `JFile`Returns:close successfulThrows:`JRemoteException`See Also:[`JFile.close()`](./../../jfile-%28jremote-api%29#close--)


#### select

```
public JSelectList select()
                   throws JRemoteException
```

Description copied from interface: `JFile`

Returns a select list containing the record keys in this jBASE file.
Specified by:`select` in interface `JFile`Returns:JSelectList all record keysThrows:`JRemoteException`See Also:[`JFile.select()`](./../../jfile-%28jremote-api%29#select--)


#### getCursor

```
public JCursor getCursor()
                  throws JRemoteException
```

Description copied from interface: `JFile`

Returns a cursor to this jBASE file.
Specified by:`getCursor` in interface `JFile`Returns:JCursor cursorThrows:`JRemoteException`See Also:[`JFile.getCursor()`](./../../jfile-%28jremote-api%29#getCursor--)


#### clear

```
public boolean clear()
              throws JRemoteException
```

Description copied from interface: `JFile`

Delete all records from the file.

Returns true if the operation was successful or false if the records could not be deleted.
Specified by:`clear` in interface `JFile`Returns:clear successfulThrows:`JRemoteException`See Also:[`JFile.clear()`](./../../jfile-%28jremote-api%29#clear--)



Back to [jREMOTE API](com_jbase_jremote_package-summary)



  
<PageFooter />
