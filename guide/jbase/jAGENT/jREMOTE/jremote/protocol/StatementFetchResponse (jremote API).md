# StatementFetchResponse (jremote API)

**Created At:** 9/25/2017 12:22:16 PM  
**Updated At:** 4/4/2018 11:38:40 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="StatementFetchResponse (jremote   API)";
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

## Class StatementFetchResponse

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></dd></dl>
* * *


```
public class StatementFetchResponse
extends JRemoteResponse
```
<dl><dt><br></dt></dl>

<!--   -->

### Nested Class Summary

- <!--   -->Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`




<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `StatementFetchResponse()` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JSubroutineParameters`<br> | `getRows()` <br> |
| `int`<br> | `getStatus()` <br> |
| `int`<br> | `getType()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- <!--   -->Methods inherited from class com.jbase.jremote.protocol.JRemoteResponse
    - `getVersion`
- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### StatementFetchResponse

```
public StatementFetchResponse()
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### getStatus

```
public int getStatus()
```
<!--   -->
#### getRows

```
public JSubroutineParameters getRows()
```
<!--   -->
#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl><!--   -->
#### getType

```
public int getType()
```
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">type id of the objects, used during the serialization</dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#getType--"><code>JBaseSerializable.getType()</code></a></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)


