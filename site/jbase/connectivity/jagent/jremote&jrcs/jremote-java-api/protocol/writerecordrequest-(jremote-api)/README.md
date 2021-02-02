# WriteRecordRequest (jremote API)

<PageHeader />

## Class WriteRecordRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")
* * *


```
public class WriteRecordRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static int`<br> | `MODE_WRITE` <br> |
| `static int`<br> | `MODE_WRITEU` <br> |
| `static int`<br> | `MODE_WRITEU_NONBLOCK` <br> |






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `WriteRecordRequest(int writeMode, String fileName, String recordKey, JDynArray data)` <br> |






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

#### MODE\_WRITE

```
public static final int MODE_WRITE
```
See Also:[Constant Field Values](./../../constant-field-values)
#### MODE\_WRITEU

```
public static final int MODE_WRITEU
```
See Also:[Constant Field Values](./../../constant-field-values)
#### MODE\_WRITEU\_NONBLOCK

```
public static final int MODE_WRITEU_NONBLOCK
```
See Also:[Constant Field Values](./../../constant-field-values)


### 


### Constructor Detail

#### WriteRecordRequest

```
public WriteRecordRequest(int writeMode,
                          String fileName,
                          String recordKey,
                          JDynArray data)
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
