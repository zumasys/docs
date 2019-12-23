# JResultSet (jremote API)

**Created At:** 9/25/2017 12:09:55 PM  
**Updated At:** 12/24/2018 7:52:41 PM  
**Original Doc:** [com_jbase_jremote_jresultset](https://docs.jbase.com/39248-jremote/com_jbase_jremote_jresultset)  


JavaScript is disabled on your browser.



## Interface JResultSet

All Known Implementing Classes:[JResultSetImpl](./../io/jresultsetimpl-%28jremote-api%29 "class in com.jbase.jremote.io")
* * *


```
public interface JResultSet
```

Allows iteration of a result set fetched in blocks.

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JDynArray`<br> | `getRow()` <br> |
| `boolean`<br> | `next()` <br> |

### Method Detail



#### next

```
boolean next()
      throws JRemoteException
```
Throws:`JRemoteException`




#### getRow

```
JDynArray getRow()
```

Back to [jREMOTE API](com_jbase_jremote_package-summary)


