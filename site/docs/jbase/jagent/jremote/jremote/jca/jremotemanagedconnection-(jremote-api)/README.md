# JRemoteManagedConnection (jremote API)

**Created At:** 9/25/2017 12:05:28 PM  
**Updated At:** 4/6/2018 12:19:31 AM  
**Original Doc:** [com_jbase_jremote_jca_jremotemanagedconnection](https://docs.jbase.com/39258-jca/com_jbase_jremote_jca_jremotemanagedconnection)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JRemoteManagedConnection (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10,"i21":10,"i22":10,"i23":10,"i24":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class JRemoteManagedConnection

All Implemented Interfaces:javax.resource.spi.ManagedConnection
* * *


```
public class JRemoteManagedConnection
extends Object
implements javax.resource.spi.ManagedConnection
```

The application server considers this managed connection to be the physical connection to a remote jBASE instance.

### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| `protected `<br> | `JRemoteManagedConnection()`<br>Constructor for JRemoteManagedConnection<br> |
| `protected `<br> | `JRemoteManagedConnection(JConnection connection, Subject subject)`<br>Constructor for JRemoteManagedConnection<br> |






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


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JRemoteManagedConnection

```
protected JRemoteManagedConnection()
```

Constructor for JRemoteManagedConnection

#### 


#### JRemoteManagedConnection

```
protected JRemoteManagedConnection(JConnection connection,
                                   Subject subject)
```

Constructor for JRemoteManagedConnection



### 


### Method Detail

#### getConnection

```
public JConnection getConnection()
```

#### 


#### getSubject

```
protected Subject getSubject()
```

#### 


#### getConnection

```
public Object getConnection(Subject subject,
                            javax.resource.spi.ConnectionRequestInfo cxRequestInfo)
                     throws javax.resource.ResourceException
```
Specified by:`getConnection` in interface `javax.resource.spi.ManagedConnection`Throws:`javax.resource.ResourceException`See Also:`ManagedConnection.getConnection(Subject, ConnectionRequestInfo)`
#### 


#### closeHandle

```
public void closeHandle(WrappedJConnection handle)
```

#### 


#### destroy

```
public void destroy()
             throws javax.resource.ResourceException
```
Specified by:`destroy` in interface `javax.resource.spi.ManagedConnection`Throws:`javax.resource.ResourceException`See Also:`ManagedConnection.destroy()`
#### 


#### cleanup

```
public void cleanup()
             throws javax.resource.ResourceException
```

Put the connection into a state where it may be reused. All transactions should be rolledback, all state reset, and connection specific resources released.
Specified by:`cleanup` in interface `javax.resource.spi.ManagedConnection`Throws:`javax.resource.ResourceException`See Also:`ManagedConnection.cleanup()`
#### 


#### associateConnection

```
public void associateConnection(Object handle)
                         throws javax.resource.ResourceException
```
Specified by:`associateConnection` in interface `javax.resource.spi.ManagedConnection`Throws:`javax.resource.ResourceException`See Also:`ManagedConnection.associateConnection(Object)`
#### 


#### addConnectionEventListener

```
public void addConnectionEventListener(javax.resource.spi.ConnectionEventListener listener)
```
Specified by:`addConnectionEventListener` in interface `javax.resource.spi.ManagedConnection`See Also:`ManagedConnection.addConnectionEventListener(ConnectionEventListener)`
#### 


#### removeConnectionEventListener

```
public void removeConnectionEventListener(javax.resource.spi.ConnectionEventListener listener)
```
Specified by:`removeConnectionEventListener` in interface `javax.resource.spi.ManagedConnection`See Also:`ManagedConnection.removeConnectionEventListener(ConnectionEventListener)`
#### 


#### getXAResource

```
public XAResource getXAResource()
                         throws javax.resource.ResourceException
```
Specified by:`getXAResource` in interface `javax.resource.spi.ManagedConnection`Throws:`javax.resource.ResourceException`See Also:`ManagedConnection.getXAResource()`
#### 


#### getLocalTransaction

```
public javax.resource.spi.LocalTransaction getLocalTransaction()
                                                        throws javax.resource.ResourceException
```
Specified by:`getLocalTransaction` in interface `javax.resource.spi.ManagedConnection`Throws:`javax.resource.ResourceException`See Also:`ManagedConnection.getLocalTransaction()`
#### 


#### getMetaData

```
public javax.resource.spi.ManagedConnectionMetaData getMetaData()
                                                         throws javax.resource.ResourceException
```
Specified by:`getMetaData` in interface `javax.resource.spi.ManagedConnection`Throws:`javax.resource.ResourceException`See Also:`ManagedConnection.getMetaData()`
#### 


#### setLogWriter

```
public void setLogWriter(PrintWriter out)
                  throws javax.resource.ResourceException
```
Specified by:`setLogWriter` in interface `javax.resource.spi.ManagedConnection`Throws:`javax.resource.ResourceException`See Also:`ManagedConnection.setLogWriter(PrintWriter)`
#### 


#### getLogWriter

```
public PrintWriter getLogWriter()
                         throws javax.resource.ResourceException
```
Specified by:`getLogWriter` in interface `javax.resource.spi.ManagedConnection`Throws:`javax.resource.ResourceException`See Also:`ManagedConnection.getLogWriter()`
#### 


#### getTransactionManager

```
public TransactionManager getTransactionManager()
```

#### 


#### begin

```
protected void begin()
              throws javax.resource.ResourceException
```

Provided as a callback method for the LocalTransaction object. The LocalTransaction object should call this method when starting a transaction to allow the connection event listeners to be notified.
Throws:`javax.resource.ResourceException`
#### 


#### commit

```
protected void commit()
               throws javax.resource.ResourceException
```

Provided as a callback method for the LocalTransaction object. The LocalTransaction object should call this method when committing a transaction to allow the connection event listeners to be notified.
Throws:`javax.resource.ResourceException`
#### 


#### rollback

```
protected void rollback()
                 throws javax.resource.ResourceException
```

Provided as a callback method for the LocalTransaction object. The LocalTransaction object should call this method when rolling a transaction back to allow the connection event listeners to be notified.
Throws:`javax.resource.ResourceException`
#### 


#### isAlive

```
protected boolean isAlive()
```

Test physical connection is alive.
Returns:boolean Is connection alive
#### 


#### isInitialised

```
protected boolean isInitialised()
```

#### 


#### setInitialised

```
protected void setInitialised(boolean init)
```

#### 


#### notify

```
protected void notify(EventNotifier notifier,
                      javax.resource.spi.ConnectionEvent event)
```

#### 


#### getLocalTransactionStartedEvent

```
protected javax.resource.spi.ConnectionEvent getLocalTransactionStartedEvent()
```

#### 


#### getLocalTransactionCommittedEvent

```
protected javax.resource.spi.ConnectionEvent getLocalTransactionCommittedEvent()
```

#### 


#### getLocalTransactionRolledbackEvent

```
protected javax.resource.spi.ConnectionEvent getLocalTransactionRolledbackEvent()
```

Back to [jREMOTE API](com_jbase_jremote_package-summary)
