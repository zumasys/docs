# JCommon (jrclient API)

**Created At:** 9/25/2017 11:28:29 AM  
**Updated At:** 9/20/2018 1:03:05 PM  
**Original Doc:** [com_jbase_jrcs_jcommon](https://docs.jbase.com/jrcs/com_jbase_jrcs_jcommon)  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JCommon (jrclient   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10};<br>var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;


# Class JCommon

com.jbase.jrcs.JCommon

```
public final class JCommon
extends Object
```

Represents a jBASE common block



# Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| protected<br> | JCommon(int handle, int numvars, [JConnection](./../jconnection-%28jrclient-api%29 "class in com.jbase.jrcs") conn)<br> |




### 




# Method Summary


| Modifier and Type<br> | Method<br> |  Description<br> |
| --- | --- | --- |
| void<br> | close()<br> | <br>Closes the object and releases the server-side handle<br> |
| protected void<br> | finalize()<br> | <br> |
| [JDynArray](./../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs")<br> | getDA(int index)<br> | Retrieves a dynamic array from a specific position in a common block<br> |
| [JFile](./../jfile-%28jrclient-api%29 "class in com.jbase.jrcs")<br> | getFile(int index)<br> | Retrieves a file variable from a specific position in a common block<br> |
| void<br> | setDA(int index, [JDynArray](./../jdynarray-%28jrclient---api%29 "class in com.jbase.jrcs") dynArray)<br> | Stores a dynamic array into a specific position in a common block<br> |
| void<br> | setFile(int index, [JFile](./../jfile-%28jrclient-api%29 "class in com.jbase.jrcs") file)<br> | Stores a file variable into a specific position in a common block<br> |






### 


## Methods inherited from class java.lang.Object
`clone, equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### 


# Constructor Detail

#### JCommon

```
protected JCommon(int handle, int numvars, JConnection conn)
```







### 


# Method Detail

#### **getDA**

```
public JDynArray getDA(int index) 
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Retrieves a dynamic array from a specific position in a common block

Parameters:

`index` - Position from which to retrieve a dynamic array

Returns:  Dynamic array retrieved from the common block.

Throws:`JException `





#### **getFile**

```
public JFile getFile(int index)                  
```

throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Retrieves a file variable from a specific position in a common block.

Parameters:

`index` - Position from which to retrieve a file variable.

Returns: File variable retrieved from the common block.

Throws: `JException`
#### 


#### 


#### **setDA**

```
public void setDA(int index, JDynArray dynArray) 
```
throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Stores a dynamic array into a specific position in a common block.

Parameters: `        `

`index` - Position in which to store the dynamic array`        `

`dynArray` - Dynamic array to store.

Throws: `JException`



#### **setFile**

```
public void setFile(int index, JFile file)
```
throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Stores a file variable into a specific position in a common block.

Parameters:

`index` - Position in which to store the file variable

`file` - File variable to store

Throws: `JException `





#### **close**

```
public void close()
```
throws [JException](./../jexception-%28jrclient-api%29 "class in com.jbase.jrcs")

Closes the object and releases the server-side handle.

Throws: `JException`



#### **finalize**

```
protected void finalize()   
```

Overides: finalize in class [Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")


