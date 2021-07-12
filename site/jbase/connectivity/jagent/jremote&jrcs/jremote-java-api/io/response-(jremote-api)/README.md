# Response (jremote API)

<PageHeader />

## Class Response

All Implemented Interfaces:[JBaseSerializable](./../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")  
Direct Known Subclasses:[EchoResponse](./. "class in com.jbase.jremote.protocol"), [ErrorResponse](./. "class in com.jbase.jremote.io"), [JRemoteResponse](./. "class in com.jbase.jremote.protocol"), [OKResponse](./. "class in com.jbase.jremote.io")
* * *

```java
public abstract class Response
extends Object
implements JBaseSerializable
```

Represents a response from jsqld.

See Also:[`ErrorResponse`](./. "class in com.jbase.jremote.io")

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Constructor Summary

| Constructor and Description |
| --- |
| `Response()`  |

### Method Summary

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- Methods inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `getType, getVersion, readObject, writeObject`

### Constructor Detail

#### Response

```java
public Response()
```

Back to [jRemote API](./../../README.md)

<PageFooter />
