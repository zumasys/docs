# JRemoteXid (jremote   API)

**Created At:** 9/25/2017 12:03:54 PM  
**Updated At:** 2/15/2018 8:03:00 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JRemoteXid (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary)
- Class
- [Use](/39265-class-use/com_jbase_jremote_jca_inflow_protocol_class-use_JRemoteXid)
- [Tree](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest "interface in com.jbase.jremote.jca.inflow.protocol")
- [Next Class](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_noendpointactivatedresponse "class in com.jbase.jremote.jca.inflow.protocol")


- [Frames](../../../../../../index.html?com/jbase/jremote/jca/inflow/protocol//39264-protocol/com_jbase_jremote_jca_inflow_protocol_JRemoteXid)
- [No Frames](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_JRemoteXid)


- [All Classes](../../../../../../allclasses-noframe.html)


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

com.jbase.jremote.jca.inflow.protocol

## Class JRemoteXid

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.inflow.protocol.JRemoteXid


- All Implemented Interfaces:[Xid](http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/Xid.html?is-external=true "class or interface in javax.transaction.xa")
* * *


```
public class JRemoteXid
extends Object
implements Xid
```

- - ### Field Summary

        - ### Fields inherited from interface javax.transaction.xa.[Xid](http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/Xid.html?is-external=true "class or interface in javax.transaction.xa")
`MAXBQUALSIZE, MAXGTRIDSIZE`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `JRemoteXid(byte[] globalTransactionId)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | `equals(Object obj)`  |
| `byte[]` | `getBranchQualifier()`  |
| `int` | `getFormatId()`  |
| `byte[]` | `getGlobalTransactionId()`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### JRemoteXid

```
public JRemoteXid(byte[] globalTransactionId)
```


    - ### Method Detail

        - #### getBranchQualifier

```
public byte[] getBranchQualifier()
```
Specified by:`getBranchQualifier` in interface `Xid`


        - #### getFormatId

```
public int getFormatId()
```
Specified by:`getFormatId` in interface `Xid`


        - #### getGlobalTransactionId

```
public byte[] getGlobalTransactionId()
```
Specified by:`getGlobalTransactionId` in interface `Xid`


        - #### equals

```
public boolean equals(Object obj)
```
Overrides:`equals` in class `Object`

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary)
- Class
- [Use](/39265-class-use/com_jbase_jremote_jca_inflow_protocol_class-use_JRemoteXid)
- [Tree](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-tree)
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest "interface in com.jbase.jremote.jca.inflow.protocol")
- [Next Class](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_noendpointactivatedresponse "class in com.jbase.jremote.jca.inflow.protocol")


- [Frames](../../../../../../index.html?com/jbase/jremote/jca/inflow/protocol//39264-protocol/com_jbase_jremote_jca_inflow_protocol_JRemoteXid)
- [No Frames](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_JRemoteXid)


- [All Classes](../../../../../../allclasses-noframe.html)


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
