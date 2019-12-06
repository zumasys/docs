# EISMetaDataRepository

**Created At:** 9/13/2017 8:03:46 PM  
**Updated At:** 9/13/2017 8:04:06 PM  


## Class EISMetaDataRepository

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.EISMetaDataRepository
- ```
public class EISMetaDataRepository
extends Object
```

Wrapper class for EISMetaDataResponse object representing a meta data repository containing information of the underlying EIS instance.
- - ### Constructor Summary


| Constructor and Description |
| --- |
<caption>Constructors </caption>| `EISMetaDataRepository()`  |
| `EISMetaDataRepository(EISMetaDataResponse mdRespository)`  |
    - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
<caption>All Methods <a href="javascript%3Ashow(2);">Instance Methods</a> <a href="javascript%3Ashow(8);">Concrete Methods</a>&nbsp;</caption>| `JDynArray` | `getRepositoryEntry(String key)`Obtain the value of a repository entry<br> |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- - ### Constructor Detail

        - #### EISMetaDataRepository

```
public EISMetaDataRepository()
```
        - #### EISMetaDataRepository

```
public EISMetaDataRepository(EISMetaDataResponse mdRespository)
```
    - ### Method Detail

        - #### getRepositoryEntry

```
public JDynArray getRepositoryEntry(String key)
```

Obtain the value of a repository entry<dl><dt>Parameters:</dt><dd><code>key</code> - key of the repository entry</dd><dt>Returns:</dt><dd>value of the repository entry</dd></dl>

