# JbaseSocketConnection (jbasejdbc API)

**Created At:** 9/25/2017 10:53:13 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_io_jbasesocketconnection](https://docs.jbase.com/39232-io/com_jbase_jdbc_io_jbasesocketconnection)  
**Original ID:** 277903  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JbaseSocketConnection (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
# 

# Class JbaseSocketConnection

```
public class JbaseSocketConnection
extends Object
```

This class handles the connection and communication to a jBASE server over a socket interface using the JbaseMsg protocol. see also JbaseMsg.




# 

# Constructor Summary


| <br>Constructor<br> | <br>Description<br> |
| --- | --- |
| <br>`JbaseSocketConnection(String host, int port)`<br> | <br>Construct and connect to a jBASE host.<br> |








# 


# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>`void`<br> | <br>`close()`<br> |
| <br>`protected void`<br> | <br>`connect(String host, int port)`<br> |
| <br>`SocketAddress`<br> | <br>`getRemoteSocketAddress()`<br> |
| <br>`void`<br> | <br>`read(JbaseMsg msg)`<br> |
| <br>`void`<br> | <br>`write(JbaseMsg msg)`<br> |


### 




## 

## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# 

# 


# Constructor Detail



#### **JbaseSocketConnection**

```
public JbaseSocketConnection(String host, int port)
                      throws IOException
```

Construct and connect to a jBASE host.
**Parameters:**`host` -`port` -
**Throws:**`IOException`












# 

# Method Detail



#### **connect**

```
protected void connect(String host, int port)
                throws UnknownHostException, IOException
```

**Throws:**`UnknownHostException``IOException`






#### 


#### 


#### **write**

```
public void write(JbaseMsg msg)
           throws IOException
```

**Throws:**`IOException`




#### 


#### 


#### **close**

```
public void close()
           throws IOException
```

**Throws:**`IOException`




#### 


#### 


#### **read**

```
public void read(JbaseMsg msg)
          throws IOException
```

**Throws:**`IOException`




#### 


#### 


#### **getRemoteSocketAddress**

```
public SocketAddress getRemoteSocketAddress()
```


