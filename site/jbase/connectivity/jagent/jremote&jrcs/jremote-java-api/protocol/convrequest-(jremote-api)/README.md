# ConvRequest (jremote API)

<PageHeader />

## Class ConvRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class ConvRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| `static int` | `ICONV`  |
| `static int` | `OCONV`  |

### Constructor Summary

| Constructor and Description |
| --- |
| `ConvRequest()`  |
| `ConvRequest(int type, String data, String conversion)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getConversion()`  |
| `String` | `getData()`  |
| `int` | `getType()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
  - `getVersion`

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### ICONV

```java
public static final int ICONV
```

See Also:[Constant Field Values](./../../constant-field-values)

#### OCONV

```java
public static final int OCONV
```

See Also:[Constant Field Values](./../../constant-field-values)

### Constructor Detail

#### ConvRequest

```java
public ConvRequest()
```

#### ConvRequest

```java
public ConvRequest(int type,
                   String data,
                   String conversion)
```

### Method Detail

#### getType

```java
public int getType()
```

Returns:type id of the objects, used during the serialization

#### getData

```java
public String getData()
```

#### getConversion

```java
public String getConversion()
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

Back to [jRemote API](./../../README.md)

<PageFooter />
