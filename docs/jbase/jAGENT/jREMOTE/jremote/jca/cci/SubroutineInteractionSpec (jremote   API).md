# SubroutineInteractionSpec (jremote   API)

**Created At:** 9/25/2017 11:57:24 AM  
**Updated At:** 2/15/2018 8:02:19 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="SubroutineInteractionSpec (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_SubroutineInteractionSpec)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_DynamicArrayRecord "interface in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_SubroutineParametersRecord "interface in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_SubroutineInteractionSpec)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_SubroutineInteractionSpec)


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
See Also:[Serialized Form](../../../../../serialized-form.html#com.jbase.jremote.jca.cci.SubroutineInteractionSpec)

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
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_SubroutineInteractionSpec)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_DynamicArrayRecord "interface in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_SubroutineParametersRecord "interface in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_SubroutineInteractionSpec)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_SubroutineInteractionSpec)


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
