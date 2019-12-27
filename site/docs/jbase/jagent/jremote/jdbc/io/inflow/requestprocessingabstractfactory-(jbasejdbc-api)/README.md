# RequestProcessingAbstractFactory (jbasejdbc API)

**Created At:** 9/25/2017 10:52:00 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_io_inflow_requestprocessingabstractfactory](https://docs.jbase.com/39238-inflow/com_jbase_jdbc_io_inflow_requestprocessingabstractfactory)  
**Original ID:** 277892  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="RequestProcessingAbstractFactory (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



# Interface RequestProcessingAbstractFactory

```
public interface RequestProcessingAbstractFactory
```

# Method Summary


| <br>Modifier and Type<br> | <br>Method<br> |  Description<br> |
| --- | --- | --- |
| <br>`RequestHandler`<br> | <br>`createRequestHandler(RequestListenerService rls)`<br> | <br>In ThreadPerConnection mode this method will be called by RequestListenerService when new connection is opened.<br> |

# Method Detail

#### **createRequestHandler**

```
RequestHandler createRequestHandler(RequestListenerService rls)
```

In ThreadPerConnection mode this method will be called by RequestListenerService when new connection is opened. This creates one RequestHandler for each connection.

**Parameters:**`    rls` -
**Returns:**RequestHandler instance


