# InputOutputResponse (jremote API)

<PageHeader />

## Class InputOutputResponse

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class InputOutputResponse
extends JRemoteResponse
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| `static int` | `INPUTCMD`  |
| `static int` | `OUTPUTCMD`  |

### Constructor Summary

| Constructor and Description |
| --- |
| `InputOutputResponse()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getCommand()`  |
| `JDynArray` | `getOutput()`  |
| `int` | `getType()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class com.jbase.jremote.protocol.JRemoteResponse
  - `getVersion`
- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### OUTPUTCMD

```java
public static final int OUTPUTCMD
```

See Also:[Constant Field Values](./../../constant-field-values)

#### INPUTCMD

```java
public static final int INPUTCMD
```

See Also:[Constant Field Values](./../../constant-field-values)

### Constructor Detail

#### InputOutputResponse

```java
public InputOutputResponse()
```

### Method Detail

#### getCommand

```java
public int getCommand()
```

#### getOutput

```java
public JDynArray getOutput()
```

#### writeObject

```java
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```

Throws:`IOException`

#### readObject

```java
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```

Throws:`IOException``ClassNotFoundException`

#### getType

```java
public int getType()
```

Returns:type id of the objects, used during the serialization  
See Also:[`JBaseSerializable.getType()`](./../../io/jbaseserializable-(jremote-api)#getType--)

Back to [jRemote API](./../../README.md)

<PageFooter />
