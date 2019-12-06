# MetaDataRequest (jbasejdbc API)

**Created At:** 9/25/2017 11:02:34 AM  
**Updated At:** 4/3/2018 10:12:41 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="MetaDataRequest (jbasejdbc   API)";
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

# Class MetaDataRequest

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></dd></dl>
```
public class MetaDataRequest
extends SQLRequest
```

Request to retrieve meta data of result set of last executed query.

<!-- ======== NESTED CLASS SUMMARY ======== -->

<!--   -->

# Nested Class Summary

<!--   -->

## Nested classes/interfaces inherited from interface com.jbase.jdbc.io.[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
`JBaseSerializable.TYPE`





<!-- =========== FIELD SUMMARY =========== -->
<!--   -->

# Field Summary

<!--   -->

## Fields inherited from class com.jbase.jdbc.protocol.[SQLRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLRequest "class in com.jbase.jdbc.protocol")
`log, statementId`



<!-- ======== CONSTRUCTOR SUMMARY ======== -->
<!--   -->

# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>`MetaDataRequest()`<br> |
| <br>`MetaDataRequest(StatementID statementId)`<br> |



<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

# Method Summary


| <br>Modifier and Type<br> | Method<br> | <br>Description<br> |
| --- | --- | --- |
| <br>`int`<br> | <br>`getType()`<br><br> | <br>This method must be overridden by classes inheriting from SQLStartRequest.<br> |


<!--   -->

## 


## Methods inherited from class com.jbase.jdbc.protocol.[SQLRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLRequest "class in com.jbase.jdbc.protocol")
`readObject, writeObject`



<!--   -->

## Methods inherited from class com.jbase.jdbc.protocol.[SQLStartRequest](/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest "class in com.jbase.jdbc.protocol")
`getVersion`



<!--   -->

## Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

# Constructor Detail
<!--   -->
#### **MetaDataRequest**

```
public MetaDataRequest()
```





#### **MetaDataRequest**

```
public MetaDataRequest(StatementID statementId)
```




<!-- ============ METHOD DETAIL ========== -->
<!--   -->

# 


# Method Detail
<!--   -->
#### **getType**

```
public int getType()
```

Description copied from class: `SQLStartRequest.`

This method must be overridden by classes inheriting from SQLStartRequest.<dt><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd><code>getType</code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd><dt><br><span class="overrideSpecifyLabel"><strong>Overrides:</strong></span></dt><dd><code>getType</code> in class <code><a href="/39240-protocol/com_jbase_jdbc_protocol_SQLStartRequest" title="class in com.jbase.jdbc.protocol">SQLStartRequest</a></code></dd><dt><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd>type id of the objects, used during the serialization</dd>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
