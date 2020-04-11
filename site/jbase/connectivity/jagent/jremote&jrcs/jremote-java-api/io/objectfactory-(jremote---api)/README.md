# ObjectFactory (jremote   API)

<PageHeader />

## Class ObjectFactory

- java.lang.Object
    - com.jbase.jremote.io.ObjectFactory


- Direct Known Subclasses:InboundObjectFactory, JRemoteObjectFactory
* * *


```
public abstract class ObjectFactory
extends Object
```

### Constructor Summary


| Constructor and Description<br> |
| --- |
 Constructors  | `ObjectFactory()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 All Methods [Instance Methods](javascript%3Ashow%282%29;) [Abstract Methods](javascript%3Ashow%284%29;) [Concrete Methods](javascript%3Ashow%288%29;)  | `protected JBaseSerializable`<br> | `createGenericObjects(int objectType)`<br>Creates any generic (i.e common to all framework clients) objects.<br> |
| `protected abstract JBaseSerializable`<br> | `createObject(int objectType)`<br>Create JBaseSerializable object from the supplied object type.<br> |




### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

- #### ObjectFactory

```
public ObjectFactory()
```






### Method Detail

- #### createObject

```
protected abstract JBaseSerializable createObject(int objectType)
                                           throws UnknownTypeException
```

Create JBaseSerializable object from the supplied object type.
Parameters:`objectType` - type identifierReturns:an instance of a class implementing JBaseSerializableThrows:`UnknownTypeException`





- #### createGenericObjects


```
protected JBaseSerializable createGenericObjects(int objectType)
                                          throws UnknownTypeException
```

Creates any generic (i.e common to all framework clients) objects. If the object is not generic calls the client specific createObject method.
Parameters:`objectType` - type identifierReturns:an instance of a class implementing JBaseSerializableThrows:`UnknownTypeException`



  
<PageFooter />
