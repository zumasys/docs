# AbstractJBaseObjectWriter (jremote API)

**Created At:** 9/25/2017 11:40:49 AM  
**Updated At:** 4/5/2018 11:08:32 PM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="AbstractJBaseObjectWriter (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6,"i3":6,"i4":6,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class AbstractJBaseObjectWriter

All Implemented Interfaces:[JBaseObjectWriter](/39250-io/com_jbase_jremote_io_jbaseobjectwriter "interface in com.jbase.jremote.io")Direct Known Subclasses:[IOJBaseObjectWriter](/39250-io/com_jbase_jremote_io_iojbaseobjectwriter "class in com.jbase.jremote.io"), [NIOJBaseObjectWriter](/39250-io/com_jbase_jremote_io_niojbaseobjectwriter "class in com.jbase.jremote.io")
* * *


```
public abstract class AbstractJBaseObjectWriter
extends Object
implements JBaseObjectWriter
```

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `AbstractJBaseObjectWriter()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `protected abstract void`<br> | `flush()` <br> |
| `protected abstract void`<br> | `outByte(byte[] b)` <br> |
| `protected abstract void`<br> | `outByte(int b)` <br> |
| `protected abstract void`<br> | `outInt(int i)` <br> |
| `protected abstract void`<br> | `outUTF(String s)` <br> |
| `void`<br> | `writeInt(int i)` <br> |
| `protected void`<br> | `writeJBaseSerializableObject(JBaseSerializable o)` <br> |
| `void`<br> | `writeObject(byte[] data)` <br> |
| `void`<br> | `writeObject(IByteObject o)` <br> |
| `void`<br> | `writeObject(JBaseSerializable o)` <br> |
| `void`<br> | `writeObject(String o)` <br> |
| `void`<br> | `writeRootObject(JBaseSerializable o)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- Methods inherited from interface com.jbase.jremote.io.JBaseObjectWriter
    - `close`

### Constructor Detail

#### AbstractJBaseObjectWriter

```
public AbstractJBaseObjectWriter()
```





### 


### Method Detail

#### outByte

```
protected abstract void outByte(byte[] b)
                         throws IOException
```
Throws:`IOException`
#### 


#### outByte

```
protected abstract void outByte(int b)
                         throws IOException
```
Throws:`IOException`
#### 


#### outInt

```
protected abstract void outInt(int i)
                        throws IOException
```
Throws:`IOException`
#### 


#### outUTF

```
protected abstract void outUTF(String s)
                        throws IOException
```
Throws:`IOException`
#### 


#### flush

```
protected abstract void flush()
                       throws IOException
```
Throws:`IOException`
#### 


#### writeInt

```
public void writeInt(int i)
              throws IOException
```
Specified by:`writeInt` in interface `JBaseObjectWriter`Throws:`IOException`
#### 


#### writeObject

```
public void writeObject(String o)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`
#### 


#### writeObject

```
public void writeObject(byte[] data)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`
#### 


#### writeObject

```
public void writeObject(IByteObject o)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`
#### 


#### writeObject

```
public void writeObject(JBaseSerializable o)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseObjectWriter`Throws:`IOException`
#### 


#### writeJBaseSerializableObject

```
protected void writeJBaseSerializableObject(JBaseSerializable o)
                                     throws IOException
```
Throws:`IOException`
#### 


#### writeRootObject

```
public void writeRootObject(JBaseSerializable o)
                     throws IOException
```
Specified by:`writeRootObject` in interface `JBaseObjectWriter`Throws:`IOException`

Back to [jREMOTE API](com_jbase_jremote_package-summary)


