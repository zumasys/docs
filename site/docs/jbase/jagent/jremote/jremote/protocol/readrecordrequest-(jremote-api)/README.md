# ReadRecordRequest (jremote API)

**Created At:** 9/25/2017 12:20:53 PM  
**Updated At:** 12/24/2018 6:17:22 PM  
**Original Doc:** [com_jbase_jremote_protocol_readrecordrequest](https://docs.jbase.com/39270-protocol/com_jbase_jremote_protocol_readrecordrequest)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ReadRecordRequest (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class ReadRecordRequest

All Implemented Interfaces:[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io")
* * *


```
public class ReadRecordRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static int`<br> | `MODE_READ` <br> |
| `static int`<br> | `MODE_READU` <br> |
| `static int`<br> | `MODE_READU_NONBLOCK` <br> |






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `ReadRecordRequest(int readMode, String fileName, String recordKey)` <br> |






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

#### MODE\_READ

```
public static final int MODE_READ
```
See Also:[Constant Field Values](299736-constant-values)
#### MODE\_READU

```
public static final int MODE_READU
```
See Also:[Constant Field Values](299736-constant-values)
#### MODE\_READU\_NONBLOCK

```
public static final int MODE_READU_NONBLOCK
```
See Also:[Constant Field Values](299736-constant-values)


### 


### Constructor Detail

#### ReadRecordRequest

```
public ReadRecordRequest(int readMode,
                         String fileName,
                         String recordKey)
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
