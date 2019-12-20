# AccountAuthenticationRequest.AccountUserCredentials (jremote   API)

**Created At:** 9/25/2017 12:10:53 PM  
**Updated At:** 2/15/2018 8:02:42 AM  
**Original Doc:** [com_jbase_jremote_protocol_AccountAuthenticationRequest.AccountUserCredentials](https://docs.jbase.com/39270-protocol/com_jbase_jremote_protocol_AccountAuthenticationRequest.AccountUserCredentials)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="AccountAuthenticationRequest.AccountUserCredentials (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39270-protocol/com_jbase_jremote_protocol_package-summary)
- Class
- [Use](/39271-class-use/com_jbase_jremote_protocol_class-use_AccountAuthenticationRequest.AccountUserCredentials)
- [Tree](/39270-protocol/com_jbase_jremote_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39270-protocol/com_jbase_jremote_protocol_accountauthenticationrequest "class in com.jbase.jremote.protocol")
- [Next Class](/39270-protocol/com_jbase_jremote_protocol_authenticationrequest "class in com.jbase.jremote.protocol")


- [Frames](../../../../index.html?com/jbase/jremote/protocol//39270-protocol/com_jbase_jremote_protocol_AccountAuthenticationRequest.AccountUserCredentials)
- [No Frames](/39270-protocol/com_jbase_jremote_protocol_AccountAuthenticationRequest.AccountUserCredentials)


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

com.jbase.jremote.protocol

## Class AccountAuthenticationRequest.AccountUserCredentials

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.protocol.AccountAuthenticationRequest.AccountUserCredentials


- All Implemented Interfaces:[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io")Enclosing class:[AccountAuthenticationRequest](/39270-protocol/com_jbase_jremote_protocol_accountauthenticationrequest "class in com.jbase.jremote.protocol")
* * *


```
public static class AccountAuthenticationRequest.AccountUserCredentials
extends Object
implements JBaseSerializable
```

- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.jremote.io.[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io")
`JBaseSerializable.TYPE`


    - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `String` | `_account`  |
| `String` | `_password`  |
| `String` | `_userName`  |


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `AccountUserCredentials(String userName,<br>                      String account,<br>                      String password)`<br>Constructors.<br> |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer,<br>           int version)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Field Detail

        - #### \_userName

```
public String _userName
```


        - #### \_account

```
public String _account
```


        - #### \_password

```
public String _password
```


    - ### Constructor Detail

        - #### AccountUserCredentials

```
public AccountUserCredentials(String userName,
                              String account,
                              String password)
```

Constructors.


    - ### Method Detail

        - #### getType

```
public int getType()
```
Specified by:`getType` in interface `JBaseSerializable`Returns:type id of the objects, used during the serialization


        - #### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Specified by:`readObject` in interface `JBaseSerializable`Throws:`IOException``ClassNotFoundException`


        - #### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseSerializable`Throws:`IOException`


        - #### getVersion

```
public int getVersion()
```
Specified by:`getVersion` in interface `JBaseSerializable`

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39270-protocol/com_jbase_jremote_protocol_package-summary)
- Class
- [Use](/39271-class-use/com_jbase_jremote_protocol_class-use_AccountAuthenticationRequest.AccountUserCredentials)
- [Tree](/39270-protocol/com_jbase_jremote_protocol_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](/39270-protocol/com_jbase_jremote_protocol_accountauthenticationrequest "class in com.jbase.jremote.protocol")
- [Next Class](/39270-protocol/com_jbase_jremote_protocol_authenticationrequest "class in com.jbase.jremote.protocol")


- [Frames](../../../../index.html?com/jbase/jremote/protocol//39270-protocol/com_jbase_jremote_protocol_AccountAuthenticationRequest.AccountUserCredentials)
- [No Frames](/39270-protocol/com_jbase_jremote_protocol_AccountAuthenticationRequest.AccountUserCredentials)


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
