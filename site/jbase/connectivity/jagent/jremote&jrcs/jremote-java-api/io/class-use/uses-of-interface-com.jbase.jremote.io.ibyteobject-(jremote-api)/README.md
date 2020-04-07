# Uses of Interface com.jbase.jremote.io.IByteObject (jremote API)

<PageHeader />

## Uses of Interface
com.jbase.jremote.io.IByteObject

| Package<br> | Description<br> |
| --- | --- |
 Packages that use [IByteObject](./../../ibyteobject-%28jremote-api%29 "interface in com.jbase.jremote.io")  | com.jbase.jremote<br> |  <br> |
| com.jbase.jremote.io<br> |  <br> |





### Uses of [IByteObject](./../../ibyteobject-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote](./../../../../../jremote-api)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Classes in [com.jbase.jremote](./../../../../../jremote-api) that implement [IByteObject](./../../ibyteobject-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `class `<br> | `JDynArray`<br>The JDynArray is a jBASE type that implements a dynamic string array where attribute, value, and subvalue delimiters mark the array indices.<br> |






### Uses of [IByteObject](./../../ibyteobject-%28jremote-api%29 "interface in com.jbase.jremote.io") in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29)


| Modifier and Type<br> | Class and Description<br> |
| --- | --- |
 Classes in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29) that implement [IByteObject](./../../ibyteobject-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `class `<br> | `ByteObject` <br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29) that return [IByteObject](./../../ibyteobject-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `protected IByteObject`<br> | AbstractJBaseObjectReader.`readByteObject(char code, IByteObject o)` <br> |
| `IByteObject`<br> | JBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned if a null argument is passed in.<br> |
| `IByteObject`<br> | AbstractJBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned if a null argument is passed in.<br> |



| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
 Methods in [com.jbase.jremote.io](./../../com.jbase.jremote.io-%28jremote---api%29) with parameters of type [IByteObject](./../../ibyteobject-%28jremote-api%29 "interface in com.jbase.jremote.io")  | `protected IByteObject`<br> | AbstractJBaseObjectReader.`readByteObject(char code, IByteObject o)` <br> |
| `IByteObject`<br> | JBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new IByteObject should be created and returned if a null argument is passed in.<br> |
| `IByteObject`<br> | AbstractJBaseObjectReader.`readObject(IByteObject o)`<br>Reads/deserializes next byte object, a new ByteObject will be created and returned if a null argument is passed in.<br> |
| `void`<br> | JBaseObjectWriter.`writeObject(IByteObject o)` <br> |
| `void`<br> | AbstractJBaseObjectWriter.`writeObject(IByteObject o)` <br> |



Back to [jREMOTE API](com_jbase_jremote_package-summary)


