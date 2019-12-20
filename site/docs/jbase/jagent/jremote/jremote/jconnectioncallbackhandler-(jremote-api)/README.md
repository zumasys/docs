# JConnectionCallbackHandler (jremote API)

**Created At:** 9/25/2017 12:09:02 PM  
**Updated At:** 12/24/2018 7:41:27 PM  
**Original Doc:** [com_jbase_jremote_jconnectioncallbackhandler](https://docs.jbase.com/39248-jremote/com_jbase_jremote_jconnectioncallbackhandler)  


JavaScript is disabled on your browser.



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
