# JSelectListProt (jremote API)

**Created At:** 9/25/2017 12:19:50 PM  
**Updated At:** 4/4/2018 9:49:23 PM  
**Original Doc:** [com_jbase_jremote_protocol_jselectlistprot](https://docs.jbase.com/39270-protocol/com_jbase_jremote_protocol_jselectlistprot)  
**Original ID:** 278394  
**Internal:** No  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JSelectListProt (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10,"i13":10,"i14":10,"i15":10,"i16":10,"i17":10,"i18":10,"i19":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Class JSelectListProt

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")
* * *


```
public class JSelectListProt
extends Object
implements JBaseSerializable
```

A serializable list of jBASE file records.

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Field Summary


| Modifier and Type<br> | Field and Description<br> |
| --- | --- |
| `protected CharsetDecoder`<br> | `_decoder` <br> |
| `protected CharsetEncoder`<br> | `_encoder` <br> |
| `protected boolean`<br> | `hasRecords` <br> |
| `protected int`<br> | `id` <br> |
| `protected List<String>`<br> | `keys` <br> |
| `protected int`<br> | `position` <br> |
| `protected List<JDynArray>`<br> | `records` <br> |
| `protected HashSet<Integer>`<br> | `updatedRecords` <br> |






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JSelectListProt()`<br>Constructs an empty list<br> |
| `JSelectListProt(JDynArray keys)`<br>Constructs a select list from specified dynamic array.<br> |
| `JSelectListProt(JSelectListProt sl, boolean copyModifiedOnly)`<br>Copy constructor<br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `int`<br> | `getId()`<br>Returns the ID of this select list.<br> |
| `String`<br> | `getKey()`<br>Obtains the current key.<br> |
| `int`<br> | `getNumModified()`<br>Returns the number if modified records<br> |
| `int`<br> | `getPosition()`<br>Returns the current position.<br> |
| `JDynArray`<br> | `getRecord()`<br>Obtains the current record value.<br> |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `goToPosition(int position)`<br>Move to the specified position.<br> |
| `boolean`<br> | `hasNext()`<br>Returns whether it is possible to move forward.<br> |
| `boolean`<br> | `hasPrevious()`<br>Returns whether it is possible to move backwards.<br> |
| `boolean`<br> | `hasRecordData()`<br>Indicates whether this select list contains record data.<br> |
| `boolean`<br> | `next()`<br>Move to next item.<br> |
| `boolean`<br> | `previous()`<br>Move to previous item.<br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)`<br>Serialize object<br> |
| `void`<br> | `setCharsetDecoder(CharsetDecoder decoder)` <br> |
| `void`<br> | `setCharsetEncoder(CharsetEncoder encoder)` <br> |
| `void`<br> | `setHasRecordData(boolean hasRecords)`<br>Mark select list to contain record data.<br> |
| `void`<br> | `setRecord(JDynArray record)`<br>Modifies the value of the current record<br> |
| `int`<br> | `size()`<br>Returns the no.<br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)`<br>Serialize object<br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### id

```
protected int id
```

#### position

```
protected int position
```

#### hasRecords

```
protected boolean hasRecords
```

#### keys

```
protected List<String> keys
```

#### records

```
protected List<JDynArray> records
```

#### updatedRecords

```
protected HashSet<Integer> updatedRecords
```

#### \_encoder

```
protected CharsetEncoder _encoder
```

#### \_decoder

```
protected CharsetDecoder _decoder
```



### 


### Constructor Detail

#### JSelectListProt

```
public JSelectListProt()
```

Constructs an empty list

#### JSelectListProt

```
public JSelectListProt(JDynArray keys)
```

Constructs a select list from specified dynamic array.
Parameters:`keys` - Dynamic array containing keys separated by attribute markers.
#### JSelectListProt

```
public JSelectListProt(JSelectListProt sl,
                       boolean copyModifiedOnly)
```

Copy constructor
Parameters:`sl` -`copyModifiedOnly` - if true, copies modified items only.


### Method Detail

#### setCharsetEncoder

```
public void setCharsetEncoder(CharsetEncoder encoder)
```

#### setCharsetDecoder

```
public void setCharsetDecoder(CharsetDecoder decoder)
```

#### getId

```
public int getId()
```

Returns the ID of this select list.
Returns:
#### size

```
public int size()
```

Returns the no. of items inside this select list.
Returns:
#### hasRecordData

```
public boolean hasRecordData()
```

Indicates whether this select list contains record data.
Returns:
#### setHasRecordData

```
public void setHasRecordData(boolean hasRecords)
```

Mark select list to contain record data.
Parameters:`hasRecords` -
#### getKey

```
public String getKey()
```

Obtains the current key.
Returns:key
#### getRecord

```
public JDynArray getRecord()
```

Obtains the current record value.
Returns:record value
#### setRecord

```
public void setRecord(JDynArray record)
```

Modifies the value of the current record
Parameters:`record` -
#### getNumModified

```
public int getNumModified()
```

Returns the number if modified records
Returns:
#### next

```
public boolean next()
             throws JRemoteException
```

Move to next item.
Returns:true if OK, false otherwiseThrows:`JRemoteException`
#### previous

```
public boolean previous()
                 throws JRemoteException
```

Move to previous item.
Returns:true if OK, false otherwiseThrows:`JRemoteException`
#### hasNext

```
public boolean hasNext()
                throws JRemoteException
```

Returns whether it is possible to move forward.
Returns:true if YES, false otherwiseThrows:`JRemoteException`
#### hasPrevious

```
public boolean hasPrevious()
                    throws JRemoteException
```

Returns whether it is possible to move backwards.
Returns:true if YES, false otherwiseThrows:`JRemoteException`
#### getPosition

```
public int getPosition()
```

Returns the current position. The first item in the list has position 1.
Returns:
#### goToPosition

```
public void goToPosition(int position)
```

Move to the specified position. The first item in the list has position 1.
Parameters:`position` -
#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```

Serialize object
Specified by:`writeObject` in interface `JBaseSerializable`Throws:`IOException`
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```

Serialize object
Specified by:`readObject` in interface `JBaseSerializable`Throws:`IOException``ClassNotFoundException`
#### getType

```
public int getType()
```
Specified by:`getType` in interface `JBaseSerializable`Returns:type id of the objects, used during the serialization
#### getVersion

```
public int getVersion()
```
Specified by:`getVersion` in interface `JBaseSerializable`

Back to [jREMOTE API](com_jbase_jremote_package-summary)
