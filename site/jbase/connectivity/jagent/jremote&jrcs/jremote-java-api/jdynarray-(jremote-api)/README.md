# JDynArray (jremote API)

<PageHeader />

## Class JDynArray

All Implemented Interfaces:[IByteObject](./../io/ibyteobject-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class JDynArray
extends Object
implements IByteObject
```

The JDynArray is a jBASE type that implements a dynamic string array where attribute, value, and subvalue delimiters mark the array indices.

### Constructor Summary

| Constructor and Description |
| --- |
| `JDynArray()`  |
| `JDynArray(byte[] dynArray)`  |
| `JDynArray(CharsetEncoder encoder, CharsetDecoder decoder, String strElement)`  |
| `JDynArray(Charset cs, String strElement)`  |
| `JDynArray(String strElement)`<br>Construct a JDynArray from a String. |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `protected int` | `count(byte[] token, int attribute)`  |
| `protected int` | `count(byte[] token, int attribute, int value)`  |
| `protected int` | `count(byte[] token, int attribute, int value, int subvalue)`  |
| `protected static int` | `count(ByteBuffer bArray, byte[] token, int startIndex, int endIndex)`  |
| `protected static int` | `count(ByteBuffer bArray, byte token, int startIndex, int endIndex)`  |
| `protected int` | `count(byte token, int attribute)`  |
| `protected int` | `count(byte token, int attribute, int value)`  |
| `protected int` | `count(byte token, int attribute, int value, int subvalue)`  |
| `int` | `count(String token, int attribute)`<br>Return the number of tokens found in the supplied attribute. |
| `int` | `count(String token, int attribute, int value)`  |
| `int` | `count(String token, int attribute, int value, int subvalue)`  |
| `protected static int` | `dcount(ByteBuffer bArray, byte[] token, int startIndex, int endIndex)`  |
| `protected static int` | `dcount(ByteBuffer bArray, byte token, int startIndex, int endIndex)`  |
| `void` | `delete(int attribute)`  |
| `void` | `delete(int attribute, int value)`  |
| `void` | `delete(int attribute, int value, int subvalue)`  |
| `protected static byte[]` | `dups(int size, byte token)`  |
| `boolean` | `equals(Object other)`  |
| `String` | `get(int attribute)`  |
| `String` | `get(int attribute, int value)`  |
| `String` | `get(int attribute, int value, int subvalue)`  |
| `ByteBuffer` | `getByteBuffer()`<br>Internal use only - IByteBuffer provide access to internal storage for serialization |
| `byte[]` | `getBytes()`<br>Return the bytes backing this IByteObject. |
| `protected byte[]` | `getBytes(int attribute)`  |
| `protected byte[]` | `getBytes(int attribute, int value)`  |
| `protected byte[]` | `getBytes(int attribute, int value, int subvalue)`  |
| `protected int` | `getEndIndex()`  |
| `int` | `getNumberOfAttributes()`  |
| `int` | `getNumberOfSubValues(int attribute, int value)`  |
| `int` | `getNumberOfValues(int attribute)`  |
| `protected int` | `getStartIndex()`  |
| `int` | `hashCode()`  |
| `static int` | `index(ByteBuffer bArray, byte[] token, int nth, int startIndex, int endIndex)`  |
| `static int` | `index(ByteBuffer bArray, byte token, int nth, int startIndex, int endIndex)`  |
| `void` | `insert(String str, int attribute)`  |
| `void` | `insert(String str, int attribute, int value)`  |
| `void` | `insert(String str, int attribute, int value, int subvalue)`  |
| `protected void` | `insertBytes(byte[] newBytes)`  |
| `protected void` | `insertBytes(byte[] b, int attribute)`  |
| `protected void` | `insertBytes(byte[] b, int attribute, int value)`  |
| `protected void` | `insertBytes(byte[] b, int attribute, int value, int subvalue)`  |
| `protected void` | `insertElement(byte token, int newIndex)`  |
| `protected static int` | `lastIndex(ByteBuffer bArray, byte token, int minIndex, int fromIndex)`  |
| `protected boolean` | `moveCursorToElement(byte token, int element)`  |
| `void` | `replace(String str, int attribute)`  |
| `void` | `replace(String str, int attribute, int value)`  |
| `void` | `replace(String str, int attribute, int value, int subvalue)`  |
| `protected void` | `replaceBytes(byte[] b, int attribute)`  |
| `protected void` | `replaceBytes(byte[] b, int attribute, int value)`  |
| `protected void` | `replaceBytes(byte[] b, int attribute, int value, int subvalue)`  |
| `protected void` | `replaceElement(byte token, int newIndex)`  |
| `protected void` | `resetCursor()`  |
| `void` | `setByteBuffer(ByteBuffer byteBuffer)`<br>Internal use only - IByteBuffer provides access to internal storage for serialization |
| `void` | `setCharset(Charset charset)`  |
| `void` | `setCharsetDecoder(CharsetDecoder decoder)`  |
| `void` | `setCharsetEncoder(CharsetEncoder encoder)`  |
| `protected void` | `setEndIndex(int idx)`  |
| `protected void` | `setStartIndex(int idx)`  |
| `String` | `toString()`<br>Create a String from a JDynArray. |

- Methods inherited from class java.lang.Object
  - `clone, finalize, getClass, notify, notifyAll, wait, wait, wait`

### Constructor Detail

#### JDynArray

```java
public JDynArray()
```
#### JDynArray

```java
public JDynArray(byte[] dynArray)
```

#### JDynArray

```java
public JDynArray(String strElement)
```

Construct a JDynArray from a String. This is equivalent to JDynArray.replace("Your String", 1)
Parameters:`strElement` -

#### JDynArray

```java
public JDynArray(Charset cs,
                 String strElement)
```

#### JDynArray

```java
public JDynArray(CharsetEncoder encoder,
                 CharsetDecoder decoder,
                 String strElement)
```

### Method Detail

#### setCharset

```java
public void setCharset(Charset charset)
```

#### setCharsetEncoder

```java
public void setCharsetEncoder(CharsetEncoder encoder)
```

#### setCharsetDecoder

```java
public void setCharsetDecoder(CharsetDecoder decoder)
```

#### getStartIndex

```java
protected int getStartIndex()
```

#### getEndIndex

```java
protected int getEndIndex()
```

#### setStartIndex

```java
protected void setStartIndex(int idx)
```

#### setEndIndex

```java
protected void setEndIndex(int idx)
```

#### getBytes

```java
public byte[] getBytes()
```

Description copied from interface: `IByteObject`

Return the bytes backing this IByteObject.
Specified by:`getBytes` in interface `IByteObject`

#### getByteBuffer

```java
public ByteBuffer getByteBuffer()
                         throws IOException
```

Internal use only - IByteBuffer provide access to internal storage for serialization
Specified by:`getByteBuffer` in interface `IByteObject`  
Throws:`IOException`

#### setByteBuffer

```java
public void setByteBuffer(ByteBuffer byteBuffer)
                   throws IOException
```

Internal use only - IByteBuffer provides access to internal storage for serialization
Specified by:`setByteBuffer` in interface `IByteObject`  
Throws:`IOException`

#### toString

```java
public String toString()
```

Create a String from a JDynArray.
Overrides:`toString` in class `Object`

#### getNumberOfAttributes

```java
public int getNumberOfAttributes()
```

#### getNumberOfValues

```java
public int getNumberOfValues(int attribute)
```

#### getNumberOfSubValues

```java
public int getNumberOfSubValues(int attribute,
                                int value)
```

#### get

```java
public String get(int attribute)
```

#### get

```java
public String get(int attribute,
                  int value)
```

#### get

```java
public String get(int attribute,
                  int value,
                  int subvalue)
```

#### getBytes

```java
protected byte[] getBytes(int attribute)
```

#### getBytes

```java
protected byte[] getBytes(int attribute,
                          int value)
```

#### getBytes

```java
protected byte[] getBytes(int attribute,
                          int value,
                          int subvalue)
```

#### delete

```java
public void delete(int attribute)
```

#### delete

```java
public void delete(int attribute,
                   int value)
```

#### delete

```java
public void delete(int attribute,
                   int value,
                   int subvalue)
```

#### insert

```java
public void insert(String str,
                   int attribute)
```

#### insert

```java
public void insert(String str,
                   int attribute,
                   int value)
```

#### insert

```java
public void insert(String str,
                   int attribute,
                   int value,
                   int subvalue)
```

#### insertBytes

```java
protected void insertBytes(byte[] b,
                           int attribute)
```

#### insertBytes

```java
protected void insertBytes(byte[] b,
                           int attribute,
                           int value)
```

#### insertBytes

```java
protected void insertBytes(byte[] b,
                           int attribute,
                           int value,
                           int subvalue)
```

#### insertBytes

```java
protected void insertBytes(byte[] newBytes)
```

#### replace

```java
public void replace(String str,
                    int attribute)
```

#### replace

```java
public void replace(String str,
                    int attribute,
                    int value)
```

#### replace

```java
public void replace(String str,
                    int attribute,
                    int value,
                    int subvalue)
```

#### replaceBytes

```java
protected void replaceBytes(byte[] b,
                            int attribute)
```

#### replaceBytes

```java
protected void replaceBytes(byte[] b,
                            int attribute,
                            int value)
```

#### replaceBytes

```java
protected void replaceBytes(byte[] b,
                            int attribute,
                            int value,
                            int subvalue)
```

#### count

```java
public int count(String token,
                 int attribute)
```

Return the number of tokens found in the supplied attribute.

#### count

```java
public int count(String token,
                 int attribute,
                 int value)
```

#### count

```java
public int count(String token,
                 int attribute,
                 int value,
                 int subvalue)
```

#### 


#### count

```
protected int count(byte token,
                    int attribute)
```

#### count

```java
protected int count(byte token,
                    int attribute,
                    int value)
```

#### count

```java
protected int count(byte token,
                    int attribute,
                    int value,
                    int subvalue)
```

#### count

```java
protected int count(byte[] token,
                    int attribute)
```

#### count

```java
protected int count(byte[] token,
                    int attribute,
                    int value)
```

#### count

```java
protected int count(byte[] token,
                    int attribute,
                    int value,
                    int subvalue)
```

#### insertElement

```java
protected void insertElement(byte token,
                             int newIndex)
```

#### replaceElement

```java
protected void replaceElement(byte token,
                              int newIndex)
```

#### dups

```java
protected static byte[] dups(int size,
                             byte token)
```

#### resetCursor

```java
protected void resetCursor()
```

#### moveCursorToElement

```java
protected boolean moveCursorToElement(byte token,
                                      int element)
```

#### index

```java
public static int index(ByteBuffer bArray,
                        byte token,
                        int nth,
                        int startIndex,
                        int endIndex)
```

#### index

```java
public static int index(ByteBuffer bArray,
                        byte[] token,
                        int nth,
                        int startIndex,
                        int endIndex)
```

#### lastIndex

```java
protected static int lastIndex(ByteBuffer bArray,
                               byte token,
                               int minIndex,
                               int fromIndex)
```

#### count

```java
protected static int count(ByteBuffer bArray,
                           byte token,
                           int startIndex,
                           int endIndex)
```

#### count

```java
protected static int count(ByteBuffer bArray,
                           byte[] token,
                           int startIndex,
                           int endIndex)
```

#### dcount

```java
protected static int dcount(ByteBuffer bArray,
                            byte token,
                            int startIndex,
                            int endIndex)
```

#### dcount

```java
protected static int dcount(ByteBuffer bArray,
                            byte[] token,
                            int startIndex,
                            int endIndex)
```

#### equals

```java
public boolean equals(Object other)
```

Overrides:`equals` in class `Object`

#### hashCode

```java
public int hashCode()
```

Overrides:`hashCode` in class `Object`

Back to [jRemote API](./../../README.md)

<PageFooter />
