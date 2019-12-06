# JBaseDBError (jbasejdbc   API)

**Created At:** 9/25/2017 10:42:17 AM  
**Updated At:** 2/15/2018 8:02:39 AM  

<!--<br>    try {<br>        if (location.href.indexOf('is-external=true') == -1) {<br>            parent.document.title="JBaseDBError (jbasejdbc   API)";<br>        }<br>    }<br>    catch(err) {<br>    }<br>//--><br>var methods = {"i0":9,"i1":9,"i2":9};<br>var tabs = {65535:["t0","All Methods"],1:["t1","Static Methods"],8:["t4","Concrete Methods"]};<br>var altColor = "altColor";<br>var rowColor = "rowColor";<br>var tableTab = "tableTab";<br>var activeTableTab = "activeTableTab";
JavaScript is disabled on your browser.

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39230-driver/com_jbase_jdbc_driver_package-summary)
- Class
- [Use](/39231-class-use/com_jbase_jdbc_driver_class-use_JBaseDBError)
- [Tree](/39230-driver/com_jbase_jdbc_driver_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- Prev Class
- [Next Class](/39230-driver/com_jbase_jdbc_driver_JBaseJDBCDriver "class in com.jbase.jdbc.driver")


- [Frames](../../../../index.html?com/jbase/jdbc/driver//39230-driver/com_jbase_jdbc_driver_JBaseDBError)
- [No Frames](/39230-driver/com_jbase_jdbc_driver_JBaseDBError)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_top");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

com.jbase.jdbc.driver

## Class JBaseDBError

- [java.lang.Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
- - com.jbase.jdbc.driver.JBaseDBError


- * * *


```
public class JBaseDBError
extends Object
```

- - ### Constructor Summary


Constructors | Constructor and Description |
| --- |
| `JBaseDBError()`  |


    - ### Method Summary


All Methods [Static Methods](javascript:show%281%29;) [Concrete Methods](javascript:show%288%29;) | Modifier and Type | Method and Description |
| --- | --- |
| `static void` | `throwInvalidColumnIndex(int index)`  |
| `static void` | `throwSQLException(Exception e,<br>                 String msg)`  |
| `static void` | `throwSQLException(String errcode)`  |


        - ### Methods inherited from class java.lang.[Object](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Object.html?is-external=true "class or interface in java.lang")
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- - ### Constructor Detail

        - #### JBaseDBError

```
public JBaseDBError()
```


    - ### Method Detail

        - #### throwSQLException

```
public static void throwSQLException(String errcode)
                              throws SQLException
```
Throws:`SQLException`


        - #### throwSQLException

```
public static void throwSQLException(Exception e,
                                     String msg)
                              throws SQLException
```
Throws:`SQLException`


        - #### throwInvalidColumnIndex

```
public static void throwInvalidColumnIndex(int index)
                                    throws SQLException
```
Throws:`SQLException`

Skip navigation links

- [Overview](../../../../overview-summary.html)
- [Package](/39230-driver/com_jbase_jdbc_driver_package-summary)
- Class
- [Use](/39231-class-use/com_jbase_jdbc_driver_class-use_JBaseDBError)
- [Tree](/39230-driver/com_jbase_jdbc_driver_package-tree)
- [Deprecated](../../../../deprecated-list.html)
- [Help](../../../../help-doc.html)


jbasejdbc <br>

- Prev Class
- [Next Class](/39230-driver/com_jbase_jdbc_driver_JBaseJDBCDriver "class in com.jbase.jdbc.driver")


- [Frames](../../../../index.html?com/jbase/jdbc/driver//39230-driver/com_jbase_jdbc_driver_JBaseDBError)
- [No Frames](/39230-driver/com_jbase_jdbc_driver_JBaseDBError)


- [All Classes](../../../../allclasses-noframe.html)


<!--<br>  allClassesLink = document.getElementById("allclasses\_navbar\_bottom");<br>  if(window==top) {<br>    allClassesLink.style.display = "block";<br>  }<br>  else {<br>    allClassesLink.style.display = "none";<br>  }<br>  //-->

- Summary:
- Nested |
- Field |
- Constr |
- Method


- Detail:
- Field |
- Constr |
- Method

*Copyright © 2017 jBASE, Inc.. All Rights Reserved.*
