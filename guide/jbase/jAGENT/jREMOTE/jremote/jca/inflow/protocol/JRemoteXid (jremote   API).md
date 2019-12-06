# JRemoteXid (jremote   API)

**Created At:** 9/25/2017 12:03:54 PM  
**Updated At:** 2/15/2018 8:03:00 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JRemoteXid (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
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
com.jbase.jremote.jca.inflow.protocol

## Class JRemoteXid

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.inflow.protocol.JRemoteXid


- <dl><dt>All Implemented Interfaces:</dt>
<dd><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/Xid.html?is-external=true" title="class or interface in javax.transaction.xa">Xid</a></dd></dl>
* * *


```
public class JRemoteXid
extends Object
implements Xid
```

- <!-- =========== FIELD SUMMARY =========== -->
    - <!--   -->
### Field Summary

        - <!--   -->
### Fields inherited from interface javax.transaction.xa.[Xid](http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/Xid.html?is-external=true "class or interface in javax.transaction.xa")
`MAXBQUALSIZE, MAXGTRIDSIZE`

<!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `JRemoteXid(byte[] globalTransactionId)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | `equals(Object obj)`  |
| `byte[]` | `getBranchQualifier()`  |
| `int` | `getFormatId()`  |
| `byte[]` | `getGlobalTransactionId()`  |


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### JRemoteXid

```
public JRemoteXid(byte[] globalTransactionId)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getBranchQualifier

```
public byte[] getBranchQualifier()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/Xid.html?is-external=true#getBranchQualifier--" title="class or interface in javax.transaction.xa">getBranchQualifier</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/Xid.html?is-external=true" title="class or interface in javax.transaction.xa">Xid</a></code>
</dd></dl>

<!--   -->
        - #### getFormatId

```
public int getFormatId()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/Xid.html?is-external=true#getFormatId--" title="class or interface in javax.transaction.xa">getFormatId</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/Xid.html?is-external=true" title="class or interface in javax.transaction.xa">Xid</a></code>
</dd></dl>

<!--   -->
        - #### getGlobalTransactionId

```
public byte[] getGlobalTransactionId()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/Xid.html?is-external=true#getGlobalTransactionId--" title="class or interface in javax.transaction.xa">getGlobalTransactionId</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/Xid.html?is-external=true" title="class or interface in javax.transaction.xa">Xid</a></code>
</dd></dl>

<!--   -->
        - #### equals

```
public boolean equals(Object obj)
```
<dl><dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#equals-java.lang.Object-" title="class or interface in java.lang">equals</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true" title="class or interface in java.lang">Object</a></code>
</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
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
