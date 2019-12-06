# TransactionRequest (jbasejdbc API)

**Created At:** 9/25/2017 11:05:21 AM  
**Updated At:** 4/3/2018 10:13:06 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="TransactionRequest (jbasejdbc   API)";
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
var activeTableTab = "activeTableTab";</script><noscript>&amp;lt;a name="navbar.top"&amp;gt;&amp;lt;/a&amp;gt;&amp;lt;a name="navbar.top.firstrow"&amp;gt;&amp;lt;/a&amp;gt;</noscript>
# Class TransactionRequest

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></dd></dl><dl><dt>Direct Known Subclasses:</dt><dd><a href="/39240-protocol/com_jbase_jdbc_protocol_transactioncommitrequest" title="class in com.jbase.jdbc.protocol">TransactionCommitRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_transactionrollbackrequest" title="class in com.jbase.jdbc.protocol">TransactionRollbackRequest</a>, <a href="/39240-protocol/com_jbase_jdbc_protocol_transactionstartrequest" title="class in com.jbase.jdbc.protocol">TransactionStartRequest</a></dd></dl>
```
public class TransactionRequest
extends Object
implements JBaseSerializable
```



# <!--   -->

# Nested Class Summary

<!--   -->

### Nested classes/interfaces inherited from interface com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
`JBaseSerializable.TYPE`

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
<!--   -->

# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>TransactionRequest()<br> |



<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>int<br> | <br>getType()<br> |
| <br>int<br> | <br>getVersion()<br> |
| <br>void<br> | <br>readObject([JBaseObjectReader](/39232-io/com_jbase_jdbc_io_jbaseobjectreader "interface in com.jbase.jdbc.io") reader, int version)<br> |
| <br>void<br> | <br>writeObject([JBaseObjectWriter](/39232-io/com_jbase_jdbc_io_jbaseobjectwriter "interface in com.jbase.jdbc.io") writer, int version)<br> |


<!--   -->

### 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# <!--   -->

# Constructor Detail
<!--   -->
#### **TransactionRequest**

```
public TransactionRequest()
```


<!-- ============ METHOD DETAIL ========== -->
<!--   -->

# Method Detail
<!--   -->
#### **getType**

```
public int getType()
```
<dl><dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getType</code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>type id of the objects, used during the serialization</dd></dl>



<!--   -->
#### **getVersion**

```
public int getVersion()
```
<dl><dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getVersion</code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd></dl>

<!--   -->


#### readObject

```
public void readObject(JBaseObjectReader reader, int version)
                throws IOException, ClassNotFoundException
```
<dl><dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>readObject</code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

<!--   -->


#### **writeObject**

```
public void writeObject(JBaseObjectWriter writer, int version)
                 throws IOException
```
<dl><dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>writeObject</code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd><dt><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


