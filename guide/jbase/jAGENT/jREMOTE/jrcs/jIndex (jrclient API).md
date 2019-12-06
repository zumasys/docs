# jIndex (jrclient API)

**Created At:** 9/25/2017 11:29:21 AM  
**Updated At:** 9/20/2018 1:06:14 PM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="JIndex (jrclient   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10,"i2":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript><div>JavaScript is disabled on your browser.</div></noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

# Class jIndex
com.jbase.jrcs.JIndex

```
public final class JIndex
extends Object
```

Represents a jBASE index variable
<dl><dt><br></dt></dl>
# <!--   -->

# Constructor Summary


| Modifier<br> | Constructor and Description<br> |
| --- | --- |
| protected<br> | JIndex(int handle, [JConnection](com_jbase_jrcs_jconnection "class in com.jbase.jrcs") conn)<br> |


### 


# Method Summary


| Modifier and Type<br> | Method<br> | Description<br> |
| --- | --- | --- |
| void<br> | close() | <br>Closes the index and releases the server-side handle<br> |
| protected void<br> | finalize()<br> | <br> |
| [JSelectList](com_jbase_jrcs_jselectlist "class in com.jbase.jrcs")<br> | select() | <br>Generates a select list from this index variable<br> |


<!--   -->

### 


## Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

### 


<!--   -->

# Constructor Detail
<!--   -->
#### **JIndex**

```
protected JIndex(int handle, JConnection conn)
```
<!-- ============ METHOD DETAIL ========== -->
<!--   -->

### 


# Method Detail
<!--   -->
#### **select**

```
public JSelectList select()
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Generates a select list from this index variable.

Returns: JSelectList representing the resulting select list.

Throws:` JException`




<!--   -->
#### **close**

```
public void close() 
```

throws [JException](com_jbase_jrcs_jexception "class in com.jbase.jrcs")

Closes the index and releases the server-side handle.

Throws: `JException `




<!--   -->
#### **finalize**

```
protected void finalize() 
```

Overrides: `finalize` in class `Object`
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
