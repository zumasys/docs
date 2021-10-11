# SQLError (jremote API)

<PageHeader />

## Class SQLError

All Implemented Interfaces:[JBaseSerializable](./../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")
* * *

```java
public class SQLError
extends Object
implements JBaseSerializable
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `SQLError()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getMessage()`  |
| `String` | `getSQLClass()`  |
| `String` | `getSQLSubClass()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`<br>Method : readObject() Description: Read object off the wire. |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### SQLError

```java
public SQLError()
```

### Method Detail

#### getMessage

```java
public String getMessage()
```

#### getSQLClass

```java
public String getSQLClass()
```

#### getSQLSubClass

```java
public String getSQLSubClass()
```

#### writeObject

```java
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```

Specified by:`writeObject` in interface `JBaseSerializable`  
Throws:`IOException`

#### readObject

```java
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```

Method : readObject()  
Description: Read object off the wire.  
Note: One day we must convert this to pass C++ strings for its member fields. However, for now, jcf does not support this, so pass CVars.  
Specified by:`readObject` in interface `JBaseSerializable`  
Throws:`IOException``ClassNotFoundException`  

#### getType

```java
public int getType()
```

Specified by:`getType` in interface `JBaseSerializable`  
Returns:type id of the objects, used during the serialization

#### getVersion

```java
public int getVersion()
```

Specified by:`getVersion` in interface `JBaseSerializable`

Back to [jRemote API](./../../README.md)

<PageFooter />
