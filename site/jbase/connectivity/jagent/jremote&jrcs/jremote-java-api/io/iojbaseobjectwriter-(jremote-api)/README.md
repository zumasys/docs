# IOJBaseObjectWriter (jremote API)

<PageHeader />

## Class IOJBaseObjectWriter

All Implemented Interfaces:[JBaseObjectWriter](./../jbaseobjectwriter-(jremote-api) "interface in com.jbase.jremote.io")
* * *

```java
public class IOJBaseObjectWriter
extends AbstractJBaseObjectWriter
```

jBASE object writer based on the DataOutputStream.

### Constructor Summary

| Constructor and Description |
| --- |
| `IOJBaseObjectWriter(OutputStream os)`  |
| `IOJBaseObjectWriter(OutputStream os, boolean compressed, int compressionThreshold)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()`  |
| `protected void` | `flush()`  |
| `protected void` | `outByte(byte[] b)`  |
| `protected void` | `outByte(int b)`  |
| `protected void` | `outInt(int i)`  |
| `protected void` | `outUTF(String s)`<br>Write a UTF8 string. |

- Methods inherited from class com.jbase.jremote.io.AbstractJBaseObjectWriter
  - `writeInt, writeJBaseSerializableObject, writeObject, writeObject, writeObject, writeObject, writeRootObject`
- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### IOJBaseObjectWriter

```java
public IOJBaseObjectWriter(OutputStream os)
```

#### IOJBaseObjectWriter

```java
public IOJBaseObjectWriter(OutputStream os,
                           boolean compressed,
                           int compressionThreshold)
```

### Method Detail

#### close

```java
public void close()
           throws IOException
```

Throws:`IOException`

#### flush

```java
protected void flush()
              throws IOException
```

Specified by:`flush` in class `AbstractJBaseObjectWriter`  
Throws:`IOException`

#### outByte

```java
protected void outByte(byte[] b)
                throws IOException
```

Specified by:`outByte` in class `AbstractJBaseObjectWriter`  
Throws:`IOException`

#### outByte

```java
protected void outByte(int b)
                throws IOException
```

Specified by:`outByte` in class `AbstractJBaseObjectWriter`  
Throws:`IOException`

#### outInt

```java
protected void outInt(int i)
               throws IOException
```

Specified by:`outInt` in class `AbstractJBaseObjectWriter`  
Throws:`IOException`

#### outUTF

```java
protected void outUTF(String s)
               throws IOException
```

Write a UTF8 string. This could be made more efficient by implementing our own UTF8 encoder (or using the DataOutputStream) instead of duplicating the string.  
Specified by:`outUTF` in class `AbstractJBaseObjectWriter`  
Throws:`IOException`

Back to [jRemote API](./../../README.md)

<PageFooter />
