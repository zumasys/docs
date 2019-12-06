# RequestListenerThread (jbasejdbc API)

**Created At:** 9/25/2017 10:51:53 AM  
**Updated At:** 4/3/2018 10:17:43 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="RequestListenerThread (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

# Class RequestListenerThread

<dl><dt>All Implemented Interfaces:</dt><dd>Runnable, javax.resource.spi.work.Work</dd></dl>
```
public class RequestListenerThread
extends Thread
implements javax.resource.spi.work.Work
```





<!-- ======== NESTED CLASS SUMMARY ======== -->



# <!--   -->

# Nested Class Summary



## <!--   -->

## Nested classes/interfaces inherited from class java.lang.Thread
`Thread.State, Thread.UncaughtExceptionHandler`





<!-- =========== FIELD SUMMARY =========== -->


# <!--   -->

# 


# Field Summary



## <!--   -->

## Fields inherited from class java.lang.Thread
`MAX_PRIORITY, MIN_PRIORITY, NORM_PRIORITY`



<!-- ======== CONSTRUCTOR SUMMARY ======== -->


# <!--   -->

# 


# Constructor Summary


| <br>Constructor<br> | <br>Description<br> |
| --- | --- |
| <br>`RequestListenerThread(RequestListenerService rls, RequestHandler h, Socket s)`<br> | <br><br> |
| <br>`RequestListenerThread(RequestListenerService rls, RequestHandler h, Socket s, int socketTimeout)`<br> | <br>Construct a request listener that will block for the supplied number of milliseconds.<br> |



<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

### 


# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>boolean<br> | <br>isClosed()<br> |
| <br>void<br> | <br>release()<br> |
| <br>void<br> | <br>run()<br> |




# <!--   -->

# 


# Methods inherited from class java.lang.Thread
`activeCount, checkAccess, clone, countStackFrames, currentThread, destroy, dumpStack, enumerate, getAllStackTraces, getContextClassLoader, getDefaultUncaughtExceptionHandler, getId, getName, getPriority, getStackTrace, getState, getThreadGroup, getUncaughtExceptionHandler, holdsLock, interrupt, interrupted, isAlive, isDaemon, isInterrupted, join, join, join, resume, setContextClassLoader, setDaemon, setDefaultUncaughtExceptionHandler, setName, setPriority, setUncaughtExceptionHandler, sleep, sleep, start, stop, stop, suspend, toString, yield`







# <!--   -->

# Methods inherited from class java.lang.Object
`equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

<!-- ========= CONSTRUCTOR DETAIL ======== -->



# <!--   -->

# 


# Constructor Detail
<!--   -->


#### **RequestListenerThread**

```
public RequestListenerThread(RequestListenerService rls, RequestHandler h, Socket s)
```




<!--   -->


#### 


#### 


#### **RequestListenerThread**

```
public RequestListenerThread(RequestListenerService rls, RequestHandler h, Socket s, int socketTimeout)
```

Construct a request listener that will block for the supplied number of milliseconds.
<dl><dt style="margin-left: 40px;"><br><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>rls</code> -</dd><dd style="margin-left: 60px;"><code>h</code> -</dd><dd style="margin-left: 60px;"><code>s</code> -</dd><dd style="margin-left: 60px;"><code>socketTimeout</code> -</dd><dt style="margin-left: 40px;"><br><span class="seeLabel"><strong>See Also:</strong></span></dt><dd style="margin-left: 40px;"><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/net/Socket.html?is-external=true#setSoTimeout-int-" title="class or interface in java.net"><code>Socket.setSoTimeout(int)</code></a></dd><p style="margin-left: 40px;"><br></p><p style="margin-left: 40px;"><br></p></dl>



<!-- ============ METHOD DETAIL ========== -->
<!--   -->

# **M****ethod Detail**
<!--   -->


#### **run**

```
public void run()
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Runnable.html?is-external=true#run--" title="class or interface in java.lang">run</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Runnable.html?is-external=true" title="class or interface in java.lang">Runnable</a></code></dd><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Overrides:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true#run--" title="class or interface in java.lang">run</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true" title="class or interface in java.lang">Thread</a></code></dd></dl>



<!--   -->


#### 


#### 


#### **release**

```
public void release()
```
<dl><dt style="margin-left: 40px;"><br><span class="overrideSpecifyLabel"><strong>Specified by:</strong></span></dt><dd style="margin-left: 40px;"><code>release</code> in interface <code>javax.resource.spi.work.Work</code></dd></dl>

<!--   -->


#### 


#### 


#### **isClosed**

```
public boolean isClosed()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
