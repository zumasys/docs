# Uses of Interface com.jbase.jremote.io.IByteObject (jremote API)

**Created At:** 9/25/2017 11:44:03 AM  
**Updated At:** 4/5/2018 8:47:53 PM  
**Original Doc:** [com_jbase_jremote_io_class-use_ibyteobject](https://docs.jbase.com/39253-class-use/com_jbase_jremote_io_class-use_ibyteobject)  
**Original ID:** 278093  
**Internal:** No  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="Uses of Interface com.jbase.jremote.io.IByteObject (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//-->
JavaScript is disabled on your browser.



<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

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


