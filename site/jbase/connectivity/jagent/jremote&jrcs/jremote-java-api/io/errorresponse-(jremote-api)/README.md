# ErrorResponse (jremote API)

<PageHeader />

## Class ErrorResponse

All Implemented Interfaces:[JBaseSerializable](./../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class ErrorResponse
extends Response
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `ErrorResponse()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getMessage()`<br>Methods for non SQL code that expects a message and status. |
| `SQLError` | `getSQLError()`  |
| `int` | `getStatus()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### ErrorResponse

```java
public ErrorResponse()
```

### Method Detail

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

#### getSQLError

```java
public SQLError getSQLError()
```

#### getMessage

```java
public String getMessage()
```

Methods for non SQL code that expects a message and status. New code should get the SQLError and then extract field from it.

#### getStatus

```java
public int getStatus()
```

#### getType

```java
public int getType()
```

Returns:type id of the objects, used during the serialization

#### getVersion

```java
public int getVersion()
```

Back to [jRemote API](./../../README.md)

<PageFooter />
