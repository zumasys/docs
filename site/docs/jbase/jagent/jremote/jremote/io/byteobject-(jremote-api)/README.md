# ByteObject (jremote API)

**Created At:** 9/25/2017 11:41:02 AM  
**Updated At:** 12/24/2018 8:17:06 PM  
**Original Doc:** [com_jbase_jremote_io_byteobject](https://docs.jbase.com/39250-io/com_jbase_jremote_io_byteobject)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ByteObject (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class ByteObject

All Implemented Interfaces:IByteObject
* * *


```
public class ByteObject
extends Object
implements IByteObject
```

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `ByteObject()` <br> |
| `ByteObject(byte[] buf)` <br> |
| `ByteObject(int length)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `ByteBuffer`<br> | `getByteBuffer()`<br>This method should return a ByteBuffer set to the position to start writing into it.<br> |
| `byte[]`<br> | `getBytes()`<br>Return the bytes backing this IByteObject.<br> |
| `void`<br> | `setByteBuffer(ByteBuffer byteBuffer)`<br>Allow the internal storage to be replaced, as it may be reallocated externally.<br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail



#### ByteObject

```
public ByteObject()
```





#### ByteObject

```
public ByteObject(byte[] buf)
```





#### ByteObject

```
public ByteObject(int length)
```





### 


### Method Detail



#### getBytes

```
public byte[] getBytes()
```

Description copied from interface: `IByteObject`

Return the bytes backing this IByteObject.
Specified by:`getBytes` in interface `IByteObject`
#### getByteBuffer

```
public ByteBuffer getByteBuffer()
                         throws IOException
```

Description copied from interface: `IByteObject`

This method should return a ByteBuffer set to the position to start writing into it. NOTE - if reading data the ByteBuffer will be expanded to fit the amount of data being read.
Specified by:`getByteBuffer` in interface `IByteObject`Throws:`IOException`


#### setByteBuffer

```
public void setByteBuffer(ByteBuffer byteBuffer)
                   throws IOException
```

Description copied from interface: `IByteObject`

Allow the internal storage to be replaced, as it may be reallocated externally.
Specified by:`setByteBuffer` in interface `IByteObject`Throws:`IOException`



Back to [jREMOTE API](com_jbase_jremote_package-summary)
