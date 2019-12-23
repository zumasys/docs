# ReleaseRecordLockRequest (jremote API)

**Created At:** 9/25/2017 12:21:00 PM  
**Updated At:** 12/24/2018 6:15:02 PM  
**Original Doc:** [com_jbase_jremote_protocol_releaserecordlockrequest](https://docs.jbase.com/39270-protocol/com_jbase_jremote_protocol_releaserecordlockrequest)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ReleaseRecordLockRequest (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class ReleaseRecordLockRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")
* * *


```
public class ReleaseRecordLockRequest
extends JRemoteRequest
```

Request jBASE to release a record lock. If the record key is an empty string, then all record locks will be released.

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static int`<br> | `CHECK_LOCK` <br> |
| `static int`<br> | `RELEASE_LOCK` <br> |






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `ReleaseRecordLockRequest(String fileName, String recordKey, int lockRequest)` <br> |






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

#### CHECK\_LOCK

```
public static final int CHECK_LOCK
```
See Also:[Constant Field Values](./../../constant-field-values)
#### RELEASE\_LOCK

```
public static final int RELEASE_LOCK
```
See Also:[Constant Field Values](./../../constant-field-values)


### 


### Constructor Detail

#### ReleaseRecordLockRequest

```
public ReleaseRecordLockRequest(String fileName,
                                String recordKey,
                                int lockRequest)
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
