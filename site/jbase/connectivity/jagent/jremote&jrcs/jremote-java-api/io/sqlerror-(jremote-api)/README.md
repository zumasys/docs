# SQLError (jremote API)

<PageHeader />

## Class SQLError

All Implemented Interfaces:[JBaseSerializable](./../jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")
* * *


```
public class SQLError
extends Object
implements JBaseSerializable
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Constructor and Description<br> |
| --- |
| `SQLError()` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `String`<br> | `getMessage()` <br> |
| `String`<br> | `getSQLClass()` <br> |
| `String`<br> | `getSQLSubClass()` <br> |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)`<br>Method : readObject() Description: Read object off the wire.<br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### SQLError

```
public SQLError()
```



### Method Detail

#### getMessage

```
public String getMessage()
```

#### getSQLClass

```
public String getSQLClass()
```

#### getSQLSubClass

```
public String getSQLSubClass()
```

#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseSerializable`Throws:`IOException`
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```

Method : readObject() Description: Read object off the wire. Note: One day we must convert this to pass C++ strings for its member fields. However, for now, jcf does not support this so pass CVars.
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

Back to [jRemote API](../../../../jremote-api/README.md)

  
<PageFooter />
