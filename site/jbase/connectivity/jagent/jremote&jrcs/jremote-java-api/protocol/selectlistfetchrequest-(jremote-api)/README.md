# SelectListFetchRequest (jremote API)

<PageHeader />

## Class SelectListFetchRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class SelectListFetchRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `SelectListFetchRequest()`  |
| `SelectListFetchRequest(int selectListId, int fetchDirection, int fetchSize, boolean fetchData, JSelectListProt modifiedSelectList)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `int` | `fetchDirection()`  |
| `boolean` | `getFetchData()`  |
| `int` | `getFetchSize()`  |
| `JSelectListProt` | `getModifiedSelectList()`  |
| `int` | `getSelectListId()`  |
| `int` | `getType()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
  - `getVersion`
- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### SelectListFetchRequest

```java
public SelectListFetchRequest()
```

#### SelectListFetchRequest

```java
public SelectListFetchRequest(int selectListId,
                              int fetchDirection,
                              int fetchSize,
                              boolean fetchData,
                              JSelectListProt modifiedSelectList)
```

### Method Detail

#### getSelectListId

```java
public int getSelectListId()
```

#### fetchDirection

```java
public int fetchDirection()
```

#### getFetchSize

```java
public int getFetchSize()
```

#### getFetchData

```java
public boolean getFetchData()
```

#### getModifiedSelectList

```java
public JSelectListProt getModifiedSelectList()
```

#### writeObject

```java
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```

Specified by:`writeObject` in interface `JBaseSerializable`  
Overrides:`writeObject` in class `JRemoteRequest`  
Throws:`IOException`

#### readObject

```java
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```

Specified by:`readObject` in interface `JBaseSerializable`  
Overrides:`readObject` in class `JRemoteRequest`  
Throws:`IOException``ClassNotFoundException`

#### getType

```java
public int getType()
```

Returns:type id of the objects, used during the serialization  
See Also:[`JBaseSerializable.getType()`](./../../io/jbaseserializable-(jremote-api)#getType--)

Back to [jRemote API](./../../README.md)

<PageFooter />
