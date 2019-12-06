# ConvRequest (jremote API)

**Created At:** 9/25/2017 12:18:15 PM  
**Updated At:** 12/24/2018 6:12:03 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="ConvRequest (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class ConvRequest

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></dd></dl>
* * *


```
public class ConvRequest
extends JRemoteRequest
```

<!--   -->

### Nested Class Summary

- <!--   -->Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`




<!--   -->

### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static int`<br> | `ICONV` <br> |
| `static int`<br> | `OCONV` <br> |




<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `ConvRequest()` <br> |
| `ConvRequest(int type, String data, String conversion)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `String`<br> | `getConversion()` <br> |
| `String`<br> | `getData()` <br> |
| `int`<br> | `getType()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- <!--   -->Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
    - `getVersion`


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Field Detail
<!--   -->
#### ICONV

```
public static final int ICONV
```
<dl><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="299736-constant-values" title="">Constant Field Values</a></dd></dl>
#### OCONV

```
public static final int OCONV
```
<dl><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="299736-constant-values" title="">Constant Field Values</a></dd></dl>


<!--   -->

### Constructor Detail
<!--   -->
#### ConvRequest

```
public ConvRequest()
```

#### ConvRequest

```
public ConvRequest(int type,
                   String data,
                   String conversion)
```



<!--   -->

### Method Detail
<!--   -->


#### getType

```
public int getType()
```
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">type id of the objects, used during the serialization</dd></dl>
#### getData

```
public String getData()
```

#### getConversion

```
public String getConversion()
```

#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#writeObject-com.jbase.jremote.io.JBaseObjectWriter-int-">writeObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Overrides:</span></dt><dd style="margin-left: 20px;"><code><a href="/39270-protocol/com_jbase_jremote_protocol_JRemoteRequest#writeObject-com.jbase.jremote.io.JBaseObjectWriter-int-">writeObject</a></code> in class <code><a href="/39270-protocol/com_jbase_jremote_protocol_jremoterequest" title="class in com.jbase.jremote.protocol">JRemoteRequest</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#readObject-com.jbase.jremote.io.JBaseObjectReader-int-">readObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Overrides:</span></dt><dd style="margin-left: 20px;"><code><a href="/39270-protocol/com_jbase_jremote_protocol_JRemoteRequest#readObject-com.jbase.jremote.io.JBaseObjectReader-int-">readObject</a></code> in class <code><a href="/39270-protocol/com_jbase_jremote_protocol_jremoterequest" title="class in com.jbase.jremote.protocol">JRemoteRequest</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)
