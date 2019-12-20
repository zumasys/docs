# TransactionManager (jremote API)

**Created At:** 9/25/2017 12:08:35 PM  
**Updated At:** 4/6/2018 12:10:25 AM  
**Original Doc:** [com_jbase_jremote_jca_transactionmanager](https://docs.jbase.com/39258-jca/com_jbase_jremote_jca_transactionmanager)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="TransactionManager (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class TransactionManager

All Implemented Interfaces:javax.resource.spi.LocalTransaction
* * *


```
public class TransactionManager
extends Object
implements javax.resource.spi.LocalTransaction
```

### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| `protected `<br> | `TransactionManager(JRemoteManagedConnection managedConnection)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `begin()`<br>Begin a transaction on this connection.<br> |
| `void`<br> | `commit()`<br>Commit a transaction on this connection.<br> |
| `protected boolean`<br> | `isManagedTransaction()` <br> |
| `void`<br> | `rollback()`<br>Rollback a transaction on this connection.<br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### TransactionManager

```
protected TransactionManager(JRemoteManagedConnection managedConnection)
```



### 


### Method Detail

#### begin

```
public void begin()
           throws javax.resource.ResourceException
```

Begin a transaction on this connection. Performs a callback to the managed connection begin.
Specified by:`begin` in interface `javax.resource.spi.LocalTransaction`Throws:`javax.resource.ResourceException`See Also:`#begin()`
#### commit

```
public void commit()
            throws javax.resource.ResourceException
```

Commit a transaction on this connection. Performs a callback to the managed connection commit.
Specified by:`commit` in interface `javax.resource.spi.LocalTransaction`Throws:`javax.resource.ResourceException`See Also:`#commit()`
#### rollback

```
public void rollback()
              throws javax.resource.ResourceException
```

Rollback a transaction on this connection. Performs a callback to the managed connection rollback.
Specified by:`rollback` in interface `javax.resource.spi.LocalTransaction`Throws:`javax.resource.ResourceException`See Also:`#rollback()`
#### isManagedTransaction

```
protected boolean isManagedTransaction()
```



Back to [jREMOTE API](com_jbase_jremote_package-summary)


