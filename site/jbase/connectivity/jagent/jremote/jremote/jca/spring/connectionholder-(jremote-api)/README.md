# ConnectionHolder (jremote API)

**Created At:** 9/25/2017 12:07:47 PM  
**Updated At:** 4/5/2018 11:45:13 PM  
**Original Doc:** [com_jbase_jremote_jca_spring_connectionholder](https://docs.jbase.com/39268-spring/com_jbase_jremote_jca_spring_connectionholder)  
**Original ID:** 278286  
**Internal:** No  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ConnectionHolder (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class ConnectionHolder

```
public class ConnectionHolder
extends org.springframework.transaction.support.ResourceHolderSupport
```

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `ConnectionHolder(JConnection connection)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JConnection`<br> | `getJConnection()` <br> |


- Methods inherited from class org.springframework.transaction.support.ResourceHolderSupport
    - `clear, getDeadline, getTimeToLiveInMillis, getTimeToLiveInSeconds, hasTimeout, isOpen, isRollbackOnly, isSynchronizedWithTransaction, released, requested, reset, setRollbackOnly, setSynchronizedWithTransaction, setTimeoutInMillis, setTimeoutInSeconds`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### ConnectionHolder

```
public ConnectionHolder(JConnection connection)
```



### 


### Method Detail

#### getJConnection

```
public JConnection getJConnection()
```

Back to [jREMOTE API](com_jbase_jremote_package-summary)
