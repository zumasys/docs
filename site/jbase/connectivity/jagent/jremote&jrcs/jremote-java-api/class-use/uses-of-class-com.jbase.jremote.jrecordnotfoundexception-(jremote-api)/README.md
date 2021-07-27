# Uses of Class com.jbase.jremote.JRecordNotFoundException (jremote API)

<PageHeader />

## Uses of Class

com.jbase.jremote.JRecordNotFoundException

| Package |  
| --- |
| Packages that use [JRecordNotFoundException](./../../jrecordnotfoundexception-(jremote-api) "class in com.jbase.jremote")  |
| com.jbase.jremote |
| com.jbase.jremote.io |
| com.jbase.jremote.jca |

### Uses of [JRecordNotFoundException](./../../jrecordnotfoundexception-(jremote-api) "class in com.jbase.jremote") in [com.jbase.jremote](./../../../../jremote-api)

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote](./../../../../jremote-api) that throw [JRecordNotFoundException](./../../jrecordnotfoundexception-(jremote-api) "class in com.jbase.jremote")  |
|`JDynArray` | JFile.`read(String recordKey)`<br>Read a record where the supplied recordKey is the key to the record. |
| `JDynArray` | JFile.`readU(String recordKey, boolean blockedRead)`<br>Read a record where the supplied recordKey is the key to the record and locks it for update. |

### Uses of [JRecordNotFoundException](./../../jrecordnotfoundexception-(jremote-api) "class in com.jbase.jremote") in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-(jremote---api))

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../io/com.jbase.jremote.io-(jremote---api)) that throw [JRecordNotFoundException](./../../jrecordnotfoundexception-(jremote-api) "class in com.jbase.jremote")  |
| `JDynArray` | JFileImpl.`read(String recordKey)`  |
| `JDynArray` | JFileImpl.`readU(String recordKey, boolean blockedRead)`  |

### Uses of [JRecordNotFoundException](./../../jrecordnotfoundexception-(jremote-api) "class in com.jbase.jremote") in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-(jremote---api))

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.jca](./../../jca/com.jbase.jremote.jca-(jremote---api)) that throw [JRecordNotFoundException](./../../jrecordnotfoundexception-(jremote-api) "class in com.jbase.jremote")  | 
| `JDynArray` | WrappedJFile.`read(String recordKey)`  |
| `JDynArray` | WrappedJFile.`readU(String recordKey, boolean blockedRead)`  |

Back to [jRemote API](./../../README.md)

<PageFooter />
