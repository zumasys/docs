# TransactionOperation (jremote API)

<PageHeader />

## Class TransactionOperation

All Implemented Interfaces:[JBaseSerializable](./../../../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")
* * *

```java
public class TransactionOperation
extends Object
implements JBaseSerializable
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `TransactionOperation()`  |
| `TransactionOperation(boolean operationSuccessful, String transId)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `String` | `getTransactionId()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `boolean` | `isOperationSuccessful()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### TransactionOperation

```java
public TransactionOperation()
```

#### TransactionOperation

```java
public TransactionOperation(boolean operationSuccessful,
                            String transId)
```

### Method Detail

#### getType

```java
public int getType()
```

Specified by:`getType` in interface `JBaseSerializable`  
Returns:type id of the objects, used during the serialization

#### getVersion

```java
public int getVersion()
```

Specified by:`getVersion` in interface `JBaseSerializable`

#### readObject

```java
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```

Specified by:`readObject` in interface `JBaseSerializable`  
Throws:`IOException``ClassNotFoundException`

#### writeObject

```java
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```

Specified by:`writeObject` in interface `JBaseSerializable`  
Throws:`IOException`

#### getTransactionId

```java
public String getTransactionId()
```

#### isOperationSuccessful

```java
public boolean isOperationSuccessful()
```

Back to [jRemote API](./../../README.md)

<PageFooter />
