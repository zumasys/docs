# JResultSetImpl (jremote API)

**Created At:** 9/25/2017 11:52:46 AM  
**Updated At:** 12/24/2018 8:53:06 PM  
**Original Doc:** [com_jbase_jremote_io_jresultsetimpl](https://docs.jbase.com/39250-io/com_jbase_jremote_io_jresultsetimpl)  
**Original ID:** 278166  
**Internal:** No  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JResultSetImpl (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;


## Class JResultSetImpl

All Implemented Interfaces:[JResultSet](./../../jresultset-%28jremote-api%29 "interface in com.jbase.jremote")
* * *


```
public class JResultSetImpl
extends Object
implements JResultSet
```

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JResultSetImpl(AbstractJRemoteConnection connection, int statementId, int fetchSize)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JDynArray`<br> | `getRow()` <br> |
| `boolean`<br> | `next()` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail



#### JResultSetImpl

```
public JResultSetImpl(AbstractJRemoteConnection connection,
                      int statementId,
                      int fetchSize)
```







### Method Detail



#### getRow

```
public JDynArray getRow()
```
Specified by:`getRow` in interface `JResultSet`


#### next

```
public boolean next()
             throws JRemoteException
```
Specified by:`next` in interface `JResultSet`Throws:`JRemoteException`



Back to [jREMOTE API](com_jbase_jremote_package-summary)
