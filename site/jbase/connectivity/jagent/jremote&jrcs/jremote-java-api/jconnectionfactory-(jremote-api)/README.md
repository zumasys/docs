# JConnectionFactory (jremote API)

<PageHeader />

## Interface JConnectionFactory

All Known Implementing Classes:[DefaultJConnectionFactory](./../defaultjconnectionfactory-(jremote-api) "class in com.jbase.jremote"), [JRemoteConnectionFactoryImpl](./../jca/jremoteconnectionfactoryimpl-(jremote-api) "class in com.jbase.jremote.jca")
* * *


```
public interface JConnectionFactory
```

The connection factory for connections to remote a jBASE instance.

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JConnection`<br> | `getConnection()`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(JConnectionCallbackHandler handler)`<br>Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialization.<br> |
| `JConnection`<br> | `getConnection(String user, String password)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(String user, String password, Properties props)`<br>Get a connection to a remote jBASE instance.<br> |
| `JConnection`<br> | `getConnection(String user, String account, String password)`<br>Get a connection to a remote jBASE account.<br> |

### Method Detail



#### getConnection

```
JConnection getConnection()
                   throws JRemoteException
```

Get a connection to a remote jBASE instance.
Returns:JConnection The connectionThrows:`JRemoteException`





#### getConnection

```
JConnection getConnection(String user,
                          String password)
                   throws JRemoteException
```

Get a connection to a remote jBASE instance.
Parameters:`user` -`password` -Returns:JConnection The connectionThrows:`JRemoteException`


#### getConnection

```
JConnection getConnection(String user,
                          String password,
                          Properties props)
                   throws JRemoteException
```

Get a connection to a remote jBASE instance.
Parameters:`user` -`password` -`props` -Returns:JConnection The connectionThrows:`JRemoteException`


#### getConnection

```
JConnection getConnection(String user,
                          String account,
                          String password)
                   throws JRemoteException
```

Get a connection to a remote jBASE account.
Parameters:`user` -`account` -`password` -Returns:JConnection The connectionThrows:`JRemoteException`


#### getConnection

```
JConnection getConnection(JConnectionCallbackHandler handler)
                   throws JRemoteException
```

Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation.
Parameters:`handler` -Returns:JConnection The connectionThrows:`JRemoteException`



Back to [jRemote API](../../../../jremote-api/README.md)

  
<PageFooter />
