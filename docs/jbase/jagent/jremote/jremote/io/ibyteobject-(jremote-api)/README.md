# IByteObject (jremote API)

**Created At:** 9/25/2017 11:48:20 AM  
**Updated At:** 12/24/2018 8:20:42 PM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="IByteObject (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Interface IByteObject

All Known Implementing Classes:[ByteObject](/39250-io/com_jbase_jremote_io_byteobject "class in com.jbase.jremote.io"), [JDynArray](/39248-jremote/com_jbase_jremote_JDynArray "class in com.jbase.jremote")
* * *


```
public interface IByteObject
```

This interface allows a client to optimise the serialization of byte buffers. This may be neccessary to avoid unneccessary copying or creation of byte arrays.

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `ByteBuffer`<br> | `getByteBuffer()`<br>This method should return a ByteBuffer set to the position to start writing into it.<br> |
| `byte[]`<br> | `getBytes()`<br>Return the bytes backing this IByteObject.<br> |
| `void`<br> | `setByteBuffer(ByteBuffer byteBuffer)`<br>Allow the internal storage to be replaced, as it may be reallocated externally.<br> |

### Method Detail

#### getByteBuffer

```
ByteBuffer getByteBuffer()
                  throws IOException
```

This method should return a ByteBuffer set to the position to start writing into it. NOTE - if reading data the ByteBuffer will be expanded to fit the amount of data being read.
Throws:`IOException`
#### setByteBuffer

```
void setByteBuffer(ByteBuffer byteBuffer)
            throws IOException
```

Allow the internal storage to be replaced, as it may be reallocated externally.
Throws:`IOException`


#### getBytes

```
byte[] getBytes()
```

Return the bytes backing this IByteObject.

Back to [jREMOTE API](com_jbase_jremote_package-summary)
