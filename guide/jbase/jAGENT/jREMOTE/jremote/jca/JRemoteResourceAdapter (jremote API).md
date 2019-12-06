# JRemoteResourceAdapter (jremote API)

**Created At:** 9/25/2017 12:05:55 PM  
**Updated At:** 4/6/2018 12:13:03 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JRemoteResourceAdapter (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JRemoteResourceAdapter

<dl><dt>All Implemented Interfaces:</dt><dd>javax.resource.spi.ResourceAdapter</dd></dl>
* * *


```
public class JRemoteResourceAdapter
extends Object
implements javax.resource.spi.ResourceAdapter
```

<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JRemoteResourceAdapter()` <br> |




<!--   -->

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


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### JRemoteResourceAdapter

```
public JRemoteResourceAdapter()
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### start

```
public void start(javax.resource.spi.BootstrapContext ctx)
           throws javax.resource.spi.ResourceAdapterInternalException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>start</code> in interface <code>javax.resource.spi.ResourceAdapter</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.spi.ResourceAdapterInternalException</code></dd></dl><!--   -->
#### stop

```
public void stop()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>stop</code> in interface <code>javax.resource.spi.ResourceAdapter</code></dd></dl><!--   -->
#### endpointActivation

```
public void endpointActivation(javax.resource.spi.endpoint.MessageEndpointFactory messageEndpointFactory,
                               javax.resource.spi.ActivationSpec activationSpec)
                        throws javax.resource.ResourceException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>endpointActivation</code> in interface <code>javax.resource.spi.ResourceAdapter</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd></dl><!--   -->
#### endpointDeactivation

```
public void endpointDeactivation(javax.resource.spi.endpoint.MessageEndpointFactory messageEndpointFactory,
                                 javax.resource.spi.ActivationSpec activationSpec)
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>endpointDeactivation</code> in interface <code>javax.resource.spi.ResourceAdapter</code></dd></dl><!--   -->
#### getXAResources

```
public XAResource[] getXAResources(javax.resource.spi.ActivationSpec[] arg0)
                            throws javax.resource.ResourceException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>getXAResources</code> in interface <code>javax.resource.spi.ResourceAdapter</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd></dl><!--   -->
#### setCreateWorkerPerClient

```
public void setCreateWorkerPerClient(boolean clientWorkers)
```
<!--   -->
#### setCreateWorkerPerClient

```
public void setCreateWorkerPerClient(Boolean clientWorkers)
```
<!--   -->
#### setListenHost

```
public void setListenHost(String host)
```
<!--   -->
#### setListenPort

```
public void setListenPort(int port)
```
<!--   -->
#### setListenPort

```
public void setListenPort(Integer port)
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)


