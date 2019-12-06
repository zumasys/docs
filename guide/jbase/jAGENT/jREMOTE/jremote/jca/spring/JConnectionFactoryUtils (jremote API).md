# JConnectionFactoryUtils (jremote API)

**Created At:** 9/25/2017 12:07:54 PM  
**Updated At:** 4/5/2018 11:46:42 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JConnectionFactoryUtils (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":9,"i1":9,"i2":9};
var tabs = {65535:["t0","All Methods"],1:["t1","Static Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JConnectionFactoryUtils

```
public abstract class JConnectionFactoryUtils
extends Object
```

Helper class that provides static methods for obtaining JRemote Connections from a [`JConnectionFactory`](/39248-jremote/com_jbase_jremote_jconnectionfactory "interface in com.jbase.jremote"). Includes special support for Spring-managed transactional Connections, e.g. managed by [`JRemoteLocalTransactionManager`](/39268-spring/com_jbase_jremote_jca_spring_jremotelocaltransactionmanager "class in com.jbase.jremote.jca.spring") or `JtaTransactionManager`.
<dl><dt><br></dt></dl>

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JConnectionFactoryUtils()` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `static JConnection`<br> | `getConnection(JConnectionFactory cf)`<br>Obtain a JConnection from the given JConnectionFactory.<br> |
| `static boolean`<br> | `isConnectionTransactional(JConnection con, JConnectionFactory cf)`<br>Determine whether the given JRemote Connection is transactional, that is, bound to the current thread by Spring's transaction facilities.<br> |
| `static void`<br> | `releaseConnection(JConnection con, JConnectionFactory cf)`<br>Close the given JConnection, obtained from the given JConnectionFactory, if it is not managed externally (that is, not bound to the thread).<br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### JConnectionFactoryUtils

```
public JConnectionFactoryUtils()
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### getConnection

```
public static JConnection getConnection(JConnectionFactory cf)
                                 throws JRemoteException
```

Obtain a JConnection from the given JConnectionFactory. Translates ResourceExceptions into the Spring hierarchy of unchecked generic data access exceptions, simplifying calling code and making any exception that is thrown more meaningful.Is aware of a corresponding Connection bound to the current thread, for example when using [`JRemoteLocalTransactionManager`](/39268-spring/com_jbase_jremote_jca_spring_jremotelocaltransactionmanager "class in com.jbase.jremote.jca.spring"). Will bind a Connection to the thread if transaction synchronization is active (e.g. if in a JTA transaction).
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>cf</code> - the ConnectionFactory to obtain Connection from</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">a JConnection from the given JConnectionFactory</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code> - if the attempt to get a Connection failed</dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="../../../../../com/jbase/jremote/jca/spring//39268-spring/com_jbase_jremote_jca_spring_JConnectionFactoryUtils#releaseConnection-com.jbase.jremote.JConnection-com.jbase.jremote.JConnectionFactory-"><code>releaseConnection(com.jbase.jremote.JConnection, com.jbase.jremote.JConnectionFactory)</code></a></dd></dl><!--   -->
#### 


#### isConnectionTransactional

```
public static boolean isConnectionTransactional(JConnection con,
                                                JConnectionFactory cf)
```

Determine whether the given JRemote Connection is transactional, that is, bound to the current thread by Spring's transaction facilities.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>con</code> - the JConnection to check</dd><dd style="margin-left: 20px;"><code>cf</code> - the JConnectionFactory that the JConnection was obtained from (may be <code>null</code>)</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">whether the JConnection is transactional</dd></dl><!--   -->
#### 


#### releaseConnection

```
public static void releaseConnection(JConnection con,
                                     JConnectionFactory cf)
```

Close the given JConnection, obtained from the given JConnectionFactory, if it is not managed externally (that is, not bound to the thread).
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>con</code> - the Connection to close if necessary (if this is <code>null</code>, the call will be ignored)</dd><dd style="margin-left: 20px;"><code>cf</code> - the ConnectionFactory that the Connection was obtained from (can be <code>null</code>)</dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd><a href="../../../../../com/jbase/jremote/jca/spring//39268-spring/com_jbase_jremote_jca_spring_JConnectionFactoryUtils#getConnection-com.jbase.jremote.JConnectionFactory-"><code>getConnection(com.jbase.jremote.JConnectionFactory)</code></a></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)
