# WriteRecordRequest (jremote API)

**Created At:** 9/25/2017 12:22:49 PM  
**Updated At:** 12/24/2018 6:13:07 PM  
**Original Doc:** [com_jbase_jremote_protocol_writerecordrequest](https://docs.jbase.com/39270-protocol/com_jbase_jremote_protocol_writerecordrequest)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="WriteRecordRequest (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;


## Class WriteRecordRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")
* * *


```
public class WriteRecordRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static int`<br> | `MODE_WRITE` <br> |
| `static int`<br> | `MODE_WRITEU` <br> |
| `static int`<br> | `MODE_WRITEU_NONBLOCK` <br> |






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `WriteRecordRequest(int writeMode, String fileName, String recordKey, JDynArray data)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getType()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
    - `getVersion`
- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### MODE\_WRITE

```
public static final int MODE_WRITE
```
See Also:[Constant Field Values](./../../constant-field-values)
#### MODE\_WRITEU

```
public static final int MODE_WRITEU
```
See Also:[Constant Field Values](./../../constant-field-values)
#### MODE\_WRITEU\_NONBLOCK

```
public static final int MODE_WRITEU_NONBLOCK
```
See Also:[Constant Field Values](./../../constant-field-values)


### 


### Constructor Detail

#### WriteRecordRequest

```
public WriteRecordRequest(int writeMode,
                          String fileName,
                          String recordKey,
                          JDynArray data)
```



### 


### Method Detail

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
Returns:type id of the objects, used during the serializationSee Also:[`JBaseSerializable.getType()`](/39250-io/com_jbase_jremote_io_jbaseserializable#getType--)

Back to [jREMOTE API](com_jbase_jremote_package-summary)


