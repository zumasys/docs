# JResultSet

**Created At:** 9/13/2017 7:58:39 PM  
**Updated At:** 9/13/2017 7:59:02 PM  
**Original Doc:** [jresultset](https://docs.jbase.com/39719-archive/jresultset)  
**Original ID:** 276698  
**Internal:** Yes  


## Interface JResultSet

- All Known Implementing Classes:[JResultSetImpl](file:///C%3A/Users/coreyl/Desktop/jremote-docs/javadocs/com/jbase/jremote/io/JResultSetImpl.html "class in com.jbase.jremote.io")
```
public interface JResultSet
```

Allows iteration of a result set fetched in blocks.Author:aphethean
- - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
All Methods [Instance Methods](javascript%3Ashow%282%29;) [Abstract Methods](javascript%3Ashow%284%29;) | `JDynArray` | `getRow()`  |
| `boolean` | `next()`  |
- - ### Method Detail
 
        - #### next

```
boolean next()       throws JRemoteException
```
Throws:`JRemoteException`
    - - #### getRow

```
JDynArray getRow()
```

