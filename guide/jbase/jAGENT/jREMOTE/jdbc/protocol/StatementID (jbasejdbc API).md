# StatementID (jbasejdbc API)

**Created At:** 9/25/2017 11:05:08 AM  
**Updated At:** 8/17/2018 2:25:53 AM  

<script type="text/javascript"><!--
    try {
        if (location.href.indexOf('is-external=true') == -1) {
            parent.document.title="StatementID (jbasejdbc   API)";
        }
    }
    catch(err) {
    }
//-->
var methods = {"i0":10,"i1":10};
var tabs = {65535:["t0","All Methods"],2:["t2","Instance Methods"],8:["t4","Concrete Methods"]};
var altColor = "altColor";
var rowColor = "rowColor";
var tableTab = "tableTab";
var activeTableTab = "activeTableTab";</script><noscript>&amp;lt;div&amp;gt;JavaScript is disabled on your browser.&amp;lt;/div&amp;gt;</noscript><!-- ========= START OF TOP NAVBAR ======= -->
<!--   -->

# Class StatementID

```
public class StatementID
extends Object
```

An abstraction of the statement ID. For now this is just an int. On the C++ side it is unsigned but that will just mean that on Java is is sometimes negative. Will still uniquely identify a statement.

<!-- ======== CONSTRUCTOR SUMMARY ======== -->

<!--   -->

# 


# Constructor Summary


| <br>Constructor and Description<br> |
| --- |
| <br>StatementID()<br> |
| <br>StatementID(int statementID)<br> |



<!-- ========== METHOD SUMMARY =========== --><!--   -->
# 


# Method Summary


| <br>Modifier and Type<br> | <br>Method and Description<br> |
| --- | --- |
| <br>int<br> | <br>getId()<br> |
| <br>void<br> | <br>`setId(int statementID)`<br> |


<!--   -->

### 


## Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

<!-- ========= CONSTRUCTOR DETAIL ======== -->



# <!--   -->Constructor Detail
<!--   -->


#### **StatementID**

```
public StatementID()
```





<!--   -->


#### **StatementID**

```
public StatementID(int statementID)
```


<!-- ============ METHOD DETAIL ========== -->
# <!--   -->

# 


# Method Detail
<!--   -->


#### **getId**

```
public int getId()
```



<!--   -->


#### **setId**

```
public void setId(int statementID)
```
<!-- ========= END OF CLASS DATA ========= --><!-- ======= START OF BOTTOM NAVBAR ====== -->
<!--   -->
