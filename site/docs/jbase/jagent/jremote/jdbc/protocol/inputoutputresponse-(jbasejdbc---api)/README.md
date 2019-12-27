# InputOutputResponse (jbasejdbc   API)

**Created At:** 9/25/2017 11:02:15 AM  
**Updated At:** 2/15/2018 8:02:53 AM  
**Original Doc:** [com_jbase_jdbc_protocol_InputOutputResponse](https://docs.jbase.com/39240-protocol/com_jbase_jdbc_protocol_InputOutputResponse)  
**Original ID:** 277982  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="InputOutputResponse (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jdbc.protocol.inputoutputresponse-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.protocol-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](./../fetchrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
- [Next Class](./../loadsubroutinerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")


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

com.jbase.jdbc.protocol

## Class InputOutputResponse

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jdbc.io.Response](./../../io/response-%28jbasejdbc-api%29 "class in com.jbase.jdbc.io")
    - - com.jbase.jdbc.protocol.InputOutputResponse


- All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
* * *


```
public class InputOutputResponse
extends Response
```

Objects of this class can be sent from jsqld to the client<br> if a terminal output has been produced by a subroutine (CRT, PRINT)<br> or jBASE runtime.<br><br> An INPUT statement executed from a subroutine or jBASE debugger's waiting<br> for user's command will also cause the jsqld to send an object<br> of this class with attribute command == INPUTCMD.<br><br> XXX: Dev. note: consider refactoring/splitting of this class into one responsible<br> for transfering terminal output from the server and one with a server's request<br> for input.
Author:Peter Kuchta

- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.jdbc.io.[JBaseSerializable](./../../io/jbaseserializable-%28jbasejdbc-api%29 "interface in com.jbase.jdbc.io")
`JBaseSerializable.TYPE`


    - ### Field Summary


Fields | Modifier and Type | Field and Description |
| --- | --- |
| `static int` | `INPUTCMD`<br>Constant indicating that the server is waiting for input.<br> |
| `static int` | `OUTPUTCMD`<br>Constant indicating that the object contains a terminal output produced on server.<br> |


    - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `InputOutputResponse()`  |


    - ### Method Summary


All Methods [Instance Methods](javascript:show%282%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getCommand()`  |
| `IByteObject` | `getOutput()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader,<br>          int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer,<br>           int version)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Field Detail

        - #### OUTPUTCMD

```
public static final int OUTPUTCMD
```

Constant indicating that the object contains a terminal output produced on server.
See Also:[Constant Field Values](../../../../constant-values.html#com.jbase.jdbc.protocol.InputOutputResponse.OUTPUTCMD)


        - #### INPUTCMD

```
public static final int INPUTCMD
```

Constant indicating that the server is waiting for input.
See Also:[Constant Field Values](../../../../constant-values.html#com.jbase.jdbc.protocol.InputOutputResponse.INPUTCMD)


    - ### Constructor Detail

        - #### InputOutputResponse

```
public InputOutputResponse()
```


    - ### Method Detail

        - #### getCommand

```
public int getCommand()
```


        - #### getOutput

```
public IByteObject getOutput()
```


        - #### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Throws:`IOException`


        - #### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Throws:`IOException``ClassNotFoundException`


        - #### getType

```
public int getType()
```
Returns:type id of the objects, used during the serializationSee Also:[`JBaseSerializable.getType()`](./../../io/jbaseserializable-%28jbasejdbc-api%29#getType--)


        - #### getVersion

```
public int getVersion()
```

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](./../com.jbase.jdbc.protocol-%28jbasejdbc---api%29)
- Class
- [Use](./../class-use/uses-of-class-com.jbase.jdbc.protocol.inputoutputresponse-%28jbasejdbc---api%29)
- [Tree](./../com.jbase.jdbc.protocol-class-hierarchy-%28jbasejdbc---api%29)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- [Prev Class](./../fetchrequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")
- [Next Class](./../loadsubroutinerequest-%28jbasejdbc---api%29 "class in com.jbase.jdbc.protocol")


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
