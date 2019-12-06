# JRemoteConnectionFactoryImpl (jremote API)

**Created At:** 9/25/2017 12:05:15 PM  
**Updated At:** 4/6/2018 1:24:40 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JRemoteConnectionFactoryImpl (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript>&amp;amp;amp;amp;lt;div&amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JRemoteConnectionFactoryImpl

**All Implemented Interfaces:**
<dd><a href="/39248-jremote/com_jbase_jremote_jconnectionfactory" title="interface in com.jbase.jremote">JConnectionFactory</a>, Serializable, Referenceable</dd>
* * *


```
public class JRemoteConnectionFactoryImpl
extends Object
implements javax.resource.Referenceable, Serializable, JConnectionFactory
```

The concrete implementation of a remote jBASE connection factory.

This factory can be used from a managed and non managed environment (see Java Connector Architecture specification). In the managed environment an application server or other environment will supply a ManagedConnectionFactory that holds all the details for how to create a connection. For example a user name, host address, or account to connect to.

When used in a managed environment it is expected that this factory will be constructed with a ConnectionManager that offers connection pooling or a better level of service.

The non managed environment will use a default ConnectionManager that offers little or no support for connection pooling.



<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JRemoteConnectionFactoryImpl()`<br>Construct a connection factory for use in a non managed environment using the default connection manager.<br> |
| `JRemoteConnectionFactoryImpl(javax.resource.spi.ManagedConnectionFactory mcf)`<br>Construct a connection factory for use in a non managed environment using the default connection manager.<br> |
| `JRemoteConnectionFactoryImpl(javax.resource.spi.ManagedConnectionFactory mcf, javax.resource.spi.ConnectionManager cm)`<br>Constructor for managed connection factory.<br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JConnection`<br> | `getConnection()`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(JConnectionCallbackHandler handler)`<br>Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation.<br> |
| `JConnection`<br> | `getConnection(String user, String password)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(String user, String password, Properties props)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(String user, String account, String password)`<br>Get a connection to a remote jBASE account.<br> |
| `protected JConnection`<br> | `getConnection(String user, String account, String password, JConnectionCallbackHandler handler)` <br> |
| `Reference`<br> | `getReference()` <br> |
| `void`<br> | `setReference(Reference reference)` <br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### JRemoteConnectionFactoryImpl

```
public JRemoteConnectionFactoryImpl()
```

Construct a connection factory for use in a non managed environment using the default connection manager.
<dl><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39258-jca/com_jbase_jremote_jca_DefaultConnectionManager" title="class in com.jbase.jremote.jca"><code>DefaultConnectionManager</code></a></dd></dl>


#### JRemoteConnectionFactoryImpl

```
public JRemoteConnectionFactoryImpl(javax.resource.spi.ManagedConnectionFactory mcf)
```

Construct a connection factory for use in a non managed environment using the default connection manager.
<dl><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="/39258-jca/com_jbase_jremote_jca_DefaultConnectionManager" title="class in com.jbase.jremote.jca"><code>DefaultConnectionManager</code></a></dd></dl>

#### JRemoteConnectionFactoryImpl

```
public JRemoteConnectionFactoryImpl(javax.resource.spi.ManagedConnectionFactory mcf,
                                    javax.resource.spi.ConnectionManager cm)
```

Constructor for managed connection factory. The application server will use this constructor and supply a configured ManagedConnectionFactory and ConnectionManager. This class will hook into the application server connection pool via the supplied ConnectionManager.

<!--   -->

### Method Detail
<!--   -->


#### getConnection

```
public JConnection getConnection()
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JConnectionFactory#getConnection--">getConnection</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnectionfactory" title="interface in com.jbase.jremote">JConnectionFactory</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JConnection The connection</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### getConnection

```
public JConnection getConnection(String user,
                                 String password)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JConnectionFactory#getConnection-java.lang.String-java.lang.String-">getConnection</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnectionfactory" title="interface in com.jbase.jremote">JConnectionFactory</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JConnection The connection</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### getConnection

```
public JConnection getConnection(String user,
                                 String password,
                                 Properties props)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JConnectionFactory#getConnection-java.lang.String-java.lang.String-java.util.Properties-">getConnection</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnectionfactory" title="interface in com.jbase.jremote">JConnectionFactory</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JConnection The connection</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>

#### getConnection

```
public JConnection getConnection(String user,
                                 String account,
                                 String password)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE account.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JConnectionFactory#getConnection-java.lang.String-java.lang.String-java.lang.String-">getConnection</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnectionfactory" title="interface in com.jbase.jremote">JConnectionFactory</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JConnection The connection</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>



#### getConnection

```
public JConnection getConnection(JConnectionCallbackHandler handler)
                          throws JRemoteException
```

Description copied from interface: `JConnectionFactory`

Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>getConnection</code> in interface <code>JConnectionFactory</code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JConnection The connection</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd></dl>



#### getConnection

```
protected JConnection getConnection(String user,
                                    String account,
                                    String password,
                                    JConnectionCallbackHandler handler)
                             throws JRemoteException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>JRemoteException</code></dd></dl>

#### setReference

```
public void setReference(Reference reference)
```
<dl><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>Referenceable.setReference(Reference)</code></dd></dl>

#### getReference

```
public Reference getReference()
                       throws NamingException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>getReference</code> in interface <code>Referenceable</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>NamingException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>Referenceable.getReference()</code></dd><p style="margin-left: 20px;"><br></p></dl>
Back to [jREMOTE API](com_jbase_jremote_package-summary)
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
