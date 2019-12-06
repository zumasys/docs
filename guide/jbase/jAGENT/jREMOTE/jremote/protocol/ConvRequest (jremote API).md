# ConvRequest (jremote API)

**Created At:** 9/25/2017 12:18:15 PM  
**Updated At:** 12/24/2018 6:12:03 PM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ConvRequest (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class ConvRequest

All Implemented Interfaces:[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io")
* * *


```
public class ConvRequest
extends JRemoteRequest
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `static int`<br> | `ICONV` <br> |
| `static int`<br> | `OCONV` <br> |






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `ConvRequest()` <br> |
| `ConvRequest(int type, String data, String conversion)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `String`<br> | `getConversion()` <br> |
| `String`<br> | `getData()` <br> |
| `int`<br> | `getType()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class com.jbase.jremote.protocol.JRemoteRequest
    - `getVersion`


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### ICONV

```
public static final int ICONV
```
See Also:[Constant Field Values](299736-constant-values)
#### OCONV

```
public static final int OCONV
```
See Also:[Constant Field Values](299736-constant-values)




### Constructor Detail

#### ConvRequest

```
public ConvRequest()
```

#### ConvRequest

```
public ConvRequest(int type,
                   String data,
                   String conversion)
```





### Method Detail



#### getType

```
public int getType()
```
Returns:type id of the objects, used during the serialization
#### getData

```
public String getData()
```

#### getConversion

```
public String getConversion()
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



Back to [jREMOTE API](com_jbase_jremote_package-summary)
