# CCIJRemoteRecordFactory (jremote   API)

**Created At:** 9/25/2017 11:55:04 AM  
**Updated At:** 2/15/2018 8:02:18 AM  
**Original Doc:** [com_jbase_jremote_jca_cci_CCIJRemoteRecordFactory](https://docs.jbase.com/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteRecordFactory)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="CCIJRemoteRecordFactory (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJRemoteRecordFactory)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteSubroutineParametersRecord "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteRecordFactory)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteRecordFactory)


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

## Class CCIJRemoteRecordFactory

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.cci.CCIJRemoteRecordFactory


- All Implemented Interfaces:javax.resource.cci.RecordFactory
* * *


```
public class CCIJRemoteRecordFactory
extends Object
implements javax.resource.cci.RecordFactory
```

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `CCIJRemoteRecordFactory()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `javax.resource.cci.IndexedRecord` | `createIndexedRecord(String type)`  |
| `javax.resource.cci.MappedRecord` | `createMappedRecord(String arg0)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### CCIJRemoteRecordFactory

```
public CCIJRemoteRecordFactory()
```


    - ### Method Detail

        - #### createIndexedRecord

```
public javax.resource.cci.IndexedRecord createIndexedRecord(String type)
                                                     throws javax.resource.ResourceException
```
Specified by:`createIndexedRecord` in interface `javax.resource.cci.RecordFactory`Throws:`javax.resource.ResourceException`


        - #### createMappedRecord

```
public javax.resource.cci.MappedRecord createMappedRecord(String arg0)
                                                   throws javax.resource.ResourceException
```
Specified by:`createMappedRecord` in interface `javax.resource.cci.RecordFactory`Throws:`javax.resource.ResourceException`

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJRemoteRecordFactory)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteManagedConnectionFactory "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteSubroutineParametersRecord "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteRecordFactory)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteRecordFactory)


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
