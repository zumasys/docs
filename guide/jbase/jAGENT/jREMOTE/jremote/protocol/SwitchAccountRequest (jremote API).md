# SwitchAccountRequest (jremote API)

**Created At:** 9/25/2017 12:22:29 PM  
**Updated At:** 4/4/2018 9:24:51 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="SwitchAccountRequest (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class SwitchAccountRequest

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></dd></dl>
* * *


```
public class SwitchAccountRequest
extends JRemoteRequest
```

<!--   -->

### Nested Class Summary

- <!--   -->Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`




<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `SwitchAccountRequest()` <br> |
| `SwitchAccountRequest(String user, String account, String password)` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `String`<br> | `getAccount()` <br> |
| `String`<br> | `getPassword()` <br> |
| `int`<br> | `getType()` <br> |
| `String`<br> | `getUser()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- <!--   -->Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
    - `getVersion`
- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### SwitchAccountRequest

```
public SwitchAccountRequest()
```
<!--   -->
#### SwitchAccountRequest

```
public SwitchAccountRequest(String user,
                            String account,
                            String password)
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### getUser

```
public String getUser()
```
<!--   -->
#### getAccount

```
public String getAccount()
```
<!--   -->
#### getPassword

```
public String getPassword()
```
<!--   -->
#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#writeObject-com.jbase.jremote.io.JBaseObjectWriter-int-">writeObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Overrides:</span></dt><dd style="margin-left: 20px;"><code><a href="/39270-protocol/com_jbase_jremote_protocol_jremoterequest#writeObject-com.jbase.jremote.io.JBaseObjectWriter-int-">writeObject</a></code> in class <code><a href="/39270-protocol/com_jbase_jremote_protocol_jremoterequest" title="class in com.jbase.jremote.protocol">JRemoteRequest</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#readObject-com.jbase.jremote.io.JBaseObjectReader-int-">readObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Overrides:</span></dt><dd style="margin-left: 20px;"><code><a href="/39270-protocol/com_jbase_jremote_protocol_jremoterequest#readObject-com.jbase.jremote.io.JBaseObjectReader-int-">readObject</a></code> in class <code><a href="/39270-protocol/com_jbase_jremote_protocol_jremoterequest" title="class in com.jbase.jremote.protocol">JRemoteRequest</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl><!--   -->
#### getType

```
public int getType()
```
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">type id of the objects, used during the serialization</dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#getType--"><code>JBaseSerializable.getType()</code></a></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)


