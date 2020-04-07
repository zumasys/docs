# MonitoringResponse (jremote API)

<PageHeader />

## Class MonitoringResponse

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")
* * *


```
public class MonitoringResponse
extends JRemoteResponse
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `MonitoringResponse()` <br> |
| `MonitoringResponse(String response)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `String`<br> | `getResponse()` <br> |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### MonitoringResponse

```
public MonitoringResponse()
```

#### MonitoringResponse

```
public MonitoringResponse(String response)
```



### 


### Method Detail

#### getResponse

```
public String getResponse()
```

#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Throws:`IOException`
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Throws:`IOException``ClassNotFoundException`
#### getType

```
public int getType()
```
Returns:type id of the objects, used during the serialization
#### getVersion

```
public int getVersion()
```
Specified by:`getVersion` in interface `JBaseSerializable`Overrides:`getVersion` in class `JRemoteResponse`

Back to [jREMOTE API](com_jbase_jremote_package-summary)
