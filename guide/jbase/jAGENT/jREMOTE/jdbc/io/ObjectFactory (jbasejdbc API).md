# ObjectFactory (jbasejdbc API)

**Created At:** 9/25/2017 10:53:38 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="ObjectFactory (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":6};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript>&amp;lt;div&amp;gt;JavaScript is disabled on your browser.&amp;lt;/div&amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

# Class ObjectFactory

<dl><dt>Direct Known Subclasses:</dt><dd><a href="../../../../com/jbase/jdbc/io/JBaseJDBC/39232-io/com_jbase_jdbc_io_ObjectFactory" title="class in com.jbase.jdbc.io">JBaseJDBCObjectFactory</a></dd></dl>
```
public abstract class ObjectFactory
extends Object
```

<!-- ======== CONSTRUCTOR SUMMARY ======== -->

<!--   -->

# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>ObjectFactory()<br> |





<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> |  Description<br> |
| --- | --- | --- |
| <br>protected [JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")<br> | <br>createGenericObjects(int objectType)<br> | <br>Creates any generic (i.e common to all framework clients) objects.<br> |
| <br>protected abstract [JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")<br> | <br>createObject(int objectType)<br> | <br>Create JBaseSerializable object from the supplied object type.<br> |


<!--   -->

### 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

# Constructor Detail
<!--   -->
#### **ObjectFactory**

```
public ObjectFactory()
```




<!-- ============ METHOD DETAIL ========== -->
<!--   -->

# Method Detail
<!--   -->
#### **createObject**

```
protected abstract JBaseSerializable createObject(int objectType)
                                           throws UnknownTypeException
```

Create JBaseSerializable object from the supplied object type.
<dl><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 40px;"><code>objectType</code> - type identifier</dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">an instance of a class implementing JBaseSerializable</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39236-exception/com_jbase_jdbc_io_exception_UnknownTypeException" title="class in com.jbase.jdbc.io.exception">UnknownTypeException</a></code></dd></dl>



<!--   -->


#### **createGenericObjects**

```
protected JBaseSerializable createGenericObjects(int objectType)
                                          throws UnknownTypeException
```



Creates any generic (i.e common to all framework clients) objects. If the object is not generic calls the client specific createObject method.
<dl><dt style="margin-left: 40px;"><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 40px;"><code>objectType</code> - type identifier</dd><dt style="margin-left: 40px;"><br><span class="returnLabel"><strong>Returns:</strong></span></dt><dd style="margin-left: 40px;">an instance of a class implementing JBaseSerializable</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="/39236-exception/com_jbase_jdbc_io_exception_UnknownTypeException" title="class in com.jbase.jdbc.io.exception">UnknownTypeException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
