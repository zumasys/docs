# RequestListenerService (jremote   API)

**Created At:** 9/25/2017 11:50:32 AM  
**Updated At:** 2/15/2018 8:02:48 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="RequestListenerService (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10,"i21":10,"i22":10,"i23":10,"i24":10,"i25":10,"i26":10,"i27":10,"i28":10,"i29":10,"i30":10,"i31":10,"i32":10,"i33":10,"i34":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)
- Class
- [Use](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestListenerService)
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandlerException "class in com.jbase.jremote.io.inflow")
- [Next Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerServiceMBean "interface in com.jbase.jremote.io.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/io/inflow//39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService)
- [No Frames](/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService)


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

com.jbase.jremote.io.inflow

## Class RequestListenerService

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [java.lang.Thread](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true "class or interface in java.lang")
    - - com.jbase.jremote.io.inflow.RequestListenerService


- All Implemented Interfaces:[RequestListenerServiceMBean](/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerServiceMBean "interface in com.jbase.jremote.io.inflow"), [Runnable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Runnable.html?is-external=true "class or interface in java.lang"), javax.resource.spi.work.Work
* * *


```
public class RequestListenerService
extends Thread
implements RequestListenerServiceMBean, javax.resource.spi.work.Work
```

- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from class java.lang.[Thread](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true "class or interface in java.lang")
`Thread.State, Thread.UncaughtExceptionHandler`


    - ### Field Summary

        - ### Fields inherited from class java.lang.[Thread](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true "class or interface in java.lang")
`MAX_PRIORITY, MIN_PRIORITY, NORM_PRIORITY`


    - ### Constructor Summary


Constructors | Modifier | Constructor and Description |
| --- | --- |
| `protected` | `RequestListenerService()`<br>Provided to allow tests to mock out methods of this class<br> |
| `` | `RequestListenerService(RequestProcessingAbstractFactory requestProcessingFactory,<br>                      javax.resource.spi.XATerminator xaTerminator,<br>                      String host,<br>                      int port)`<br>Construct service that will not create new threads for client connections.<br> |
| `` | `RequestListenerService(RequestProcessingAbstractFactory requestProcessingFactory,<br>                      javax.resource.spi.XATerminator xaTerminator,<br>                      javax.resource.spi.work.WorkManager workManager,<br>                      String host,<br>                      int port,<br>                      boolean threadPerConnection)`<br>Supply a work manager and optionally create a new thread to handle<br> each client connection.<br> |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `void` | `decrementActiveConnections()`  |
| `protected boolean` | `doAccept(SelectionKey key)`  |
| `protected void` | `doClose(SelectionKey key)`  |
| `protected boolean` | `doRead(SelectionKey key)`  |
| `protected boolean` | `doWrite(SelectionKey key)`  |
| `int` | `getActivationsPerMinute()`<br>Returns the number of activation processed per<br> minute from the time statistics were activated.<br> |
| `int` | `getActivationsProcessedInLastMinute(StatisticsCounter statisticType)`  |
| `int` | `getActiveConnections()`<br>Return the number clients that are currently connected.<br> |
| `int` | `getActiveTransactions()`<br>Return the number of transactions that are currently being processed.<br> |
| `int` | `getDefaultReceiveBufferSize()`  |
| `int` | `getDefaultSendBufferSize()`  |
| `protected double` | `getElapsedMinutes(long startedTime)`  |
| `javax.resource.spi.work.ExecutionContext` | `getExecutionContext(String sessionId)`  |
| `protected long` | `getNowTime()`  |
| `protected RequestHandler` | `getRequestHandler()`  |
| `long` | `getTotalActivations()`<br>Return the total number of activation requests processed.<br> |
| `javax.resource.spi.work.WorkManager` | `getWorkManager()`  |
| `javax.resource.spi.XATerminator` | `getXATerminator()`  |
| `void` | `incrementActivationCount(StatisticsCounter statisticType)`<br>A RequestHandler is able to call back to this RequestListenerService to<br> track what it considers an activation.<br> |
| `void` | `incrementActiveConnections()`  |
| `boolean` | `isListening()`  |
| `boolean` | `isRunning()`  |
| `void` | `release()`  |
| `javax.resource.spi.work.ExecutionContext` | `removeExecutionContext(String sessionId)`  |
| `void` | `run()`  |
| `void` | `send(SocketChannel channel,<br>    byte[] response)`  |
| `void` | `setDefaultReceiveBufferSize(int bytes)`<br>Modify the TCP buffer settings to maximize the performance<br> for the client network.<br> |
| `void` | `setDefaultSendBufferSize(int bytes)`  |
| `void` | `setExecutionContext(String sessionId,<br>                   javax.resource.spi.work.ExecutionContext ec)`  |
| `void` | `setRunning(Boolean running)`  |
| `protected void` | `startIOListener()`  |
| `protected void` | `startListener()`  |
| `protected void` | `startNIOListener()`  |
| `void` | `startStatistics()`<br>Start recording statistics and reset any existing statistical data.<br> |
| `void` | `stopStatistics()`<br>Stop recording statistics and reset any existing statistical data.<br> |


        - ### Methods inherited from class java.lang.[Thread](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Thread.html?is-external=true "class or interface in java.lang")
`activeCount, checkAccess, clone, countStackFrames, currentThread, destroy, dumpStack, enumerate, getAllStackTraces, getContextClassLoader, getDefaultUncaughtExceptionHandler, getId, getName, getPriority, getStackTrace, getState, getThreadGroup, getUncaughtExceptionHandler, holdsLock, interrupt, interrupted, isAlive, isDaemon, isInterrupted, join, join, join, resume, setContextClassLoader, setDaemon, setDefaultUncaughtExceptionHandler, setName, setPriority, setUncaughtExceptionHandler, sleep, sleep, start, stop, stop, suspend, toString, yield`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

- - ### Constructor Detail

        - #### RequestListenerService

```
protected RequestListenerService()
```

Provided to allow tests to mock out methods of this class


        - #### RequestListenerService

```
public RequestListenerService(RequestProcessingAbstractFactory requestProcessingFactory,
                              javax.resource.spi.XATerminator xaTerminator,
                              String host,
                              int port)
```

Construct service that will not create new threads for client connections.
Parameters:`requestProcessingFactory` - `xaTerminator` - `host` - `port` -


        - #### RequestListenerService

```
public RequestListenerService(RequestProcessingAbstractFactory requestProcessingFactory,
                              javax.resource.spi.XATerminator xaTerminator,
                              javax.resource.spi.work.WorkManager workManager,
                              String host,
                              int port,
                              boolean threadPerConnection)
```

Supply a work manager and optionally create a new thread to handle<br> each client connection.
Parameters:`requestProcessingFactory` - `xaTerminator` - `workManager` - `host` - `port` - `threadPerConnection` -


    - ### Method Detail

        - #### isRunning

```
public boolean isRunning()
```


        - #### isListening

```
public boolean isListening()
```


        - #### setRunning

```
public void setRunning(Boolean running)
```


        - #### getRequestHandler

```
protected RequestHandler getRequestHandler()
```


        - #### getXATerminator

```
public javax.resource.spi.XATerminator getXATerminator()
```


        - #### getWorkManager

```
public javax.resource.spi.work.WorkManager getWorkManager()
```


        - #### getExecutionContext

```
public javax.resource.spi.work.ExecutionContext getExecutionContext(String sessionId)
```


        - #### removeExecutionContext

```
public javax.resource.spi.work.ExecutionContext removeExecutionContext(String sessionId)
```


        - #### setExecutionContext

```
public void setExecutionContext(String sessionId,
                                javax.resource.spi.work.ExecutionContext ec)
```


        - #### startListener

```
protected void startListener()
```


        - #### startIOListener

```
protected void startIOListener()
                        throws IOException
```
Throws:`IOException`


        - #### startNIOListener

```
protected void startNIOListener()
                         throws IOException
```
Throws:`IOException`


        - #### release

```
public void release()
```
Specified by:`release` in interface `javax.resource.spi.work.Work`


        - #### run

```
public void run()
```
Specified by:`run` in interface `Runnable`Overrides:`run` in class `Thread`


        - #### doAccept

```
protected boolean doAccept(SelectionKey key)
```


        - #### doRead

```
protected boolean doRead(SelectionKey key)
```


        - #### doWrite

```
protected boolean doWrite(SelectionKey key)
```


        - #### doClose

```
protected void doClose(SelectionKey key)
```


        - #### send

```
public void send(SocketChannel channel,
                 byte[] response)
```


        - #### incrementActiveConnections

```
public void incrementActiveConnections()
```


        - #### decrementActiveConnections

```
public void decrementActiveConnections()
```


        - #### getActiveConnections

```
public int getActiveConnections()
```

Description copied from interface: `RequestListenerServiceMBean`

Return the number clients that are currently connected.
Specified by:`getActiveConnections` in interface `RequestListenerServiceMBean`Returns:int


        - #### setDefaultReceiveBufferSize

```
public void setDefaultReceiveBufferSize(int bytes)
```

Description copied from interface: `RequestListenerServiceMBean`

Modify the TCP buffer settings to maximize the performance<br> for the client network.
Specified by:`setDefaultReceiveBufferSize` in interface `RequestListenerServiceMBean`


        - #### getDefaultReceiveBufferSize

```
public int getDefaultReceiveBufferSize()
```
Specified by:`getDefaultReceiveBufferSize` in interface `RequestListenerServiceMBean`


        - #### setDefaultSendBufferSize

```
public void setDefaultSendBufferSize(int bytes)
```
Specified by:`setDefaultSendBufferSize` in interface `RequestListenerServiceMBean`


        - #### getDefaultSendBufferSize

```
public int getDefaultSendBufferSize()
```
Specified by:`getDefaultSendBufferSize` in interface `RequestListenerServiceMBean`


        - #### getActiveTransactions

```
public int getActiveTransactions()
```

Description copied from interface: `RequestListenerServiceMBean`

Return the number of transactions that are currently being processed.
Specified by:`getActiveTransactions` in interface `RequestListenerServiceMBean`Returns:int


        - #### getTotalActivations

```
public long getTotalActivations()
```

Description copied from interface: `RequestListenerServiceMBean`

Return the total number of activation requests processed.
Specified by:`getTotalActivations` in interface `RequestListenerServiceMBean`Returns:long


        - #### getActivationsPerMinute

```
public int getActivationsPerMinute()
```

Description copied from interface: `RequestListenerServiceMBean`

Returns the number of activation processed per<br> minute from the time statistics were activated.
Specified by:`getActivationsPerMinute` in interface `RequestListenerServiceMBean`Returns:int


        - #### getElapsedMinutes

```
protected double getElapsedMinutes(long startedTime)
```


        - #### getNowTime

```
protected long getNowTime()
```


        - #### getActivationsProcessedInLastMinute

```
public int getActivationsProcessedInLastMinute(StatisticsCounter statisticType)
```


        - #### incrementActivationCount

```
public void incrementActivationCount(StatisticsCounter statisticType)
```

A RequestHandler is able to call back to this RequestListenerService to<br> track what it considers an activation.  In general the RequestListenerService<br> knows nothing more than the fact that input is ready for processing.  This<br> may be one or more activations, therefore we delegate the responsibility to<br> the RequestHandler.
Parameters:`statisticType` -


        - #### startStatistics

```
public void startStatistics()
```

Description copied from interface: `RequestListenerServiceMBean`

Start recording statistics and reset any existing statistical data.
Specified by:`startStatistics` in interface `RequestListenerServiceMBean`


        - #### stopStatistics

```
public void stopStatistics()
```

Description copied from interface: `RequestListenerServiceMBean`

Stop recording statistics and reset any existing statistical data.
Specified by:`stopStatistics` in interface `RequestListenerServiceMBean`

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39256-inflow/com_jbase_jremote_io_inflow_package-summary)
- Class
- [Use](/39257-class-use/com_jbase_jremote_io_inflow_class-use_RequestListenerService)
- [Tree](/39256-inflow/com_jbase_jremote_io_inflow_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestHandlerException "class in com.jbase.jremote.io.inflow")
- [Next Class](/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerServiceMBean "interface in com.jbase.jremote.io.inflow")


- [Frames](../../../../../index.html?com/jbase/jremote/io/inflow//39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService)
- [No Frames](/39256-inflow/com_jbase_jremote_io_inflow_RequestListenerService)


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
