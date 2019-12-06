# JConnectionFactory

**Created At:** 9/13/2017 7:56:11 PM  
**Updated At:** 9/13/2017 7:56:55 PM  


## Interface JConnectionFactory

- <dl><dt>All Known Implementing Classes:</dt><dd><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/DefaultJConnectionFactory.html" title="class in com.jbase.jremote">DefaultJConnectionFactory</a>, <a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/jca/JRemoteConnectionFactoryImpl.html" title="class in com.jbase.jremote.jca">JRemoteConnectionFactoryImpl</a></dd></dl>
```
public interface JConnectionFactory
```

The connection factory for connections to remote a jBASE instance.<dl><dt>Author:</dt><dd>aphethean</dd></dl>
- - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
<caption>All Methods <a href="javascript%3Ashow(2);">Instance Methods</a> <a href="javascript%3Ashow(4);">Abstract Methods</a>&nbsp;</caption>| `JConnection` | `getConnection()` Get a connection to a remote jBASE instance.<br> |
| `JConnection` | `getConnection(JConnectionCallbackHandler handler)` Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation.<br> |
| `JConnection` | `getConnection(String user,              String password)` Get a connection to a remote jBASE instance.<br> |
| `JConnection` | `getConnection(String user,              String password,              Properties props)` Get a connection to a remote jBASE instance.<br> |
| `JConnection` | `getConnection(String user,              String account,              String password)` Get a connection to a remote jBASE account.<br> |
- - ### Method Detail
 
        - #### getConnection

```
JConnection getConnection()                    throws JRemoteException
```

Get a connection to a remote jBASE instance.<dl><dt>Returns:</dt><dd>JConnection The connection</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### getConnection

```
JConnection getConnection(String user,                           String password)                    throws JRemoteException
```

Get a connection to a remote jBASE instance.<dl><dt>Parameters:</dt><dd><code>user</code> -&nbsp;</dd><dd><code>password</code> -&nbsp;</dd><dt>Returns:</dt><dd>JConnection The connection</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### getConnection

```
JConnection getConnection(String user,                           String password,                           Properties props)                    throws JRemoteException
```

Get a connection to a remote jBASE instance.<dl><dt>Parameters:</dt><dd><code>user</code> -&nbsp;</dd><dd><code>password</code> -&nbsp;</dd><dd><code>props</code> -&nbsp;</dd><dt>Returns:</dt><dd>JConnection The connection</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### getConnection

```
JConnection getConnection(String user,                           String account,                           String password)                    throws JRemoteException
```

Get a connection to a remote jBASE account.<dl><dt>Parameters:</dt><dd><code>user</code> -&nbsp;</dd><dd><code>account</code> -&nbsp;</dd><dd><code>password</code> -&nbsp;</dd><dt>Returns:</dt><dd>JConnection The connection</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>
    - - #### getConnection

```
JConnection getConnection(JConnectionCallbackHandler handler)                    throws JRemoteException
```

Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation.<dl><dt>Parameters:</dt><dd><code>handler</code> -&nbsp;</dd><dt>Returns:</dt><dd>JConnection The connection</dd><dt>Throws:</dt><dd><code><a href="file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/JRemoteException.html" title="class in com.jbase.jremote">JRemoteException</a></code></dd></dl>

