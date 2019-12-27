# StatementExecuteQueryRequest (jremote API)

**Created At:** 9/25/2017 12:22:04 PM  
**Updated At:** 4/4/2018 9:18:35 PM  
**Original Doc:** [com_jbase_jremote_protocol_statementexecutequeryrequest](https://docs.jbase.com/39270-protocol/com_jbase_jremote_protocol_statementexecutequeryrequest)  
**Original ID:** 278414  
**Internal:** No  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="StatementExecuteQueryRequest (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class StatementExecuteQueryRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")
* * *


```
public class StatementExecuteQueryRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `StatementExecuteQueryRequest()` <br> |
| `StatementExecuteQueryRequest(JDynArray queries, JSelectListProt selectList)` <br> |
| `StatementExecuteQueryRequest(String query, JSelectListProt selectList)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `String`<br> | `getQuery()` <br> |
| `JSelectListProt`<br> | `getSelectList()` <br> |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### StatementExecuteQueryRequest

```
public StatementExecuteQueryRequest()
```

#### StatementExecuteQueryRequest

```
public StatementExecuteQueryRequest(String query,
                                    JSelectListProt selectList)
```

#### StatementExecuteQueryRequest

```
public StatementExecuteQueryRequest(JDynArray queries,
                                    JSelectListProt selectList)
```



### 


### Method Detail

#### getQuery

```
public String getQuery()
```

#### getSelectList

```
public JSelectListProt getSelectList()
```

#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseSerializable`Overrides:`writeObject` in class `JRemoteRequest`Throws:`IOException`
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Specified by:`readObject` in interface `JBaseSerializable`Overrides:`readObject` in class `JRemoteRequest`Throws:`IOException``ClassNotFoundException`
#### getType

```
public int getType()
```
Returns:type id of the objects, used during the serializationSee Also:[`JBaseSerializable.getType()`](/39250-io/com_jbase_jremote_io_jbaseserializable#getType--)
#### getVersion

```
public int getVersion()
```
Specified by:`getVersion` in interface `JBaseSerializable`Overrides:`getVersion` in class `JRemoteRequest`


Back to [jREMOTE API](com_jbase_jremote_package-summary)


