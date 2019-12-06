# CCIJRemoteSubroutineParametersRecord (jremote   API)

**Created At:** 9/25/2017 11:55:11 AM  
**Updated At:** 2/15/2018 8:02:19 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="CCIJRemoteSubroutineParametersRecord (jremote   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10,"i20":10,"i21":10,"i22":10,"i23":10,"i24":10,"i25":10,"i26":10,"i27":10,"i28":10,"i29":10,"i30":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJRemoteSubroutineParametersRecord)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteRecordFactory "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCILocalTransactionManager "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteSubroutineParametersRecord)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteSubroutineParametersRecord)


- [All Classes](../../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_top");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ========= END OF TOP NAVBAR ========= --><!-- ======== START OF CLASS DATA ======== -->
com.jbase.jremote.jca.cci

## Class CCIJRemoteSubroutineParametersRecord

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.jca.cci.CCIJRemoteSubroutineParametersRecord


- <dl><dt>All Implemented Interfaces:</dt>
<dd>
<a href="/39259-cci/com_jbase_jremote_jca_cci_SubroutineParametersRecord" title="interface in com.jbase.jremote.jca.cci">SubroutineParametersRecord</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true" title="class or interface in java.io">Serializable</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Cloneable.html?is-external=true" title="class or interface in java.lang">Cloneable</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true" title="class or interface in java.lang">Iterable</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true" title="class or interface in java.util">Collection</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a>, javax.resource.cci.IndexedRecord, javax.resource.cci.Record, javax.resource.cci.Streamable</dd></dl>
* * *


```
public class CCIJRemoteSubroutineParametersRecord
extends Object
implements SubroutineParametersRecord
```
<dl><dt><span class="seeLabel">See Also:</span></dt>
<dd><a href="../../../../../serialized-form.html#com.jbase.jremote.jca.cci.CCIJRemoteSubroutineParametersRecord">Serialized Form</a></dd></dl>

- <!-- ======== CONSTRUCTOR SUMMARY ======== -->
    - <!--   -->
### Constructor Summary


<caption><span>Constructors</span><span class="tabEnd"> </span></caption>| Constructor and Description |
| --- |
| `CCIJRemoteSubroutineParametersRecord(String name)`  |

<!-- ========== METHOD SUMMARY =========== -->
    - <!--   -->
### Method Summary


<caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd"> </span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd"> </span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd"> </span></span></caption>| Modifier and Type | Method and Description |
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


        - <!--   -->
### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`


        - <!--   -->
### Methods inherited from interface javax.resource.cci.Record
`equals, hashCode`


        - <!--   -->
### Methods inherited from interface java.util.[List](http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true "class or interface in java.util")
`equals, hashCode, replaceAll, sort, spliterator`


        - <!--   -->
### Methods inherited from interface java.util.[Collection](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true "class or interface in java.util")
`parallelStream, removeIf, stream`


        - <!--   -->
### Methods inherited from interface java.lang.[Iterable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true "class or interface in java.lang")
`forEach`

- <!-- ========= CONSTRUCTOR DETAIL ======== -->
    - <!--   -->
### Constructor Detail
<!--   -->
        - #### CCIJRemoteSubroutineParametersRecord

```
public CCIJRemoteSubroutineParametersRecord(String name)
```

<!-- ============ METHOD DETAIL ========== -->
    - <!--   -->
### Method Detail
<!--   -->
        - #### getJSubroutineParameters

```
protected JSubroutineParameters getJSubroutineParameters()
```

<!--   -->
        - #### getRecordName

```
public String getRecordName()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getRecordName</code> in interface <code>javax.resource.cci.Record</code>
</dd></dl>

<!--   -->
        - #### getRecordShortDescription

```
public String getRecordShortDescription()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>getRecordShortDescription</code> in interface <code>javax.resource.cci.Record</code>
</dd></dl>

<!--   -->
        - #### setRecordName

```
public void setRecordName(String name)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>setRecordName</code> in interface <code>javax.resource.cci.Record</code>
</dd></dl>

<!--   -->
        - #### setRecordShortDescription

```
public void setRecordShortDescription(String desc)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>setRecordShortDescription</code> in interface <code>javax.resource.cci.Record</code>
</dd></dl>

<!--   -->
        - #### read

```
public void read(InputStream arg0)
          throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>read</code> in interface <code>javax.resource.cci.Streamable</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### write

```
public void write(OutputStream arg0)
           throws IOException
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>write</code> in interface <code>javax.resource.cci.Streamable</code>
</dd>
<dt><span class="throwsLabel">Throws:</span></dt>
<dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->
        - #### clone

```
public javax.resource.cci.Record clone()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code>clone</code> in interface <code>javax.resource.cci.Record</code>
</dd>
<dt><span class="overrideSpecifyLabel">Overrides:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true#clone--" title="class or interface in java.lang">clone</a></code> in class <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true" title="class or interface in java.lang">Object</a></code>
</dd></dl>

<!--   -->
        - #### add

```
public boolean add(Object o)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true#add-E-" title="class or interface in java.util">add</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true" title="class or interface in java.util">Collection</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#add-E-" title="class or interface in java.util">add</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### add

```
public void add(int idx,
                Object o)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#add-int-E-" title="class or interface in java.util">add</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### addAll

```
public boolean addAll(Collection clx)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true#addAll-java.util.Collection-" title="class or interface in java.util">addAll</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true" title="class or interface in java.util">Collection</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#addAll-java.util.Collection-" title="class or interface in java.util">addAll</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### addAll

```
public boolean addAll(int idx,
                      Collection clx)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#addAll-int-java.util.Collection-" title="class or interface in java.util">addAll</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### clear

```
public void clear()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true#clear--" title="class or interface in java.util">clear</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true" title="class or interface in java.util">Collection</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#clear--" title="class or interface in java.util">clear</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### contains

```
public boolean contains(Object o)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true#contains-java.lang.Object-" title="class or interface in java.util">contains</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true" title="class or interface in java.util">Collection</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#contains-java.lang.Object-" title="class or interface in java.util">contains</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### containsAll

```
public boolean containsAll(Collection clx)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true#containsAll-java.util.Collection-" title="class or interface in java.util">containsAll</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true" title="class or interface in java.util">Collection</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#containsAll-java.util.Collection-" title="class or interface in java.util">containsAll</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### get

```
public Object get(int idx)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#get-int-" title="class or interface in java.util">get</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### indexOf

```
public int indexOf(Object o)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#indexOf-java.lang.Object-" title="class or interface in java.util">indexOf</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### isEmpty

```
public boolean isEmpty()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true#isEmpty--" title="class or interface in java.util">isEmpty</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true" title="class or interface in java.util">Collection</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#isEmpty--" title="class or interface in java.util">isEmpty</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### iterator

```
public Iterator iterator()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true#iterator--" title="class or interface in java.lang">iterator</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true" title="class or interface in java.lang">Iterable</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true#iterator--" title="class or interface in java.util">iterator</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true" title="class or interface in java.util">Collection</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#iterator--" title="class or interface in java.util">iterator</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### lastIndexOf

```
public int lastIndexOf(Object o)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#lastIndexOf-java.lang.Object-" title="class or interface in java.util">lastIndexOf</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### listIterator

```
public ListIterator listIterator()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#listIterator--" title="class or interface in java.util">listIterator</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### listIterator

```
public ListIterator listIterator(int idx)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#listIterator-int-" title="class or interface in java.util">listIterator</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### remove

```
public boolean remove(Object o)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true#remove-java.lang.Object-" title="class or interface in java.util">remove</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true" title="class or interface in java.util">Collection</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#remove-java.lang.Object-" title="class or interface in java.util">remove</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### remove

```
public Object remove(int idx)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#remove-int-" title="class or interface in java.util">remove</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### removeAll

```
public boolean removeAll(Collection clx)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true#removeAll-java.util.Collection-" title="class or interface in java.util">removeAll</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true" title="class or interface in java.util">Collection</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#removeAll-java.util.Collection-" title="class or interface in java.util">removeAll</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### retainAll

```
public boolean retainAll(Collection clx)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true#retainAll-java.util.Collection-" title="class or interface in java.util">retainAll</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true" title="class or interface in java.util">Collection</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#retainAll-java.util.Collection-" title="class or interface in java.util">retainAll</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### set

```
public Object set(int idx,
                  Object o)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#set-int-E-" title="class or interface in java.util">set</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### size

```
public int size()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true#size--" title="class or interface in java.util">size</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true" title="class or interface in java.util">Collection</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#size--" title="class or interface in java.util">size</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### subList

```
public List subList(int from,
                    int to)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#subList-int-int-" title="class or interface in java.util">subList</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### toArray

```
public Object[] toArray()
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true#toArray--" title="class or interface in java.util">toArray</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true" title="class or interface in java.util">Collection</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#toArray--" title="class or interface in java.util">toArray</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>

<!--   -->
        - #### toArray

```
public Object[] toArray(Object[] os)
```
<dl><dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true#toArray-T:A-" title="class or interface in java.util">toArray</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true" title="class or interface in java.util">Collection</a></code>
</dd>
<dt><span class="overrideSpecifyLabel">Specified by:</span></dt>
<dd>
<code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true#toArray-T:A-" title="class or interface in java.util">toArray</a></code> in interface <code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a></code>
</dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Skip navigation links
<!--   -->
- [Overview](../../../../../overview-summary.html)
- [Package](/39259-cci/com_jbase_jremote_jca_cci_package-summary)
- Class
- [Use](/39260-class-use/com_jbase_jremote_jca_cci_class-use_CCIJRemoteSubroutineParametersRecord)
- [Tree](/39259-cci/com_jbase_jremote_jca_cci_package-tree)
- [Deprecated](../../../../../deprecated-list.html)
- [Help](../../../../../help-doc.html)


jremote <br>

- [Prev Class](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteRecordFactory "class in com.jbase.jremote.jca.cci")
- [Next Class](/39259-cci/com_jbase_jremote_jca_cci_CCILocalTransactionManager "class in com.jbase.jremote.jca.cci")


- [Frames](../../../../../index.html?com/jbase/jremote/jca/cci//39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteSubroutineParametersRecord)
- [No Frames](/39259-cci/com_jbase_jremote_jca_cci_CCIJRemoteSubroutineParametersRecord)


- [All Classes](../../../../../allclasses-noframe.html)


<script type="text/javascript"><!--
  allClassesLink = document.getElementById("allclasses_navbar_bottom");
  if(window==top) {
    allClassesLink.style.display = "block";
  }
  else {
    allClassesLink.style.display = "none";
  }
  //--></script>

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method
<!--   -->
<!-- ======== END OF BOTTOM NAVBAR ======= -->
<small>			<center>			<i>Copyright © 2017 jBASE, Inc.. All Rights Reserved.</i>		</center></small>
