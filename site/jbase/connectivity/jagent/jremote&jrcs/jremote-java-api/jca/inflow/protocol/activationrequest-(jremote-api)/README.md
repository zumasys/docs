# ActivationRequest (jremote API)

<PageHeader />

## Class ActivationRequest

All Implemented Interfaces:[JBaseSerializable](./../../../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io"), [InboundRequest](./../inboundrequest-(jremote-api) "interface in com.jbase.jremote.jca.inflow.protocol"), Runnable, javax.resource.spi.work.Work
* * *

```java
public class ActivationRequest
extends Object
implements InboundRequest, javax.resource.spi.work.Work
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| ` ` | `ActivationRequest()`<br>constructor required for object creation |
| `protected` | `ActivationRequest(String activation, byte[] message, String transactionId)`<br>constructor required for tests |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `JBaseSerializable` | `execute(ClientHandle handle, RequestHandler handler)`  |
| `String` | `getActivation()`  |
| `byte[]` | `getMessage()`  |
| `String` | `getTransactionId()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `protected javax.resource.spi.work.WorkListener` | `getWorkListener()`  |
| `void` | `notifyWorkScheduled()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `release()`  |
| `void` | `run()`  |
| `void` | `sendReply()`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### ActivationRequest

```java
public ActivationRequest()
```

constructor required for object creation

#### ActivationRequest

```java
protected ActivationRequest(String activation,
                            byte[] message,
                            String transactionId)
```

constructor required for tests

### Method Detail

#### getType

```java
public int getType()
```

Specified by:`getType` in interface `JBaseSerializable`  
Returns:type id of the objects, used during the serialization

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

#### getActivation

```java
public String getActivation()
```

#### getMessage

```java
public byte[] getMessage()
```

#### getTransactionId

```java
public String getTransactionId()
```

Specified by:`getTransactionId` in interface `InboundRequest`

#### execute

```java
public JBaseSerializable execute(ClientHandle handle,
                                 RequestHandler handler)
```

Specified by:`execute` in interface `InboundRequest`

#### getWorkListener

```java
protected javax.resource.spi.work.WorkListener getWorkListener()
```

#### release

```java
public void release()
```

Specified by:`release` in interface `javax.resource.spi.work.Work`

#### run

```java
public void run()
```

Specified by:`run` in interface `Runnable`

#### notifyWorkScheduled

```java
public void notifyWorkScheduled()
```

#### sendReply

```java
public void sendReply()
```

#### getVersion

```java
public int getVersion()
```

Specified by:`getVersion` in interface `JBaseSerializable`  

Back to [jRemote API](./../../README.md)
  
<PageFooter />
