# JbaseSocketConnection (jremote   API)

**Created At:** 9/25/2017 11:51:59 AM  
**Updated At:** 2/15/2018 8:02:13 AM  
**Original Doc:** [com_jbase_jremote_io_JbaseSocketConnection](https://docs.jbase.com/39250-io/com_jbase_jremote_io_JbaseSocketConnection)  
**Original ID:** 278159  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JbaseSocketConnection (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.io.jbasesocketconnection-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](./../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")
- [Next Class](./../jconnectionimpl-%28jremote-api%29 "class in com.jbase.jremote.io")


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

com.jbase.jremote.io

## Class JbaseSocketConnection

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.io.JbaseSocketConnection


- * * *


```
public class JbaseSocketConnection
extends Object
```

This class handles the connection and communication to<br> a jBASE server over a socket interface using the JbaseMsg<br> protocol.  see also JbaseMsg.
Author:aphethean

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `JbaseSocketConnection(String host,<br>                     int port)`<br>Construct and connect to a jBASE host.<br> |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()`  |
| `protected void` | `connect(String host,<br>       int port)`  |
| `SocketAddress` | `getRemoteSocketAddress()`  |
| `void` | `read(JbaseMsg msg)`  |
| `void` | `write(JbaseMsg msg)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### JbaseSocketConnection

```
public JbaseSocketConnection(String host,
                             int port)
                      throws IOException
```

Construct and connect to a jBASE host.
Parameters:`host` - `port` - Throws:`IOException`


    - ### Method Detail

        - #### connect

```
protected void connect(String host,
                       int port)
                throws UnknownHostException,
                       IOException
```
Throws:`UnknownHostException``IOException`


        - #### write

```
public void write(JbaseMsg msg)
           throws IOException
```
Throws:`IOException`


        - #### close

```
public void close()
           throws IOException
```
Throws:`IOException`


        - #### read

```
public void read(JbaseMsg msg)
          throws IOException
```
Throws:`IOException`


        - #### getRemoteSocketAddress

```
public SocketAddress getRemoteSocketAddress()
```

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.io.jbasesocketconnection-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](./../jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")
- [Next Class](./../jconnectionimpl-%28jremote-api%29 "class in com.jbase.jremote.io")


- [Frames](./.)
- [No Frames](./.)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
