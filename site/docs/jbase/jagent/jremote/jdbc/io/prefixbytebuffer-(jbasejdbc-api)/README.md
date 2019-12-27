# PrefixByteBuffer (jbasejdbc API)

**Created At:** 9/25/2017 10:54:17 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_io_prefixbytebuffer](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_prefixbytebuffer)  
**Original ID:** 277913  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="PrefixByteBuffer (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&amp;amp;amp;lt;div&amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;lt;/div&amp;amp;amp;gt;


# Class PrefixByteBuffer

# 

```
public class PrefixByteBuffer
extends Object
```



# Field Summary


| <br>Modifier and Type<br> | <br>Field and Description<br> |
| --- | --- |
| <br>static int<br> | <br>CHUNK\_SIZE<br> |








# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>PrefixByteBuffer()<br> |






# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> | Description<br> |
| --- | --- | --- |
| <br>void<br> | <br>clear()<br> | <br>Method: clear()<br><br>Description: Reset buffer to its empty state.<br> |
| <br>void<br> | <br>flip()<br> | <br>Method: flip()<br><br>Description: Similar the ByteBuffer.flip() but the position must be set back to the start of the prefix.<br> |
| <br>byte[]<br> | <br>getBackingArray()<br> | <br>Method: getBackingArray()<br><br>Description: Returns a pointer to the backing array Note: DANGEROUS.<br> |
| <br>byte<br> | <br>getByte()<br> | <br> |
| <br>void<br> | <br>getBytes(byte[] buf)<br> | <br> |
| <br>void<br> | <br>getBytes([ByteBuffer](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/ByteBuffer.html?is-external=true "class or interface in java.nio") bBuf)<br> | <br> |
| <br>int<br> | <br>getInt()<br> | <br> |
| <br>int<br> | <br>getStartOffset()<br> | <br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>getUTF8()<br> | <br> |
| <br>int<br> | <br>length()<br> | <br> |
| <br>void<br> | <br>pushByte(int b)<br> | <br>Write bytes to start methods<br> |
| <br>void<br> | <br>pushBytes(byte[] b)<br> | <br> |
| <br>void<br> | <br>pushInt(int v)<br> | <br> |
| <br>void<br> | <br>putByte(int b)<br> | <br>Write bytes to end methods<br> |
| <br>void<br> | <br>putBytes(byte[] b)<br> | <br> |
| <br>void<br> | <br>putInt(int v)<br> | <br> |
| <br>void<br> | <br>putUTF8([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") s)<br> | <br> |
| <br>void<br> | <br>readFrom([ByteBuffer](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/ByteBuffer.html?is-external=true "class or interface in java.nio") buf)<br> | <br>Method: readFrom()<br><br>Description: Read a BufferBuffer into self as if it had been received from an InputStream.<br> |
| <br>void<br> | <br>readFrom([InputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/InputStream.html?is-external=true "class or interface in java.io") is, int length)<br> | <br>Method: readFrom()<br><br>Description: Reads a given number of bytes from a given input stream.<br> |
| <br>void<br> | <br>writeTo([ByteBuffer](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/ByteBuffer.html?is-external=true "class or interface in java.nio") buf)<br> | <br> |
| <br>void<br> | <br>writeTo([OutputStream](http://java.sun.com/j2se/1.5.0/docs/api/java/io/OutputStream.html?is-external=true "class or interface in java.io") os)<br> | <br>Method: writeTo()<br><br>Description: Write data to a given OutputStream.<br> |




# 


# Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# Field Detail

#### **CHUNK\_SIZE**

```
public static final int CHUNK_SIZE
```










# Constructor Detail

#### **PrefixByteBuffer**

```
public PrefixByteBuffer()
```







# Method Detail

#### **length**

```
public int length()
```





#### **flip**

```
public void flip()
```



**Description:**Similar the ByteBuffer.flip() but the position must be set back to the start of the prefix.





#### **clear**

```
public void clear()
```



**Description:**Reset buffer to its empty state. Since we will need it again do not loose the backing array.





#### writeTo

```
public void writeTo(OutputStream os)
             throws IOException
```



**Description:** Write data to a given OutputStream. Must be fast so don't use get().
**Throws:**`IOException`




#### **writeTo**

```
public void writeTo(ByteBuffer buf)
```





#### readFrom

```
public void readFrom(InputStream is, int length)
              throws IOException
```



**Description:**Reads a given number of bytes from a given input stream.
**Throws:**`IOException`




#### **readFrom**

```
public void readFrom(ByteBuffer buf)
```



**Description:** Read a BufferBuffer into self as if it had been received from an InputStream. Note: USED ONLY FOR UNIT TESTING.





#### **getBackingArray**

```
public byte[] getBackingArray()
```



**Description:**Returns a pointer to the backing array Note: DANGEROUS. DO NOT MODIFY RETURNED ARRAY.





#### **getStartOffset**

```
public int getStartOffset()
```





#### **putByte**

```
public void putByte(int b)
```



Write bytes to end methods





#### **putBytes**

```
public void putBytes(byte[] b)
```





#### **putUTF8**

```
public void putUTF8(String s)
             throws IOException
```

**Throws:**`IOException`




#### **putInt**

```
public void putInt(int v)
```





#### **pushByte**

```
public void pushByte(int b)
              throws BufferOverflowException
```



Write bytes to start methods
**Throws:**`BufferOverflowException`





#### **pushBytes**

```
public void pushBytes(byte[] b)
               throws BufferOverflowException
```

**Throws:**`BufferOverflowException`




#### **pushInt**

```
public void pushInt(int v)
```





#### **getByte**

```
public byte getByte()
```





#### getInt

```
public int getInt()
```





#### **getBytes**

```
public void getBytes(byte[] buf)
```





#### **getBytes**

```
public void getBytes(ByteBuffer bBuf)
```





#### **getUTF8**

```
public String getUTF8()
               throws IOException
```

**Throws:**`IOException`


