# InputOutputResponse (jremote API)

<PageHeader />

## Class InputOutputResponse

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")
* * *


```
public class InputOutputResponse
extends JRemoteResponse
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static int`<br> | `INPUTCMD` <br> |
| `static int`<br> | `OUTPUTCMD` <br> |






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `InputOutputResponse()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getCommand()` <br> |
| `JDynArray`<br> | `getOutput()` <br> |
| `int`<br> | `getType()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class com.jbase.jremote.protocol.JRemoteResponse
    - `getVersion`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### OUTPUTCMD

```
public static final int OUTPUTCMD
```
See Also:[Constant Field Values](./../../constant-field-values)
#### INPUTCMD

```
public static final int INPUTCMD
```
See Also:[Constant Field Values](./../../constant-field-values)


### Constructor Detail

#### InputOutputResponse

```
public InputOutputResponse()
```



### Method Detail

#### getCommand

```
public int getCommand()
```

#### getOutput

```
public JDynArray getOutput()
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
Returns:type id of the objects, used during the serializationSee Also:[`JBaseSerializable.getType()`](./../../io/jbaseserializable-(jremote-api)#getType--)


Back to [jRemote API](../../../../jremote-api/README.md)



  
<PageFooter />
