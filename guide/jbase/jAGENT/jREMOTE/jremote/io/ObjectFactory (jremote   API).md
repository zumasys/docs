# ObjectFactory (jremote   API)

**Created At:** 9/25/2017 11:53:25 AM  
**Updated At:** 12/24/2018 9:02:18 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="ObjectFactory (jremote   API)";
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
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class ObjectFactory

- java.lang.Object
    - com.jbase.jremote.io.ObjectFactory


- <dl><dt>Direct Known Subclasses:</dt><dd>InboundObjectFactory, JRemoteObjectFactory</dd></dl>
* * *


```
public abstract class ObjectFactory
extends Object
```

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
<caption>&nbsp;<span>Constructors</span><span class="tabEnd">&nbsp;</span>&nbsp;</caption>| `ObjectFactory()` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
<caption>&nbsp;<span class="activeTableTab" id="t0"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span class="tableTab" id="t2"><span><a href="javascript%3Ashow(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span class="tableTab" id="t3"><span><a href="javascript%3Ashow(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span><span class="tableTab" id="t4"><span><a href="javascript%3Ashow(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span>&nbsp;</caption>| `protected JBaseSerializable`<br> | `createGenericObjects(int objectType)`<br>Creates any generic (i.e common to all framework clients) objects.<br> |
| `protected abstract JBaseSerializable`<br> | `createObject(int objectType)`<br>Create JBaseSerializable object from the supplied object type.<br> |


<!--   -->

### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
- #### ObjectFactory

```
public ObjectFactory()
```




<!--   -->

### Method Detail
<!--   -->
- #### createObject

```
protected abstract JBaseSerializable createObject(int objectType)
                                           throws UnknownTypeException
```

Create JBaseSerializable object from the supplied object type.
<dl><dt><span class="paramLabel">Parameters:</span></dt><dd><code>objectType</code> - type identifier</dd><dt><span class="returnLabel">Returns:</span></dt><dd>an instance of a class implementing JBaseSerializable</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException" title="class in com.jbase.jremote.io.exception">UnknownTypeException</a></code></dd></dl>





- #### <!--   -->createGenericObjects


```
protected JBaseSerializable createGenericObjects(int objectType)
                                          throws UnknownTypeException
```

Creates any generic (i.e common to all framework clients) objects. If the object is not generic calls the client specific createObject method.
<dl><dt><span class="paramLabel">Parameters:</span></dt><dd><code>objectType</code> - type identifier</dd><dt><span class="returnLabel">Returns:</span></dt><dd>an instance of a class implementing JBaseSerializable</dd><dt><span class="throwsLabel">Throws:</span></dt><dd><code><a href="/39254-exception/com_jbase_jremote_io_exception_UnknownTypeException" title="class in com.jbase.jremote.io.exception">UnknownTypeException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
