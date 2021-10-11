# DefaultConnectionManager (jremote API)

<PageHeader />

## Class DefaultConnectionManager

All Implemented Interfaces:Serializable, javax.resource.spi.ConnectionManager

* * *

```java
public class DefaultConnectionManager
extends Object
implements javax.resource.spi.ConnectionManager
```

This class provides the default implementation of the ConnectionManager for non managed use. There is no pooling or level of service beyond allocating a connection.

The following excerpt is from the JCA specification.

A default implementation of ConnectionManager enables the resource adapter to provide services specific to itself. These services can include connection pooling, error logging and tracing, and security management. The default ConnectionManager delegates to the ManagedConnectionFactory the creation of physical connections to the underlying EIS.

### Constructor Summary

| Constructor and Description |
| --- |
| `DefaultConnectionManager()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `Object` | `allocateConnection(javax.resource.spi.ManagedConnectionFactory mcf, javax.resource.spi.ConnectionRequestInfo info)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### DefaultConnectionManager

```java
public DefaultConnectionManager()
```

### Method Detail

#### allocateConnection

```java
public Object allocateConnection(javax.resource.spi.ManagedConnectionFactory mcf,
                                 javax.resource.spi.ConnectionRequestInfo info)
                          throws javax.resource.ResourceException
```

Specified by:`allocateConnection` in interface `javax.resource.spi.ConnectionManager`  
Throws:`javax.resource.ResourceException`

Back to [jRemote API](./../../README.md)

<PageFooter />
