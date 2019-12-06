# JRemoteLocalTransactionManager (jremote API)

**Created At:** 9/25/2017 12:08:01 PM  
**Updated At:** 4/5/2018 11:49:13 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JRemoteLocalTransactionManager (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JRemoteLocalTransactionManager

<dl><dt>All Implemented Interfaces:</dt><dd>Serializable, org.springframework.beans.factory.InitializingBean, org.springframework.transaction.PlatformTransactionManager</dd></dl>
* * *


```
public class JRemoteLocalTransactionManager
extends org.springframework.transaction.support.AbstractPlatformTransactionManager
implements org.springframework.beans.factory.InitializingBean
```
<dl><dt><br></dt></dl>

<!--   -->

### Nested Class Summary

- <!--   -->Nested classes/interfaces inherited from class org.springframework.transaction.support.AbstractPlatformTransactionManager
    - `org.springframework.transaction.support.AbstractPlatformTransactionManager.SuspendedResourcesHolder`




<!--   -->

### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `protected JConnectionFactory`<br> | `_connectionFactory` <br> |


- <!--   -->Fields inherited from class org.springframework.transaction.support.AbstractPlatformTransactionManager
    - `SYNCHRONIZATION_ALWAYS, SYNCHRONIZATION_NEVER, SYNCHRONIZATION_ON_ACTUAL_TRANSACTION`




<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JRemoteLocalTransactionManager()` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `afterPropertiesSet()` <br> |
| `protected void`<br> | `doBegin(Object transaction, org.springframework.transaction.TransactionDefinition td)` <br> |
| `protected void`<br> | `doCommit(org.springframework.transaction.support.DefaultTransactionStatus stat)` <br> |
| `protected Object`<br> | `doGetTransaction()` <br> |
| `protected void`<br> | `doRollback(org.springframework.transaction.support.DefaultTransactionStatus stat)` <br> |
| `JConnectionFactory`<br> | `getConnectionFactory()` <br> |
| `void`<br> | `setConnectionFactory(JConnectionFactory xf)` <br> |


- <!--   -->Methods inherited from class org.springframework.transaction.support.AbstractPlatformTransactionManager
    - `commit, determineTimeout, doCleanupAfterCompletion, doResume, doSetRollbackOnly, doSuspend, getDefaultTimeout, getTransaction, getTransactionSynchronization, invokeAfterCompletion, isExistingTransaction, isFailEarlyOnGlobalRollbackOnly, isGlobalRollbackOnParticipationFailure, isNestedTransactionAllowed, isRollbackOnCommitFailure, isValidateExistingTransaction, newTransactionStatus, prepareForCommit, registerAfterCompletionWithExistingTransaction, resume, rollback, setDefaultTimeout, setFailEarlyOnGlobalRollbackOnly, setGlobalRollbackOnParticipationFailure, setNestedTransactionAllowed, setRollbackOnCommitFailure, setTransactionSynchronization, setTransactionSynchronizationName, setValidateExistingTransaction, shouldCommitOnGlobalRollbackOnly, suspend, triggerBeforeCommit, triggerBeforeCompletion, useSavepointForNestedTransaction`
- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Field Detail
<!--   -->
#### \_connectionFactory

```
protected JConnectionFactory _connectionFactory
```
<!-- ========= CONSTRUCTOR DETAIL ======== -->
<!--   -->

### 


### Constructor Detail
<!--   -->
#### JRemoteLocalTransactionManager

```
public JRemoteLocalTransactionManager()
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


### Method Detail
<!--   -->
#### setConnectionFactory

```
public void setConnectionFactory(JConnectionFactory xf)
```
<!--   -->
#### 


#### getConnectionFactory

```
public JConnectionFactory getConnectionFactory()
```
<!--   -->
#### 


#### doBegin

```
protected void doBegin(Object transaction,
                       org.springframework.transaction.TransactionDefinition td)
                throws org.springframework.transaction.TransactionException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>doBegin</code> in class <code>org.springframework.transaction.support.AbstractPlatformTransactionManager</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>org.springframework.transaction.TransactionException</code></dd></dl><!--   -->
#### 


#### doCommit

```
protected void doCommit(org.springframework.transaction.support.DefaultTransactionStatus stat)
                 throws org.springframework.transaction.TransactionException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>doCommit</code> in class <code>org.springframework.transaction.support.AbstractPlatformTransactionManager</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>org.springframework.transaction.TransactionException</code></dd></dl><!--   -->
#### 


#### doGetTransaction

```
protected Object doGetTransaction()
                           throws org.springframework.transaction.TransactionException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>doGetTransaction</code> in class <code>org.springframework.transaction.support.AbstractPlatformTransactionManager</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>org.springframework.transaction.TransactionException</code></dd></dl><!--   -->
#### 


#### doRollback

```
protected void doRollback(org.springframework.transaction.support.DefaultTransactionStatus stat)
                   throws org.springframework.transaction.TransactionException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>doRollback</code> in class <code>org.springframework.transaction.support.AbstractPlatformTransactionManager</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>org.springframework.transaction.TransactionException</code></dd></dl><!--   -->
#### 


#### afterPropertiesSet

```
public void afterPropertiesSet()
                        throws Exception
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>afterPropertiesSet</code> in interface <code>org.springframework.beans.factory.InitializingBean</code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Exception.html?is-external=true" title="class or interface in java.lang">Exception</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->


Back to [jREMOTE API](com_jbase_jremote_package-summary)
