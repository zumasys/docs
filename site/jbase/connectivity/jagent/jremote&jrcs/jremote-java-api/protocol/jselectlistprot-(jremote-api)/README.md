# JSelectListProt (jremote API)

<PageHeader />

## Class JSelectListProt

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")

* * *

```java
public class JSelectListProt
extends Object
implements JBaseSerializable
```

A serializable list of jBASE file records.

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
  - `JBaseSerializable.TYPE`

### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| `protected CharsetDecoder` | `_decoder`  |
| `protected CharsetEncoder` | `_encoder`  |
| `protected boolean` | `hasRecords`  |
| `protected int` | `id`  |
| `protected List<String>` | `keys`  |
| `protected int` | `position`  |
| `protected List<JDynArray>` | `records`  |
| `protected HashSet<Integer>` | `updatedRecords`  |

### Constructor Summary

| Constructor and Description |
| --- |
| `JSelectListProt()`Constructs an empty list |
| `JSelectListProt(JDynArray keys)`Constructs a select list from specified dynamic array. |
| `JSelectListProt(JSelectListProt sl, boolean copyModifiedOnly)`Copy constructor |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `int` | `getId()`Returns the ID of this select list. |
| `String` | `getKey()`Obtains the current key. |
| `int` | `getNumModified()`Returns the number if modified records |
| `int` | `getPosition()`Returns the current position. |
| `JDynArray` | `getRecord()`Obtains the current record value. |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `goToPosition(int position)`Move to the specified position. |
| `boolean` | `hasNext()`Returns whether it is possible to move forward. |
| `boolean` | `hasPrevious()`Returns whether it is possible to move backwards. |
| `boolean` | `hasRecordData()`Indicates whether this select list contains record data. |
| `boolean` | `next()`Move to next item. |
| `boolean` | `previous()`Move to previous item. |
| `void` | `readObject(JBaseObjectReader reader, int version)`Serialize object |
| `void` | `setCharsetDecoder(CharsetDecoder decoder)`  |
| `void` | `setCharsetEncoder(CharsetEncoder encoder)`  |
| `void` | `setHasRecordData(boolean hasRecords)`Mark select list to contain record data. |
| `void` | `setRecord(JDynArray record)`Modifies the value of the current record |
| `int` | `size()`Returns the no. |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`Serialize object |

- Methods inherited from class java.lang.Object
  - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Field Detail

#### id

```java
protected int id
```

#### position

```java
protected int position
```

#### hasRecords

```java
protected boolean hasRecords
```

#### keys

```java
protected List<String> keys
```

#### records

```java
protected List<JDynArray> records
```

#### updatedRecords

```java
protected HashSet<Integer> updatedRecords
```

#### \_encoder

```java
protected CharsetEncoder _encoder
```

#### \_decoder

```java
protected CharsetDecoder _decoder
```

### Constructor Detail

#### JSelectListProt

```java
public JSelectListProt()
```

Constructs an empty list

#### JSelectListProt

```java
public JSelectListProt(JDynArray keys)
```

Constructs a select list from specified dynamic array.
Parameters:`keys` - Dynamic array containing keys separated by attribute markers.
#### JSelectListProt

```java
public JSelectListProt(JSelectListProt sl,
                       boolean copyModifiedOnly)
```

Copy constructor
Parameters:`sl` -`copyModifiedOnly` - if true, copies modified items only.

### Method Detail

#### setCharsetEncoder

```java
public void setCharsetEncoder(CharsetEncoder encoder)
```

#### setCharsetDecoder

```java
public void setCharsetDecoder(CharsetDecoder decoder)
```

#### getId

```java
public int getId()
```

Returns the ID of this select list.
Returns:

#### size

```java
public int size()
```

Returns the no. of items inside this select list.
Returns:

#### hasRecordData

```java
public boolean hasRecordData()
```

Indicates whether this select list contains record data.
Returns:

#### setHasRecordData

```java
public void setHasRecordData(boolean hasRecords)
```

Mark select list to contain record data.
Parameters:`hasRecords` -

#### getKey

```java
public String getKey()
```

Obtains the current key.
Returns:key

#### getRecord

```java
public JDynArray getRecord()
```

Obtains the current record value.
Returns:record value

#### setRecord

```java
public void setRecord(JDynArray record)
```

Modifies the value of the current record
Parameters:`record` -

#### getNumModified

```java
public int getNumModified()
```

Returns the number if modified records
Returns:

#### next

```java
public boolean next()
             throws JRemoteException
```

Move to next item.
Returns:true if OK, false otherwise  
Throws:`JRemoteException`

#### previous

```java
public boolean previous()
                 throws JRemoteException
```

Move to previous item.
Returns:true if OK, false otherwise  
Throws:`JRemoteException`

#### hasNext

```java
public boolean hasNext()
                throws JRemoteException
```

Returns whether it is possible to move forward.
Returns:true if YES, false otherwise  
Throws:`JRemoteException`

#### hasPrevious

```java
public boolean hasPrevious()
                    throws JRemoteException
```

Returns whether it is possible to move backwards.
Returns:true if YES, false otherwise  
Throws:`JRemoteException`

#### getPosition

```java
public int getPosition()
```

Returns the current position. The first item in the list has position 1.
Returns:

#### goToPosition

```java
public void goToPosition(int position)
```

Move to the specified position. The first item in the list has position 1.
Parameters:`position` -

#### writeObject

```java
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```

Serialize object
Specified by:`writeObject` in interface `JBaseSerializable`  
Throws:`IOException`

#### readObject

```java
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```

Serialize object
Specified by:`readObject` in interface `JBaseSerializable`  
Throws:`IOException``ClassNotFoundException`

#### getType

```java
public int getType()
```

Specified by:`getType` in interface `JBaseSerializable`  
Returns:type id of the objects, used during the serialization

#### getVersion

```java
public int getVersion()
```

Specified by:`getVersion` in interface `JBaseSerializable`

Back to [jRemote API](./../../README.md)

<PageFooter />
