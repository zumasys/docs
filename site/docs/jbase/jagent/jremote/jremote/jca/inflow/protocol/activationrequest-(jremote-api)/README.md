# ActivationRequest (jremote API)

**Created At:** 9/25/2017 12:01:54 PM  
**Updated At:** 4/5/2018 9:48:28 PM  
**Original Doc:** [com_jbase_jremote_jca_inflow_protocol_activationrequest](https://docs.jbase.com/39264-protocol/com_jbase_jremote_jca_inflow_protocol_activationrequest)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="ActivationRequest (jremote   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10,"i11":10,"i12":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&amp;amp;lt;div&amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;lt;/div&amp;amp;gt;


## Class ActivationRequest

All Implemented Interfaces:[JBaseSerializable](/39250-io/com_jbase_jremote_io_jbaseserializable "interface in com.jbase.jremote.io"), [InboundRequest](/39264-protocol/com_jbase_jremote_jca_inflow_protocol_inboundrequest "interface in com.jbase.jremote.jca.inflow.protocol"), Runnable, javax.resource.spi.work.Work
* * *


```
public class ActivationRequest
extends Object
implements InboundRequest, javax.resource.spi.work.Work
```

### Nested Class Summary

- Nested classes/interfaces inherited from interface com.jbase.jremote.io.JBaseSerializable
    - `JBaseSerializable.TYPE`






### Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| ` `<br> | `ActivationRequest()`<br>constructor required for object creation<br> |
| `protected `<br> | `ActivationRequest(String activation, byte[] message, String transactionId)`<br>constructor required for tests<br> |






### Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| `JBaseSerializable`<br> | `execute(ClientHandle handle, RequestHandler handler)` <br> |
| `String`<br> | `getActivation()` <br> |
| `byte[]`<br> | `getMessage()` <br> |
| `String`<br> | `getTransactionId()` <br> |
| `int`<br> | `getType()` <br> |
| `int`<br> | `getVersion()` <br> |
| `protected javax.resource.spi.work.WorkListener`<br> | `getWorkListener()` <br> |
| `void`<br> | `notifyWorkScheduled()` <br> |
| `void`<br> | `readObject(JBaseObjectReader reader, int version)` <br> |
| `void`<br> | `release()` <br> |
| `void`<br> | `run()` <br> |
| `void`<br> | `sendReply()` <br> |
| `void`<br> | `writeObject(JBaseObjectWriter writer, int version)` <br> |


- Methods inherited from class java.lang.Object
    - `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### Constructor Detail

#### ActivationRequest

```
public ActivationRequest()
```

constructor required for object creation

#### 

#### 


#### ActivationRequest

```
protected ActivationRequest(String activation,
                            byte[] message,
                            String transactionId)
```

constructor required for tests





### Method Detail

#### getType

```
public int getType()
```
Specified by:`getType` in interface `JBaseSerializable`Returns:type id of the objects, used during the serialization
#### 

#### 


#### readObject

```
public void readObject(JBaseObjectReader reader,
                       int version)
                throws IOException,
                       ClassNotFoundException
```
Specified by:`readObject` in interface `JBaseSerializable`Throws:`IOException``ClassNotFoundException`
#### 

#### 


#### writeObject

```
public void writeObject(JBaseObjectWriter writer,
                        int version)
                 throws IOException
```
Specified by:`writeObject` in interface `JBaseSerializable`Throws:`IOException`
#### 

#### 


#### getActivation

```
public String getActivation()
```

#### 

#### 


#### getMessage

```
public byte[] getMessage()
```

#### 

#### 


#### getTransactionId

```
public String getTransactionId()
```
Specified by:`getTransactionId` in interface `InboundRequest`
#### 

#### 


#### execute

```
public JBaseSerializable execute(ClientHandle handle,
                                 RequestHandler handler)
```
Specified by:`execute` in interface `InboundRequest`
#### 

#### 


#### getWorkListener

```
protected javax.resource.spi.work.WorkListener getWorkListener()
```

#### 

#### 


#### release

```
public void release()
```
Specified by:`release` in interface `javax.resource.spi.work.Work`
#### 

#### 


#### run

```
public void run()
```
Specified by:`run` in interface `Runnable`
#### 

#### 


#### notifyWorkScheduled

```
public void notifyWorkScheduled()
```

#### 

#### 


#### sendReply

```
public void sendReply()
```

#### 

#### 


#### getVersion

```
public int getVersion()
```
Specified by:`getVersion` in interface `JBaseSerializable`

Back to [jREMOTE API](com_jbase_jremote_package-summary)
