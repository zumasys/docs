# NIOJBaseObjectWriter (jremote API)

**Created At:** 9/25/2017 11:53:18 AM  
**Updated At:** 12/24/2018 6:10:13 PM  
**Original Doc:** [com_jbase_jremote_io_niojbaseobjectwriter](https://docs.jbase.com/39250-io/com_jbase_jremote_io_niojbaseobjectwriter)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="NIOJBaseObjectWriter (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class NIOJBaseObjectWriter

All Implemented Interfaces:[JBaseObjectWriter](/39250-io/com_jbase_jremote_io_jbaseobjectwriter "interface in com.jbase.jremote.io")
* * *


```
public class NIOJBaseObjectWriter
extends AbstractJBaseObjectWriter
```

jBase object writer using the new Java IO.

### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static long`<br> | `WRITE_TIMEOUT`<br>The temporary selectors write timeout.<br> |






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `NIOJBaseObjectWriter(SocketChannel socketChannel)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `protected void`<br> | `checkBuffer(int newDataLength)` <br> |
| `void`<br> | `close()` <br> |
| `protected void`<br> | `flush()` <br> |
| `protected void`<br> | `outByte(byte[] b)` <br> |
| `protected void`<br> | `outByte(int b)` <br> |
| `protected void`<br> | `outInt(int i)` <br> |
| `protected void`<br> | `outUTF(String s)` <br> |
| `void`<br> | `setSocketChannel(SocketChannel socketChannel)` <br> |


- Methods inherited from class com.jbase.jremote.io.AbstractJBaseObjectWriter
    - `writeInt, writeJBaseSerializableObject, writeObject, writeObject, writeObject, writeObject, writeRootObject`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### WRITE\_TIMEOUT

```
public static final long WRITE_TIMEOUT
```

The temporary selectors write timeout. 30 seconds.
See Also:[Constant Field Values](299736-constant-values)


### 


### Constructor Detail

#### NIOJBaseObjectWriter

```
public NIOJBaseObjectWriter(SocketChannel socketChannel)
```



### 


### Method Detail

#### close

```
public void close()
           throws IOException
```
Throws:`IOException`
#### 


#### flush

```
protected void flush()
              throws IOException
```
Specified by:`flush` in class `AbstractJBaseObjectWriter`Throws:`IOException`
#### 


#### outByte

```
protected void outByte(byte[] b)
```
Specified by:`outByte` in class `AbstractJBaseObjectWriter`
#### 


#### outByte

```
protected void outByte(int b)
```
Specified by:`outByte` in class `AbstractJBaseObjectWriter`
#### 


#### outInt

```
protected void outInt(int i)
```
Specified by:`outInt` in class `AbstractJBaseObjectWriter`
#### 


#### outUTF

```
protected void outUTF(String s)
```
Specified by:`outUTF` in class `AbstractJBaseObjectWriter`
#### 


#### checkBuffer

```
protected void checkBuffer(int newDataLength)
```

#### 


#### setSocketChannel

```
public void setSocketChannel(SocketChannel socketChannel)
```

Back to [jREMOTE API](com_jbase_jremote_package-summary)


