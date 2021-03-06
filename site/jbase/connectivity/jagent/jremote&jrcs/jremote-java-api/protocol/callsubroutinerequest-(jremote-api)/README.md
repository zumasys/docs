# CallSubroutineRequest (jremote API)

<PageHeader />

## Class CallSubroutineRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class CallSubroutineRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `CallSubroutineRequest(String subroutineName, JSubroutineParameters parameters)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `JSubroutineParameters` | `getParameters()`  |
| `String` | `getSubroutineName()`  |
| `int` | `getType()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `setParameters(JSubroutineParameters params)`  |
| `void` | `setSubroutineName(String name)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
  - `getVersion`

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### CallSubroutineRequest

```java
public CallSubroutineRequest(String subroutineName,
                             JSubroutineParameters parameters)
```

### Method Detail

#### getParameters

```java
public JSubroutineParameters getParameters()
```

#### setParameters

```java
public void setParameters(JSubroutineParameters params)
```

#### getSubroutineName

```java
public String getSubroutineName()
```

#### setSubroutineName

```java
public void setSubroutineName(String name)
```

#### writeObject

```java
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```

Specified by:`writeObject` in interface `JBaseSerializable`  
Overrides:`writeObject` in class `JRemoteRequest`  
Throws:`IOException`

#### readObject

```java
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```

Specified by:`readObject` in interface `JBaseSerializable`  
Overrides:`readObject` in class `JRemoteRequest`  
Throws:`IOException``ClassNotFoundException`

#### getType

```java
public int getType()
```

Returns:type id of the objects, used during the serialization

Back to [jRemote API](./../../README.md)
  
<PageFooter />
