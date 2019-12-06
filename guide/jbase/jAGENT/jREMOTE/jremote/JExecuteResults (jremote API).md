# JExecuteResults (jremote API)

**Created At:** 9/25/2017 12:09:26 PM  
**Updated At:** 12/24/2018 7:50:03 PM  

<noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JExecuteResults

<dl><dt>All Implemented Interfaces:</dt><dd><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></dd></dl>
* * *


```
public class JExecuteResults
extends JRemoteResponse
```

The results from an executed command.
<dl><dt><br></dt><dt><span class="seeLabel">See Also:</span></dt><dd><code>JConnection.execute(java.lang.String)</code></dd></dl>

<!--   -->

### Nested Class Summary

<!--   -->

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






<!--   -->

### Constructor Summary


| Constructor and Description<br> |
| --- |
| `JExecuteResults()` <br> |
| `JExecuteResults(JSelectListProt selectListProt, JDynArray capturingVar, JDynArray settingVar)` <br> |




<!--   -->

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


- <!--   -->Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

### Constructor Detail
<!--   -->


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



<!--   -->

### Method Detail
<!--   -->
#### getType

```
public int getType()
```
<dl><dt style="margin-left: 20px;"><span class="returnLabel">Returns:</span></dt><dd style="margin-left: 20px;">type id of the objects, used during the serialization</dd></dl>
#### getVersion

```
public int getVersion()
```
<dl><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Specified by:</span></dt><dd style="margin-left: 20px;"><code>getVersion</code> in interface <code><a href="/39250-io/com_jbase_jremote_io_jbaseserializable" title="interface in com.jbase.jremote.io">JBaseSerializable</a></code></dd><dt style="margin-left: 20px;"><span class="overrideSpecifyLabel">Overrides:</span></dt><dd style="margin-left: 20px;"><code>getVersion</code> in class <code><a href="/39270-protocol/com_jbase_jremote_protocol_jremoteresponse" title="class in com.jbase.jremote.protocol">JRemoteResponse</a></code></dd></dl>
#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>IOException</code></dd></dl>
#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
<dl><dt style="margin-left: 20px;"><span class="throwsLabel">Throws:</span></dt><dd style="margin-left: 20px;"><code>IOException</code></dd><dd style="margin-left: 20px;"><code>ClassNotFoundException</code></dd></dl>
#### getReturnList

```
public JSelectList getReturnList()
```


<!--   -->
#### getCursor

```
public JCursor getCursor()
```


<!--   -->
#### getSettingVar

```
public JDynArray getSettingVar()
```


<!--   -->
#### getCapturingVar

```
public JDynArray getCapturingVar()
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->



Back to [jREMOTE API](com_jbase_jremote_package-summary)
