# StatementID (jbasejdbc API)

**Created At:** 9/25/2017 11:05:08 AM  
**Updated At:** 8/17/2018 2:25:53 AM  
**Original Doc:** [com_jbase_jdbc_protocol_statementid](https://docs.jbase.com/39240-protocol/com_jbase_jdbc_protocol_statementid)  
**Original ID:** 278008  
**Internal:** Yes  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="StatementID (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&lt;div&gt;JavaScript is disabled on your browser.&lt;/div&gt;


# Class StatementID

```
public class StatementID
extends Object
```

An abstraction of the statement ID. For now this is just an int. On the C++ side it is unsigned but that will just mean that on Java is is sometimes negative. Will still uniquely identify a statement.

# 


# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>StatementID()<br> |
| <br>StatementID(int statementID)<br> |




# 


# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>int<br> | <br>getId()<br> |
| <br>void<br> | <br>`setId(int statementID)`<br> |




### 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

# Constructor Detail



#### **StatementID**

```
public StatementID()
```








#### **StatementID**

```
public StatementID(int statementID)
```



# 

# 


# Method Detail



#### **getId**

```
public int getId()
```






#### **setId**

```
public void setId(int statementID)
```


