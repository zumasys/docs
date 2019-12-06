# JDynArray (jremote API)

**Created At:** 9/25/2017 12:09:19 PM  
**Updated At:** 12/24/2018 7:11:55 PM  

<noscript>&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JDynArray

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_IByteObject" title="interface in com.jbase.jremote.io">IByteObject</a></dd></dl>
* * *


```
public class JDynArray
extends Object
implements IByteObject
```

The JDynArray is a jBASE type that implements a dynamic string array where attribute, value, and subvalue delimiters mark the array indices.
<dl><dt><br></dt></dl>

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JDynArray()` <br> |
| `JDynArray(byte[] dynArray)` <br> |
| `JDynArray(CharsetEncoder encoder, CharsetDecoder decoder, String strElement)` <br> |
| `JDynArray(Charset cs, String strElement)` <br> |
| `JDynArray(String strElement)`<br>Construct a JDynArray from a String.<br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `protected int`<br> | `count(byte[] token, int attribute)` <br> |
| `protected int`<br> | `count(byte[] token, int attribute, int value)` <br> |
| `protected int`<br> | `count(byte[] token, int attribute, int value, int subvalue)` <br> |
| `protected static int`<br> | `count(ByteBuffer bArray, byte[] token, int startIndex, int endIndex)` <br> |
| `protected static int`<br> | `count(ByteBuffer bArray, byte token, int startIndex, int endIndex)` <br> |
| `protected int`<br> | `count(byte token, int attribute)` <br> |
| `protected int`<br> | `count(byte token, int attribute, int value)` <br> |
| `protected int`<br> | `count(byte token, int attribute, int value, int subvalue)` <br> |
| `int`<br> | `count(String token, int attribute)`<br>Return the number of tokens found in the supplied attribute.<br> |
| `int`<br> | `count(String token, int attribute, int value)` <br> |
| `int`<br> | `count(String token, int attribute, int value, int subvalue)` <br> |
| `protected static int`<br> | `dcount(ByteBuffer bArray, byte[] token, int startIndex, int endIndex)` <br> |
| `protected static int`<br> | `dcount(ByteBuffer bArray, byte token, int startIndex, int endIndex)` <br> |
| `void`<br> | `delete(int attribute)` <br> |
| `void`<br> | `delete(int attribute, int value)` <br> |
| `void`<br> | `delete(int attribute, int value, int subvalue)` <br> |
| `protected static byte[]`<br> | `dups(int size, byte token)` <br> |
| `boolean`<br> | `equals(Object other)` <br> |
| `String`<br> | `get(int attribute)` <br> |
| `String`<br> | `get(int attribute, int value)` <br> |
| `String`<br> | `get(int attribute, int value, int subvalue)` <br> |
| `ByteBuffer`<br> | `getByteBuffer()`<br>Internal use only - IByteBuffer provide access to internal storage for serialization<br> |
| `byte[]`<br> | `getBytes()`<br>Return the bytes backing this IByteObject.<br> |
| `protected byte[]`<br> | `getBytes(int attribute)` <br> |
| `protected byte[]`<br> | `getBytes(int attribute, int value)` <br> |
| `protected byte[]`<br> | `getBytes(int attribute, int value, int subvalue)` <br> |
| `protected int`<br> | `getEndIndex()` <br> |
| `int`<br> | `getNumberOfAttributes()` <br> |
| `int`<br> | `getNumberOfSubValues(int attribute, int value)` <br> |
| `int`<br> | `getNumberOfValues(int attribute)` <br> |
| `protected int`<br> | `getStartIndex()` <br> |
| `int`<br> | `hashCode()` <br> |
| `static int`<br> | `index(ByteBuffer bArray, byte[] token, int nth, int startIndex, int endIndex)` <br> |
| `static int`<br> | `index(ByteBuffer bArray, byte token, int nth, int startIndex, int endIndex)` <br> |
| `void`<br> | `insert(String str, int attribute)` <br> |
| `void`<br> | `insert(String str, int attribute, int value)` <br> |
| `void`<br> | `insert(String str, int attribute, int value, int subvalue)` <br> |
| `protected void`<br> | `insertBytes(byte[] newBytes)` <br> |
| `protected void`<br> | `insertBytes(byte[] b, int attribute)` <br> |
| `protected void`<br> | `insertBytes(byte[] b, int attribute, int value)` <br> |
| `protected void`<br> | `insertBytes(byte[] b, int attribute, int value, int subvalue)` <br> |
| `protected void`<br> | `insertElement(byte token, int newIndex)` <br> |
| `protected static int`<br> | `lastIndex(ByteBuffer bArray, byte token, int minIndex, int fromIndex)` <br> |
| `protected boolean`<br> | `moveCursorToElement(byte token, int element)` <br> |
| `void`<br> | `replace(String str, int attribute)` <br> |
| `void`<br> | `replace(String str, int attribute, int value)` <br> |
| `void`<br> | `replace(String str, int attribute, int value, int subvalue)` <br> |
| `protected void`<br> | `replaceBytes(byte[] b, int attribute)` <br> |
| `protected void`<br> | `replaceBytes(byte[] b, int attribute, int value)` <br> |
| `protected void`<br> | `replaceBytes(byte[] b, int attribute, int value, int subvalue)` <br> |
| `protected void`<br> | `replaceElement(byte token, int newIndex)` <br> |
| `protected void`<br> | `resetCursor()` <br> |
| `void`<br> | `setByteBuffer(ByteBuffer byteBuffer)`<br>Internal use only - IByteBuffer provides access to internal storage for serialization<br> |
| `void`<br> | `setCharset(Charset charset)` <br> |
| `void`<br> | `setCharsetDecoder(CharsetDecoder decoder)` <br> |
| `void`<br> | `setCharsetEncoder(CharsetEncoder encoder)` <br> |
| `protected void`<br> | `setEndIndex(int idx)` <br> |
| `protected void`<br> | `setStartIndex(int idx)` <br> |
| `String`<br> | `toString()`<br>Create a String from a JDynArray.<br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, finalize, getClass, notify, notifyAll, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### JDynArray

```
public JDynArray()
```

#### 

#### 


#### JDynArray

```
public JDynArray(byte[] dynArray)
```

#### 

#### 


#### JDynArray

```
public JDynArray(String strElement)
```

Construct a JDynArray from a String. This is equivalent to JDynArray.replace("Your String", 1)
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>strElement</code> -</dd></dl>
#### 

#### 


#### JDynArray

```
public JDynArray(Charset cs,
                 String strElement)
