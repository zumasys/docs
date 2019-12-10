# CCIJRemoteInteraction (jremote   API)

**Created At:** 9/25/2017 11:54:51 AM  
**Updated At:** 2/15/2018 8:02:18 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="CCIJRemoteInteraction (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJRemoteInteraction)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteDynamicArrayRecord "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteInteraction)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteInteraction)


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

## Class CCIJRemoteInteraction

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.cci.CCIJRemoteInteraction


- All Implemented Interfaces:javax.resource.cci.Interaction
* * *


```
public class CCIJRemoteInteraction
extends Object
implements javax.resource.cci.Interaction
```

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `CCIJRemoteInteraction(CCIJConnection c)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `void` | `clearWarnings()`  |
| `void` | `close()`  |
| `javax.resource.cci.Record` | `execute(javax.resource.cci.InteractionSpec spec,<br>       javax.resource.cci.Record input)`  |
| `boolean` | `execute(javax.resource.cci.InteractionSpec spec,<br>       javax.resource.cci.Record input,<br>       javax.resource.cci.Record output)`  |
| `javax.resource.cci.Connection` | `getConnection()`  |
| `javax.resource.cci.ResourceWarning` | `getWarnings()`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### CCIJRemoteInteraction

```
public CCIJRemoteInteraction(CCIJConnection c)
```


    - ### Method Detail

        - #### clearWarnings

```
public void clearWarnings()
                   throws javax.resource.ResourceException
```
Specified by:`clearWarnings` in interface `javax.resource.cci.Interaction`Throws:`javax.resource.ResourceException`


        - #### close

```
public void close()
           throws javax.resource.ResourceException
```
Specified by:`close` in interface `javax.resource.cci.Interaction`Throws:`javax.resource.ResourceException`


        - #### execute

```
public javax.resource.cci.Record execute(javax.resource.cci.InteractionSpec spec,
                                         javax.resource.cci.Record input)
                                  throws javax.resource.ResourceException
```
Specified by:`execute` in interface `javax.resource.cci.Interaction`Throws:`javax.resource.ResourceException`


        - #### execute

```
public boolean execute(javax.resource.cci.InteractionSpec spec,
                       javax.resource.cci.Record input,
                       javax.resource.cci.Record output)
                throws javax.resource.ResourceException
```
Specified by:`execute` in interface `javax.resource.cci.Interaction`Throws:`javax.resource.ResourceException`


        - #### getConnection

```
public javax.resource.cci.Connection getConnection()
```
Specified by:`getConnection` in interface `javax.resource.cci.Interaction`


        - #### getWarnings

```
public javax.resource.cci.ResourceWarning getWarnings()
                                               throws javax.resource.ResourceException
```
Specified by:`getWarnings` in interface `javax.resource.cci.Interaction`Throws:`javax.resource.ResourceException`

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJRemoteInteraction)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteDynamicArrayRecord "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteInteraction)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteInteraction)


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
