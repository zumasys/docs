# JExecuteResults (jremote API)

**Created At:** 9/25/2017 12:09:26 PM  
**Updated At:** 12/24/2018 7:50:03 PM  
**Original Doc:** [com_jbase_jremote_jexecuteresults](https://docs.jbase.com/39248-jremote/com_jbase_jremote_jexecuteresults)  
**Original ID:** 278300  
**Internal:** No  


JavaScript is disabled on your browser.



## Class JExecuteResults

All Implemented Interfaces:[JBaseSerializable](./../io/jbaseserializable-%28jremote-api%29 "interface in com.jbase.jremote.io")
* * *


```
public class JExecuteResults
extends JRemoteResponse
```

The results from an executed command.

See Also:`JConnection.execute(java.lang.String)`

### Nested Class Summary



- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`








### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JExecuteResults()` <br> |
| `JExecuteResults(JSelectListProt selectListProt, JDynArray capturingVar, JDynArray settingVar)` <br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JDynArray`<br> | `getCapturingVar()` <br> |
| `JCursor`<br> | `getCursor()` <br> |
| `JSelectList`<br> | `getReturnList()` <br> |
| `JDynArray`<br> | `getSettingVar()` <br> |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail



#### JExecuteResults

```
public JExecuteResults()
```

#### JExecuteResults

```
public JExecuteResults(JSelectListProt selectListProt,
                       JDynArray capturingVar,
                       JDynArray settingVar)
```





### Method Detail

#### getType

```
public int getType()
```
Returns:type id of the objects, used during the serialization
#### getVersion

```
public int getVersion()
```
Specified by:`getVersion` in interface `JBaseSerializable`Overrides:`getVersion` in class `JRemoteResponse`
#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Throws:`IOException`
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Throws:`IOException``ClassNotFoundException`
#### getReturnList

```
public JSelectList getReturnList()
```



#### getCursor

```
public JCursor getCursor()
```



#### getSettingVar

```
public JDynArray getSettingVar()
```



#### getCapturingVar

```
public JDynArray getCapturingVar()
```





Back to [jREMOTE API](com_jbase_jremote_package-summary)
