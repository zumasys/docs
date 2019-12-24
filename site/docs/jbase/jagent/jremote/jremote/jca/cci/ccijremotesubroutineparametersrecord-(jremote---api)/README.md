# CCIJRemoteSubroutineParametersRecord (jremote   API)

**Created At:** 9/25/2017 11:55:11 AM  
**Updated At:** 2/15/2018 8:02:19 AM  
**Original Doc:** [com_jbase_jremote_jca_cci_CCIJRemoteSubroutineParametersRecord](https://docs.jbase.com/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteSubroutineParametersRecord)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="CCIJRemoteSubroutineParametersRecord (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10,"i21":10,"i22":10,"i23":10,"i24":10,"i25":10,"i26":10,"i27":10,"i28":10,"i29":10,"i30":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca.cci-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.jca.cci.ccijremotesubroutineparametersrecord-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.jca.cci-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../ccijremoterecordfactory-%28jremote---api%29 "class in com.jbase.jremote.jca.cci")
- [Next Class](./../ccilocaltransactionmanager-%28jremote---api%29 "class in com.jbase.jremote.jca.cci")


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

## Class CCIJRemoteSubroutineParametersRecord

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.cci.CCIJRemoteSubroutineParametersRecord


- All Implemented Interfaces:[SubroutineParametersRecord](./../subroutineparametersrecord-%28jremote---api%29 "interface in com.jbase.jremote.jca.cci"), [Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"), [Cloneable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Cloneable.html?is-external=true "class or interface in java.lang"), [Iterable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true "class or interface in java.lang"), [Collection](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true "class or interface in java.util"), [List](./../../../../../../jql/list "class or interface in java.util"), javax.resource.cci.IndexedRecord, javax.resource.cci.Record, javax.resource.cci.Streamable
* * *


```
public class CCIJRemoteSubroutineParametersRecord
extends Object
implements SubroutineParametersRecord
```
See Also:[Serialized Form](../../../../../serialized-form.html#com.jbase.jremote.jca.cci.CCIJRemoteSubroutineParametersRecord)

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `CCIJRemoteSubroutineParametersRecord(String name)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `void` | `add(int idx,<br>   Object o)`  |
| `boolean` | `add(Object o)`  |
| `boolean` | `addAll(Collection clx)`  |
| `boolean` | `addAll(int idx,<br>      Collection clx)`  |
| `void` | `clear()`  |
| `javax.resource.cci.Record` | `clone()`  |
| `boolean` | `contains(Object o)`  |
| `boolean` | `containsAll(Collection clx)`  |
| `Object` | `get(int idx)`  |
| `protected JSubroutineParameters` | `getJSubroutineParameters()`  |
| `String` | `getRecordName()`  |
| `String` | `getRecordShortDescription()`  |
| `int` | `indexOf(Object o)`  |
| `boolean` | `isEmpty()`  |
| `Iterator` | `iterator()`  |
| `int` | `lastIndexOf(Object o)`  |
| `ListIterator` | `listIterator()`  |
| `ListIterator` | `listIterator(int idx)`  |
| `void` | `read(InputStream arg0)`  |
| `Object` | `remove(int idx)`  |
| `boolean` | `remove(Object o)`  |
| `boolean` | `removeAll(Collection clx)`  |
| `boolean` | `retainAll(Collection clx)`  |
| `Object` | `set(int idx,<br>   Object o)`  |
| `void` | `setRecordName(String name)`  |
| `void` | `setRecordShortDescription(String desc)`  |
| `int` | `size()`  |
| `List` | `subList(int from,<br>       int to)`  |
| `Object[]` | `toArray()`  |
| `Object[]` | `toArray(Object[] os)`  |
| `void` | `write(OutputStream arg0)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


        - ### Methods inherited from interface javax.resource.cci.Record
`equals, hashCode`


        - ### Methods inherited from interface java.util.[List](./../../../../../../jql/list "class or interface in java.util")
`equals, hashCode, replaceAll, sort, spliterator`


        - ### Methods inherited from interface java.util.[Collection](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true "class or interface in java.util")
`parallelStream, removeIf, stream`


        - ### Methods inherited from interface java.lang.[Iterable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true "class or interface in java.lang")
`forEach`

- - ### Constructor Detail

        - #### CCIJRemoteSubroutineParametersRecord

```
public CCIJRemoteSubroutineParametersRecord(String name)
```


    - ### Method Detail

        - #### getJSubroutineParameters

```
protected JSubroutineParameters getJSubroutineParameters()
```


        - #### getRecordName

```
public String getRecordName()
```
Specified by:`getRecordName` in interface `javax.resource.cci.Record`


        - #### getRecordShortDescription

```
public String getRecordShortDescription()
```
Specified by:`getRecordShortDescription` in interface `javax.resource.cci.Record`


        - #### setRecordName

```
public void setRecordName(String name)
```
Specified by:`setRecordName` in interface `javax.resource.cci.Record`


        - #### setRecordShortDescription

```
public void setRecordShortDescription(String desc)
```
Specified by:`setRecordShortDescription` in interface `javax.resource.cci.Record`


        - #### read

```
public void read(InputStream arg0)
          throws IOException
```
Specified by:`read` in interface `javax.resource.cci.Streamable`Throws:`IOException`


        - #### write

```
public void write(OutputStream arg0)
           throws IOException
```
Specified by:`write` in interface `javax.resource.cci.Streamable`Throws:`IOException`


        - #### clone

```
public javax.resource.cci.Record clone()
```
Specified by:`clone` in interface `javax.resource.cci.Record`Overrides:`clone` in class `Object`


        - #### add

```
public boolean add(Object o)
```
Specified by:`add` in interface `Collection`Specified by:`add` in interface `List`


        - #### add

```
public void add(int idx,
                Object o)
```
Specified by:`add` in interface `List`


        - #### addAll

```
public boolean addAll(Collection clx)
```
Specified by:`addAll` in interface `Collection`Specified by:`addAll` in interface `List`


        - #### addAll

```
public boolean addAll(int idx,
                      Collection clx)
```
Specified by:`addAll` in interface `List`


        - #### clear

```
public void clear()
```
Specified by:`clear` in interface `Collection`Specified by:`clear` in interface `List`


        - #### contains

```
public boolean contains(Object o)
```
Specified by:`contains` in interface `Collection`Specified by:`contains` in interface `List`


        - #### containsAll

```
public boolean containsAll(Collection clx)
```
Specified by:`containsAll` in interface `Collection`Specified by:`containsAll` in interface `List`


        - #### get

```
public Object get(int idx)
```
Specified by:`get` in interface `List`


        - #### indexOf

```
public int indexOf(Object o)
```
Specified by:`indexOf` in interface `List`


        - #### isEmpty

```
public boolean isEmpty()
```
Specified by:`isEmpty` in interface `Collection`Specified by:`isEmpty` in interface `List`


        - #### iterator

```
public Iterator iterator()
```
Specified by:`iterator` in interface `Iterable`Specified by:`iterator` in interface `Collection`Specified by:`iterator` in interface `List`


        - #### lastIndexOf

```
public int lastIndexOf(Object o)
```
Specified by:`lastIndexOf` in interface `List`


        - #### listIterator

```
public ListIterator listIterator()
```
Specified by:`listIterator` in interface `List`


        - #### listIterator

```
public ListIterator listIterator(int idx)
```
Specified by:`listIterator` in interface `List`


        - #### remove

```
public boolean remove(Object o)
```
Specified by:`remove` in interface `Collection`Specified by:`remove` in interface `List`


        - #### remove

```
public Object remove(int idx)
```
Specified by:`remove` in interface `List`


        - #### removeAll

```
public boolean removeAll(Collection clx)
```
Specified by:`removeAll` in interface `Collection`Specified by:`removeAll` in interface `List`


        - #### retainAll

```
public boolean retainAll(Collection clx)
```
Specified by:`retainAll` in interface `Collection`Specified by:`retainAll` in interface `List`


        - #### set

```
public Object set(int idx,
                  Object o)
```
Specified by:`set` in interface `List`


        - #### size

```
public int size()
```
Specified by:`size` in interface `Collection`Specified by:`size` in interface `List`


        - #### subList

```
public List subList(int from,
                    int to)
```
Specified by:`subList` in interface `List`


        - #### toArray

```
public Object[] toArray()
```
Specified by:`toArray` in interface `Collection`Specified by:`toArray` in interface `List`


        - #### toArray

```
public Object[] toArray(Object[] os)
```
Specified by:`toArray` in interface `Collection`Specified by:`toArray` in interface `List`

Skip navigation links

- [Overview](../../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.jca.cci-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.jca.cci.ccijremotesubroutineparametersrecord-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.jca.cci-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](./../ccijremoterecordfactory-%28jremote---api%29 "class in com.jbase.jremote.jca.cci")
- [Next Class](./../ccilocaltransactionmanager-%28jremote---api%29 "class in com.jbase.jremote.jca.cci")


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
