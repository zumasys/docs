# ObjectFactory (jremote   API)

<PageHeader />

## Class ObjectFactory

- java.lang.Object
  - com.jbase.jremote.io.ObjectFactory

- Direct Known Subclasses:InboundObjectFactory, JRemoteObjectFactory

* * *

```java
public abstract class ObjectFactory
extends Object
```

### Constructor Summary

| Constructor and Description |
| --- |
 Constructors  | `ObjectFactory()`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
 All Methods <br>[Instance Methods](javascript%3Ashow(2);) <br>[Abstract Methods](javascript%3Ashow(4);) <br>[Concrete Methods](javascript%3Ashow(8);)  | `protected JBaseSerializable` | `createGenericObjects(int objectType)`<br>Creates any generic (i.e common to all framework clients) objects. |
| `protected abstract JBaseSerializable` | `createObject(int objectType)`<br>Create JBaseSerializable object from the supplied object type. |

### Methods inherited from class java.lang.Object

`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

- #### ObjectFactory

```java
public ObjectFactory()
```

### Method Detail

- #### createObject

```java
protected abstract JBaseSerializable createObject(int objectType)
                                           throws UnknownTypeException
```

Create JBaseSerializable object from the supplied object type.  
Parameters:`objectType` - type identifier  
Returns:an instance of a class implementing JBaseSerializable  
Throws:`UnknownTypeException`

- #### createGenericObjects

```java
protected JBaseSerializable createGenericObjects(int objectType)
                                          throws UnknownTypeException
```

Creates any generic (i.e common to all framework clients) objects. If the object is not generic calls the client specific createObject method.  
Parameters:`objectType` - type identifier  
Returns:an instance of a class implementing JBaseSerializable  
Throws:`UnknownTypeException`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
