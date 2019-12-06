# LoggingRequest (jbasejdbc API)

**Created At:** 9/25/2017 11:02:28 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="LoggingRequest (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

# Class LoggingRequest

<dt>All Implemented Interfaces:</dt><dd><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></dd>


```
public class LoggingRequest
extends Object
implements JBaseSerializable
```

<!-- ======== NESTED CLASS SUMMARY ======== -->

<!--   -->

# Nested Class Summary

<!--   -->

## Nested classes/interfaces inherited from interface com.jbase.jdbc.io.JBaseSerializable
`JBaseSerializable.TYPE`

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
<!--   -->

# 


# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>`LoggingRequest(String info)`<br> |
| <br>`LoggingRequest(String info, int level)`<br> |



<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>`int`<br> | <br>`getType()`<br> |
| <br>`int`<br> | <br>`getVersion()`<br> |
| <br>`void`<br> | <br>`readObject(JBaseObjectReader reader, int version)`<br> |
| <br>`void`<br> | <br>`writeObject(JBaseObjectWriter writer, int version)`<br> |


<!--   -->

## 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!-- ========= CONSTRUCTOR DETAIL ======== -->

<!--   -->

# Constructor Detail
<!--   -->
#### **LoggingRequest**

```
public LoggingRequest(String info, int level)
```




<!--   -->
#### **LoggingRequest**

```
public LoggingRequest(String info)
```




<!-- ============ METHOD DETAIL ========== -->
<!--   -->

# Method Detail
<!--   -->
#### **getType**

```
public int getType()
```
<dl><dt style="margin-left: 40px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getType</code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">type id of the objects, used during the serialization</dd></dl>



<!--   -->


#### **getVersion**

```
public int getVersion()
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getVersion</code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd></dl>

<!--   -->


#### **readObject**

```
public void readObject(JBaseObjectReader reader, int version)
                throws IOException, ClassNotFoundException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>readObject</code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

<!--   -->


#### **writeObject**

```
public void writeObject(JBaseObjectWriter writer, int version)
                 throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>writeObject</code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
