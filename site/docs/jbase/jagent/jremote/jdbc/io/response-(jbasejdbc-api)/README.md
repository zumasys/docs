# Response (jbasejdbc API)

**Created At:** 9/25/2017 10:54:24 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_io_response](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_response)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Response (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->&amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;lt;a name="navbar.top"&amp;amp;amp;amp;gt;&amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;gt;
# Class Response


All Implemented Interfaces:[JBaseSerializable](./../jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")

Direct Known Subclasses:[ErrorResponse](../../../../com/jbase/jdbc/io/Error/39232-io/com_jbase_jdbc_io_Response "class in com.jbase.jdbc.io"), [InputOutputResponse](../../../../com/jbase/jdbc/protocol/InputOutput/39232-io/com_jbase_jdbc_io_Response "class in com.jbase.jdbc.protocol"), [OKResponse](../../../../com/jbase/jdbc/io/OK/39232-io/com_jbase_jdbc_io_Response "class in com.jbase.jdbc.io"), [SQLResponse](../../../../com/jbase/jdbc/protocol/SQL/39232-io/com_jbase_jdbc_io_Response "class in com.jbase.jdbc.protocol")
```
public abstract class Response
extends Object
implements JBaseSerializable
```

Represents a response from jsqld.



# 

# 


# Nested Class Summary



## Nested classes/interfaces inherited from interface com.jbase.jdbc.io.JBaseSerializable
`JBaseSerializable.TYPE`

# 

# 


# Constructor Summary

| <br>Constructor and Description<br> |
| --- |
| <br>Response()<br> |




# 


# Method Summary



## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`







## Methods inherited from interface com.jbase.jdbc.io.JBaseSerializable
`getType, getVersion, readObject, writeObject`

# 


# Constructor Detail

#### **Response**

```
public Response()
```




