# StartTransactionRequest (jremote API)

<PageHeader />

## Class StartTransactionRequest

All Implemented Interfaces:[JBaseSerializable](./../../../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io"), [InboundRequest](./../inboundrequest-(jremote-api) "interface in com.jbase.jremote.jca.inflow.protocol")
* * *

```java
public class StartTransactionRequest
extends Object
implements InboundRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| ` ` | `StartTransactionRequest()`  |
| `protected` | `StartTransactionRequest(String transId)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `JBaseSerializable` | `execute(ClientHandle handle, RequestHandler handler)`  |
| `String` | `getTransactionId()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### StartTransactionRequest

```java
public StartTransactionRequest()
```

#### StartTransactionRequest

```java
protected StartTransactionRequest(String transId)
```

### Method Detail

#### execute

```java
public JBaseSerializable execute(ClientHandle handle,
                                 RequestHandler handler)
```

Specified by:`execute` in interface `InboundRequest`

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

Specified by:`getTransactionId` in interface `InboundRequest`

Back to [jRemote API](./../../README.md)
  
<PageFooter />
