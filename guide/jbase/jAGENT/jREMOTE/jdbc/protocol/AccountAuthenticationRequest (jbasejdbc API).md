# AccountAuthenticationRequest (jbasejdbc API)

**Created At:** 9/25/2017 10:56:41 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="AccountAuthenticationRequest (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript>&amp;amp;lt;div&amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;lt;/div&amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

# Class AccountAuthenticationRequest
<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></dd></dl>
```
public class AccountAuthenticationRequest
extends Object
implements JBaseSerializable
```

Request for authentication. Copied from jRemote version
<dl><dt><br></dt><p><br></p></dl>
<!--   -->

# Nested Class Summary


| <br>Modifier and Type<br> | <br>Class and Description<br> |
| --- | --- |
| <br>static class<br> | <br>AccountAuthenticationRequest.AccountUserCredentials<br> |


<!--   -->

### 


## Nested classes/interfaces inherited from interface com.jbase.jdbc.io.JBaseSerializable
`JBaseSerializable.TYPE`




<!--   -->

### 


# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>AccountAuthenticationRequest([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") user, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") account, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") password)<br> |




<!--   -->

# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>int<br> | <br>getType()<br> |
| <br>int<br> | <br>getVersion()<br> |
| <br>void<br> | <br>readObject([JBaseObjectReader](/39232-io/com_jbase_jdbc_io_jbaseobjectreader "interface in com.jbase.jdbc.io") reader, int version)<br> |
| <br>void<br> | <br>writeObject([JBaseObjectWriter](/39232-io/com_jbase_jdbc_io_jbaseobjectwriter "interface in com.jbase.jdbc.io") writer, int version)<br> |


<!--   -->

### 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

# Constructor Detail
<!--   -->
#### **AccountAuthenticationRequest**

```
public AccountAuthenticationRequest(String user,String account, String password)
```



# Method Detail

#### **WRITEOBJECT**

```
public void writeObject(JBaseObjectWriter writer, int version)
                 throws IOException
```
<dl><dt style="margin-left: 40px;"><br><strong>Specified by:</strong></dt><dd style="margin-left: 40px;"><code>writeObject</code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd><dt style="margin-left: 40px;"><br><strong>Throws:</strong></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>


#### **READOBJECT**

```
public void readObject(JBaseObjectReader reader, int version)
                throws IOException, ClassNotFoundException
```
<dl><dt style="margin-left: 40px;"><br><strong>Specified by:</strong></dt><dd style="margin-left: 40px;"><code>readObject</code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd><dt style="margin-left: 40px;"><br><strong>Throws:</strong></dt><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd style="margin-left: 40px;"><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>
#### 


#### 


#### GETTYPE

```
public int getType()
```
<dl><dt style="margin-left: 40px;"><strong><br></strong><strong>Specified by:</strong></dt><dd style="margin-left: 40px;"><code>getType</code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd><dt style="margin-left: 40px;"><br><strong>Returns:</strong></dt><dd style="margin-left: 40px;">type id of the objects, used during the serialization</dd></dl>
#### 




#### **GETVERSION**

```
public int getVersion()
```
<dl><dt style="margin-left: 40px;"><br><strong>Specified by:</strong></dt><dd style="margin-left: 40px;"><code>getVersion</code> in interface <code><a href="/39232-io/com_jbase_jdbc_io_jbaseserializable" title="interface in com.jbase.jdbc.io">JBaseSerializable</a></code></dd></dl>
