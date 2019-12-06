# JbaseSocketConnection (jbasejdbc API)

**Created At:** 9/25/2017 10:53:13 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JbaseSocketConnection (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script>
# 

# Class JbaseSocketConnection

```
public class JbaseSocketConnection
extends Object
```

This class handles the connection and communication to a jBASE server over a socket interface using the JbaseMsg protocol. see also JbaseMsg.
<dl><dt><br></dt></dl>


<!-- ======== CONSTRUCTOR SUMMARY ======== -->



# <!--   -->

# Constructor Summary


| <br>Constructor<br> | <br>Description<br> |
| --- | --- |
| <br>`JbaseSocketConnection(String host, int port)`<br> | <br>Construct and connect to a jBASE host.<br> |





<!-- ========== METHOD SUMMARY =========== -->
<!--   -->

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




## <!--   -->

## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!-- ========= CONSTRUCTOR DETAIL ======== -->



# <!--   -->

# 


# Constructor Detail
<!--   -->


#### **JbaseSocketConnection**

```
public JbaseSocketConnection(String host, int port)
                      throws IOException
```

Construct and connect to a jBASE host.
<dl><dt style="margin-left: 40px;"><span class="paramLabel"><strong>Parameters:</strong></span></dt><dd style="margin-left: 60px;"><code>host</code> -</dd><dd style="margin-left: 60px;"><code>port</code> -</dd><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><p><br></p><p><br></p></dl>





<!-- ============ METHOD DETAIL ========== -->


# <!--   -->

# Method Detail
<!--   -->


#### **connect**

```
protected void connect(String host, int port)
                throws UnknownHostException, IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/net/UnknownHostException.html?is-external=true" title="class or interface in java.net">UnknownHostException</a></code></dd><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>



<!--   -->


#### 


#### 


#### **write**

```
public void write(JbaseMsg msg)
           throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### 


#### 


#### **close**

```
public void close()
           throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### 


#### 


#### **read**

```
public void read(JbaseMsg msg)
          throws IOException
```
<dl><dt style="margin-left: 40px;"><br><span class="throwsLabel"><strong>Throws:</strong></span></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>

<!--   -->


#### 


#### 


#### **getRemoteSocketAddress**

```
public SocketAddress getRemoteSocketAddress()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
