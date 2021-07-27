# StatementExecuteQueryRequest (jremote API)

<PageHeader />

## Class StatementExecuteQueryRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class StatementExecuteQueryRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `StatementExecuteQueryRequest()`  |
| `StatementExecuteQueryRequest(JDynArray queries, JSelectListProt selectList)`  |
| `StatementExecuteQueryRequest(String query, JSelectListProt selectList)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getQuery()`  |
| `JSelectListProt` | `getSelectList()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### StatementExecuteQueryRequest

```java
public StatementExecuteQueryRequest()
```

#### StatementExecuteQueryRequest

```java
public StatementExecuteQueryRequest(String query,
                                    JSelectListProt selectList)
```

#### StatementExecuteQueryRequest

```java
public StatementExecuteQueryRequest(JDynArray queries,
                                    JSelectListProt selectList)
```

### Method Detail

#### getQuery

```java
public String getQuery()
```

#### getSelectList

```java
public JSelectListProt getSelectList()
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

Specified by:`readObject` in interface `JBaseSerializable`Overrides:`readObject` in class `JRemoteRequest`Throws:`IOException``ClassNotFoundException`

#### getType

```java
public int getType()
```

Returns:type id of the objects, used during the serializationSee Also:[`JBaseSerializable.getType()`](./../../io/jbaseserializable-(jremote-api)#getType--)

#### getVersion

```java
public int getVersion()
```

Specified by:`getVersion` in interface `JBaseSerializable`Overrides:`getVersion` in class `JRemoteRequest`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
