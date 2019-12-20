# JExecuteResults

**Created At:** 9/13/2017 8:05:38 PM  
**Updated At:** 9/13/2017 8:06:00 PM  
**Original Doc:** [jexecuteresults](https://docs.jbase.com/39719-archive/jexecuteresults)  


## Class JExecuteResults

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jremote.io.Response](../../../com/jbase/jremote/io/Response.html "class in com.jbase.jremote.io")
    - - [com.jbase.jremote.protocol.JRemoteResponse](../../../com/jbase/jremote/protocol/JRemoteResponse.html "class in com.jbase.jremote.protocol")
        - - com.jbase.jremote.JExecuteResults
- All Implemented Interfaces:[JBaseSerializable](../../../com/jbase/jremote/io/JBaseSerializable.html "interface in com.jbase.jremote.io")
```
public class JExecuteResults
extends JRemoteResponse
```

The results from an executed command.Author:aphetheanSee Also:[`JConnection.execute(java.lang.String)`](../../../com/jbase/jremote/JConnection.html#execute-java.lang.String-)
- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.jremote.io.[JBaseSerializable](../../../com/jbase/jremote/io/JBaseSerializable.html "interface in com.jbase.jremote.io")
`JBaseSerializable.TYPE`
    - ### Constructor Summary


| Constructor and Description |
| --- |
Constructors | `JExecuteResults()`  |
| `JExecuteResults(JSelectListProt selectListProt, JDynArray capturingVar, JDynArray settingVar)`  |
    - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
All Methods [Instance Methods](javascript%3Ashow%282%29;) [Concrete Methods](javascript%3Ashow%288%29;) | `JDynArray` | `getCapturingVar()`  |
| `JCursor` | `getCursor()`  |
| `JSelectList` | `getReturnList()`  |
| `JDynArray` | `getSettingVar()`  |
| `int` | `getType()`  |
| `int` | `getVersion()`  |
| `void` | `readObject(JBaseObjectReader reader, int version)`  |
| `void` | `writeObject(JBaseObjectWriter writer, int version)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`
- - ### Constructor Detail

        - #### JExecuteResults

```
public JExecuteResults()
```
        - #### JExecuteResults

```
public JExecuteResults(JSelectListProt selectListProt,                        JDynArray capturingVar,                        JDynArray settingVar)
```
    - ### Method Detail

        - #### getType

```
public int getType()
```
Returns:type id of the objects, used during the serialization
        - #### getVersion

```
public int getVersion()
```
Specified by:`getVersion` in interface `JBaseSerializable`Overrides:`getVersion` in class `JRemoteResponse`
        - #### writeObject

```
public void writeObject(JBaseObjectWriter writer,                         int version)                  throws IOException
```
Throws:`IOException`
        - #### readObject

```
public void readObject(JBaseObjectReader reader,                        int version)                 throws IOException,                        ClassNotFoundException
```
Throws:`IOException``ClassNotFoundException`
        - #### getReturnList

```
public JSelectList getReturnList()
```
        - #### getCursor

```
public JCursor getCursor()
```
        - #### getSettingVar

```
public JDynArray getSettingVar()
```
        - #### getCapturingVar

```
public JDynArray getCapturingVar()
```

