# NoEndpointActivatedResponse (jremote API)

<PageHeader />

## Class NoEndpointActivatedResponse

All Implemented Interfaces:[JBaseSerializable](./../../../../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")
* * *


```
public class NoEndpointActivatedResponse
extends Object
implements JBaseSerializable
```

The reply from JRemote when no endpoint could be found for activation.

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `NoEndpointActivatedResponse()` <br> |
| `NoEndpointActivatedResponse(String info)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `String`<br> | `getInformation()` <br> |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### NoEndpointActivatedResponse

```
public NoEndpointActivatedResponse()
```

#### NoEndpointActivatedResponse

```
public NoEndpointActivatedResponse(String info)
```



### 


### Method Detail

#### getType

```
public int getType()
```
Specified by:`getType` in interface `JBaseSerializable`Returns:type id of the objects, used during the serialization
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Specified by:`readObject` in interface `JBaseSerializable`Throws:`IOException``ClassNotFoundException`
#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseSerializable`Throws:`IOException`
#### getInformation

```
public String getInformation()
```

#### getVersion

```
public int getVersion()
```
Specified by:`getVersion` in interface `JBaseSerializable`

Back to [jREMOTE API](com_jbase_jremote_package-summary)
