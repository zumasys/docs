# CCIJConnection (jremote   API)

**Created At:** 9/25/2017 11:54:29 AM  
**Updated At:** 2/15/2018 8:02:18 AM  
**Original Doc:** [com_jbase_jremote_jca_cci_CCIJConnection](https://docs.jbase.com/39259-cci/com_jbase_jremote_jca_cci_CCIJConnection)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="CCIJConnection (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJConnection)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev Class
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteConnectionFactory "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJConnection)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJConnection)


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

## Class CCIJConnection

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.cci.CCIJConnection


- All Implemented Interfaces:javax.resource.cci.Connection
* * *


```
public class CCIJConnection
extends Object
implements javax.resource.cci.Connection
```

- - ### Constructor Summary


Constructors | Modifier | Constructor and Description |
| --- | --- |
| `protected` | `CCIJConnection(JConnection c)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()`<br>Close this connection.<br> |
| `javax.resource.cci.Interaction` | `createInteraction()`  |
| `protected JConnection` | `getJConnection()`  |
| `javax.resource.cci.LocalTransaction` | `getLocalTransaction()`  |
| `javax.resource.cci.ConnectionMetaData` | `getMetaData()`  |
| `javax.resource.cci.ResultSetInfo` | `getResultSetInfo()`  |
| `String` | `toString()`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

- - ### Constructor Detail

        - #### CCIJConnection

```
protected CCIJConnection(JConnection c)
```


    - ### Method Detail

        - #### close

```
public void close()
           throws javax.resource.ResourceException
```

Close this connection.
Specified by:`close` in interface `javax.resource.cci.Connection`Throws:`javax.resource.ResourceException`


        - #### createInteraction

```
public javax.resource.cci.Interaction createInteraction()
                                                 throws javax.resource.ResourceException
```
Specified by:`createInteraction` in interface `javax.resource.cci.Connection`Throws:`javax.resource.ResourceException`


        - #### getLocalTransaction

```
public javax.resource.cci.LocalTransaction getLocalTransaction()
                                                        throws javax.resource.ResourceException
```
Specified by:`getLocalTransaction` in interface `javax.resource.cci.Connection`Throws:`javax.resource.ResourceException`


        - #### getMetaData

```
public javax.resource.cci.ConnectionMetaData getMetaData()
                                                  throws javax.resource.ResourceException
```
Specified by:`getMetaData` in interface `javax.resource.cci.Connection`Throws:`javax.resource.ResourceException`


        - #### getResultSetInfo

```
public javax.resource.cci.ResultSetInfo getResultSetInfo()
                                                  throws javax.resource.ResourceException
```
Specified by:`getResultSetInfo` in interface `javax.resource.cci.Connection`Throws:`javax.resource.ResourceException`


        - #### getJConnection

```
protected JConnection getJConnection()
```


        - #### toString

```
public String toString()
```
Overrides:`toString` in class `Object`

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJConnection)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- Prev Class
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteConnectionFactory "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJConnection)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJConnection)


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
