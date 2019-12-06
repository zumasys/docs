# JExecuteResults

**Created At:** 9/13/2017 8:05:38 PM  
**Updated At:** 9/13/2017 8:06:00 PM  


## Class JExecuteResults

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - [com.jbase.jremote.io.Response](../../../com/jbase/jremote/io/Response.html "class in com.jbase.jremote.io")
    - - [com.jbase.jremote.protocol.JRemoteResponse](../../../com/jbase/jremote/protocol/JRemoteResponse.html "class in com.jbase.jremote.protocol")
        - - com.jbase.jremote.JExecuteResults
- <dl><dt>All Implemented Interfaces:</dt><dd><a href="../../../com/jbase/jremote/io/JBaseSerializable.html" title="interface in com.jbase.jremote.io">JBaseSerializable</a></dd></dl>
```
public class JExecuteResults
extends JRemoteResponse
```

The results from an executed command.<dl><dt>Author:</dt><dd>aphethean</dd><dt>See Also:</dt><dd><a href="../../../com/jbase/jremote/JConnection.html#execute-java.lang.String-"><code>JConnection.execute(java.lang.String)</code></a></dd></dl>
- - ### Nested Class Summary

        - ### Nested classes/interfaces inherited from interface com.jbase.jremote.io.[JBaseSerializable](../../../com/jbase/jremote/io/JBaseSerializable.html "interface in com.jbase.jremote.io")
`JBaseSerializable.TYPE`
    - ### Constructor Summary


| Constructor and Description |
| --- |
<caption>Constructors </caption>| `JExecuteResults()`  |
| `JExecuteResults(JSelectListProt selectListProt, JDynArray capturingVar, JDynArray settingVar)`  |
    - ### Method Summary


| Modifier and Type | Method and Description |
| --- | --- |
<caption>All Methods <a href="javascript%3Ashow(2);">Instance Methods</a> <a href="javascript%3Ashow(8);">Concrete Methods</a>&nbsp;</caption>| `JDynArray` | `getCapturingVar()`  |
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
<dl><dt>Returns:</dt><dd>type id of the objects, used during the serialization</dd></dl>
        - #### getVersion

```
public int getVersion()
```
<dl><dt>Specified by:</dt><dd><code><a href="../../../com/jbase/jremote/io/JBaseSerializable.html#getVersion--">getVersion</a></code> in interface <code><a href="../../../com/jbase/jremote/io/JBaseSerializable.html" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt>Overrides:</dt><dd><code><a href="../../../com/jbase/jremote/protocol/JRemoteResponse.html#getVersion--">getVersion</a></code> in class <code><a href="../../../com/jbase/jremote/protocol/JRemoteResponse.html" title="class in com.jbase.jremote.protocol">JRemoteResponse</a></code></dd></dl>
        - #### writeObject

```
public void writeObject(JBaseObjectWriter writer,                         int version)                  throws IOException
```
<dl><dt>Throws:</dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd></dl>
        - #### readObject

```
public void readObject(JBaseObjectReader reader,                        int version)                 throws IOException,                        ClassNotFoundException
```
<dl><dt>Throws:</dt><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/io/IOException.html?is-external=true" title="class or interface in java.io">IOException</a></code></dd><dd><code><a href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/ClassNotFoundException.html?is-external=true" title="class or interface in java.lang">ClassNotFoundException</a></code></dd></dl>
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

