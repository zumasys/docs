# Uses of Interface com.jbase.jremote.io.IByteObject (jremote API)

<PageHeader />

## Uses of Interface

com.jbase.jremote.io.IByteObject

| Package | Description |
| --- | --- |
 Packages that use [IByteObject](./../../ibyteobject-(jremote-api) "interface in com.jbase.jremote.io")  | com.jbase.jremote |   |
| com.jbase.jremote.io |   |

### Uses of [IByteObject](./../../ibyteobject-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote](./../../../../../jremote-api)

| Modifier and Type | Class and Description |
| --- | --- |
 Classes in [com.jbase.jremote](./../../../../../jremote-api) that implement [IByteObject](./../../ibyteobject-(jremote-api) "interface in com.jbase.jremote.io")  |  
|`class` | `JDynArray`<br>The JDynArray is a jBASE type that implements a dynamic string array where attribute, value, and subvalue delimiters mark the array indices. |

### Uses of [IByteObject](./../../ibyteobject-(jremote-api) "interface in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api))

| Modifier and Type | Class and Description |
| --- | --- |
 Classes in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api)) that implement [IByteObject](./../../ibyteobject-(jremote-api) "interface in com.jbase.jremote.io")  |
|`class` | `ByteObject`  |

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api)) that return [IByteObject](./../../ibyteobject-(jremote-api) "interface in com.jbase.jremote.io")  | `protected IByteObject`<br> | AbstractJBaseObjectReader.`readByteObject(char code, IByteObject o)` <br> |
| `IByteObject` | JBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned if a null argument is passed in. |
| `IByteObject` | AbstractJBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned if a null argument is passed in. |

| Modifier and Type | Method and Description |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-(jremote---api)) with parameters of type [IByteObject](./../../ibyteobject-(jremote-api) "interface in com.jbase.jremote.io")  | `protected IByteObject`<br> | AbstractJBaseObjectReader.`readByteObject(char code, IByteObject o)`  |
| `IByteObject` | JBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned if a null argument is passed in. |
| `IByteObject` | AbstractJBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned if a null argument is passed in. |
| `void` | JBaseObjectWriter.`writeObject(IByteObject o)`  |
| `void` | AbstractJBaseObjectWriter.`writeObject(IByteObject o)`  |

Back to [jRemote API](./../../README.md)
  
<PageFooter />
