# AccountAuthenticationRequest (jbasejdbc API)

**Created At:** 9/25/2017 10:56:41 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_protocol_accountauthenticationrequest](https://docs.jbase.com/39240-protocol/com_jbase_jdbc_protocol_accountauthenticationrequest)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="AccountAuthenticationRequest (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&amp;lt;div&amp;gt;JavaScript is disabled on your browser.&amp;lt;/div&amp;gt;


# Class AccountAuthenticationRequest
All Implemented Interfaces:[JBaseSerializable](/39232-io/com_jbase_jdbc_io_jbaseserializable "interface in com.jbase.jdbc.io")
```
public class AccountAuthenticationRequest
extends Object
implements JBaseSerializable
```

Request for authentication. Copied from jRemote version




# Nested Class Summary


| <br>Modifier and Type<br> | <br>Class and Description<br> |
| --- | --- |
| <br>static class<br> | <br>AccountAuthenticationRequest.AccountUserCredentials<br> |




### 


## Nested classes/interfaces inherited from interface com.jbase.jdbc.io.JBaseSerializable
`JBaseSerializable.TYPE`






### 


# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>AccountAuthenticationRequest([String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") user, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") account, [String](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/String.html?is-external=true "class or interface in java.lang") password)<br> |






# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>int<br> | <br>getType()<br> |
| <br>int<br> | <br>getVersion()<br> |
| <br>void<br> | <br>readObject([JBaseObjectReader](/39232-io/com_jbase_jdbc_io_jbaseobjectreader "interface in com.jbase.jdbc.io") reader, int version)<br> |
| <br>void<br> | <br>writeObject([JBaseObjectWriter](/39232-io/com_jbase_jdbc_io_jbaseobjectwriter "interface in com.jbase.jdbc.io") writer, int version)<br> |




### 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# Constructor Detail

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

**Specified by:**`writeObject` in interface `JBaseSerializable`
**Throws:**`IOException`


#### **READOBJECT**

```
public void readObject(JBaseObjectReader reader, int version)
                throws IOException, ClassNotFoundException
```

**Specified by:**`readObject` in interface `JBaseSerializable`
**Throws:**`IOException``ClassNotFoundException`
#### 


#### 


#### GETTYPE

```
public int getType()
```

**Specified by:**`getType` in interface `JBaseSerializable`
**Returns:**type id of the objects, used during the serialization
#### 




#### **GETVERSION**

```
public int getVersion()
```

**Specified by:**`getVersion` in interface `JBaseSerializable`
