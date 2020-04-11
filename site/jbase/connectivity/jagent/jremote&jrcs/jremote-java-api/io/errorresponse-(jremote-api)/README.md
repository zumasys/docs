# ErrorResponse (jremote API)

<PageHeader />

## Class ErrorResponse

All Implemented Interfaces:[JBaseSerializable](./../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")
* * *


```
public class ErrorResponse
extends Response
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `ErrorResponse()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `String`<br> | `getMessage()`<br>Methods for non SQL code that expects a message and status.<br> |
| `SQLError`<br> | `getSQLError()` <br> |
| `int`<br> | `getStatus()` <br> |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### ErrorResponse

```
public ErrorResponse()
```







### 


### Method Detail

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
#### getSQLError

```
public SQLError getSQLError()
```

#### getMessage

```
public String getMessage()
```

Methods for non SQL code that expects a message and status. New code should get the SQLError and then extract field from it.

#### getStatus

```
public int getStatus()
```

#### getType

```
public int getType()
```
Returns:type id of the objects, used during the serialization
#### getVersion

```
public int getVersion()
```





Back to [jREMOTE API](com_jbase_jremote_package-summary)

  
<PageFooter />
