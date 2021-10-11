# JRemoteConnectionRequestInfo (jremote API)

<PageHeader />

## Class JRemoteConnectionRequestInfo

All Implemented Interfaces:javax.resource.spi.ConnectionRequestInfo
* * *

```java
public class JRemoteConnectionRequestInfo
extends Object
implements javax.resource.spi.ConnectionRequestInfo
```

This ConnectionRequestInfo allows JRemote clients to receive well defined callbacks for certain connection events.

A ConnectionRequestInfo object is used by the resource adapter to pass connection request information through the container for connection creation and matching.

### Constructor Summary

| Constructor and Description |
| --- |
| `JRemoteConnectionRequestInfo(JConnectionCallbackHandler handler)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `JConnectionCallbackHandler` | `getCallbackHandler()`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- Methods inherited from interface javax.resource.spi.ConnectionRequestInfo
  - `equals, hashCode`

### Constructor Detail

#### JRemoteConnectionRequestInfo

```java
public JRemoteConnectionRequestInfo(JConnectionCallbackHandler handler)
```

### Method Detail

#### getCallbackHandler

```java
public JConnectionCallbackHandler getCallbackHandler()
```

Back to [jRemote API](./../../README.md)

<PageFooter />
