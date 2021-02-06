# ReadRecordRequest (jremote API)

<PageHeader />

## Class ReadRecordRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")
* * *


```
public class ReadRecordRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static int`<br> | `MODE_READ` <br> |
| `static int`<br> | `MODE_READU` <br> |
| `static int`<br> | `MODE_READU_NONBLOCK` <br> |






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `ReadRecordRequest(int readMode, String fileName, String recordKey)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getType()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
    - `getVersion`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### MODE\_READ

```
public static final int MODE_READ
```
See Also:[Constant Field Values](./../../constant-field-values)
#### MODE\_READU

```
public static final int MODE_READU
```
See Also:[Constant Field Values](./../../constant-field-values)
#### MODE\_READU\_NONBLOCK

```
public static final int MODE_READU_NONBLOCK
```
See Also:[Constant Field Values](./../../constant-field-values)


### 


### Constructor Detail

#### ReadRecordRequest

```
public ReadRecordRequest(int readMode,
                         String fileName,
                         String recordKey)
```



### 


### Method Detail

#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseSerializable`Overrides:`writeObject` in class `JRemoteRequest`Throws:`IOException`
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Specified by:`readObject` in interface `JBaseSerializable`Overrides:`readObject` in class `JRemoteRequest`Throws:`IOException``ClassNotFoundException`
#### getType

```
public int getType()
```
Returns:type id of the objects, used during the serializationSee Also:[`JBaseSerializable.getType()`](./../../io/jbaseserializable-(jremote-api)#getType--)

Back to [jRemote API](../../../../jremote-api/README.md)

  
<PageFooter />
