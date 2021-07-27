# JRemoteResourceAdapter (jremote API)

<PageHeader />

## Class JRemoteResourceAdapter

All Implemented Interfaces:javax.resource.spi.ResourceAdapter
* * *

```java
public class JRemoteResourceAdapter
extends Object
implements javax.resource.spi.ResourceAdapter
```

### Constructor Summary

| Constructor and Description |
| --- |
| `JRemoteResourceAdapter()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `endpointActivation(javax.resource.spi.endpoint.MessageEndpointFactory messageEndpointFactory, javax.resource.spi.ActivationSpec activationSpec)`  |
| `void` | `endpointDeactivation(javax.resource.spi.endpoint.MessageEndpointFactory messageEndpointFactory, javax.resource.spi.ActivationSpec activationSpec)`  |
| `XAResource[]` | `getXAResources(javax.resource.spi.ActivationSpec[] arg0)`  |
| `void` | `setCreateWorkerPerClient(boolean clientWorkers)`  |
| `void` | `setCreateWorkerPerClient(Boolean clientWorkers)`  |
| `void` | `setListenHost(String host)`  |
| `void` | `setListenPort(int port)`  |
| `void` | `setListenPort(Integer port)`  |
| `void` | `start(javax.resource.spi.BootstrapContext ctx)`  |
| `void` | `stop()`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JRemoteResourceAdapter

```java
public JRemoteResourceAdapter()
```

### Method Detail

#### start

```java
public void start(javax.resource.spi.BootstrapContext ctx)
           throws javax.resource.spi.ResourceAdapterInternalException
```

Specified by:`start` in interface `javax.resource.spi.ResourceAdapter`  
Throws:`javax.resource.spi.ResourceAdapterInternalException`

#### stop

```java
public void stop()
```

Specified by:`stop` in interface `javax.resource.spi.ResourceAdapter`

#### endpointActivation

```java
public void endpointActivation(javax.resource.spi.endpoint.MessageEndpointFactory messageEndpointFactory,
                               javax.resource.spi.ActivationSpec activationSpec)
                        throws javax.resource.ResourceException
```

Specified by:`endpointActivation` in interface `javax.resource.spi.ResourceAdapter`  
Throws:`javax.resource.ResourceException`

#### endpointDeactivation

```java
public void endpointDeactivation(javax.resource.spi.endpoint.MessageEndpointFactory messageEndpointFactory,
                                 javax.resource.spi.ActivationSpec activationSpec)
```

Specified by:`endpointDeactivation` in interface `javax.resource.spi.ResourceAdapter`

#### getXAResources

```java
public XAResource[] getXAResources(javax.resource.spi.ActivationSpec[] arg0)
                            throws javax.resource.ResourceException
```

Specified by:`getXAResources` in interface `javax.resource.spi.ResourceAdapter`  
Throws:`javax.resource.ResourceException`

#### setCreateWorkerPerClient

```java
public void setCreateWorkerPerClient(boolean clientWorkers)
```

#### setCreateWorkerPerClient

```java
public void setCreateWorkerPerClient(Boolean clientWorkers)
```

#### setListenHost

```java
public void setListenHost(String host)
```

#### setListenPort

```java
public void setListenPort(int port)
```

#### setListenPort

```java
public void setListenPort(Integer port)
```

Back to [jRemote API](./../../README.md)

<PageFooter />
