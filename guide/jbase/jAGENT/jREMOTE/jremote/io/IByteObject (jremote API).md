# IByteObject (jremote API)

**Created At:** 9/25/2017 11:48:20 AM  
**Updated At:** 12/24/2018 8:20:42 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="IByteObject (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":6,"i1":6,"i2":6};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Interface IByteObject

<dl><dt>All Known Implementing Classes:</dt><dd><a href="/39250-io/com_jbase_jremote_io_byteobject" title="class in com.jbase.jremote.io">ByteObject</a>, <a href="/39248-jremote/com_jbase_jremote_JDynArray" title="class in com.jbase.jremote">JDynArray</a></dd></dl>
* * *


```
public interface IByteObject
```

This interface allows a client to optimise the serialization of byte buffers. This may be neccessary to avoid unneccessary copying or creation of byte arrays.

<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `ByteBuffer`<br> | `getByteBuffer()`<br>This method should return a ByteBuffer set to the position to start writing into it.<br> |
| `byte[]`<br> | `getBytes()`<br>Return the bytes backing this IByteObject.<br> |
| `void`<br> | `setByteBuffer(ByteBuffer byteBuffer)`<br>Allow the internal storage to be replaced, as it may be reallocated externally.<br> |

<!--   -->

### Method Detail
<!--   -->
#### getByteBuffer

```
ByteBuffer getByteBuffer()
                  throws IOException
```

This method should return a ByteBuffer set to the position to start writing into it. NOTE - if reading data the ByteBuffer will be expanded to fit the amount of data being read.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>IOException</code></dd></dl>
#### setByteBuffer

```
void setByteBuffer(ByteBuffer byteBuffer)
            throws IOException
```

Allow the internal storage to be replaced, as it may be reallocated externally.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>IOException</code></dd></dl>


#### getBytes

```
byte[] getBytes()
```

Return the bytes backing this IByteObject.
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)
