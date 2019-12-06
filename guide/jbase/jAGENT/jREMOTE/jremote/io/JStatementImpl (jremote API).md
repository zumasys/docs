# JStatementImpl (jremote API)

**Created At:** 9/25/2017 11:52:59 AM  
**Updated At:** 12/24/2018 8:55:27 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JStatementImpl (jremote   API)";
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
var activeTableTab = "activeTableTab";</script><noscript>&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JStatementImpl

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39248-jremote/com_jbase_jremote_JStatement" title="interface in com.jbase.jremote">JStatement</a></dd></dl>
* * *


```
public class JStatementImpl
extends Object
implements JStatement
```

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JStatementImpl(AbstractJRemoteConnection connection)`<br>Constructor.<br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JResultSet`<br> | `execute(JDynArray queries)`<br>Execute query.<br> |
| `JResultSet`<br> | `execute(JDynArray queries, JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
| `JResultSet`<br> | `execute(String query)`<br>Execute query.<br> |
| `JResultSet`<br> | `execute(String query, JSelectList selectList)`<br>Execute query using an existing select list as a filter.<br> |
| `void`<br> | `setFetchSize(int rows)`<br>Sets the fetch size.<br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### JStatementImpl

```
public JStatementImpl(AbstractJRemoteConnection connection)
```

Constructor.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>connection</code> -</dd></dl>




<!--   -->

### Method Detail
<!--   -->
#### execute

```
public JResultSet execute(String query)
                   throws JRemoteException
```

Description copied from interface: `JStatement`

Execute query.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JStatement#execute-java.lang.String-">execute</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_JStatement" title="interface in com.jbase.jremote">JStatement</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>query</code> - as a string</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">result set</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_JStatement#execute-java.lang.String-"><code>JStatement.execute(java.lang.String)</code></a></dd></dl>


#### execute

```
public JResultSet execute(JDynArray queries)
                   throws JRemoteException
```

Description copied from interface: `JStatement`

Execute query.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JStatement#execute-com.jbase.jremote.JDynArray-">execute</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_JStatement" title="interface in com.jbase.jremote">JStatement</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>queries</code> - query as a dynamic array</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">result set</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_JStatement#execute-com.jbase.jremote.JDynArray-"><code>JStatement.execute(com.jbase.jremote.JDynArray)</code></a></dd></dl>

#### execute

```
public JResultSet execute(String query,
                          JSelectList selectList)
                   throws JRemoteException
```

Description copied from interface: `JStatement`

Execute query using an existing select list as a filter.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JStatement#execute-java.lang.String-com.jbase.jremote.JSelectList-">execute</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_JStatement" title="interface in com.jbase.jremote">JStatement</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>query</code> - as a string</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">result set</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_JStatement#execute-java.lang.String-com.jbase.jremote.JSelectList-"><code>JStatement.execute(java.lang.String, com.jbase.jremote.JSelectList)</code></a></dd></dl>
#### execute

```
public JResultSet execute(JDynArray queries,
                          JSelectList selectList)
                   throws JRemoteException
```

Description copied from interface: `JStatement`

Execute query using an existing select list as a filter.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JStatement#execute-com.jbase.jremote.JDynArray-com.jbase.jremote.JSelectList-">execute</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_JStatement" title="interface in com.jbase.jremote">JStatement</a></code></dd><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>queries</code> - query as a dynamic array</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">result set</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_JStatement#execute-com.jbase.jremote.JDynArray-com.jbase.jremote.JSelectList-"><code>JStatement.execute(com.jbase.jremote.JDynArray, com.jbase.jremote.JSelectList)</code></a></dd></dl>


#### setFetchSize

```
public void setFetchSize(int rows)
```

Description copied from interface: `JStatement`

Sets the fetch size.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JStatement#setFetchSize-int-">setFetchSize</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_JStatement" title="interface in com.jbase.jremote">JStatement</a></code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39248-jremote/com_jbase_jremote_JStatement#setFetchSize-int-"><code>JStatement.setFetchSize(int)</code></a></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)


