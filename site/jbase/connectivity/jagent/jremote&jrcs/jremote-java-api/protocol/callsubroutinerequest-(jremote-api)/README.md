# CallSubroutineRequest (jremote API)

<PageHeader />

## Class CallSubroutineRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")
* * *


```
public class CallSubroutineRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `CallSubroutineRequest(String subroutineName, JSubroutineParameters parameters)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JSubroutineParameters`<br> | `getParameters()` <br> |
| `String`<br> | `getSubroutineName()` <br> |
| `int`<br> | `getType()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `setParameters(JSubroutineParameters params)` <br> |
| `void`<br> | `setSubroutineName(String name)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
    - `getVersion`


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### CallSubroutineRequest

```
public CallSubroutineRequest(String subroutineName,
                             JSubroutineParameters parameters)
```







### Method Detail

#### getParameters

```
public JSubroutineParameters getParameters()
```

#### setParameters

```
public void setParameters(JSubroutineParameters params)
```

#### getSubroutineName

```
public String getSubroutineName()
```

#### setSubroutineName

```
public void setSubroutineName(String name)
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
Returns:type id of the objects, used during the serialization

Back to [jRemote API](../../../../jremote-api/README.md)

  
<PageFooter />
