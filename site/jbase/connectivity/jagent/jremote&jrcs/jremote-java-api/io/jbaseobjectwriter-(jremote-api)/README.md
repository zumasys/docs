# JBaseObjectWriter (jremote API)

<PageHeader />

## Interface JBaseObjectWriter

All Known Implementing Classes:[AbstractJBaseObjectWriter](./../abstractjbaseobjectwriter-(jremote-api) "class in com.jbase.jremote.io"), [IOJBaseObjectWriter](./../iojbaseobjectwriter-(jremote-api) "class in com.jbase.jremote.io"), [NIOJBaseObjectWriter](./../niojbaseobjectwriter-(jremote-api) "class in com.jbase.jremote.io")
* * *

```java
public interface JBaseObjectWriter
```

Serializes objects to jBASE JDBC format.

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()`  |
| `void` | `writeInt(int i)`  |
| `void` | `writeObject(byte[] o)`  |
| `void` | `writeObject(IByteObject o)`  |
| `void` | `writeObject(JBaseSerializable o)`  |
| `void` | `writeObject(String o)`  |
| `void` | `writeRootObject(JBaseSerializable o)`  |

### Method Detail

#### writeInt

```java
void writeInt(int i)
       throws IOException
```

Throws:`IOException`

#### writeObject

```java
void writeObject(JBaseSerializable o)
          throws IOException
```

Throws:`IOException`

#### writeObject

```java
void writeObject(String o)
          throws IOException
```

Throws:`IOException`

#### writeObject

```java
void writeObject(byte[] o)
          throws IOException
```

Throws:`IOException`

#### writeObject

```java
void writeObject(IByteObject o)
          throws IOException
```

Throws:`IOException`

#### writeRootObject

```java
void writeRootObject(JBaseSerializable o)
              throws IOException
```

Throws:`IOException`

#### close

```java
void close()
    throws IOException
```

Throws:`IOException`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
