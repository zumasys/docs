# JRemoteMessageListener (jremote   API)

**Created At:** 9/25/2017 12:01:19 PM  
**Updated At:** 2/15/2018 8:02:27 AM  
**Original Doc:** [com_jbase_jremote_jca_inflow_JRemoteMessageListener](https://docs.jbase.com/39262-inflow/com_jbase_jremote_jca_inflow_JRemoteMessageListener)  
**Original ID:** 278237  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JRemoteMessageListener (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca.inflow-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-interface-com.jbase.jremote.jca.inflow.jremotemessagelistener-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.jca.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../jremoteactivationspec-%28jremote---api%29 "class in com.jbase.jremote.jca.inflow")
- Next Class


- [Frames](./.)
- [No Frames](./.)


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

com.jbase.jremote.jca.inflow

## Interface JRemoteMessageListener

- All Superinterfaces:javax.resource.spi.endpoint.MessageEndpoint
* * *


```
public interface JRemoteMessageListener
extends javax.resource.spi.endpoint.MessageEndpoint
```

A listener that can handle JRemote messages.
Author:aphethean

- - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Abstract Methods](javascript:show%284%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `JDynArray` | `onMessage(JDynArray dynArray)`  |


        - ### Methods inherited from interface javax.resource.spi.endpoint.MessageEndpoint
`afterDelivery, beforeDelivery, release`

- - ### Method Detail

        - #### onMessage

```
JDynArray onMessage(JDynArray dynArray)
```

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca.inflow-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-interface-com.jbase.jremote.jca.inflow.jremotemessagelistener-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.jca.inflow-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../jremoteactivationspec-%28jremote---api%29 "class in com.jbase.jremote.jca.inflow")
- Next Class


- [Frames](./.)
- [No Frames](./.)


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
