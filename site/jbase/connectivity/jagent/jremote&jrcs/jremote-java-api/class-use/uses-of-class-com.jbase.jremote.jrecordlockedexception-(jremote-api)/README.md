# Uses of Class com.jbase.jremote.JRecordLockedException (jremote API)

<PageHeader />

## Uses of Class

com.jbase.jremote.JRecordLockedException

| Package |
| --- |
| Packages that use [JRecordLockedException](./../../jrecordlockedexception-(jremote-api) "class in com.jbase.jremote")  |
| com.jbase.jremote |
| com.jbase.jremote.io |

### Uses of [JRecordLockedException](./../../jrecordlockedexception-(jremote-api) "class in com.jbase.jremote") in [com.jbase.jremote](./../../../../jremote-api)

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote](./../../../../jremote-api) that throw [JRecordLockedException](./../../jrecordlockedexception-(jremote-api) "class in com.jbase.jremote")  |
|`JDynArray` | JFile.`readU(String recordKey, boolean blockedRead)`<br>Read a record where the supplied recordKey is the key to the record and locks it for update. |
| `boolean` | JFile.`writeU(String recordKey, JDynArray record, boolean blockedWrite)`<br>Write the supplied record to the jBASE file. |

### Uses of [JRecordLockedException](./../../jrecordlockedexception-(jremote-api) "class in com.jbase.jremote") in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-(jremote---api))

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-(jremote---api)) that throw [JRecordLockedException](./../../jrecordlockedexception-(jremote-api) "class in com.jbase.jremote")  |
|`JDynArray` | JFileImpl.`readU(String recordKey, boolean blockedRead)`  |
| `boolean` | JFileImpl.`writeU(String recordKey, JDynArray record, boolean blockedWrite)`  |

Back to [jRemote API](./../../README.md)
  
<PageFooter />
