# 
JSelectList (jrclient   API)

**Created At:** 9/25/2017 11:29:32 AM  
**Updated At:** 9/20/2018 1:06:51 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JSelectList (jrclient   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10,"i3":10,"i4":10,"i5":10,"i6":10,"i7":10,"i8":10,"i9":10,"i10":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript>&amp;amp;amp;amp;lt;div&amp;amp;amp;amp;gt;JavaScript is disabled on your browser.&amp;amp;amp;amp;lt;/div&amp;amp;amp;amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

## Class JSelectList
com.jbase.jrcs.JSelectList

```
public final class JSelectList
extends Object
```

Represents a jBASE select list variable
<dl><h2><br>Constructor Summary</h2></dl>

| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| protected<br> | JSelectList(int handle, boolean indexVar, [JConnection](com_jbase_jrcs_jconnection "class in com.jbase.jrcs") conn)<br> |



<!--   -->

## Method Summary


| Modifier and Type<br> | Method<br> | Description<br> |
| --- | --- | --- |
| boolean<br> | bol()<br> | <br>Indicates whether the select list is at its beginning<br> |
| void<br> | close()<br> | <br>Closes the select list and releases the server-side handle<br> |
| boolean<br> | eol()<br> | <br>Indicates whether the select list is at its end<br> |
| protected void<br> | finalize()<br> | <br> |
| protected int<br> | getHandle()<br> | <br> |
| String<br> | getIndexKey()<br> | <br>Returns the index key<br> |
| String<br> | getRecordKey()<br> | <br>Retrieves the record key<br> |
| int<br> | getVMCount()<br> | <br>Retrieves the multi-value index for the current key<br> |
| boolean<br> | isIndex()<br> | <br>Indicates whether this select list was generated from a jBASE index<br> |
| String<br> | readNext()<br> | <br>Reads the next key from the select list<br> |
| void<br> | saveList(String listName)<br> | <br>Saves the list under the specified name in a work file.<br> |


### 


<!--   -->

## Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!--   -->

## Constructor Detail
<!--   -->
#### **JSelectList**

```
protected JSelectList(int handle, boolean indexVar, JConnection conn)
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

# 


## Method Detail
<!--   -->
#### **bol**

```
public boolean bol() 
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Indicates whether the select list is at its beginning.

Returns: true if the select list is at the beginning.

Throws: `JException `
<!--   -->
#### 


#### 


#### **eol**

```
public boolean eol() 
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Indicates whether the select list is at its end.

Returns: true if the select list is at its end.

Throws: `JException `




<!--   -->
#### **getIndexKey**

```
public String getIndexKey() 
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Returns: Index key

Throws: `JException `
<!--   -->
#### 


#### 


#### **isIndex**

```
public boolean isIndex() 
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Indicates whether this select list was generated from a jBASE index.

Returns: true if the select list was generated from an index variable.

Throws: `JException `
<!--   -->
#### 


#### 


#### **readNext**

```
public String readNext() 
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Reads the next key from the select list.

Returns: Next key read or blank ("") if the list is exhausted.

Throws: `JException `
<!--   -->
#### 


#### 


#### **getRecordKey**

```
public String getRecordKey()  
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Retrieves the record key.

Returns: Record key.

Throws: `JException `
<!--   -->
#### 


#### 


#### **saveList**

```
public void saveList(String listName)  
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Saves the list under the specified name in a work file.

Parameters:

`listName` - Name to save the list as.

Throws: `JException `

#### 


#### 


#### **getVMCount**

```
public int getVMCount()
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Retrieves the multi-value index for the current key.

Returns: Multi-value index.

Throws: `JException `
<!--   -->
#### 


#### 


#### **close**

```
public void close()
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Closes the select list and releases the server-side handle

Throws: `JException `

#### 


#### 


#### **getHandle**

```
protected int getHandle()
```
<!--   -->
#### 


#### 


#### **finalize**

```
protected void finalize() 
```

Overrides: `finalize` in class `Object`
<!-- ========= END OF CLASS DATA ========= -->

