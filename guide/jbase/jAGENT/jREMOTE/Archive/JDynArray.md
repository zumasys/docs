# JDynArray

**Created At:** 9/13/2017 8:04:21 PM  
**Updated At:** 9/13/2017 8:05:00 PM  


## Class JDynArray

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.JDynArray
- <dl><dt>All Implemented Interfaces:</dt><dd><a href="../../../com/jbase/jremote/io/IByteObject.html" title="interface in com.jbase.jremote.io">IByteObject</a></dd></dl>
```
public class JDynArray
extends Object
implements IByteObject
```

The JDynArray is a jBASE type that implements a dynamic string array where attribute, value, and subvalue delimiters mark the array indices.<dl><dt>Author:</dt><dd>aphethean</dd></dl>
- - ### Constructor Summary


| Constructor and Description |
| --- |
<caption>Constructors </caption>| `JDynArray()`  |
| `JDynArray(byte[] dynArray)`  |
| `JDynArray(CharsetEncoder encoder, CharsetDecoder decoder, String strElement)`  |
| `JDynArray(Charset cs, String strElement)`  |
| `JDynArray(String strElement)`Construct a JDynArray from a String.<br> |
    - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
<caption>All Methods <a href="javascript%3Ashow(1);">Static Methods</a><a href="javascript%3Ashow(2);">Instance Methods</a><a href="javascript%3Ashow(8);">Concrete Methods</a>&nbsp;</caption>| `protected int` | `count(byte[] token, int attribute)`  |
| `protected int` | `count(byte[] token, int attribute, int value)`  |
| `protected int` | `count(byte[] token, int attribute, int value, int subvalue)`  |
| `protected static int` | `count(ByteBuffer bArray, byte[] token, int startIndex, int endIndex)`  |
| `protected static int` | `count(ByteBuffer bArray, byte token, int startIndex, int endIndex)`  |
| `protected int` | `count(byte token, int attribute)`  |
| `protected int` | `count(byte token, int attribute, int value)`  |
| `protected int` | `count(byte token, int attribute, int value, int subvalue)`  |
| `int` | `count(String token, int attribute)`Return the number of tokens found in the supplied attribute.<br> |
| `int` | `count(String token, int attribute, int value)`  |
| `int` | `count(String token, int attribute, int value, int subvalue)`  |
| `protected static int` | `dcount(ByteBuffer bArray, byte[] token, int startIndex, int endIndex)`  |
| `protected static int` | `dcount(ByteBuffer bArray, byte token, int startIndex, int endIndex)`  |
| `void` | `delete(int attribute)`  |
| `void` | `delete(int attribute, int value)`  |
| `void` | `delete(int attribute, int value, int subvalue)`  |
| `protected static byte[]` | `dups(int size, byte token)`  |
| `boolean` | `equals(Object other)`  |
| `String` | `get(int attribute)`  |
| `String` | `get(int attribute, int value)`  |
| `String` | `get(int attribute, int value, int subvalue)`  |
| `ByteBuffer` | `getByteBuffer()`Internal use only - IByteBuffer provide access to internal storage for serialization<br> |
| `byte[]` | `getBytes()`Return the bytes backing this IByteObject.<br> |
| `protected byte[]` | `getBytes(int attribute)`  |
| `protected byte[]` | `getBytes(int attribute, int value)`  |
| `protected byte[]` | `getBytes(int attribute, int value, int subvalue)`  |
| `protected int` | `getEndIndex()`  |
| `int` | `getNumberOfAttributes()`  |
| `int` | `getNumberOfSubValues(int attribute, int value)`  |
| `int` | `getNumberOfValues(int attribute)`  |
| `protected int` | `getStartIndex()`  |
| `int` | `hashCode()`  |
| `static int` | `index(ByteBuffer bArray, byte[] token, int nth, int startIndex, int endIndex)`  |
| `static int` | `index(ByteBuffer bArray, byte token, int nth, int startIndex, int endIndex)`  |
| `void` | `insert(String str, int attribute)`  |
| `void` | `insert(String str, int attribute, int value)`  |
| `void` | `insert(String str, int attribute, int value, int subvalue)`  |
| `protected void` | `insertBytes(byte[] newBytes)`  |
| `protected void` | `insertBytes(byte[] b, int attribute)`  |
| `protected void` | `insertBytes(byte[] b, int attribute, int value)`  |
| `protected void` | `insertBytes(byte[] b, int attribute, int value, int subvalue)`  |
| `protected void` | `insertElement(byte token, int newIndex)`  |
| `protected static int` | `lastIndex(ByteBuffer bArray, byte token, int minIndex, int fromIndex)`  |
| `protected boolean` | `moveCursorToElement(byte token, int element)`  |
| `void` | `replace(String str, int attribute)`  |
| `void` | `replace(String str, int attribute, int value)`  |
| `void` | `replace(String str, int attribute, int value, int subvalue)`  |
| `protected void` | `replaceBytes(byte[] b, int attribute)`  |
| `protected void` | `replaceBytes(byte[] b, int attribute, int value)`  |
| `protected void` | `replaceBytes(byte[] b, int attribute, int value, int subvalue)`  |
| `protected void` | `replaceElement(byte token, int newIndex)`  |
| `protected void` | `resetCursor()`  |
| `void` | `setByteBuffer(ByteBuffer byteBuffer)`Internal use only - IByteBuffer provides access to internal storage for serialization<br> |
| `void` | `setCharset(Charset charset)`  |
| `void` | `setCharsetDecoder(CharsetDecoder decoder)`  |
| `void` | `setCharsetEncoder(CharsetEncoder encoder)`  |
| `protected void` | `setEndIndex(int idx)`  |
| `protected void` | `setStartIndex(int idx)`  |
| `String` | `toString()`Create a String from a JDynArray.<br> |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, finalize, getClass, notify, notifyAll, wait, wait, wait`
- - ### Constructor Detail

        - #### JDynArray

```
public JDynArray()
```
        - #### JDynArray

```
public JDynArray(byte[] dynArray)
```
        - #### JDynArray

```
public JDynArray(String strElement)
```

Construct a JDynArray from a String. This is equivalent to JDynArray.replace("Your String", 1)<dl><dt>Parameters:</dt><dd><code>strElement</code> -</dd></dl>
        - #### JDynArray

```
public JDynArray(Charset cs,                  String strElement)
```
        - #### JDynArray

```
public JDynArray(CharsetEncoder encoder,                  CharsetDecoder decoder,                  String strElement)
```
    - ### Method Detail

        - #### setCharset

```
public void setCharset(Charset charset)
```
        - #### setCharsetEncoder

```
public void setCharsetEncoder(CharsetEncoder encoder)
```
        - #### setCharsetDecoder

```
public void setCharsetDecoder(CharsetDecoder decoder)
```
        - #### getStartIndex

```
protected int getStartIndex()
```
        - #### getEndIndex

```
protected int getEndIndex()
```
        - #### setStartIndex

```
protected void setStartIndex(int idx)
```
        - #### setEndIndex

```
protected void setEndIndex(int idx)
```
        - #### getBytes

```
public byte[] getBytes()
```

Description copied from interface: `IByteObject`
Return the bytes backing this IByteObject.<dl><dt>Specified by:</dt><dd><code><a href="../../../com/jbase/jremote/io/IByteObject.html#getBytes--">getBytes</a></code> in interface <code><a href="../../../com/jbase/jremote/io/IByteObject.html" title="interface in com.jbase.jremote.io">IByteObject</a></code></dd></dl>
        - #### getByteBuffer

```
public ByteBuffer getByteBuffer()                          throws IOException
```

Internal use only - IByteBuffer provide access to internal storage for serialization<dl><dt>Specified by:</dt><dd><code><a href="../../../com/jbase/jremote/io/IByteObject.html#getByteBuffer--">getByteBuffer</a></code> in interface <code><a href="../../../com/jbase/jremote/io/IByteObject.html" title="interface in com.jbase.jremote.io">IByteObject</a></code></dd><dt>Throws:</dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
        - #### setByteBuffer

```
public void setByteBuffer(ByteBuffer byteBuffer)                    throws IOException
```

Internal use only - IByteBuffer provides access to internal storage for serialization<dl><dt>Specified by:</dt><dd><code><a href="../../../com/jbase/jremote/io/IByteObject.html#setByteBuffer-java.nio.ByteBuffer-">setByteBuffer</a></code> in interface <code><a href="../../../com/jbase/jremote/io/IByteObject.html" title="interface in com.jbase.jremote.io">IByteObject</a></code></dd><dt>Throws:</dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
        - #### toString

```
public String toString()
```

Create a String from a JDynArray.<dl><dt>Overrides:</dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#toString--" title="class or interface in java.lang">toString</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true" title="class or interface in java.lang">Object</a></code></dd></dl>
        - #### getNumberOfAttributes

```
public int getNumberOfAttributes()
```
        - #### getNumberOfValues

```
public int getNumberOfValues(int attribute)
```
        - #### getNumberOfSubValues

```
public int getNumberOfSubValues(int attribute,                                 int value)
```
        - #### get

```
public String get(int attribute)
```
        - #### get

```
public String get(int attribute,                   int value)
```
        - #### get

```
public String get(int attribute,                   int value,                   int subvalue)
```
        - #### getBytes

```
protected byte[] getBytes(int attribute)
```
        - #### getBytes

```
protected byte[] getBytes(int attribute,                           int value)
```
        - #### getBytes

```
protected byte[] getBytes(int attribute,                           int value,                           int subvalue)
```
        - #### delete

```
public void delete(int attribute)
```
        - #### delete

```
public void delete(int attribute,                    int value)
```
        - #### delete

```
public void delete(int attribute,                    int value,                    int subvalue)
```
        - #### insert

```
public void insert(String str,                    int attribute)
```
        - #### insert

```
public void insert(String str,                    int attribute,                    int value)
```
        - #### insert

```
public void insert(String str,                    int attribute,                    int value,                    int subvalue)
```
        - #### insertBytes

```
protected void insertBytes(byte[] b,                            int attribute)
```
        - #### insertBytes

```
protected void insertBytes(byte[] b,                            int attribute,                            int value)
```
        - #### insertBytes

```
protected void insertBytes(byte[] b,                            int attribute,                            int value,                            int subvalue)
```
        - #### insertBytes

```
protected void insertBytes(byte[] newBytes)
```
        - #### replace

```
public void replace(String str,                     int attribute)
```
        - #### replace

```
public void replace(String str,                     int attribute,                     int value)
```
        - #### replace

```
public void replace(String str,                     int attribute,                     int value,                     int subvalue)
```
        - #### replaceBytes

```
protected void replaceBytes(byte[] b,                             int attribute)
```
        - #### replaceBytes

```
protected void replaceBytes(byte[] b,                             int attribute,                             int value)
```
        - #### replaceBytes

```
protected void replaceBytes(byte[] b,                             int attribute,                             int value,                             int subvalue)
```
        - #### count

```
public int count(String token,                  int attribute)
```

Return the number of tokens found in the supplied attribute.
        - #### count

```
public int count(String token,                  int attribute,                  int value)
```
        - #### count

```
public int count(String token,                  int attribute,                  int value,                  int subvalue)
```
        - #### count

```
protected int count(byte token,                     int attribute)
```
        - #### count

```
protected int count(byte token,                     int attribute,                     int value)
```
        - #### count

```
protected int count(byte token,                     int attribute,                     int value,                     int subvalue)
```
        - #### count

```
protected int count(byte[] token,                     int attribute)
```
        - #### count

```
protected int count(byte[] token,                     int attribute,                     int value)
```
        - #### count

```
protected int count(byte[] token,                     int attribute,                     int value,                     int subvalue)
```
        - #### insertElement

```
protected void insertElement(byte token,                              int newIndex)
```
        - #### replaceElement

```
protected void replaceElement(byte token,                               int newIndex)
```
        - #### dups

```
protected static byte[] dups(int size,                              byte token)
```
        - #### resetCursor

```
protected void resetCursor()
```
        - #### moveCursorToElement

```
protected boolean moveCursorToElement(byte token,                                       int element)
```
        - #### index

```
public static int index(ByteBuffer bArray,                         byte token,                         int nth,                         int startIndex,                         int endIndex)
```
        - #### index

```
public static int index(ByteBuffer bArray,                         byte[] token,                         int nth,                         int startIndex,                         int endIndex)
```
        - #### lastIndex

```
protected static int lastIndex(ByteBuffer bArray,                                byte token,                                int minIndex,                                int fromIndex)
```
        - #### count

```
protected static int count(ByteBuffer bArray,                            byte token,                            int startIndex,                            int endIndex)
```
        - #### count

```
protected static int count(ByteBuffer bArray,                            byte[] token,                            int startIndex,                            int endIndex)
```
        - #### dcount

```
protected static int dcount(ByteBuffer bArray,                             byte token,                             int startIndex,                             int endIndex)
```
        - #### dcount

```
protected static int dcount(ByteBuffer bArray,                             byte[] token,                             int startIndex,                             int endIndex)
```
        - #### equals

```
public boolean equals(Object other)
```
<dl><dt>Overrides:</dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#equals-java.lang.Object-" title="class or interface in java.lang">equals</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true" title="class or interface in java.lang">Object</a></code></dd></dl>
        - #### hashCode

```
public int hashCode()
```
<dl><dt>Overrides:</dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#hashCode--" title="class or interface in java.lang">hashCode</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true" title="class or interface in java.lang">Object</a></code></dd></dl>

