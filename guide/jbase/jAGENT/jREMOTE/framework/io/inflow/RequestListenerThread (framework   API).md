# RequestListenerThread (framework   API)

**Created At:** 9/25/2017 10:30:26 AM  
**Updated At:** 2/15/2018 8:02:41 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="RequestListenerThread (framework   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39226-inflow/com_jbase_framework_io_inflow_package-summary)
- Class
- [Use](/39227-class-use/com_jbase_framework_io_inflow_class-use_RequestListenerThread)
- [Tree](/39226-inflow/com_jbase_framework_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- [Prev Class](/39226-inflow/com_jbase_framework_io_inflow_RequestListenerServiceMBean "interface in com.jbase.framework.io.inflow")
- [Next Class](/39226-inflow/com_jbase_framework_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.framework.io.inflow")


- [Frames](../../../../../index.html?com/jbase/framework/io/inflow//39226-inflow/com_jbase_framework_io_inflow_RequestListenerThread)
- [No Frames](/39226-inflow/com_jbase_framework_io_inflow_RequestListenerThread)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

com.jbase.framework.io.inflow

## Class RequestListenerThread

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [java.lang.Thread](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true "class or interface in java.lang")
    - - com.jbase.framework.io.inflow.RequestListenerThread


- All Implemented Interfaces:[Runnable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Runnable.html?is-external=true "class or interface in java.lang"), javax.resource.spi.work.Work
* * *


```
public class RequestListenerThread
extends Thread
implements javax.resource.spi.work.Work
```

- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from class java.lang.[Thread](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true "class or interface in java.lang")
`Thread.State, Thread.UncaughtExceptionHandler`


    - ### Field Summary

        - ### Fields inherited from class java.lang.[Thread](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true "class or interface in java.lang")
`MAX_PRIORITY, MIN_PRIORITY, NORM_PRIORITY`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s)`  |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s,<br>                     int socketTimeout)`<br>Construct a request listener that will block for the supplied<br> number of milliseconds.<br> |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | `isClosed()`  |
| `void` | `release()`  |
| `void` | `run()`  |


        - ### Methods inherited from class java.lang.[Thread](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true "class or interface in java.lang")
`activeCount, checkAccess, clone, countStackFrames, currentThread, destroy, dumpStack, enumerate, getAllStackTraces, getContextClassLoader, getDefaultUncaughtExceptionHandler, getId, getName, getPriority, getStackTrace, getState, getThreadGroup, getUncaughtExceptionHandler, holdsLock, interrupt, interrupted, isAlive, isDaemon, isInterrupted, join, join, join, resume, setContextClassLoader, setDaemon, setDefaultUncaughtExceptionHandler, setName, setPriority, setUncaughtExceptionHandler, sleep, sleep, start, stop, stop, suspend, toString, yield`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

- - ### Constructor Detail

        - #### RequestListenerThread

```
public RequestListenerThread(RequestListenerService rls,
                             RequestHandler h,
                             Socket s)
```


        - #### RequestListenerThread

```
public RequestListenerThread(RequestListenerService rls,
                             RequestHandler h,
                             Socket s,
                             int socketTimeout)
```

Construct a request listener that will block for the supplied<br> number of milliseconds.
Parameters:`rls` - `h` - `s` - `socketTimeout` - See Also:[`Socket.setSoTimeout(int)`](http://java.sun.com/j2se/1.5.0/docs/api/java/net/Socket.html?is-external=true#setSoTimeout-int- "class or interface in java.net")


    - ### Method Detail

        - #### run

```
public void run()
```
Specified by:`run` in interface `Runnable`Overrides:`run` in class `Thread`


        - #### release

```
public void release()
```
Specified by:`release` in interface `javax.resource.spi.work.Work`


        - #### isClosed

```
public boolean isClosed()
```

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39226-inflow/com_jbase_framework_io_inflow_package-summary)
- Class
- [Use](/39227-class-use/com_jbase_framework_io_inflow_class-use_RequestListenerThread)
- [Tree](/39226-inflow/com_jbase_framework_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


framework <br>

- [Prev Class](/39226-inflow/com_jbase_framework_io_inflow_RequestListenerServiceMBean "interface in com.jbase.framework.io.inflow")
- [Next Class](/39226-inflow/com_jbase_framework_io_inflow_RequestProcessingAbstractFactory "interface in com.jbase.framework.io.inflow")


- [Frames](../../../../../index.html?com/jbase/framework/io/inflow//39226-inflow/com_jbase_framework_io_inflow_RequestListenerThread)
- [No Frames](/39226-inflow/com_jbase_framework_io_inflow_RequestListenerThread)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
