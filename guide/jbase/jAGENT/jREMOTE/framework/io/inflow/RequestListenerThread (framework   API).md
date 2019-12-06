# RequestListenerThread (framework   API)

**Created At:** 9/25/2017 10:30:26 AM  
**Updated At:** 2/15/2018 8:02:41 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="RequestListenerThread (framework   API)";
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
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
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


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_top");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ========= END OF TOP NAVBAR ========= --><!-- ======== START OF CLASS DATA ======== -->
com.jbase.framework.io.inflow

## Class RequestListenerThread

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [java.lang.Thread](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true "class or interface in java.lang")
    - - com.jbase.framework.io.inflow.RequestListenerThread


- <dl><dt>All Implemented Interfaces:</dt>
<dd>
<a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Runnable.html?is-external=true" title="class or interface in java.lang">Runnable</a>, javax.resource.spi.work.Work</dd></dl>
* * *


```
public class RequestListenerThread
extends Thread
implements javax.resource.spi.work.Work
```

- <!-- ======== NESTED CLASS SUMMARY ======== -->
    - <!--   -->
### Nested Class Summary

        - <!--   -->
### Nested classes/interfaces inherited from class java.lang.[Thread](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true "class or interface in java.lang")
`Thread.State, Thread.UncaughtExceptionHandler`

<!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary

        - <!--   -->
### Fields inherited from class java.lang.[Thread](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true "class or interface in java.lang")
`MAX_PRIORITY, MIN_PRIORITY, NORM_PRIORITY`

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s)`  |
| `RequestListenerThread(RequestListenerService rls,<br>                     RequestHandler h,<br>                     Socket s,<br>                     int socketTimeout)`<br>Construct a request listener that will block for the supplied<br> number of milliseconds.<br> |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | `isClosed()`  |
| `void` | `release()`  |
| `void` | `run()`  |


        - <!--   -->
### Methods inherited from class java.lang.[Thread](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true "class or interface in java.lang")
`activeCount, checkAccess, clone, countStackFrames, currentThread, destroy, dumpStack, enumerate, getAllStackTraces, getContextClassLoader, getDefaultUncaughtExceptionHandler, getId, getName, getPriority, getStackTrace, getState, getThreadGroup, getUncaughtExceptionHandler, holdsLock, interrupt, interrupted, isAlive, isDaemon, isInterrupted, join, join, join, resume, setContextClassLoader, setDaemon, setDefaultUncaughtExceptionHandler, setName, setPriority, setUncaughtExceptionHandler, sleep, sleep, start, stop, stop, suspend, toString, yield`


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### RequestListenerThread

```
public RequestListenerThread(RequestListenerService rls,
                             RequestHandler h,
                             Socket s)
```

<!--   -->
        - #### RequestListenerThread

```
public RequestListenerThread(RequestListenerService rls,
                             RequestHandler h,
                             Socket s,
                             int socketTimeout)
```

Construct a request listener that will block for the supplied<br> number of milliseconds.
<dl><dt><span class="paramLabel">Parameters:</span></dt>
<dd>
<code>rls</code> - </dd>
<dd>
<code>h</code> - </dd>
<dd>
<code>s</code> - </dd>
<dd>
<code>socketTimeout</code> - </dd>
<dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/net/Socket.html?is-external=true#setSoTimeout-int-" title="class or interface in java.net"><code>Socket.setSoTimeout(int)</code></a></dd></dl>

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### run

```
public void run()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Runnable.html?is-external=true#run--" title="class or interface in java.lang">run</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Runnable.html?is-external=true" title="class or interface in java.lang">Runnable</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true#run--" title="class or interface in java.lang">run</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true" title="class or interface in java.lang">Thread</a></code>
</dd></dl>

<!--   -->
        - #### release

```
public void release()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>release</code> in interface <code>javax.resource.spi.work.Work</code>
</dd></dl>

<!--   -->
        - #### isClosed

```
public boolean isClosed()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
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


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_bottom");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ======== END OF BOTTOM NAVBAR ======= -->
<small>			<center>			<i>Copyright © 2017 jBASE, Inc.. All Rights Reserved.</i>		</center></small>
