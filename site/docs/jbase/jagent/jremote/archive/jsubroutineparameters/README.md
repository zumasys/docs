# JSubroutineParameters

**Created At:** 9/13/2017 8:06:21 PM  
**Updated At:** 9/13/2017 8:06:43 PM  
**Original Doc:** [jsubroutineparameters](https://docs.jbase.com/39719-archive/jsubroutineparameters)  
**Original ID:** 276708  
**Internal:** Yes  


## Class JSubroutineParameters

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [java.util.AbstractCollection](http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractCollection.html?is-external=true "class or interface in java.util")&lt;E&gt;
    - - [java.util.AbstractList](http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractList.html?is-external=true "class or interface in java.util")&lt;E&gt;
        - - [java.util.ArrayList](http://java.sun.com/j2se/1.5.0/docs/api/java/util/ArrayList.html?is-external=true "class or interface in java.util")&lt;[JDynArray](./../jdynarray "class in com.jbase.jremote")&gt;
            - - com.jbase.jremote.JSubroutineParameters
- All Implemented Interfaces:[JBaseSerializable](../../../com/jbase/jremote/io/JBaseSerializable.html "interface in com.jbase.jremote.io"), [Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io"), [Cloneable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Cloneable.html?is-external=true "class or interface in java.lang"), [Iterable](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Iterable.html?is-external=true "class or interface in java.lang")&lt;[JDynArray](./../jdynarray "class in com.jbase.jremote")&gt;, [Collection](http://java.sun.com/j2se/1.5.0/docs/api/java/util/Collection.html?is-external=true "class or interface in java.util")&lt;[JDynArray](./../jdynarray "class in com.jbase.jremote")&gt;, [List](./../../../../jql/list "class or interface in java.util")&lt;[JDynArray](./../jdynarray "class in com.jbase.jremote")&gt;, [RandomAccess](http://java.sun.com/j2se/1.5.0/docs/api/java/util/RandomAccess.html?is-external=true "class or interface in java.util")
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

Adding null elements is permitted and the above example will provide five parameters to a subroutine.Author:aphetheanSee Also:[`JConnection.call(java.lang.String, com.jbase.jremote.JSubroutineParameters)`](../../../com/jbase/jremote/JConnection.html#call-java.lang.String-com.jbase.jremote.JSubroutineParameters-), [Serialized Form](../../../serialized-form.html#com.jbase.jremote.JSubroutineParameters)
- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.jremote.io.[JBaseSerializable](../../../com/jbase/jremote/io/JBaseSerializable.html "interface in com.jbase.jremote.io")
`JBaseSerializable.TYPE`
    - ### Field Summary

        - ### Fields inherited from class java.util.[AbstractList](http://java.sun.com/j2se/1.5.0/docs/api/java/util/AbstractList.html?is-external=true "class or interface in java.util")
`modCount`
    - ### Constructor Summary


| Constructor and Description |
| --- |
Constructors | `JSubroutineParameters()`  |
    - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
All Methods [Instance Methods](javascript%3Ashow%282%29;) [Concrete Methods](javascript%3Ashow%288%29;) | `int` | `getType()`  |
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
        - ### Methods inherited from interface java.util.[List](./../../../../jql/list "class or interface in java.util")
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
Specified by:`getType` in interface `JBaseSerializable`Returns:type id of the objects, used during the serialization
        - #### getVersion

```
public int getVersion()
```
Specified by:`getVersion` in interface `JBaseSerializable`
        - #### writeObject

```
public void writeObject(JBaseObjectWriter writer,                         int version)                  throws IOException
```
Specified by:`writeObject` in interface `JBaseSerializable`Throws:`IOException`
        - #### readObject

```
public void readObject(JBaseObjectReader reader,                        int version)                 throws IOException,                        ClassNotFoundException
```
Specified by:`readObject` in interface `JBaseSerializable`Throws:`IOException``ClassNotFoundException`

