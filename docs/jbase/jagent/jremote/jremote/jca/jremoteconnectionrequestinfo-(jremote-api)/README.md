# JRemoteConnectionRequestInfo (jremote API)

**Created At:** 9/25/2017 12:05:22 PM  
**Updated At:** 4/6/2018 12:14:49 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JRemoteConnectionRequestInfo (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class JRemoteConnectionRequestInfo

All Implemented Interfaces:javax.resource.spi.ConnectionRequestInfo
* * *


```
public class JRemoteConnectionRequestInfo
extends Object
implements javax.resource.spi.ConnectionRequestInfo
```

This ConnectionRequestInfo allows JRemote clients to receive well defined callbacks for certain connection events.

A ConnectionRequestInfo object is used by the resource adapter to pass connection request information through the container for connection creation and matching.

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JRemoteConnectionRequestInfo(JConnectionCallbackHandler handler)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JConnectionCallbackHandler`<br> | `getCallbackHandler()` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- Methods inherited from interface javax.resource.spi.ConnectionRequestInfo
    - `equals, hashCode`

### Constructor Detail



#### JRemoteConnectionRequestInfo

```
public JRemoteConnectionRequestInfo(JConnectionCallbackHandler handler)
```





### 


### Method Detail



#### getCallbackHandler

```
public JConnectionCallbackHandler getCallbackHandler()
```

Back to [jREMOTE API](com_jbase_jremote_package-summary)
