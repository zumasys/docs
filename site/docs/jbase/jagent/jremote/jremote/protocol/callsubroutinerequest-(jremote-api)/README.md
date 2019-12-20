# CallSubroutineRequest (jremote API)

**Created At:** 9/25/2017 12:11:25 PM  
**Updated At:** 4/4/2018 6:53:03 PM  
**Original Doc:** [com_jbase_jremote_protocol_callsubroutinerequest](https://docs.jbase.com/39270-protocol/com_jbase_jremote_protocol_callsubroutinerequest)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="CallSubroutineRequest (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;


## Class CallSubroutineRequest

All Implemented Interfaces:[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io")
* * *


```
public class CallSubroutineRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `CallSubroutineRequest(String subroutineName, JSubroutineParameters parameters)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JSubroutineParameters`<br> | `getParameters()` <br> |
| `String`<br> | `getSubroutineName()` <br> |
| `int`<br> | `getType()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `setParameters(JSubroutineParameters params)` <br> |
| `void`<br> | `setSubroutineName(String name)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
    - `getVersion`


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### CallSubroutineRequest

```
public CallSubroutineRequest(String subroutineName,
                             JSubroutineParameters parameters)
```







### Method Detail

#### getParameters

```
public JSubroutineParameters getParameters()
```

#### setParameters

```
public void setParameters(JSubroutineParameters params)
```

#### getSubroutineName

```
public String getSubroutineName()
```

#### setSubroutineName

```
public void setSubroutineName(String name)
```

#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseSerializable`Overrides:`writeObject` in class `JRemoteRequest`Throws:`IOException`
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Specified by:`readObject` in interface `JBaseSerializable`Overrides:`readObject` in class `JRemoteRequest`Throws:`IOException``ClassNotFoundException`
#### getType

```
public int getType()
```
Returns:type id of the objects, used during the serialization

Back to [jREMOTE API](com_jbase_jremote_package-summary)
