# SubroutineInteractionSpec (jremote   API)

**Created At:** 9/25/2017 11:57:24 AM  
**Updated At:** 2/15/2018 8:02:19 AM  
**Original Doc:** [com_jbase_jremote_jca_cci_SubroutineInteractionSpec](https://docs.jbase.com/39259-cci/com_jbase_jremote_jca_cci_SubroutineInteractionSpec)  
**Original ID:** 278204  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="SubroutineInteractionSpec (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca.cci-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.jca.cci.subroutineinteractionspec-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.jca.cci-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../dynamicarrayrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci")
- [Next Class](./../subroutineparametersrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci")


- [Frames](./.)
- [No Frames](./.)


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

## Class SubroutineInteractionSpec

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.cci.SubroutineInteractionSpec


- All Implemented Interfaces:[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"), javax.resource.cci.InteractionSpec
* * *


```
public class SubroutineInteractionSpec
extends Object
implements javax.resource.cci.InteractionSpec
```
See Also:[Serialized Form](./../../../../jrcs/serialized-form#com.jbase.jremote.jca.cci)

- - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `static String` | `DYNAMIC_ARRAY`  |
| `static String` | `SUBROUTINE_PARAMETERS`  |


        - ### Fields inherited from interface javax.resource.cci.InteractionSpec
`SYNC_RECEIVE, SYNC_SEND, SYNC_SEND_RECEIVE`


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `SubroutineInteractionSpec(String subroutineName)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getSubroutineName()`  |
| `void` | `setSubroutineName(String subroutineName)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Field Detail

        - #### SUBROUTINE\_PARAMETERS

```
public static final String SUBROUTINE_PARAMETERS
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.jca.cci.SubroutineInteractionSpec.SUBROUTINE_PARAMETERS)


        - #### DYNAMIC\_ARRAY

```
public static final String DYNAMIC_ARRAY
```
See Also:[Constant Field Values](../../../../../constant-values.html#com.jbase.jremote.jca.cci.SubroutineInteractionSpec.DYNAMIC_ARRAY)


    - ### Constructor Detail

        - #### SubroutineInteractionSpec

```
public SubroutineInteractionSpec(String subroutineName)
```


    - ### Method Detail

        - #### getSubroutineName

```
public String getSubroutineName()
```


        - #### setSubroutineName

```
public void setSubroutineName(String subroutineName)
```

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca.cci-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.jca.cci.subroutineinteractionspec-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.jca.cci-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../dynamicarrayrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci")
- [Next Class](./../subroutineparametersrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci")


- [Frames](./.)
- [No Frames](./.)


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
