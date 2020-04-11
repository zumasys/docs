# JRemoteResourceAdapter (jremote API)

<PageHeader />

## Class JRemoteResourceAdapter

All Implemented Interfaces:javax.resource.spi.ResourceAdapter
* * *


```
public class JRemoteResourceAdapter
extends Object
implements javax.resource.spi.ResourceAdapter
```

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JRemoteResourceAdapter()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `endpointActivation(javax.resource.spi.endpoint.MessageEndpointFactory messageEndpointFactory, javax.resource.spi.ActivationSpec activationSpec)` <br> |
| `void`<br> | `endpointDeactivation(javax.resource.spi.endpoint.MessageEndpointFactory messageEndpointFactory, javax.resource.spi.ActivationSpec activationSpec)` <br> |
| `XAResource[]`<br> | `getXAResources(javax.resource.spi.ActivationSpec[] arg0)` <br> |
| `void`<br> | `setCreateWorkerPerClient(boolean clientWorkers)` <br> |
| `void`<br> | `setCreateWorkerPerClient(Boolean clientWorkers)` <br> |
| `void`<br> | `setListenHost(String host)` <br> |
| `void`<br> | `setListenPort(int port)` <br> |
| `void`<br> | `setListenPort(Integer port)` <br> |
| `void`<br> | `start(javax.resource.spi.BootstrapContext ctx)` <br> |
| `void`<br> | `stop()` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JRemoteResourceAdapter

```
public JRemoteResourceAdapter()
```



### 


### Method Detail

#### start

```
public void start(javax.resource.spi.BootstrapContext ctx)
           throws javax.resource.spi.ResourceAdapterInternalException
```
Specified by:`start` in interface `javax.resource.spi.ResourceAdapter`Throws:`javax.resource.spi.ResourceAdapterInternalException`
#### stop

```
public void stop()
```
Specified by:`stop` in interface `javax.resource.spi.ResourceAdapter`
#### endpointActivation

```
public void endpointActivation(javax.resource.spi.endpoint.MessageEndpointFactory messageEndpointFactory,
                               javax.resource.spi.ActivationSpec activationSpec)
                        throws javax.resource.ResourceException
```
Specified by:`endpointActivation` in interface `javax.resource.spi.ResourceAdapter`Throws:`javax.resource.ResourceException`
#### endpointDeactivation

```
public void endpointDeactivation(javax.resource.spi.endpoint.MessageEndpointFactory messageEndpointFactory,
                                 javax.resource.spi.ActivationSpec activationSpec)
```
Specified by:`endpointDeactivation` in interface `javax.resource.spi.ResourceAdapter`
#### getXAResources

```
public XAResource[] getXAResources(javax.resource.spi.ActivationSpec[] arg0)
                            throws javax.resource.ResourceException
```
Specified by:`getXAResources` in interface `javax.resource.spi.ResourceAdapter`Throws:`javax.resource.ResourceException`
#### setCreateWorkerPerClient

```
public void setCreateWorkerPerClient(boolean clientWorkers)
```

#### setCreateWorkerPerClient

```
public void setCreateWorkerPerClient(Boolean clientWorkers)
```

#### setListenHost

```
public void setListenHost(String host)
```

#### setListenPort

```
public void setListenPort(int port)
```

#### setListenPort

```
public void setListenPort(Integer port)
```

Back to [jREMOTE API](com_jbase_jremote_package-summary)



  
<PageFooter />
