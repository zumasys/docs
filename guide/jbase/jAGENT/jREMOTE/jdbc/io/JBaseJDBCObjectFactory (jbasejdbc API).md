# JBaseJDBCObjectFactory (jbasejdbc API)

**Created At:** 9/25/2017 10:52:27 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JBaseJDBCObjectFactory (jbasejdbc   API)";
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

# Class JBaseJDBCObjectFactory

```
public class JBaseJDBCObjectFactory
extends ObjectFactory
```

Creates objects received from the jbase\_agent server.



<!-- ======== NESTED CLASS SUMMARY ======== -->

<!--   -->

# Nested Class Summary


| <br>Modifier and Type<br> | <br>Class and Description<br> |
| --- | --- |
| <br>static interface<br> | <br>[JBaseJDBCObjectFactory.TYPE](/39232-io/com_jbase_jdbc_io_JBaseJDBCObjectFactory.TYPE "interface in com.jbase.jdbc.io")<br> |





<!-- ======== CONSTRUCTOR SUMMARY ======== -->
<!--   -->

# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>JBaseJDBCObjectFactory()<br> |



<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> | Description<br> |
| --- | --- | --- |
| <br>`protected JBaseSerializable`<br> | <br>`createObject(int objectType)`<br> | <br>Create JBaseSerializable object from the supplied object type.<br> |


<!--   -->

# Methods inherited from class com.jbase.jdbc.io.ObjectFactory
`createGenericObjects`





<!--   -->

# Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!-- ========= CONSTRUCTOR DETAIL ======== -->

<!--   -->

# Constructor Detail
<!--   -->


#### **JBaseJDBCObjectFactory**

```
public JBaseJDBCObjectFactory()
```






<!-- ============ METHOD DETAIL ========== -->
<!--   -->

# Method Detail
<!--   -->
#### **createObject**

```
protected JBaseSerializable createObject(int objectType)
                                  throws UnknownTypeException
```



Description copied from class: `ObjectFactory`

Create JBaseSerializable object from the supplied object type.
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39232-io/com_jbase_jdbc_io_objectfactory#createObject-int-">createObject</a></code> in class <code><a href="/39232-io/com_jbase_jdbc_io_objectfactory" title="class in com.jbase.jdbc.io">ObjectFactory</a></code></dd><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 40px;"><code>objectType</code> - type identifier</dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">an instance of a class implementing JBaseSerializable</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 40px;"><code><a href="/39236-exception/com_jbase_jdbc_io_exception_UnknownTypeException" title="class in com.jbase.jdbc.io.exception">UnknownTypeException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
