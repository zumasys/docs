# com.jbase.jremote.jca.cci Class Hierarchy (jremote   API)

**Created At:** 9/25/2017 11:57:11 AM  
**Updated At:** 2/15/2018 8:02:19 AM  
**Original Doc:** [com_jbase_jremote_jca_cci_package-tree](https://docs.jbase.com/39259-cci/com_jbase_jremote_jca_cci_package-tree)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="com.jbase.jremote.jca.cci Class Hierarchy (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca.cci-%28jremote---api%29)
- Class
- Use
- Tree
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev](./../../com.jbase.jremote.jca-class-hierarchy-%28jremote---api%29)
- [Next](./../../inflow/com.jbase.jremote.jca.inflow-class-hierarchy-%28jremote---api%29)


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

# Hierarchy For Package com.jbase.jremote.jca.cci
Package Hierarchies:
- [All Packages](../../../../../overview-tree.html)

## Class Hierarchy

- java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
    - com.jbase.jremote.jca.cci.[CCIJConnection](./../ccijconnection-%28jremote---api%29 "class in com.jbase.jremote.jca.cci") (implements javax.resource.cci.Connection)
    - com.jbase.jremote.jca.cci.[CCIJRemoteConnectionFactory](./../ccijremoteconnectionfactory-%28jremote---api%29 "class in com.jbase.jremote.jca.cci") (implements javax.resource.cci.ConnectionFactory)
    - com.jbase.jremote.jca.cci.[CCIJRemoteDynamicArrayRecord](./../ccijremotedynamicarrayrecord-%28jremote---api%29 "class in com.jbase.jremote.jca.cci") (implements com.jbase.jremote.jca.cci.[SubroutineParametersRecord](./../subroutineparametersrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci"))
    - com.jbase.jremote.jca.cci.[CCIJRemoteInteraction](./../ccijremoteinteraction-%28jremote---api%29 "class in com.jbase.jremote.jca.cci") (implements javax.resource.cci.Interaction)
    - com.jbase.jremote.jca.cci.[CCIJRemoteRecordFactory](./../ccijremoterecordfactory-%28jremote---api%29 "class in com.jbase.jremote.jca.cci") (implements javax.resource.cci.RecordFactory)
    - com.jbase.jremote.jca.cci.[CCIJRemoteSubroutineParametersRecord](./../ccijremotesubroutineparametersrecord-%28jremote---api%29 "class in com.jbase.jremote.jca.cci") (implements com.jbase.jremote.jca.cci.[SubroutineParametersRecord](./../subroutineparametersrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci"))
    - com.jbase.jremote.jca.cci.[CCILocalTransactionManager](./../ccilocaltransactionmanager-%28jremote---api%29 "class in com.jbase.jremote.jca.cci") (implements javax.resource.cci.LocalTransaction)
    - com.jbase.jremote.jca.[JRemoteManagedConnectionFactory](./../../jremotemanagedconnectionfactory-%28jremote---api%29 "class in com.jbase.jremote.jca")(implements javax.resource.spi.ManagedConnectionFactory, javax.resource.spi.ValidatingManagedConnectionFactory)
        - com.jbase.jremote.jca.cci.[CCIJRemoteManagedConnectionFactory](./../ccijremotemanagedconnectionfactory-%28jremote---api%29 "class in com.jbase.jremote.jca.cci")
    - com.jbase.jremote.jca.cci.[SubroutineInteractionSpec](./../subroutineinteractionspec-%28jremote---api%29 "class in com.jbase.jremote.jca.cci") (implements javax.resource.cci.InteractionSpec)


## Interface Hierarchy

- java.lang.[Cloneable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Cloneable.html?is-external=true "class or interface in java.lang")
    - javax.resource.cci.Record (also extends java.io.[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"))
        - javax.resource.cci.IndexedRecord (also extends java.util.[List](http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true "class or interface in java.util")&lt;E&gt;, java.io.[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"))
            - com.jbase.jremote.jca.cci.[DynamicArrayRecord](./../dynamicarrayrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci") (also extends javax.resource.cci.Streamable)
            - com.jbase.jremote.jca.cci.[SubroutineParametersRecord](./../subroutineparametersrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci") (also extends javax.resource.cci.Streamable)
- java.lang.[Iterable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true "class or interface in java.lang")&lt;T&gt;
    - java.util.[Collection](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true "class or interface in java.util")&lt;E&gt;
        - java.util.[List](http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true "class or interface in java.util")&lt;E&gt;
            - javax.resource.cci.IndexedRecord (also extends javax.resource.cci.Record, java.io.[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"))
                - com.jbase.jremote.jca.cci.[DynamicArrayRecord](./../dynamicarrayrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci") (also extends javax.resource.cci.Streamable)
                - com.jbase.jremote.jca.cci.[SubroutineParametersRecord](./../subroutineparametersrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci") (also extends javax.resource.cci.Streamable)
- java.io.[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io")
    - javax.resource.cci.IndexedRecord (also extends java.util.[List](http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true "class or interface in java.util")&lt;E&gt;, javax.resource.cci.Record)
        - com.jbase.jremote.jca.cci.[DynamicArrayRecord](./../dynamicarrayrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci") (also extends javax.resource.cci.Streamable)
        - com.jbase.jremote.jca.cci.[SubroutineParametersRecord](./../subroutineparametersrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci") (also extends javax.resource.cci.Streamable)
    - javax.resource.cci.Record (also extends java.lang.[Cloneable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Cloneable.html?is-external=true "class or interface in java.lang"))
        - javax.resource.cci.IndexedRecord (also extends java.util.[List](http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true "class or interface in java.util")&lt;E&gt;, java.io.[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"))
            - com.jbase.jremote.jca.cci.[DynamicArrayRecord](./../dynamicarrayrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci") (also extends javax.resource.cci.Streamable)
            - com.jbase.jremote.jca.cci.[SubroutineParametersRecord](./../subroutineparametersrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci") (also extends javax.resource.cci.Streamable)
- javax.resource.cci.Streamable
    - com.jbase.jremote.jca.cci.[DynamicArrayRecord](./../dynamicarrayrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci") (also extends javax.resource.cci.IndexedRecord)
    - com.jbase.jremote.jca.cci.[SubroutineParametersRecord](./../subroutineparametersrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci") (also extends javax.resource.cci.IndexedRecord)

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca.cci-%28jremote---api%29)
- Class
- Use
- Tree
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev](./../../com.jbase.jremote.jca-class-hierarchy-%28jremote---api%29)
- [Next](./../../inflow/com.jbase.jremote.jca.inflow-class-hierarchy-%28jremote---api%29)


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
