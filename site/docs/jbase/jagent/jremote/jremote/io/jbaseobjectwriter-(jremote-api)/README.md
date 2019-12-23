# JBaseObjectWriter (jremote API)

**Created At:** 9/25/2017 11:51:39 AM  
**Updated At:** 12/24/2018 8:43:31 PM  
**Original Doc:** [com_jbase_jremote_io_jbaseobjectwriter](https://docs.jbase.com/39250-io/com_jbase_jremote_io_jbaseobjectwriter)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JBaseObjectWriter (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":6,"i1":6,"i2":6,"i3":6,"i4":6,"i5":6,"i6":6};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],4:["t3","Abstract Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.



## Interface JBaseObjectWriter

All Known Implementing Classes:[AbstractJBaseObjectWriter](./../abstractjbaseobjectwriter-%28jremote-api%29 "class in com.jbase.jremote.io"), [IOJBaseObjectWriter](./../iojbaseobjectwriter-%28jremote-api%29 "class in com.jbase.jremote.io"), [NIOJBaseObjectWriter](./../niojbaseobjectwriter-%28jremote-api%29 "class in com.jbase.jremote.io")
* * *


```
public interface JBaseObjectWriter
```

Serializes objects to jBASE JDBC format.

### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `void`<br> | `close()` <br> |
| `void`<br> | `writeInt(int i)` <br> |
| `void`<br> | `writeObject(byte[] o)` <br> |
| `void`<br> | `writeObject(IByteObject o)` <br> |
| `void`<br> | `writeObject(JBaseSerializable o)` <br> |
| `void`<br> | `writeObject(String o)` <br> |
| `void`<br> | `writeRootObject(JBaseSerializable o)` <br> |

### Method Detail

#### writeInt

```
void writeInt(int i)
       throws IOException
```
Throws:`IOException`
#### 


#### writeObject

```
void writeObject(JBaseSerializable o)
          throws IOException
```
Throws:`IOException`
#### 


#### writeObject

```
void writeObject(String o)
          throws IOException
```
Throws:`IOException`
#### 


#### writeObject

```
void writeObject(byte[] o)
          throws IOException
```
Throws:`IOException`
#### 


#### writeObject

```
void writeObject(IByteObject o)
          throws IOException
```
Throws:`IOException`
#### 


#### writeRootObject

```
void writeRootObject(JBaseSerializable o)
              throws IOException
```
Throws:`IOException`
#### 


#### close

```
void close()
    throws IOException
```
Throws:`IOException`

Back to [jREMOTE API](com_jbase_jremote_package-summary)
