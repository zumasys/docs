# StatementFetchRequest (jremote API)

<PageHeader />

## Class StatementFetchRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")
* * *


```
public class StatementFetchRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `StatementFetchRequest()` <br> |
| `StatementFetchRequest(int statementId, int rowsToFetch)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getNumberOfRowsToFetch()` <br> |
| `int`<br> | `getStatementId()` <br> |
| `int`<br> | `getType()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
    - `getVersion`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### StatementFetchRequest

```
public StatementFetchRequest()
```

#### StatementFetchRequest

```
public StatementFetchRequest(int statementId,
                             int rowsToFetch)
```



### 


### Method Detail

#### getStatementId

```
public int getStatementId()
```

#### getNumberOfRowsToFetch

```
public int getNumberOfRowsToFetch()
```

#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseSerializable`Overrides:`writeObject` in class `JRemoteRequest`Throws:`IOException`
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Specified by:`readObject` in interface `JBaseSerializable`Overrides:`readObject` in class `JRemoteRequest`Throws:`IOException``ClassNotFoundException`
#### getType

```
public int getType()
```
Returns:type id of the objects, used during the serializationSee Also:[`JBaseSerializable.getType()`](./../../io/jbaseserializable-%28jremote-api%29#getType--)

Back to [jREMOTE API](com_jbase_jremote_package-summary)


