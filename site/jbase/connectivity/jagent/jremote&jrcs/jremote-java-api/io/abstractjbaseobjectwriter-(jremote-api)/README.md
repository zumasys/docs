# AbstractJBaseObjectWriter (jremote API)

<PageHeader />

## Class AbstractJBaseObjectWriter

All Implemented Interfaces:[JBaseObjectWriter](./../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io")  
Direct Known Subclasses:[IOJBaseObjectWriter](./../iojbaseobjectwriter-(jremote-api) "class in com.jbase.jremote.io"), [NIOJBaseObjectWriter](./../niojbaseobjectwriter-(jremote-api)  "class in com.jbase.jremote.io")
* * *

```java
public abstract class AbstractJBaseObjectWriter
extends Object
implements JBaseObjectWriter
```

### Constructor Summary

| Constructor and Description |
| --- |
| `AbstractJBaseObjectWriter()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `protected abstract void` | `flush()`  |
| `protected abstract void` | `outByte(byte[] b)`  |
| `protected abstract void` | `outByte(int b)`  |
| `protected abstract void` | `outInt(int i)`  |
| `protected abstract void` | `outUTF(String s)`  |
| `void` | `writeInt(int i)`  |
| `protected void` | `writeJBaseSerializableObject(JBaseSerializable o)`  |
| `void` | `writeObject(byte[] data)`  |
| `void` | `writeObject(IByteObject o)`  |
| `void` | `writeObject(JBaseSerializable o)`  |
| `void` | `writeObject(String o)`  |
| `void` | `writeRootObject(JBaseSerializable o)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- Methods inherited from interface com.jbase.jremote.io.JBaseObjectWriter
  - `close`

### Constructor Detail

#### AbstractJBaseObjectWriter

```java
public AbstractJBaseObjectWriter()
```

### Method Detail

#### outByte

```java
protected abstract void outByte(byte[] b)
                         throws IOException
```

Throws:`IOException`

#### outByte

```java
protected abstract void outByte(int b)
                         throws IOException
```

Throws:`IOException`

#### outInt

```java
protected abstract void outInt(int i)
                        throws IOException
```

Throws:`IOException`

#### outUTF

```java
protected abstract void outUTF(String s)
                        throws IOException
```

Throws:`IOException`

#### flush

```java
protected abstract void flush()
                       throws IOException
```

Throws:`IOException`

#### writeInt

```java
public void writeInt(int i)
              throws IOException
```

Specified by:`writeInt` in interface `JBaseObjectWriter`Throws:`IOException`

#### writeObject

```java
public void writeObject(String o)
                 throws IOException
```

Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`

#### writeObject

```
public void writeObject(byte[] data)
                 throws IOException
```

Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`

#### writeObject

```java
public void writeObject(IByteObject o)
                 throws IOException
```

Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`

#### writeObject

```java
public void writeObject(JBaseSerializable o)
                 throws IOException
```

Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`

#### writeJBaseSerializableObject

```java
protected void writeJBaseSerializableObject(JBaseSerializable o)
                                     throws IOException
```

Throws:`IOException`

#### writeRootObject

```java
public void writeRootObject(JBaseSerializable o)
                     throws IOException
```

Specified by:`writeRootObject` in interface `JBaseObjectWriter`Throws:`IOException`

Back to [jRemote API](./../../README.md)

<PageFooter />
