# NIOJBaseObjectWriter (jbasejdbc   API)

**Created At:** 9/25/2017 10:53:32 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_io_niojbaseobjectwriter](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_niojbaseobjectwriter)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="NIOJBaseObjectWriter (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&amp;amp;amp;amp;lt;div&amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;gt;


# Class NIOJBaseObjectWriter

All Implemented Interfaces:
[JBaseObjectWriter](./../jbaseobjectwriter-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")


```
public class NIOJBaseObjectWriter
extends AbstractJBaseObjectWriter
```

jBase object writer using the new Java IO.

# Field Summary


| <br>Modifier and Type<br> | <br>Field<br> | Description<br> |
| --- | --- | --- |
| <br>`static long`<br> | <br>WRITE\_TIMEOUT<br> | <br>The temporary selectors write timeout.<br> |








# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>NIOJBaseObjectWriter([SocketChannel](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/channels/SocketChannel.html?is-external=true "class or interface in java.nio.channels") socketChannel)<br> |






# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>protected void<br> | <br>checkBuffer(int newDataLength)<br> |
| <br>void<br> | <br>close()<br> |
| <br>protected void<br> | <br>flush()<br> |
| <br>protected void<br> | <br>outByte(byte[] b)<br> |
| <br>protected void<br> | <br>outByte(int b)<br> |
| <br>protected void<br> | <br>outInt(int i)<br> |
| <br>protected void<br> | <br>outUTF([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") s)<br> |
| <br>void<br> | <br>setSocketChannel([SocketChannel](http://java.sun.com/j2se/1.5.0/docs/api/java/nio/channels/SocketChannel.html?is-external=true "class or interface in java.nio.channels") socketChannel)<br> |




## 


## Methods inherited from class com.jbase.jdbc.io.AbstractJBaseObjectWriter
`writeInt, writeJBaseSerializableObject, writeObject, writeObject, writeObject, writeObject, writeRootObject`



## 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# Field Detail

#### **WRITE\_TIMEOUT**

```
public static final long WRITE_TIMEOUT
```



The temporary selectors write timeout. 30 seconds.







# Constructor Detail

#### **NIOJBaseObjectWriter**

```
public NIOJBaseObjectWriter(SocketChannel socketChannel)
```







# Method Detail

#### **close**

```
public void close()
           throws IOException
```

**Throws:**`IOException`




#### **flush**

```
protected void flush()
              throws IOException
```

**Specified by:**`flush` in class `AbstractJBaseObjectWriter`
**Throws:**`IOException`




#### **outByte**

```
protected void outByte(byte[] b)
```


**Specified by:**`outByte` in class `AbstractJBaseObjectWriter`


#### 


#### **outByte**

```
protected void outByte(int b)
```

**Specified by:**`outByte` in class `AbstractJBaseObjectWriter`




#### **outInt**

```
protected void outInt(int i)
```

**Specified by:**`outInt` in class `AbstractJBaseObjectWriter`




#### **outUTF**

```
protected void outUTF(String s)
```

**Specified by:**`outUTF` in class `AbstractJBaseObjectWriter`




#### **checkBuffer**

```
protected void checkBuffer(int newDataLength)
```





#### **setSocketChannel**

```
public void setSocketChannel(SocketChannel socketChannel)
```


