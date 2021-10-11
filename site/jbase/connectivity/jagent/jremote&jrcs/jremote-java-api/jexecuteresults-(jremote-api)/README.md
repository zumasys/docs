# JExecuteResults (jremote API)

<PageHeader />

## Class JExecuteResults

All Implemented Interfaces:[JBaseSerializable](./../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class JExecuteResults
extends JRemoteResponse
```

The results from an executed command.

See Also:`JConnection.execute(java.lang.String)`

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`


### Constructor Summary

| Constructor and Description |
| --- |
| `JExecuteResults()`  |
| `JExecuteResults(JSelectListProt selectListProt, JDynArray capturingVar, JDynArray settingVar)`  |

### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | `getCapturingVar()`  |
| `JCursor` | `getCursor()`  |
| `JSelectList` | `getReturnList()`  |
| `JDynArray` | `getSettingVar()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JExecuteResults

```java
public JExecuteResults()
```

#### JExecuteResults

```java
public JExecuteResults(JSelectListProt selectListProt,
                       JDynArray capturingVar,
                       JDynArray settingVar)
```

### Method Detail

#### getType

```java
public int getType()
```

Returns:type id of the objects, used during the serialization

#### getVersion

```java
public int getVersion()
```

Specified by:`getVersion` in interface `JBaseSerializable`Overrides:`getVersion` in class `JRemoteResponse`

#### writeObject

```java
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

#### getReturnList

```java
public JSelectList getReturnList()
```

#### getCursor

```java
public JCursor getCursor()
```

#### getSettingVar

```java
public JDynArray getSettingVar()
```

#### getCapturingVar

```java
public JDynArray getCapturingVar()
```

Back to [jRemote API](./../../README.md)
  
<PageFooter />
