# SwitchAccountRequest (jremote API)

<PageHeader />

## Class SwitchAccountRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")
* * *


```
public class SwitchAccountRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `SwitchAccountRequest()` <br> |
| `SwitchAccountRequest(String user, String account, String password)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `String`<br> | `getAccount()` <br> |
| `String`<br> | `getPassword()` <br> |
| `int`<br> | `getType()` <br> |
| `String`<br> | `getUser()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
    - `getVersion`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### SwitchAccountRequest

```
public SwitchAccountRequest()
```

#### SwitchAccountRequest

```
public SwitchAccountRequest(String user,
                            String account,
                            String password)
```



### 


### Method Detail

#### getUser

```
public String getUser()
```

#### getAccount

```
public String getAccount()
```

#### getPassword

```
public String getPassword()
```

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
