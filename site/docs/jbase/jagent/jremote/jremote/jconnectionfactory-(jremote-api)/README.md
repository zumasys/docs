# JConnectionFactory (jremote API)

**Created At:** 9/25/2017 12:09:08 PM  
**Updated At:** 12/24/2018 7:42:35 PM  
**Original Doc:** [com_jbase_jremote_jconnectionfactory](https://docs.jbase.com/39248-jremote/com_jbase_jremote_jconnectionfactory)  


JavaScript is disabled on your browser.



## Interface JConnectionFactory

All Known Implementing Classes:[DefaultJConnectionFactory](./../defaultjconnectionfactory-%28jremote-api%29 "class in com.jbase.jremote"), [JRemoteConnectionFactoryImpl](/39258-jca/com_jbase_jremote_jca_JRemoteConnectionFactoryImpl "class in com.jbase.jremote.jca")
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



Back to [jREMOTE API](com_jbase_jremote_package-summary)
