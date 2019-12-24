# JDefaultIOHandler (jrclient   API)

**Created At:** 9/25/2017 11:28:48 AM  
**Updated At:** 9/20/2018 1:03:54 PM  
**Original Doc:** [com_jbase_jrcs_jdefaultiohandler](https://docs.jbase.com/jrcs/com_jbase_jrcs_jdefaultiohandler)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JDefaultIOHandler (jrclient   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;


## Class JDefaultIOHandler

com.jbase.jrcs.JDefaultIOHandlerAll Implemented Interfaces:[JIOHandler](./../jiohandler-%28jrclient-api%29 "interface in com.jbase.jrcs")


```
public final class JDefaultIOHandler
extends Object
implements JIOHandler
```

Default implementation of jRCS I/O handler



# 

# Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| protected` `<br> | JDefaultIOHandler()<br> |






# Method Summary


| Modifier and Type<br> | Method and Description<br> |
| --- | --- |
| String<br> | getTermType()<br> |
| String<br> | input(int maxChars)<br> |
| void<br> | output(String characters)<br> |


### 






## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### 




# Constructor Detail

#### **JDefaultIOHandler**

```
protected JDefaultIOHandler()
```

### 


### 




# Method Detail

#### **getTermType**

```
public String getTermType() 
```

Specified by: `getTermType` in interface `JIOHandler `

#### 


#### 


#### **input**

```
public String input(int maxChars) 
```

Specified by: `input` in interface `JIOHandler `

#### 


#### 


#### **output**

```
public void output(String characters) 
```

Specified by: `output` in interface `JIOHandler `


