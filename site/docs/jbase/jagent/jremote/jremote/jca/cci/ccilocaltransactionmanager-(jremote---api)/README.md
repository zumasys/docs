# CCILocalTransactionManager (jremote   API)

**Created At:** 9/25/2017 11:55:19 AM  
**Updated At:** 2/15/2018 8:02:19 AM  
**Original Doc:** [com_jbase_jremote_jca_cci_CCILocalTransactionManager](https://docs.jbase.com/39259-cci/com_jbase_jremote_jca_cci_CCILocalTransactionManager)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="CCILocalTransactionManager (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCILocalTransactionManager)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteSubroutineParametersRecord "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_DynamicArrayRecord "interface in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCILocalTransactionManager)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCILocalTransactionManager)


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

## Class CCILocalTransactionManager

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.cci.CCILocalTransactionManager


- All Implemented Interfaces:javax.resource.cci.LocalTransaction
* * *


```
public class CCILocalTransactionManager
extends Object
implements javax.resource.cci.LocalTransaction
```

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `CCILocalTransactionManager(JConnection c)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `void` | `begin()`<br>Begin a transaction on this connection.<br> |
| `void` | `commit()`<br>Commit a transaction on this connection.<br> |
| `void` | `rollback()`<br>Rollback a transaction on this connection.<br> |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### CCILocalTransactionManager

```
public CCILocalTransactionManager(JConnection c)
```


    - ### Method Detail

        - #### begin

```
public void begin()
           throws javax.resource.ResourceException
```

Begin a transaction on this connection.
Specified by:`begin` in interface `javax.resource.cci.LocalTransaction`Throws:`javax.resource.ResourceException`See Also:`#begin()`


        - #### commit

```
public void commit()
            throws javax.resource.ResourceException
```

Commit a transaction on this connection.
Specified by:`commit` in interface `javax.resource.cci.LocalTransaction`Throws:`javax.resource.ResourceException`See Also:`#commit()`


        - #### rollback

```
public void rollback()
              throws javax.resource.ResourceException
```

Rollback a transaction on this connection.
Specified by:`rollback` in interface `javax.resource.cci.LocalTransaction`Throws:`javax.resource.ResourceException`See Also:`#rollback()`

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCILocalTransactionManager)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteSubroutineParametersRecord "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_DynamicArrayRecord "interface in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCILocalTransactionManager)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCILocalTransactionManager)


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
