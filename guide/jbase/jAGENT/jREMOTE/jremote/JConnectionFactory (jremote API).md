# JConnectionFactory (jremote API)

**Created At:** 9/25/2017 12:09:08 PM  
**Updated At:** 12/24/2018 7:42:35 PM  

<noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Interface JConnectionFactory

<dl><dt>All Known Implementing Classes:</dt><dd><a href="com_jbase_jremote_defaultjconnectionfactory" title="class in com.jbase.jremote">DefaultJConnectionFactory</a>, <a href="/39258-jca/com_jbase_jremote_jca_JRemoteConnectionFactoryImpl" title="class in com.jbase.jremote.jca">JRemoteConnectionFactoryImpl</a></dd></dl>
* * *


```
public interface JConnectionFactory
```

The connection factory for connections to remote a jBASE instance.
<dl><dt><br></dt></dl>

<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JConnection`<br> | `getConnection()`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(JConnectionCallbackHandler handler)`<br>Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialization.<br> |
| `JConnection`<br> | `getConnection(String user, String password)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(String user, String password, Properties props)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(String user, String account, String password)`<br>Get a connection to a remote jBASE account.<br> |

<!--   -->

### Method Detail
<!--   -->


#### getConnection

```
JConnection getConnection()
                   throws JRemoteException
```

Get a connection to a remote jBASE instance.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JConnection The connection</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>





#### getConnection

```
JConnection getConnection(String user,
                          String password)
                   throws JRemoteException
```

Get a connection to a remote jBASE instance.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>user</code> -</dd><dd style="margin-left: 20px;"><code>password</code> -</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JConnection The connection</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### getConnection

```
JConnection getConnection(String user,
                          String password,
                          Properties props)
                   throws JRemoteException
```

Get a connection to a remote jBASE instance.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>user</code> -</dd><dd style="margin-left: 20px;"><code>password</code> -</dd><dd style="margin-left: 20px;"><code>props</code> -</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JConnection The connection</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### getConnection

```
JConnection getConnection(String user,
                          String account,
                          String password)
                   throws JRemoteException
```

Get a connection to a remote jBASE account.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>user</code> -</dd><dd style="margin-left: 20px;"><code>account</code> -</dd><dd style="margin-left: 20px;"><code>password</code> -</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JConnection The connection</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>


#### getConnection

```
JConnection getConnection(JConnectionCallbackHandler handler)
                   throws JRemoteException
```

Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation.
<dl><dt style="margin-left: 20px;"><span class="paramLabel">Parameters:</span></dt><dd style="margin-left: 20px;"><code>handler</code> -</dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">JConnection The connection</dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="/39248-jremote/com_jbase_jremote_jremoteexception" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->

Back to [jREMOTE API](com_jbase_jremote_package-summary)
