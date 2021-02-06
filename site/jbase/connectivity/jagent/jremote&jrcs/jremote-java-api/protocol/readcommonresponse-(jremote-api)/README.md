# ReadCommonResponse (jremote API)

<PageHeader />

## Class ReadCommonResponse

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")
* * *


```
public class ReadCommonResponse
extends JRemoteResponse
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `ReadCommonResponse()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getType()` <br> |
| `JDynArray`<br> | `getValue(CharsetEncoder encoder, CharsetDecoder decoder)` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class com.jbase.jremote.protocol.JRemoteResponse
    - `getVersion`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### ReadCommonResponse

```
public ReadCommonResponse()
```



### 


### Method Detail

#### getValue

```
public JDynArray getValue(CharsetEncoder encoder,
                          CharsetDecoder decoder)
```

#### getType

```
public int getType()
```
Returns:type id of the objects, used during the serialization
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Throws:`IOException``ClassNotFoundException`
#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Throws:`IOException`

Back to [jRemote API](../../../../jremote-api/README.md)

  
<PageFooter />
