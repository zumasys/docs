# ByteObject (jremote API)

**Created At:** 9/25/2017 11:41:02 AM  
**Updated At:** 12/24/2018 8:17:06 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="ByteObject (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class ByteObject

<dl><dt>All Implemented Interfaces:</dt><dd>IByteObject</dd></dl>
* * *


```
public class ByteObject
extends Object
implements IByteObject
```

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `ByteObject()` <br> |
| `ByteObject(byte[] buf)` <br> |
| `ByteObject(int length)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `ByteBuffer`<br> | `getByteBuffer()`<br>This method should return a ByteBuffer set to the position to start writing into it.<br> |
| `byte[]`<br> | `getBytes()`<br>Return the bytes backing this IByteObject.<br> |
| `void`<br> | `setByteBuffer(ByteBuffer byteBuffer)`<br>Allow the internal storage to be replaced, as it may be reallocated externally.<br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->


#### ByteObject

```
public ByteObject()
```


<!--   -->


#### ByteObject

```
public ByteObject(byte[] buf)
```


<!--   -->


#### ByteObject

```
public ByteObject(int length)
```



<!--   -->

### 


### Method Detail
<!--   -->


#### getBytes

```
public byte[] getBytes()
```

Description copied from interface: `IByteObject`

Return the bytes backing this IByteObject.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>getBytes</code> in interface <code>IByteObject</code></dd></dl>
#### getByteBuffer

```
public ByteBuffer getByteBuffer()
                         throws IOException
```

Description copied from interface: `IByteObject`

This method should return a ByteBuffer set to the position to start writing into it. NOTE - if reading data the ByteBuffer will be expanded to fit the amount of data being read.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>getByteBuffer</code> in interface <code>IByteObject</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>IOException</code></dd></dl>


#### setByteBuffer

```
public void setByteBuffer(ByteBuffer byteBuffer)
                   throws IOException
```

Description copied from interface: `IByteObject`

Allow the internal storage to be replaced, as it may be reallocated externally.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>setByteBuffer</code> in interface <code>IByteObject</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>IOException</code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->

Back to [jREMOTE API](com_jbase_jremote_package-summary)
