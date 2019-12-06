# DefaultJConnectionFactory (jremote API)

**Created At:** 9/25/2017 11:40:30 AM  
**Updated At:** 12/24/2018 7:24:57 PM  

<noscript>&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class DefaultJConnectionFactory

### 

<dl><p><strong>All Implemented Interfaces:</strong></p><p><a href="/39248-jremote/com_jbase_jremote_jconnectionfactory" title="interface in com.jbase.jremote">JConnectionFactory</a></p></dl>
* * *


```
public class DefaultJConnectionFactory
extends Object
implements JConnectionFactory
```

The default implementation of a JConnectionFactory that will connect to a remote jBASE instance using a host and a port.
<dl><h3>Field Summary</h3><h3><table border="0" cellpadding="3" cellspacing="0" class="memberSummary" summary="Field Summary table, listing fields, and an explanation"><thead><tr><th class="colFirst" scope="col">Modifier and Type<br></th><th class="colLast" scope="col">Field and Description<br></th></tr></thead><tbody><tr class="altColor"><td class="colFirst">static boolean<br></td><td class="colLast"><span class="memberNameLink">DEFAULT_ENABLE_COMPRESSION</span>&nbsp;<br></td></tr><tr class="rowColor"><td class="colFirst">static boolean<br></td><td class="colLast"><span class="memberNameLink">DEFAULT_ENABLE_NAIVETRUSTMANAGER</span>&nbsp;<br></td></tr><tr class="altColor"><td class="colFirst">static boolean<br></td><td class="colLast"><span class="memberNameLink">DEFAULT_ENABLE_SSL</span>&nbsp;<br></td></tr><tr class="rowColor"><td class="colFirst">static int<br></td><td class="colLast"><span class="memberNameLink">DEFAULT_PORT</span>&nbsp;<br></td></tr><tr class="altColor"><td class="colFirst">static String<br></td><td class="colLast"><span class="memberNameLink">JBASE_PRODUCT_JREMOTEJAVA</span>&nbsp;<br></td></tr></tbody></table></h3></dl>

### 


### Constructor Summary

| Constructor and Description<br> |
| --- |
| `DefaultJConnectionFactory()` <br> |


<!--   -->

### 


### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `disableCompression()` <br> |
| `void`<br> | `disableNaiveTrustManager()` <br> |
| `void`<br> | `disableSSL()` <br> |
| `void`<br> | `enableCompression()` <br> |
| `void`<br> | `enableNaiveTrustManager()` <br> |
| `void`<br> | `enableSSL()` <br> |
| `JConnection`<br> | `getConnection()`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(JConnectionCallbackHandler handler)`<br>Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation.<br> |
| `JConnection`<br> | `getConnection(String user, String password)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(String user, String password, Properties props)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(String user, String account, String password)`<br>Get a connection to a remote jBASE account.<br> |
| `protected Properties`<br> | `getConnectionProperties()` <br> |
| `protected Properties`<br> | `getConnectionProperties(Properties props)` <br> |
| `String`<br> | `getHost()` <br> |
| `int`<br> | `getPort()` <br> |
| `boolean`<br> | `isEnabledCompression()` <br> |
| `boolean`<br> | `isEnabledNaiveTrustManager()` <br> |
| `boolean`<br> | `isEnabledSSL()` <br> |
| `void`<br> | `setHost(String host)` <br> |
| `void`<br> | `setPort(int port)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`




<!--   -->

### Field Detail
<!--   -->
#### DEFAULT\_PORT

```
public static final int DEFAULT_PORT
```
<dl><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="299736-constant-values" title="">Constant Field Values</a></dd></dl>


#### DEFAULT\_ENABLE\_SSL

```
public static final boolean DEFAULT_ENABLE_SSL
```
<dl><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="299736-constant-values" title="">Constant Field Values</a></dd></dl>


#### DEFAULT\_ENABLE\_NAIVETRUSTMANAGER

```
public static final boolean DEFAULT_ENABLE_NAIVETRUSTMANAGER
```
<dl><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="299736-constant-values" title="">Constant Field Values</a></dd></dl>


#### DEFAULT\_ENABLE\_COMPRESSION

```
public static final boolean DEFAULT_ENABLE_COMPRESSION
```
<dl><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="299736-constant-values" title="">Constant Field Values</a></dd></dl>


#### JBASE\_PRODUCT\_JREMOTEJAVA

```
public static final String JBASE_PRODUCT_JREMOTEJAVA
```
<dl><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><a href="299736-constant-values" title="">Constant Field Values</a></dd></dl>


<!--   -->

### Constructor Detail
<!--   -->


#### DefaultJConnectionFactory

```
public DefaultJConnectionFactory()
```





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

Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialization.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_JConnectionFactory#getConnection-com.jbase.jremote.JConnectionCallbackHandler-">getConnection</a></code> in interface <code><a href="/39248-jremote/com_jbase_jremote_jconnectionfactory" title="interface in com.jbase.jremote">JConnectionFactory</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JConnection The connection</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>

#### getConnectionProperties

#### 
```
protected Properties getConnectionProperties()
```




#### getConnectionProperties

```
protected Properties getConnectionProperties(Properties props)
```

#### getHost

```
public String getHost()
```

#### setHost

```
public void setHost(String host)
```

#### getPort

```
public int getPort()
```

#### setPort

```
public void setPort(int port)
```

#### enableSSL

```
public void enableSSL()
```

#### disableSSL

```
public void disableSSL()
```

#### isEnabledSSL

```
public boolean isEnabledSSL()
```

#### enableNaiveTrustManager

```
public void enableNaiveTrustManager()
```

#### disableNaiveTrustManager

```
public void disableNaiveTrustManager()
```

#### isEnabledNaiveTrustManager

```
public boolean isEnabledNaiveTrustManager()
```

#### enableCompression

```
public void enableCompression()
```

#### disableCompression

```
public void disableCompression()
```

#### isEnabledCompression

```
public boolean isEnabledCompression()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->

Return to [jREMOTE API](com_jbase_jremote_package-summary)
