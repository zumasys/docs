# Response (jremote API)

**Created At:** 9/25/2017 11:54:09 AM  
**Updated At:** 4/4/2018 11:27:50 PM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Response (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;


## Class Response

All Implemented Interfaces:[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io")Direct Known Subclasses:[EchoResponse](../../../../com/jbase/jremote/protocol/Echo/39250-io/com_jbase_jremote_io_Response "class in com.jbase.jremote.protocol"), [ErrorResponse](../../../../com/jbase/jremote/io/Error/39250-io/com_jbase_jremote_io_Response "class in com.jbase.jremote.io"), [JRemoteResponse](../../../../com/jbase/jremote/protocol/JRemote/39250-io/com_jbase_jremote_io_Response "class in com.jbase.jremote.protocol"), [OKResponse](../../../../com/jbase/jremote/io/OK/39250-io/com_jbase_jremote_io_Response "class in com.jbase.jremote.io")
* * *


```
public abstract class Response
extends Object
implements JBaseSerializable
```

Represents a response from jsqld.

See Also:[`ErrorResponse`](../../../../com/jbase/jremote/io/Error/39250-io/com_jbase_jremote_io_Response "class in com.jbase.jremote.io")

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `Response()` <br> |






### Method Summary

- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- Methods inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `getType, getVersion, readObject, writeObject`

### Constructor Detail



#### Response

```
public Response()
```

Back to [jREMOTE API](com_jbase_jremote_package-summary)
