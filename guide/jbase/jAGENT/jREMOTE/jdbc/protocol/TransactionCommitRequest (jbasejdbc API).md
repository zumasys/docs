# TransactionCommitRequest (jbasejdbc API)

**Created At:** 9/25/2017 11:05:14 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="TransactionCommitRequest (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

# Class TransactionCommitRequest

<dt>All Implemented Interfaces:</dt><dd><a href="/39232-io/com_jbase_jdbc_io_JBaseSerializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></dd>


```
public class TransactionCommitRequest
extends TransactionRequest
```



# <!--   -->

# 


# Nested Class Summary

## <!--   -->

## Nested classes/interfaces inherited from interface com.jbase.jdbc.io.JBaseSerializable
`JBaseSerializable.TYPE`





<!-- ======== CONSTRUCTOR SUMMARY ======== -->
<!--   -->

# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>TransactionCommitRequest()<br> |



<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>int<br> | <br>getType()<br> |




## <!--   -->

## 


## Methods inherited from class com.jbase.jdbc.protocol.TransactionRequest
`getVersion, readObject, writeObject`




## <!--   -->

## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
<!--   -->

# 


# Constructor Detail
<!--   -->
#### **TransactionCommitRequest**

```
public TransactionCommitRequest()
```


<!-- ============ METHOD DETAIL ========== -->
# <!--   -->

# 


# Method Detail
<!--   -->
#### **getType**

```
public int getType()
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>getType</code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_JBaseSerializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Overrides:</strong></span></dt><dd style="margin-left: 40px;"><code>getType</code> in class <code><a href="/39240-protocol/com_jbase_jdbc_protocol_transactionrequest" title="class in com.jbase.jdbc.protocol">TransactionRequest</a></code></dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">type id of the objects, used during the serialization</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
