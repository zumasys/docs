# com.jbase.jremote.jca.inflow.protocol Class Hierarchy (jremote   API)

**Created At:** 9/25/2017 12:04:31 PM  
**Updated At:** 2/15/2018 8:03:00 AM  
**Original Doc:** [com_jbase_jremote_jca_inflow_protocol_package-tree](https://docs.jbase.com/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-tree)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="com.jbase.jremote.jca.inflow.protocol Class Hierarchy (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary)
- Class
- Use
- Tree
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- [Prev](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Next](/39266-mbean/com_jbase_jremote_jca_mbean_package-tree)


- [Frames](../../../../../../index.html?com/jbase/jremote/jca/inflow/protocol//39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-tree)
- [No Frames](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-tree)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

# Hierarchy For Package com.jbase.jremote.jca.inflow.protocol
Package Hierarchies:
- [All Packages](../../../../../../overview-tree.html)

## Class Hierarchy

- java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
    - com.jbase.jremote.jca.inflow.protocol.[ActivationRequest](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_activationrequest "class in com.jbase.jremote.jca.inflow.protocol") (implements com.jbase.jremote.jca.inflow.protocol.[InboundRequest](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest "interface in com.jbase.jremote.jca.inflow.protocol"), javax.resource.spi.work.Work)
    - com.jbase.jremote.jca.inflow.protocol.[ActivationResponse](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_activationresponse "class in com.jbase.jremote.jca.inflow.protocol") (implements com.jbase.jremote.io.[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io"))
    - com.jbase.jremote.jca.inflow.protocol.[CommitTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_committransactionrequest "class in com.jbase.jremote.jca.inflow.protocol") (implements com.jbase.jremote.jca.inflow.protocol.[InboundRequest](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest "interface in com.jbase.jremote.jca.inflow.protocol"))
    - com.jbase.jremote.jca.inflow.protocol.[JRemoteXid](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_JRemoteXid "class in com.jbase.jremote.jca.inflow.protocol") (implements javax.transaction.xa.[Xid](http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/Xid.html?is-external=true "class or interface in javax.transaction.xa"))
    - com.jbase.jremote.jca.inflow.protocol.[NoEndpointActivatedResponse](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_noendpointactivatedresponse "class in com.jbase.jremote.jca.inflow.protocol") (implements com.jbase.jremote.io.[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io"))
    - com.jbase.jremote.jca.inflow.protocol.[RollbackTransactionRequest](/39270-protocol/com_jbase_jremote_protocol_rollbacktransactionrequest "class in com.jbase.jremote.jca.inflow.protocol") (implements com.jbase.jremote.jca.inflow.protocol.[InboundRequest](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest "interface in com.jbase.jremote.jca.inflow.protocol"))
    - com.jbase.jremote.jca.inflow.protocol.[StartTransactionRequest](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_starttransactionrequest "class in com.jbase.jremote.jca.inflow.protocol") (implements com.jbase.jremote.jca.inflow.protocol.[InboundRequest](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest "interface in com.jbase.jremote.jca.inflow.protocol"))
    - com.jbase.jremote.jca.inflow.protocol.[TransactionOperation](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_transactionoperation "class in com.jbase.jremote.jca.inflow.protocol") (implements com.jbase.jremote.io.[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io"))
    - com.jbase.jremote.jca.inflow.protocol.[WorkScheduledResponse](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_workscheduledresponse "class in com.jbase.jremote.jca.inflow.protocol") (implements com.jbase.jremote.io.[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io"))


## Interface Hierarchy

- com.jbase.jremote.io.[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io")
    - com.jbase.jremote.jca.inflow.protocol.[InboundRequest](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest "interface in com.jbase.jremote.jca.inflow.protocol")
- com.jbase.jremote.jca.inflow.protocol.[ObjectTypes](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_ObjectTypes "interface in com.jbase.jremote.jca.inflow.protocol")

Skip navigation links

- [Overview](../../../../../../overview-summary.html)
- [Package](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-summary)
- Class
- Use
- Tree
- [Deprecated](../../../../../../deprecated-list.html)
- [Help](../../../../../../help-doc.html)


jremote <br>

- [Prev](/39262-inflow/com_jbase_jremote_jca_inflow_package-tree)
- [Next](/39266-mbean/com_jbase_jremote_jca_mbean_package-tree)


- [Frames](../../../../../../index.html?com/jbase/jremote/jca/inflow/protocol//39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-tree)
- [No Frames](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_package-tree)


- [All Classes](../../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
