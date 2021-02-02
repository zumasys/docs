# ConvRequest (jremote API)

<PageHeader />

## Class ConvRequest

All Implemented Interfaces:[JBaseSerializable](./../../io/jbaseserializable-(jremote-api) "interface in com.jbase.jremote.io")
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
See Also:[Constant Field Values](./../../constant-field-values)
#### OCONV

```
public static final int OCONV
```
See Also:[Constant Field Values](./../../constant-field-values)




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



Back to [jRemote API](../../../../jremote-api/README.md)

  
<PageFooter />
