# JRemoteConnectionRequestInfo (jremote API)

<PageHeader />

## Class JRemoteConnectionRequestInfo

All Implemented Interfaces:javax.resource.spi.ConnectionRequestInfo
* * *


```
public class JRemoteConnectionRequestInfo
extends Object
implements javax.resource.spi.ConnectionRequestInfo
```

This ConnectionRequestInfo allows JRemote clients to receive well defined callbacks for certain connection events.

A ConnectionRequestInfo object is used by the resource adapter to pass connection request information through the container for connection creation and matching.

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JRemoteConnectionRequestInfo(JConnectionCallbackHandler handler)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JConnectionCallbackHandler`<br> | `getCallbackHandler()` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- Methods inherited from interface javax.resource.spi.ConnectionRequestInfo
    - `equals, hashCode`

### Constructor Detail



#### JRemoteConnectionRequestInfo

```
public JRemoteConnectionRequestInfo(JConnectionCallbackHandler handler)
```





### 


### Method Detail



#### getCallbackHandler

```
public JConnectionCallbackHandler getCallbackHandler()
```

Back to [jRemote API](../../../../jremote-api/README.md)

  
<PageFooter />
