# JRemoteManagedConnectionFactory (jremote   API)

**Created At:** 9/25/2017 12:05:35 PM  
**Updated At:** 2/15/2018 8:02:21 AM  
**Original Doc:** [com_jbase_jremote_jca_JRemoteManagedConnectionFactory](https://docs.jbase.com/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JRemoteManagedConnectionFactory (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10,"i21":10,"i22":10,"i23":10,"i24":10,"i25":10,"i26":10,"i27":10,"i28":10,"i29":10,"i30":10,"i31":10,"i32":10,"i33":10,"i34":10,"i35":10,"i36":10,"i37":10,"i38":10,"i39":10,"i40":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39258-jca/com_jbase_jremote_jca_package-summary)
- Class
- [Use](/39261-class-use/com_jbase_jremote_jca_class-use_JRemoteManagedConnectionFactory)
- [Tree](/39258-jca/com_jbase_jremote_jca_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39258-jca/com_jbase_jremote_jca_jremotemanagedconnection "class in com.jbase.jremote.jca")
- [Next Class](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionMetaData "class in com.jbase.jremote.jca")


- [Frames](../../../../index.html?com/jbase/jremote/jca//39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory)
- [No Frames](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory)


- [All Classes](../../../../allclasses-noframe.html)


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

com.jbase.jremote.jca

## Class JRemoteManagedConnectionFactory

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.JRemoteManagedConnectionFactory


- All Implemented Interfaces:[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"), javax.resource.spi.ManagedConnectionFactory, javax.resource.spi.ValidatingManagedConnectionFactoryDirect Known Subclasses:[CCIJRemoteManagedConnectionFactory](../../../../com/jbase/jremote/jca/cci/CCI/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory "class in com.jbase.jremote.jca.cci")
* * *


```
public class JRemoteManagedConnectionFactory
extends Object
implements javax.resource.spi.ManagedConnectionFactory, javax.resource.spi.ValidatingManagedConnectionFactory
```

This class implements the JCA ManagedConnectionFactory.  It contains configuration<br> information for connecting to remote jBASE instances and implements all of <br> the matching and creations semantics for connection pooling.<br>
Author:aphetheanSee Also:[Serialized Form](../../../../serialized-form.html#com.jbase.jremote.jca.JRemoteManagedConnectionFactory)

- - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `static int` | `DEFAULT_PORT`  |


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `JRemoteManagedConnectionFactory()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `protected JConnection` | `connect()`  |
| `protected javax.resource.spi.ManagedConnection` | `createConnection(Subject subject,<br>                JConnectionCallbackHandler callbackHandler)`  |
| `Object` | `createConnectionFactory()`<br>Construct a new connection factory for use in a non managed<br> environment.<br> |
| `Object` | `createConnectionFactory(javax.resource.spi.ConnectionManager cm)`<br>Construct a new connection factory using the ConnectionManager supplied <br> by the application server.<br> |
| `javax.resource.spi.ManagedConnection` | `createManagedConnection(Subject subject,<br>                       javax.resource.spi.ConnectionRequestInfo cxRequestInfo)`  |
| `boolean` | `equals(Object other)`<br>The following excerpt is taken from Chapter 6 Connection Management 6-19 of the<br> JCA specification.<br> |
| `String` | `getAccount()`  |
| `Integer` | `getActionTimeout()`  |
| `Boolean` | `getAllowInput()`  |
| `Boolean` | `getCompression()`  |
| `Integer` | `getCompressionThreshold()`  |
| `protected Map<String,String>` | `getEnvironments()`  |
| `String` | `getEnvVariables()`  |
| `String` | `getHost()`  |
| `Set` | `getInvalidConnections(Set connections)`<br>Ping each of the supplied connections to check they are alive<br> and return any invalid connections.<br> |
| `PrintWriter` | `getLogWriter()`  |
| `Boolean` | `getNaiveTrustManager()`  |
| `String` | `getPassword()`  |
| `Integer` | `getPort()`  |
| `Boolean` | `getSSL()`  |
| `String` | `getUser()`  |
| `PrintWriter` | `getWriter()`  |
| `int` | `hashCode()`  |
| `javax.resource.spi.ManagedConnection` | `matchManagedConnections(Set connectionSet,<br>                       Subject subject,<br>                       javax.resource.spi.ConnectionRequestInfo cxRequestInfo)`<br>The application server must delegate the decision of which<br> pooled connection to use to this method.<br> |
| `void` | `setAccount(String a)`  |
| `void` | `setActionTimeout(Integer i)`  |
| `void` | `setAllowInput(Boolean ai)`  |
| `void` | `setCharset(String charset)`  |
| `void` | `setCompression(Boolean compression)`  |
| `void` | `setCompressionThreshold(Integer i)`  |
| `void` | `setEnv(String env)`  |
| `void` | `setEnvVariables(String envString)`  |
| `void` | `setHost(String host)`  |
| `void` | `setLogWriter(PrintWriter writer)`  |
| `void` | `setNaiveTrustManager(Boolean ntm)`  |
| `void` | `setPassword(String p)`  |
| `void` | `setPort(int port)`  |
| `void` | `setPort(Integer port)`  |
| `void` | `setSSL(Boolean ssl)`  |
| `void` | `setUser(String u)`  |
| `void` | `setWriter(PrintWriter writer)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, finalize, getClass, notify, notifyAll, toString, wait, wait, wait`

- - ### Field Detail

        - #### DEFAULT\_PORT

```
public static final int DEFAULT_PORT
```
See Also:[Constant Field Values](../../../../constant-values.html#com.jbase.jremote.jca.JRemoteManagedConnectionFactory.DEFAULT_PORT)


    - ### Constructor Detail

        - #### JRemoteManagedConnectionFactory

```
public JRemoteManagedConnectionFactory()
```


    - ### Method Detail

        - #### createConnectionFactory

```
public Object createConnectionFactory(javax.resource.spi.ConnectionManager cm)
                               throws javax.resource.ResourceException
```

Construct a new connection factory using the ConnectionManager supplied <br> by the application server.
Specified by:`createConnectionFactory` in interface `javax.resource.spi.ManagedConnectionFactory`Throws:`javax.resource.ResourceException`See Also:`ManagedConnectionFactory.createConnectionFactory(ConnectionManager)`


        - #### createConnectionFactory

```
public Object createConnectionFactory()
                               throws javax.resource.ResourceException
```

Construct a new connection factory for use in a non managed<br> environment.  The factory will use a default connection manager.
Specified by:`createConnectionFactory` in interface `javax.resource.spi.ManagedConnectionFactory`Throws:`javax.resource.ResourceException`See Also:`ManagedConnectionFactory.createConnectionFactory()`


        - #### createManagedConnection

```
public javax.resource.spi.ManagedConnection createManagedConnection(Subject subject,
                                                                    javax.resource.spi.ConnectionRequestInfo cxRequestInfo)
                                                             throws javax.resource.ResourceException
```
Specified by:`createManagedConnection` in interface `javax.resource.spi.ManagedConnectionFactory`Throws:`javax.resource.ResourceException`See Also:`ManagedConnectionFactory.createManagedConnection(Subject, ConnectionRequestInfo)`


        - #### createConnection

```
protected javax.resource.spi.ManagedConnection createConnection(Subject subject,
                                                                JConnectionCallbackHandler callbackHandler)
                                                         throws javax.resource.ResourceException
```
Throws:`javax.resource.ResourceException`


        - #### connect

```
protected JConnection connect()
                       throws javax.resource.ResourceException
```
Throws:`javax.resource.ResourceException`


        - #### matchManagedConnections

```
public javax.resource.spi.ManagedConnection matchManagedConnections(Set connectionSet,
                                                                    Subject subject,
                                                                    javax.resource.spi.ConnectionRequestInfo cxRequestInfo)
                                                             throws javax.resource.ResourceException
```

The application server must delegate the decision of which<br> pooled connection to use to this method.  The current implementation<br> either returns the first connection from the supplied set or<br> if the subject is supplied the first connection configured for that<br> subject, an existing connection will be switched to the supplied subject<br> if no connection for subject is found.
Specified by:`matchManagedConnections` in interface `javax.resource.spi.ManagedConnectionFactory`Throws:`javax.resource.ResourceException`See Also:`ManagedConnectionFactory.matchManagedConnections(Set, Subject, ConnectionRequestInfo)`


        - #### setLogWriter

```
public void setLogWriter(PrintWriter writer)
                  throws javax.resource.ResourceException
```
Specified by:`setLogWriter` in interface `javax.resource.spi.ManagedConnectionFactory`Throws:`javax.resource.ResourceException`See Also:`ManagedConnectionFactory.setLogWriter(PrintWriter)`


        - #### getLogWriter

```
public PrintWriter getLogWriter()
                         throws javax.resource.ResourceException
```
Specified by:`getLogWriter` in interface `javax.resource.spi.ManagedConnectionFactory`Throws:`javax.resource.ResourceException`See Also:`ManagedConnectionFactory.getLogWriter()`


        - #### getInvalidConnections

```
public Set getInvalidConnections(Set connections)
```

Ping each of the supplied connections to check they are alive<br> and return any invalid connections.
Specified by:`getInvalidConnections` in interface `javax.resource.spi.ValidatingManagedConnectionFactory`Parameters:`connections` - A Set of connections to checkReturns:a Set of invalid connectionsSee Also:`ValidatingManagedConnectionFactory.getInvalidConnections(java.util.Set)`


        - #### equals

```
public boolean equals(Object other)
```

The following excerpt is taken from Chapter 6 Connection Management 6-19 of the<br> JCA specification.<br> 

<br> The ManagedConnectionFactory implementation must extend the implementation<br> of the hashCode and equals methods defined in java.lang.Object.  These two <br> methods are used by an application server to structure its connection pool <br> in an implementation-specific way. The equals and hashCode method implementation <br> should be based on a complete set of configuration properties that make a <br> ManagedConnectionFactory instance unique and specific to an EIS instance.<br>
Specified by:`equals` in interface `javax.resource.spi.ManagedConnectionFactory`Overrides:`equals` in class `Object`


        - #### hashCode

```
public int hashCode()
```
Specified by:`hashCode` in interface `javax.resource.spi.ManagedConnectionFactory`Overrides:`hashCode` in class `Object`


        - #### setHost

```
public void setHost(String host)
```


        - #### getHost

```
public String getHost()
```


        - #### getPort

```
public Integer getPort()
```


        - #### setPort

```
public void setPort(Integer port)
```


        - #### setPort

```
public void setPort(int port)
```


        - #### getUser

```
public String getUser()
```


        - #### setUser

```
public void setUser(String u)
```


        - #### getPassword

```
public String getPassword()
```


        - #### setPassword

```
public void setPassword(String p)
```


        - #### getAccount

```
public String getAccount()
```


        - #### setAccount

```
public void setAccount(String a)
```


        - #### getAllowInput

```
public Boolean getAllowInput()
```


        - #### setAllowInput

```
public void setAllowInput(Boolean ai)
```


        - #### getSSL

```
public Boolean getSSL()
```


        - #### setCharset

```
public void setCharset(String charset)
```


        - #### setSSL

```
public void setSSL(Boolean ssl)
```


        - #### getNaiveTrustManager

```
public Boolean getNaiveTrustManager()
```


        - #### setNaiveTrustManager

```
public void setNaiveTrustManager(Boolean ntm)
```


        - #### getCompression

```
public Boolean getCompression()
```


        - #### setCompression

```
public void setCompression(Boolean compression)
```


        - #### getCompressionThreshold

```
public Integer getCompressionThreshold()
```


        - #### setCompressionThreshold

```
public void setCompressionThreshold(Integer i)
```


        - #### getActionTimeout

```
public Integer getActionTimeout()
```


        - #### setActionTimeout

```
public void setActionTimeout(Integer i)
```


        - #### setEnv

```
public void setEnv(String env)
```


        - #### getEnvironments

```
protected Map<String,String> getEnvironments()
```


        - #### getWriter

```
public PrintWriter getWriter()
```


        - #### setWriter

```
public void setWriter(PrintWriter writer)
```


        - #### setEnvVariables

```
public void setEnvVariables(String envString)
```


        - #### getEnvVariables

```
public String getEnvVariables()
```

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39258-jca/com_jbase_jremote_jca_package-summary)
- Class
- [Use](/39261-class-use/com_jbase_jremote_jca_class-use_JRemoteManagedConnectionFactory)
- [Tree](/39258-jca/com_jbase_jremote_jca_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39258-jca/com_jbase_jremote_jca_jremotemanagedconnection "class in com.jbase.jremote.jca")
- [Next Class](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionMetaData "class in com.jbase.jremote.jca")


- [Frames](../../../../index.html?com/jbase/jremote/jca//39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory)
- [No Frames](/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionFactory)


- [All Classes](../../../../allclasses-noframe.html)


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
