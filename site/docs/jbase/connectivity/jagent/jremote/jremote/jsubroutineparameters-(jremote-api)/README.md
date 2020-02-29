# JSubroutineParameters (jremote API)

**Created At:** 9/25/2017 12:10:18 PM  
**Updated At:** 12/24/2018 7:59:12 PM  
**Original Doc:** [com_jbase_jremote_jsubroutineparameters](https://docs.jbase.com/39248-jremote/com_jbase_jremote_jsubroutineparameters)  
**Original ID:** 278309  
**Internal:** No  


JavaScript is disabled on your browser.



## Class JSubroutineParameters

All Implemented Interfaces:[JBaseSerializable](./../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io"), Serializable, Cloneable, Iterable&lt;JDynArray&gt;, Collection&lt;JDynArray&gt;, List&lt;JDynArray&gt;, RandomAccess
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

See Also:`JConnection.call(java.lang.String, com.jbase.jremote.JSubroutineParameters)`, [Serialized Form](./../../jrcs/serialized-form#com.jbase.jremote)

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Field Summary

- Fields inherited from class java.util.AbstractList
    - `modCount`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JSubroutineParameters()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class java.util.ArrayList
    - `add, add, addAll, addAll, clear, clone, contains, ensureCapacity, forEach, get, indexOf, isEmpty, iterator, lastIndexOf, listIterator, listIterator, remove, remove, removeAll, removeIf, removeRange, replaceAll, retainAll, set, size, sort, spliterator, subList, toArray, toArray, trimToSize`
- Methods inherited from class java.util.AbstractList
    - `equals, hashCode`
- Methods inherited from class java.util.AbstractCollection
    - `containsAll, toString`
- Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")`finalize, getClass, notify, notifyAll, wait, wait, wait`
- Methods inherited from interface java.util.List
    - `containsAll, equals, hashCode`
- Methods inherited from interface java.util.Collection
    - `parallelStream, stream`

### Constructor Detail

#### JSubroutineParameters

```
public JSubroutineParameters()
```



### Method Detail

#### getType

```
public int getType()
```
Specified by:`getType` in interface `JBaseSerializable`Returns:type id of the objects, used during the serialization
#### getVersion

```
public int getVersion()
```
Specified by:`getVersion` in interface `JBaseSerializable`
#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseSerializable`Throws:`IOException`
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Specified by:`readObject` in interface `JBaseSerializable`Throws:`IOException``ClassNotFoundException`

Back to [jREMOTE API](com_jbase_jremote_package-summary)
