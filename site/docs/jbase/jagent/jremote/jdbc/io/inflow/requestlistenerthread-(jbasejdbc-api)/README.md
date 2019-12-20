# RequestListenerThread (jbasejdbc API)

**Created At:** 9/25/2017 10:51:53 AM  
**Updated At:** 4/3/2018 10:17:43 PM  
**Original Doc:** [com_jbase_jdbc_io_inflow_requestlistenerthread](https://docs.jbase.com/39238-inflow/com_jbase_jdbc_io_inflow_requestlistenerthread)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="RequestListenerThread (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



# Class RequestListenerThread

All Implemented Interfaces:Runnable, javax.resource.spi.work.Work
```
public class RequestListenerThread
extends Thread
implements javax.resource.spi.work.Work
```





# 

# Nested Class Summary



## 

## Nested classes/interfaces inherited from class java.lang.Thread
`Thread.State, Thread.UncaughtExceptionHandler`








# 

# 


# Field Summary



## 

## Fields inherited from class java.lang.Thread
`MAX_PRIORITY, MIN_PRIORITY, NORM_PRIORITY`






# 

# 


# Constructor Summary


| <br>Constructor<br> | <br>Description<br> |
| --- | --- |
| <br>`RequestListenerThread(RequestListenerService rls, RequestHandler h, Socket s)`<br> | <br><br> |
| <br>`RequestListenerThread(RequestListenerService rls, RequestHandler h, Socket s, int socketTimeout)`<br> | <br>Construct a request listener that will block for the supplied number of milliseconds.<br> |






### 


# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>boolean<br> | <br>isClosed()<br> |
| <br>void<br> | <br>release()<br> |
| <br>void<br> | <br>run()<br> |




# 

# 


# Methods inherited from class java.lang.Thread
`activeCount, checkAccess, clone, countStackFrames, currentThread, destroy, dumpStack, enumerate, getAllStackTraces, getContextClassLoader, getDefaultUncaughtExceptionHandler, getId, getName, getPriority, getStackTrace, getState, getThreadGroup, getUncaughtExceptionHandler, holdsLock, interrupt, interrupted, isAlive, isDaemon, isInterrupted, join, join, join, resume, setContextClassLoader, setDaemon, setDefaultUncaughtExceptionHandler, setName, setPriority, setUncaughtExceptionHandler, sleep, sleep, start, stop, stop, suspend, toString, yield`







# 

# Methods inherited from class java.lang.Object
`equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

# 

# 


# Constructor Detail



#### **RequestListenerThread**

```
public RequestListenerThread(RequestListenerService rls, RequestHandler h, Socket s)
```







#### 


#### 


#### **RequestListenerThread**

```
public RequestListenerThread(RequestListenerService rls, RequestHandler h, Socket s, int socketTimeout)
```

Construct a request listener that will block for the supplied number of milliseconds.

**Parameters:**`rls` -`h` -`s` -`socketTimeout` -
**See Also:**[`Socket.setSoTimeout(int)`](http://java.sun.com/j2se/1.5.0/docs/api/java/net/Socket.html?is-external=true#setSoTimeout-int- "class or interface in java.net")










# **M****ethod Detail**



#### **run**

```
public void run()
```

**Specified by:**`run` in interface `Runnable`
**Overrides:**`run` in class `Thread`






#### 


#### 


#### **release**

```
public void release()
```

**Specified by:**`release` in interface `javax.resource.spi.work.Work`




#### 


#### 


#### **isClosed**

```
public boolean isClosed()
```


