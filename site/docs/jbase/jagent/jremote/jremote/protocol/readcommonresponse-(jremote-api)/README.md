# ReadCommonResponse (jremote API)

**Created At:** 9/25/2017 12:20:47 PM  
**Updated At:** 4/5/2018 10:50:29 PM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ReadCommonResponse (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class ReadCommonResponse

All Implemented Interfaces:[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io")
* * *


```
public class ReadCommonResponse
extends JRemoteResponse
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `ReadCommonResponse()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getType()` <br> |
| `JDynArray`<br> | `getValue(CharsetEncoder encoder, CharsetDecoder decoder)` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class com.jbase.jremote.protocol.JRemoteResponse
    - `getVersion`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### ReadCommonResponse

```
public ReadCommonResponse()
```



### 


### Method Detail

#### getValue

```
public JDynArray getValue(CharsetEncoder encoder,
                          CharsetDecoder decoder)
```

#### getType

```
public int getType()
```
Returns:type id of the objects, used during the serialization
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Throws:`IOException``ClassNotFoundException`
#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Throws:`IOException`

Back to [jREMOTE API](com_jbase_jremote_package-summary)
