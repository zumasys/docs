# JConnectionCallbackHandler

**Created At:** 9/13/2017 7:55:03 PM  
**Updated At:** 9/13/2017 7:55:47 PM  


## Interface JConnectionCallbackHandler

- ```
public interface JConnectionCallbackHandler
```
- - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
<caption>All Methods <a href="javascript%3Ashow(2);">Instance Methods</a> <a href="javascript%3Ashow(4);">Abstract Methods</a>&nbsp;</caption>| `boolean` | `initialise(Subject subject,           JConnection connection)` Initialise a connection for the supplied Subject.<br> |
| `boolean` | `reinitialise(Subject subject,             JConnection connection)` The Subject intends to use a connection that was previously  initialised for another Subject.<br> |
| `boolean` | `reuse(Subject subject,      JConnection connection)` The Subject is reusing the supplied connection.<br> |
- - ### Method Detail
 
        - #### initialise

```
boolean initialise(Subject subject,                    JConnection connection)
```

Initialise a connection for the supplied Subject.
    - - #### reuse

```
boolean reuse(Subject subject,               JConnection connection)
```

The Subject is reusing the supplied connection.
    - - #### reinitialise

```
boolean reinitialise(Subject subject,                      JConnection connection)
```

The Subject intends to use a connection that was previously  initialised for another Subject.

