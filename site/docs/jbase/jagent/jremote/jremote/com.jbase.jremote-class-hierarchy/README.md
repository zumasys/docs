# com.jbase.jremote Class Hierarchy

**Created At:** 9/25/2017 12:10:41 PM  
**Updated At:** 4/5/2018 12:54:55 AM  
**Original Doc:** [com_jbase_jremote_package-tree](https://docs.jbase.com/39248-jremote/com_jbase_jremote_package-tree)  


JavaScript is disabled on your browser.





# Hierarchy For Package com.jbase.jremote

## Class Hierarchy

- java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
    - java.util.[AbstractCollection](http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractCollection.html?is-external=true "class or interface in java.util")&lt;E&gt; (implements java.util.[Collection](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true "class or interface in java.util")&lt;E&gt;)
        - java.util.[AbstractList](http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractList.html?is-external=true "class or interface in java.util")&lt;E&gt; (implements java.util.[List](http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true "class or interface in java.util")&lt;E&gt;)
            - java.util.[ArrayList](http://java.sun.com/j2se/1.5.0/docs/api/java/util/ArrayList.html?is-external=true "class or interface in java.util")&lt;E&gt; (implements java.lang.[Cloneable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Cloneable.html?is-external=true "class or interface in java.lang"), java.util.[List](http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true "class or interface in java.util")&lt;E&gt;, java.util.[RandomAccess](http://java.sun.com/j2se/1.5.0/docs/api/java/util/RandomAccess.html?is-external=true "class or interface in java.util"), java.io.[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"))
                - com.jbase.jremote.[JSubroutineParameters](/39248-jremote/com_jbase_jremote_jsubroutineparameters "class in com.jbase.jremote") (implements com.jbase.jremote.io.[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io"))
    - com.jbase.jremote.[DefaultJConnectionFactory](/39248-jremote/com_jbase_jremote_defaultjconnectionfactory "class in com.jbase.jremote") (implements com.jbase.jremote.[JConnectionFactory](/39248-jremote/com_jbase_jremote_jconnectionfactory "interface in com.jbase.jremote"))
    - com.jbase.jremote.[EISMetaDataRepository](/39248-jremote/com_jbase_jremote_eismetadatarepository "class in com.jbase.jremote")
    - com.jbase.jremote.[JDynArray](/39248-jremote/com_jbase_jremote_jdynarray "class in com.jbase.jremote") (implements com.jbase.jremote.io.[IByteObject](/39250-io/com_jbase_jremote_io_ibyteobject "interface in com.jbase.jremote.io"))
    - com.jbase.jremote.io.[Response](/39250-io/com_jbase_jremote_io_response "class in com.jbase.jremote.io") (implements com.jbase.jremote.io.[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io"))
        - com.jbase.jremote.protocol.[JRemoteResponse](/39270-protocol/com_jbase_jremote_protocol_jremoteresponse "class in com.jbase.jremote.protocol")
            - com.jbase.jremote.[JExecuteResults](/39248-jremote/com_jbase_jremote_jexecuteresults "class in com.jbase.jremote")
    - java.lang.[Throwable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Throwable.html?is-external=true "class or interface in java.lang") (implements java.io.[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"))
        - java.lang.[Exception](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Exception.html?is-external=true "class or interface in java.lang")
            - com.jbase.jremote.[JRemoteException](/39248-jremote/com_jbase_jremote_jremoteexception "class in com.jbase.jremote")
                - com.jbase.jremote.[JAuthenticationException](/39248-jremote/com_jbase_jremote_jauthenticationexception "class in com.jbase.jremote")
                - com.jbase.jremote.[JRecordLockedException](/39248-jremote/com_jbase_jremote_jrecordlockedexception "class in com.jbase.jremote")
                - com.jbase.jremote.[JRecordNotFoundException](/39248-jremote/com_jbase_jremote_jrecordnotfoundexception "class in com.jbase.jremote")
                - com.jbase.jremote.[JSubroutineNotFoundException](/39248-jremote/com_jbase_jremote_jsubroutinenotfoundexception "class in com.jbase.jremote")


## Interface Hierarchy

- java.lang.[Iterable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true "class or interface in java.lang")&lt;T&gt;
    - com.jbase.jremote.[JSelectList](/39248-jremote/com_jbase_jremote_jselectlist "interface in com.jbase.jremote")
        - com.jbase.jremote.[JCursor](/39248-jremote/com_jbase_jremote_jcursor "interface in com.jbase.jremote")
- com.jbase.jremote.[JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote")
    - com.jbase.jremote.[JXAConnection](/39248-jremote/com_jbase_jremote_jxaconnection "interface in com.jbase.jremote") (also extends javax.transaction.xa.[XAResource](http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true "class or interface in javax.transaction.xa"))
- com.jbase.jremote.[JConnectionCallbackHandler](/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler "interface in com.jbase.jremote")
- com.jbase.jremote.[JConnectionFactory](/39248-jremote/com_jbase_jremote_jconnectionfactory "interface in com.jbase.jremote")
- com.jbase.jremote.[JFile](/39248-jremote/com_jbase_jremote_jfile "interface in com.jbase.jremote")
- com.jbase.jremote.[JResultSet](/39248-jremote/com_jbase_jremote_jresultset "interface in com.jbase.jremote")
- com.jbase.jremote.[JStatement](/39248-jremote/com_jbase_jremote_jstatement "interface in com.jbase.jremote")
- javax.transaction.xa.[XAResource](http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true "class or interface in javax.transaction.xa")
    - com.jbase.jremote.[JXAConnection](/39248-jremote/com_jbase_jremote_jxaconnection "interface in com.jbase.jremote") (also extends com.jbase.jremote.[JConnection](/39248-jremote/com_jbase_jremote_jconnection "interface in com.jbase.jremote"))


