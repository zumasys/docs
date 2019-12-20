# CCIJRemoteManagedConnectionFactory (jremote   API)

**Created At:** 9/25/2017 11:54:58 AM  
**Updated At:** 2/15/2018 8:02:18 AM  
**Original Doc:** [com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory](https://docs.jbase.com/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="CCIJRemoteManagedConnectionFactory (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJRemoteManagedConnectionFactory)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteInteraction "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteRecordFactory "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory)


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

com.jbase.jremote.jca.cci

## Class CCIJRemoteManagedConnectionFactory

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jremote.jca.JRemoteManagedConnectionFactory](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory "class in com.jbase.jremote.jca")
    - - com.jbase.jremote.jca.cci.CCIJRemoteManagedConnectionFactory


- All Implemented Interfaces:[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"), javax.resource.spi.ManagedConnectionFactory, javax.resource.spi.ValidatingManagedConnectionFactory
* * *


```
public class CCIJRemoteManagedConnectionFactory
extends JRemoteManagedConnectionFactory
```
See Also:[Serialized Form](../../../../../serialized-form.html#com.jbase.jremote.jca.cci.CCIJRemoteManagedConnectionFactory)

- - ### Field Summary

        - ### Fields inherited from class com.jbase.jremote.jca.[JRemoteManagedConnectionFactory](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory "class in com.jbase.jremote.jca")
`DEFAULT_PORT`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `CCIJRemoteManagedConnectionFactory()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `Object` | `createConnectionFactory()`<br>Construct a new connection factory for use in a non managed<br> environment.<br> |
| `Object` | `createConnectionFactory(javax.resource.spi.ConnectionManager cm)`<br>Construct a new connection factory using the ConnectionManager supplied <br> by the application server.<br> |


        - ### Methods inherited from class com.jbase.jremote.jca.[JRemoteManagedConnectionFactory](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory "class in com.jbase.jremote.jca")
`connect, createConnection, createManagedConnection, equals, getAccount, getActionTimeout, getAllowInput, getCompression, getCompressionThreshold, getEnvironments, getEnvVariables, getHost, getInvalidConnections, getLogWriter, getNaiveTrustManager, getPassword, getPort, getSSL, getUser, getWriter, hashCode, matchManagedConnections, setAccount, setActionTimeout, setAllowInput, setCharset, setCompression, setCompressionThreshold, setEnv, setEnvVariables, setHost, setLogWriter, setNaiveTrustManager, setPassword, setPort, setPort, setSSL, setUser, setWriter`


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, finalize, getClass, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### CCIJRemoteManagedConnectionFactory

```
public CCIJRemoteManagedConnectionFactory()
```


    - ### Method Detail

        - #### createConnectionFactory

```
public Object createConnectionFactory(javax.resource.spi.ConnectionManager cm)
                               throws javax.resource.ResourceException
```

Construct a new connection factory using the ConnectionManager supplied <br> by the application server.
Specified by:`createConnectionFactory` in interface `javax.resource.spi.ManagedConnectionFactory`Overrides:`createConnectionFactory` in class `JRemoteManagedConnectionFactory`Throws:`javax.resource.ResourceException`See Also:`ManagedConnectionFactory.createConnectionFactory(ConnectionManager)`


        - #### createConnectionFactory

```
public Object createConnectionFactory()
                               throws javax.resource.ResourceException
```

Construct a new connection factory for use in a non managed<br> environment.  The factory will use a default connection manager.
Specified by:`createConnectionFactory` in interface `javax.resource.spi.ManagedConnectionFactory`Overrides:`createConnectionFactory` in class `JRemoteManagedConnectionFactory`Throws:`javax.resource.ResourceException`See Also:`ManagedConnectionFactory.createConnectionFactory()`

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJRemoteManagedConnectionFactory)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteInteraction "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteRecordFactory "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory)


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
