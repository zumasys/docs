# SQLError (jbasejdbc API)

**Created At:** 9/25/2017 10:54:30 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="SQLError (jbasejdbc   API)";
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
var activeTableTab = "activeTableTab";</script><noscript>&amp;amp;amp;lt;div&amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;lt;/div&amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

# Class SQLError

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></dd></dl>
```
public class SQLError
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

# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>SQLError()<br> |



<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

# Method Summary

| <br>Modifier and Type<br> | <br>Method<br> | Description<br> |
| --- | --- | --- |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>getMessage()<br> | <br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>getSQLClass()<br> | <br> |
| <br>[String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang")<br> | <br>getSQLSubClass()<br> | <br> |
| <br>int<br> | <br>getType()<br> | <br> |
| <br>int<br> | <br>getVersion()<br> | <br> |
| <br>void<br> | <br>readObject([JBaseObjectReader](/39232-io/com_jbase_jdbc_io_jbaseobjectreader "interface in com.jbase.jdbc.io") reader, int version)<br> | Method : readObject()<br>Description: Read object off the wire.<br> |
| <br>void<br> | <br>writeObject([JBaseObjectWriter](/39232-io/com_jbase_jdbc_io_jbaseobjectwriter "interface in com.jbase.jdbc.io") writer, int version)<br> | <br> |


<!--   -->

## 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!-- ========= CONSTRUCTOR DETAIL ======== -->

<!--   -->

# Constructor Detail
<!--   -->
#### **SQLError**

```
public SQLError()
```






<!-- ============ METHOD DETAIL ========== -->
<!--   -->

# Method Detail
<!--   -->
#### **getMessage**

```
public String getMessage()
```


<!--   -->


#### **getSQLClass**

```
public String getSQLClass()
```


<!--   -->


#### **getSQLSubClass**

```
public String getSQLSubClass()
```


<!--   -->


#### **writeObject**

```
public void writeObject(JBaseObjectWriter writer, int version)
                 throws IOException
```
<dl><dt style="margin-left: 60px;"><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 60px;"><code><a href="/39232-io/com_jbase_jdbc_io_JBaseSerializable#writeObject-com.jbase.jdbc.io.JBaseObjectWriter-int-">writeObject</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd><dt style="margin-left: 60px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 60px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### readObject

```
public void readObject(JBaseObjectReader reader, int version)
                throws IOException, ClassNotFoundException
```

**Method:** readObject()

**Description:**Read object off the wire. Note: One day we must convert this to pass C++ strings for its member fields. However, for now, jcf does not support this so pass CVars. <dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code><a href="/39232-io/com_jbase_jdbc_io_JBaseSerializable#readObject-com.jbase.jdbc.io.JBaseObjectReader-int-">readObject</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd>


<!--   -->


#### **getType**

```
public int getType()
```
<dl><dt style="margin-left: 60px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 60px;"><code><a href="/39232-io/com_jbase_jdbc_io_JBaseSerializable#getType--">getType</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd><dt style="margin-left: 60px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 60px;">type id of the objects, used during the serialization</dd></dl>

<!--   -->


#### **getVersion**

```
public int getVersion()
```
<dl><dt style="margin-left: 60px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 60px;"><code><a href="/39232-io/com_jbase_jdbc_io_JBaseSerializable#getVersion--">getVersion</a></code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


