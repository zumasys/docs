# JSubroutineParameters (jremote API)

**Created At:** 9/25/2017 12:10:18 PM  
**Updated At:** 12/24/2018 7:59:12 PM  

<noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JSubroutineParameters

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a>, Serializable, Cloneable, Iterable&lt;JDynArray&gt;, Collection&lt;JDynArray&gt;, List&lt;JDynArray&gt;, RandomAccess</dd></dl>
* * *


```
public class JSubroutineParameters
extends ArrayList<JDynArray>
implements JBaseSerializable
```

A list of parameters to pass to a jBASE subroutine.

JSubroutineParameters is based on ArrayList and its typical usage is as follows:

```
JSubroutineParameters subroutineParams = new JSubroutineParameters();
subroutineParams.add(new JDynArray());
subroutineParams.add(new JDynArray("two"));
subroutineParams.add(null);
subroutineParams.add(new JDynArray());
subroutineParams.add(new JDynArray("five"));
```

Adding null elements is permitted and the above example will provide five parameters to a subroutine.
<dl><dt><br></dt><dt><span class="seeLabel">See Also:</span></dt><dd><code>JConnection.call(java.lang.String, com.jbase.jremote.JSubroutineParameters)</code>, <a href="../../../serialized-form.html#com.jbase.jremote.JSubroutineParameters">Serialized Form</a></dd></dl>

<!--   -->

### Nested Class Summary

- <!--   -->Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`




<!--   -->

### Field Summary

- <!--   -->Fields inherited from class java.util.AbstractList
    - `modCount`




<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JSubroutineParameters()` <br> |




<!--   -->

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- <!--   -->Methods inherited from class java.util.ArrayList
    - `add, add, addAll, addAll, clear, clone, contains, ensureCapacity, forEach, get, indexOf, isEmpty, iterator, lastIndexOf, listIterator, listIterator, remove, remove, removeAll, removeIf, removeRange, replaceAll, retainAll, set, size, sort, spliterator, subList, toArray, toArray, trimToSize`
- <!--   -->Methods inherited from class java.util.AbstractList
    - `equals, hashCode`
- <!--   -->Methods inherited from class java.util.AbstractCollection
    - `containsAll, toString`
- <!--   -->Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")`finalize, getClass, notify, notifyAll, wait, wait, wait`
- <!--   -->Methods inherited from interface java.util.List
    - `containsAll, equals, hashCode`
- <!--   -->Methods inherited from interface java.util.Collection
    - `parallelStream, stream`

<!--   -->

### Constructor Detail
<!--   -->
#### JSubroutineParameters

```
public JSubroutineParameters()
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### Method Detail
<!--   -->
#### getType

```
public int getType()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#getType--">getType</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">type id of the objects, used during the serialization</dd></dl><!--   -->
#### getVersion

```
public int getVersion()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#getVersion--">getVersion</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd></dl><!--   -->
#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#writeObject-com.jbase.jremote.io.JBaseObjectWriter-int-">writeObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl><!--   -->
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable#readObject-com.jbase.jremote.io.JBaseObjectReader-int-">readObject</a></code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 20px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
Back to [jREMOTE API](com_jbase_jremote_package-summary)
