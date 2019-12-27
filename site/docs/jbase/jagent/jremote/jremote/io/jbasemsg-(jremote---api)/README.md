# JbaseMsg (jremote   API)

**Created At:** 9/25/2017 11:51:26 AM  
**Updated At:** 2/15/2018 8:02:59 AM  
**Original Doc:** [com_jbase_jremote_io_JbaseMsg](https://docs.jbase.com/39250-io/com_jbase_jremote_io_JbaseMsg)  
**Original ID:** 278154  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JbaseMsg (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":6,"i2":6,"i3":10,"i4":6,"i5":6,"i6":6,"i7":6,"i8":6,"i9":6,"i10":6,"i11":6,"i12":6,"i13":6,"i14":6,"i15":6,"i16":6,"i17":6,"i18":6,"i19":6,"i20":6,"i21":10,"i22":6,"i23":6,"i24":6,"i25":6,"i26":6,"i27":6,"i28":6,"i29":6,"i30":6,"i31":6,"i32":6,"i33":6,"i34":6,"i35":6,"i36":6,"i37":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.io.jbasemsg-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](./../iojbaseobjectwriter-%28jremote-api%29 "class in com.jbase.jremote.io")
- [Next Class](./../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io")


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

## Class JbaseMsg

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jremote.io.JbaseMsg


- * * *


```
public abstract class JbaseMsg
extends Object
```

jBASE Socket message

This is the base message class for jBASE messages.  This class<br> has knowledge of the format of message required to communicate with<br> the jBASE socket server.



## Header + Buffer
<br> .-------------------------------+-------------------------------.<br> | Total Length                  | Magic number                  |<br> | (4 bytes signed int)          | (4 bytes unsigned int)        |<br> |-------------------------------+-------------------------------|<br> | Function                      | Error code                    |<br> | (4 bytes signed int)          | (4 bytes signed int)          |<br> |-------------------------------+-------------------------------|<br> | User 0                        | User 1                        |<br> | (4 bytes unsigned int)        | (4 bytes unsigned int)        |<br> |-------------------------------+-------------------------------|<br> | User 2                        | User 3                        |<br> | (4 bytes unsigned int)        | (4 bytes unsigned int)        |<br> |-------------------------------+-------------------------------|<br> | User 4                        | User 5                        |<br> | (4 bytes unsigned int)        | (4 bytes unsigned int)        |<br> |-------------------------------+-------------------------------|<br> | User 6                        | User 7                        |<br> | (4 bytes unsigned int)        | (4 bytes unsigned int)        |<br> |-------------------------------+-------------------------------|<br> | User 8                        | User 9                        |<br> | (4 bytes unsigned int)        | (4 bytes unsigned int)        |<br> |-------------------------------+-------------------------------|<br> | User 10                       | User 11                       |<br> | (4 bytes unsigned int)        | (4 bytes unsigned int)        |<br> |-------------------------------+-------------------------------|<br> | Buffer length                 | Data length                   |<br> | (4 bytes signed int)          | (4 bytes signed int)          |<br> |---------------------------------------------------------------|<br> | Buffer \* (see buffer length, to a maximum of 2000 bytes)      |<br> `---------------------------------------------------------------'<br>   


## Data
<br>   .-------------------------------+-------------------------------.<br>   | Data \* (see data length)                                      |<br>   `---------------------------------------------------------------'<br>
Author:aphethean

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `JbaseMsg()`  |
| `JbaseMsg(byte[] message)`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Abstract Methods](javascript:show%284%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | `construct(byte[] message)`  |
| `abstract byte[]` | `getBuffer()`  |
| `abstract byte[]` | `getData()`  |
| `int` | `getDataLength()`  |
| `abstract int` | `getError()`  |
| `abstract int` | `getFunction()`  |
| `abstract int` | `getMagic()`  |
| `abstract int` | `getUser0()`  |
| `abstract int` | `getUser1()`  |
| `abstract int` | `getUser10()`  |
| `abstract int` | `getUser11()`  |
| `abstract int` | `getUser2()`  |
| `abstract int` | `getUser3()`  |
| `abstract int` | `getUser4()`  |
| `abstract int` | `getUser5()`  |
| `abstract int` | `getUser6()`  |
| `abstract int` | `getUser7()`  |
| `abstract int` | `getUser8()`  |
| `abstract int` | `getUser9()`  |
| `abstract void` | `setBuffer(byte[] buffer)`  |
| `abstract void` | `setData(byte[] data)`  |
| `void` | `setDataLength(int length)`  |
| `abstract void` | `setError(int e)`  |
| `abstract void` | `setFunction(int f)`  |
| `abstract void` | `setMagic(int m)`  |
| `abstract void` | `setUser0(int u)`  |
| `abstract void` | `setUser1(int u)`  |
| `abstract void` | `setUser10(int u)`  |
| `abstract void` | `setUser11(int u)`  |
| `abstract void` | `setUser2(int u)`  |
| `abstract void` | `setUser3(int u)`  |
| `abstract void` | `setUser4(int u)`  |
| `abstract void` | `setUser5(int u)`  |
| `abstract void` | `setUser6(int u)`  |
| `abstract void` | `setUser7(int u)`  |
| `abstract void` | `setUser8(int u)`  |
| `abstract void` | `setUser9(int u)`  |
| `protected byte[]` | `toBytes()`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### JbaseMsg

```
public JbaseMsg()
```


        - #### JbaseMsg

```
public JbaseMsg(byte[] message)
```


    - ### Method Detail

        - #### getMagic

```
public abstract int getMagic()
```


        - #### getFunction

```
public abstract int getFunction()
```


        - #### getError

```
public abstract int getError()
```


        - #### getUser0

```
public abstract int getUser0()
```


        - #### getUser1

```
public abstract int getUser1()
```


        - #### getUser2

```
public abstract int getUser2()
```


        - #### getUser3

```
public abstract int getUser3()
```


        - #### getUser4

```
public abstract int getUser4()
```


        - #### getUser5

```
public abstract int getUser5()
```


        - #### getUser6

```
public abstract int getUser6()
```


        - #### getUser7

```
public abstract int getUser7()
```


        - #### getUser8

```
public abstract int getUser8()
```


        - #### getUser9

```
public abstract int getUser9()
```


        - #### getUser10

```
public abstract int getUser10()
```


        - #### getUser11

```
public abstract int getUser11()
```


        - #### getBuffer

```
public abstract byte[] getBuffer()
```


        - #### getData

```
public abstract byte[] getData()
```


        - #### setMagic

```
public abstract void setMagic(int m)
```


        - #### setFunction

```
public abstract void setFunction(int f)
```


        - #### setError

```
public abstract void setError(int e)
```


        - #### setUser0

```
public abstract void setUser0(int u)
```


        - #### setUser1

```
public abstract void setUser1(int u)
```


        - #### setUser2

```
public abstract void setUser2(int u)
```


        - #### setUser3

```
public abstract void setUser3(int u)
```


        - #### setUser4

```
public abstract void setUser4(int u)
```


        - #### setUser5

```
public abstract void setUser5(int u)
```


        - #### setUser6

```
public abstract void setUser6(int u)
```


        - #### setUser7

```
public abstract void setUser7(int u)
```


        - #### setUser8

```
public abstract void setUser8(int u)
```


        - #### setUser9

```
public abstract void setUser9(int u)
```


        - #### setUser10

```
public abstract void setUser10(int u)
```


        - #### setUser11

```
public abstract void setUser11(int u)
```


        - #### setBuffer

```
public abstract void setBuffer(byte[] buffer)
```


        - #### setData

```
public abstract void setData(byte[] data)
```


        - #### setDataLength

```
public void setDataLength(int length)
```


        - #### getDataLength

```
public int getDataLength()
```


        - #### toBytes

```
protected byte[] toBytes()
```


        - #### construct

```
protected void construct(byte[] message)
```

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jremote.io-%28jremote---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jremote.io.jbasemsg-%28jremote---api%29)
- [Tree](./../com.jbase.jremote.io-class-hierarchy-%28jremote---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jremote <br>

- [Prev Class](./../iojbaseobjectwriter-%28jremote-api%29 "class in com.jbase.jremote.io")
- [Next Class](./../jbaseobjectreader-%28jremote-api%29 "interface in com.jbase.jremote.io")


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
