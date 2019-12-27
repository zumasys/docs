# JConnectionFactory

**Created At:** 9/13/2017 7:56:11 PM  
**Updated At:** 9/13/2017 7:56:55 PM  
**Original Doc:** [jconnectionfactory](https://docs.jbase.com/39719-archive/jconnectionfactory)  
**Original ID:** 276694  
**Internal:** Yes  


## Interface JConnectionFactory

- All Known Implementing Classes:[DefaultJConnectionFactory](file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/DefaultJConnectionFactory.html "class in com.jbase.jremote"), [JRemoteConnectionFactoryImpl](file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/jca/JRemoteConnectionFactoryImpl.html "class in com.jbase.jremote.jca")
```
public interface JConnectionFactory
```

The connection factory for connections to remote a jBASE instance.Author:aphethean
- - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
All Methods [Instance Methods](javascript%3Ashow%282%29;) [Abstract Methods](javascript%3Ashow%284%29;) | `JConnection` | `getConnection()` Get a connection to a remote jBASE instance.<br> |
| `JConnection` | `getConnection(JConnectionCallbackHandler handler)` Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation.<br> |
| `JConnection` | `getConnection(String user,              String password)` Get a connection to a remote jBASE instance.<br> |
| `JConnection` | `getConnection(String user,              String password,              Properties props)` Get a connection to a remote jBASE instance.<br> |
| `JConnection` | `getConnection(String user,              String account,              String password)` Get a connection to a remote jBASE account.<br> |
- - ### Method Detail
 
        - #### getConnection

```
JConnection getConnection()                    throws JRemoteException
```

Get a connection to a remote jBASE instance.Returns:JConnection The connectionThrows:`JRemoteException`
    - - #### getConnection

```
JConnection getConnection(String user,                           String password)                    throws JRemoteException
```

Get a connection to a remote jBASE instance.Parameters:`user` - `password` - Returns:JConnection The connectionThrows:`JRemoteException`
    - - #### getConnection

```
JConnection getConnection(String user,                           String password,                           Properties props)                    throws JRemoteException
```

Get a connection to a remote jBASE instance.Parameters:`user` - `password` - `props` - Returns:JConnection The connectionThrows:`JRemoteException`
    - - #### getConnection

```
JConnection getConnection(String user,                           String account,                           String password)                    throws JRemoteException
```

Get a connection to a remote jBASE account.Parameters:`user` - `account` - `password` - Returns:JConnection The connectionThrows:`JRemoteException`
    - - #### getConnection

```
JConnection getConnection(JConnectionCallbackHandler handler)                    throws JRemoteException
```

Get a connection to a remote jBASE instance, in a managed environment the callback handler provides ancillary connection initialisation.Parameters:`handler` - Returns:JConnection The connectionThrows:`JRemoteException`

