# JConnectionCallbackHandler (jremote API)

<PageHeader />

## Interface JConnectionCallbackHandler

* * *

```java
public interface JConnectionCallbackHandler
```

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | `initialise(Subject subject, JConnection connection)`<br>Initialise a connection for the supplied Subject. |
| `boolean` | `reinitialise(Subject subject, JConnection connection)`<br>The Subject intends to use a connection that was previously initialised for another Subject. |
| `boolean` | `reuse(Subject subject, JConnection connection)`<br>The Subject is reusing the supplied connection. |

### Method Detail

#### initialise

```java
boolean initialise(Subject subject,
                   JConnection connection)
```

Initialise a connection for the supplied Subject.

#### reuse

```java
boolean reuse(Subject subject,
              JConnection connection)
```

The Subject is reusing the supplied connection.

#### reinitialise

```java
boolean reinitialise(Subject subject,
                     JConnection connection)
```

The Subject intends to use a connection that was previously initialised for another Subject.

Back to [jRemote API](./../../README.md)

<PageFooter />
