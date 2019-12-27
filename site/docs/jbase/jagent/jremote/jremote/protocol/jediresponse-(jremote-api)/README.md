# JediResponse (jremote API)

**Created At:** 9/25/2017 12:19:24 PM  
**Updated At:** 4/4/2018 8:35:20 PM  
**Original Doc:** [com_jbase_jremote_protocol_jediresponse](https://docs.jbase.com/39270-protocol/com_jbase_jremote_protocol_jediresponse)  
**Original ID:** 278389  
**Internal:** No  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JediResponse (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class JediResponse

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")
* * *


```
public class JediResponse
extends JRemoteResponse
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JediResponse()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JDynArray`<br> | `getData(CharsetEncoder encoder, CharsetDecoder decoder)` <br> |
| `JSelectListProt`<br> | `getSelectList(CharsetEncoder encoder, CharsetDecoder decoder)` <br> |
| `int`<br> | `getStatus()` <br> |
| `int`<br> | `getType()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class com.jbase.jremote.protocol.JRemoteResponse
    - `getVersion`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### JediResponse

```
public JediResponse()
```



### 


### Method Detail

#### getStatus

```
public int getStatus()
```

#### getData

```
public JDynArray getData(CharsetEncoder encoder,
                         CharsetDecoder decoder)
```

#### getSelectList

```
public JSelectListProt getSelectList(CharsetEncoder encoder,
                                     CharsetDecoder decoder)
```

#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Throws:`IOException`
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Throws:`IOException``ClassNotFoundException`
#### getType

```
public int getType()
```
Returns:type id of the objects, used during the serializationSee Also:[`JBaseSerializable.getType()`](/39250-io/com_jbase_jremote_io_jbaseserializable#getType--)



Back to [jREMOTE API](com_jbase_jremote_package-summary)
