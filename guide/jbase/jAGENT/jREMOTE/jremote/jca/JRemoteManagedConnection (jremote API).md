# JRemoteManagedConnection (jremote API)

**Created At:** 9/25/2017 12:05:28 PM  
**Updated At:** 4/6/2018 12:19:31 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JRemoteManagedConnection (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10,"i21":10,"i22":10,"i23":10,"i24":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JRemoteManagedConnection

<dl><dt>All Implemented Interfaces:</dt><dd>javax.resource.spi.ManagedConnection</dd></dl>
* * *


```
public class JRemoteManagedConnection
extends Object
implements javax.resource.spi.ManagedConnection
```

The application server considers this managed connection to be the physical connection to a remote jBASE instance.
<dl><dt><br></dt></dl>

<!--   -->

### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| `protected `<br> | `JRemoteManagedConnection()`<br>Constructor for JRemoteManagedConnection<br> |
| `protected `<br> | `JRemoteManagedConnection(JConnection connection, Subject subject)`<br>Constructor for JRemoteManagedConnection<br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `addConnectionEventListener(javax.resource.spi.ConnectionEventListener listener)` <br> |
| `void`<br> | `associateConnection(Object handle)` <br> |
| `protected void`<br> | `begin()`<br>Provided as a callback method for the LocalTransaction object.<br> |
| `void`<br> | `cleanup()`<br>Put the connection into a state where it may be reused.<br> |
| `void`<br> | `closeHandle(WrappedJConnection handle)` <br> |
| `protected void`<br> | `commit()`<br>Provided as a callback method for the LocalTransaction object.<br> |
| `void`<br> | `destroy()` <br> |
| `JConnection`<br> | `getConnection()` <br> |
| `Object`<br> | `getConnection(Subject subject, javax.resource.spi.ConnectionRequestInfo cxRequestInfo)` <br> |
| `javax.resource.spi.LocalTransaction`<br> | `getLocalTransaction()` <br> |
| `protected javax.resource.spi.ConnectionEvent`<br> | `getLocalTransactionCommittedEvent()` <br> |
| `protected javax.resource.spi.ConnectionEvent`<br> | `getLocalTransactionRolledbackEvent()` <br> |
| `protected javax.resource.spi.ConnectionEvent`<br> | `getLocalTransactionStartedEvent()` <br> |
| `PrintWriter`<br> | `getLogWriter()` <br> |
| `javax.resource.spi.ManagedConnectionMetaData`<br> | `getMetaData()` <br> |
| `protected Subject`<br> | `getSubject()` <br> |
| `TransactionManager`<br> | `getTransactionManager()` <br> |
| `XAResource`<br> | `getXAResource()` <br> |
| `protected boolean`<br> | `isAlive()`<br>Test physical connection is alive.<br> |
| `protected boolean`<br> | `isInitialised()` <br> |
| `protected void`<br> | `notify(EventNotifier notifier, javax.resource.spi.ConnectionEvent event)` <br> |
| `void`<br> | `removeConnectionEventListener(javax.resource.spi.ConnectionEventListener listener)` <br> |
| `protected void`<br> | `rollback()`<br>Provided as a callback method for the LocalTransaction object.<br> |
| `protected void`<br> | `setInitialised(boolean init)` <br> |
| `void`<br> | `setLogWriter(PrintWriter out)` <br> |


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->
#### JRemoteManagedConnection

```
protected JRemoteManagedConnection()
```

Constructor for JRemoteManagedConnection
<!--   -->
#### 


#### JRemoteManagedConnection

```
protected JRemoteManagedConnection(JConnection connection,
                                   Subject subject)
```

Constructor for JRemoteManagedConnection
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### getConnection

```
public JConnection getConnection()
```
<!--   -->
#### 


#### getSubject

```
protected Subject getSubject()
```
<!--   -->
#### 


#### getConnection

```
public Object getConnection(Subject subject,
                            javax.resource.spi.ConnectionRequestInfo cxRequestInfo)
                     throws javax.resource.ResourceException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>getConnection</code> in interface <code>javax.resource.spi.ManagedConnection</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>ManagedConnection.getConnection(Subject, ConnectionRequestInfo)</code></dd></dl><!--   -->
#### 


#### closeHandle

```
public void closeHandle(WrappedJConnection handle)
```
<!--   -->
#### 


#### destroy

```
public void destroy()
             throws javax.resource.ResourceException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>destroy</code> in interface <code>javax.resource.spi.ManagedConnection</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>ManagedConnection.destroy()</code></dd></dl><!--   -->
#### 


#### cleanup

```
public void cleanup()
             throws javax.resource.ResourceException
```

Put the connection into a state where it may be reused. All transactions should be rolledback, all state reset, and connection specific resources released.
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>cleanup</code> in interface <code>javax.resource.spi.ManagedConnection</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>ManagedConnection.cleanup()</code></dd></dl><!--   -->
#### 


#### associateConnection

```
public void associateConnection(Object handle)
                         throws javax.resource.ResourceException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>associateConnection</code> in interface <code>javax.resource.spi.ManagedConnection</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>ManagedConnection.associateConnection(Object)</code></dd></dl><!--   -->
#### 


#### addConnectionEventListener

```
public void addConnectionEventListener(javax.resource.spi.ConnectionEventListener listener)
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>addConnectionEventListener</code> in interface <code>javax.resource.spi.ManagedConnection</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>ManagedConnection.addConnectionEventListener(ConnectionEventListener)</code></dd></dl><!--   -->
#### 


#### removeConnectionEventListener

```
public void removeConnectionEventListener(javax.resource.spi.ConnectionEventListener listener)
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>removeConnectionEventListener</code> in interface <code>javax.resource.spi.ManagedConnection</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>ManagedConnection.removeConnectionEventListener(ConnectionEventListener)</code></dd></dl><!--   -->
#### 


#### getXAResource

```
public XAResource getXAResource()
                         throws javax.resource.ResourceException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>getXAResource</code> in interface <code>javax.resource.spi.ManagedConnection</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>ManagedConnection.getXAResource()</code></dd></dl><!--   -->
#### 


#### getLocalTransaction

```
public javax.resource.spi.LocalTransaction getLocalTransaction()
                                                        throws javax.resource.ResourceException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>getLocalTransaction</code> in interface <code>javax.resource.spi.ManagedConnection</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>ManagedConnection.getLocalTransaction()</code></dd></dl><!--   -->
#### 


#### getMetaData

```
public javax.resource.spi.ManagedConnectionMetaData getMetaData()
                                                         throws javax.resource.ResourceException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>getMetaData</code> in interface <code>javax.resource.spi.ManagedConnection</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>ManagedConnection.getMetaData()</code></dd></dl><!--   -->
#### 


#### setLogWriter

```
public void setLogWriter(PrintWriter out)
                  throws javax.resource.ResourceException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>setLogWriter</code> in interface <code>javax.resource.spi.ManagedConnection</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>ManagedConnection.setLogWriter(PrintWriter)</code></dd></dl><!--   -->
#### 


#### getLogWriter

```
public PrintWriter getLogWriter()
                         throws javax.resource.ResourceException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>getLogWriter</code> in interface <code>javax.resource.spi.ManagedConnection</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd><dt style="margin-left: 20px;"><span class="seeLabel">See Also:</span></dt><dd style="margin-left: 20px;"><code>ManagedConnection.getLogWriter()</code></dd></dl><!--   -->
#### 


#### getTransactionManager

```
public TransactionManager getTransactionManager()
```
<!--   -->
#### 


#### begin

```
protected void begin()
              throws javax.resource.ResourceException
```

Provided as a callback method for the LocalTransaction object. The LocalTransaction object should call this method when starting a transaction to allow the connection event listeners to be notified.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd></dl><!--   -->
#### 


#### commit

```
protected void commit()
               throws javax.resource.ResourceException
```

Provided as a callback method for the LocalTransaction object. The LocalTransaction object should call this method when committing a transaction to allow the connection event listeners to be notified.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd></dl><!--   -->
#### 


#### rollback

```
protected void rollback()
                 throws javax.resource.ResourceException
```

Provided as a callback method for the LocalTransaction object. The LocalTransaction object should call this method when rolling a transaction back to allow the connection event listeners to be notified.
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>javax.resource.ResourceException</code></dd></dl><!--   -->
#### 


#### isAlive

```
protected boolean isAlive()
```

Test physical connection is alive.
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">boolean Is connection alive</dd></dl><!--   -->
#### 


#### isInitialised

```
protected boolean isInitialised()
```
<!--   -->
#### 


#### setInitialised

```
protected void setInitialised(boolean init)
```
<!--   -->
#### 


#### notify

```
protected void notify(EventNotifier notifier,
                      javax.resource.spi.ConnectionEvent event)
```
<!--   -->
#### 


#### getLocalTransactionStartedEvent

```
protected javax.resource.spi.ConnectionEvent getLocalTransactionStartedEvent()
```
<!--   -->
#### 


#### getLocalTransactionCommittedEvent

```
protected javax.resource.spi.ConnectionEvent getLocalTransactionCommittedEvent()
```
<!--   -->
#### 


#### getLocalTransactionRolledbackEvent

```
protected javax.resource.spi.ConnectionEvent getLocalTransactionRolledbackEvent()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)
