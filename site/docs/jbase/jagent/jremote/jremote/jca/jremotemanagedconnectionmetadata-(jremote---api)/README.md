# JRemoteManagedConnectionMetaData (jremote   API)

**Created At:** 9/25/2017 12:05:41 PM  
**Updated At:** 2/15/2018 8:02:55 AM  
**Original Doc:** [com_jbase_jremote_jca_JRemoteManagedConnectionMetaData](https://docs.jbase.com/39258-jca/com_jbase_jremote_jca_JRemoteManagedConnectionMetaData)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JRemoteManagedConnectionMetaData (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.jca.jremotemanagedconnectionmetadata-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.jca-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](./../jremotemanagedconnectionfactory-%28jremote---api%29 "class in com.jbase.jremote.jca")
- [Next Class](./../jremoterequestprocessingfactory-%28jremote---api%29 "class in com.jbase.jremote.jca")


- [Frames](./.)
- [No Frames](./.)


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

## Class JRemoteManagedConnectionMetaData

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.JRemoteManagedConnectionMetaData


- All Implemented Interfaces:javax.resource.spi.ManagedConnectionMetaData
* * *


```
public class JRemoteManagedConnectionMetaData
extends Object
implements javax.resource.spi.ManagedConnectionMetaData
```

Provide useful information about connecting to a remote jBASE instance.
Author:aphethean

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `JRemoteManagedConnectionMetaData(EISMetaDataRepository mdRepository)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getEISProductName()`  |
| `String` | `getEISProductVersion()`  |
| `int` | `getMaxConnections()`  |
| `String` | `getUserName()`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### JRemoteManagedConnectionMetaData

```
public JRemoteManagedConnectionMetaData(EISMetaDataRepository mdRepository)
```


    - ### Method Detail

        - #### getEISProductName

```
public String getEISProductName()
                         throws javax.resource.ResourceException
```
Specified by:`getEISProductName` in interface `javax.resource.spi.ManagedConnectionMetaData`Throws:`javax.resource.ResourceException`


        - #### getEISProductVersion

```
public String getEISProductVersion()
                            throws javax.resource.ResourceException
```
Specified by:`getEISProductVersion` in interface `javax.resource.spi.ManagedConnectionMetaData`Throws:`javax.resource.ResourceException`


        - #### getMaxConnections

```
public int getMaxConnections()
                      throws javax.resource.ResourceException
```
Specified by:`getMaxConnections` in interface `javax.resource.spi.ManagedConnectionMetaData`Throws:`javax.resource.ResourceException`


        - #### getUserName

```
public String getUserName()
                   throws javax.resource.ResourceException
```
Specified by:`getUserName` in interface `javax.resource.spi.ManagedConnectionMetaData`Throws:`javax.resource.ResourceException`

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.jca.jremotemanagedconnectionmetadata-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.jca-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](./../jremotemanagedconnectionfactory-%28jremote---api%29 "class in com.jbase.jremote.jca")
- [Next Class](./../jremoterequestprocessingfactory-%28jremote---api%29 "class in com.jbase.jremote.jca")


- [Frames](./.)
- [No Frames](./.)


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
