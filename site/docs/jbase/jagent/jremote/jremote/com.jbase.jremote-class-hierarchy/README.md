# com.jbase.jremote Class Hierarchy

**Created At:** 9/25/2017 12:10:41 PM  
**Updated At:** 4/5/2018 12:54:55 AM  
**Original Doc:** [com_jbase_jremote_package-tree](https://docs.jbase.com/39248-jremote/com_jbase_jremote_package-tree)  
**Original ID:** 278312  
**Internal:** No  


JavaScript is disabled on your browser.





# Hierarchy For Package com.jbase.jremote

## Class Hierarchy

- java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
    - java.util.[AbstractCollection](http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractCollection.html?is-external=true "class or interface in java.util")&lt;E&gt; (implements java.util.[Collection](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true "class or interface in java.util")&lt;E&gt;)
        - java.util.[AbstractList](http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractList.html?is-external=true "class or interface in java.util")&lt;E&gt; (implements java.util.[List](http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true "class or interface in java.util")&lt;E&gt;)
            - java.util.[ArrayList](http://java.sun.com/j2se/1.5.0/docs/api/java/util/ArrayList.html?is-external=true "class or interface in java.util")&lt;E&gt; (implements java.lang.[Cloneable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Cloneable.html?is-external=true "class or interface in java.lang"), java.util.[List](http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true "class or interface in java.util")&lt;E&gt;, java.util.[RandomAccess](http://java.sun.com/j2se/1.5.0/docs/api/java/util/RandomAccess.html?is-external=true "class or interface in java.util"), java.io.[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"))
                - com.jbase.jremote.[JSubroutineParameters](./../jsubroutineparameters-%28jremote-api%29 "class in com.jbase.jremote") (implements com.jbase.jremote.io.[JBaseSerializable](./../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io"))
    - com.jbase.jremote.[DefaultJConnectionFactory](./../defaultjconnectionfactory-%28jremote-api%29 "class in com.jbase.jremote") (implements com.jbase.jremote.[JConnectionFactory](./../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote"))
    - com.jbase.jremote.[EISMetaDataRepository](./../eismetadatarepository-%28jremote-api%29 "class in com.jbase.jremote")
    - com.jbase.jremote.[JDynArray](./../jdynarray-%28jremote-api%29 "class in com.jbase.jremote") (implements com.jbase.jremote.io.[IByteObject](./../io/ibyteobject-%28jremote-api%29 "interface in com.jbase.jremote.io"))
    - com.jbase.jremote.io.[Response](./../io/response-%28jremote-api%29 "class in com.jbase.jremote.io") (implements com.jbase.jremote.io.[JBaseSerializable](./../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io"))
        - com.jbase.jremote.protocol.[JRemoteResponse](./../protocol/jremoteresponse-%28jremote-api%29 "class in com.jbase.jremote.protocol")
            - com.jbase.jremote.[JExecuteResults](./../jexecuteresults-%28jremote-api%29 "class in com.jbase.jremote")
    - java.lang.[Throwable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Throwable.html?is-external=true "class or interface in java.lang") (implements java.io.[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"))
        - java.lang.[Exception](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Exception.html?is-external=true "class or interface in java.lang")
            - com.jbase.jremote.[JRemoteException](./../jremoteexception-%28jremote-api%29 "class in com.jbase.jremote")
                - com.jbase.jremote.[JAuthenticationException](./../jauthenticationexception-%28jremote-api%29 "class in com.jbase.jremote")
                - com.jbase.jremote.[JRecordLockedException](./../jrecordlockedexception-%28jremote-api%29 "class in com.jbase.jremote")
                - com.jbase.jremote.[JRecordNotFoundException](./../jrecordnotfoundexception-%28jremote-api%29 "class in com.jbase.jremote")
                - com.jbase.jremote.[JSubroutineNotFoundException](./../jsubroutinenotfoundexception-%28jremote-api%29 "class in com.jbase.jremote")


## Interface Hierarchy

- java.lang.[Iterable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true "class or interface in java.lang")&lt;T&gt;
    - com.jbase.jremote.[JSelectList](./../jselectlist-%28jremote-api%29 "interface in com.jbase.jremote")
        - com.jbase.jremote.[JCursor](./../jcursor-%28jremote-api%29 "interface in com.jbase.jremote")
- com.jbase.jremote.[JConnection](./../jconnection-%28jremote-api%29 "interface in com.jbase.jremote")
    - com.jbase.jremote.[JXAConnection](./../jxaconnection-%28jremote-api%29 "interface in com.jbase.jremote") (also extends javax.transaction.xa.[XAResource](http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true "class or interface in javax.transaction.xa"))
- com.jbase.jremote.[JConnectionCallbackHandler](./../jconnectioncallbackhandler-%28jremote-api%29 "interface in com.jbase.jremote")
- com.jbase.jremote.[JConnectionFactory](./../jconnectionfactory-%28jremote-api%29 "interface in com.jbase.jremote")
- com.jbase.jremote.[JFile](./../jfile-%28jremote-api%29 "interface in com.jbase.jremote")
- com.jbase.jremote.[JResultSet](./../jresultset-%28jremote-api%29 "interface in com.jbase.jremote")
- com.jbase.jremote.[JStatement](./../jstatement-%28jremote-api%29 "interface in com.jbase.jremote")
- javax.transaction.xa.[XAResource](http://java.sun.com/j2se/1.5.0/docs/api/javax/transaction/xa/XAResource.html?is-external=true "class or interface in javax.transaction.xa")
    - com.jbase.jremote.[JXAConnection](./../jxaconnection-%28jremote-api%29 "interface in com.jbase.jremote") (also extends com.jbase.jremote.[JConnection](./../jconnection-%28jremote-api%29 "interface in com.jbase.jremote"))


