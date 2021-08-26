# JRemoteException (jremote API)

<PageHeader />

## Class JRemoteException

All Implemented Interfaces:Serializable  
Direct Known Subclasses:[JAuthenticationException](./../jauthenticationexception-(jremote-api) "class in com.jbase.jremote"), [JRecordLockedException](./../jrecordlockedexception-(jremote-api) "class in com.jbase.jremote"), [JRecordNotFoundException](./../jrecordnotfoundexception-(jremote-api) "class in com.jbase.jremote"), [JSubroutineNotFoundException](./../jsubroutinenotfoundexception-(jremote-api) "class in com.jbase.jremote")

* * *

```java
public class JRemoteException
extends Exception
```

A generic exception thrown when an unexpected error occurs whilst communicating with the remote jBASE instance.

### Constructor Summary

| Constructor and Description |
| --- |
| `JRemoteException()`  |
| `JRemoteException(ErrorResponse response)`  |
| `JRemoteException(String msg)`  |
| `JRemoteException(String msg, int error)`  |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getError()`  |

- Methods inherited from class java.lang.Throwable
  - `addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

### Constructor Detail

#### JRemoteException

```java
public JRemoteException()
```

#### JRemoteException

```java
public JRemoteException(String msg)
```

#### JRemoteException

```java
public JRemoteException(String msg,
                        int error)
```

#### JRemoteException

```java
public JRemoteException(ErrorResponse response)
```

### Method Detail

#### getError

```java
public int getError()
```

Back to [jRemote API](./../../README.md)

<PageFooter />
