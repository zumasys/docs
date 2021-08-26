# JRecordNotFoundException (jremote API)

<PageHeader />

## Class JRecordNotFoundException

All Implemented Interfaces:[Serializable](http://java.sun.com/j2se/1.5.0/docs/api/java/io/Serializable.html?is-external=true "class or interface in java.io")

* * *

```java
public class JRecordNotFoundException
extends JRemoteException
```

A generic jBASE record not found exception.

Generally it is a good idea to check if a record exists before reading as throwing exceptions is more expensive.

### Constructor Summary

| Constructor and Description |
| --- |
| `JRecordNotFoundException()`  |

### Method Summary

- Methods inherited from class com.jbase.jremote.JRemoteException
  - `getError`
- Methods inherited from class java.lang.Throwable
  - `addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`
- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

### Constructor Detail

#### JRecordNotFoundException

```java
public JRecordNotFoundException()
```

Back to [jRemote API](./../../README.md)
  
<PageFooter />
