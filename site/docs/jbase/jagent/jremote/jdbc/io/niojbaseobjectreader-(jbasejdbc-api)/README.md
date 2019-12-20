# NIOJBaseObjectReader (jbasejdbc API)

**Created At:** 9/25/2017 10:53:26 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_io_niojbaseobjectreader](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_niojbaseobjectreader)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="NIOJBaseObjectReader (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



# Class NIOJBaseObjectReader

All Implemented Interfaces:[JBaseObjectReader](/39232-io/com_jbase_jdbc_io_jbaseobjectreader "interface in com.jbase.jdbc.io")
```
public class NIOJBaseObjectReader
extends AbstractJBaseObjectReader
```

jBase object reader based on the new Java IO.

# Field Summary


| <br>Modifier and Type<br> | <br>Field<br> | Description<br> |
| --- | --- | --- |
| <br>`static long`<br> | <br>`READ_TIMEOUT`<br> | <br>``The temporary selectors read timeout.<br> |




### 


## Fields inherited from class com.jbase.jdbc.io.AbstractJBaseObjectReader
`log`








# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>NIOJBaseObjectReader([ObjectFactory](/39232-io/com_jbase_jdbc_io_objectfactory "class in com.jbase.jdbc.io") factory, [SocketChannel](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/channels/SocketChannel.html?is-external=true "class or interface in java.nio.channels") channel)<br> |






# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> |  Description<br> |
| --- | --- | --- |
| <br>protected void<br> | <br>checkBuffer(int newDataLength)<br> | <br> |
| <br>void<br> | <br>close()<br> | <br> |
| <br>protected int<br> | <br>doRead(int numberOfBytes)<br> | <br>Read bytes using the read a temporary Selector<br> |
| <br>protected byte<br> | <br>getByte()<br> | <br> |
| <br>protected int<br> | <br>getBytes(byte[] buf)<br> | <br> |
| <br>protected int<br> | <br>getBytes([ByteBuffer](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/ByteBuffer.html?is-external=true "class or interface in java.nio") bBuf)<br> | <br> |
| <br>protected int<br> | <br>getInt()<br> | <br> |
| <br>[ObjectFactory](/39232-io/com_jbase_jdbc_io_objectfactory "class in com.jbase.jdbc.io")<br> | <br>getObjectFactory()<br> | <br>This method must be implemented by concrete ObjectReaders.<br> |
| <br>protected int<br> | <br>inBytes(int numberOfBytesToRead)<br> | <br> |
| <br>boolean<br> | <br>isClosed()<br> | <br> |
| <br>protected [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>readUTF()<br> | <br> |
| <br>void<br> | <br>setSocketChannel([SocketChannel](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/channels/SocketChannel.html?is-external=true "class or interface in java.nio.channels") socketChannel)<br> | <br> |




### 


## Methods inherited from class com.jbase.jdbc.io.AbstractJBaseObjectReader
`bufferedRead, checkBuffer, readByteObject, readBytes, readInt, readJBaseSerializableObject, readObject, readObject, readObject, readRootObject, readString`







## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# Field Detail

#### **READ\_TIMEOUT**

```
public static final long READ_TIMEOUT
```



The temporary selectors read timeout. 30 seconds.






# Constructor Detail

#### **NIOJBaseObjectReader**

```
public NIOJBaseObjectReader(ObjectFactory factory, SocketChannel channel)
```







# Method Detail

#### **getObjectFactory**

```
public ObjectFactory getObjectFactory()
```



Description copied from class: `AbstractJBaseObjectReader`

This method must be implemented by concrete ObjectReaders.

**Specified by:**`getObjectFactory` in class `AbstractJBaseObjectReader`
**Returns:**an instance of a class implementing JBaseSerializable




#### **close**

```
public void close()
           throws IOException
```

**Specified by:**`close` in interface `JBaseObjectReader`
**Specified by:**`close` in class `AbstractJBaseObjectReader`
**Throws:**`IOException`




#### **getByte**

```
protected byte getByte()
                throws IOException
```

**Specified by:**`getByte` in class `AbstractJBaseObjectReader`
**Throws:**`IOException`




#### **getInt**

```
protected int getInt()
              throws IOException
```

**Specified by:**`getInt` in class `AbstractJBaseObjectReader`
**Throws:**`IOException`




#### **getBytes**

```
protected int getBytes(byte[] buf)
                throws IOException
```

**Specified by:**`getBytes` in class `AbstractJBaseObjectReader`
**Throws:**`IOException`




#### **getBytes**

```
protected int getBytes(ByteBuffer bBuf)
                throws IOException
```

**Specified by:**`getBytes` in class `AbstractJBaseObjectReader`
**Throws:**`IOException`




#### **inBytes**

```
protected int inBytes(int numberOfBytesToRead)
               throws IOException
```

**Specified by:**`inBytes` in class `AbstractJBaseObjectReader`
**Throws:**`IOException`




#### **readUTF**

```
protected String readUTF()
                  throws IOException
```

**Specified by:**`readUTF` in class `AbstractJBaseObjectReader`
**Throws:**`IOException`




#### **doRead**

```
protected int doRead(int numberOfBytes)
              throws IOException
```



Read bytes using the read a temporary Selector
**Throws:**`IOException`




#### **checkBuffer**

```
protected void checkBuffer(int newDataLength)
```





#### **isClosed**

```
public boolean isClosed()
```





#### **setSocketChannel**

```
public void setSocketChannel(SocketChannel socketChannel)
```


