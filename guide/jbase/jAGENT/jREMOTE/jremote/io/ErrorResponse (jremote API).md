# ErrorResponse (jremote API)

**Created At:** 9/25/2017 11:47:11 AM  
**Updated At:** 12/24/2018 8:19:53 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="ErrorResponse (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class ErrorResponse

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></dd></dl>
* * *


```
public class ErrorResponse
extends Response
```

<!--   -->

### Nested Class Summary

- <!--   -->Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`




<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `ErrorResponse()` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `String`<br> | `getMessage()`<br>Methods for non SQL code that expects a message and status.<br> |
| `SQLError`<br> | `getSQLError()` <br> |
| `int`<br> | `getStatus()` <br> |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### ErrorResponse

```
public ErrorResponse()
```




<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>IOException</code></dd></dl><!--   -->
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>IOException</code></dd><dd style="margin-left: 20px;"><code>ClassNotFoundException</code></dd></dl><!--   -->
#### getSQLError

```
public SQLError getSQLError()
```
<!--   -->
#### getMessage

```
public String getMessage()
```

Methods for non SQL code that expects a message and status. New code should get the SQLError and then extract field from it.
<!--   -->
#### getStatus

```
public int getStatus()
```
<!--   -->
#### getType

```
public int getType()
```
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">type id of the objects, used during the serialization</dd></dl><!--   -->
#### getVersion

```
public int getVersion()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->



Back to [jREMOTE API](com_jbase_jremote_package-summary)