```

#### 

#### 


#### JDynArray

```
public JDynArray(CharsetEncoder encoder,
                 CharsetDecoder decoder,
                 String strElement)
```



<!--   -->

### Method Detail
<!--   -->
#### setCharset

```
public void setCharset(Charset charset)
```

#### 

#### 


#### setCharsetEncoder

```
public void setCharsetEncoder(CharsetEncoder encoder)
```

#### 

#### 


#### setCharsetDecoder

```
public void setCharsetDecoder(CharsetDecoder decoder)
```

#### 

#### 


#### getStartIndex

```
protected int getStartIndex()
```

#### 

#### 


#### getEndIndex

```
protected int getEndIndex()
```

#### 

#### 


#### setStartIndex

```
protected void setStartIndex(int idx)
```

#### 

#### 


#### setEndIndex

```
protected void setEndIndex(int idx)
```

#### 

#### 


#### getBytes

```
public byte[] getBytes()
```

Description copied from interface: `IByteObject`

Return the bytes backing this IByteObject.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_IByteObject#getBytes--">getBytes</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_IByteObject" title="interface in com.jbase.jremote.io">IByteObject</a></code></dd></dl>
#### 

#### 


#### getByteBuffer

```
public ByteBuffer getByteBuffer()
                         throws IOException
```

Internal use only - IByteBuffer provide access to internal storage for serialization
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_IByteObject#getByteBuffer--">getByteBuffer</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_IByteObject" title="interface in com.jbase.jremote.io">IByteObject</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
#### 

#### 


#### setByteBuffer

```
public void setByteBuffer(ByteBuffer byteBuffer)
                   throws IOException
```

Internal use only - IByteBuffer provides access to internal storage for serialization
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_IByteObject#setByteBuffer-java.nio.ByteBuffer-">setByteBuffer</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_IByteObject" title="interface in com.jbase.jremote.io">IByteObject</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
#### 

#### 


#### toString

```
public String toString()
```

Create a String from a JDynArray.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Overrides:</span></dt><dd style="margin-left: 20px;"><code>toString</code> in class <code>Object</code></dd></dl>
#### 

#### 


#### getNumberOfAttributes

```
public int getNumberOfAttributes()
```

#### 

#### 


#### getNumberOfValues

```
public int getNumberOfValues(int attribute)
```
<!--   -->
#### 


#### getNumberOfSubValues

```
public int getNumberOfSubValues(int attribute,
                                int value)
```

#### 

#### 


#### get

```
public String get(int attribute)
```
<!--   -->
#### 


#### get

```
public String get(int attribute,
                  int value)
```
<!--   -->
#### 


#### get

```
public String get(int attribute,
                  int value,
                  int subvalue)
```
<!--   -->
#### 


#### getBytes

```
protected byte[] getBytes(int attribute)
```
<!--   -->
#### 


#### getBytes

```
protected byte[] getBytes(int attribute,
                          int value)
```
<!--   -->
#### 


#### getBytes

```
protected byte[] getBytes(int attribute,
                          int value,
                          int subvalue)
```
<!--   -->
#### 


#### delete

```
public void delete(int attribute)
```
<!--   -->
#### 


#### delete

```
public void delete(int attribute,
                   int value)
