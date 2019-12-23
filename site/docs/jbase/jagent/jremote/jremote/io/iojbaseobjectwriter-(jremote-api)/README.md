# IOJBaseObjectWriter (jremote API)

**Created At:** 9/25/2017 11:51:19 AM  
**Updated At:** 12/24/2018 8:32:12 PM  
**Original Doc:** [com_jbase_jremote_io_iojbaseobjectwriter](https://docs.jbase.com/39250-io/com_jbase_jremote_io_iojbaseobjectwriter)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="IOJBaseObjectWriter (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class IOJBaseObjectWriter

All Implemented Interfaces:[JBaseObjectWriter](./../jbaseobjectwriter-%28jremote-api%29 "interface in com.jbase.jremote.io")
* * *


```
public class IOJBaseObjectWriter
extends AbstractJBaseObjectWriter
```

jBase object writer based on the DataOutputStream.

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `IOJBaseObjectWriter(OutputStream os)` <br> |
| `IOJBaseObjectWriter(OutputStream os, boolean compressed, int compressionThreshold)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `close()` <br> |
| `protected void`<br> | `flush()` <br> |
| `protected void`<br> | `outByte(byte[] b)` <br> |
| `protected void`<br> | `outByte(int b)` <br> |
| `protected void`<br> | `outInt(int i)` <br> |
| `protected void`<br> | `outUTF(String s)`<br>Write a UTF8 string.<br> |


- Methods inherited from class com.jbase.jremote.io.AbstractJBaseObjectWriter
    - `writeInt, writeJBaseSerializableObject, writeObject, writeObject, writeObject, writeObject, writeRootObject`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### IOJBaseObjectWriter

```
public IOJBaseObjectWriter(OutputStream os)
```

#### 


#### IOJBaseObjectWriter

```
public IOJBaseObjectWriter(OutputStream os,
                           boolean compressed,
                           int compressionThreshold)
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
                throws IOException
```
Specified by:`outByte` in class `AbstractJBaseObjectWriter`Throws:`IOException`
#### 


#### outByte

```
protected void outByte(int b)
                throws IOException
```
Specified by:`outByte` in class `AbstractJBaseObjectWriter`Throws:`IOException`
#### 


#### outInt

```
protected void outInt(int i)
               throws IOException
```
Specified by:`outInt` in class `AbstractJBaseObjectWriter`Throws:`IOException`
#### 


#### outUTF

```
protected void outUTF(String s)
               throws IOException
```

Write a UTF8 string. This could be made more efficient by implementing our own UTF8 encoder (or using the DataOutputStream) instead of duplicating the string.
Specified by:`outUTF` in class `AbstractJBaseObjectWriter`Throws:`IOException`

Back to [jREMOTE API](com_jbase_jremote_package-summary)


