# JConnectionCallbackHandler (jremote API)

<PageHeader />

## Interface JConnectionCallbackHandler

* * *


```
public interface JConnectionCallbackHandler
```

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `boolean`<br> | `initialise(Subject subject, JConnection connection)`<br>Initialise a connection for the supplied Subject.<br> |
| `boolean`<br> | `reinitialise(Subject subject, JConnection connection)`<br>The Subject intends to use a connection that was previously initialised for another Subject.<br> |
| `boolean`<br> | `reuse(Subject subject, JConnection connection)`<br>The Subject is reusing the supplied connection.<br> |

### Method Detail



#### initialise

```
boolean initialise(Subject subject,
                   JConnection connection)
```

Initialise a connection for the supplied Subject.



#### reuse

```
boolean reuse(Subject subject,
              JConnection connection)
```

The Subject is reusing the supplied connection.



#### reinitialise

```
boolean reinitialise(Subject subject,
                     JConnection connection)
```

The Subject intends to use a connection that was previously initialised for another Subject.

Back to [jREMOTE API](com_jbase_jremote_package-summary)