```
<!--   -->
#### 


#### delete

```
public void delete(int attribute,
                   int value,
                   int subvalue)
```
<!--   -->
#### 


#### insert

```
public void insert(String str,
                   int attribute)
```
<!--   -->
#### 


#### insert

```
public void insert(String str,
                   int attribute,
                   int value)
```
<!--   -->
#### 


#### insert

```
public void insert(String str,
                   int attribute,
                   int value,
                   int subvalue)
```
<!--   -->
#### 


#### insertBytes

```
protected void insertBytes(byte[] b,
                           int attribute)
```
<!--   -->
#### 


#### insertBytes

```
protected void insertBytes(byte[] b,
                           int attribute,
                           int value)
```
<!--   -->
#### 


#### insertBytes

```
protected void insertBytes(byte[] b,
                           int attribute,
                           int value,
                           int subvalue)
```
<!--   -->
#### 


#### insertBytes

```
protected void insertBytes(byte[] newBytes)
```
<!--   -->
#### 


#### replace

```
public void replace(String str,
                    int attribute)
```
<!--   -->
#### 


#### replace

```
public void replace(String str,
                    int attribute,
                    int value)
```
<!--   -->
#### 


#### replace

```
public void replace(String str,
                    int attribute,
                    int value,
                    int subvalue)
```
<!--   -->
#### 


#### replaceBytes

```
protected void replaceBytes(byte[] b,
                            int attribute)
```
<!--   -->
#### 


#### replaceBytes

```
protected void replaceBytes(byte[] b,
                            int attribute,
                            int value)
```
<!--   -->
#### 


#### replaceBytes

```
protected void replaceBytes(byte[] b,
                            int attribute,
                            int value,
                            int subvalue)
```
<!--   -->
#### 


#### count

```
public int count(String token,
                 int attribute)
```

Return the number of tokens found in the supplied attribute.
<!--   -->
#### 


#### count

```
public int count(String token,
                 int attribute,
                 int value)
```
<!--   -->
#### 


#### count

```
public int count(String token,
                 int attribute,
                 int value,
                 int subvalue)
```
<!--   -->
#### 


#### count

```
protected int count(byte token,
                    int attribute)
```
<!--   -->
#### 


#### count

```
protected int count(byte token,
                    int attribute,
                    int value)
```
<!--   -->
#### 


#### count

```
protected int count(byte token,
                    int attribute,
                    int value,
                    int subvalue)
```
<!--   -->
#### 


#### count

```
protected int count(byte[] token,
                    int attribute)
```
<!--   -->
#### 


#### count

```
protected int count(byte[] token,
                    int attribute,
                    int value)
```
<!--   -->
#### 


#### count

```
protected int count(byte[] token,
                    int attribute,
                    int value,
                    int subvalue)
```
<!--   -->
#### 


#### insertElement

```
protected void insertElement(byte token,
                             int newIndex)
```
<!--   -->
#### 


#### replaceElement

```
protected void replaceElement(byte token,
                              int newIndex)
```
<!--   -->
#### 


#### dups

```
protected static byte[] dups(int size,
                             byte token)
```
<!--   -->
#### 


#### resetCursor

```
protected void resetCursor()
```
<!--   -->
#### 


#### moveCursorToElement

```
protected boolean moveCursorToElement(byte token,
                                      int element)
```
<!--   -->
#### 


#### index

```
public static int index(ByteBuffer bArray,
                        byte token,
                        int nth,
                        int startIndex,
                        int endIndex)
```
<!--   -->
#### 


#### index

```
public static int index(ByteBuffer bArray,
                        byte[] token,
                        int nth,
                        int startIndex,
                        int endIndex)
```
<!--   -->
#### 


#### lastIndex

```
protected static int lastIndex(ByteBuffer bArray,
                               byte token,
                               int minIndex,
                               int fromIndex)
```

#### 


#### count

```
protected static int count(ByteBuffer bArray,
                           byte token,
                           int startIndex,
                           int endIndex)
```
<!--   -->
#### 


#### count

```
protected static int count(ByteBuffer bArray,
                           byte[] token,
                           int startIndex,
                           int endIndex)
```
<!--   -->
#### 


#### dcount

```
protected static int dcount(ByteBuffer bArray,
                            byte token,
                            int startIndex,
                            int endIndex)
```
<!--   -->
#### 


#### dcount

```
protected static int dcount(ByteBuffer bArray,
                            byte[] token,
                            int startIndex,
                            int endIndex)
```

#### 

#### 


#### equals

```
public boolean equals(Object other)
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Overrides:</span></dt><dd style="margin-left: 20px;"><code>equals</code> in class <code>Object</code></dd></dl>
#### 

#### 


#### hashCode

```
public int hashCode()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Overrides:</span></dt><dd style="margin-left: 20px;"><code>hashCode</code> in class <code>Object</code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)
