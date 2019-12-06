# JSubroutineParameters

**Created At:** 9/13/2017 8:06:21 PM  
**Updated At:** 9/13/2017 8:06:43 PM  


## Class JSubroutineParameters

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [java.util.AbstractCollection](http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractCollection.html?is-external=true "class or interface in java.util")&lt;E&gt;
    - - [java.util.AbstractList](http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractList.html?is-external=true "class or interface in java.util")&lt;E&gt;
        - - [java.util.ArrayList](http://java.sun.com/j2se/1.5.0/docs/api/java/util/ArrayList.html?is-external=true "class or interface in java.util")&lt;[JDynArray](../../../com/jbase/jremote/JDynArray.html "class in com.jbase.jremote")&gt;
            - - com.jbase.jremote.JSubroutineParameters
- <dl><dt>All Implemented Interfaces:</dt><dd><a href="../../../com/jbase/jremote/io/JBaseSerializable.html" title="interface in com.jbase.jremote.io">JBaseSerializable</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true" title="class or interface in java.io">Serializable</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Cloneable.html?is-external=true" title="class or interface in java.lang">Cloneable</a>, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true" title="class or interface in java.lang">Iterable</a>&lt;<a href="../../../com/jbase/jremote/JDynArray.html" title="class in com.jbase.jremote">JDynArray</a>&gt;, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true" title="class or interface in java.util">Collection</a>&lt;<a href="../../../com/jbase/jremote/JDynArray.html" title="class in com.jbase.jremote">JDynArray</a>&gt;, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true" title="class or interface in java.util">List</a>&lt;<a href="../../../com/jbase/jremote/JDynArray.html" title="class in com.jbase.jremote">JDynArray</a>&gt;, <a href="http://java.sun.com/j2se/1.5.0/docs/api/java/util/RandomAccess.html?is-external=true" title="class or interface in java.util">RandomAccess</a></dd></dl>
```
public class JSubroutineParameters
extends ArrayList<JDynArray> implements JBaseSerializable
```

A list of parameters to pass to a jBASE subroutine.
JSubroutineParameters is based on ArrayList and its typical usage is as follows: 

    JSubroutineParameters subroutineParams = new JSubroutineParameters(); 
    subroutineParams.add(new JDynArray()); 
    subroutineParams.add(new JDynArray("two")); 
    subroutineParams.add(null); 
    subroutineParams.add(new JDynArray()); 
    subroutineParams.add(new JDynArray("five")); 

Adding null elements is permitted and the above example will provide five parameters to a subroutine.<dl><dt>Author:</dt><dd>aphethean</dd><dt>See Also:</dt><dd><a href="../../../com/jbase/jremote/JConnection.html#call-java.lang.String-com.jbase.jremote.JSubroutineParameters-"><code>JConnection.call(java.lang.String, com.jbase.jremote.JSubroutineParameters)</code></a>, <a href="../../../serialized-form.html#com.jbase.jremote.JSubroutineParameters">Serialized Form</a></dd></dl>
- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.jremote.io.[JBaseSerializable](../../../com/jbase/jremote/io/JBaseSerializable.html "interface in com.jbase.jremote.io")
`JBaseSerializable.TYPE`
    - ### Field Summary

        - ### Fields inherited from class java.util.[AbstractList](http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractList.html?is-external=true "class or interface in java.util")
`modCount`
    - ### Constructor Summary


| Constructor and Description |
| --- |
<caption>Constructors </caption>| `JSubroutineParameters()`  |
    - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
<caption>All Methods <a href="javascript%3Ashow(2);">Instance Methods</a> <a href="javascript%3Ashow(8);">Concrete Methods</a>&nbsp;</caption>| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |


        - ### Methods inherited from class java.util.[ArrayList](http://java.sun.com/j2se/1.5.0/docs/api/java/util/ArrayList.html?is-external=true "class or interface in java.util")
`add, add, addAll, addAll, clear, clone, contains, ensureCapacity, forEach, get, indexOf, isEmpty, iterator, lastIndexOf, listIterator, listIterator, remove, remove, removeAll, removeIf, removeRange, replaceAll, retainAll, set, size, sort, spliterator, subList, toArray, toArray, trimToSize`
        - ### Methods inherited from class java.util.[AbstractList](http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractList.html?is-external=true "class or interface in java.util")
`equals, hashCode`
        - ### Methods inherited from class java.util.[AbstractCollection](http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractCollection.html?is-external=true "class or interface in java.util")
`containsAll, toString`
        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`finalize, getClass, notify, notifyAll, wait, wait, wait`
        - ### Methods inherited from interface java.util.[List](http://java.sun.com/j2se/1.5.0/docs/api/java/util/List.html?is-external=true "class or interface in java.util")
`containsAll, equals, hashCode`
        - ### Methods inherited from interface java.util.[Collection](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true "class or interface in java.util")
`parallelStream, stream`
- - ### Constructor Detail

        - #### JSubroutineParameters

```
public JSubroutineParameters()
```
    - ### Method Detail

        - #### getType

```
public int getType()
```
<dl><dt>Specified by:</dt><dd><code><a href="../../../com/jbase/jremote/io/JBaseSerializable.html#getType--">getType</a></code> in interface <code><a href="../../../com/jbase/jremote/io/JBaseSerializable.html" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt>Returns:</dt><dd>type id of the objects, used during the serialization</dd></dl>
        - #### getVersion

```
public int getVersion()
```
<dl><dt>Specified by:</dt><dd><code><a href="../../../com/jbase/jremote/io/JBaseSerializable.html#getVersion--">getVersion</a></code> in interface <code><a href="../../../com/jbase/jremote/io/JBaseSerializable.html" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd></dl>
        - #### writeObject

```
public void writeObject(JBaseObjectWriter writer,                         int version)                  throws IOException
```
<dl><dt>Specified by:</dt><dd><code><a href="../../../com/jbase/jremote/io/JBaseSerializable.html#writeObject-com.jbase.jremote.io.JBaseObjectWriter-int-">writeObject</a></code> in interface <code><a href="../../../com/jbase/jremote/io/JBaseSerializable.html" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt>Throws:</dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
        - #### readObject

```
public void readObject(JBaseObjectReader reader,                        int version)                 throws IOException,                        ClassNotFoundException
```
<dl><dt>Specified by:</dt><dd><code><a href="../../../com/jbase/jremote/io/JBaseSerializable.html#readObject-com.jbase.jremote.io.JBaseObjectReader-int-">readObject</a></code> in interface <code><a href="../../../com/jbase/jremote/io/JBaseSerializable.html" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt>Throws:</dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>

